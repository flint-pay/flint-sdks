[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryPreviewRoutingSourceInput

Request input. Response: [InventoryRoutingSource](../models/InventoryRoutingSource.md#inventoryroutingsource).

Chooses where a delivery options preview routes inventory from: a fixed Location, an inventory allocation policy, or one policy revision.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `inventory_allocation_policy_id` | Optional | string | minLength: `1`. Example: `"invp_01KEZF7C0076BZX855WAGC5SQK"`. |
| `inventory_allocation_policy_revision_id` | Optional | string | minLength: `1`. Example: `"invpv_01KEZF7C00JSFTTBKC1JY614JJ"`. |
| `location_id` | Optional | string | minLength: `1`. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. |
| `type` | Required | string | Values: `"fixed_location"`, `"policy"`, `"policy_revision"`. |

