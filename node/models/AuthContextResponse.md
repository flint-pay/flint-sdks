[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## AuthContextResponse

A response containing `AuthContext` data.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [AuthContext](../models/AuthContext.md#authcontext) | Resource, collection, or operation result returned by this request. Non-secret metadata for the calling credential, selected by auth_type. |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"req_01KWM6WAHG3N9Q8T2V5XRZ7C4D"`. |

