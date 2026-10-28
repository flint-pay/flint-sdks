[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryTransferResultResponseInput

A response containing `InventoryTransferResult` data.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [InventoryTransferResultInput](../models/InventoryTransferResultInput.md#inventorytransferresultinput) | inventory_transfer is the primary resource and expected_version target. Stock-moving transitions return this result instead of a resource alone. |
| `meta` | Optional | [ResponseMetaInput](../models/ResponseMetaInput.md#responsemetainput) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Required | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"req_01KWM6WAHG3N9Q8T2V5XRZ7C4D"`. |

