[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryTransferActionConflictErrorEnvelopeInput

An error response containing `InventoryTransferActionConflictErrorObject`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `error` | Required | [InventoryTransferActionConflictErrorObjectInput](../models/InventoryTransferActionConflictErrorObjectInput.md#inventorytransferactionconflicterrorobjectinput) | An error returned when an inventory transfer action conflicts with the transfer's current state. The error returned for a failed request: `type`, `code`, `message`, `remediation`, `request_id`, and a list of `details` for individual failures. The error returned for a failed request: `type`, `code`, `message`, `remediation`, `request_id`, and a list of `details` for individual failures. |

