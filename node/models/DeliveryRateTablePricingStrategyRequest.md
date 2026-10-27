[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryRateTablePricingStrategyRequest

Rate table pricing strategy you supply when updating a delivery method: a list of prioritized rates, each with a condition and prices.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `rates` | Required | Array of [DeliveryPricingRateRequest](../models/DeliveryPricingRateRequest.md#deliverypricingraterequest) |  |
| `unmatched_behavior` | Optional | string | Default: `"unavailable"`. Values: `"unavailable"`. |

