[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryRoutingSourceInputPolicyRevisionInput

The `policy_revision` variant of `InventoryRoutingSourceInput`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `inventory_allocation_policy_revision_id` | Required | string | ID of the allocation policy revision that routes demand. minLength: `1`. Example: `"invpv_01KEZF7C00JSFTTBKC1JY614JJ"`. |
| `type` | Required | string | How Flint routes demand to Locations. Values: `"policy_revision"`. |

