[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryRoutingSource







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `inventory_allocation_policy_id` | Optional | string |  |
| `inventory_allocation_policy_revision_id` | Optional | string |  |
| `location_id` | Optional | string |  |
| `type` | Required | string | Values: `"fixed_location"`, `"policy"`, `"policy_revision"`. |

### InventoryRoutingSource variant 1

anyOf variant 1: Declared schema OrderInventoryRoutingSourceRequest. Where inventory for an order is allocated from: a fixed location, an allocation policy, or a specific policy revision..

- Constraints for `inventory_allocation_policy_id`: minLength: `1`.
- Constraints for `inventory_allocation_policy_revision_id`: minLength: `1`.
- Constraints for `location_id`: minLength: `1`.

### InventoryRoutingSource variant 2

anyOf variant 2: Declared schema InventoryRoutingSource. Where an order, payment link, or reservation routes inventory from: a fixed Location, an inventory allocation policy, or one policy revision..

No additional constraints.

