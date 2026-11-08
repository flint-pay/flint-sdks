[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceManualPaymentResponse

A response containing `InvoiceManualPayment` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [InvoiceManualPayment](../models/InvoiceManualPayment.md#invoicemanualpayment) | Resource, collection, or operation result returned by this request. A recorded offline payment against an invoice. Its amount contributes to invoice paid_money while recorded. Reversing it restores outstanding_money, or written_off_money if the invoice was written off. A payment can cover principal and late fees. Manual payments are separate from online payment attempts. `data`: [field definitions](../models/InvoiceManualPaymentResponse.md#invoicemanualpaymentresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### InvoiceManualPaymentResponse.data

Resource, collection, or operation result returned by this request. A recorded offline payment against an invoice. Its amount contributes to invoice paid_money while recorded. Reversing it restores outstanding_money, or written_off_money if the invoice was written off. A payment can cover principal and late fees. Manual payments are separate from online payment attempts.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Full amount received, including any principal and late fees covered. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `invoice_id` | Required | string | The invoice this payment was recorded against. Example: `"inv_01KEZF7C00A5GEBMWHEAJFSAR4"`. |
| `invoice_manual_payment_id` | Required | string | Stable payment ID. IDs begin with omp_. Gift card loads funded by this payment expose this value as source.order_manual_payment_id. Example: `"omp_01KEZF7C007J18203RBJKB9TYE"`. |
| `note` | Optional | string | Note about the offline payment, up to 4096 characters. minLength: `1`. maxLength: `4096`. |
| `payment_reference` | Optional | string | Caller-owned check, wire, or bank reference, stored unmodified. minLength: `1`. maxLength: `255`. |
| `received_at` | Required | string | When the payment was received. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `reversal_note` | Optional | string | Note supplied when reversing the payment. Present only when reversed and a note was supplied. minLength: `1`. maxLength: `4096`. |
| `reversed_at` | Optional | string | When the payment was reversed. Present only when reversed. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `status` | Required | string | Whether the payment is recorded or has been reversed in full. Values: `"recorded"`, `"reversed"`. |
| `supported_actions` | Required | Array of string | Lifecycle actions Flint accepts for this resource now, based on stored state. Independent of the caller's permissions; each action still requires its route's scope. Always [] when no action is available. Items values: `"reverse"`. |

### InvoiceManualPaymentResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

