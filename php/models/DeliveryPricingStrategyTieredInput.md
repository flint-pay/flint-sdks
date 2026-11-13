[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryPricingStrategyTieredInput

The `tiered` variant of `DeliveryPricingStrategy`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculated` | Optional | [DeliveryCalculatedPricingStrategyInput](../models/DeliveryCalculatedPricingStrategyInput.md#deliverycalculatedpricingstrategyinput) | Calculated pricing settings. Set only when `type` is `calculated`. Delivery pricing calculated from a base fee, distance, weight, and per-item handling, with minimum and maximum fees, by currency. |
| `callback` | Optional | [DeliveryExternalPricingStrategyInput](../models/DeliveryExternalPricingStrategyInput.md#deliveryexternalpricingstrategyinput) | Rate callback pricing settings. Set only when `type` is `callback`. Delivery pricing that comes from outside Flint, from a delivery rate callback or the caller, bounded by minimum and maximum fees by currency. |
| `caller_supplied` | Optional | [DeliveryExternalPricingStrategyInput](../models/DeliveryExternalPricingStrategyInput.md#deliveryexternalpricingstrategyinput) | Caller-supplied pricing settings. Set only when `type` is `caller_supplied`. Delivery pricing that comes from outside Flint, from a delivery rate callback or the caller, bounded by minimum and maximum fees by currency. |
| `fixed` | Optional | [DeliveryFixedPricingStrategyInput](../models/DeliveryFixedPricingStrategyInput.md#deliveryfixedpricingstrategyinput) | Fixed pricing settings. Set only when `type` is `fixed`. A fixed delivery price, by currency. |
| `rate_table` | Optional | [DeliveryRateTablePricingStrategyInput](../models/DeliveryRateTablePricingStrategyInput.md#deliveryratetablepricingstrategyinput) | Rate table pricing settings. Set only when `type` is `rate_table`. Pricing strategy that charges the price of the first matching rate in a list of prioritized rates. `unmatched_behavior` says what happens when none match. |
| `tiered` | Required | [DeliveryTieredPricingStrategyInput](../models/DeliveryTieredPricingStrategyInput.md#deliverytieredpricingstrategyinput) | Tiered pricing settings. Set only when `type` is `tiered`. Pricing strategy that charges by band. The `basis` value, such as total weight or subtotal, selects a band, and `unit` applies to weight bases. |
| `type` | Required | string | How the method sets its price. Set the property named by this value. Values: `"tiered"`. |

