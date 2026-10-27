[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceCheckoutSessionResponse

A response containing `InvoiceCheckoutSessionResult` data.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [InvoiceCheckoutSessionResult](../models/InvoiceCheckoutSessionResult.md#invoicecheckoutsessionresult) | The invoice is the primary resource, with its checkout session, credential, and any invoice payment attempt. |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Optional | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"req_01KWM6WAHG3N9Q8T2V5XRZ7C4D"`. |

