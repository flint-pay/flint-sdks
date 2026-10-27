[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryProfileOriginPolicy

Where items under a delivery profile ship or leave from: a fixed Location (`location_id`), inventory routing, or the origin set on the delivery method.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `location_id` | Optional | string |  |
| `type` | Required | string | Values: `"fixed_location"`, `"inventory_routing"`, `"method_origin"`. |

