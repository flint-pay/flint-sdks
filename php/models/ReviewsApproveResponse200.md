[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReviewsApproveResponse200

A response containing `PaymentReview` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [PaymentReview](../models/PaymentReview.md#paymentreview) | A payment review requiring a merchant decision. |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Required | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

