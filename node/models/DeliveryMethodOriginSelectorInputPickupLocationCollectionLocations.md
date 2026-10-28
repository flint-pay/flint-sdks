[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryMethodOriginSelectorInputPickupLocationCollectionLocations

The Locations selector for a pickup_location_collection delivery origin.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_location_set_id` | Optional | string | minLength: `1`. |
| `location_id` | Optional | string | minLength: `1`. |
| `location_ids` | Required | Array of string | minItems: `1`. maxItems: `1000`. uniqueItems: `true`. Items: minLength: `1`. |
| `type` | Required | string | Values: `"pickup_location_collection"`. |

