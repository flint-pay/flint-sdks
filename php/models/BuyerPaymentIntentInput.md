[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerPaymentIntentInput

A payment as the buyer sees it. Omits the store's fees, net, risk assessment, and dispute state.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | The amount requested from the buyer, including any tip_money. Capturing doesn't change it: after a partial capture it still shows the requested amount, and captured_money shows what was collected. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `authorization_expires_at` | Optional | string | When the hold lapses if it hasn't been collected. Set when the hold is placed. Format: `date-time`. |
| `authorized_at` | Optional | string | When the processor authorized the payment. Absent until then. Format: `date-time`. |
| `authorized_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | The amount the processor authorized. It always equals amount_money and doesn't change once set. Absent until the payment is authorized, and on payments canceled before authorization. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `cancellation_reason` | Optional | string | Flint-normalized reason the payment intent was canceled. Present only while status is canceled. Unknown processor values are returned as payment_canceled. Values: [8 declared values](#buyerpaymentintentinput-cancellation_reason-values). |
| `capturable_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | The part of the authorization that can still be collected. Positive only while status is requires_capture, and zero after it is collected, released, or expires. Absent until the payment is authorized. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `capture_method` | Optional | string | When money is collected. Defaults to automatic. Values: `"automatic"`, `"manual"`. |
| `captured_at` | Optional | string | When money was captured. For automatic capture, this is when the payment succeeded. Absent until capture. Format: `date-time`. |
| `captured_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | The amount collected from the buyer. Zero while a hold is open, and positive whenever status is succeeded. Absent until the payment is authorized. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `checkout_session_id` | Optional | string | Flint checkout session ID associated with this payment, when present. |
| `created_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `customer_id` | Optional | string | Customer linked to this payment intent. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `fulfillment_hold` | Optional | [PaymentFulfillmentHoldInput](../models/PaymentFulfillmentHoldInput.md#paymentfulfillmentholdinput) | Present when a payment provider asked Flint to pause fulfillment for this payment. While its status is active, open fulfillments are on hold. A hold on fulfillment tied to a payment, with the reason, the action required, and whether the hold is active or released. |
| `invoice_id` | Optional | string | Bill this payment collects, when it pays a bill. |
| `last_payment_error` | Required | [PaymentErrorSummaryInput](../models/PaymentErrorSummaryInput.md#paymenterrorsummaryinput) or null | Most recent payment error. Null when no payment error is recorded. |
| `merchant_id` | Optional | string | Merchant that owns this payment intent. |
| `metadata` | Required | object | Caller-owned metadata. Keys starting with flint_ are reserved for Flint and aren't returned. maxProperties: `0`. |
| `order_id` | Optional | string | Order this payment belongs to. |
| `payment_flow` | Required | string | How the payment was started. Fixed when the payment is created. Values: `"checkout"`, `"payment_link"`, `"invoice"`, `"subscription_initial"`, `"subscription_renewal"`, `"virtual_terminal"`, `"api"`. |
| `payment_intent_id` | Required | string | Flint payment intent ID. |
| `payment_options` | Required | Array of string | Payment options the buyer can use for this payment. Items values: `"card"`, `"apple_pay"`, `"google_pay"`, `"affirm"`, `"ach_debit"`. |
| `payment_source` | Optional | [PaymentSourceSummaryInput](../models/PaymentSourceSummaryInput.md#paymentsourcesummaryinput) | Summary of the card or bank account used for the payment. Absent until a payment source is attached. A summary of the payment source used for a payment, by funding-method family, with card or bank account display details. |
| `receipt_email` | Optional | string or null | Email address for this payment's receipt. When it isn't set, Flint uses the buyer's email. Format: `email`. maxLength: `255`. |
| `refund_status` | Optional | string | How much of captured_money has been refunded, including value issued as store credit, based on refunded_money. Values: `"none"`, `"partially_refunded"`, `"refunded"`. |
| `refunded_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Total refunded against captured_money, including value issued as store credit and processor refunds still pending. Failed and canceled refunds aren't counted. Zero when nothing has been refunded. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `released_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | The part of the authorization returned to the buyer without being charged: the uncollected remainder after a partial capture, or the whole authorization after a cancellation or expiry. It was never collected, so it needs no refund. Absent until the payment is authorized. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `return_id` | Optional | string | Flint return ID associated with this payment, when present. |
| `selected_payment_option` | Optional | string | The payment option the most recent confirmation used. Absent until the payment intent is first confirmed. |
| `status` | Required | string | Lifecycle status. requires_payment_method covers both a new payment and one whose last attempt failed, so read last_payment_error with it. succeeded, canceled, and expired are final. Refunds never change status. Values: `"requires_payment_method"`, `"requires_confirmation"`, `"requires_action"`, `"processing"`, `"requires_capture"`, `"canceled"`, `"succeeded"`, `"expired"`. |
| `support_reference` | Required | string | Opaque payment reference to share with merchant support. Do not parse its format. |
| `supported_actions` | Required | Array of string | Always empty for buyer credentials. maxItems: `0`. Items values: `"confirm"`, `"capture"`, `"cancel"`. |
| `tip_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) or null | Portion of amount_money that is a tip. Uses amount_money's currency and is at most amount_money. |
| `transaction_purpose` | Optional | string | Why a bank debit is taken. Set only when payment_options includes ach_debit, and fixed once the payment intent exists. Values: `"goods"`, `"services"`, `"other"`. |
| `updated_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `version` | Required | integer | Persisted version of this resource's owned state. Expanded resources and external observations can change independently. Format: `uint64`. minimum: `1`. |

#### BuyerPaymentIntentInput cancellation_reason values

- `"requested_by_customer"`
- `"duplicate"`
- `"fraudulent"`
- `"abandoned"`
- `"invoice_payment_failed"`
- `"invoice_voided"`
- `"order_closed"`
- `"payment_canceled"`

