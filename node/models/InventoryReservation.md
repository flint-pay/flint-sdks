[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryReservation

A claim on stock. Quantity moves from held to committed to consumed, and can be released or reallocated.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `closed_reason` | Optional | string or null | How the reservation ended. adopted when its remaining held stock moved to a delivery selection. mixed when more than one terminal outcome applied. `null` when the reservation isn't closed. Values: `"consumed"`, `"released"`, `"expired"`, `"reallocated"`, `"adopted"`, `"mixed"`, `null`. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `expires_at` | Required | string or null | When held quantity is released if it isn't committed first. Backordered quantity that payment hasn't confirmed yet carries the same deadline. Committed and consumed quantity never expire. `null` when no line holds quantity or has unconfirmed backordered quantity. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `idempotency_key` | Optional | string | The Idempotency-Key of the request that created this resource; on a movement, of the command that wrote it. Omitted when that request had no key. |
| `inventory_action_required` | Optional | [InventoryActionRequired](../models/InventoryActionRequired.md#inventoryactionrequired) | Present when the claim needs a merchant action before commerce can continue. Says that an inventory reservation needs action, with the `reason` and the reservation lines affected. |
| `inventory_reservation_id` | Required | string | Unique identifier for this inventory reservation, prefixed `invr_`. Example: `"invr_01KEZF7C0041ENRR0C2NF3AP12"`. |
| `inventory_routing_source` | Required | [InventoryRoutingSource](../models/InventoryRoutingSource.md#inventoryroutingsource) | How Flint chooses the Locations that serve the reservation: one fixed Location, an allocation policy, or a specific policy revision. Where an order, payment link, or reservation routes inventory from: a fixed Location, an inventory allocation policy, or one policy revision. |
| `lines` | Required | Array of [InventoryReservationLine](../models/InventoryReservationLine.md#inventoryreservationline) | Allocations of the reserved stock, one for each item and Location. |
| `owner` | Required | [InventoryReservationOwner](../models/InventoryReservationOwner.md#inventoryreservationowner) | Who holds the reservation: a `key` you choose, or an order Flint holds the stock for. Who holds an inventory reservation: either a merchant claim identified by your `key`, or an order. |
| `replacement_inventory_reservation_id` | Optional | string | Set on a reservation whose claim Flint moved when it rerouted an order: the replacement reservation that now holds the quantity named in this reservation's reallocated_quantity. Example: `"invr_01KEZF7C0041ENRR0C2NF3AP12"`. |
| `source_inventory_reservation_id` | Optional | string | Set on a replacement reservation: the reservation whose claim Flint moved here when it rerouted an order. This reservation holds the quantity that reservation reports as reallocated_quantity. Example: `"invr_01KEZF7C0041ENRR0C2NF3AP12"`. |
| `status` | Required | string | active while any held, committed, or backordered quantity remains; closed once none does. Values: `"active"`, `"closed"`. |
| `supported_actions` | Required | Array of string | Actions that can change this reservation now. Empty for a closed reservation and for one Flint holds for an order. Resending targets already applied succeeds in any status. Computed when Flint produced this response or event, so replays and webhooks keep their original value. Items values: `"commit"`, `"consume"`, `"release"`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `version` | Required | integer | The reservation version. Send it as expected_version to reject a write if the reservation changed. Format: `uint64`. minimum: `1`. |

