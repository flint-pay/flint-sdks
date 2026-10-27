[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CollectInvoiceResponseInput

A response containing `CollectInvoiceResult` data.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [CollectInvoiceResultInput](../models/CollectInvoiceResultInput.md#collectinvoiceresultinput) | The invoice is the primary resource and expected_version target; invoice_payment_attempt records the collection outcome. |
| `meta` | Optional | [ResponseMetaInput](../models/ResponseMetaInput.md#responsemetainput) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Optional | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"req_01KWM6WAHG3N9Q8T2V5XRZ7C4D"`. |

