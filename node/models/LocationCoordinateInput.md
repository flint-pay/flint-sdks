[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## LocationCoordinateInput

Request input. Response: [LocationCoordinate](../models/LocationCoordinate.md#locationcoordinate).

A latitude and longitude for a merchant location.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `latitude` | Required | number | Latitude between -90 and 90. Responses always include this field, including 0. |
| `longitude` | Required | number | Longitude between -180 and 180. Responses always include this field, including 0. |

