[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentAttemptPaymentIntentPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The amount requested from the buyer, including any tip_money. Capturing doesn't change it: after a partial capture it still shows the requested amount, and captured_money shows what was collected. On a standalone payment intent, PATCH can change it only before the first confirmation attempt. An amount_money or tip_money change that leaves too little for stored splits returns LIMIT_EXCEEDED at the changed field with minimum_money. |
| `authorization_expires_at` | Optional | string or null | Effective Flint capture deadline, equal to the earlier of the provider capture deadline and this attempt's sealed resource guarantee. Capture is refused at or after this time, even while status is requires_capture. Omitted until a hold is placed. `authorization_expires_at`: [declared alternatives](../models/PaymentAttemptPaymentIntentPreviousAttributes.md#paymentattemptpaymentintentpreviousattributesauthorization_expires_at). |
| `capturable_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Payment intent's stored capturable amount. A positive amount does not override authorization_expires_at or the payment status. |
| `captured_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Money collected through this payment, once nothing more can be collected. Positive when money was collected, including a payment Flint couldn't accept and is refunding (the payment intent's cancellation_reason is payment_returned). Zero when nothing was collected, for example after a decline or a released authorization. Absent while the outcome can still change, such as an ACH debit that hasn't settled or an open hold. |
| `last_payment_error` | Optional | [PaymentErrorSummaryPreviousAttributes](../models/PaymentErrorSummaryPreviousAttributes.md#paymenterrorsummarypreviousattributes) or null | The most recent payment error recorded on this payment, when it has a public error code. Absent when none is recorded. `last_payment_error`: [declared alternatives](../models/PaymentAttemptPaymentIntentPreviousAttributes.md#paymentattemptpaymentintentpreviousattributeslast_payment_error). |
| `payment_intent_id` | Optional | string or null | Flint payment intent ID. `payment_intent_id`: [declared alternatives](../models/PaymentAttemptPaymentIntentPreviousAttributes.md#paymentattemptpaymentintentpreviousattributespayment_intent_id). |
| `reader_id` | Optional | string or null | The reader the payment is or was last presented on. Set when Flint presents it and kept afterward. While processing or requires_action with a reader_id and no payment_source.card.card_present, the payment is on that reader now. After a card is read, the payment can stay processing while Flint captures it. `reader_id`: [declared alternatives](../models/PaymentAttemptPaymentIntentPreviousAttributes.md#paymentattemptpaymentintentpreviousattributesreader_id). |
| `selected_payment_option` | Optional | string or null | Payment option used by this leg, using the same values as PaymentIntent.selected_payment_option. Fixed when the attempt becomes terminal. Omitted when no payment option has been selected. Values: `"card"`, `"apple_pay"`, `"google_pay"`, `"affirm"`, `"ach_debit"`, `"card_present"`. `selected_payment_option`: [declared alternatives](../models/PaymentAttemptPaymentIntentPreviousAttributes.md#paymentattemptpaymentintentpreviousattributesselected_payment_option). |
| `status` | Optional | string or null | Lifecycle status. requires_payment_method covers both a new payment intent and one whose last attempt failed, so read last_payment_error with it. succeeded, canceled, and expired are final. Refunds and disputes never change status. Values: `"requires_payment_method"`, `"requires_confirmation"`, `"requires_action"`, `"processing"`, `"requires_capture"`, `"canceled"`, `"succeeded"`, `"expired"`. `status`: [declared alternatives](../models/PaymentAttemptPaymentIntentPreviousAttributes.md#paymentattemptpaymentintentpreviousattributesstatus). |
| `tip_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The part of `amount_money` that is a tip. Zero when the payment carries no tip. |

### PaymentAttemptPaymentIntentPreviousAttributes.authorization_expires_at

### PaymentAttemptPaymentIntentPreviousAttributes.authorization_expires_at variant 1

anyOf variant 1: Effective Flint capture deadline, equal to the earlier of the provider capture deadline and this attempt's sealed resource guarantee. Capture is refused at or after this time, even while status is requires_capture. Omitted until a hold is placed..

- Value shape: string. Effective Flint capture deadline, equal to the earlier of the provider capture deadline and this attempt's sealed resource guarantee. Capture is refused at or after this time, even while status is requires_capture. Omitted until a hold is placed. Effective Flint capture deadline, equal to the earlier of the provider capture deadline and this attempt's sealed resource guarantee. Capture is refused at or after this time, even while status is requires_capture. Omitted until a hold is placed. Format: `date-time`. 

### PaymentAttemptPaymentIntentPreviousAttributes.authorization_expires_at variant 2

anyOf variant 2.

- Value shape: null. Effective Flint capture deadline, equal to the earlier of the provider capture deadline and this attempt's sealed resource guarantee. Capture is refused at or after this time, even while status is requires_capture. Omitted until a hold is placed. 

### PaymentAttemptPaymentIntentPreviousAttributes.last_payment_error

The most recent payment error recorded on this payment, when it has a public error code. Absent when none is recorded.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `code` | Conditional | string or null | Flint-normalized payment failure code. Unknown provider values are returned as payment_failed. Values: [28 declared values](ErrorDetailInput.md#errordetailinput-failure_code-values). `code`: [declared alternatives](../models/PaymentErrorSummaryPreviousAttributes.md#paymenterrorsummarypreviousattributescode). |
| `failed_at` | Conditional | string or null | Time the payment attempt concluded in failure. `failed_at`: [declared alternatives](../models/PaymentAttemptPaymentIntentPreviousAttributes.md#paymentattemptpaymentintentpreviousattributeslast_payment_error-variant-1failed_at). |
| `message` | Conditional | string or null | Flint-authored merchant-facing payment failure message. This is stable explanatory text, not raw provider copy. `message`: [declared alternatives](../models/PaymentErrorSummaryPreviousAttributes.md#paymenterrorsummarypreviousattributesmessage). |
| `remediation` | Conditional | [ErrorRemediationPreviousAttributes](../models/ErrorRemediationPreviousAttributes.md#errorremediationpreviousattributes) or null | Guidance for resolving the payment failure before trying to collect again. |

### PaymentAttemptPaymentIntentPreviousAttributes.last_payment_error variant 1

anyOf PaymentErrorSummaryPreviousAttributes.

- Optional: `code`, `failed_at`, `message`, `remediation`.

### PaymentAttemptPaymentIntentPreviousAttributes.last_payment_error variant 2

anyOf variant 2.

- Undeclared: `code`, `failed_at`, `message`, `remediation`.
- Value shape: null. The most recent payment error recorded on this payment, when it has a public error code. Absent when none is recorded. 

### PaymentAttemptPaymentIntentPreviousAttributes.last_payment_error variant 1.code

Declared alternatives: [PaymentErrorSummaryPreviousAttributes.code](../models/PaymentErrorSummaryPreviousAttributes.md#paymenterrorsummarypreviousattributescode).

### PaymentAttemptPaymentIntentPreviousAttributes.last_payment_error variant 1.failed_at

### PaymentAttemptPaymentIntentPreviousAttributes.last_payment_error variant 1.failed_at variant 1

anyOf variant 1: Time the payment attempt concluded in failure..

- Value shape: string. Time the payment attempt concluded in failure. Time the payment attempt concluded in failure. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### PaymentAttemptPaymentIntentPreviousAttributes.last_payment_error variant 1.failed_at variant 2

anyOf variant 2.

- Value shape: null. Time the payment attempt concluded in failure. 

### PaymentAttemptPaymentIntentPreviousAttributes.last_payment_error variant 1.message

Declared alternatives: [PaymentErrorSummaryPreviousAttributes.message](../models/PaymentErrorSummaryPreviousAttributes.md#paymenterrorsummarypreviousattributesmessage).

### PaymentAttemptPaymentIntentPreviousAttributes.payment_intent_id

### PaymentAttemptPaymentIntentPreviousAttributes.payment_intent_id variant 1

anyOf variant 1: Flint payment intent ID..

- Value shape: string. Flint payment intent ID. 

### PaymentAttemptPaymentIntentPreviousAttributes.payment_intent_id variant 2

anyOf variant 2.

- Value shape: null. Flint payment intent ID. 

### PaymentAttemptPaymentIntentPreviousAttributes.reader_id

### PaymentAttemptPaymentIntentPreviousAttributes.reader_id variant 1

anyOf variant 1: The reader the payment is or was last presented on. Set when Flint presents it and kept afterward. While processing or requires_action with a reader_id and no payment_source.card.card_present, the payment is on that reader now. After a card is read, the payment can stay processing while Flint captures it..

- Value shape: string. The reader the payment is or was last presented on. Set when Flint presents it and kept afterward. While processing or requires_action with a reader_id and no payment_source.card.card_present, the payment is on that reader now. After a card is read, the payment can stay processing while Flint captures it. 

### PaymentAttemptPaymentIntentPreviousAttributes.reader_id variant 2

anyOf variant 2.

- Value shape: null. The reader the payment is or was last presented on. Set when Flint presents it and kept afterward. While processing or requires_action with a reader_id and no payment_source.card.card_present, the payment is on that reader now. After a card is read, the payment can stay processing while Flint captures it. 

### PaymentAttemptPaymentIntentPreviousAttributes.selected_payment_option

### PaymentAttemptPaymentIntentPreviousAttributes.selected_payment_option variant 1

anyOf variant 1: Payment option used by this leg, using the same values as PaymentIntent.selected_payment_option. Fixed when the attempt becomes terminal. Omitted when no payment option has been selected..

- Value shape: string. Payment option used by this leg, using the same values as PaymentIntent.selected_payment_option. Fixed when the attempt becomes terminal. Omitted when no payment option has been selected. Values: `"card"`, `"apple_pay"`, `"google_pay"`, `"affirm"`, `"ach_debit"`, `"card_present"`.

### PaymentAttemptPaymentIntentPreviousAttributes.selected_payment_option variant 2

anyOf variant 2.

- Value shape: null. Payment option used by this leg, using the same values as PaymentIntent.selected_payment_option. Fixed when the attempt becomes terminal. Omitted when no payment option has been selected. 

### PaymentAttemptPaymentIntentPreviousAttributes.status

### PaymentAttemptPaymentIntentPreviousAttributes.status variant 1

anyOf variant 1: Lifecycle status. requires_payment_method covers both a new payment intent and one whose last attempt failed, so read last_payment_error with it. succeeded, canceled, and expired are final. Refunds and disputes never change status..

- Value shape: string. Lifecycle status. requires_payment_method covers both a new payment intent and one whose last attempt failed, so read last_payment_error with it. succeeded, canceled, and expired are final. Refunds and disputes never change status. Values: `"requires_payment_method"`, `"requires_confirmation"`, `"requires_action"`, `"processing"`, `"requires_capture"`, `"canceled"`, `"succeeded"`, `"expired"`.

### PaymentAttemptPaymentIntentPreviousAttributes.status variant 2

anyOf variant 2.

- Value shape: null. Lifecycle status. requires_payment_method covers both a new payment intent and one whose last attempt failed, so read last_payment_error with it. succeeded, canceled, and expired are final. Refunds and disputes never change status. 

