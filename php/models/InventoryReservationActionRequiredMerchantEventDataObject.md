[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryReservationActionRequiredMerchantEventDataObject

The affected public resource without expansions, client authority fields, or fields computed for an individual caller.

The resource snapshot, without expansions. Webhooks omit no additional fields.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `closed_reason` | Optional | string or null | How the reservation ended. adopted when its remaining held stock moved to a delivery selection. mixed when more than one terminal outcome applied. `null` when the reservation isn't closed. Values: `"consumed"`, `"released"`, `"expired"`, `"reallocated"`, `"adopted"`, `"mixed"`, `null`. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `expires_at` | Required | string or null | Deadline for held or unconfirmed backordered quantity. While an order payment waits for a buyer action, this is the earlier of the stock hold deadline and the payment attempt deadline. Flint can keep stock held while the payment outcome is uncertain. `null` when no line holds quantity or has unconfirmed backordered quantity. Format: `date-time`. |
| `idempotency_key` | Optional | string or null | The Idempotency-Key of the request that created this resource. `null` when that request sent no key, Flint created the resource, the reader isn't the caller that created it (another app install, a buyer, or the merchant reading an app's or buyer's record), or the caller that created an older record is unknown. Filter its list with `idempotency_key` to find it. Recorded payloads, including replayed responses and webhook events, can return `null`. To find a key that a replay returns as `null`, read the resource. |
| `inventory_action_required` | Optional | [InventoryActionRequired](../models/InventoryActionRequired.md#inventoryactionrequired) | Present when the claim needs a merchant action before commerce can continue. Says that an inventory reservation needs action, with the `reason` and the reservation lines affected. `inventory_action_required`: [field definitions](../models/InventoryReservationResponse.md#inventoryreservationresponsedatainventory_action_required). |
| `inventory_reservation_id` | Required | string | Unique identifier for this inventory reservation, prefixed `invr_`. |
| `inventory_routing_source` | Required | [InventoryRoutingSource](../models/InventoryRoutingSource.md#inventoryroutingsource) | How Flint chooses the Locations that serve the reservation: one fixed Location, an allocation policy, or a specific policy revision. Where an order, payment link, or reservation routes inventory from: a fixed Location, an inventory allocation policy, or one policy revision. `inventory_routing_source`: [field definitions](../models/InventoryReservationResponse.md#inventoryreservationresponsedatainventory_routing_source). |
| `lines` | Required | Array of [InventoryReservationLine](../models/InventoryReservationLine.md#inventoryreservationline) | Allocations of the reserved stock, one for each item and Location. `lines[]`: [field definitions](../models/InventoryReservationResponse.md#inventoryreservationresponsedatalines). |
| `owner` | Required | [InventoryReservationOwnerMerchant](../models/InventoryReservationOwnerMerchant.md#inventoryreservationownermerchant) or [InventoryReservationOwnerOrder](../models/InventoryReservationOwnerOrder.md#inventoryreservationownerorder) | Who holds the reservation: a `key` you choose, or an order Flint holds the stock for. Who holds an inventory reservation: either a merchant claim identified by your `key`, or an order. `owner`: [declared alternatives](../models/InventoryReservationResponse.md#inventoryreservationresponsedataowner). |
| `replacement_inventory_reservation_id` | Optional | string | Set on a reservation whose claim Flint moved when it rerouted an order: the replacement reservation that now holds the quantity named in this reservation's reallocated_quantity. |
| `source_inventory_reservation_id` | Optional | string | Set on a replacement reservation: the reservation whose claim Flint moved here when it rerouted an order. This reservation holds the quantity that reservation reports as reallocated_quantity. |
| `status` | Required | string | active while any held, committed, or backordered quantity remains; closed once none does. Values: `"active"`, `"closed"`. |
| `supported_actions` | Required | Array of string | Actions that can change this reservation now. Empty for a closed reservation and for one Flint holds for an order. Resending targets already applied succeeds in any status. Computed when Flint produced this response or event, so replays and webhooks keep their original value. Items values: `"commit"`, `"consume"`, `"release"`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `version` | Required | integer | The reservation version. Send it as expected_version to reject a write if the reservation changed. Format: `uint64`. minimum: `1`. |

### InventoryReservationActionRequiredMerchantEventDataObject.inventory_action_required

Field definitions: [InventoryReservationResponse.data.inventory_action_required](../models/InventoryReservationResponse.md#inventoryreservationresponsedatainventory_action_required).

### InventoryReservationActionRequiredMerchantEventDataObject.inventory_routing_source

Field definitions: [InventoryReservationResponse.data.inventory_routing_source](../models/InventoryReservationResponse.md#inventoryreservationresponsedatainventory_routing_source).

### InventoryReservationActionRequiredMerchantEventDataObject.lines[]

Field definitions: [InventoryReservationResponse.data.lines[]](../models/InventoryReservationResponse.md#inventoryreservationresponsedatalines).

### InventoryReservationActionRequiredMerchantEventDataObject.owner

Declared alternatives: [InventoryReservationResponse.data.owner](../models/InventoryReservationResponse.md#inventoryreservationresponsedataowner).

