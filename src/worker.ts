/**
 * Cloudflare Worker: Trailing Slash Rewrite
 *
 * This worker internally rewrites requests to add trailing slashes for route-like URLs
 * without emitting 3xx redirects. This ensures canonical trailing-slash URLs are served
 * at status 200 when accessed without the trailing slash.
 *
 * Rules:
 * - Rewrites pathname to append "/" when needed
 * - Pathname must not be "/" (already has trailing context)
 * - Pathname must not already end with "/"
 * - Pathname must not have a file extension (no dots in final segment)
 * - Preserves querystring and fragment
 * - Does NOT rewrite special files or asset requests
 */

export default {
  async fetch(request: Request, env: unknown, ctx: unknown): Promise<Response> {
    const url = new URL(request.url);
    const pathname = url.pathname;

    // Determine if this pathname needs a trailing slash rewrite
    const needsRewrite =
      pathname !== "/" && // Root already has trailing context
      !pathname.endsWith("/") && // Must not already end with "/"
      !hasFileExtension(pathname); // Must not be a file (no extension)

    if (needsRewrite) {
      // Rewrite the pathname by appending "/"
      url.pathname = pathname + "/";

      // Create a new request with the rewritten pathname
      // This is an internal rewrite, not a redirect
      const rewrittenRequest = new Request(url.toString(), {
        method: request.method,
        headers: request.headers,
        body: request.body,
        cf: (request as any).cf,
      });

      return fetch(rewrittenRequest);
    }

    // No rewrite needed, pass through to origin
    return fetch(request);
  },
};

/**
 * Check if a pathname has a file extension.
 * Returns true if the final segment contains a dot (e.g., .xml, .txt, .js, .css, .png)
 */
function hasFileExtension(pathname: string): boolean {
  // Get the final segment of the path
  const segments = pathname.split("/").filter((s) => s.length > 0);
  if (segments.length === 0) return false;

  const lastSegment = segments[segments.length - 1];
  // Check if the last segment contains a dot (file extension)
  return lastSegment.includes(".");
}
