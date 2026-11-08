[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryReceiptResponse

A response containing `InventoryReceipt` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [InventoryReceipt](../models/InventoryReceipt.md#inventoryreceipt) | Resource, collection, or operation result returned by this request. Returned units received into Inventory, from a Return disposition or against the reservation line that consumed them. For supplier deliveries, use POST /v1/inventory-adjustments with reason: received. `data`: [field definitions](../models/InventoryReceiptResponse.md#inventoryreceiptresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### InventoryReceiptResponse.data

Resource, collection, or operation result returned by this request. Returned units received into Inventory, from a Return disposition or against the reservation line that consumed them. For supplier deliveries, use POST /v1/inventory-adjustments with reason: received.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `external_actor_id` | Optional | string | Your identifier for the actor who recorded the event. Don't put secrets in this field. maxLength: `255`. Example: `"warehouse-1842"`. |
| `idempotency_key` | Optional | string | The Idempotency-Key of the request that created this resource; on a movement, of the command that wrote it. Omitted when that request had no key. |
| `inventory_receipt_id` | Required | string | Unique identifier for this inventory receipt, prefixed `invrec_`. Example: `"invrec_01KEZF7C00JXXCYA06SH8RCM2N"`. |
| `lines` | Required | Array of [InventoryReceiptLine](../models/InventoryReceiptLine.md#inventoryreceiptline) | Received lines, each with the item, receiving Location, quantity, and disposition. `lines[]`: [field definitions](../models/InventoryReceiptResponse.md#inventoryreceiptresponsedatalines). |
| `occurred_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `return_disposition_id` | Optional | string | ID of the Return disposition this receipt records. Absent when the receipt isn't linked to a Return. Example: `"retdsp_01KEZF7C007H87J66PH2EEK1VW"`. |
| `return_id` | Optional | string | ID of the Return these units came back on. Absent when the receipt isn't linked to a Return. Example: `"ret_01KEZF7C00PG93650ZKVQNGF7X"`. |
| `source_system` | Required | [InventorySourceSystem](../models/InventorySourceSystem.md#inventorysourcesystem) or null | System the change came from, such as a point-of-sale or warehouse system. `null` when the request named no source system. `source_system`: [declared alternatives](../models/InventoryCountResponse.md#inventorycountresponsedataobservation_provenancesource_system). |

### InventoryReceiptResponse.data.lines[]

One line of an inventory receipt: a quantity of an item received at a Location with its disposition.

Field definitions: [shared fields](InventoryReceiptLineInput.md#inventoryreceiptlineinput).

### InventoryReceiptResponse.data.source_system

Declared alternatives: [InventoryCountResponse.data.observation_provenance.source_system](../models/InventoryCountResponse.md#inventorycountresponsedataobservation_provenancesource_system).

### InventoryReceiptResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

