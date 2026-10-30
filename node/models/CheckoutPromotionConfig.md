[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CheckoutPromotionConfig







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `automatic_enabled` | Optional | boolean |  |
| `codes_enabled` | Optional | boolean or null | Object-level override for whether this checkout's buyer can apply promotion codes, hosted or headless. Hosted checkout shows or hides code entry to match. Omit to inherit checkout.promotion_codes_enabled. True allows codes when the merchant's promotion settings allow them; false blocks them for this checkout. |

### CheckoutPromotionConfig variant 1

anyOf variant 1: Declared schema CheckoutPromotionConfig. Promotion settings for a checkout: whether automatic promotions apply and whether the buyer can apply promotion codes..

No additional constraints.

### CheckoutPromotionConfig variant 2

anyOf variant 2: Declared schema CheckoutPromotionConfigRequest. Promotion settings for a checkout: whether automatic promotions apply and whether the buyer can apply promotion codes..

No additional constraints.

