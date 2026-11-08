[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryRoutingSourceRequestInput

Where you want inventory routed from: a fixed Location, an inventory allocation policy, or one policy revision, selected by `type`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `location_id` | Conditional | string | ID of the fixed Location that serves all demand. minLength: `1`. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. |
| `type` | Required | string | How Flint routes demand to Locations. |
| `inventory_allocation_policy_id` | Conditional | string | ID of the allocation policy that routes demand. minLength: `1`. Example: `"invp_01KEZF7C0076BZX855WAGC5SQK"`. |
| `inventory_allocation_policy_revision_id` | Conditional | string | ID of the allocation policy revision that routes demand. minLength: `1`. Example: `"invpv_01KEZF7C00JSFTTBKC1JY614JJ"`. |

### InventoryRoutingSourceRequestInput variant 1: `type` = `"fixed_location"`

oneOf with type: "fixed_location": The `fixed_location` variant of `InventoryRoutingSourceInput`..

- Required: `location_id`.
- Undeclared: `inventory_allocation_policy_id`, `inventory_allocation_policy_revision_id`.
- Constraints for `type`: Values: `"fixed_location"`.

### InventoryRoutingSourceRequestInput variant 2: `type` = `"policy"`

oneOf with type: "policy": The `policy` variant of `InventoryRoutingSourceInput`..

- Required: `inventory_allocation_policy_id`.
- Undeclared: `location_id`, `inventory_allocation_policy_revision_id`.
- Constraints for `type`: Values: `"policy"`.

### InventoryRoutingSourceRequestInput variant 3: `type` = `"policy_revision"`

oneOf with type: "policy_revision": The `policy_revision` variant of `InventoryRoutingSourceInput`..

- Required: `inventory_allocation_policy_revision_id`.
- Undeclared: `location_id`, `inventory_allocation_policy_id`.
- Constraints for `type`: Values: `"policy_revision"`.

