[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryRadiusOrigin

The point a radius condition measures from: a specific Location (`location_id`) or the delivery method's own origin (`method_origin`).





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `location_id` | Optional | string | ID of the Location to measure from. Send either `location_id` or `method_origin`. minLength: `1`. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. |
| `method_origin` | Optional | boolean | Send `true` to measure from the origin of the delivery method. Send either `location_id` or `method_origin`. |

