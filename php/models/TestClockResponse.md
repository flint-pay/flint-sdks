[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## TestClockResponse

A response containing `TestClock` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [TestClock](../models/TestClock.md#testclock) | A sandbox clock that customers created on it, and their subscriptions, read as the current time. |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Required | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

