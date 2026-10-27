[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerPaymentErrorSummaryInput

Why a payment attempt failed: a normalized `code`, a message, when it failed, and recovery guidance.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `code` | Required | string | Flint-normalized payment failure code. Unknown provider values are returned as payment_failed. Values: [22 declared values](#buyerpaymenterrorsummaryinput-code-values). |
| `failed_at` | Required | string | Time the payment attempt concluded in failure. Format: `date-time`. |
| `message` | Required | string | Flint-authored merchant-facing payment failure message. This is stable explanatory text, not raw provider copy. |
| `remediation` | Required | [BuyerErrorRemediationInput](../models/BuyerErrorRemediationInput.md#buyererrorremediationinput) or null | Guidance for resolving the payment failure before trying to collect again. |

#### BuyerPaymentErrorSummaryInput code values

- `"card_declined"`
- `"insufficient_funds"`
- `"bank_account_closed"`
- `"bank_account_not_found"`
- `"bank_debit_not_authorized"`
- `"bank_account_restricted"`
- `"bank_debit_limit_exceeded"`
- `"authentication_required"`
- `"payment_blocked"`
- `"expired_card"`
- `"incorrect_cvc"`
- `"lost_card"`
- `"stolen_card"`
- `"do_not_honor"`
- `"fraudulent"`
- `"processing_error"`
- `"payment_method_unavailable"`
- `"payment_method_declined"`
- `"payment_not_completed"`
- `"payment_action_expired"`
- `"payment_method_temporarily_unavailable"`
- `"payment_failed"`

