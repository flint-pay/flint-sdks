[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ListReturnLineItemsResponse

A page of `ReturnLineItem` objects.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | Array of [ReturnLineItem](../models/ReturnLineItem.md#returnlineitem) | `data[]`: [field definitions](../models/CancelReturnResponse.md#cancelreturnresponsedataline_items). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `next_page_token` | Optional | string |  |
| `request_id` | Required | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### ListReturnLineItemsResponse.data[]

Field definitions: [CancelReturnResponse.data.line_items[]](../models/CancelReturnResponse.md#cancelreturnresponsedataline_items).

