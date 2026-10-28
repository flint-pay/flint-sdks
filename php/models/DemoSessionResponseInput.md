[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DemoSessionResponseInput

A response containing `DemoSession` data.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [DemoSessionInput](../models/DemoSessionInput.md#demosessioninput) | A demo session with its sandbox, API key, and expiry, returned when you create or reset a demo session. |
| `meta` | Optional | [ResponseMetaInput](../models/ResponseMetaInput.md#responsemetainput) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Required | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"req_01KWM6WAHG3N9Q8T2V5XRZ7C4D"`. |

