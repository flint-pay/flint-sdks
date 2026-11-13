[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerPaymentIntent

A payment as the buyer sees it. Omits the store's fees, net, risk assessment, and dispute state.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The amount requested from the buyer, including any tip_money. Capturing doesn't change it: after a partial capture it still shows the requested amount, and captured_money shows what was collected. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/BuyerPaymentIntent.md#buyerpaymentintentamount_money). |
| `authorization_expires_at` | Optional | string | When the hold lapses if it hasn't been collected: the earlier of the payment provider's deadline and any guarantee for reserved resources. Omitted until a hold is placed. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `authorized_at` | Optional | string | When the processor authorized the payment. Absent until then. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `authorized_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The amount the processor authorized. It always equals amount_money and doesn't change once set, even when a capture collects more. On a payment intent canceled with cancellation_reason payment_returned, it equals the authorization Flint released instead. Absent until the payment is authorized, and on payments canceled before authorization. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `authorized_money`: [field definitions](../models/BuyerPaymentIntent.md#buyerpaymentintentauthorized_money). |
| `cancellation_reason` | Optional | string | Flint-normalized reason the payment intent was canceled. Present only while status is canceled. Unknown processor values are returned as payment_canceled. Values: [9 declared values](#buyerpaymentintent-cancellation_reason-values). |
| `capturable_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The part of the authorization that can still be collected. Positive only while status is requires_capture, and zero after it is collected, released, or expires. Absent until the payment is authorized. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `capturable_money`: [field definitions](../models/BuyerPaymentIntent.md#buyerpaymentintentcapturable_money). |
| `capture_method` | Optional | string | When money is collected. Defaults to automatic. Values: `"automatic"`, `"manual"`. |
| `captured_at` | Optional | string | When money was captured. For automatic capture, this is when the payment succeeded. Absent until capture. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `captured_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The amount collected from the buyer. Zero while a hold is open, and positive whenever status is succeeded. Absent until the payment is authorized. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `captured_money`: [field definitions](../models/BuyerPaymentIntent.md#buyerpaymentintentcaptured_money). |
| `captured_tip_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The part of captured_money that is a tip. Absent until the payment is collected. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `captured_tip_money`: [field definitions](../models/BuyerPaymentIntent.md#buyerpaymentintentcaptured_tip_money). |
| `checkout_session_id` | Optional | string | Flint checkout session ID associated with this payment, when present. Example: `"cs_01KEZF7C004JRWFW43H037MQRN"`. |
| `created_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `customer_id` | Optional | string | Customer linked to this payment intent. Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. |
| `customer_presence` | Required | string | Whether you took part in the latest charge. absent means the store charged your saved card while you weren't there, such as for a renewal or a fee. Each payment attempt sets it again. Values: `"present"`, `"absent"`. |
| `fulfillment_hold` | Optional | [PaymentFulfillmentHold](../models/PaymentFulfillmentHold.md#paymentfulfillmenthold) | Present when a payment provider asked Flint to pause fulfillment for this payment. While its status is active, open fulfillments are on hold. A hold on fulfillment tied to a payment, with the reason, the action required, and whether the hold is active or released. |
| `invoice_id` | Optional | string | Bill this payment collects, when it pays a bill. Example: `"inv_01KEZF7C00A5GEBMWHEAJFSAR4"`. |
| `last_payment_error` | Required | [PaymentErrorSummary](../models/PaymentErrorSummary.md#paymenterrorsummary) or null | Most recent payment error. Null when no payment error is recorded. |
| `merchant_id` | Optional | string | Merchant that owns this payment intent. Example: `"mer_01KEZF7C00KPYH1DDFPCCX3B6E"`. |
| `order_id` | Optional | string | Order this payment belongs to. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `payment_flow` | Required | string | How the payment was started. Fixed when the payment is created. Values: `"checkout"`, `"payment_link"`, `"invoice"`, `"subscription_initial"`, `"subscription_renewal"`, `"virtual_terminal"`, `"api"`. |
| `payment_intent_id` | Required | string | Flint payment intent ID. Example: `"pi_01KEZF7C00G8H9D509YEV22P7R"`. |
| `payment_options` | Required | Array of string | Payment options the buyer can use for this payment. Items values: `"card"`, `"apple_pay"`, `"google_pay"`, `"affirm"`, `"ach_debit"`, `"card_present"`. |
| `payment_source` | Optional | [PaymentSourceSummary](../models/PaymentSourceSummary.md#paymentsourcesummary) | Summary of the card or bank account used for the payment. Absent until a payment source is attached. A summary of the payment source used for a payment, by funding-method family, with card or bank account display details. |
| `receipt_email` | Optional | string or null | Email address for this payment's receipt. When it isn't set, Flint uses the buyer's email. Format: `email`. maxLength: `255`. Example: `"buyer@example.com"`. |
| `refund_status` | Optional | string | How much of captured_money has been refunded, including value issued as store credit, based on refunded_money. Values: `"none"`, `"partially_refunded"`, `"refunded"`. |
| `refunded_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Total refunded against captured_money, including value issued as store credit and processor refunds still pending. Failed and canceled refunds aren't counted. Zero when nothing has been refunded. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `refunded_money`: [field definitions](../models/BuyerPaymentIntent.md#buyerpaymentintentrefunded_money). |
| `released_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The part of the authorization returned to the buyer without being charged: the uncollected remainder after a partial capture, or the whole authorization after a cancellation or expiry. It was never collected, so it needs no refund. Absent until the payment is authorized. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `released_money`: [field definitions](../models/BuyerPaymentIntent.md#buyerpaymentintentreleased_money). |
| `return_id` | Optional | string | Flint return ID associated with this payment, when present. Example: `"ret_01KEZF7C00PG93650ZKVQNGF7X"`. |
| `return_resolution_id` | Optional | string | The return resolution whose balance this payment collects. Set for exchange balances and corrections. Example: `"retres_01KEZF7C00C7RZJN31W9SGMEQ3"`. |
| `selected_payment_option` | Optional | string | The payment option the most recent confirmation used. Absent until the payment intent is first confirmed. Values: `"card"`, `"apple_pay"`, `"google_pay"`, `"affirm"`, `"ach_debit"`, `"card_present"`. |
| `statement_descriptor` | Required | string or null | The text shown on the buyer's card or bank statement for this payment. `null` until the charge is created. `null` when the provider supplies no descriptor. Frozen when the charge is created. |
| `status` | Required | string | Lifecycle status. requires_payment_method covers both a new payment and one whose last attempt failed, so read last_payment_error with it. succeeded, canceled, and expired are final. Refunds never change status. Values: `"requires_payment_method"`, `"requires_confirmation"`, `"requires_action"`, `"processing"`, `"requires_capture"`, `"canceled"`, `"succeeded"`, `"expired"`. |
| `subscription_id` | Optional | string | The subscription whose billing charged this payment: its first charge, a renewal, a retry or a setup fee. Not set for the checkout payment that created a subscription. Example: `"sub_01KEZF7C00BVRE8YDBXQB74BBM"`. |
| `support_reference` | Required | string | Opaque payment reference to share with merchant support. Do not parse its format. |
| `supported_actions` | Required | Array of string | Always empty for buyer credentials. maxItems: `0`. Items values: `"confirm"`, `"capture"`, `"cancel"`. |
| `tip_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null | Portion of amount_money that is a tip. Uses amount_money's currency and is at most amount_money. `tip_money`: [declared alternatives](../models/BuyerPaymentIntent.md#buyerpaymentintenttip_money). |
| `transaction_purpose` | Optional | string | Why a bank debit is taken. Set only when payment_options includes ach_debit, and fixed once the payment intent exists. Values: `"goods"`, `"services"`, `"other"`. |
| `updated_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `version` | Required | integer | Persisted version of this resource's owned state. Expanded resources and external observations can change independently. Format: `uint64`. minimum: `1`. |

#### BuyerPaymentIntent cancellation_reason values

- `"requested_by_customer"`
- `"duplicate"`
- `"fraudulent"`
- `"abandoned"`
- `"invoice_payment_failed"`
- `"invoice_voided"`
- `"order_closed"`
- `"payment_canceled"`
- `"payment_returned"`

### BuyerPaymentIntent.amount_money

The amount requested from the buyer, including any tip_money. Capturing doesn't change it: after a partial capture it still shows the requested amount, and captured_money shows what was collected. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### BuyerPaymentIntent.authorized_money

The amount the processor authorized. It always equals amount_money and doesn't change once set, even when a capture collects more. On a payment intent canceled with cancellation_reason payment_returned, it equals the authorization Flint released instead. Absent until the payment is authorized, and on payments canceled before authorization. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### BuyerPaymentIntent.capturable_money

The part of the authorization that can still be collected. Positive only while status is requires_capture, and zero after it is collected, released, or expires. Absent until the payment is authorized. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### BuyerPaymentIntent.captured_money

The amount collected from the buyer. Zero while a hold is open, and positive whenever status is succeeded. Absent until the payment is authorized. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### BuyerPaymentIntent.captured_tip_money

The part of captured_money that is a tip. Absent until the payment is collected. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### BuyerPaymentIntent.refunded_money

Total refunded against captured_money, including value issued as store credit and processor refunds still pending. Failed and canceled refunds aren't counted. Zero when nothing has been refunded. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### BuyerPaymentIntent.released_money

The part of the authorization returned to the buyer without being charged: the uncollected remainder after a partial capture, or the whole authorization after a cancellation or expiry. It was never collected, so it needs no refund. Absent until the payment is authorized. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### BuyerPaymentIntent.tip_money

Portion of amount_money that is a tip. Uses amount_money's currency and is at most amount_money.

Field definitions: [shared fields](PromotionRuleValue.md#promotionrulevalue).

### BuyerPaymentIntent.tip_money variant 1

anyOf MoneyValue: Monetary amount represented as integer minor units plus an ISO 4217 currency code..

- Required: `amount`, `currency`.

### BuyerPaymentIntent.tip_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Portion of amount_money that is a tip. Uses amount_money's currency and is at most amount_money. 

