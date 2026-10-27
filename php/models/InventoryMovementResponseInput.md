[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryMovementResponseInput

A response containing `InventoryMovement` data.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [InventoryMovementInput](../models/InventoryMovementInput.md#inventorymovementinput) | An immutable record of a single quantity change, including the level state it produced. |
| `meta` | Optional | [ResponseMetaInput](../models/ResponseMetaInput.md#responsemetainput) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Optional | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"req_01KWM6WAHG3N9Q8T2V5XRZ7C4D"`. |

