[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentErrorSummaryPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `code` | Optional | string or null | Flint-normalized payment failure code. Unknown provider values are returned as payment_failed. Values: [28 declared values](ErrorDetailInput.md#errordetailinput-failure_code-values). `code`: [declared alternatives](../models/PaymentErrorSummaryPreviousAttributesInput.md#paymenterrorsummarypreviousattributesinputcode). |
| `failed_at` | Optional | string or null | Time the payment attempt concluded in failure. `failed_at`: [declared alternatives](../models/PaymentErrorSummaryPreviousAttributesInput.md#paymenterrorsummarypreviousattributesinputfailed_at). |
| `message` | Optional | string or null | Flint-authored merchant-facing payment failure message. This is stable explanatory text, not raw provider copy. `message`: [declared alternatives](../models/PaymentErrorSummaryPreviousAttributesInput.md#paymenterrorsummarypreviousattributesinputmessage). |
| `remediation` | Optional | [ErrorRemediationPreviousAttributesInput](../models/ErrorRemediationPreviousAttributesInput.md#errorremediationpreviousattributesinput) or null | Guidance for resolving the payment failure before trying to collect again. |

### PaymentErrorSummaryPreviousAttributesInput.code

### PaymentErrorSummaryPreviousAttributesInput.code variant 1

anyOf variant 1: Flint-normalized payment failure code. Unknown provider values are returned as payment_failed..

- Value shape: string. Flint-normalized payment failure code. Unknown provider values are returned as payment_failed. Values: `"card_declined"`, `"card_declined_do_not_retry"`, `"card_details_outdated"`, `"insufficient_funds"`, `"bank_account_closed"`, `"bank_account_not_found"`, `"bank_debit_not_authorized"`, `"bank_account_restricted"`, `"bank_debit_limit_exceeded"`, `"authentication_required"`, `"payment_blocked"`, `"expired_card"`, `"incorrect_cvc"`, `"lost_card"`, `"stolen_card"`, `"do_not_honor"`, `"fraudulent"`, `"processing_error"`, `"payment_method_unavailable"`, `"payment_method_declined"`, `"payment_not_completed"`, `"payment_action_expired"`, `"payment_method_temporarily_unavailable"`, `"incorrect_pin"`, `"pin_try_exceeded"`, `"pin_required"`, `"confirmation_token_account_mismatch"`, `"payment_failed"`.

### PaymentErrorSummaryPreviousAttributesInput.code variant 2

anyOf variant 2.

- Value shape: null. Flint-normalized payment failure code. Unknown provider values are returned as payment_failed. 

### PaymentErrorSummaryPreviousAttributesInput.failed_at

### PaymentErrorSummaryPreviousAttributesInput.failed_at variant 1

anyOf variant 1: Time the payment attempt concluded in failure..

- Value shape: string. Time the payment attempt concluded in failure. Time the payment attempt concluded in failure. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### PaymentErrorSummaryPreviousAttributesInput.failed_at variant 2

anyOf variant 2.

- Value shape: null. Time the payment attempt concluded in failure. 

### PaymentErrorSummaryPreviousAttributesInput.message

### PaymentErrorSummaryPreviousAttributesInput.message variant 1

anyOf variant 1: Flint-authored merchant-facing payment failure message. This is stable explanatory text, not raw provider copy..

- Value shape: string. Flint-authored merchant-facing payment failure message. This is stable explanatory text, not raw provider copy. 

### PaymentErrorSummaryPreviousAttributesInput.message variant 2

anyOf variant 2.

- Value shape: null. Flint-authored merchant-facing payment failure message. This is stable explanatory text, not raw provider copy. 

