# Security Policy

## Support status

This project is preserved as a public archive and is not under active maintenance.

| Version | Supported |
| ------- | --------- |
| `0.1.x` | No        |

No response time, remediation, or release schedule is guaranteed for the archived source.

## Reporting concerns

Do not post credentials, personal information, signup records, or unredacted vulnerability
details in a public GitHub issue.

If the production website is still online and the concern affects that service, use the contact
details published on [crystalharphealing.com](https://www.crystalharphealing.com/contact).

## Historical safeguards

The final snapshot includes:

- fail-closed authentication middleware for `/dashboard` and `/api/users`;
- server-side Cloudflare Turnstile verification for signups;
- environment-based credentials with no application defaults;
- dependency scanning through Dependabot and `pnpm audit`; and
- automated lint, type, build, and Docker checks performed before archival.

These controls describe the final snapshot. They should not be interpreted as a promise of future
security updates.
