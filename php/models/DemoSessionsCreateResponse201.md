[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DemoSessionsCreateResponse201

A response containing `DemoSession` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [DemoSession](../models/DemoSession.md#demosession) | A demo session with its sandbox, API key, and expiry, returned when you create or reset a demo session. |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Required | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

