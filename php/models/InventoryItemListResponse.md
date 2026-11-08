[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryItemListResponse

A page of `InventoryItem` objects.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | Array of [InventoryItem](../models/InventoryItem.md#inventoryitem) | Resource, collection, or operation result returned by this request. `data[]`: [field definitions](../models/InventoryItemListResponse.md#inventoryitemlistresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `next_page_token` | Optional | string | Opaque token to send as `page_token` to retrieve the next page. Omitted when there is no next page. |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### InventoryItemListResponse.data[]

A stock-keeping unit that inventory quantities are tracked against. Catalog variants reference an inventory item rather than carrying their own counter.

Field definitions: [shared fields](InventoryItemResponse.md#inventoryitemresponsedata).

### InventoryItemListResponse.data[].backorder

Field definitions: [InventoryItemResponse.data.backorder](../models/InventoryItemResponse.md#inventoryitemresponsedatabackorder).

### InventoryItemListResponse.data[].metadata

Field definitions: [CollectInvoiceResponse.data.invoice.metadata](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicemetadata).

### InventoryItemListResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

