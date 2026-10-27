[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryMethodOriginSelectorAllocatedOriginGroup

The `allocated_origin_group` variant of `DeliveryMethodOriginSelector`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_location_set_id` | Conditional | string |  |
| `delivery_location_set_revision_id` | Optional | string |  |
| `location_id` | Optional | string |  |
| `location_ids` | Conditional | Array of string | minItems: `1`. maxItems: `25`. uniqueItems: `true`. |
| `type` | Required | string | Values: `"allocated_origin_group"`. |

### DeliveryMethodOriginSelectorAllocatedOriginGroup variant 1: `type` = `"allocated_origin_group"`

anyOf variant 1.

- Condition: not (present(`location_id`)).
- Required: `delivery_location_set_id`.
- Optional: `location_ids`.

### DeliveryMethodOriginSelectorAllocatedOriginGroup variant 2: `type` = `"allocated_origin_group"`

anyOf variant 2.

- Condition: not (present(`location_id`)).
- Required: `location_ids`.
- Optional: `delivery_location_set_id`.

