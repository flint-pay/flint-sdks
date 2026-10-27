[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ResponseMeta

Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Optional | string | API version used to produce this response. |
| `idempotency_replayed` | Optional | boolean | Whether this response replays a stored result for the supplied Idempotency-Key. |
| `trace_id` | Optional | string | Trace identifier to include when contacting Flint about this request. |
| `warnings` | Optional | Array of [ResponseWarning](../models/ResponseWarning.md#responsewarning) | Conditions that need attention even though the request succeeded. |

