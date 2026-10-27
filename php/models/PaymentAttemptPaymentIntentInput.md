[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentAttemptPaymentIntentInput

A payment intent used as one leg of an order payment attempt, with its amount, status, tip, and latest error.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | The amount requested from the buyer, including any tip_money. Capturing doesn't change it: after a partial capture it still shows the requested amount, and captured_money shows what was collected. On a standalone payment intent, PATCH can change it only before the first confirmation attempt. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `authorization_expires_at` | Optional | string | Capture is unavailable at or after this time, even if the payment still has requires_capture status. Format: `date-time`. |
| `capturable_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Payment intent's stored capturable amount. A positive amount does not override authorization_expires_at or the payment status. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `last_payment_error` | Optional | [PaymentErrorSummaryInput](../models/PaymentErrorSummaryInput.md#paymenterrorsummaryinput) | A summary of why a payment attempt failed, with a normalized error code, a message, the failure time, and remediation. |
| `payment_intent_id` | Required | string | Flint payment intent ID. |
| `selected_payment_option` | Optional | string | Payment option used by this leg, using the same values as PaymentIntent.selected_payment_option. Fixed when the attempt becomes terminal. Omitted when no payment option has been selected. Values: `"card"`, `"apple_pay"`, `"google_pay"`, `"affirm"`, `"ach_debit"`. |
| `status` | Required | string | Lifecycle status. requires_payment_method covers both a new payment intent and one whose last attempt failed, so read last_payment_error with it. succeeded, canceled, and expired are final. Refunds and disputes never change status. Values: `"requires_payment_method"`, `"requires_confirmation"`, `"requires_action"`, `"processing"`, `"requires_capture"`, `"canceled"`, `"succeeded"`, `"expired"`. |
| `tip_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

