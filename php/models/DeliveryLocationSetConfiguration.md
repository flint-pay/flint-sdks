[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryLocationSetConfiguration

The location IDs in a delivery location set.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `location_ids` | Required | Array of string | IDs of the Locations in the set, from 1 to 1,000. An allocated origin group accepts at most 25. Items: minLength: `1`. |

