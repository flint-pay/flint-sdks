[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryAllocationPolicyListResponse

A page of `InventoryAllocationPolicy` objects.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | Array of [InventoryAllocationPolicy](../models/InventoryAllocationPolicy.md#inventoryallocationpolicy) | `data[]`: [field definitions](../models/InventoryAllocationPolicyResponse.md#inventoryallocationpolicyresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `next_page_token` | Optional | string |  |
| `request_id` | Required | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### InventoryAllocationPolicyListResponse.data[]

Field definitions: [InventoryAllocationPolicyResponse.data](../models/InventoryAllocationPolicyResponse.md#inventoryallocationpolicyresponsedata).

