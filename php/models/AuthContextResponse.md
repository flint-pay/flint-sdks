[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## AuthContextResponse

A response containing `AuthContext` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [AuthContext](../models/AuthContext.md#authcontext) | Identity and access of the current developer credential: whether it is an API key or OAuth, its merchant, environment, sandbox, and scopes. |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Required | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

