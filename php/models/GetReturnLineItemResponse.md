[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GetReturnLineItemResponse

A response containing `ReturnLineItem` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [ReturnLineItem](../models/ReturnLineItem.md#returnlineitem) | An item included in a return request. `data`: [field definitions](../models/CancelReturnResponse.md#cancelreturnresponsedataline_items). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Required | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### GetReturnLineItemResponse.data

Field definitions: [CancelReturnResponse.data.line_items[]](../models/CancelReturnResponse.md#cancelreturnresponsedataline_items).

