[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryPricingStrategyTieredInput

The `tiered` variant of `DeliveryPricingStrategy`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculated` | Optional | [DeliveryCalculatedPricingStrategyInput](../models/DeliveryCalculatedPricingStrategyInput.md#deliverycalculatedpricingstrategyinput) | Delivery pricing calculated from a base fee, distance, weight, and per-item handling, with minimum and maximum fees, by currency. |
| `callback` | Optional | [DeliveryExternalPricingStrategyInput](../models/DeliveryExternalPricingStrategyInput.md#deliveryexternalpricingstrategyinput) | Delivery pricing that comes from outside Flint, from a delivery rate callback or the caller, bounded by minimum and maximum fees by currency. |
| `caller_supplied` | Optional | [DeliveryExternalPricingStrategyInput](../models/DeliveryExternalPricingStrategyInput.md#deliveryexternalpricingstrategyinput) | Delivery pricing that comes from outside Flint, from a delivery rate callback or the caller, bounded by minimum and maximum fees by currency. |
| `fixed` | Optional | [DeliveryFixedPricingStrategyInput](../models/DeliveryFixedPricingStrategyInput.md#deliveryfixedpricingstrategyinput) | A fixed delivery price, by currency. |
| `rate_table` | Optional | [DeliveryRateTablePricingStrategyInput](../models/DeliveryRateTablePricingStrategyInput.md#deliveryratetablepricingstrategyinput) | Pricing strategy that charges the price of the first matching rate in a list of prioritized rates. `unmatched_behavior` says what happens when none match. |
| `tiered` | Required | [DeliveryTieredPricingStrategyInput](../models/DeliveryTieredPricingStrategyInput.md#deliverytieredpricingstrategyinput) | Pricing strategy that charges by band. The `basis` value, such as total weight or subtotal, selects a band, and `unit` applies to weight bases. |
| `type` | Required | string | Values: `"tiered"`. |

