// Cloudflare Pages Function – read-only lead data for R2R monitoring
// Protected by a static API key (set LEADS_API_KEY as a CF Pages secret, or use default)

const DEFAULT_KEY = 'd04f2e1031f3db36f075b274c115d0f9d069a72c021d3975';

export const onRequestGet = async (context: any) => {
  const url = new URL(context.request.url);
  const key = url.searchParams.get('key') || context.request.headers.get('x-api-key');
  const validKey = context.env?.LEADS_API_KEY || DEFAULT_KEY;

  if (key !== validKey) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const db = context.env.DB;
  if (!db) {
    return Response.json({ error: 'Database not configured' }, { status: 500 });
  }

  try {
    const yesterday = new Date();
    yesterday.setUTCDate(yesterday.getUTCDate() - 1);
    const yesterdayStr = yesterday.toISOString().slice(0, 10);

    const [countsResult, recentResult] = await Promise.all([
      db.prepare(`
        SELECT
          COUNT(*) as total,
          COUNT(CASE WHEN date(created_at) >= ? THEN 1 END) as yesterday
        FROM leads
      `).bind(yesterdayStr).first(),
      db.prepare(`
        SELECT id, name, phone, postcode, address, service, notes, source, ip_address, user_agent, created_at
        FROM leads
        ORDER BY created_at DESC
        LIMIT 20
      `).all()
    ]);

    return Response.json({
      total: countsResult?.total ?? 0,
      yesterday: countsResult?.yesterday ?? 0,
      records: recentResult?.results ?? []
    }, {
      headers: { 'Cache-Control': 'no-store' }
    });
  } catch (err: any) {
    console.error('Leads read error:', err);
    return Response.json({ error: 'Failed to read leads', total: 0, yesterday: 0, records: [] }, { status: 500 });
  }
};
