[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryRoutingSourceRequestInput

Where you want inventory routed from: a fixed Location, an inventory allocation policy, or one policy revision, selected by `type`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `location_id` | Conditional | string | minLength: `1`. |
| `type` | Required | string |  |
| `inventory_allocation_policy_id` | Conditional | string | minLength: `1`. |
| `inventory_allocation_policy_revision_id` | Conditional | string | minLength: `1`. |

### InventoryRoutingSourceRequestInput variant 1: `type` = `"fixed_location"`

oneOf variant 1: The `fixed_location` variant of `InventoryRoutingSourceInput`..

- Required: `location_id`.
- Undeclared: `inventory_allocation_policy_id`, `inventory_allocation_policy_revision_id`.
- Constraints for `type`: Values: `"fixed_location"`.

### InventoryRoutingSourceRequestInput variant 2: `type` = `"policy"`

oneOf variant 2: The `policy` variant of `InventoryRoutingSourceInput`..

- Required: `inventory_allocation_policy_id`.
- Undeclared: `location_id`, `inventory_allocation_policy_revision_id`.
- Constraints for `type`: Values: `"policy"`.

### InventoryRoutingSourceRequestInput variant 3: `type` = `"policy_revision"`

oneOf variant 3: The `policy_revision` variant of `InventoryRoutingSourceInput`..

- Required: `inventory_allocation_policy_revision_id`.
- Undeclared: `location_id`, `inventory_allocation_policy_id`.
- Constraints for `type`: Values: `"policy_revision"`.

