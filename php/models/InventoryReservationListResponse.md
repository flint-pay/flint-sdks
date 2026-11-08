[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryReservationListResponse

A page of `InventoryReservation` objects.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | Array of [InventoryReservation](../models/InventoryReservation.md#inventoryreservation) | Resource, collection, or operation result returned by this request. `data[]`: [field definitions](../models/InventoryReservationListResponse.md#inventoryreservationlistresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `next_page_token` | Optional | string | Opaque token to send as `page_token` to retrieve the next page. Omitted when there is no next page. |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### InventoryReservationListResponse.data[]

A claim on stock. Quantity moves from held to committed to consumed, and can be released or reallocated.

Field definitions: [shared fields](InventoryReservationResponse.md#inventoryreservationresponsedata).

### InventoryReservationListResponse.data[].inventory_action_required

Field definitions: [InventoryReservationResponse.data.inventory_action_required](../models/InventoryReservationResponse.md#inventoryreservationresponsedatainventory_action_required).

### InventoryReservationListResponse.data[].inventory_routing_source

Field definitions: [InventoryReservationResponse.data.inventory_routing_source](../models/InventoryReservationResponse.md#inventoryreservationresponsedatainventory_routing_source).

### InventoryReservationListResponse.data[].lines[]

Field definitions: [InventoryReservationResponse.data.lines[]](../models/InventoryReservationResponse.md#inventoryreservationresponsedatalines).

### InventoryReservationListResponse.data[].owner

Declared alternatives: [InventoryReservationResponse.data.owner](../models/InventoryReservationResponse.md#inventoryreservationresponsedataowner).

### InventoryReservationListResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

