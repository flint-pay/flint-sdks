[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ProcessExistingReturnResponse

A response containing `ReturnProcessResult` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [ReturnProcessResult](../models/ReturnProcessResult.md#returnprocessresult) | Resource, collection, or operation result returned by this request. The return is the primary resource and expected_version target; the other resources report the processing effects. |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### ProcessExistingReturnResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

