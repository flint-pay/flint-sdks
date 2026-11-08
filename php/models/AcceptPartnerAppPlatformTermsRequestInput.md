[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## AcceptPartnerAppPlatformTermsRequestInput

The request body for: Accept platform terms.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer | Accept only if this matches the app's current version. A mismatch returns HTTP 409 VERSION_CONFLICT. Format: `uint64`. minimum: `1`. |
| `platform_terms_version` | Required | string | The platform terms version you accept. It must be the current version; any other value returns 400 INVALID_REQUEST with detail INVALID_VALUE. The current version is 2026-11-01. minLength: `1`. |

