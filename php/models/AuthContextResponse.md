[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## AuthContextResponse

A response containing `AuthContext` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [AuthContext](../models/AuthContext.md#authcontext) | Resource, collection, or operation result returned by this request. Identity and access of the current developer credential: whether it is an API key or OAuth, its merchant, environment, sandbox, and scopes. `data`: [field definitions](../models/AuthContextResponse.md#authcontextresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### AuthContextResponse.data

Resource, collection, or operation result returned by this request. Identity and access of the current developer credential: whether it is an API key or OAuth, its merchant, environment, sandbox, and scopes.

Field definitions: [shared fields](AuthContextInput.md#authcontextinput).

### AuthContextResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

