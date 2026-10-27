[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryTransfersCreateResponse201

A response containing `InventoryTransfer` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [InventoryTransfer](../models/InventoryTransfer.md#inventorytransfer) | Stock moving between locations. |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Optional | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

