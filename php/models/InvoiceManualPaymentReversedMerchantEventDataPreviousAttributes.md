[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceManualPaymentReversedMerchantEventDataPreviousAttributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Full amount received, including any principal and late fees covered. |
| `invoice_id` | Optional | string or null | The invoice this payment was recorded against. `invoice_id`: [declared alternatives](../models/InvoiceManualPaymentReversedMerchantEventDataPreviousAttributes.md#invoicemanualpaymentreversedmerchanteventdatapreviousattributesinvoice_id). |
| `invoice_manual_payment_id` | Optional | string or null | Stable payment ID. IDs begin with omp_. Gift card loads funded by this payment expose this value as source.order_manual_payment_id. `invoice_manual_payment_id`: [declared alternatives](../models/InvoiceManualPaymentReversedMerchantEventDataPreviousAttributes.md#invoicemanualpaymentreversedmerchanteventdatapreviousattributesinvoice_manual_payment_id). |
| `note` | Optional | string or null | Note about the offline payment, up to 4096 characters. `note`: [declared alternatives](../models/InvoiceManualPaymentReversedMerchantEventDataPreviousAttributes.md#invoicemanualpaymentreversedmerchanteventdatapreviousattributesnote). |
| `payment_reference` | Optional | string or null | Caller-owned check, wire, or bank reference, stored unmodified. `payment_reference`: [declared alternatives](../models/InvoiceManualPaymentReversedMerchantEventDataPreviousAttributes.md#invoicemanualpaymentreversedmerchanteventdatapreviousattributespayment_reference). |
| `received_at` | Optional | string or null | When the payment was received. `received_at`: [declared alternatives](../models/InvoiceManualPaymentReversedMerchantEventDataPreviousAttributes.md#invoicemanualpaymentreversedmerchanteventdatapreviousattributesreceived_at). |
| `reversal_note` | Optional | string or null | Note supplied when reversing the payment. Present only when reversed and a note was supplied. `reversal_note`: [declared alternatives](../models/InvoiceManualPaymentReversedMerchantEventDataPreviousAttributes.md#invoicemanualpaymentreversedmerchanteventdatapreviousattributesreversal_note). |
| `reversed_at` | Optional | string or null | When the payment was reversed. Present only when reversed. `reversed_at`: [declared alternatives](../models/InvoiceManualPaymentReversedMerchantEventDataPreviousAttributes.md#invoicemanualpaymentreversedmerchanteventdatapreviousattributesreversed_at). |
| `status` | Optional | string or null | Whether the payment is recorded or has been reversed in full. Values: `"recorded"`, `"reversed"`. `status`: [declared alternatives](../models/InvoiceManualPaymentReversedMerchantEventDataPreviousAttributes.md#invoicemanualpaymentreversedmerchanteventdatapreviousattributesstatus). |
| `supported_actions` | Optional | Array of string or null | Lifecycle actions Flint accepts for this resource now, based on stored state. Independent of the caller's permissions; each action still requires its route's scope. Always [] when no action is available. Items values: `"reverse"`. `supported_actions`: [declared alternatives](../models/CreditNoteAllocationReversedMerchantEventDataPreviousAttributes.md#creditnoteallocationreversedmerchanteventdatapreviousattributessupported_actions). |

### InvoiceManualPaymentReversedMerchantEventDataPreviousAttributes.invoice_id

### InvoiceManualPaymentReversedMerchantEventDataPreviousAttributes.invoice_id variant 1

anyOf variant 1: The invoice this payment was recorded against..

- Value shape: string. The invoice this payment was recorded against. 

### InvoiceManualPaymentReversedMerchantEventDataPreviousAttributes.invoice_id variant 2

anyOf variant 2.

- Value shape: null. The invoice this payment was recorded against. 

### InvoiceManualPaymentReversedMerchantEventDataPreviousAttributes.invoice_manual_payment_id

### InvoiceManualPaymentReversedMerchantEventDataPreviousAttributes.invoice_manual_payment_id variant 1

anyOf variant 1: Stable payment ID. IDs begin with omp_. Gift card loads funded by this payment expose this value as source.order_manual_payment_id..

- Value shape: string. Stable payment ID. IDs begin with omp_. Gift card loads funded by this payment expose this value as source.order_manual_payment_id. 

### InvoiceManualPaymentReversedMerchantEventDataPreviousAttributes.invoice_manual_payment_id variant 2

anyOf variant 2.

- Value shape: null. Stable payment ID. IDs begin with omp_. Gift card loads funded by this payment expose this value as source.order_manual_payment_id. 

### InvoiceManualPaymentReversedMerchantEventDataPreviousAttributes.note

### InvoiceManualPaymentReversedMerchantEventDataPreviousAttributes.note variant 1

anyOf variant 1: Note about the offline payment, up to 4096 characters..

- Value shape: string. Note about the offline payment, up to 4096 characters. Note about the offline payment, up to 4096 characters. minLength: `1`. maxLength: `4096`. 

### InvoiceManualPaymentReversedMerchantEventDataPreviousAttributes.note variant 2

anyOf variant 2.

- Value shape: null. Note about the offline payment, up to 4096 characters. 

### InvoiceManualPaymentReversedMerchantEventDataPreviousAttributes.payment_reference

### InvoiceManualPaymentReversedMerchantEventDataPreviousAttributes.payment_reference variant 1

anyOf variant 1: Caller-owned check, wire, or bank reference, stored unmodified..

- Value shape: string. Caller-owned check, wire, or bank reference, stored unmodified. Caller-owned check, wire, or bank reference, stored unmodified. minLength: `1`. maxLength: `255`. 

### InvoiceManualPaymentReversedMerchantEventDataPreviousAttributes.payment_reference variant 2

anyOf variant 2.

- Value shape: null. Caller-owned check, wire, or bank reference, stored unmodified. 

### InvoiceManualPaymentReversedMerchantEventDataPreviousAttributes.received_at

### InvoiceManualPaymentReversedMerchantEventDataPreviousAttributes.received_at variant 1

anyOf variant 1: When the payment was received..

- Value shape: string. When the payment was received. When the payment was received. Format: `date-time`. 

### InvoiceManualPaymentReversedMerchantEventDataPreviousAttributes.received_at variant 2

anyOf variant 2.

- Value shape: null. When the payment was received. 

### InvoiceManualPaymentReversedMerchantEventDataPreviousAttributes.reversal_note

### InvoiceManualPaymentReversedMerchantEventDataPreviousAttributes.reversal_note variant 1

anyOf variant 1: Note supplied when reversing the payment. Present only when reversed and a note was supplied..

- Value shape: string. Note supplied when reversing the payment. Present only when reversed and a note was supplied. Note supplied when reversing the payment. Present only when reversed and a note was supplied. minLength: `1`. maxLength: `4096`. 

### InvoiceManualPaymentReversedMerchantEventDataPreviousAttributes.reversal_note variant 2

anyOf variant 2.

- Value shape: null. Note supplied when reversing the payment. Present only when reversed and a note was supplied. 

### InvoiceManualPaymentReversedMerchantEventDataPreviousAttributes.reversed_at

### InvoiceManualPaymentReversedMerchantEventDataPreviousAttributes.reversed_at variant 1

anyOf variant 1: When the payment was reversed. Present only when reversed..

- Value shape: string. When the payment was reversed. Present only when reversed. When the payment was reversed. Present only when reversed. Format: `date-time`. 

### InvoiceManualPaymentReversedMerchantEventDataPreviousAttributes.reversed_at variant 2

anyOf variant 2.

- Value shape: null. When the payment was reversed. Present only when reversed. 

### InvoiceManualPaymentReversedMerchantEventDataPreviousAttributes.status

### InvoiceManualPaymentReversedMerchantEventDataPreviousAttributes.status variant 1

anyOf variant 1: Whether the payment is recorded or has been reversed in full..

- Value shape: string. Whether the payment is recorded or has been reversed in full. Values: `"recorded"`, `"reversed"`.

### InvoiceManualPaymentReversedMerchantEventDataPreviousAttributes.status variant 2

anyOf variant 2.

- Value shape: null. Whether the payment is recorded or has been reversed in full. 

### InvoiceManualPaymentReversedMerchantEventDataPreviousAttributes.supported_actions

Declared alternatives: [CreditNoteAllocationReversedMerchantEventDataPreviousAttributes.supported_actions](../models/CreditNoteAllocationReversedMerchantEventDataPreviousAttributes.md#creditnoteallocationreversedmerchanteventdatapreviousattributessupported_actions).

