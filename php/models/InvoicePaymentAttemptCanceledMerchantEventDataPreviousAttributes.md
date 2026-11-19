[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoicePaymentAttemptCanceledMerchantEventDataPreviousAttributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `canceled_at` | Optional | string or null | When the attempt was canceled. An attempt canceled with its checkout session before payment started may not have it. `canceled_at`: [declared alternatives](../models/InvoicePaymentAttemptCanceledMerchantEventDataPreviousAttributes.md#invoicepaymentattemptcanceledmerchanteventdatapreviousattributescanceled_at). |
| `cancellation_requested_at` | Optional | string or null | When cancellation of this attempt was last requested. It stays set when the payment processor refuses the cancellation or the payment settles first, so read status and canceled_at for the outcome. `cancellation_requested_at`: [declared alternatives](../models/InvoicePaymentAttemptCanceledMerchantEventDataPreviousAttributes.md#invoicepaymentattemptcanceledmerchanteventdatapreviousattributescancellation_requested_at). |
| `checkout_session_id` | Optional | string or null | The hosted or headless checkout session the buyer pays through. Absent for automatic charges. `checkout_session_id`: [declared alternatives](../models/InvoicePaymentAttemptCanceledMerchantEventDataPreviousAttributes.md#invoicepaymentattemptcanceledmerchanteventdatapreviousattributescheckout_session_id). |
| `expected_amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The amount this attempt collects: the outstanding balance, or the targeted schedule entry's outstanding amount. |
| `expires_at` | Optional | string or null | When a checkout attempt expires, matching its checkout session. Absent for automatic charges. `expires_at`: [declared alternatives](../models/InvoicePaymentAttemptCanceledMerchantEventDataPreviousAttributes.md#invoicepaymentattemptcanceledmerchanteventdatapreviousattributesexpires_at). |
| `idempotency_key` | Optional | string or null | The Idempotency-Key of the request that created this resource. `null` when that request sent no key, Flint created the resource, the reader isn't the caller that created it (another app install, a buyer, or the merchant reading an app's or buyer's record), or the caller that created an older record is unknown. Filter its list with `idempotency_key` to find it. Recorded payloads, including replayed responses and webhook events, can return `null`. To find a key that a replay returns as `null`, read the resource. Buyer sessions on routes shared with merchants get `null`. `/v1/me` responses do not include this field. `idempotency_key`: [declared alternatives](../models/WebhookSnapshotOrderPaymentAttemptPreviousAttributes.md#webhooksnapshotorderpaymentattemptpreviousattributesidempotency_key). |
| `invoice_id` | Optional | string or null | The invoice this attempt collects. `invoice_id`: [declared alternatives](../models/InvoicePaymentAttemptCanceledMerchantEventDataPreviousAttributes.md#invoicepaymentattemptcanceledmerchanteventdatapreviousattributesinvoice_id). |
| `invoice_payment_attempt_id` | Optional | string or null | Flint invoice payment attempt ID. `invoice_payment_attempt_id`: [declared alternatives](../models/InvoicePaymentAttemptCanceledMerchantEventDataPreviousAttributes.md#invoicepaymentattemptcanceledmerchanteventdatapreviousattributesinvoice_payment_attempt_id). |
| `invoice_schedule_entry_id` | Optional | string or null | The schedule entry this attempt collects. Absent when the attempt collects the invoice balance. `invoice_schedule_entry_id`: [declared alternatives](../models/InvoicePaymentAttemptCanceledMerchantEventDataPreviousAttributes.md#invoicepaymentattemptcanceledmerchanteventdatapreviousattributesinvoice_schedule_entry_id). |
| `last_payment_error` | Optional | [PaymentErrorSummaryPreviousAttributes](../models/PaymentErrorSummaryPreviousAttributes.md#paymenterrorsummarypreviousattributes) or null | Why the payment failed. Present only when status is failed. `last_payment_error`: [declared alternatives](../models/InvoicePaymentAttemptCanceledMerchantEventDataPreviousAttributes.md#invoicepaymentattemptcanceledmerchanteventdatapreviousattributeslast_payment_error). |
| `payment_intent_id` | Optional | string or null | The payment intent behind this attempt. Absent until payment starts, such as a hosted attempt the buyer hasn't paid yet. `payment_intent_id`: [declared alternatives](../models/InvoicePaymentAttemptCanceledMerchantEventDataPreviousAttributes.md#invoicepaymentattemptcanceledmerchanteventdatapreviousattributespayment_intent_id). |
| `rail` | Optional | string or null | How the attempt collects: card, including Apple Pay, Google Pay, and Affirm, or ACH debit. Values: `"card"`, `"ach_debit"`. `rail`: [declared alternatives](../models/InvoicePaymentAttemptCanceledMerchantEventDataPreviousAttributes.md#invoicepaymentattemptcanceledmerchanteventdatapreviousattributesrail). |
| `settled_at` | Optional | string or null | When this attempt first settled successfully. Duplicate payment notifications preserve this timestamp. `settled_at`: [declared alternatives](../models/InvoicePaymentAttemptCanceledMerchantEventDataPreviousAttributes.md#invoicepaymentattemptcanceledmerchanteventdatapreviousattributessettled_at). |
| `started_at` | Optional | string or null | When the attempt was created. `started_at`: [declared alternatives](../models/InvoiceDeliveryAttemptFailedMerchantEventDataPreviousAttributes.md#invoicedeliveryattemptfailedmerchanteventdatapreviousattributescreated_at). |
| `status` | Optional | string or null | Current payment attempt status. succeeded means this attempt completed successfully, even if the invoice still has an outstanding balance. invoice_payment_attempt.succeeded reports that completion. Values: `"open"`, `"succeeded"`, `"failed"`, `"canceled"`, `"expired"`, `"processing"`. `status`: [declared alternatives](../models/InvoicePaymentAttemptCanceledMerchantEventDataPreviousAttributes.md#invoicepaymentattemptcanceledmerchanteventdatapreviousattributesstatus). |
| `supported_actions` | Optional | Array of string or null | Lifecycle actions accepted now. An open or processing attempt can be canceled; the payment processor can still refuse cancellation. Items values: `"cancel"`. `supported_actions`: [declared alternatives](../models/InvoicePaymentAttemptCanceledMerchantEventDataPreviousAttributes.md#invoicepaymentattemptcanceledmerchanteventdatapreviousattributessupported_actions). |
| `updated_at` | Optional | string or null | When this attempt last changed. Duplicate payment notifications preserve this timestamp. `updated_at`: [declared alternatives](../models/InvoicePaymentAttemptCanceledMerchantEventDataPreviousAttributes.md#invoicepaymentattemptcanceledmerchanteventdatapreviousattributesupdated_at). |

### InvoicePaymentAttemptCanceledMerchantEventDataPreviousAttributes.canceled_at

### InvoicePaymentAttemptCanceledMerchantEventDataPreviousAttributes.canceled_at variant 1

anyOf variant 1: When the attempt was canceled. An attempt canceled with its checkout session before payment started may not have it..

- Value shape: string. When the attempt was canceled. An attempt canceled with its checkout session before payment started may not have it. When the attempt was canceled. An attempt canceled with its checkout session before payment started may not have it. Format: `date-time`. 

### InvoicePaymentAttemptCanceledMerchantEventDataPreviousAttributes.canceled_at variant 2

anyOf variant 2.

- Value shape: null. When the attempt was canceled. An attempt canceled with its checkout session before payment started may not have it. 

### InvoicePaymentAttemptCanceledMerchantEventDataPreviousAttributes.cancellation_requested_at

### InvoicePaymentAttemptCanceledMerchantEventDataPreviousAttributes.cancellation_requested_at variant 1

anyOf variant 1: When cancellation of this attempt was last requested. It stays set when the payment processor refuses the cancellation or the payment settles first, so read status and canceled_at for the outcome..

- Value shape: string. When cancellation of this attempt was last requested. It stays set when the payment processor refuses the cancellation or the payment settles first, so read status and canceled_at for the outcome. When cancellation of this attempt was last requested. It stays set when the payment processor refuses the cancellation or the payment settles first, so read status and canceled_at for the outcome. Format: `date-time`. 

### InvoicePaymentAttemptCanceledMerchantEventDataPreviousAttributes.cancellation_requested_at variant 2

anyOf variant 2.

- Value shape: null. When cancellation of this attempt was last requested. It stays set when the payment processor refuses the cancellation or the payment settles first, so read status and canceled_at for the outcome. 

### InvoicePaymentAttemptCanceledMerchantEventDataPreviousAttributes.checkout_session_id

### InvoicePaymentAttemptCanceledMerchantEventDataPreviousAttributes.checkout_session_id variant 1

anyOf variant 1: The hosted or headless checkout session the buyer pays through. Absent for automatic charges..

- Value shape: string. The hosted or headless checkout session the buyer pays through. Absent for automatic charges. 

### InvoicePaymentAttemptCanceledMerchantEventDataPreviousAttributes.checkout_session_id variant 2

anyOf variant 2.

- Value shape: null. The hosted or headless checkout session the buyer pays through. Absent for automatic charges. 

### InvoicePaymentAttemptCanceledMerchantEventDataPreviousAttributes.expires_at

### InvoicePaymentAttemptCanceledMerchantEventDataPreviousAttributes.expires_at variant 1

anyOf variant 1: When a checkout attempt expires, matching its checkout session. Absent for automatic charges..

- Value shape: string. When a checkout attempt expires, matching its checkout session. Absent for automatic charges. When a checkout attempt expires, matching its checkout session. Absent for automatic charges. Format: `date-time`. 

### InvoicePaymentAttemptCanceledMerchantEventDataPreviousAttributes.expires_at variant 2

anyOf variant 2.

- Value shape: null. When a checkout attempt expires, matching its checkout session. Absent for automatic charges. 

### InvoicePaymentAttemptCanceledMerchantEventDataPreviousAttributes.idempotency_key

Declared alternatives: [WebhookSnapshotOrderPaymentAttemptPreviousAttributes.idempotency_key](../models/WebhookSnapshotOrderPaymentAttemptPreviousAttributes.md#webhooksnapshotorderpaymentattemptpreviousattributesidempotency_key).

### InvoicePaymentAttemptCanceledMerchantEventDataPreviousAttributes.invoice_id

### InvoicePaymentAttemptCanceledMerchantEventDataPreviousAttributes.invoice_id variant 1

anyOf variant 1: The invoice this attempt collects..

- Value shape: string. The invoice this attempt collects. 

### InvoicePaymentAttemptCanceledMerchantEventDataPreviousAttributes.invoice_id variant 2

anyOf variant 2.

- Value shape: null. The invoice this attempt collects. 

### InvoicePaymentAttemptCanceledMerchantEventDataPreviousAttributes.invoice_payment_attempt_id

### InvoicePaymentAttemptCanceledMerchantEventDataPreviousAttributes.invoice_payment_attempt_id variant 1

anyOf variant 1: Flint invoice payment attempt ID..

- Value shape: string. Flint invoice payment attempt ID. 

### InvoicePaymentAttemptCanceledMerchantEventDataPreviousAttributes.invoice_payment_attempt_id variant 2

anyOf variant 2.

- Value shape: null. Flint invoice payment attempt ID. 

### InvoicePaymentAttemptCanceledMerchantEventDataPreviousAttributes.invoice_schedule_entry_id

### InvoicePaymentAttemptCanceledMerchantEventDataPreviousAttributes.invoice_schedule_entry_id variant 1

anyOf variant 1: The schedule entry this attempt collects. Absent when the attempt collects the invoice balance..

- Value shape: string. The schedule entry this attempt collects. Absent when the attempt collects the invoice balance. 

### InvoicePaymentAttemptCanceledMerchantEventDataPreviousAttributes.invoice_schedule_entry_id variant 2

anyOf variant 2.

- Value shape: null. The schedule entry this attempt collects. Absent when the attempt collects the invoice balance. 

### InvoicePaymentAttemptCanceledMerchantEventDataPreviousAttributes.last_payment_error

Why the payment failed. Present only when status is failed.

Field definitions: [shared fields](PaymentAttemptPaymentIntentPreviousAttributes.md#paymentattemptpaymentintentpreviousattributeslast_payment_error).

### InvoicePaymentAttemptCanceledMerchantEventDataPreviousAttributes.last_payment_error variant 1

anyOf PaymentErrorSummaryPreviousAttributes.

- Optional: `code`, `failed_at`, `message`, `remediation`.

### InvoicePaymentAttemptCanceledMerchantEventDataPreviousAttributes.last_payment_error variant 2

anyOf variant 2.

- Undeclared: `code`, `failed_at`, `message`, `remediation`.
- Value shape: null. Why the payment failed. Present only when status is failed. 

### InvoicePaymentAttemptCanceledMerchantEventDataPreviousAttributes.last_payment_error variant 1.code

Declared alternatives: [PaymentErrorSummaryPreviousAttributes.code](../models/PaymentErrorSummaryPreviousAttributes.md#paymenterrorsummarypreviousattributescode).

### InvoicePaymentAttemptCanceledMerchantEventDataPreviousAttributes.last_payment_error variant 1.failed_at

Declared alternatives: [PaymentAttemptPaymentIntentPreviousAttributes.last_payment_error variant 1.failed_at](../models/PaymentAttemptPaymentIntentPreviousAttributes.md#paymentattemptpaymentintentpreviousattributeslast_payment_error-variant-1failed_at).

### InvoicePaymentAttemptCanceledMerchantEventDataPreviousAttributes.last_payment_error variant 1.message

Declared alternatives: [PaymentErrorSummaryPreviousAttributes.message](../models/PaymentErrorSummaryPreviousAttributes.md#paymenterrorsummarypreviousattributesmessage).

### InvoicePaymentAttemptCanceledMerchantEventDataPreviousAttributes.payment_intent_id

### InvoicePaymentAttemptCanceledMerchantEventDataPreviousAttributes.payment_intent_id variant 1

anyOf variant 1: The payment intent behind this attempt. Absent until payment starts, such as a hosted attempt the buyer hasn't paid yet..

- Value shape: string. The payment intent behind this attempt. Absent until payment starts, such as a hosted attempt the buyer hasn't paid yet. 

### InvoicePaymentAttemptCanceledMerchantEventDataPreviousAttributes.payment_intent_id variant 2

anyOf variant 2.

- Value shape: null. The payment intent behind this attempt. Absent until payment starts, such as a hosted attempt the buyer hasn't paid yet. 

### InvoicePaymentAttemptCanceledMerchantEventDataPreviousAttributes.rail

### InvoicePaymentAttemptCanceledMerchantEventDataPreviousAttributes.rail variant 1

anyOf variant 1: How the attempt collects: card, including Apple Pay, Google Pay, and Affirm, or ACH debit..

- Value shape: string. How the attempt collects: card, including Apple Pay, Google Pay, and Affirm, or ACH debit. Values: `"card"`, `"ach_debit"`.

### InvoicePaymentAttemptCanceledMerchantEventDataPreviousAttributes.rail variant 2

anyOf variant 2.

- Value shape: null. How the attempt collects: card, including Apple Pay, Google Pay, and Affirm, or ACH debit. 

### InvoicePaymentAttemptCanceledMerchantEventDataPreviousAttributes.settled_at

### InvoicePaymentAttemptCanceledMerchantEventDataPreviousAttributes.settled_at variant 1

anyOf variant 1: When this attempt first settled successfully. Duplicate payment notifications preserve this timestamp..

- Value shape: string. When this attempt first settled successfully. Duplicate payment notifications preserve this timestamp. When this attempt first settled successfully. Duplicate payment notifications preserve this timestamp. Format: `date-time`. 

### InvoicePaymentAttemptCanceledMerchantEventDataPreviousAttributes.settled_at variant 2

anyOf variant 2.

- Value shape: null. When this attempt first settled successfully. Duplicate payment notifications preserve this timestamp. 

### InvoicePaymentAttemptCanceledMerchantEventDataPreviousAttributes.started_at

Declared alternatives: [InvoiceDeliveryAttemptFailedMerchantEventDataPreviousAttributes.created_at](../models/InvoiceDeliveryAttemptFailedMerchantEventDataPreviousAttributes.md#invoicedeliveryattemptfailedmerchanteventdatapreviousattributescreated_at).

### InvoicePaymentAttemptCanceledMerchantEventDataPreviousAttributes.status

### InvoicePaymentAttemptCanceledMerchantEventDataPreviousAttributes.status variant 1

anyOf variant 1: Current payment attempt status. succeeded means this attempt completed successfully, even if the invoice still has an outstanding balance. invoice_payment_attempt.succeeded reports that completion..

- Value shape: string. Current payment attempt status. succeeded means this attempt completed successfully, even if the invoice still has an outstanding balance. invoice_payment_attempt.succeeded reports that completion. Values: `"open"`, `"succeeded"`, `"failed"`, `"canceled"`, `"expired"`, `"processing"`.

### InvoicePaymentAttemptCanceledMerchantEventDataPreviousAttributes.status variant 2

anyOf variant 2.

- Value shape: null. Current payment attempt status. succeeded means this attempt completed successfully, even if the invoice still has an outstanding balance. invoice_payment_attempt.succeeded reports that completion. 

### InvoicePaymentAttemptCanceledMerchantEventDataPreviousAttributes.supported_actions

### InvoicePaymentAttemptCanceledMerchantEventDataPreviousAttributes.supported_actions variant 1

anyOf variant 1: Lifecycle actions accepted now. An open or processing attempt can be canceled; the payment processor can still refuse cancellation..

- Value shape: Array of string. Lifecycle actions accepted now. An open or processing attempt can be canceled; the payment processor can still refuse cancellation. Items values: `"cancel"`.

### InvoicePaymentAttemptCanceledMerchantEventDataPreviousAttributes.supported_actions variant 2

anyOf variant 2.

- Value shape: null. Lifecycle actions accepted now. An open or processing attempt can be canceled; the payment processor can still refuse cancellation. 

### InvoicePaymentAttemptCanceledMerchantEventDataPreviousAttributes.updated_at

### InvoicePaymentAttemptCanceledMerchantEventDataPreviousAttributes.updated_at variant 1

anyOf variant 1: When this attempt last changed. Duplicate payment notifications preserve this timestamp..

- Value shape: string. When this attempt last changed. Duplicate payment notifications preserve this timestamp. When this attempt last changed. Duplicate payment notifications preserve this timestamp. Format: `date-time`. 

### InvoicePaymentAttemptCanceledMerchantEventDataPreviousAttributes.updated_at variant 2

anyOf variant 2.

- Value shape: null. When this attempt last changed. Duplicate payment notifications preserve this timestamp. 

