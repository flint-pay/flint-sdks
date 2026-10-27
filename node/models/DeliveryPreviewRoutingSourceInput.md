[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryPreviewRoutingSourceInput

Request input. Response: [InventoryRoutingSource](../models/InventoryRoutingSource.md#inventoryroutingsource).

Chooses where a delivery options preview routes inventory from: a fixed Location, an inventory allocation policy, or one policy revision.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `inventory_allocation_policy_id` | Optional | string | minLength: `1`. |
| `inventory_allocation_policy_revision_id` | Optional | string | minLength: `1`. |
| `location_id` | Optional | string | minLength: `1`. |
| `type` | Required | string | Values: `"fixed_location"`, `"policy"`, `"policy_revision"`. |

