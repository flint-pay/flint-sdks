[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoicePaymentAttemptInput

An attempt to collect payment for an invoice.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `canceled_at` | Optional | string | When the attempt was canceled. An attempt canceled with its checkout session before payment started may not have it. Format: `date-time`. |
| `cancellation_requested_at` | Optional | string | When cancellation of this attempt was last requested. It stays set when the payment processor refuses the cancellation or the payment settles first, so read status and canceled_at for the outcome. Format: `date-time`. |
| `checkout_session_id` | Optional | string | The hosted or embedded checkout session the buyer pays through. Absent for automatic charges. |
| `expected_amount_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | The amount this attempt collects: the outstanding balance, or the targeted schedule entry's outstanding amount. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `expected_settlement_at` | Optional | string | When an ACH debit is expected to settle, when Flint has an estimate. Format: `date-time`. |
| `expires_at` | Optional | string | When a checkout attempt expires, matching its checkout session. Absent for automatic charges. Format: `date-time`. |
| `invoice_id` | Required | string | The invoice this attempt collects. |
| `invoice_payment_attempt_id` | Required | string | Flint invoice payment attempt ID. |
| `invoice_schedule_entry_id` | Optional | string | The schedule entry this attempt collects. Absent when the attempt collects the invoice balance. |
| `last_payment_error` | Optional | [PaymentErrorSummaryInput](../models/PaymentErrorSummaryInput.md#paymenterrorsummaryinput) | Why the payment failed. Present only when status is failed. A summary of why a payment attempt failed, with a normalized error code, a message, the failure time, and remediation. |
| `payment_intent_id` | Optional | string | The payment intent behind this attempt. Absent until payment starts, such as a hosted attempt the buyer hasn't paid yet. |
| `rail` | Required | string | How the attempt collects: card, including Apple Pay, Google Pay, and Affirm, or ACH debit. Values: `"card"`, `"ach_debit"`. |
| `settled_at` | Optional | string | When this attempt first settled successfully. Duplicate payment notifications preserve this timestamp. Format: `date-time`. |
| `started_at` | Optional | string | When the attempt was created. Format: `date-time`. |
| `status` | Required | string | Current payment attempt status. settled means this attempt completed successfully, even if the invoice still has an outstanding balance. invoice_payment_attempt.settled reports that completion. Values: `"open"`, `"settled"`, `"failed"`, `"canceled"`, `"expired"`, `"processing"`. |
| `updated_at` | Optional | string | When this attempt last changed. Duplicate payment notifications preserve this timestamp. Format: `date-time`. |

