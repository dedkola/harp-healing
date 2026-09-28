# Dashboard Authentication

The Edge-compatible Next.js middleware in `middleware.ts` protects both the dashboard UI and its
data endpoint:

- `/dashboard`
- `/api/users`

Authentication uses HTTP Basic Authentication. It is suitable for this small private
administrative surface only when served over HTTPS.

## Configuration

Set strong, unique credentials in `.env` for local Next.js development:

```dotenv
BASIC_AUTH_USER="your_username"
BASIC_AUTH_PASS="your_strong_password"
```

For a local Cloudflare preview, put the same values in `.dev.vars`. For production, store them as
Worker secrets:

```bash
pnpm wrangler secret put BASIC_AUTH_USER
pnpm wrangler secret put BASIC_AUTH_PASS
```

The middleware has no fallback credentials. If either variable is absent, protected routes fail
closed with `503 Service Unavailable`.

> [!NOTE]
> Next.js 16 deprecates the `middleware.ts` filename in favor of Node-runtime `proxy.ts`.
> OpenNext for Cloudflare 1.20 does not yet support Node middleware, so this project intentionally
> retains the Edge middleware convention to keep its Cloudflare build deployable.

## Verification

Start the app:

```bash
pnpm dev
```

Then test both protected surfaces:

```bash
# Missing credentials: 401
curl -i http://localhost:3000/dashboard
curl -i http://localhost:3000/api/users

# Valid credentials: 200
curl -i -u username:password http://localhost:3000/dashboard
curl -i -u username:password http://localhost:3000/api/users
```

If the environment variables are intentionally unset, the expected status is `503`, not `401`.

## Operational notes

- Never commit `.env` or `.dev.vars`.
- Use HTTPS in every deployed environment; Basic Auth credentials are only encoded, not encrypted.
- Rotate credentials if they may have been exposed.
- The API response uses `Cache-Control: no-store` because it contains names and email addresses.
