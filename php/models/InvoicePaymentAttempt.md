[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoicePaymentAttempt

An attempt to collect payment for an invoice.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `canceled_at` | Optional | string | When the attempt was canceled. An attempt canceled with its checkout session before payment started may not have it. Format: `date-time`. |
| `cancellation_requested_at` | Optional | string | When cancellation of this attempt was last requested. It stays set when the payment processor refuses the cancellation or the payment settles first, so read status and canceled_at for the outcome. Format: `date-time`. |
| `checkout_session_id` | Optional | string | The hosted or headless checkout session the buyer pays through. Absent for automatic charges. |
| `expected_amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The amount this attempt collects: the outstanding balance, or the targeted schedule entry's outstanding amount. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `expires_at` | Optional | string | When a checkout attempt expires, matching its checkout session. Absent for automatic charges. Format: `date-time`. |
| `idempotency_key` | Required | string or null | The Idempotency-Key of the request that created this resource. `null` when that request sent no key, Flint created the resource, the reader isn't the caller that created it (another app install, a buyer, or the merchant reading an app's or buyer's record), or the caller that created an older record is unknown. Filter its list with `idempotency_key` to find it. Recorded payloads, including replayed responses and webhook events, can return `null`. To find a key that a replay returns as `null`, read the resource. Buyer sessions on routes shared with merchants get `null`. `/v1/me` responses do not include this field. |
| `invoice_id` | Required | string | The invoice this attempt collects. |
| `invoice_payment_attempt_id` | Required | string | Flint invoice payment attempt ID. |
| `invoice_schedule_entry_id` | Optional | string | The schedule entry this attempt collects. Absent when the attempt collects the invoice balance. |
| `last_payment_error` | Optional | [PaymentErrorSummary](../models/PaymentErrorSummary.md#paymenterrorsummary) | Why the payment failed. Present only when status is failed. A summary of why a payment attempt failed, with a normalized error code, a message, the failure time, and remediation. `last_payment_error`: [field definitions](../models/InvoicePaymentAttemptResponse.md#invoicepaymentattemptresponsedatalast_payment_error). |
| `payment_intent_id` | Optional | string | The payment intent behind this attempt. Absent until payment starts, such as a hosted attempt the buyer hasn't paid yet. |
| `rail` | Required | string | How the attempt collects: card, including Apple Pay, Google Pay, and Affirm, or ACH debit. Values: `"card"`, `"ach_debit"`. |
| `settled_at` | Optional | string | When this attempt first settled successfully. Duplicate payment notifications preserve this timestamp. Format: `date-time`. |
| `started_at` | Optional | string | When the attempt was created. Format: `date-time`. |
| `status` | Required | string | Current payment attempt status. succeeded means this attempt completed successfully, even if the invoice still has an outstanding balance. invoice_payment_attempt.succeeded reports that completion. Values: `"open"`, `"succeeded"`, `"failed"`, `"canceled"`, `"expired"`, `"processing"`. |
| `supported_actions` | Required | Array of string | Lifecycle actions accepted now. An open or processing attempt can be canceled; the payment processor can still refuse cancellation. Items values: `"cancel"`. |
| `updated_at` | Required | string | When this attempt last changed. Duplicate payment notifications preserve this timestamp. Format: `date-time`. |

### InvoicePaymentAttempt.last_payment_error

Field definitions: [InvoicePaymentAttemptResponse.data.last_payment_error](../models/InvoicePaymentAttemptResponse.md#invoicepaymentattemptresponsedatalast_payment_error).

