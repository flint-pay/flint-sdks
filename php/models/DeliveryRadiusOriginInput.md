[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryRadiusOriginInput

The point a radius condition measures from: a specific Location (`location_id`) or the delivery method's own origin (`method_origin`).

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `location_id` | Optional | string | minLength: `1`. |
| `method_origin` | Optional | boolean |  |

