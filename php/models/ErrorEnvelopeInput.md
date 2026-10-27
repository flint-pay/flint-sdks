[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ErrorEnvelopeInput

An error response containing `ErrorObject`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `error` | Required | [ErrorObjectInput](../models/ErrorObjectInput.md#errorobjectinput) | Error code, message, request context, and guidance for resolving the failure. The error returned for a failed request: `type`, `code`, `message`, `remediation`, `request_id`, and a list of `details` for individual failures. |

