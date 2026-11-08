[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryMethodOriginSelectorFixedLocation

The `fixed_location` variant of `DeliveryMethodOriginSelector`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_location_set_id` | Optional | string | Example: `"dls_01KEZF7C00C4WWN7RYTRF55C4H"`. |
| `delivery_location_set_revision_id` | Optional | string | Example: `"dlsr_01KEZF7C00HN2NT80H5VNQSVFJ"`. |
| `location_id` | Required | string | Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. |
| `location_ids` | Optional | Array of string | Items: Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. |
| `type` | Required | string | Values: `"fixed_location"`. |

