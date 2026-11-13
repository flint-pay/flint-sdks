[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CheckoutPromotionConfigRequestInput

Promotion settings for a checkout: whether automatic promotions apply and whether the buyer can apply promotion codes.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `automatic_enabled` | Optional | boolean | Whether automatic promotions apply to this checkout. Send false to stop them here. True can't turn them back on when your promotion settings have them off. |
| `codes_enabled` | Optional | boolean or null | Object-level override for whether this checkout's buyer can apply promotion codes, hosted or headless. Omit to inherit the payment link and checkout.promotion_codes_enabled. When all are unset, hosted checkout offers code entry only while an active code promotion exists in this environment; read can_apply_promotion_code on the session. True allows codes when the merchant's promotion settings allow them; false blocks them for this checkout. `null` when this checkout inherits checkout.promotion_codes_enabled. |

