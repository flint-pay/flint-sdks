[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryTransferConflictErrorEnvelopeInput

The response for: Transition inventory transfer.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `error` | Required | Varies by condition | `error`: [field definitions](../models/InventoryTransferConflictErrorEnvelopeInput.md#inventorytransferconflicterrorenvelopeinput-variant-2error). |

### InventoryTransferConflictErrorEnvelopeInput variant 1

oneOf variant 1: An error response containing `InventoryTransferActionConflictErrorObject`..

- Constraints for `error`: [InventoryTransferActionConflictErrorObjectInput](../models/InventoryTransferActionConflictErrorObjectInput.md#inventorytransferactionconflicterrorobjectinput).

### InventoryTransferConflictErrorEnvelopeInput variant 2

oneOf variant 2: The response for: Transition inventory transfer..

- Constraints for `error`: [ErrorObjectInput](../models/ErrorObjectInput.md#errorobjectinput) and object. Error code, message, request context, and guidance for resolving the failure.

### InventoryTransferConflictErrorEnvelopeInput variant 2.error

Error code, message, request context, and guidance for resolving the failure. The error returned for a failed request: `type`, `code`, `message`, `remediation`, `request_id`, and a list of `details` for individual failures.

Field definitions: [shared fields](ErrorObjectInput.md#errorobjectinput).

