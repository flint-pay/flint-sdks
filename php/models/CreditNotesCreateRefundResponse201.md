[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreditNotesCreateRefundResponse201

A response containing `Refund` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [Refund](../models/Refund.md#refund) | Money returned against a collected payment. |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Optional | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

