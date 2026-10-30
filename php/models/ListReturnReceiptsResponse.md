[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ListReturnReceiptsResponse

A page of `ReturnReceipt` objects.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | Array of [ReturnReceipt](../models/ReturnReceipt.md#returnreceipt) | `data[]`: [field definitions](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_receipts). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `next_page_token` | Optional | string |  |
| `request_id` | Required | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### ListReturnReceiptsResponse.data[]

Field definitions: [CancelReturnResponse.data.return_receipts[]](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_receipts).

