[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryMethodOriginSelectorInputFixedLocationInput

The `fixed_location` variant of `DeliveryMethodOriginSelectorInput`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_location_set_id` | Optional | string | Named delivery location set to reuse. Send either delivery_location_set_id or inline location_ids, never both. The set may contain at most 25 Locations for allocated_origin_group or 1,000 for pickup_location_collection. minLength: `1`. |
| `location_id` | Required | string | minLength: `1`. |
| `location_ids` | Optional | Array of string | Inline Location IDs for a set managed by this delivery method. Send either location_ids or delivery_location_set_id, never both. Use 1 to 25 unique Locations for allocated_origin_group or 1 to 1,000 for pickup_location_collection. Reads return these Location IDs without exposing the managed set. Items: minLength: `1`. |
| `type` | Required | string | Values: `"fixed_location"`. |

