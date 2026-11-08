[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryCountListResponse

A page of `InventoryCount` objects.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | Array of [InventoryCount](../models/InventoryCount.md#inventorycount) | Resource, collection, or operation result returned by this request. `data[]`: [field definitions](../models/InventoryCountListResponse.md#inventorycountlistresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `next_page_token` | Optional | string | Opaque token to send as `page_token` to retrieve the next page. Omitted when there is no next page. |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### InventoryCountListResponse.data[]

A physical count used to reconcile stock.

Field definitions: [shared fields](InventoryCountResponse.md#inventorycountresponsedata).

### InventoryCountListResponse.data[].lines[]

Field definitions: [InventoryCountResponse.data.lines[]](../models/InventoryCountResponse.md#inventorycountresponsedatalines).

### InventoryCountListResponse.data[].observation_provenance

Field definitions: [InventoryCountResponse.data.observation_provenance](../models/InventoryCountResponse.md#inventorycountresponsedataobservation_provenance).

### InventoryCountListResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

