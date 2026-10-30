[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## LocationCoordinate







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `latitude` | Required | number |  |
| `longitude` | Required | number |  |

### LocationCoordinate variant 1

anyOf variant 1: Declared schema DeliveryCoordinateRequest. A latitude and longitude..

- Constraints for `latitude`: minimum: `-90`. maximum: `90`.
- Constraints for `longitude`: minimum: `-180`. maximum: `180`.

### LocationCoordinate variant 2

anyOf variant 2: Declared schema LocationCoordinate. A latitude and longitude for a merchant location..

- Constraints for `latitude`: Latitude between -90 and 90. Responses always include this field, including 0.
- Constraints for `longitude`: Longitude between -180 and 180. Responses always include this field, including 0.

### LocationCoordinate variant 3

anyOf variant 3: Declared schema LocationCoordinateRequest. A latitude and longitude for a merchant location..

- Constraints for `latitude`: Latitude between -90 and 90. Responses always include this field, including 0.
- Constraints for `longitude`: Longitude between -180 and 180. Responses always include this field, including 0.

