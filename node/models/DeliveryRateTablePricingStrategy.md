[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryRateTablePricingStrategy

Pricing strategy that charges the price of the first matching rate in a list of prioritized rates. `unmatched_behavior` says what happens when none match.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `rates` | Required | Array of [DeliveryPricingRate](../models/DeliveryPricingRate.md#deliverypricingrate) |  |
| `unmatched_behavior` | Required | string | Values: `"unavailable"`. |

