[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryRoutingSourceInputFixedLocationInput

The `fixed_location` variant of `InventoryRoutingSourceInput`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `location_id` | Required | string | ID of the fixed Location that serves all demand. minLength: `1`. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. |
| `type` | Required | string | How Flint routes demand to Locations. Values: `"fixed_location"`. |

