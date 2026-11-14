[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoicePaymentAttemptResponse

A response containing `InvoicePaymentAttempt` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [InvoicePaymentAttempt](../models/InvoicePaymentAttempt.md#invoicepaymentattempt) | Resource, collection, or operation result returned by this request. An attempt to collect payment for an invoice. `data`: [field definitions](../models/InvoicePaymentAttemptResponse.md#invoicepaymentattemptresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### InvoicePaymentAttemptResponse.data

Resource, collection, or operation result returned by this request. An attempt to collect payment for an invoice.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `canceled_at` | Optional | string | When the attempt was canceled. An attempt canceled with its checkout session before payment started may not have it. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `cancellation_requested_at` | Optional | string | When cancellation of this attempt was last requested. It stays set when the payment processor refuses the cancellation or the payment settles first, so read status and canceled_at for the outcome. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `checkout_session_id` | Optional | string | The hosted or headless checkout session the buyer pays through. Absent for automatic charges. Example: `"cs_01KEZF7C004JRWFW43H037MQRN"`. |
| `expected_amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The amount this attempt collects: the outstanding balance, or the targeted schedule entry's outstanding amount. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `expires_at` | Optional | string | When a checkout attempt expires, matching its checkout session. Absent for automatic charges. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `invoice_id` | Required | string | The invoice this attempt collects. Example: `"inv_01KEZF7C00A5GEBMWHEAJFSAR4"`. |
| `invoice_payment_attempt_id` | Required | string | Flint invoice payment attempt ID. Example: `"invpa_01KEZF7C00PMWEDPAYYEKDTPBX"`. |
| `invoice_schedule_entry_id` | Optional | string | The schedule entry this attempt collects. Absent when the attempt collects the invoice balance. Example: `"invse_01KEZF7C006JCPQBD8VZ0RNT6R"`. |
| `last_payment_error` | Optional | [PaymentErrorSummary](../models/PaymentErrorSummary.md#paymenterrorsummary) | Why the payment failed. Present only when status is failed. A summary of why a payment attempt failed, with a normalized error code, a message, the failure time, and remediation. `last_payment_error`: [field definitions](../models/InvoicePaymentAttemptResponse.md#invoicepaymentattemptresponsedatalast_payment_error). |
| `payment_intent_id` | Optional | string | The payment intent behind this attempt. Absent until payment starts, such as a hosted attempt the buyer hasn't paid yet. Example: `"pi_01KEZF7C00G8H9D509YEV22P7R"`. |
| `rail` | Required | string | How the attempt collects: card, including Apple Pay, Google Pay, and Affirm, or ACH debit. Values: `"card"`, `"ach_debit"`. |
| `settled_at` | Optional | string | When this attempt first settled successfully. Duplicate payment notifications preserve this timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `started_at` | Optional | string | When the attempt was created. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `status` | Required | string | Current payment attempt status. succeeded means this attempt completed successfully, even if the invoice still has an outstanding balance. invoice_payment_attempt.succeeded reports that completion. Values: `"open"`, `"succeeded"`, `"failed"`, `"canceled"`, `"expired"`, `"processing"`. |
| `updated_at` | Required | string | When this attempt last changed. Duplicate payment notifications preserve this timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |

### InvoicePaymentAttemptResponse.data.last_payment_error

Why the payment failed. Present only when status is failed. A summary of why a payment attempt failed, with a normalized error code, a message, the failure time, and remediation.

Field definitions: [shared fields](OrderResponse.md#orderresponsedataactive_payment_attemptlast_payment_error).

### InvoicePaymentAttemptResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

