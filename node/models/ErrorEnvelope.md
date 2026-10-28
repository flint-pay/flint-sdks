[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ErrorEnvelope







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `error` | Required | [ErrorObject](../models/ErrorObject.md#errorobject) | Error code, message, request context, and guidance for resolving the failure. The error returned for a failed request: `type`, `code`, `message`, `remediation`, `request_id`, and a list of `details` for individual failures. |

### ErrorEnvelope variant 1

anyOf variant 1: Declared schema ErrorEnvelope. An error response containing `ErrorObject`..

No additional constraints.

### ErrorEnvelope variant 2

anyOf variant 2: Declared schema InventoryTransferConflictErrorEnvelope. The response for: Transition inventory transfer..

No additional constraints.

