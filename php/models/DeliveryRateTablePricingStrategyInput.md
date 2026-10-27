[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryRateTablePricingStrategyInput

Pricing strategy that charges the price of the first matching rate in a list of prioritized rates. `unmatched_behavior` says what happens when none match.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `rates` | Required | Array of [DeliveryPricingRateInput](../models/DeliveryPricingRateInput.md#deliverypricingrateinput) |  |
| `unmatched_behavior` | Required | string | Values: `"unavailable"`. |

