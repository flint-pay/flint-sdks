[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerInvoiceCheckoutSessionResponseInput

A response containing `BuyerInvoiceCheckoutSessionResult` data.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [BuyerInvoiceCheckoutSessionResultInput](../models/BuyerInvoiceCheckoutSessionResultInput.md#buyerinvoicecheckoutsessionresultinput) | Resource, collection, or operation result returned by this request. The invoice is the primary resource, with its checkout session and any invoice payment attempt. Hosted launches return checkout_session.url; embedded launches return checkout_auth_token. |
| `meta` | Optional | [ResponseMetaInput](../models/ResponseMetaInput.md#responsemetainput) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"req_01KWM6WAHG3N9Q8T2V5XRZ7C4D"`. |

