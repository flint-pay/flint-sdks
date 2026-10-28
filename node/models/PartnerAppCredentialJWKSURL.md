[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PartnerAppCredentialJWKSURL

A registered JWKS URL and its most recent successful fetch.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `last_fetched_at` | Required | string | Most recent successful fetch of this URL by Flint. Updated at most once per minute. Format: `date-time`. |
| `url` | Required | string |  |

