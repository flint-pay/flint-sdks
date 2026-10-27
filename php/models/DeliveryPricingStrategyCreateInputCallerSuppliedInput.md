[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryPricingStrategyCreateInputCallerSuppliedInput

The `caller_supplied` variant of `DeliveryPricingStrategyCreateInput`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculated` | Optional | [DeliveryCalculatedPricingStrategyRequestInput](../models/DeliveryCalculatedPricingStrategyRequestInput.md#deliverycalculatedpricingstrategyrequestinput) | Calculated delivery pricing you supply for a delivery method: base fee, distance and weight rates, per-item handling, and fee limits, by currency. |
| `callback` | Optional | [DeliveryCallbackPricingStrategyRequestInput](../models/DeliveryCallbackPricingStrategyRequestInput.md#deliverycallbackpricingstrategyrequestinput) | Delivery pricing you supply that comes from a delivery rate callback (`delivery_rate_callback_id`), with minimum and maximum fees by currency. |
| `caller_supplied` | Required | [DeliveryCallerSuppliedPricingStrategyRequestInput](../models/DeliveryCallerSuppliedPricingStrategyRequestInput.md#deliverycallersuppliedpricingstrategyrequestinput) | Delivery pricing where you supply the rate when creating a delivery quote, bounded by minimum and maximum fees by currency. |
| `fixed` | Optional | [DeliveryFixedPricingStrategyRequestInput](../models/DeliveryFixedPricingStrategyRequestInput.md#deliveryfixedpricingstrategyrequestinput) | A fixed delivery price by currency, supplied for a delivery method. |
| `rate_table` | Optional | [DeliveryRateTablePricingStrategyCreateRequestInput](../models/DeliveryRateTablePricingStrategyCreateRequestInput.md#deliveryratetablepricingstrategycreaterequestinput) | Rate table pricing strategy you supply when creating a delivery method: a list of prioritized rates, each with a condition and prices. |
| `tiered` | Optional | [DeliveryTieredPricingStrategyRequestInput](../models/DeliveryTieredPricingStrategyRequestInput.md#deliverytieredpricingstrategyrequestinput) | Tiered pricing strategy you supply for a delivery method: a `basis`, a list of bands with prices, and a weight `unit` when the basis is total weight. |
| `type` | Required | string | Values: `"caller_supplied"`. |

