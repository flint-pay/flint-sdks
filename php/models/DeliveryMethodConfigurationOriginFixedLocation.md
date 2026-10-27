[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryMethodConfigurationOriginFixedLocation

Where a delivery method starts, chosen by `type`: a fixed location, an allocated group of locations, or a collection of pickup locations.

The `fixed_location` variant of `DeliveryMethodOriginSelector`.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_location_set_id` | Optional | string |  |
| `delivery_location_set_revision_id` | Optional | string |  |
| `location_id` | Required | string |  |
| `location_ids` | Optional | Array of string |  |
| `type` | Required | string | Values: `"fixed_location"`. |

