[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryReceiptsListResponse200

A page of `InventoryReceipt` objects.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | Array of [InventoryReceipt](../models/InventoryReceipt.md#inventoryreceipt) | `data[]`: [field definitions](../models/InventoryReceiptsGetResponse200.md#inventoryreceiptsgetresponse200data). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `next_page_token` | Optional | string |  |
| `request_id` | Optional | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### InventoryReceiptsListResponse200.data[]

Field definitions: [InventoryReceiptsGetResponse200.data](../models/InventoryReceiptsGetResponse200.md#inventoryreceiptsgetresponse200data).

