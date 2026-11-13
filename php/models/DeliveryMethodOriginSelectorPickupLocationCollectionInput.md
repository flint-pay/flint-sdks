[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryMethodOriginSelectorPickupLocationCollectionInput

The `pickup_location_collection` variant of `DeliveryMethodOriginSelector`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_location_set_id` | Conditional | string | ID of the delivery location set that names the Locations in the group. Example: `"dls_01KEZF7C00C4WWN7RYTRF55C4H"`. |
| `delivery_location_set_revision_id` | Optional | string | ID of the location set revision in effect for this method revision. Example: `"dlsr_01KEZF7C00HN2NT80H5VNQSVFJ"`. |
| `location_id` | Optional | string | ID of the Location delivery starts from. Required for `fixed_location` and not allowed otherwise. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. |
| `location_ids` | Conditional | Array of string | IDs of the Locations in the group. minItems: `1`. maxItems: `1000`. uniqueItems: `true`. Items: Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. |
| `type` | Required | string | Where delivery starts. Values: `"pickup_location_collection"`. |

### DeliveryMethodOriginSelectorPickupLocationCollectionInput variant 1: `type` = `"pickup_location_collection"`

anyOf variant 1.

- Condition: not (present(`location_id`)).
- Required: `delivery_location_set_id`.
- Optional: `location_ids`.

### DeliveryMethodOriginSelectorPickupLocationCollectionInput variant 2: `type` = `"pickup_location_collection"`

anyOf variant 2.

- Condition: not (present(`location_id`)).
- Required: `location_ids`.
- Optional: `delivery_location_set_id`.

