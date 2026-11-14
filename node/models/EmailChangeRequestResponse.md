[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## EmailChangeRequestResponse

A response containing `EmailChangeRequest` data.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [EmailChangeRequest](../models/EmailChangeRequest.md#emailchangerequest) | Resource, collection, or operation result returned by this request. Nested child of Customer. A request to change this customer's sign-in email. Only one request can be pending per customer. |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"req_01KWM6WAHG3N9Q8T2V5XRZ7C4D"`. |

