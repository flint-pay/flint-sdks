[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PartnerAppCredentialJWKSURLInput

A registered JWKS URL and its most recent successful fetch.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `last_fetched_at` | Required | string | Most recent successful fetch of this URL by Flint. Updated at most once per minute. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `url` | Required | string |  |

