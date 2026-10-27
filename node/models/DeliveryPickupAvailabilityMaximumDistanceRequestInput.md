[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryPickupAvailabilityMaximumDistanceRequestInput

Request input. Response: [DeliveryDistance](../models/DeliveryDistance.md#deliverydistance).

A maximum distance from the buyer location, as a value and unit, that limits which pickup locations a preview returns.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `unit` | Required | string | Values: `"meter"`, `"kilometer"`, `"mile"`. |
| `value` | Required | number | Maximum distance from the buyer location, greater than zero, in the selected unit. exclusiveMinimum: `0`. |

