[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoicePaymentAttemptInput

An attempt to collect payment for an invoice.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `canceled_at` | Optional | string | When the attempt was canceled. An attempt canceled with its checkout session before payment started may not have it. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `cancellation_requested_at` | Optional | string | When cancellation of this attempt was last requested. It stays set when the payment processor refuses the cancellation or the payment settles first, so read status and canceled_at for the outcome. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `checkout_session_id` | Optional | string | The hosted or embedded checkout session the buyer pays through. Absent for automatic charges. Example: `"cs_01KEZF7C004JRWFW43H037MQRN"`. |
| `expected_amount_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | The amount this attempt collects: the outstanding balance, or the targeted schedule entry's outstanding amount. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `expires_at` | Optional | string | When a checkout attempt expires, matching its checkout session. Absent for automatic charges. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `invoice_id` | Required | string | The invoice this attempt collects. Example: `"inv_01KEZF7C00A5GEBMWHEAJFSAR4"`. |
| `invoice_payment_attempt_id` | Required | string | Flint invoice payment attempt ID. Example: `"invpa_01KEZF7C00PMWEDPAYYEKDTPBX"`. |
| `invoice_schedule_entry_id` | Optional | string | The schedule entry this attempt collects. Absent when the attempt collects the invoice balance. Example: `"invse_01KEZF7C006JCPQBD8VZ0RNT6R"`. |
| `last_payment_error` | Optional | [PaymentErrorSummaryInput](../models/PaymentErrorSummaryInput.md#paymenterrorsummaryinput) | Why the payment failed. Present only when status is failed. A summary of why a payment attempt failed, with a normalized error code, a message, the failure time, and remediation. |
| `payment_intent_id` | Optional | string | The payment intent behind this attempt. Absent until payment starts, such as a hosted attempt the buyer hasn't paid yet. Example: `"pi_01KEZF7C00G8H9D509YEV22P7R"`. |
| `rail` | Required | string | How the attempt collects: card, including Apple Pay, Google Pay, and Affirm, or ACH debit. Values: `"card"`, `"ach_debit"`. |
| `settled_at` | Optional | string | When this attempt first settled successfully. Duplicate payment notifications preserve this timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `started_at` | Optional | string | When the attempt was created. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `status` | Required | string | Current payment attempt status. settled means this attempt completed successfully, even if the invoice still has an outstanding balance. invoice_payment_attempt.settled reports that completion. Values: `"open"`, `"settled"`, `"failed"`, `"canceled"`, `"expired"`, `"processing"`. |
| `updated_at` | Required | string | When this attempt last changed. Duplicate payment notifications preserve this timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |

