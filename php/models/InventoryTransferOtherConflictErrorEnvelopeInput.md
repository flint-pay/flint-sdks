[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryTransferOtherConflictErrorEnvelopeInput

The response for: Transition inventory transfer.

An error response containing `ErrorObject`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `error` | Required | [ErrorObjectInput](../models/ErrorObjectInput.md#errorobjectinput) and object | Error code, message, request context, and guidance for resolving the failure. The error returned for a failed request: `type`, `code`, `message`, `remediation`, `request_id`, and a list of `details` for individual failures. `error`: [field definitions](../models/InventoryTransferConflictErrorEnvelopeInput.md#inventorytransferconflicterrorenvelopeinput-variant-2error). |

### InventoryTransferOtherConflictErrorEnvelopeInput.error

Field definitions: [InventoryTransferConflictErrorEnvelopeInput variant 2.error](../models/InventoryTransferConflictErrorEnvelopeInput.md#inventorytransferconflicterrorenvelopeinput-variant-2error).

