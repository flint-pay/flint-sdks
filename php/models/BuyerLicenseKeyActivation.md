[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerLicenseKeyActivation

A top-level child of a license key representing one of the buyer's installations.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_actions` | Required | Array of [BuyerAction](../models/BuyerAction.md#buyeraction) | Whether the buyer can release this activation. `buyer_actions[]`: [field definitions](../models/OrderResponse.md#orderresponsedatabuyer_actions). |
| `created_at` | Required | string | When the activation was created. Format: `date-time`. |
| `last_validated_at` | Required | string or null | When the activation was last checked, updated at most once an hour. Null when the activation has never been checked. Format: `date-time`. |
| `license_key_activation_id` | Required | string | The activation ID. |
| `license_key_id` | Required | string | The activated license key ID. |
| `name` | Required | string or null | The name supplied by the app. Null when erased. |
| `product_id` | Required | string | The product this installation can use. |
| `released_at` | Required | string or null | When the activation was released. Null when it is active. Format: `date-time`. |
| `status` | Required | string | The activation state. Values: `"active"`, `"released"`. |
| `variant_id` | Required | string | The variant this installation can use. |

### BuyerLicenseKeyActivation.buyer_actions[]

Field definitions: [OrderResponse.data.buyer_actions[]](../models/OrderResponse.md#orderresponsedatabuyer_actions).

