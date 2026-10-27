[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryTransfersListResponse200

A page of `InventoryTransfer` objects.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | Array of [InventoryTransfer](../models/InventoryTransfer.md#inventorytransfer) |  |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `next_page_token` | Optional | string |  |
| `request_id` | Optional | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

