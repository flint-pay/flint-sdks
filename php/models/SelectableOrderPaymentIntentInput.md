[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SelectableOrderPaymentIntentInput

A payment intent on an order the caller can pick, with its amount, status, and last payment error.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | The amount requested from the buyer, including any tip_money. Capturing doesn't change it: after a partial capture it still shows the requested amount, and captured_money shows what was collected. On a standalone payment intent, PATCH can change it only before the first confirmation attempt. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `last_payment_error` | Optional | [PaymentErrorSummaryInput](../models/PaymentErrorSummaryInput.md#paymenterrorsummaryinput) | Most recent payment failure, when one is recorded. A summary of why a payment attempt failed, with a normalized error code, a message, the failure time, and remediation. |
| `payment_collection` | Optional | [PaymentCollectionInput](../models/PaymentCollectionInput.md#paymentcollectioninput) | Client setup details for collecting this payment. Client-side details for collecting payment from the buyer, such as the Stripe settings to initialize Stripe.js. |
| `payment_intent_id` | Required | string | Flint payment intent ID. |
| `status` | Required | string | Lifecycle status. requires_payment_method covers both a new payment intent and one whose last attempt failed, so read last_payment_error with it. succeeded, canceled, and expired are final. Refunds and disputes never change status. Values: `"requires_payment_method"`, `"requires_confirmation"`, `"requires_action"`, `"processing"`, `"requires_capture"`, `"canceled"`, `"succeeded"`, `"expired"`. |
| `tip_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Portion of this payment's amount allocated to a tip. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

