[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## WebhookPaymentIntent

The resource snapshot, without expansions. Webhooks omit these fields: `processing_fee_money`, `add_on_fees`, `merchant_net_money`, `payment_collection`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The amount requested from the buyer, including any tip_money. Capturing doesn't change it: after a partial capture it still shows the requested amount, and captured_money shows what was collected. On a standalone payment intent, PATCH can change it only before the first confirmation attempt. An amount_money or tip_money change that leaves too little for stored splits returns LIMIT_EXCEEDED at the changed field with minimum_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/BuyerPaymentAttemptPaymentIntent.md#buyerpaymentattemptpaymentintentamount_money). |
| `authorization_expires_at` | Optional | string | Effective Flint deadline to capture a manual-capture hold: the earlier of the provider capture deadline and any order resource guarantee. Order guarantees last at most 24 hours from the payment attempt start and may end earlier. Capture is refused at or after this time, even while status is requires_capture. Omitted until a hold is placed. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `authorized_at` | Optional | string | When the processor authorized the payment. Absent until then. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `authorized_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The amount the processor authorized. It always equals amount_money and doesn't change once set, even when a capture collects more. On a payment intent canceled with cancellation_reason payment_returned, it equals the authorization Flint released instead. Absent until the payment is authorized, and on payments canceled before authorization. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `authorized_money`: [field definitions](../models/BuyerPaymentIntent.md#buyerpaymentintentauthorized_money). |
| `cancellation_reason` | Optional | string | Flint-normalized reason the payment intent was canceled. Present only while status is canceled. Unknown processor values are returned as payment_canceled. Values: [9 declared values](#webhookpaymentintent-cancellation_reason-values). |
| `capturable_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The part of the authorization you can still capture. Positive only while status is requires_capture, and zero after you capture or cancel or the authorization expires. The authorization lapses at authorization_expires_at, and a capture attempted after that fails even if this is positive. Absent until the payment is authorized. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `capturable_money`: [field definitions](../models/PaymentIntent.md#paymentintentcapturable_money). |
| `capture_method` | Optional | string | When money is collected. Defaults to automatic. Values: `"automatic"`, `"manual"`. |
| `captured_at` | Optional | string | When money was captured. For automatic capture, this is when the payment succeeded. Absent until capture. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `captured_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The amount collected from the buyer, including captured_tip_money. Reconcile revenue and print receipts from this amount, not amount_money. Zero while a hold is open, and positive whenever status is succeeded. After an overcapture it is above authorized_money. Also positive on a payment intent canceled with cancellation_reason payment_returned: Flint captured the money and is returning it through a refund with reason payment_returned. processing_fee_money, merchant_net_money, and refunds are based on it. Absent until the payment is authorized. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `captured_money`: [field definitions](../models/PaymentIntent.md#paymentintentcaptured_money). |
| `captured_tip_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The part of captured_money that is a tip: the capture's tip_money when it sent one, otherwise the tip the authorization carried, at most captured_money. tip_money keeps the tip the authorization carried. Refunds return it last. Absent until the payment is captured. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `captured_tip_money`: [field definitions](../models/PaymentIntent.md#paymentintentcaptured_tip_money). |
| `checkout_session_id` | Optional | string | Flint checkout session ID associated with this payment, when present. Example: `"cs_01KEZF7C004JRWFW43H037MQRN"`. |
| `created_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `customer` | Optional | [ExpandedCustomerSummary](../models/ExpandedCustomerSummary.md#expandedcustomersummary) or null | The linked customer. Returned only with expand=customer. Present only when `expand` includes `customer`; `null` when expanded and there is no related customer. |
| `customer_id` | Optional | string | Customer linked to this payment intent. Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. |
| `customer_presence` | Required | string | Whether the customer was present for the most recent confirmation. absent means Flint charged a saved card without them, as a merchant-initiated payment on its stored credential. Subscription renewals and automatic invoice charges are absent, and other payments are absent only when confirmed or paid with customer_presence absent. A customer who pays any of them with a card they enter makes it present. Each confirmation sets it again. Values: `"present"`, `"absent"`. |
| `dispute_status` | Optional | string | Dispute state of this payment. none means no dispute or inquiry is open or recorded. The inquiry_ values track an issuer inquiry or early warning that isn't a chargeback. Read the dispute with GET /v1/disputes for its deadline and evidence. Values: [10 declared values](#webhookpaymentintent-dispute_status-values). |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Null when no external reference is recorded. minLength: `1`. maxLength: `255`. Example: `"warehouse-1842"`. |
| `fulfillment_hold` | Optional | [PaymentFulfillmentHold](../models/PaymentFulfillmentHold.md#paymentfulfillmenthold) | Present when a payment provider asked Flint to pause fulfillment for this payment. While its status is active, open fulfillments on the order are on hold with reason payment_review. payment_intent.fulfillment_hold_updated is sent when the hold starts and when it lifts. A hold on fulfillment tied to a payment, with the reason, the action required, and whether the hold is active or released. |
| `invoice` | Optional | [ExpandedInvoiceSummary](../models/ExpandedInvoiceSummary.md#expandedinvoicesummary) or null | The linked invoice. Returned only with expand=invoice. Present only when `expand` includes `invoice`; `null` when expanded and there is no related invoice. |
| `invoice_id` | Optional | string | Invoice this payment intent collects, when it pays an invoice. Example: `"inv_01KEZF7C00A5GEBMWHEAJFSAR4"`. |
| `last_payment_error` | Required | [PaymentErrorSummary](../models/PaymentErrorSummary.md#paymenterrorsummary) or null | Most recent payment error. Null when no payment error is recorded. |
| `latest_order_payment_attempt_id` | Optional | string or null | The order payment attempt that most recently used this payment intent. Start times count to the second; of attempts that started in the same second, the one with the highest order_payment_attempt_id is named. `null` when no attempt has used it yet; omitted for payment intents without an order. It changes only when an attempt starts using this payment intent, which advances version. Returned with merchant credentials; omitted with buyer and checkout credentials. Example: `"opat_01KEZF7C00B5PW9F2R8A4YSH5D"`. |
| `merchant_id` | Optional | string | Merchant that owns this payment intent. Example: `"mer_01KEZF7C00KPYH1DDFPCCX3B6E"`. |
| `metadata` | Required | [MetadataMap](../models/MetadataMap.md#metadatamap) | Caller-owned metadata. Keys starting with flint_ are reserved for Flint and aren't returned. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. `metadata`: [field definitions](../models/PaymentIntent.md#paymentintentmetadata). |
| `order` | Optional | [ExpandedOrderSummary](../models/ExpandedOrderSummary.md#expandedordersummary) or null | The linked order. Returned only with expand=order. Present only when `expand` includes `order`; `null` when expanded and there is no related order. |
| `order_id` | Optional | string | Order this payment intent belongs to. Create it through the order and confirm it with POST /v1/orders/{order_id}/pay. Capture and cancel use POST /v1/payment-intents/{payment_intent_id}/capture or /cancel for every payment intent. Order-owned intents accept PATCH for metadata and external_reference_id. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `overcapture` | Optional | [PaymentIntentOvercapture](../models/PaymentIntentOvercapture.md#paymentintentovercapture) | Whether one capture can collect more than the authorization, and the most it can collect. Present once a payment with request_overcapture true is authorized. Read it to show the limit; capture enforces it. Whether one capture can collect more than the authorization. |
| `payment_flow` | Required | string | How the payment was started. Fixed when the payment intent is created. Values: `"checkout"`, `"payment_link"`, `"invoice"`, `"subscription_initial"`, `"subscription_renewal"`, `"virtual_terminal"`, `"api"`. |
| `payment_intent_id` | Required | string | Flint payment intent ID. Example: `"pi_01KEZF7C00G8H9D509YEV22P7R"`. |
| `payment_options` | Required | Array of string | Payment options the buyer can use for this payment. Items values: `"card"`, `"apple_pay"`, `"google_pay"`, `"affirm"`, `"ach_debit"`, `"card_present"`. |
| `payment_source` | Optional | [PaymentSourceSummary](../models/PaymentSourceSummary.md#paymentsourcesummary) | Summary of the card or bank account used for the payment. Absent until a payment source is attached. A summary of the payment source used for a payment, by funding-method family, with card or bank account display details. |
| `platform_fee` | Optional | [PaymentIntentPlatformFee](../models/PaymentIntentPlatformFee.md#paymentintentplatformfee) | The platform fee a partner app charges on this payment, when it created the payment with an install token and a fee. Absent when the payment carries none. Returned only to merchant credentials; omitted for buyer and checkout credentials. The platform fee a partner app charges on this payment. The merchant pays it beside processing_fee_money and add_on_fees, and merchant_net_money subtracts it. |
| `reader_id` | Optional | string | The reader the payment is or was last presented on. Set when Flint presents it and kept afterward. While processing or requires_action with a reader_id, the payment is on that reader now. Example: `"rdr_01KEZF7C007JA0G24M7SD6P46C"`. |
| `receipt_email` | Optional | string or null | Email address for this payment's receipt. When it isn't set, Flint uses the customer's email. Null when no receipt email address is recorded on the payment. Format: `email`. maxLength: `255`. Example: `"buyer@example.com"`. |
| `refund_expires_at` | Required | string or null | Last time Flint can refund this payment through the original payment method. A refund submitted at exactly this time is accepted; after it, refunds through the original payment method are refused. Today only Affirm has a refund window: 120 days after the payment settles. `null` when the method has no refund window, the payment has not succeeded with captured money, or its capture time is missing. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `refund_status` | Optional | string | How much of captured_money has been refunded, including value issued as store credit, based on refunded_money. Values: `"none"`, `"partially_refunded"`, `"refunded"`. |
| `refunded_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Total refunded against captured_money, including value issued as store credit and processor refunds still pending. Failed and canceled refunds aren't counted. Zero when nothing has been refunded. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `refunded_money`: [field definitions](../models/BuyerPaymentIntent.md#buyerpaymentintentrefunded_money). |
| `released_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The part of the authorization returned to the buyer without being charged: the uncaptured remainder after a partial capture, or the whole authorization after a cancellation or expiry. It was never collected, so it needs no refund and can't be captured later. Zero after a capture at or above the authorization. Absent until the payment is authorized. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `released_money`: [field definitions](../models/PaymentIntent.md#paymentintentreleased_money). |
| `request_overcapture` | Optional | boolean | Whether one capture may collect more than the authorization where the card network allows it. Fixed at create. Always present with merchant credentials; omitted with buyer and checkout credentials. |
| `return_id` | Optional | string | Flint return ID associated with this payment, when present. Example: `"ret_01KEZF7C00PG93650ZKVQNGF7X"`. |
| `return_resolution_id` | Optional | string | The return resolution whose balance this payment collects. Set for exchange balances and corrections. Example: `"retres_01KEZF7C00C7RZJN31W9SGMEQ3"`. |
| `risk` | Optional | [PaymentRisk](../models/PaymentRisk.md#paymentrisk) or null | Risk assessment. Always present with merchant credentials. Null when no risk assessment is available. Omitted with the checkout credential. |
| `selected_payment_option` | Optional | string | The payment option the most recent confirmation used. Absent until the payment intent is first confirmed. Values: `"card"`, `"apple_pay"`, `"google_pay"`, `"affirm"`, `"ach_debit"`, `"card_present"`. |
| `splits` | Optional | Array of [PaymentSplit](../models/PaymentSplit.md#paymentsplit) | Top-level PaymentSplit children in their current state, embedded whole. Empty when the payment has no splits. Child changes do not send payment_intent.updated. Omitted for buyer and checkout credentials. |
| `statement_descriptor` | Required | string or null | The text shown on the buyer's card or bank statement for this payment. `null` until the charge is created. `null` when the provider supplies no descriptor. Frozen when the charge is created. |
| `status` | Required | string | Lifecycle status. requires_payment_method covers both a new payment intent and one whose last attempt failed, so read last_payment_error with it. succeeded, canceled, and expired are final. Refunds and disputes never change status. Values: `"requires_payment_method"`, `"requires_confirmation"`, `"requires_action"`, `"processing"`, `"requires_capture"`, `"canceled"`, `"succeeded"`, `"expired"`. |
| `subscription_id` | Optional | string | The subscription whose billing charged this payment: its first charge, a renewal, a retry or a setup fee. Not set for the checkout payment that created a subscription. Example: `"sub_01KEZF7C00BVRE8YDBXQB74BBM"`. |
| `support_reference` | Required | string | Opaque payment reference to share with merchant support. Do not parse its format. |
| `supported_actions` | Required | Array of string | Actions the payment intent's current state accepts, each a POST to /v1/payment-intents/{payment_intent_id}/{action}. An action that isn't listed returns 409 ACTION_NOT_ALLOWED. A listed action can still be refused because of something outside the payment intent: an open risk review, an order payment attempt that is using this payment, a closed order, or the merchant's account. An order-owned payment intent never lists confirm; pay it with POST /v1/orders/{order_id}/pay. The list changes only when the payment intent changes. Always empty for buyer credentials. New actions may be added. Items values: `"confirm"`, `"capture"`, `"cancel"`. |
| `tip_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null | Portion of amount_money that is a tip. Uses amount_money's currency and is at most amount_money. Null when no tip is recorded. `tip_money`: [declared alternatives](../models/BuyerPaymentIntent.md#buyerpaymentintenttip_money). |
| `transaction_purpose` | Optional | string | Why a bank debit is taken. Set only when payment_options includes ach_debit, and fixed once the payment intent exists. Values: `"goods"`, `"services"`, `"other"`. |
| `updated_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `version` | Required | integer | Persisted version of this resource's owned state. Expanded resources and external observations can change independently. Format: `uint64`. minimum: `1`. |

#### WebhookPaymentIntent cancellation_reason values

- `"requested_by_customer"`
- `"duplicate"`
- `"fraudulent"`
- `"abandoned"`
- `"invoice_payment_failed"`
- `"invoice_voided"`
- `"order_closed"`
- `"payment_canceled"`
- `"payment_returned"`

#### WebhookPaymentIntent dispute_status values

- `"none"`
- `"inquiry_needs_response"`
- `"inquiry_under_review"`
- `"inquiry_closed"`
- `"needs_response"`
- `"under_review"`
- `"won"`
- `"lost"`
- `"prevented"`
- `"other"`

### WebhookPaymentIntent.amount_money

Field definitions: [BuyerPaymentAttemptPaymentIntent.amount_money](../models/BuyerPaymentAttemptPaymentIntent.md#buyerpaymentattemptpaymentintentamount_money).

### WebhookPaymentIntent.authorized_money

Field definitions: [BuyerPaymentIntent.authorized_money](../models/BuyerPaymentIntent.md#buyerpaymentintentauthorized_money).

### WebhookPaymentIntent.capturable_money

Field definitions: [PaymentIntent.capturable_money](../models/PaymentIntent.md#paymentintentcapturable_money).

### WebhookPaymentIntent.captured_money

Field definitions: [PaymentIntent.captured_money](../models/PaymentIntent.md#paymentintentcaptured_money).

### WebhookPaymentIntent.captured_tip_money

Field definitions: [PaymentIntent.captured_tip_money](../models/PaymentIntent.md#paymentintentcaptured_tip_money).

### WebhookPaymentIntent.metadata

Field definitions: [PaymentIntent.metadata](../models/PaymentIntent.md#paymentintentmetadata).

### WebhookPaymentIntent.refunded_money

Field definitions: [BuyerPaymentIntent.refunded_money](../models/BuyerPaymentIntent.md#buyerpaymentintentrefunded_money).

### WebhookPaymentIntent.released_money

Field definitions: [PaymentIntent.released_money](../models/PaymentIntent.md#paymentintentreleased_money).

### WebhookPaymentIntent.tip_money

Declared alternatives: [BuyerPaymentIntent.tip_money](../models/BuyerPaymentIntent.md#buyerpaymentintenttip_money).

