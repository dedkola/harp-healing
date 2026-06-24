# Prisma Database Setup - Harp Healing

## Overview

This project now has a complete database integration using Prisma with PostgreSQL (via Prisma Accelerate) to store and manage user signups.

## Database Schema

### User Model

```prisma
model User {
  id        String   @id @default(cuid())
  name      String
  email     String   @unique
  consent   Boolean  @default(true)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

## API Routes

### POST /api/signup

Submit new user registrations from the signup form.

**Request Body:**

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "consent": true
}
```

**Success Response (201):**

```json
{
  "message": "Successfully registered!",
  "user": {
    "id": "cuid123...",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

**Error Response (409 - Duplicate Email):**

```json
{
  "error": "Email already registered"
}
```

### GET /api/users

Retrieve all registered users (for dashboard display).

**Success Response (200):**

```json
{
  "users": [
    {
      "id": "cuid123...",
      "name": "John Doe",
      "email": "john@example.com",
      "consent": true,
      "createdAt": "2025-11-07T10:30:00.000Z"
    }
  ]
}
```

## Pages

### Signup Page (`/signup`)

- **Features:**
  - Name and email input fields
  - Consent checkbox
  - Form validation
  - Success/error message display
  - Automatic form reset on successful submission
- **Client-side:** Form submission using fetch API
- **Backend:** Stores data via `/api/signup` endpoint

### Dashboard Page (`/dashboard`)

- **Features:**
  - Displays all registered users in a table
  - Shows user count
  - Formatted date/time display
  - Consent status badges
  - Responsive design
  - Loading and error states

- **Client-side:** Fetches data on mount using useEffect
- **Backend:** Retrieves data from `/api/users` endpoint

## Database Commands

### Generate Prisma Client

```bash
pnpm prisma generate
```

### Push Schema to Database

```bash
# Make sure DATABASE_URL is set in environment
$env:DATABASE_URL = "your-database-url"
pnpm prisma db push
```

### Open Prisma Studio (Database GUI)

```bash
pnpm prisma studio
```

### View Database Data

```bash
# In PowerShell, set the environment variable first
$env:DATABASE_URL = "your-database-url"
pnpm prisma studio
```

## Environment Variables

Required in `.env.local`:

```env
DATABASE_URL="prisma+postgres://accelerate.prisma-data.net/?api_key=YOUR_API_KEY"
```

## File Structure

```
prisma/
  └── schema.prisma          # Database schema definition

lib/
  └── prisma.ts              # Prisma client singleton with Accelerate

app/
  ├── api/
  │   ├── signup/
  │   │   └── route.ts       # POST endpoint for user registration
  │   └── users/
  │       └── route.ts       # GET endpoint for fetching users
  ├── signup/
  │   └── page.tsx           # Signup form page (client component)
  └── dashboard/
      └── page.tsx           # User dashboard page (client component)
```

## Features Implemented

✅ Prisma schema with User model  
✅ Database connection with Prisma Accelerate  
✅ API endpoint for user registration  
✅ API endpoint for fetching all users  
✅ Client-side signup form with validation  
✅ Success/error message handling  
✅ Dashboard with user list display  
✅ Responsive table design  
✅ Loading and error states  
✅ Email uniqueness validation  
✅ Consent tracking

## Testing the Setup

1. **Start the development server:**

   ```bash
   pnpm dev
   ```

2. **Test signup:**
   - Navigate to `http://localhost:3000/signup`
   - Fill in name and email
   - Check consent checkbox
   - Click "Join the Journey"

3. **View registered users:**
   - Navigate to `http://localhost:3000/dashboard`
   - See all registered users in the table

## Notes

- The database uses Prisma Accelerate for connection pooling and edge deployment
- Email addresses must be unique (enforced at database level)
- All timestamps are stored in UTC
- The Prisma client is a singleton to prevent multiple instances
