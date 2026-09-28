# Prisma and Signup Data

The application stores signup records in PostgreSQL through Prisma Accelerate. Production
credentials and records are not included in this repository.

## Data model

```prisma
model User {
  id        String   @id @default(cuid())
  name      String
  email     String   @unique
  consent   Boolean  @default(true)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@map("users")
}
```

## Configuration

Set a Prisma Accelerate URL in `.env`:

```dotenv
DATABASE_URL="prisma://accelerate.prisma-data.net/?api_key=your_api_key"
```

Generate Prisma Client and synchronize a development database:

```bash
pnpm prisma generate
pnpm prisma db push
```

Useful development commands:

```bash
pnpm prisma studio
pnpm prisma format
```

## API

### `POST /api/signup`

Creates a signup after server-side Turnstile verification.

```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "consent": true,
  "turnstileToken": "token-from-the-turnstile-widget"
}
```

The endpoint:

- trims the name;
- normalizes the email address to lowercase;
- requires explicit email consent;
- verifies the Turnstile token before database access; and
- returns `409 Conflict` when the normalized email is already registered.

A successful response returns `201 Created`:

```json
{
  "message": "Successfully registered!",
  "user": {
    "id": "cm...",
    "name": "Jane Doe",
    "email": "jane@example.com"
  }
}
```

### `GET /api/users`

Returns signup records in reverse chronological order. The route is protected by the same HTTP
Basic Authentication as `/dashboard` and sends `Cache-Control: no-store`.

```json
{
  "users": [
    {
      "id": "cm...",
      "name": "Jane Doe",
      "email": "jane@example.com",
      "consent": true,
      "createdAt": "2026-07-23T10:30:00.000Z"
    }
  ]
}
```

See [AUTH_SETUP.md](./AUTH_SETUP.md) for credential setup and verification commands.

## Production notes

- Keep `DATABASE_URL` in the deployment platform's secret store.
- Do not log request bodies or signup records.
- Export or remove production data before decommissioning the database.
- If the archived project is redeployed later, review dependencies and privacy requirements first.
