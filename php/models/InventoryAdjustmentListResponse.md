[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryAdjustmentListResponse

A page of `InventoryAdjustment` objects.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | Array of [InventoryAdjustment](../models/InventoryAdjustment.md#inventoryadjustment) | Resource, collection, or operation result returned by this request. `data[]`: [field definitions](../models/InventoryAdjustmentListResponse.md#inventoryadjustmentlistresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `next_page_token` | Optional | string | Opaque token to send as `page_token` to retrieve the next page. Omitted when there is no next page. |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### InventoryAdjustmentListResponse.data[]

A recorded stock change with its reason and the quantity changes Flint computed.

Field definitions: [shared fields](InventoryAdjustmentResponse.md#inventoryadjustmentresponsedata).

### InventoryAdjustmentListResponse.data[].lines[]

Field definitions: [InventoryAdjustmentResponse.data.lines[]](../models/InventoryAdjustmentResponse.md#inventoryadjustmentresponsedatalines).

### InventoryAdjustmentListResponse.data[].source_system

Declared alternatives: [InventoryCountResponse.data.observation_provenance.source_system](../models/InventoryCountResponse.md#inventorycountresponsedataobservation_provenancesource_system).

### InventoryAdjustmentListResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

