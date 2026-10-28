[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SandboxResponse

A response containing `Sandbox` data.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [Sandbox](../models/Sandbox.md#sandbox) | An isolated environment for testing an integration. |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Required | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"req_01KWM6WAHG3N9Q8T2V5XRZ7C4D"`. |

