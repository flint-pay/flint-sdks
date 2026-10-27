[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryRateTablePricingStrategyCreateRequestInput

Rate table pricing strategy you supply when creating a delivery method: a list of prioritized rates, each with a condition and prices.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `rates` | Required | Array of [DeliveryPricingRateCreateRequestInput](../models/DeliveryPricingRateCreateRequestInput.md#deliverypricingratecreaterequestinput) |  |
| `unmatched_behavior` | Optional | string | Default: `"unavailable"`. Values: `"unavailable"`. |

