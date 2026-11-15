[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryPricingStrategyFixed

The `fixed` variant of `DeliveryPricingStrategy`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculated` | Optional | [DeliveryCalculatedPricingStrategy](../models/DeliveryCalculatedPricingStrategy.md#deliverycalculatedpricingstrategy) | Calculated pricing settings. Set only when `type` is `calculated`. Delivery pricing calculated from a base fee, distance, weight, and per-item handling, with minimum and maximum fees, by currency. `calculated`: [field definitions](../models/DeliveryPricingStrategy.md#deliverypricingstrategycalculated-fields-1). |
| `callback` | Optional | [DeliveryExternalPricingStrategy](../models/DeliveryExternalPricingStrategy.md#deliveryexternalpricingstrategy) | Rate callback pricing settings. Set only when `type` is `callback`. Delivery pricing that comes from outside Flint, from a delivery rate callback or the caller, bounded by minimum and maximum fees by currency. |
| `caller_supplied` | Optional | [DeliveryExternalPricingStrategy](../models/DeliveryExternalPricingStrategy.md#deliveryexternalpricingstrategy) | Caller-supplied pricing settings. Set only when `type` is `caller_supplied`. Delivery pricing that comes from outside Flint, from a delivery rate callback or the caller, bounded by minimum and maximum fees by currency. |
| `fixed` | Required | [DeliveryFixedPricingStrategy](../models/DeliveryFixedPricingStrategy.md#deliveryfixedpricingstrategy) | Fixed pricing settings. Set only when `type` is `fixed`. A fixed delivery price, by currency. |
| `rate_table` | Optional | [DeliveryRateTablePricingStrategy](../models/DeliveryRateTablePricingStrategy.md#deliveryratetablepricingstrategy) | Rate table pricing settings. Set only when `type` is `rate_table`. Pricing strategy that charges the price of the first matching rate in a list of prioritized rates. `unmatched_behavior` says what happens when none match. |
| `tiered` | Optional | [DeliveryTieredPricingStrategy](../models/DeliveryTieredPricingStrategy.md#deliverytieredpricingstrategy) | Tiered pricing settings. Set only when `type` is `tiered`. Pricing strategy that charges by band. The `basis` value, such as total weight or subtotal, selects a band, and `unit` applies to weight bases. `tiered`: [declared alternatives](../models/DeliveryPricingStrategy.md#deliverypricingstrategytiered-fields-1). |
| `type` | Required | string | How the method sets its price. Set the property named by this value. Values: `"fixed"`. |

### DeliveryPricingStrategyFixed.calculated

Field definitions: [DeliveryPricingStrategy.calculated fields 1](../models/DeliveryPricingStrategy.md#deliverypricingstrategycalculated-fields-1).

### DeliveryPricingStrategyFixed.tiered

Declared alternatives: [DeliveryPricingStrategy.tiered fields 1](../models/DeliveryPricingStrategy.md#deliverypricingstrategytiered-fields-1).

