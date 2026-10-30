[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryAdjustmentListResponse

A page of `InventoryAdjustment` objects.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | Array of [InventoryAdjustment](../models/InventoryAdjustment.md#inventoryadjustment) | `data[]`: [field definitions](../models/InventoryAdjustmentResponse.md#inventoryadjustmentresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `next_page_token` | Optional | string |  |
| `request_id` | Required | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### InventoryAdjustmentListResponse.data[]

Field definitions: [InventoryAdjustmentResponse.data](../models/InventoryAdjustmentResponse.md#inventoryadjustmentresponsedata).

