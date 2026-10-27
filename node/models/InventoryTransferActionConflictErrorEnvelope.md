[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryTransferActionConflictErrorEnvelope

An error response containing `InventoryTransferActionConflictErrorObject`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `error` | Required | [InventoryTransferActionConflictErrorObject](../models/InventoryTransferActionConflictErrorObject.md#inventorytransferactionconflicterrorobject) | An error returned when an inventory transfer action conflicts with the transfer's current state. The error returned for a failed request: `type`, `code`, `message`, `remediation`, `request_id`, and a list of `details` for individual failures. The error returned for a failed request: `type`, `code`, `message`, `remediation`, `request_id`, and a list of `details` for individual failures. |

