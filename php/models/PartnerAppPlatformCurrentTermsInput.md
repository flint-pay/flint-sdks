[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PartnerAppPlatformCurrentTermsInput

The current version of Flint's platform terms: the only version accept-platform-terms accepts.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `acceptance_due_at` | Optional | string | When accepting this version becomes required. Until then an earlier accepted version keeps the platform_terms requirement met; from then the app needs this one. Absent when this version is already required. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `platform_terms_version` | Required | string | The current platform terms version. Send it as platform_terms_version to accept-platform-terms. |
| `url` | Required | string or null | Where Flint publishes this version's text: the Flint Platform Agreement. `null` when the version has no published text. Format: `uri`. Example: `"https://example.com/receipt"`. |

