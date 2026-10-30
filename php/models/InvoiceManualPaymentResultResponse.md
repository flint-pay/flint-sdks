[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceManualPaymentResultResponse

A response containing `InvoiceManualPaymentResult` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [InvoiceManualPaymentResult](../models/InvoiceManualPaymentResult.md#invoicemanualpaymentresult) | The recorded or reversed payment and the updated invoice. expected_version on either write fences the invoice; use the returned invoice version for the next write. |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Required | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

