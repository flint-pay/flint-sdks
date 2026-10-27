[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## MeGetRefundResponse200

A response containing `BuyerRefund` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [BuyerRefund](../models/BuyerRefund.md#buyerrefund) | Money returned against a collected payment. |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Optional | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

