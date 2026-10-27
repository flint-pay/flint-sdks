[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnReceiptsListResponse200

A page of `ReturnReceipt` objects.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | Array of [ReturnReceipt](../models/ReturnReceipt.md#returnreceipt) | `data[]`: [field definitions](../models/ReturnsCancelResponse200.md#returnscancelresponse200datareturn_receipts). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `next_page_token` | Optional | string |  |
| `request_id` | Optional | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### ReturnReceiptsListResponse200.data[]

Field definitions: [ReturnsCancelResponse200.data.return_receipts[]](../models/ReturnsCancelResponse200.md#returnscancelresponse200datareturn_receipts).

