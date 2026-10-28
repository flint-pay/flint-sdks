[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryMethodOriginSelectorInputAllocatedOriginGroupLocations

The Locations selector for a allocated_origin_group delivery origin.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_location_set_id` | Optional | string | minLength: `1`. |
| `location_id` | Optional | string | minLength: `1`. |
| `location_ids` | Required | Array of string | minItems: `1`. maxItems: `25`. uniqueItems: `true`. Items: minLength: `1`. |
| `type` | Required | string | Values: `"allocated_origin_group"`. |

