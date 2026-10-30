[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryMethodOriginSelector

Where a delivery method starts, chosen by `type`: a fixed location, an allocated group of locations, or a collection of pickup locations.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_location_set_id` | Conditional | string |  |
| `delivery_location_set_revision_id` | Optional | string |  |
| `location_id` | Conditional | string |  |
| `location_ids` | Conditional | Array of string |  |
| `type` | Required | string | Values: `"fixed_location"`, `"allocated_origin_group"`, `"pickup_location_collection"`. |

### DeliveryMethodOriginSelector variant 1: `type` = `"fixed_location"`

oneOf with type: "fixed_location": The `fixed_location` variant of `DeliveryMethodOriginSelector`..

- Condition: not (at least one(present(`delivery_location_set_id`); present(`delivery_location_set_revision_id`); present(`location_ids`))).
- Required: `location_id`.
- Optional: `delivery_location_set_id`, `location_ids`.
- Constraints for `type`: Values: `"fixed_location"`.

### DeliveryMethodOriginSelector variant 2: `type` = `"allocated_origin_group"`

oneOf with type: "allocated_origin_group": The `allocated_origin_group` variant of `DeliveryMethodOriginSelector`.; anyOf variant 1.

- Condition: not (present(`location_id`)).
- Required: `delivery_location_set_id`.
- Optional: `location_id`, `location_ids`.
- Constraints for `location_ids`: minItems: `1`. maxItems: `25`. uniqueItems: `true`.
- Constraints for `type`: Values: `"allocated_origin_group"`.

### DeliveryMethodOriginSelector variant 3: `type` = `"allocated_origin_group"`

oneOf with type: "allocated_origin_group": The `allocated_origin_group` variant of `DeliveryMethodOriginSelector`.; anyOf variant 2.

- Condition: not (present(`location_id`)).
- Required: `location_ids`.
- Optional: `delivery_location_set_id`, `location_id`.
- Constraints for `location_ids`: minItems: `1`. maxItems: `25`. uniqueItems: `true`.
- Constraints for `type`: Values: `"allocated_origin_group"`.

### DeliveryMethodOriginSelector variant 4: `type` = `"pickup_location_collection"`

oneOf with type: "pickup_location_collection": The `pickup_location_collection` variant of `DeliveryMethodOriginSelector`.; anyOf variant 1.

- Condition: not (present(`location_id`)).
- Required: `delivery_location_set_id`.
- Optional: `location_id`, `location_ids`.
- Constraints for `location_ids`: minItems: `1`. maxItems: `1000`. uniqueItems: `true`.
- Constraints for `type`: Values: `"pickup_location_collection"`.

### DeliveryMethodOriginSelector variant 5: `type` = `"pickup_location_collection"`

oneOf with type: "pickup_location_collection": The `pickup_location_collection` variant of `DeliveryMethodOriginSelector`.; anyOf variant 2.

- Condition: not (present(`location_id`)).
- Required: `location_ids`.
- Optional: `delivery_location_set_id`, `location_id`.
- Constraints for `location_ids`: minItems: `1`. maxItems: `1000`. uniqueItems: `true`.
- Constraints for `type`: Values: `"pickup_location_collection"`.

