[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PromotionSettings

Merchant promotion settings: whether automatic promotions and codes are enabled, and how many promotions can apply to one order.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `automatic_enabled` | Optional | boolean |  |
| `codes_enabled` | Optional | boolean | Merchant promotion code redemption policy. Explicit false rejects promotion-code application even when a checkout or payment link asks to show code entry. |
| `max_promotions_per_order` | Optional | integer | Maximum promotion discounts on an order, from 1 to 10, default 2. Manual discounts do not count. See Promotion for the evaluation order. Format: `int32`. minimum: `1`. maximum: `10`. Default: `2`. |

