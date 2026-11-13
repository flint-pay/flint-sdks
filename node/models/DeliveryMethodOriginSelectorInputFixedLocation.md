[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryMethodOriginSelectorInputFixedLocation

The `fixed_location` variant of `DeliveryMethodOriginSelectorInput`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_location_set_id` | Optional | string | Named delivery location set to reuse. Send either delivery_location_set_id or inline location_ids, never both. The set may contain at most 25 Locations for allocated_origin_group or 1,000 for pickup_location_collection. minLength: `1`. Example: `"dls_01KEZF7C00C4WWN7RYTRF55C4H"`. |
| `location_id` | Required | string | ID of the Location delivery starts from. Required for `fixed_location` and not allowed otherwise. minLength: `1`. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. |
| `location_ids` | Optional | Array of string | Inline Location IDs for a set managed by this delivery method. Send either location_ids or delivery_location_set_id, never both. Use 1 to 25 unique Locations for allocated_origin_group or 1 to 1,000 for pickup_location_collection. Reads return these Location IDs without exposing the managed set. Items: minLength: `1`. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. |
| `type` | Required | string | Where delivery starts. Values: `"fixed_location"`. |

