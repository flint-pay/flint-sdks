[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryDistanceRequestInput

Request input. Response: [DeliveryDistance](../models/DeliveryDistance.md#deliverydistance).

A distance as a `value` in meters, kilometers, or miles.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `unit` | Required | string | Unit of `value`. Values: `"meter"`, `"kilometer"`, `"mile"`. |
| `value` | Required | number | Distance, in `unit`. |

