[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryTransferActionConflictErrorEnvelope

An inventory transfer action refusal with the current state and supported actions.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `error` | Required | [InventoryTransferActionConflictErrorObject](../models/InventoryTransferActionConflictErrorObject.md#inventorytransferactionconflicterrorobject) | The refusal, with the transfer's current status and version and the actions it accepts. An action-not-allowed error for the inventory transfer current state. The error returned for a failed request: `type`, `code`, `message`, `remediation`, `request_id`, and a list of `details` for individual failures. The error returned for a failed request: `type`, `code`, `message`, `remediation`, `request_id`, and a list of `details` for individual failures. |

