[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryPricingStrategyCalculated

The `calculated` variant of `DeliveryPricingStrategy`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculated` | Required | [DeliveryCalculatedPricingStrategy](../models/DeliveryCalculatedPricingStrategy.md#deliverycalculatedpricingstrategy) | Delivery pricing calculated from a base fee, distance, weight, and per-item handling, with minimum and maximum fees, by currency. `calculated`: [field definitions](../models/DeliveryPricingStrategy.md#deliverypricingstrategycalculated-fields-1). |
| `callback` | Optional | [DeliveryExternalPricingStrategy](../models/DeliveryExternalPricingStrategy.md#deliveryexternalpricingstrategy) | Delivery pricing that comes from outside Flint, from a delivery rate callback or the caller, bounded by minimum and maximum fees by currency. |
| `caller_supplied` | Optional | [DeliveryExternalPricingStrategy](../models/DeliveryExternalPricingStrategy.md#deliveryexternalpricingstrategy) | Delivery pricing that comes from outside Flint, from a delivery rate callback or the caller, bounded by minimum and maximum fees by currency. |
| `fixed` | Optional | [DeliveryFixedPricingStrategy](../models/DeliveryFixedPricingStrategy.md#deliveryfixedpricingstrategy) | A fixed delivery price, by currency. |
| `rate_table` | Optional | [DeliveryRateTablePricingStrategy](../models/DeliveryRateTablePricingStrategy.md#deliveryratetablepricingstrategy) | Pricing strategy that charges the price of the first matching rate in a list of prioritized rates. `unmatched_behavior` says what happens when none match. |
| `tiered` | Optional | [DeliveryTieredPricingStrategy](../models/DeliveryTieredPricingStrategy.md#deliverytieredpricingstrategy) | Pricing strategy that charges by band. The `basis` value, such as total weight or subtotal, selects a band, and `unit` applies to weight bases. `tiered`: [declared alternatives](../models/DeliveryPricingStrategy.md#deliverypricingstrategytiered-fields-1). |
| `type` | Required | string | Values: `"calculated"`. |

### DeliveryPricingStrategyCalculated.calculated

Field definitions: [DeliveryPricingStrategy.calculated fields 1](../models/DeliveryPricingStrategy.md#deliverypricingstrategycalculated-fields-1).

### DeliveryPricingStrategyCalculated.tiered

Declared alternatives: [DeliveryPricingStrategy.tiered fields 1](../models/DeliveryPricingStrategy.md#deliverypricingstrategytiered-fields-1).

