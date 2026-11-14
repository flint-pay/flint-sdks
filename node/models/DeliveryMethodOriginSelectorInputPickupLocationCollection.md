[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryMethodOriginSelectorInputPickupLocationCollection

The `pickup_location_collection` variant of `DeliveryMethodOriginSelectorInput`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_location_set_id` | Conditional | string | Named delivery location set to reuse. Send either delivery_location_set_id or inline location_ids, never both. The set may contain at most 25 Locations for allocated_origin_group or 1,000 for pickup_location_collection. minLength: `1`. Example: `"dls_01KEZF7C00C4WWN7RYTRF55C4H"`. ID of the delivery location set that names the Locations in the group. Named delivery location set to reuse. Send either delivery_location_set_id or inline location_ids, never both. The set may contain at most 25 Locations for allocated_origin_group or 1,000 for pickup_location_collection. minLength: `1`. Example: `"dls_01KEZF7C00C4WWN7RYTRF55C4H"`. ID of the delivery location set that names the Locations in the group. |
| `location_id` | Optional | string | ID of the Location delivery starts from. Required for `fixed_location` and not allowed otherwise. minLength: `1`. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. |
| `location_ids` | Conditional | Array of string | Inline Location IDs for a set managed by this delivery method. Send either location_ids or delivery_location_set_id, never both. Use 1 to 25 unique Locations for allocated_origin_group or 1 to 1,000 for pickup_location_collection. Reads return these Location IDs without exposing the managed set. minItems: `1`. maxItems: `1000`. uniqueItems: `true`. IDs of the Locations in the group. Items: minLength: `1`. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. Inline Location IDs for a set managed by this delivery method. Send either location_ids or delivery_location_set_id, never both. Use 1 to 25 unique Locations for allocated_origin_group or 1 to 1,000 for pickup_location_collection. Reads return these Location IDs without exposing the managed set. minItems: `1`. maxItems: `1000`. uniqueItems: `true`. Items: minLength: `1`. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. IDs of the Locations in the group. |
| `type` | Required | string | Where delivery starts. Values: `"pickup_location_collection"`. |

### DeliveryMethodOriginSelectorInputPickupLocationCollection variant 1: `type` = `"pickup_location_collection"`

oneOf DeliveryMethodOriginSelectorInputPickupLocationCollectionDeliveryLocationSet: The Delivery location set selector for a pickup_location_collection delivery origin..

- Condition: not (present(`location_id`)).
- Condition: not (at least one(present(`location_id`); present(`location_ids`))).
- Required: `delivery_location_set_id`.
- Optional: `location_ids`.

### DeliveryMethodOriginSelectorInputPickupLocationCollection variant 2: `type` = `"pickup_location_collection"`

oneOf DeliveryMethodOriginSelectorInputPickupLocationCollectionLocations: The Locations selector for a pickup_location_collection delivery origin..

- Condition: not (present(`location_id`)).
- Condition: not (at least one(present(`location_id`); present(`delivery_location_set_id`))).
- Required: `location_ids`.
- Optional: `delivery_location_set_id`.

