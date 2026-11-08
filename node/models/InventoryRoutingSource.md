[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryRoutingSource







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `inventory_allocation_policy_id` | Optional | string | Example: `"invp_01KEZF7C0076BZX855WAGC5SQK"`. |
| `inventory_allocation_policy_revision_id` | Optional | string | Example: `"invpv_01KEZF7C00JSFTTBKC1JY614JJ"`. |
| `location_id` | Optional | string | Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. |
| `type` | Required | string | Values: `"fixed_location"`, `"policy"`, `"policy_revision"`. |

### InventoryRoutingSource variant 1

anyOf variant 1: Declared schema DeliveryPreviewRoutingSource. Chooses where a delivery options preview routes inventory from: a fixed Location, an inventory allocation policy, or one policy revision..

- Constraints for `inventory_allocation_policy_id`: minLength: `1`.
- Constraints for `inventory_allocation_policy_revision_id`: minLength: `1`.
- Constraints for `location_id`: minLength: `1`.

### InventoryRoutingSource variant 2

anyOf variant 2: Declared schema InventoryRoutingSource. Where an order, payment link, or reservation routes inventory from: a fixed Location, an inventory allocation policy, or one policy revision..

- Constraints for `inventory_allocation_policy_id`: ID of the allocation policy that routes demand.
- Constraints for `inventory_allocation_policy_revision_id`: ID of the allocation policy revision that routes demand.
- Constraints for `location_id`: ID of the fixed Location that serves all demand.
- Constraints for `type`: How Flint routes demand to Locations. Values: `"fixed_location"`, `"policy"`, `"policy_revision"`.

