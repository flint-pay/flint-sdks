[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryTieredPricingStrategyQuantityOrMoneyPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bands` | Optional | Array of [DeliveryPricingTierBandPreviousAttributesInput](../models/DeliveryPricingTierBandPreviousAttributesInput.md#deliverypricingtierbandpreviousattributesinput) or null | One to 25 contiguous bands in ascending order. The final band has no upper bound. `bands`: [declared alternatives](../models/DeliveryTieredPricingStrategyPreviousAttributesInput.md#deliverytieredpricingstrategypreviousattributesinputbands). |
| `basis` | Optional | string or null | Value matched against the numeric tier bands. Money subtotal bases use minor currency units; caller.tier_key uses the nonnegative tier_key supplied when creating the checkout delivery quote. Values: [6 declared values](DeliveryTieredPricingStrategyInputQuantityOrMoneyInput.md#deliverytieredpricingstrategyinputquantityormoneyinput-basis-values). `basis`: [declared alternatives](../models/DeliveryTieredPricingStrategyQuantityOrMoneyPreviousAttributesInput.md#deliverytieredpricingstrategyquantityormoneypreviousattributesinputbasis). |
| `unit` | Optional | string or null | Required only for choice_group.total_weight and forbidden for every other basis. Values: `"gram"`, `"kilogram"`, `"ounce"`, `"pound"`. `unit`: [declared alternatives](../models/DeliveryTieredPricingStrategyPreviousAttributesInput.md#deliverytieredpricingstrategypreviousattributesinputunit). |

### DeliveryTieredPricingStrategyQuantityOrMoneyPreviousAttributesInput.bands

Declared alternatives: [DeliveryTieredPricingStrategyPreviousAttributesInput.bands](../models/DeliveryTieredPricingStrategyPreviousAttributesInput.md#deliverytieredpricingstrategypreviousattributesinputbands).

### DeliveryTieredPricingStrategyQuantityOrMoneyPreviousAttributesInput.basis

### DeliveryTieredPricingStrategyQuantityOrMoneyPreviousAttributesInput.basis variant 1

anyOf variant 1: Value matched against the numeric tier bands. Money subtotal bases use minor currency units; caller.tier_key uses the nonnegative tier_key supplied when creating the checkout delivery quote..

- Value shape: string. Value matched against the numeric tier bands. Money subtotal bases use minor currency units; caller.tier_key uses the nonnegative tier_key supplied when creating the checkout delivery quote. Values: `"choice_group.fulfillment_quantity"`, `"choice_group.merchandise_subtotal_before_discounts"`, `"choice_group.merchandise_subtotal_after_line_item_discounts"`, `"order.merchandise_subtotal_before_discounts"`, `"order.merchandise_subtotal_after_line_item_discounts"`, `"caller.tier_key"`.

### DeliveryTieredPricingStrategyQuantityOrMoneyPreviousAttributesInput.basis variant 2

anyOf variant 2.

- Value shape: null. Value matched against the numeric tier bands. Money subtotal bases use minor currency units; caller.tier_key uses the nonnegative tier_key supplied when creating the checkout delivery quote. 

### DeliveryTieredPricingStrategyQuantityOrMoneyPreviousAttributesInput.unit

Declared alternatives: [DeliveryTieredPricingStrategyPreviousAttributesInput.unit](../models/DeliveryTieredPricingStrategyPreviousAttributesInput.md#deliverytieredpricingstrategypreviousattributesinputunit).

