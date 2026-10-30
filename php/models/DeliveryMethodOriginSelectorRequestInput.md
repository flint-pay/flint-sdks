[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryMethodOriginSelectorRequestInput

The origin you supply for a delivery method, chosen by `type`: a fixed location, or locations from a delivery location set or an inline list.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_location_set_id` | Conditional | string | Named delivery location set to reuse. Send either delivery_location_set_id or inline location_ids, never both. The set may contain at most 25 Locations for allocated_origin_group or 1,000 for pickup_location_collection. minLength: `1`. |
| `location_id` | Conditional | string | minLength: `1`. |
| `location_ids` | Conditional | Array of string | Inline Location IDs for a set managed by this delivery method. Send either location_ids or delivery_location_set_id, never both. Use 1 to 25 unique Locations for allocated_origin_group or 1 to 1,000 for pickup_location_collection. Reads return these Location IDs without exposing the managed set. Items: minLength: `1`. |
| `type` | Required | string | Values: `"fixed_location"`, `"allocated_origin_group"`, `"pickup_location_collection"`. |

### DeliveryMethodOriginSelectorRequestInput variant 1: `type` = `"fixed_location"`

oneOf with type: "fixed_location": The `fixed_location` variant of `DeliveryMethodOriginSelectorInput`..

- Condition: not (at least one(present(`delivery_location_set_id`); present(`delivery_location_set_revision_id`); present(`location_ids`))).
- Required: `location_id`.
- Optional: `delivery_location_set_id`, `location_ids`.
- Constraints for `type`: Values: `"fixed_location"`.

### DeliveryMethodOriginSelectorRequestInput variant 2: `type` = `"allocated_origin_group"`

oneOf with type: "allocated_origin_group": The `allocated_origin_group` variant of `DeliveryMethodOriginSelectorInput`.; oneOf DeliveryMethodOriginSelectorInputAllocatedOriginGroupDeliveryLocationSet: The Delivery location set selector for a allocated_origin_group delivery origin..

- Condition: not (present(`location_id`)).
- Condition: not (at least one(present(`location_id`); present(`location_ids`))).
- Required: `delivery_location_set_id`.
- Optional: `location_id`, `location_ids`.
- Constraints for `location_ids`: minItems: `1`. maxItems: `25`. uniqueItems: `true`.
- Constraints for `type`: Values: `"allocated_origin_group"`.

### DeliveryMethodOriginSelectorRequestInput variant 3: `type` = `"allocated_origin_group"`

oneOf with type: "allocated_origin_group": The `allocated_origin_group` variant of `DeliveryMethodOriginSelectorInput`.; oneOf DeliveryMethodOriginSelectorInputAllocatedOriginGroupLocations: The Locations selector for a allocated_origin_group delivery origin..

- Condition: not (present(`location_id`)).
- Condition: not (at least one(present(`location_id`); present(`delivery_location_set_id`))).
- Required: `location_ids`.
- Optional: `delivery_location_set_id`, `location_id`.
- Constraints for `location_ids`: minItems: `1`. maxItems: `25`. uniqueItems: `true`.
- Constraints for `type`: Values: `"allocated_origin_group"`.

### DeliveryMethodOriginSelectorRequestInput variant 4: `type` = `"pickup_location_collection"`

oneOf with type: "pickup_location_collection": The `pickup_location_collection` variant of `DeliveryMethodOriginSelectorInput`.; oneOf DeliveryMethodOriginSelectorInputPickupLocationCollectionDeliveryLocationSet: The Delivery location set selector for a pickup_location_collection delivery origin..

- Condition: not (present(`location_id`)).
- Condition: not (at least one(present(`location_id`); present(`location_ids`))).
- Required: `delivery_location_set_id`.
- Optional: `location_id`, `location_ids`.
- Constraints for `location_ids`: minItems: `1`. maxItems: `1000`. uniqueItems: `true`.
- Constraints for `type`: Values: `"pickup_location_collection"`.

### DeliveryMethodOriginSelectorRequestInput variant 5: `type` = `"pickup_location_collection"`

oneOf with type: "pickup_location_collection": The `pickup_location_collection` variant of `DeliveryMethodOriginSelectorInput`.; oneOf DeliveryMethodOriginSelectorInputPickupLocationCollectionLocations: The Locations selector for a pickup_location_collection delivery origin..

- Condition: not (present(`location_id`)).
- Condition: not (at least one(present(`location_id`); present(`delivery_location_set_id`))).
- Required: `location_ids`.
- Optional: `delivery_location_set_id`, `location_id`.
- Constraints for `location_ids`: minItems: `1`. maxItems: `1000`. uniqueItems: `true`.
- Constraints for `type`: Values: `"pickup_location_collection"`.

