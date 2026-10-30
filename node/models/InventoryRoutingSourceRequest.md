[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryRoutingSourceRequest

Where you want inventory routed from: a fixed Location, an inventory allocation policy, or one policy revision, selected by `type`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `location_id` | Conditional | string | minLength: `1`. |
| `type` | Required | string |  |
| `inventory_allocation_policy_id` | Conditional | string | minLength: `1`. |
| `inventory_allocation_policy_revision_id` | Conditional | string | minLength: `1`. |

### InventoryRoutingSourceRequest variant 1: `type` = `"fixed_location"`

oneOf with type: "fixed_location": The `fixed_location` variant of `InventoryRoutingSourceInput`..

- Required: `location_id`.
- Undeclared: `inventory_allocation_policy_id`, `inventory_allocation_policy_revision_id`.
- Constraints for `type`: Values: `"fixed_location"`.

### InventoryRoutingSourceRequest variant 2: `type` = `"policy"`

oneOf with type: "policy": The `policy` variant of `InventoryRoutingSourceInput`..

- Required: `inventory_allocation_policy_id`.
- Undeclared: `location_id`, `inventory_allocation_policy_revision_id`.
- Constraints for `type`: Values: `"policy"`.

### InventoryRoutingSourceRequest variant 3: `type` = `"policy_revision"`

oneOf with type: "policy_revision": The `policy_revision` variant of `InventoryRoutingSourceInput`..

- Required: `inventory_allocation_policy_revision_id`.
- Undeclared: `location_id`, `inventory_allocation_policy_id`.
- Constraints for `type`: Values: `"policy_revision"`.

