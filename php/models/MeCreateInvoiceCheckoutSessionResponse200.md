[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## MeCreateInvoiceCheckoutSessionResponse200

A response containing `BuyerInvoiceCheckoutSessionResult` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [BuyerInvoiceCheckoutSessionResult](../models/BuyerInvoiceCheckoutSessionResult.md#buyerinvoicecheckoutsessionresult) | The invoice is the primary resource, with its checkout session, credential, and any invoice payment attempt. |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Required | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

