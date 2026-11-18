[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## UpdateLicenseKeyRequestInput

The request body for: Update a license key.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `activation_limit` | Conditional | integer or null | Maximum active installations. Send null to clear the limit. Format: `int32`. minimum: `1`. maximum: `10000`. |
| `expected_version` | Optional | integer | Optional expected version of this resource. A stale value returns 409 VERSION_CONFLICT with the current version. Retrieve the resource and rebuild the request before retrying. Format: `uint64`. minimum: `1`. |
| `expires_at` | Conditional | string or null | Expiry for an assigned order key. Send null to clear it. Format: `date-time`. minLength: `1`. Example: `"2026-08-02T16:00:00Z"`. |
| `metadata` | Conditional | [MetadataPatchRequestInput](../models/MetadataPatchRequestInput.md#metadatapatchrequestinput) or null | Merchant-defined key-value patch. Send null to clear all merchant metadata. |

### UpdateLicenseKeyRequestInput variant 1

anyOf variant 1.

- Required: `activation_limit`.
- Optional: `expires_at`, `metadata`.

### UpdateLicenseKeyRequestInput variant 2

anyOf variant 2.

- Required: `expires_at`.
- Optional: `activation_limit`, `metadata`.

### UpdateLicenseKeyRequestInput variant 3

anyOf variant 3.

- Required: `metadata`.
- Optional: `activation_limit`, `expires_at`.

