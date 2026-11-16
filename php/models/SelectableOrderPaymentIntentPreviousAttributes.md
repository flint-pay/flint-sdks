[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SelectableOrderPaymentIntentPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The amount requested from the buyer, including any tip_money. Capturing doesn't change it: after a partial capture it still shows the requested amount, and captured_money shows what was collected. On a standalone payment intent, PATCH can change it only before the first confirmation attempt. An amount_money or tip_money change that leaves too little for stored splits returns LIMIT_EXCEEDED at the changed field with minimum_money. |
| `last_payment_error` | Optional | [PaymentErrorSummaryPreviousAttributes](../models/PaymentErrorSummaryPreviousAttributes.md#paymenterrorsummarypreviousattributes) or null | Most recent payment failure, when one is recorded. `last_payment_error`: [declared alternatives](../models/SelectableOrderPaymentIntentPreviousAttributes.md#selectableorderpaymentintentpreviousattributeslast_payment_error). |
| `payment_collection` | Optional | [PaymentCollectionPreviousAttributes](../models/PaymentCollectionPreviousAttributes.md#paymentcollectionpreviousattributes) or null | Client setup details for collecting this payment. |
| `payment_intent_id` | Optional | string or null | Flint payment intent ID. `payment_intent_id`: [declared alternatives](../models/PaymentAttemptPaymentIntentPreviousAttributes.md#paymentattemptpaymentintentpreviousattributespayment_intent_id). |
| `status` | Optional | string or null | Lifecycle status. requires_payment_method covers both a new payment intent and one whose last attempt failed, so read last_payment_error with it. succeeded, canceled, and expired are final. Refunds and disputes never change status. Values: `"requires_payment_method"`, `"requires_confirmation"`, `"requires_action"`, `"processing"`, `"requires_capture"`, `"canceled"`, `"succeeded"`, `"expired"`. `status`: [declared alternatives](../models/PaymentAttemptPaymentIntentPreviousAttributes.md#paymentattemptpaymentintentpreviousattributesstatus). |
| `tip_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Portion of this payment's amount allocated to a tip. |

### SelectableOrderPaymentIntentPreviousAttributes.last_payment_error

Most recent payment failure, when one is recorded.

Field definitions: [shared fields](PaymentAttemptPaymentIntentPreviousAttributes.md#paymentattemptpaymentintentpreviousattributeslast_payment_error).

### SelectableOrderPaymentIntentPreviousAttributes.last_payment_error variant 1

anyOf PaymentErrorSummaryPreviousAttributes.

- Optional: `code`, `failed_at`, `message`, `remediation`.

### SelectableOrderPaymentIntentPreviousAttributes.last_payment_error variant 2

anyOf variant 2.

- Undeclared: `code`, `failed_at`, `message`, `remediation`.
- Value shape: null. Most recent payment failure, when one is recorded. 

### SelectableOrderPaymentIntentPreviousAttributes.last_payment_error variant 1.code

Declared alternatives: [PaymentErrorSummaryPreviousAttributes.code](../models/PaymentErrorSummaryPreviousAttributes.md#paymenterrorsummarypreviousattributescode).

### SelectableOrderPaymentIntentPreviousAttributes.last_payment_error variant 1.failed_at

Declared alternatives: [PaymentAttemptPaymentIntentPreviousAttributes.last_payment_error variant 1.failed_at](../models/PaymentAttemptPaymentIntentPreviousAttributes.md#paymentattemptpaymentintentpreviousattributeslast_payment_error-variant-1failed_at).

### SelectableOrderPaymentIntentPreviousAttributes.last_payment_error variant 1.message

Declared alternatives: [PaymentErrorSummaryPreviousAttributes.message](../models/PaymentErrorSummaryPreviousAttributes.md#paymenterrorsummarypreviousattributesmessage).

### SelectableOrderPaymentIntentPreviousAttributes.payment_intent_id

Declared alternatives: [PaymentAttemptPaymentIntentPreviousAttributes.payment_intent_id](../models/PaymentAttemptPaymentIntentPreviousAttributes.md#paymentattemptpaymentintentpreviousattributespayment_intent_id).

### SelectableOrderPaymentIntentPreviousAttributes.status

Declared alternatives: [PaymentAttemptPaymentIntentPreviousAttributes.status](../models/PaymentAttemptPaymentIntentPreviousAttributes.md#paymentattemptpaymentintentpreviousattributesstatus).

