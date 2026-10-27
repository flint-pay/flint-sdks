[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnsGetLineItemResponse200

A response containing `ReturnLineItem` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [ReturnLineItem](../models/ReturnLineItem.md#returnlineitem) | An item included in a return request. `data`: [field definitions](../models/ReturnsCancelResponse200.md#returnscancelresponse200dataline_items). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Optional | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### ReturnsGetLineItemResponse200.data

Field definitions: [ReturnsCancelResponse200.data.line_items[]](../models/ReturnsCancelResponse200.md#returnscancelresponse200dataline_items).

