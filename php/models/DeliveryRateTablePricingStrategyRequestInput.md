[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryRateTablePricingStrategyRequestInput

Rate table pricing strategy you supply when updating a delivery method: a list of prioritized rates, each with a condition and prices.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `rates` | Required | Array of [DeliveryPricingRateRequestInput](../models/DeliveryPricingRateRequestInput.md#deliverypricingraterequestinput) |  |
| `unmatched_behavior` | Optional | string | Default: `"unavailable"`. Values: `"unavailable"`. |

