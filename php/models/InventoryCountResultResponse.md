[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryCountResultResponse

A response containing `InventoryCountResult` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [InventoryCountResult](../models/InventoryCountResult.md#inventorycountresult) | Resource, collection, or operation result returned by this request. inventory_count is the primary resource and expected_version target. Stock-moving actions return this result instead of a resource alone. |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### InventoryCountResultResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

