# Dashboard Authentication Setup

## Overview
The dashboard page (`/dashboard`) is protected with HTTP Basic Authentication using Next.js middleware.

## How It Works

### Middleware (`middleware.ts`)
- Intercepts all requests to `/dashboard` and its sub-paths
- Validates HTTP Basic Authentication credentials
- Works in both development (`pnpm dev`) and production (`pnpm preview`)

### Environment Variables

#### For Next.js Development (`pnpm dev`)
Set in `.env` file:
```bash
BASIC_AUTH_USER=your_username
BASIC_AUTH_PASS=your_password
```

#### For Cloudflare Preview/Production (`pnpm preview`)
Set in `.dev.vars` file (for local preview):
```bash
BASIC_AUTH_USER=myuser
BASIC_AUTH_PASS=mypass
```

For production deployment, set these as secrets in Cloudflare:
```bash
wrangler secret put BASIC_AUTH_USER
wrangler secret put BASIC_AUTH_PASS
```

## Testing

### Local Development
```bash
pnpm dev
```
Navigate to `http://localhost:3000/dashboard` - you'll be prompted for credentials.

### Cloudflare Preview
```bash
pnpm preview
```
Navigate to the preview URL and access `/dashboard` - authentication should work.

### Using curl
```bash
# Without auth (should return 401)
curl -I http://localhost:3000/dashboard

# With auth (should return 200)
curl -u username:password http://localhost:3000/dashboard
```

## Security Notes

1. **Never commit** `.env` or `.dev.vars` files to version control
2. In production, use strong passwords and consider additional security measures
3. HTTPS is strongly recommended for production (Cloudflare provides this automatically)
4. The middleware uses `Buffer` for Base64 decoding (Node.js compatible)

## Troubleshooting

### Authentication not working in preview
- Ensure `.dev.vars` contains `BASIC_AUTH_USER` and `BASIC_AUTH_PASS`
- Rebuild: `pnpm preview`

### Browser keeps asking for credentials
- Clear browser cache/cookies
- Use incognito mode for testing

### 401 Unauthorized error
- Check credentials match environment variables exactly
- Verify no trailing spaces in `.env` or `.dev.vars`
