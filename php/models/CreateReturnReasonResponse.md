[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateReturnReasonResponse

A response containing `ReturnReason` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [ReturnReason](../models/ReturnReason.md#returnreason) | Resource, collection, or operation result returned by this request. A reason customers can select when requesting a return. `data`: [field definitions](../models/CreateReturnReasonResponse.md#createreturnreasonresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### CreateReturnReasonResponse.data

Resource, collection, or operation result returned by this request. A reason customers can select when requesting a return.

Field definitions: [shared fields](ReturnReasonInput.md#returnreasoninput).

### CreateReturnReasonResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

