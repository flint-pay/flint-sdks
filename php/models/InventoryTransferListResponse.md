[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryTransferListResponse

A page of `InventoryTransfer` objects.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | Array of [InventoryTransfer](../models/InventoryTransfer.md#inventorytransfer) | Resource, collection, or operation result returned by this request. `data[]`: [field definitions](../models/InventoryTransferListResponse.md#inventorytransferlistresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `next_page_token` | Optional | string | Opaque token to send as `page_token` to retrieve the next page. Omitted when there is no next page. |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### InventoryTransferListResponse.data[]

Stock moving between locations.

Field definitions: [shared fields](InventoryTransferResponse.md#inventorytransferresponsedata).

### InventoryTransferListResponse.data[].lines[]

Field definitions: [InventoryTransferResponse.data.lines[]](../models/InventoryTransferResponse.md#inventorytransferresponsedatalines).

### InventoryTransferListResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

