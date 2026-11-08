[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateInventoryReservationRequest

The request body for: Create inventory reservation.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `demands` | Required | Array of [InventoryRoutingDemand](../models/InventoryRoutingDemand.md#inventoryroutingdemand) | Items and quantities to reserve. minItems: `1`. maxItems: `100`. |
| `expires_at` | Optional | string | Hold deadline, after now and at most 24 hours from now. Defaults to 15 minutes after creation. Format: `date-time`. minLength: `1`. Example: `"2026-08-02T16:00:00Z"`. |
| `inventory_routing_source` | Optional | [InventoryRoutingSourceRequest](../models/InventoryRoutingSourceRequest.md#inventoryroutingsourcerequest) | How Flint chooses the Locations that serve the reservation: one fixed Location, an allocation policy, or a specific policy revision. When omitted, the reservation uses and stores `settings.inventory.default_routing_source`; without that default the request returns `400 INVALID_REQUEST` at `inventory_routing_source`. Where you want inventory routed from: a fixed Location, an inventory allocation policy, or one policy revision, selected by `type`. |
| `owner` | Required | [InventoryReservationOwnerRequest](../models/InventoryReservationOwnerRequest.md#inventoryreservationownerrequest) | Who holds the reservation: a `key` you choose, or an order Flint holds the stock for. The owner of a merchant inventory reservation you create: your `key` for what holds the stock. |

