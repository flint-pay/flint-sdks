[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryProfileOriginPolicy

Where items under a delivery profile ship or leave from: a fixed Location (`location_id`), inventory routing, or the origin set on the delivery method.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `location_id` | Optional | string | ID of the Location items leave from. Required for `fixed_location` and not allowed otherwise. |
| `type` | Required | string | Where items under the profile leave from. Values: `"fixed_location"`, `"inventory_routing"`, `"method_origin"`. |

