[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryReservationActionRequiredMerchantEventDataPreviousAttributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `closed_reason` | Optional | string or null or null | How the reservation ended. adopted when its remaining held stock moved to a delivery selection. mixed when more than one terminal outcome applied. `null` when the reservation isn't closed. Values: `"consumed"`, `"released"`, `"expired"`, `"reallocated"`, `"adopted"`, `"mixed"`, `null`. `closed_reason`: [declared alternatives](../models/InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.md#inventoryreservationactionrequiredmerchanteventdatapreviousattributesclosed_reason). |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `expires_at` | Optional | string or null or null | When held quantity is released if it isn't committed first. Backordered quantity that payment hasn't confirmed yet carries the same deadline. Committed and consumed quantity never expire. `null` when no line holds quantity or has unconfirmed backordered quantity. `expires_at`: [declared alternatives](../models/InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.md#inventoryreservationactionrequiredmerchanteventdatapreviousattributesexpires_at). |
| `idempotency_key` | Optional | string or null | The Idempotency-Key of the request that created this resource; on a movement, of the command that wrote it. Omitted when that request had no key. `idempotency_key`: [declared alternatives](../models/InventoryCountAppliedMerchantEventDataPreviousAttributes.md#inventorycountappliedmerchanteventdatapreviousattributesidempotency_key). |
| `inventory_action_required` | Optional | [InventoryActionRequired](../models/InventoryActionRequired.md#inventoryactionrequired) or null | Present when the claim needs a merchant action before commerce can continue. |
| `inventory_reservation_id` | Optional | string or null | Unique identifier for this inventory reservation, prefixed `invr_`. `inventory_reservation_id`: [declared alternatives](../models/InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.md#inventoryreservationactionrequiredmerchanteventdatapreviousattributesinventory_reservation_id). |
| `inventory_routing_source` | Optional | [InventoryRoutingSource](../models/InventoryRoutingSource.md#inventoryroutingsource) or null | How Flint chooses the Locations that serve the reservation: one fixed Location, an allocation policy, or a specific policy revision. |
| `lines` | Optional | Array of [InventoryReservationLine](../models/InventoryReservationLine.md#inventoryreservationline) or null | Allocations of the reserved stock, one for each item and Location. `lines`: [declared alternatives](../models/InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.md#inventoryreservationactionrequiredmerchanteventdatapreviousattributeslines). |
| `owner` | Optional | [InventoryReservationOwnerMerchant](../models/InventoryReservationOwnerMerchant.md#inventoryreservationownermerchant) or [InventoryReservationOwnerOrder](../models/InventoryReservationOwnerOrder.md#inventoryreservationownerorder) or null | Who holds the reservation: a `key` you choose, or an order Flint holds the stock for. |
| `replacement_inventory_reservation_id` | Optional | string or null | Set on a reservation whose claim Flint moved when it rerouted an order: the replacement reservation that now holds the quantity named in this reservation's reallocated_quantity. `replacement_inventory_reservation_id`: [declared alternatives](../models/InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.md#inventoryreservationactionrequiredmerchanteventdatapreviousattributesreplacement_inventory_reservation_id). |
| `source_inventory_reservation_id` | Optional | string or null | Set on a replacement reservation: the reservation whose claim Flint moved here when it rerouted an order. This reservation holds the quantity that reservation reports as reallocated_quantity. `source_inventory_reservation_id`: [declared alternatives](../models/InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.md#inventoryreservationactionrequiredmerchanteventdatapreviousattributessource_inventory_reservation_id). |
| `status` | Optional | string or null | active while any held, committed, or backordered quantity remains; closed once none does. Values: `"active"`, `"closed"`. `status`: [declared alternatives](../models/InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.md#inventoryreservationactionrequiredmerchanteventdatapreviousattributesstatus). |
| `supported_actions` | Optional | Array of string or null | Actions that can change this reservation now. Empty for a closed reservation and for one Flint holds for an order. Resending targets already applied succeeds in any status. Computed when Flint produced this response or event, so replays and webhooks keep their original value. Items values: `"commit"`, `"consume"`, `"release"`. `supported_actions`: [declared alternatives](../models/InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.md#inventoryreservationactionrequiredmerchanteventdatapreviousattributessupported_actions). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `version` | Optional | integer or null | The reservation version. Send it as expected_version to reject a write if the reservation changed. `version`: [declared alternatives](../models/InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.md#inventoryreservationactionrequiredmerchanteventdatapreviousattributesversion). |

### InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.closed_reason

### InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.closed_reason variant 1

anyOf variant 1: How the reservation ended. adopted when its remaining held stock moved to a delivery selection. mixed when more than one terminal outcome applied. `null` when the reservation isn't closed..

- Value shape: (string or null). How the reservation ended. adopted when its remaining held stock moved to a delivery selection. mixed when more than one terminal outcome applied. `null` when the reservation isn't closed. Values: `"consumed"`, `"released"`, `"expired"`, `"reallocated"`, `"adopted"`, `"mixed"`, `null`.

### InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.closed_reason variant 2

anyOf variant 2.

- Value shape: null. How the reservation ended. adopted when its remaining held stock moved to a delivery selection. mixed when more than one terminal outcome applied. `null` when the reservation isn't closed. 

### InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.expires_at

### InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.expires_at variant 1

anyOf variant 1: When held quantity is released if it isn't committed first. Backordered quantity that payment hasn't confirmed yet carries the same deadline. Committed and consumed quantity never expire. `null` when no line holds quantity or has unconfirmed backordered quantity..

- Value shape: (string or null). When held quantity is released if it isn't committed first. Backordered quantity that payment hasn't confirmed yet carries the same deadline. Committed and consumed quantity never expire. `null` when no line holds quantity or has unconfirmed backordered quantity. When held quantity is released if it isn't committed first. Backordered quantity that payment hasn't confirmed yet carries the same deadline. Committed and consumed quantity never expire. `null` when no line holds quantity or has unconfirmed backordered quantity. Format: `date-time`. 

### InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.expires_at variant 2

anyOf variant 2.

- Value shape: null. When held quantity is released if it isn't committed first. Backordered quantity that payment hasn't confirmed yet carries the same deadline. Committed and consumed quantity never expire. `null` when no line holds quantity or has unconfirmed backordered quantity. 

### InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.idempotency_key

Declared alternatives: [InventoryCountAppliedMerchantEventDataPreviousAttributes.idempotency_key](../models/InventoryCountAppliedMerchantEventDataPreviousAttributes.md#inventorycountappliedmerchanteventdatapreviousattributesidempotency_key).

### InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.inventory_reservation_id

### InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.inventory_reservation_id variant 1

anyOf variant 1: Unique identifier for this inventory reservation, prefixed `invr_`..

- Value shape: string. Unique identifier for this inventory reservation, prefixed `invr_`. 

### InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.inventory_reservation_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this inventory reservation, prefixed `invr_`. 

### InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.lines

### InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.lines variant 1

anyOf variant 1: Allocations of the reserved stock, one for each item and Location..

- Value shape: Array of [InventoryReservationLine](../models/InventoryReservationLine.md#inventoryreservationline). Allocations of the reserved stock, one for each item and Location. 

### InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.lines variant 2

anyOf variant 2.

- Value shape: null. Allocations of the reserved stock, one for each item and Location. 

### InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.lines variant 1.[] fields 1

Field definitions: [InventoryReservationResponse.data.lines[]](../models/InventoryReservationResponse.md#inventoryreservationresponsedatalines).

### InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.replacement_inventory_reservation_id

### InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.replacement_inventory_reservation_id variant 1

anyOf variant 1: Set on a reservation whose claim Flint moved when it rerouted an order: the replacement reservation that now holds the quantity named in this reservation's reallocated_quantity..

- Value shape: string. Set on a reservation whose claim Flint moved when it rerouted an order: the replacement reservation that now holds the quantity named in this reservation's reallocated_quantity. 

### InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.replacement_inventory_reservation_id variant 2

anyOf variant 2.

- Value shape: null. Set on a reservation whose claim Flint moved when it rerouted an order: the replacement reservation that now holds the quantity named in this reservation's reallocated_quantity. 

### InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.source_inventory_reservation_id

### InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.source_inventory_reservation_id variant 1

anyOf variant 1: Set on a replacement reservation: the reservation whose claim Flint moved here when it rerouted an order. This reservation holds the quantity that reservation reports as reallocated_quantity..

- Value shape: string. Set on a replacement reservation: the reservation whose claim Flint moved here when it rerouted an order. This reservation holds the quantity that reservation reports as reallocated_quantity. 

### InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.source_inventory_reservation_id variant 2

anyOf variant 2.

- Value shape: null. Set on a replacement reservation: the reservation whose claim Flint moved here when it rerouted an order. This reservation holds the quantity that reservation reports as reallocated_quantity. 

### InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.status

### InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.status variant 1

anyOf variant 1: active while any held, committed, or backordered quantity remains; closed once none does..

- Value shape: string. active while any held, committed, or backordered quantity remains; closed once none does. Values: `"active"`, `"closed"`.

### InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.status variant 2

anyOf variant 2.

- Value shape: null. active while any held, committed, or backordered quantity remains; closed once none does. 

### InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.supported_actions

### InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.supported_actions variant 1

anyOf variant 1: Actions that can change this reservation now. Empty for a closed reservation and for one Flint holds for an order. Resending targets already applied succeeds in any status. Computed when Flint produced this response or event, so replays and webhooks keep their original value..

- Value shape: Array of string. Actions that can change this reservation now. Empty for a closed reservation and for one Flint holds for an order. Resending targets already applied succeeds in any status. Computed when Flint produced this response or event, so replays and webhooks keep their original value. Items values: `"commit"`, `"consume"`, `"release"`.

### InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.supported_actions variant 2

anyOf variant 2.

- Value shape: null. Actions that can change this reservation now. Empty for a closed reservation and for one Flint holds for an order. Resending targets already applied succeeds in any status. Computed when Flint produced this response or event, so replays and webhooks keep their original value. 

### InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.version

### InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.version variant 1

anyOf variant 1: The reservation version. Send it as expected_version to reject a write if the reservation changed..

- Value shape: integer. The reservation version. Send it as expected_version to reject a write if the reservation changed. The reservation version. Send it as expected_version to reject a write if the reservation changed. Format: `uint64`. minimum: `1`. 

### InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.version variant 2

anyOf variant 2.

- Value shape: null. The reservation version. Send it as expected_version to reject a write if the reservation changed. 

