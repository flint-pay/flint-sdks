[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryReservationInput

A claim on stock. Quantity moves from held to committed to consumed, and can be released or reallocated.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `closed_reason` | Optional | string or null | How the reservation ended. mixed when more than one terminal outcome applied. Values: `"consumed"`, `"released"`, `"expired"`, `"reallocated"`, `"mixed"`, `null`. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `expires_at` | Required | string or null | When held quantity is released if it isn't committed first. null once no line holds quantity. Committed and consumed quantity never expire. Format: `date-time`. |
| `idempotency_key` | Required | string | The Idempotency-Key of the command that created this reservation. |
| `inventory_action_required` | Optional | [InventoryActionRequiredInput](../models/InventoryActionRequiredInput.md#inventoryactionrequiredinput) | Present when the claim needs a merchant action before commerce can continue. Says that an inventory reservation needs action, with the `reason` and the reservation lines affected. |
| `inventory_reservation_id` | Required | string |  |
| `inventory_routing_source` | Required | [InventoryRoutingSourceInput](../models/InventoryRoutingSourceInput.md#inventoryroutingsourceinput) | Where an order, payment link, or reservation routes inventory from: a fixed Location, an inventory allocation policy, or one policy revision. |
| `lines` | Required | Array of [InventoryReservationLineInput](../models/InventoryReservationLineInput.md#inventoryreservationlineinput) |  |
| `owner` | Required | [InventoryReservationOwnerInput](../models/InventoryReservationOwnerInput.md#inventoryreservationownerinput) | Who holds an inventory reservation: either a merchant claim identified by your `key`, or an order. |
| `replacement_inventory_reservation_id` | Optional | string | Set on a reservation whose claim Flint moved when it rerouted an order: the replacement reservation that now holds the quantity named in this reservation's reallocated_quantity. |
| `source_inventory_reservation_id` | Optional | string | Set on a replacement reservation: the reservation whose claim Flint moved here when it rerouted an order. This reservation holds the quantity that reservation reports as reallocated_quantity. |
| `status` | Required | string | active while any held or committed quantity remains; closed once none does. Values: `"active"`, `"closed"`. |
| `supported_actions` | Required | Array of string | Actions that can change this reservation now. Empty for a closed reservation and for one Flint holds for an order. Resending targets already applied succeeds in any status. Computed when Flint produced this response or event, so replays and webhooks keep their original value. Items values: `"commit"`, `"consume"`, `"release"`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `version` | Required | integer string | The reservation version. Send it as expected_version to reject a write if the reservation changed. Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `0`. |

