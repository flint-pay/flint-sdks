[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryMethodOriginSelectorInputAllocatedOriginGroup

The `allocated_origin_group` variant of `DeliveryMethodOriginSelectorInput`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_location_set_id` | Conditional | string | Named delivery location set to reuse. Send either delivery_location_set_id or inline location_ids, never both. The set may contain at most 25 Locations for allocated_origin_group or 1,000 for pickup_location_collection. minLength: `1`. |
| `location_id` | Optional | string | minLength: `1`. |
| `location_ids` | Conditional | Array of string | Inline Location IDs for a set managed by this delivery method. Send either location_ids or delivery_location_set_id, never both. Use 1 to 25 unique Locations for allocated_origin_group or 1 to 1,000 for pickup_location_collection. Reads return these Location IDs without exposing the managed set. minItems: `1`. maxItems: `25`. uniqueItems: `true`. Items: minLength: `1`. |
| `type` | Required | string | Values: `"allocated_origin_group"`. |

### DeliveryMethodOriginSelectorInputAllocatedOriginGroup variant 1: `type` = `"allocated_origin_group"`

oneOf DeliveryMethodOriginSelectorInputAllocatedOriginGroupDeliveryLocationSet: The Delivery location set selector for a allocated_origin_group delivery origin..

- Condition: not (present(`location_id`)).
- Condition: not (at least one(present(`location_id`); present(`location_ids`))).
- Required: `delivery_location_set_id`.
- Optional: `location_ids`.

### DeliveryMethodOriginSelectorInputAllocatedOriginGroup variant 2: `type` = `"allocated_origin_group"`

oneOf DeliveryMethodOriginSelectorInputAllocatedOriginGroupLocations: The Locations selector for a allocated_origin_group delivery origin..

- Condition: not (present(`location_id`)).
- Condition: not (at least one(present(`location_id`); present(`delivery_location_set_id`))).
- Required: `location_ids`.
- Optional: `delivery_location_set_id`.

