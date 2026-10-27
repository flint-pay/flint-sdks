[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryAdjustmentsListResponse200

A page of `InventoryAdjustment` objects.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | Array of [InventoryAdjustment](../models/InventoryAdjustment.md#inventoryadjustment) | `data[]`: [field definitions](../models/InventoryAdjustmentsGetResponse200.md#inventoryadjustmentsgetresponse200data). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `next_page_token` | Optional | string |  |
| `request_id` | Optional | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### InventoryAdjustmentsListResponse200.data[]

Field definitions: [InventoryAdjustmentsGetResponse200.data](../models/InventoryAdjustmentsGetResponse200.md#inventoryadjustmentsgetresponse200data).

