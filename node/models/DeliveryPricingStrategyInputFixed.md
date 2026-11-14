[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryPricingStrategyInputFixed

The `fixed` variant of `DeliveryPricingStrategyInput`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculated` | Optional | [DeliveryCalculatedPricingStrategy](../models/DeliveryCalculatedPricingStrategy.md#deliverycalculatedpricingstrategy) | Calculated pricing settings. Set only when `type` is `calculated`. Calculated delivery pricing you supply for a delivery method: base fee, distance and weight rates, per-item handling, and fee limits, by currency. `calculated`: [field definitions](../models/DeliveryPricingStrategyCreateInputCalculated.md#deliverypricingstrategycreateinputcalculatedcalculated). |
| `callback` | Optional | [DeliveryCallbackPricingStrategyRequest](../models/DeliveryCallbackPricingStrategyRequest.md#deliverycallbackpricingstrategyrequest) | Rate callback pricing settings. Set only when `type` is `callback`. Delivery pricing you supply that comes from a delivery rate callback (`delivery_rate_callback_id`), with minimum and maximum fees by currency. |
| `caller_supplied` | Optional | [DeliveryCallerSuppliedPricingStrategyRequest](../models/DeliveryCallerSuppliedPricingStrategyRequest.md#deliverycallersuppliedpricingstrategyrequest) | Caller-supplied pricing settings. Set only when `type` is `caller_supplied`. Delivery pricing where you supply the rate when creating a delivery quote, bounded by minimum and maximum fees by currency. |
| `fixed` | Required | [DeliveryFixedPricingStrategy](../models/DeliveryFixedPricingStrategy.md#deliveryfixedpricingstrategy) | Fixed pricing settings. Set only when `type` is `fixed`. A fixed delivery price by currency, supplied for a delivery method. |
| `rate_table` | Optional | [DeliveryRateTablePricingStrategyRequest](../models/DeliveryRateTablePricingStrategyRequest.md#deliveryratetablepricingstrategyrequest) | Rate table pricing settings. Set only when `type` is `rate_table`. Rate table pricing strategy you supply when updating a delivery method: a list of prioritized rates, each with a condition and prices. |
| `tiered` | Optional | [DeliveryTieredPricingStrategy](../models/DeliveryTieredPricingStrategy.md#deliverytieredpricingstrategy) | Tiered pricing settings. Set only when `type` is `tiered`. Tiered pricing strategy you supply for a delivery method: a `basis`, a list of bands with prices, and a weight `unit` when the basis is total weight. `tiered`: [declared alternatives](../models/DeliveryPricingStrategyCreateInputCalculated.md#deliverypricingstrategycreateinputcalculatedtiered). |
| `type` | Required | string | How the method sets its price. Set the property named by this value. Values: `"fixed"`. |

### DeliveryPricingStrategyInputFixed.calculated

Field definitions: [DeliveryPricingStrategyCreateInputCalculated.calculated](../models/DeliveryPricingStrategyCreateInputCalculated.md#deliverypricingstrategycreateinputcalculatedcalculated).

### DeliveryPricingStrategyInputFixed.tiered

Declared alternatives: [DeliveryPricingStrategyCreateInputCalculated.tiered](../models/DeliveryPricingStrategyCreateInputCalculated.md#deliverypricingstrategycreateinputcalculatedtiered).

