[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryCoordinateRequestInput

Request input. Response: [LocationCoordinate](../models/LocationCoordinate.md#locationcoordinate).

A latitude and longitude.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `latitude` | Required | number | minimum: `-90`. maximum: `90`. |
| `longitude` | Required | number | minimum: `-180`. maximum: `180`. |

