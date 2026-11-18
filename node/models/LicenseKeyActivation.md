[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## LicenseKeyActivation

A top-level child of a license key representing an installation.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Required | string | When the activation was created. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `fingerprint` | Required | string or null | The identifier supplied by the app. Null when absent or erased. |
| `last_validated_at` | Required | string or null | When the activation was last checked, updated at most once an hour. Null when the activation has never been checked. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `license_key_activation_id` | Required | string | The activation ID. Example: `"lka_01KEZF7C00NZEZVCZW3SRDMHTZ"`. |
| `license_key_id` | Required | string | The activated license key ID. Example: `"lk_01KEZF7C000QD7VJ83G43V0NSN"`. |
| `name` | Required | string or null | The name supplied by the app. Null when erased. |
| `product_id` | Required | string | The product this installation can use. Example: `"prod_01KEZF7C00BVSHCNWVH528HB66"`. |
| `released_at` | Required | string or null | When the activation was released. Null when it is active. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `status` | Required | string | The activation state. Values: `"active"`, `"released"`. |
| `supported_actions` | Required | Array of string | Actions available for this activation. Items values: `"release"`. |
| `variant_id` | Required | string | The variant this installation can use. Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. |

