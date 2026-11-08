[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryRoutingSourceInput

Where an order, payment link, or reservation routes inventory from: a fixed Location, an inventory allocation policy, or one policy revision.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `inventory_allocation_policy_id` | Optional | string | ID of the allocation policy that routes demand. Example: `"invp_01KEZF7C0076BZX855WAGC5SQK"`. |
| `inventory_allocation_policy_revision_id` | Optional | string | ID of the allocation policy revision that routes demand. Example: `"invpv_01KEZF7C00JSFTTBKC1JY614JJ"`. |
| `location_id` | Optional | string | ID of the fixed Location that serves all demand. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. |
| `type` | Required | string | How Flint routes demand to Locations. Values: `"fixed_location"`, `"policy"`, `"policy_revision"`. |

