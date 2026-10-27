[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryRoutingSourceInput

Where an order, payment link, or reservation routes inventory from: a fixed Location, an inventory allocation policy, or one policy revision.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `inventory_allocation_policy_id` | Optional | string |  |
| `inventory_allocation_policy_revision_id` | Optional | string |  |
| `location_id` | Optional | string |  |
| `type` | Required | string | Values: `"fixed_location"`, `"policy"`, `"policy_revision"`. |

