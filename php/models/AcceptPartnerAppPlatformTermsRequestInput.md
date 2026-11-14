[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## AcceptPartnerAppPlatformTermsRequestInput

The request body for: Accept platform terms.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer | Accept only if this matches the app's current version. A mismatch returns HTTP 409 VERSION_CONFLICT. Format: `uint64`. minimum: `1`. |
| `platform_terms_version` | Required | string | The platform terms version you accept: the app's platform.current_terms.platform_terms_version. Any other value returns 400 INVALID_REQUEST with detail INVALID_VALUE. minLength: `1`. |

