[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryTransferConflictErrorEnvelope

The response for: Transition inventory transfer.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `error` | Required | Varies by condition | `error`: [field definitions](../models/InventoryTransferConflictErrorEnvelope.md#inventorytransferconflicterrorenvelope-variant-2error). |

### InventoryTransferConflictErrorEnvelope variant 1

oneOf variant 1: An error response containing `InventoryTransferActionConflictErrorObject`..

- Constraints for `error`: [InventoryTransferActionConflictErrorObject](../models/InventoryTransferActionConflictErrorObject.md#inventorytransferactionconflicterrorobject).

### InventoryTransferConflictErrorEnvelope variant 2

oneOf variant 2: The response for: Transition inventory transfer..

- Constraints for `error`: [ErrorObject](../models/ErrorObject.md#errorobject) and object. Error code, message, request context, and guidance for resolving the failure.

### InventoryTransferConflictErrorEnvelope variant 2.error

Error code, message, request context, and guidance for resolving the failure. The error returned for a failed request: `type`, `code`, `message`, `remediation`, `request_id`, and a list of `details` for individual failures.

Field definitions: [shared fields](ErrorObject.md#errorobject).

