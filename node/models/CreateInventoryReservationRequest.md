[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateInventoryReservationRequest

The request body for: Create inventory reservation.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `demands` | Required | Array of [InventoryRoutingDemand](../models/InventoryRoutingDemand.md#inventoryroutingdemand) | minItems: `1`. maxItems: `100`. |
| `expires_at` | Optional | string | Hold deadline, after now and at most 24 hours from now. Defaults to 15 minutes after creation. Format: `date-time`. minLength: `1`. |
| `inventory_routing_source` | Required | [InventoryRoutingSourceRequest](../models/InventoryRoutingSourceRequest.md#inventoryroutingsourcerequest) | Where you want inventory routed from: a fixed Location, an inventory allocation policy, or one policy revision, selected by `type`. |
| `owner` | Required | [InventoryReservationOwnerRequest](../models/InventoryReservationOwnerRequest.md#inventoryreservationownerrequest) | The owner of a merchant inventory reservation you create: your `key` for what holds the stock. |

