[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ErrorEnvelope

An error response containing `ErrorObject`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `error` | Required | [ErrorObject](../models/ErrorObject.md#errorobject) | Error code, message, request context, and guidance for resolving the failure. The error returned for a failed request: `type`, `code`, `message`, `remediation`, `request_id`, and a list of `details` for individual failures. |

