[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateInventoryReservationRequestInput

The request body for: Create inventory reservation.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `demands` | Required | Array of [InventoryRoutingDemandInput](../models/InventoryRoutingDemandInput.md#inventoryroutingdemandinput) | minItems: `1`. maxItems: `100`. |
| `expires_at` | Optional | string | Hold deadline, after now and at most 24 hours from now. Defaults to 15 minutes after creation. Format: `date-time`. minLength: `1`. |
| `inventory_routing_source` | Required | [InventoryRoutingSourceRequestInput](../models/InventoryRoutingSourceRequestInput.md#inventoryroutingsourcerequestinput) | Where you want inventory routed from: a fixed Location, an inventory allocation policy, or one policy revision, selected by `type`. |
| `owner` | Required | [InventoryReservationOwnerRequestInput](../models/InventoryReservationOwnerRequestInput.md#inventoryreservationownerrequestinput) | The owner of a merchant inventory reservation you create: your `key` for what holds the stock. |

