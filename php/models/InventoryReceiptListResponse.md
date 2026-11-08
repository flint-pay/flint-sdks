[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryReceiptListResponse

A page of `InventoryReceipt` objects.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | Array of [InventoryReceipt](../models/InventoryReceipt.md#inventoryreceipt) | Resource, collection, or operation result returned by this request. `data[]`: [field definitions](../models/InventoryReceiptListResponse.md#inventoryreceiptlistresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `next_page_token` | Optional | string | Opaque token to send as `page_token` to retrieve the next page. Omitted when there is no next page. |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### InventoryReceiptListResponse.data[]

Returned units received into Inventory, from a Return disposition or against the reservation line that consumed them. For supplier deliveries, use POST /v1/inventory-adjustments with reason: received.

Field definitions: [shared fields](InventoryReceiptResponse.md#inventoryreceiptresponsedata).

### InventoryReceiptListResponse.data[].lines[]

Field definitions: [InventoryReceiptResponse.data.lines[]](../models/InventoryReceiptResponse.md#inventoryreceiptresponsedatalines).

### InventoryReceiptListResponse.data[].source_system

Declared alternatives: [InventoryCountResponse.data.observation_provenance.source_system](../models/InventoryCountResponse.md#inventorycountresponsedataobservation_provenancesource_system).

### InventoryReceiptListResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

