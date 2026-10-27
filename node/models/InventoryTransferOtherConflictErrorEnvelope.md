[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryTransferOtherConflictErrorEnvelope

The response for: Transition inventory transfer.

An error response containing `ErrorObject`.



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `error` | Required | [ErrorObject](../models/ErrorObject.md#errorobject) and object | Error code, message, request context, and guidance for resolving the failure. The error returned for a failed request: `type`, `code`, `message`, `remediation`, `request_id`, and a list of `details` for individual failures. `error`: [field definitions](../models/InventoryTransferConflictErrorEnvelope.md#inventorytransferconflicterrorenvelope-variant-2error). |

### InventoryTransferOtherConflictErrorEnvelope.error

Field definitions: [InventoryTransferConflictErrorEnvelope variant 2.error](../models/InventoryTransferConflictErrorEnvelope.md#inventorytransferconflicterrorenvelope-variant-2error).

