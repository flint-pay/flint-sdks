[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryReservationResponse

A response containing `InventoryReservation` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [InventoryReservation](../models/InventoryReservation.md#inventoryreservation) | Resource, collection, or operation result returned by this request. A claim on stock. Quantity moves from held to committed to consumed, and can be released or reallocated. `data`: [field definitions](../models/InventoryReservationResponse.md#inventoryreservationresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### InventoryReservationResponse.data

Resource, collection, or operation result returned by this request. A claim on stock. Quantity moves from held to committed to consumed, and can be released or reallocated.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `closed_reason` | Optional | string or null | How the reservation ended. mixed when more than one terminal outcome applied. `null` when the reservation isn't closed. Values: `"consumed"`, `"released"`, `"expired"`, `"reallocated"`, `"mixed"`, `null`. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `expires_at` | Required | string or null | When held quantity is released if it isn't committed first. Backordered quantity that payment hasn't confirmed yet carries the same deadline. Committed and consumed quantity never expire. `null` when no line holds quantity or has unconfirmed backordered quantity. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `idempotency_key` | Optional | string | The Idempotency-Key of the request that created this resource; on a movement, of the command that wrote it. Omitted when that request had no key. |
| `inventory_action_required` | Optional | [InventoryActionRequired](../models/InventoryActionRequired.md#inventoryactionrequired) | Present when the claim needs a merchant action before commerce can continue. Says that an inventory reservation needs action, with the `reason` and the reservation lines affected. `inventory_action_required`: [field definitions](../models/InventoryReservationResponse.md#inventoryreservationresponsedatainventory_action_required). |
| `inventory_reservation_id` | Required | string | Unique identifier for this inventory reservation, prefixed `invr_`. Example: `"invr_01KEZF7C0041ENRR0C2NF3AP12"`. |
| `inventory_routing_source` | Required | [InventoryRoutingSource](../models/InventoryRoutingSource.md#inventoryroutingsource) | How Flint chooses the Locations that serve the reservation: one fixed Location, an allocation policy, or a specific policy revision. Where an order, payment link, or reservation routes inventory from: a fixed Location, an inventory allocation policy, or one policy revision. `inventory_routing_source`: [field definitions](../models/InventoryReservationResponse.md#inventoryreservationresponsedatainventory_routing_source). |
| `lines` | Required | Array of [InventoryReservationLine](../models/InventoryReservationLine.md#inventoryreservationline) | Allocations of the reserved stock, one for each item and Location. `lines[]`: [field definitions](../models/InventoryReservationResponse.md#inventoryreservationresponsedatalines). |
| `owner` | Required | [InventoryReservationOwnerMerchant](../models/InventoryReservationOwnerMerchant.md#inventoryreservationownermerchant) or [InventoryReservationOwnerOrder](../models/InventoryReservationOwnerOrder.md#inventoryreservationownerorder) | Who holds the reservation: a `key` you choose, or an order Flint holds the stock for. Who holds an inventory reservation: either a merchant claim identified by your `key`, or an order. `owner`: [declared alternatives](../models/InventoryReservationResponse.md#inventoryreservationresponsedataowner). |
| `replacement_inventory_reservation_id` | Optional | string | Set on a reservation whose claim Flint moved when it rerouted an order: the replacement reservation that now holds the quantity named in this reservation's reallocated_quantity. Example: `"invr_01KEZF7C0041ENRR0C2NF3AP12"`. |
| `source_inventory_reservation_id` | Optional | string | Set on a replacement reservation: the reservation whose claim Flint moved here when it rerouted an order. This reservation holds the quantity that reservation reports as reallocated_quantity. Example: `"invr_01KEZF7C0041ENRR0C2NF3AP12"`. |
| `status` | Required | string | active while any held, committed, or backordered quantity remains; closed once none does. Values: `"active"`, `"closed"`. |
| `supported_actions` | Required | Array of string | Actions that can change this reservation now. Empty for a closed reservation and for one Flint holds for an order. Resending targets already applied succeeds in any status. Computed when Flint produced this response or event, so replays and webhooks keep their original value. Items values: `"commit"`, `"consume"`, `"release"`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `version` | Required | integer | The reservation version. Send it as expected_version to reject a write if the reservation changed. Format: `uint64`. minimum: `1`. |

### InventoryReservationResponse.data.inventory_action_required

Present when the claim needs a merchant action before commerce can continue. Says that an inventory reservation needs action, with the `reason` and the reservation lines affected.

Field definitions: [shared fields](InventoryActionRequiredInput.md#inventoryactionrequiredinput).

### InventoryReservationResponse.data.inventory_routing_source

How Flint chooses the Locations that serve the reservation: one fixed Location, an allocation policy, or a specific policy revision. Where an order, payment link, or reservation routes inventory from: a fixed Location, an inventory allocation policy, or one policy revision.

Field definitions: [shared fields](InventoryRoutingSourceInput.md#inventoryroutingsourceinput).

### InventoryReservationResponse.data.lines[]

One item's location allocation within a reservation.

Field definitions: [shared fields](InventoryReservationLineInput.md#inventoryreservationlineinput).

### InventoryReservationResponse.data.owner

Who holds the reservation: a `key` you choose, or an order Flint holds the stock for. Who holds an inventory reservation: either a merchant claim identified by your `key`, or an order.

Field definitions: [shared fields](InventoryReservationOwnerInput.md#inventoryreservationownerinput).

### InventoryReservationResponse.data.owner variant 1: `type` = `"merchant"`

oneOf with type: "merchant": The `merchant` variant of `InventoryReservationOwner`..

- Required: `key`.
- Undeclared: `order_id`.
- Constraints for `type`: Values: `"merchant"`.

### InventoryReservationResponse.data.owner variant 2: `type` = `"order"`

oneOf with type: "order": The `order` variant of `InventoryReservationOwner`..

- Optional: `order_id`.
- Undeclared: `key`.
- Constraints for `type`: Values: `"order"`.

### InventoryReservationResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

