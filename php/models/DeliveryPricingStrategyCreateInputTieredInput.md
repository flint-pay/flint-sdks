[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryPricingStrategyCreateInputTieredInput

The `tiered` variant of `DeliveryPricingStrategyCreateInput`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculated` | Optional | [DeliveryCalculatedPricingStrategyRequestInput](../models/DeliveryCalculatedPricingStrategyRequestInput.md#deliverycalculatedpricingstrategyrequestinput) | Calculated pricing settings. Set only when `type` is `calculated`. Calculated delivery pricing you supply for a delivery method: base fee, distance and weight rates, per-item handling, and fee limits, by currency. |
| `callback` | Optional | [DeliveryCallbackPricingStrategyRequestInput](../models/DeliveryCallbackPricingStrategyRequestInput.md#deliverycallbackpricingstrategyrequestinput) | Rate callback pricing settings. Set only when `type` is `callback`. Delivery pricing you supply that comes from a delivery rate callback (`delivery_rate_callback_id`), with minimum and maximum fees by currency. |
| `caller_supplied` | Optional | [DeliveryCallerSuppliedPricingStrategyRequestInput](../models/DeliveryCallerSuppliedPricingStrategyRequestInput.md#deliverycallersuppliedpricingstrategyrequestinput) | Caller-supplied pricing settings. Set only when `type` is `caller_supplied`. Delivery pricing where you supply the rate when creating a delivery quote, bounded by minimum and maximum fees by currency. |
| `fixed` | Optional | [DeliveryFixedPricingStrategyRequestInput](../models/DeliveryFixedPricingStrategyRequestInput.md#deliveryfixedpricingstrategyrequestinput) | Fixed pricing settings. Set only when `type` is `fixed`. A fixed delivery price by currency, supplied for a delivery method. |
| `rate_table` | Optional | [DeliveryRateTablePricingStrategyCreateRequestInput](../models/DeliveryRateTablePricingStrategyCreateRequestInput.md#deliveryratetablepricingstrategycreaterequestinput) | Rate table pricing settings. Set only when `type` is `rate_table`. Rate table pricing strategy you supply when creating a delivery method: a list of prioritized rates, each with a condition and prices. |
| `tiered` | Required | [DeliveryTieredPricingStrategyRequestInput](../models/DeliveryTieredPricingStrategyRequestInput.md#deliverytieredpricingstrategyrequestinput) | Tiered pricing settings. Set only when `type` is `tiered`. Tiered pricing strategy you supply for a delivery method: a `basis`, a list of bands with prices, and a weight `unit` when the basis is total weight. |
| `type` | Required | string | How the method sets its price. Set the property named by this value. Values: `"tiered"`. |

