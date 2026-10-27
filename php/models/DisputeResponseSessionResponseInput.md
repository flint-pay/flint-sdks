[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DisputeResponseSessionResponseInput

A response containing `DisputeResponseSession` data.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [DisputeResponseSessionInput](../models/DisputeResponseSessionInput.md#disputeresponsesessioninput) | A session for responding to a dispute in the browser, with the `dispute_id` and a short-lived `client_session` for the embedded response component. |
| `meta` | Optional | [ResponseMetaInput](../models/ResponseMetaInput.md#responsemetainput) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Optional | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"req_01KWM6WAHG3N9Q8T2V5XRZ7C4D"`. |

