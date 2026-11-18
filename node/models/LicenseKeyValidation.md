[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## LicenseKeyValidation

The result of checking a license key.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `activation_limit` | Optional | integer or null | Maximum active installations for the matched key. Null when unlimited. Omitted when no key matches. Format: `int32`. |
| `active_activation_count` | Optional | integer | The number of active installations for the matched key, when found. Format: `int32`. |
| `expires_at` | Optional | string or null | The expiry of the matched key. Null when the key has no expiry. Omitted when no key matches. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `invalid_reason` | Optional | string | Why the key or activation could not be used. Values: `"not_found"`, `"disabled"`, `"expired"`, `"activation_not_found"`. |
| `is_valid` | Required | boolean | Whether the key and any supplied activation are active. |
| `license_key_activation` | Optional | [LicenseKeyActivation](../models/LicenseKeyActivation.md#licensekeyactivation) | The active installation when the request supplied its ID and it belongs to this key. A top-level child of a license key representing an installation. |
| `license_key_id` | Optional | string | The matched license key ID, when found. Example: `"lk_01KEZF7C000QD7VJ83G43V0NSN"`. |
| `product_id` | Optional | string | The listed product that the key belongs to, when found. Example: `"prod_01KEZF7C00BVSHCNWVH528HB66"`. |
| `status` | Optional | string | The effective status of the matched key, when found. Values: `"pending"`, `"active"`, `"disabled"`, `"expired"`. |
| `variant_id` | Optional | string | The variant that the key belongs to, when found. Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. |

