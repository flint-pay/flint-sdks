[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DisputeResponseSessionResponse

A response containing `DisputeResponseSession` data.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [DisputeResponseSession](../models/DisputeResponseSession.md#disputeresponsesession) | A session for responding to a dispute in the browser, with the `dispute_id` and a short-lived `client_session` for the embedded response component. |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Optional | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"req_01KWM6WAHG3N9Q8T2V5XRZ7C4D"`. |

