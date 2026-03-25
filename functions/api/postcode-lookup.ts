// Cloudflare Pages Function – full address lookup using getAddress.io
// Free tier: 20 lookups/day. Set GETADDRESS_API_KEY in Cloudflare Pages env vars.

export const onRequestGet = async (context: any) => {
  const url = new URL(context.request.url);
  const postcode = url.searchParams.get('postcode')?.trim();

  if (!postcode) {
    return Response.json({ error: 'Postcode is required' }, { status: 400 });
  }

  // Basic UK postcode validation
  const postcodeRegex = /^[A-Z]{1,2}\d[A-Z\d]?\s?\d[A-Z]{2}$/i;
  if (!postcodeRegex.test(postcode)) {
    return Response.json({ error: 'Enter a valid UK postcode' }, { status: 400 });
  }

  const apiKey = context.env?.GETADDRESS_API_KEY;
  if (!apiKey) {
    return Response.json(
      { error: 'Address lookup is not configured. Please type your address manually.' },
      { status: 503 }
    );
  }

  try {
    const cleanPostcode = postcode.replace(/\s/g, '').toUpperCase();
    const res = await fetch(
      `https://api.getAddress.io/find/${encodeURIComponent(cleanPostcode)}?api-key=${apiKey}&expand=true`
    );

    if (res.status === 401) {
      return Response.json({ error: 'Address lookup key is invalid.' }, { status: 502 });
    }
    if (res.status === 429) {
      return Response.json(
        { error: 'Daily address lookup limit reached. Please type your address manually.' },
        { status: 429 }
      );
    }
    if (res.status === 404) {
      return Response.json({ error: 'Postcode not found. Please check and try again.' }, { status: 404 });
    }
    if (!res.ok) {
      return Response.json(
        { error: 'Address lookup not available right now. Please type your address manually.' },
        { status: 502 }
      );
    }

    const data: any = await res.json();

    // With expand=true, addresses come as objects with line_1, line_2, etc.
    const addresses: string[] = [];
    if (data.addresses && Array.isArray(data.addresses)) {
      for (const addr of data.addresses) {
        let line = '';
        if (typeof addr === 'string') {
          // Without expand=true, addresses are comma-separated strings
          line = addr
            .split(',')
            .map((p: string) => p.trim())
            .filter(Boolean)
            .join(', ');
        } else if (typeof addr === 'object') {
          // With expand=true, addresses are objects
          const parts = [
            addr.line_1,
            addr.line_2,
            addr.line_3,
            addr.line_4,
            addr.locality,
            addr.town_or_city,
            addr.county,
          ]
            .map((p: string) => (p || '').trim())
            .filter(Boolean);
          line = parts.join(', ');
        }
        if (line) {
          addresses.push(line);
        }
      }
    }

    return Response.json({
      postcode: data.postcode || cleanPostcode,
      addresses,
    });
  } catch (err) {
    return Response.json(
      { error: 'Address lookup not available right now. Please type your address manually.' },
      { status: 502 }
    );
  }
};
