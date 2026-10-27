[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerSelectableOrderPaymentIntent

A payment intent a buyer can pay on an order, with its status, amounts, payment collection details, and last payment error.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The amount requested from the buyer, including any tip_money. Capturing doesn't change it: after a partial capture it still shows the requested amount, and captured_money shows what was collected. On a standalone payment intent, PATCH can change it only before the first confirmation attempt. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/BuyerPaymentAttemptPaymentIntent.md#buyerpaymentattemptpaymentintentamount_money). |
| `last_payment_error` | Optional | [BuyerPaymentErrorSummary](../models/BuyerPaymentErrorSummary.md#buyerpaymenterrorsummary) | Most recent payment failure, when one is recorded. Why a payment attempt failed: a normalized `code`, a message, when it failed, and recovery guidance. |
| `payment_collection` | Optional | [BuyerPaymentCollection](../models/BuyerPaymentCollection.md#buyerpaymentcollection) | Client setup details for collecting this payment. What a client needs to collect payment for a buyer's order. The `stripe` field holds the Stripe values. |
| `payment_intent_id` | Required | string | Flint payment intent ID. |
| `status` | Required | string | Lifecycle status. requires_payment_method covers both a new payment intent and one whose last attempt failed, so read last_payment_error with it. succeeded, canceled, and expired are final. Refunds and disputes never change status. Values: `"requires_payment_method"`, `"requires_confirmation"`, `"requires_action"`, `"processing"`, `"requires_capture"`, `"canceled"`, `"succeeded"`, `"expired"`. |
| `tip_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Portion of this payment's amount allocated to a tip. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `tip_money`: [field definitions](../models/BuyerSelectableOrderPaymentIntent.md#buyerselectableorderpaymentintenttip_money). |

### BuyerSelectableOrderPaymentIntent.amount_money

Field definitions: [BuyerPaymentAttemptPaymentIntent.amount_money](../models/BuyerPaymentAttemptPaymentIntent.md#buyerpaymentattemptpaymentintentamount_money).

### BuyerSelectableOrderPaymentIntent.tip_money

Portion of this payment's amount allocated to a tip. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

