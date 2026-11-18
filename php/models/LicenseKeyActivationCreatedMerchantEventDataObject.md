[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## LicenseKeyActivationCreatedMerchantEventDataObject

The affected public resource without expansions, client authority fields, or fields computed for an individual caller.

The resource snapshot, without expansions. Webhooks omit no additional fields.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Required | string | When the activation was created. Format: `date-time`. |
| `fingerprint` | Required | string or null | The identifier supplied by the app. Null when absent or erased. |
| `last_validated_at` | Required | string or null | When the activation was last checked, updated at most once an hour. Null when the activation has never been checked. Format: `date-time`. |
| `license_key_activation_id` | Required | string | The activation ID. |
| `license_key_id` | Required | string | The activated license key ID. |
| `name` | Required | string or null | The name supplied by the app. Null when erased. |
| `product_id` | Required | string | The product this installation can use. |
| `released_at` | Required | string or null | When the activation was released. Null when it is active. Format: `date-time`. |
| `status` | Required | string | The activation state. Values: `"active"`, `"released"`. |
| `supported_actions` | Required | Array of string | Actions available for this activation. Items values: `"release"`. |
| `variant_id` | Required | string | The variant this installation can use. |

