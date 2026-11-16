[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentErrorSummaryPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `code` | Optional | string or null | Flint-normalized payment failure code. Unknown provider values are returned as payment_failed. Values: [27 declared values](ErrorDetail.md#errordetail-failure_code-values). `code`: [declared alternatives](../models/PaymentErrorSummaryPreviousAttributes.md#paymenterrorsummarypreviousattributescode). |
| `failed_at` | Optional | string or null | Time the payment attempt concluded in failure. `failed_at`: [declared alternatives](../models/PaymentErrorSummaryPreviousAttributes.md#paymenterrorsummarypreviousattributesfailed_at). |
| `message` | Optional | string or null | Flint-authored merchant-facing payment failure message. This is stable explanatory text, not raw provider copy. `message`: [declared alternatives](../models/PaymentErrorSummaryPreviousAttributes.md#paymenterrorsummarypreviousattributesmessage). |
| `remediation` | Optional | [ErrorRemediationPreviousAttributes](../models/ErrorRemediationPreviousAttributes.md#errorremediationpreviousattributes) or null | Guidance for resolving the payment failure before trying to collect again. |

### PaymentErrorSummaryPreviousAttributes.code

### PaymentErrorSummaryPreviousAttributes.code variant 1

anyOf variant 1: Flint-normalized payment failure code. Unknown provider values are returned as payment_failed..

- Value shape: string. Flint-normalized payment failure code. Unknown provider values are returned as payment_failed. Values: `"card_declined"`, `"card_declined_do_not_retry"`, `"card_details_outdated"`, `"insufficient_funds"`, `"bank_account_closed"`, `"bank_account_not_found"`, `"bank_debit_not_authorized"`, `"bank_account_restricted"`, `"bank_debit_limit_exceeded"`, `"authentication_required"`, `"payment_blocked"`, `"expired_card"`, `"incorrect_cvc"`, `"lost_card"`, `"stolen_card"`, `"do_not_honor"`, `"fraudulent"`, `"processing_error"`, `"payment_method_unavailable"`, `"payment_method_declined"`, `"payment_not_completed"`, `"payment_action_expired"`, `"payment_method_temporarily_unavailable"`, `"incorrect_pin"`, `"pin_try_exceeded"`, `"pin_required"`, `"payment_failed"`.

### PaymentErrorSummaryPreviousAttributes.code variant 2

anyOf variant 2.

- Value shape: null. Flint-normalized payment failure code. Unknown provider values are returned as payment_failed. 

### PaymentErrorSummaryPreviousAttributes.failed_at

### PaymentErrorSummaryPreviousAttributes.failed_at variant 1

anyOf variant 1: Time the payment attempt concluded in failure..

- Value shape: string. Time the payment attempt concluded in failure. Time the payment attempt concluded in failure. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### PaymentErrorSummaryPreviousAttributes.failed_at variant 2

anyOf variant 2.

- Value shape: null. Time the payment attempt concluded in failure. 

### PaymentErrorSummaryPreviousAttributes.message

### PaymentErrorSummaryPreviousAttributes.message variant 1

anyOf variant 1: Flint-authored merchant-facing payment failure message. This is stable explanatory text, not raw provider copy..

- Value shape: string. Flint-authored merchant-facing payment failure message. This is stable explanatory text, not raw provider copy. 

### PaymentErrorSummaryPreviousAttributes.message variant 2

anyOf variant 2.

- Value shape: null. Flint-authored merchant-facing payment failure message. This is stable explanatory text, not raw provider copy. 

