[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeveloperGetAuthContextResponse200

A response containing `DeveloperAuthContext` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [DeveloperAuthContext](../models/DeveloperAuthContext.md#developerauthcontext) | Identity and access of the current developer credential: whether it is an API key or OAuth, its merchant, environment, sandbox, and scopes. |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Optional | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

