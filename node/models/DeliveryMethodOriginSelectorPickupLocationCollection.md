[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryMethodOriginSelectorPickupLocationCollection

The `pickup_location_collection` variant of `DeliveryMethodOriginSelector`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_location_set_id` | Conditional | string |  |
| `delivery_location_set_revision_id` | Optional | string |  |
| `location_id` | Optional | string |  |
| `location_ids` | Conditional | Array of string | minItems: `1`. maxItems: `1000`. uniqueItems: `true`. |
| `type` | Required | string | Values: `"pickup_location_collection"`. |

### DeliveryMethodOriginSelectorPickupLocationCollection variant 1: `type` = `"pickup_location_collection"`

anyOf variant 1.

- Condition: not (present(`location_id`)).
- Required: `delivery_location_set_id`.
- Optional: `location_ids`.

### DeliveryMethodOriginSelectorPickupLocationCollection variant 2: `type` = `"pickup_location_collection"`

anyOf variant 2.

- Condition: not (present(`location_id`)).
- Required: `location_ids`.
- Optional: `delivery_location_set_id`.

