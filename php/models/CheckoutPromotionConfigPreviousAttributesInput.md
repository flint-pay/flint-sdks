[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CheckoutPromotionConfigPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `automatic_enabled` | Optional | boolean or null | Whether automatic promotions apply to this checkout. Send false to stop them here. True can't turn them back on when your promotion settings have them off. `automatic_enabled`: [declared alternatives](../models/CheckoutPromotionConfigPreviousAttributesInput.md#checkoutpromotionconfigpreviousattributesinputautomatic_enabled). |
| `codes_enabled` | Optional | boolean or null | Object-level override for whether this checkout's buyer can apply promotion codes, hosted or headless. Omit to inherit the payment link and checkout.promotion_codes_enabled. When all are unset, hosted checkout offers code entry only while an active code promotion exists in this environment; read can_apply_promotion_code on the session. True allows codes when the merchant's promotion settings allow them; false blocks them for this checkout. `null` when this checkout inherits checkout.promotion_codes_enabled. `codes_enabled`: [declared alternatives](../models/CheckoutPromotionConfigPreviousAttributesInput.md#checkoutpromotionconfigpreviousattributesinputcodes_enabled). |

### CheckoutPromotionConfigPreviousAttributesInput.automatic_enabled

### CheckoutPromotionConfigPreviousAttributesInput.automatic_enabled variant 1

anyOf variant 1: Whether automatic promotions apply to this checkout. Send false to stop them here. True can't turn them back on when your promotion settings have them off..

- Value shape: boolean. Whether automatic promotions apply to this checkout. Send false to stop them here. True can't turn them back on when your promotion settings have them off. 

### CheckoutPromotionConfigPreviousAttributesInput.automatic_enabled variant 2

anyOf variant 2.

- Value shape: null. Whether automatic promotions apply to this checkout. Send false to stop them here. True can't turn them back on when your promotion settings have them off. 

### CheckoutPromotionConfigPreviousAttributesInput.codes_enabled

### CheckoutPromotionConfigPreviousAttributesInput.codes_enabled variant 1

anyOf variant 1: Object-level override for whether this checkout's buyer can apply promotion codes, hosted or headless. Omit to inherit the payment link and checkout.promotion_codes_enabled. When all are unset, hosted checkout offers code entry only while an active code promotion exists in this environment; read can_apply_promotion_code on the session. True allows codes when the merchant's promotion settings allow them; false blocks them for this checkout. `null` when this checkout inherits checkout.promotion_codes_enabled..

- Value shape: boolean. Object-level override for whether this checkout's buyer can apply promotion codes, hosted or headless. Omit to inherit the payment link and checkout.promotion_codes_enabled. When all are unset, hosted checkout offers code entry only while an active code promotion exists in this environment; read can_apply_promotion_code on the session. True allows codes when the merchant's promotion settings allow them; false blocks them for this checkout. `null` when this checkout inherits checkout.promotion_codes_enabled. 

### CheckoutPromotionConfigPreviousAttributesInput.codes_enabled variant 2

anyOf variant 2.

- Value shape: null. Object-level override for whether this checkout's buyer can apply promotion codes, hosted or headless. Omit to inherit the payment link and checkout.promotion_codes_enabled. When all are unset, hosted checkout offers code entry only while an active code promotion exists in this environment; read can_apply_promotion_code on the session. True allows codes when the merchant's promotion settings allow them; false blocks them for this checkout. `null` when this checkout inherits checkout.promotion_codes_enabled. 

