[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerLicenseKey

A license key issued to the current buyer.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `activation_limit` | Required | integer or null | Maximum active installations. Null when activations are unlimited. Format: `int32`. |
| `active_activation_count` | Required | integer | Number of currently active installations. Format: `int32`. |
| `buyer_actions` | Required | Array of [BuyerAction](../models/BuyerAction.md#buyeraction) | Whether the buyer can resend the license key email. The resend request checks cooldown and deliverability. `buyer_actions[]`: [field definitions](../models/OrderResponse.md#orderresponsedatabuyer_actions). |
| `created_at` | Required | string | When the license key was issued. Format: `date-time`. |
| `customer_id` | Required | string or null | The current customer of the owning order or subscription. Null when the order has no linked customer. |
| `expires_at` | Required | string or null | When the key expires. Null when no expiry is set. Format: `date-time`. |
| `key` | Optional | string | The full assigned key. Present only on list responses where Flint verified access to the key. |
| `key_last4` | Required | string or null | Last four characters of the assigned key. Null when the key is awaiting assignment. |
| `license_key_id` | Required | string | Unique license key ID with the lk_ prefix. |
| `order_id` | Required | string or null | The owning order or the order that started the subscription. Null when a subscription has no starting order. |
| `order_line_item_id` | Required | string or null | The owning order line. Null when the key belongs to a subscription line. |
| `product_id` | Required | string | The product ID. |
| `source` | Required | string | How the key was supplied. Values: `"generated"`, `"pool"`. |
| `status` | Required | string | Whether the key is usable. Expiry takes effect at expires_at. Values: `"pending"`, `"active"`, `"disabled"`, `"expired"`. |
| `subscription_id` | Required | string or null | The owning subscription. Null when the key belongs to an order line. |
| `subscription_line_item_id` | Required | string or null | The owning subscription line. Null when the key belongs to an order line. |
| `unit_ordinal` | Required | integer | The unit of the owning line, starting at 1. Format: `int32`. |
| `updated_at` | Required | string | When the license key version last changed. Format: `date-time`. |
| `variant_id` | Required | string | The product variant ID. |
| `version` | Required | integer | Persisted version of this resource's owned state. Expanded resources and external observations can change independently. Format: `uint64`. minimum: `1`. |

### BuyerLicenseKey.buyer_actions[]

Field definitions: [OrderResponse.data.buyer_actions[]](../models/OrderResponse.md#orderresponsedatabuyer_actions).

