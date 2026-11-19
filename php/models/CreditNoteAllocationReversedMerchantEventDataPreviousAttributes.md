[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreditNoteAllocationReversedMerchantEventDataPreviousAttributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allocated_at` | Optional | string or null | When the credit was applied to the invoice balance. `allocated_at`: [declared alternatives](../models/CreditNoteAllocationReversedMerchantEventDataPreviousAttributes.md#creditnoteallocationreversedmerchanteventdatapreviousattributesallocated_at). |
| `amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Credit applied to the invoice balance. |
| `credit_note_allocation_id` | Optional | string or null | Unique identifier of the allocation. `credit_note_allocation_id`: [declared alternatives](../models/CreditNoteAllocationReversedMerchantEventDataPreviousAttributes.md#creditnoteallocationreversedmerchanteventdatapreviousattributescredit_note_allocation_id). |
| `credit_note_id` | Optional | string or null | The credit note whose credit was applied. `credit_note_id`: [declared alternatives](../models/CreditNoteAllocationReversedMerchantEventDataPreviousAttributes.md#creditnoteallocationreversedmerchanteventdatapreviousattributescredit_note_id). |
| `idempotency_key` | Optional | string or null | The Idempotency-Key of the request that created this resource. `null` when that request sent no key, Flint created the resource, the reader isn't the caller that created it (another app install, a buyer, or the merchant reading an app's or buyer's record), or the caller that created an older record is unknown. Filter its list with `idempotency_key` to find it. Recorded payloads, including replayed responses and webhook events, can return `null`. To find a key that a replay returns as `null`, read the resource. `idempotency_key`: [declared alternatives](../models/CreditNoteAllocationReversedMerchantEventDataPreviousAttributes.md#creditnoteallocationreversedmerchanteventdatapreviousattributesidempotency_key). |
| `invoice_id` | Optional | string or null | The invoice whose balance the credit reduced. `invoice_id`: [declared alternatives](../models/CreditNoteAllocationReversedMerchantEventDataPreviousAttributes.md#creditnoteallocationreversedmerchanteventdatapreviousattributesinvoice_id). |
| `reversed_at` | Optional | string or null | When the allocation was reversed and its credit returned. Absent while the allocation stands. `reversed_at`: [declared alternatives](../models/CreditNoteAllocationReversedMerchantEventDataPreviousAttributes.md#creditnoteallocationreversedmerchanteventdatapreviousattributesreversed_at). |
| `supported_actions` | Optional | Array of string or null | Lifecycle actions Flint accepts for this resource now, based on stored state. Independent of the caller's permissions; each action still requires its route's scope. Always [] when no action is available. Items values: `"reverse"`. `supported_actions`: [declared alternatives](../models/CreditNoteAllocationReversedMerchantEventDataPreviousAttributes.md#creditnoteallocationreversedmerchanteventdatapreviousattributessupported_actions). |

### CreditNoteAllocationReversedMerchantEventDataPreviousAttributes.allocated_at

### CreditNoteAllocationReversedMerchantEventDataPreviousAttributes.allocated_at variant 1

anyOf variant 1: When the credit was applied to the invoice balance..

- Value shape: string. When the credit was applied to the invoice balance. When the credit was applied to the invoice balance. Format: `date-time`. 

### CreditNoteAllocationReversedMerchantEventDataPreviousAttributes.allocated_at variant 2

anyOf variant 2.

- Value shape: null. When the credit was applied to the invoice balance. 

### CreditNoteAllocationReversedMerchantEventDataPreviousAttributes.credit_note_allocation_id

### CreditNoteAllocationReversedMerchantEventDataPreviousAttributes.credit_note_allocation_id variant 1

anyOf variant 1: Unique identifier of the allocation..

- Value shape: string. Unique identifier of the allocation. 

### CreditNoteAllocationReversedMerchantEventDataPreviousAttributes.credit_note_allocation_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier of the allocation. 

### CreditNoteAllocationReversedMerchantEventDataPreviousAttributes.credit_note_id

### CreditNoteAllocationReversedMerchantEventDataPreviousAttributes.credit_note_id variant 1

anyOf variant 1: The credit note whose credit was applied..

- Value shape: string. The credit note whose credit was applied. 

### CreditNoteAllocationReversedMerchantEventDataPreviousAttributes.credit_note_id variant 2

anyOf variant 2.

- Value shape: null. The credit note whose credit was applied. 

### CreditNoteAllocationReversedMerchantEventDataPreviousAttributes.idempotency_key

### CreditNoteAllocationReversedMerchantEventDataPreviousAttributes.idempotency_key variant 1

anyOf variant 1: The Idempotency-Key of the request that created this resource. `null` when that request sent no key, Flint created the resource, the reader isn't the caller that created it (another app install, a buyer, or the merchant reading an app's or buyer's record), or the caller that created an older record is unknown. Filter its list with `idempotency_key` to find it. Recorded payloads, including replayed responses and webhook events, can return `null`. To find a key that a replay returns as `null`, read the resource..

- Value shape: string. The Idempotency-Key of the request that created this resource. `null` when that request sent no key, Flint created the resource, the reader isn't the caller that created it (another app install, a buyer, or the merchant reading an app's or buyer's record), or the caller that created an older record is unknown. Filter its list with `idempotency_key` to find it. Recorded payloads, including replayed responses and webhook events, can return `null`. To find a key that a replay returns as `null`, read the resource. 

### CreditNoteAllocationReversedMerchantEventDataPreviousAttributes.idempotency_key variant 2

anyOf variant 2.

- Value shape: null. The Idempotency-Key of the request that created this resource. `null` when that request sent no key, Flint created the resource, the reader isn't the caller that created it (another app install, a buyer, or the merchant reading an app's or buyer's record), or the caller that created an older record is unknown. Filter its list with `idempotency_key` to find it. Recorded payloads, including replayed responses and webhook events, can return `null`. To find a key that a replay returns as `null`, read the resource. 

### CreditNoteAllocationReversedMerchantEventDataPreviousAttributes.invoice_id

### CreditNoteAllocationReversedMerchantEventDataPreviousAttributes.invoice_id variant 1

anyOf variant 1: The invoice whose balance the credit reduced..

- Value shape: string. The invoice whose balance the credit reduced. 

### CreditNoteAllocationReversedMerchantEventDataPreviousAttributes.invoice_id variant 2

anyOf variant 2.

- Value shape: null. The invoice whose balance the credit reduced. 

### CreditNoteAllocationReversedMerchantEventDataPreviousAttributes.reversed_at

### CreditNoteAllocationReversedMerchantEventDataPreviousAttributes.reversed_at variant 1

anyOf variant 1: When the allocation was reversed and its credit returned. Absent while the allocation stands..

- Value shape: string. When the allocation was reversed and its credit returned. Absent while the allocation stands. When the allocation was reversed and its credit returned. Absent while the allocation stands. Format: `date-time`. 

### CreditNoteAllocationReversedMerchantEventDataPreviousAttributes.reversed_at variant 2

anyOf variant 2.

- Value shape: null. When the allocation was reversed and its credit returned. Absent while the allocation stands. 

### CreditNoteAllocationReversedMerchantEventDataPreviousAttributes.supported_actions

### CreditNoteAllocationReversedMerchantEventDataPreviousAttributes.supported_actions variant 1

anyOf variant 1: Lifecycle actions Flint accepts for this resource now, based on stored state. Independent of the caller's permissions; each action still requires its route's scope. Always [] when no action is available..

- Value shape: Array of string. Lifecycle actions Flint accepts for this resource now, based on stored state. Independent of the caller's permissions; each action still requires its route's scope. Always [] when no action is available. Items values: `"reverse"`.

### CreditNoteAllocationReversedMerchantEventDataPreviousAttributes.supported_actions variant 2

anyOf variant 2.

- Value shape: null. Lifecycle actions Flint accepts for this resource now, based on stored state. Independent of the caller's permissions; each action still requires its route's scope. Always [] when no action is available. 

