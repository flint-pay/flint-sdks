[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryRoutingSource

Where an order, payment link, or reservation routes inventory from: a fixed Location, an inventory allocation policy, or one policy revision.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `inventory_allocation_policy_id` | Optional | string | ID of the allocation policy that routes demand. |
| `inventory_allocation_policy_revision_id` | Optional | string | ID of the allocation policy revision that routes demand. |
| `location_id` | Optional | string | ID of the fixed Location that serves all demand. |
| `type` | Required | string | How Flint routes demand to Locations. Values: `"fixed_location"`, `"policy"`, `"policy_revision"`. |

