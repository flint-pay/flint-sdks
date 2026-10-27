[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## MeGetInvoiceResponse200

A response containing `BuyerInvoice` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [BuyerInvoice](../models/BuyerInvoice.md#buyerinvoice) | A bill issued to a customer. |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Optional | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

