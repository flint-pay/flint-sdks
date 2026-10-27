[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryRateTablePricingStrategyCreateRequest

Rate table pricing strategy you supply when creating a delivery method: a list of prioritized rates, each with a condition and prices.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `rates` | Required | Array of [DeliveryPricingRateCreateRequest](../models/DeliveryPricingRateCreateRequest.md#deliverypricingratecreaterequest) |  |
| `unmatched_behavior` | Optional | string | Default: `"unavailable"`. Values: `"unavailable"`. |

