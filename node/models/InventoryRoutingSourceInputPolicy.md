[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryRoutingSourceInputPolicy

The `policy` variant of `InventoryRoutingSourceInput`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `inventory_allocation_policy_id` | Required | string | ID of the allocation policy that routes demand. minLength: `1`. Example: `"invp_01KEZF7C0076BZX855WAGC5SQK"`. |
| `type` | Required | string | How Flint routes demand to Locations. Values: `"policy"`. |

