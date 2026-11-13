[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryPricingStrategyCreateInputCallerSupplied

The `caller_supplied` variant of `DeliveryPricingStrategyCreateInput`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculated` | Optional | [DeliveryCalculatedPricingStrategy](../models/DeliveryCalculatedPricingStrategy.md#deliverycalculatedpricingstrategy) | Calculated pricing settings. Set only when `type` is `calculated`. Calculated delivery pricing you supply for a delivery method: base fee, distance and weight rates, per-item handling, and fee limits, by currency. `calculated`: [field definitions](../models/DeliveryPricingStrategyCreateInputCalculated.md#deliverypricingstrategycreateinputcalculatedcalculated). |
| `callback` | Optional | [DeliveryCallbackPricingStrategyRequest](../models/DeliveryCallbackPricingStrategyRequest.md#deliverycallbackpricingstrategyrequest) | Rate callback pricing settings. Set only when `type` is `callback`. Delivery pricing you supply that comes from a delivery rate callback (`delivery_rate_callback_id`), with minimum and maximum fees by currency. |
| `caller_supplied` | Required | [DeliveryCallerSuppliedPricingStrategyRequest](../models/DeliveryCallerSuppliedPricingStrategyRequest.md#deliverycallersuppliedpricingstrategyrequest) | Caller-supplied pricing settings. Set only when `type` is `caller_supplied`. Delivery pricing where you supply the rate when creating a delivery quote, bounded by minimum and maximum fees by currency. |
| `fixed` | Optional | [DeliveryFixedPricingStrategy](../models/DeliveryFixedPricingStrategy.md#deliveryfixedpricingstrategy) | Fixed pricing settings. Set only when `type` is `fixed`. A fixed delivery price by currency, supplied for a delivery method. |
| `rate_table` | Optional | [DeliveryRateTablePricingStrategyCreateRequest](../models/DeliveryRateTablePricingStrategyCreateRequest.md#deliveryratetablepricingstrategycreaterequest) | Rate table pricing settings. Set only when `type` is `rate_table`. Rate table pricing strategy you supply when creating a delivery method: a list of prioritized rates, each with a condition and prices. |
| `tiered` | Optional | [DeliveryTieredPricingStrategy](../models/DeliveryTieredPricingStrategy.md#deliverytieredpricingstrategy) | Tiered pricing settings. Set only when `type` is `tiered`. Tiered pricing strategy you supply for a delivery method: a `basis`, a list of bands with prices, and a weight `unit` when the basis is total weight. `tiered`: [declared alternatives](../models/DeliveryPricingStrategyCreateInputCalculated.md#deliverypricingstrategycreateinputcalculatedtiered). |
| `type` | Required | string | How the method sets its price. Set the property named by this value. Values: `"caller_supplied"`. |

### DeliveryPricingStrategyCreateInputCallerSupplied.calculated

Field definitions: [DeliveryPricingStrategyCreateInputCalculated.calculated](../models/DeliveryPricingStrategyCreateInputCalculated.md#deliverypricingstrategycreateinputcalculatedcalculated).

### DeliveryPricingStrategyCreateInputCallerSupplied.tiered

Declared alternatives: [DeliveryPricingStrategyCreateInputCalculated.tiered](../models/DeliveryPricingStrategyCreateInputCalculated.md#deliverypricingstrategycreateinputcalculatedtiered).

