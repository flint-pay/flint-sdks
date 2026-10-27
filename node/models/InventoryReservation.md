[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryReservation

A claim on stock. Quantity moves from held to committed to consumed, and can be released or reallocated.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `closed_reason` | Optional | string or null | How the reservation ended. mixed when more than one terminal outcome applied. Values: `"consumed"`, `"released"`, `"expired"`, `"reallocated"`, `"mixed"`, `null`. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `expires_at` | Required | string or null | When held quantity is released if it isn't committed first. null once no line holds quantity. Committed and consumed quantity never expire. Format: `date-time`. |
| `idempotency_key` | Optional | string | The Idempotency-Key of the request that created this resource; on a movement, of the command that wrote it. Omitted when that request had no key. |
| `inventory_action_required` | Optional | [InventoryActionRequired](../models/InventoryActionRequired.md#inventoryactionrequired) | Present when the claim needs a merchant action before commerce can continue. Says that an inventory reservation needs action, with the `reason` and the reservation lines affected. |
| `inventory_reservation_id` | Required | string |  |
| `inventory_routing_source` | Required | [InventoryRoutingSource](../models/InventoryRoutingSource.md#inventoryroutingsource) | Where an order, payment link, or reservation routes inventory from: a fixed Location, an inventory allocation policy, or one policy revision. `inventory_routing_source`: [field definitions](../models/IncomingWebhook0452cf0e91f7Payload.md#incomingwebhook0452cf0e91f7payloaddataobjectinventory_routing_source). |
| `lines` | Required | Array of [InventoryReservationLine](../models/InventoryReservationLine.md#inventoryreservationline) |  |
| `owner` | Required | [InventoryReservationOwner](../models/InventoryReservationOwner.md#inventoryreservationowner) | Who holds an inventory reservation: either a merchant claim identified by your `key`, or an order. |
| `replacement_inventory_reservation_id` | Optional | string | Set on a reservation whose claim Flint moved when it rerouted an order: the replacement reservation that now holds the quantity named in this reservation's reallocated_quantity. |
| `source_inventory_reservation_id` | Optional | string | Set on a replacement reservation: the reservation whose claim Flint moved here when it rerouted an order. This reservation holds the quantity that reservation reports as reallocated_quantity. |
| `status` | Required | string | active while any held or committed quantity remains; closed once none does. Values: `"active"`, `"closed"`. |
| `supported_actions` | Required | Array of string | Actions that can change this reservation now. Empty for a closed reservation and for one Flint holds for an order. Resending targets already applied succeeds in any status. Computed when Flint produced this response or event, so replays and webhooks keep their original value. Items values: `"commit"`, `"consume"`, `"release"`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `version` | Required | integer string | The reservation version. Send it as expected_version to reject a write if the reservation changed. Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `0`. |

### InventoryReservation.inventory_routing_source

Field definitions: [IncomingWebhook0452cf0e91f7Payload.data.object.inventory_routing_source](../models/IncomingWebhook0452cf0e91f7Payload.md#incomingwebhook0452cf0e91f7payloaddataobjectinventory_routing_source).

