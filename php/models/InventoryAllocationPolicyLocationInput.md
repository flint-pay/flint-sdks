[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryAllocationPolicyLocationInput

A Location in an inventory allocation policy and the priority group it belongs to.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `group_priority` | Required | integer | Format: `int32`. minimum: `1`. |
| `location_id` | Required | string | minLength: `1`. |

