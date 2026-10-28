[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnsCreateReceiptResponse201

A response containing `ReturnReceipt` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [ReturnReceipt](../models/ReturnReceipt.md#returnreceipt) | A record of returned items arriving at a location. `data`: [field definitions](../models/ReturnsCancelResponse200.md#returnscancelresponse200datareturn_receipts). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Required | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### ReturnsCreateReceiptResponse201.data

Field definitions: [ReturnsCancelResponse200.data.return_receipts[]](../models/ReturnsCancelResponse200.md#returnscancelresponse200datareturn_receipts).

