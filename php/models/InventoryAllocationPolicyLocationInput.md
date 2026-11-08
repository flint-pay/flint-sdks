[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryAllocationPolicyLocationInput

A Location in an inventory allocation policy and the priority group it belongs to.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `group_priority` | Required | integer | Priority of the group this Location belongs to. Routing prefers the lowest number. Format: `int32`. minimum: `1`. |
| `location_id` | Required | string | ID of a Location in this priority group. minLength: `1`. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. |

