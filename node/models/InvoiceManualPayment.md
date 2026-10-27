[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceManualPayment

A recorded offline payment against an invoice. Its amount contributes to invoice paid_money while recorded; reversing it returns its full amount to outstanding_money. A payment can cover principal and late fees. Manual payments are separate from online payment attempts.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Full amount received, including any principal and late fees covered. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/IncomingWebhookaa949d7898b5Payload.md#incomingwebhookaa949d7898b5payloaddataobjectamount_money). |
| `invoice_id` | Required | string | The invoice this payment was recorded against. |
| `invoice_manual_payment_id` | Required | string | Stable payment ID. IDs begin with omp_. Gift card loads funded by this payment expose this value as source.order_manual_payment_id. |
| `note` | Optional | string | minLength: `1`. maxLength: `4096`. |
| `payment_reference` | Optional | string | Caller-owned check, wire, or bank reference, stored unmodified. minLength: `1`. maxLength: `255`. |
| `received_at` | Required | string | When the payment was received. Format: `date-time`. |
| `reversal_note` | Optional | string | Note supplied when reversing the payment. Present only when reversed and a note was supplied. minLength: `1`. maxLength: `4096`. |
| `reversed_at` | Optional | string | When the payment was reversed. Present only when reversed. Format: `date-time`. |
| `status` | Required | string | Whether the payment is recorded or has been reversed in full. Values: `"recorded"`, `"reversed"`. |

### InvoiceManualPayment.amount_money

Field definitions: [IncomingWebhookaa949d7898b5Payload.data.object.amount_money](../models/IncomingWebhookaa949d7898b5Payload.md#incomingwebhookaa949d7898b5payloaddataobjectamount_money).

