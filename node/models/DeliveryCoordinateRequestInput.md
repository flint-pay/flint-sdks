[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryCoordinateRequestInput

Request input. Response: [LocationCoordinate](../models/LocationCoordinate.md#locationcoordinate).

A latitude and longitude.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `latitude` | Required | number | Latitude in degrees, from -90 to 90. minimum: `-90`. maximum: `90`. |
| `longitude` | Required | number | Longitude in degrees, from -180 to 180. minimum: `-180`. maximum: `180`. |

