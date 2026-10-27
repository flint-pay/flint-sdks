[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CheckoutPromotionConfigInput

Promotion settings for a checkout: whether automatic promotions apply and whether the buyer can apply promotion codes.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `automatic_enabled` | Optional | boolean |  |
| `codes_enabled` | Optional | boolean or null | Object-level override for whether this checkout's buyer can apply promotion codes, hosted or headless. Hosted checkout shows or hides code entry to match. Omit to inherit checkout.promotion_codes_enabled. True allows codes when the merchant's promotion settings allow them; false blocks them for this checkout. |

