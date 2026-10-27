[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeveloperAuthContextResponse

A response containing `DeveloperAuthContext` data.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [DeveloperAuthContext](../models/DeveloperAuthContext.md#developerauthcontext) | Identity and access of the current developer credential: whether it is an API key or OAuth, its merchant, environment, sandbox, and scopes. |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Optional | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"req_01KWM6WAHG3N9Q8T2V5XRZ7C4D"`. |

