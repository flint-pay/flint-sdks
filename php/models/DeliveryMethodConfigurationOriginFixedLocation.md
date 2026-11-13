[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryMethodConfigurationOriginFixedLocation

Where a delivery method starts, chosen by `type`: a fixed location, an allocated group of locations, or a collection of pickup locations.

The `fixed_location` variant of `DeliveryMethodOriginSelector`.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_location_set_id` | Optional | string | ID of the delivery location set that names the Locations in the group. |
| `delivery_location_set_revision_id` | Optional | string | ID of the location set revision in effect for this method revision. |
| `location_id` | Required | string | ID of the Location delivery starts from. Required for `fixed_location` and not allowed otherwise. |
| `location_ids` | Optional | Array of string | IDs of the Locations in the group. |
| `type` | Required | string | Where delivery starts. Values: `"fixed_location"`. |

