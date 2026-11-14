[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentIntentResponse

A response containing `PaymentIntent` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [PaymentIntent](../models/PaymentIntent.md#paymentintent) | Resource, collection, or operation result returned by this request. One payment from a buyer, standalone or as a leg of an order. amount_money is the amount requested. Once the payment is authorized, authorized_money equals amount_money (on a payment intent canceled with cancellation_reason payment_returned, the authorization Flint released) and splits into captured_money (collected), capturable_money (still on hold), and released_money (returned without being charged), so authorized_money equals the sum of those three whenever the capture is at most the authorization. An overcapture (see request_overcapture) has capturable_money and released_money zero and captured_money above authorized_money. Reconcile revenue from captured_money. `data`: [field definitions](../models/PaymentIntentResponse.md#paymentintentresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### PaymentIntentResponse.data

Resource, collection, or operation result returned by this request. One payment from a buyer, standalone or as a leg of an order. amount_money is the amount requested. Once the payment is authorized, authorized_money equals amount_money (on a payment intent canceled with cancellation_reason payment_returned, the authorization Flint released) and splits into captured_money (collected), capturable_money (still on hold), and released_money (returned without being charged), so authorized_money equals the sum of those three whenever the capture is at most the authorization. An overcapture (see request_overcapture) has capturable_money and released_money zero and captured_money above authorized_money. Reconcile revenue from captured_money.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `add_on_fees` | Optional | Array of [PaymentAddOnFee](../models/PaymentAddOnFee.md#paymentaddonfee) | Itemized invoice, subscription, and automatic tax fees collected with this payment. Available to the merchant only. Empty until fees settle or when no add-ons apply. Refunds do not return or revise these fees. Absent until Flint has determined and verified the fee. If Flint can't verify it when you read the payment intent, the field is omitted rather than shown unverified; read the payment intent again later. |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The amount requested from the buyer, including any tip_money. Capturing doesn't change it: after a partial capture it still shows the requested amount, and captured_money shows what was collected. On a standalone payment intent, PATCH can change it only before the first confirmation attempt. An amount_money or tip_money change that leaves too little for stored splits returns LIMIT_EXCEEDED at the changed field with minimum_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `authorization_expires_at` | Optional | string | Effective Flint deadline to capture a manual-capture hold: the earlier of the provider capture deadline and any order resource guarantee. Order guarantees last at most 24 hours from the payment attempt start and may end earlier. Capture is refused at or after this time, even while status is requires_capture. Omitted until a hold is placed. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `authorized_at` | Optional | string | When the processor authorized the payment. Absent until then. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `authorized_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The amount the processor authorized. It always equals amount_money and doesn't change once set, even when a capture collects more. On a payment intent canceled with cancellation_reason payment_returned, it equals the authorization Flint released instead. Absent until the payment is authorized, and on payments canceled before authorization. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `cancellation_reason` | Optional | string | Flint-normalized reason the payment intent was canceled. Present only while status is canceled. Unknown processor values are returned as payment_canceled. Values: [9 declared values](#paymentintentresponsedata-cancellation_reason-values). |
| `capturable_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The part of the authorization you can still capture. Positive only while status is requires_capture, and zero after you capture or cancel or the authorization expires. The authorization lapses at authorization_expires_at, and a capture attempted after that fails even if this is positive. Absent until the payment is authorized. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `capture_method` | Optional | string | When money is collected. Defaults to automatic. Values: `"automatic"`, `"manual"`. |
| `captured_at` | Optional | string | When money was captured. For automatic capture, this is when the payment succeeded. Absent until capture. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `captured_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The amount collected from the buyer, including captured_tip_money. Reconcile revenue and print receipts from this amount, not amount_money. Zero while a hold is open, and positive whenever status is succeeded. After an overcapture it is above authorized_money. Also positive on a payment intent canceled with cancellation_reason payment_returned: Flint captured the money and is returning it through a refund with reason payment_returned. processing_fee_money, merchant_net_money, and refunds are based on it. Absent until the payment is authorized. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `captured_tip_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The part of captured_money that is a tip: the capture's tip_money when it sent one, otherwise the tip the authorization carried, at most captured_money. tip_money keeps the tip the authorization carried. Refunds return it last. Absent until the payment is captured. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `checkout_session_id` | Optional | string | Flint checkout session ID associated with this payment, when present. Example: `"cs_01KEZF7C004JRWFW43H037MQRN"`. |
| `created_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `customer` | Optional | [ExpandedCustomerSummary](../models/ExpandedCustomerSummary.md#expandedcustomersummary) or null | The linked customer. Returned only with expand=customer. Present only when `expand` includes `customer`; `null` when expanded and there is no related customer. `customer`: [declared alternatives](../models/PaymentIntentResponse.md#paymentintentresponsedatacustomer). |
| `customer_id` | Optional | string | Customer linked to this payment intent. Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. |
| `customer_presence` | Required | string | Whether the customer was present for the most recent confirmation. absent means Flint charged a saved card without them, as a merchant-initiated payment on its stored credential. Subscription renewals and automatic invoice charges are absent, and other payments are absent only when confirmed or paid with customer_presence absent. A customer who pays any of them with a card they enter makes it present. Each confirmation sets it again. Values: `"present"`, `"absent"`. |
| `dispute_status` | Optional | string | Dispute state of this payment. none means no dispute or inquiry is open or recorded. The inquiry_ values track an issuer inquiry or early warning that isn't a chargeback. Read the dispute with GET /v1/disputes for its deadline and evidence. Values: [10 declared values](#paymentintentresponsedata-dispute_status-values). |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Null when no external reference is recorded. minLength: `1`. maxLength: `255`. Example: `"warehouse-1842"`. |
| `fulfillment_hold` | Optional | [PaymentFulfillmentHold](../models/PaymentFulfillmentHold.md#paymentfulfillmenthold) | Present when a payment provider asked Flint to pause fulfillment for this payment. While its status is active, open fulfillments on the order are on hold with reason payment_review. payment_intent.fulfillment_hold_updated is sent when the hold starts and when it lifts. A hold on fulfillment tied to a payment, with the reason, the action required, and whether the hold is active or released. `fulfillment_hold`: [field definitions](../models/PaymentIntentResponse.md#paymentintentresponsedatafulfillment_hold). |
| `invoice` | Optional | [ExpandedInvoiceSummary](../models/ExpandedInvoiceSummary.md#expandedinvoicesummary) or null | The linked invoice. Returned only with expand=invoice. Present only when `expand` includes `invoice`; `null` when expanded and there is no related invoice. `invoice`: [declared alternatives](../models/PaymentIntentResponse.md#paymentintentresponsedatainvoice). |
| `invoice_id` | Optional | string | Invoice this payment intent collects, when it pays an invoice. Example: `"inv_01KEZF7C00A5GEBMWHEAJFSAR4"`. |
| `last_payment_error` | Required | [PaymentErrorSummary](../models/PaymentErrorSummary.md#paymenterrorsummary) or null | Most recent payment error. Null when no payment error is recorded. `last_payment_error`: [declared alternatives](../models/PaymentIntentResponse.md#paymentintentresponsedatalast_payment_error). |
| `latest_order_payment_attempt_id` | Optional | string or null | The order payment attempt that most recently used this payment intent. Start times count to the second; of attempts that started in the same second, the one with the highest order_payment_attempt_id is named. `null` when no attempt has used it yet; omitted for payment intents without an order. It changes only when an attempt starts using this payment intent, which advances version. Returned with merchant credentials; omitted with buyer and checkout credentials. Example: `"opat_01KEZF7C00B5PW9F2R8A4YSH5D"`. |
| `merchant_id` | Optional | string | Merchant that owns this payment intent. Example: `"mer_01KEZF7C00KPYH1DDFPCCX3B6E"`. |
| `merchant_net_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Captured amount minus processing_fee_money, every amount in add_on_fees, platform_fee.amount_money, and each split commitment. Live, succeeded and fully_reversed splits commit their whole amount; payment_not_completed and install_revoked cancellations commit nothing. A failed split commits only money already taken back before failure; its remainder returns to the collecting merchant. Refunds do not reduce the commitment. Later merchant assessments and credits are separate balance effects. Absent until Flint has determined and verified the fee. If Flint can't verify it when you read the payment intent, the field is omitted rather than shown unverified; read the payment intent again later. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `metadata` | Required | Map of string | Caller-owned metadata. Keys starting with flint_ are reserved for Flint and aren't returned. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. `metadata`: [field definitions](../models/PaymentIntentResponse.md#paymentintentresponsedatametadata). |
| `order` | Optional | [ExpandedOrderSummary](../models/ExpandedOrderSummary.md#expandedordersummary) or null | The linked order. Returned only with expand=order. Present only when `expand` includes `order`; `null` when expanded and there is no related order. `order`: [declared alternatives](../models/PaymentIntentResponse.md#paymentintentresponsedataorder). |
| `order_id` | Optional | string | Order this payment intent belongs to. Create it through the order and confirm it with POST /v1/orders/{order_id}/pay. Capture and cancel use POST /v1/payment-intents/{payment_intent_id}/capture or /cancel for every payment intent. Order-owned intents accept PATCH for metadata and external_reference_id. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `overcapture` | Optional | [PaymentIntentOvercapture](../models/PaymentIntentOvercapture.md#paymentintentovercapture) | Whether one capture can collect more than the authorization, and the most it can collect. Present once a payment with request_overcapture true is authorized. Read it to show the limit; capture enforces it. Whether one capture can collect more than the authorization. |
| `payment_flow` | Required | string | How the payment was started. Fixed when the payment intent is created. Values: `"checkout"`, `"payment_link"`, `"invoice"`, `"subscription_initial"`, `"subscription_renewal"`, `"virtual_terminal"`, `"api"`. |
| `payment_intent_id` | Required | string | Flint payment intent ID. Example: `"pi_01KEZF7C00G8H9D509YEV22P7R"`. |
| `payment_options` | Required | Array of string | Payment options the buyer can use for this payment. Items values: `"card"`, `"apple_pay"`, `"google_pay"`, `"affirm"`, `"ach_debit"`, `"card_present"`. |
| `payment_source` | Optional | [PaymentSourceSummary](../models/PaymentSourceSummary.md#paymentsourcesummary) | Summary of the card or bank account used for the payment. Absent until a payment source is attached. A summary of the payment source used for a payment, by funding-method family, with card or bank account display details. |
| `platform_fee` | Optional | [PaymentIntentPlatformFee](../models/PaymentIntentPlatformFee.md#paymentintentplatformfee) | The platform fee a partner app charges on this payment, when it created the payment with an install token and a fee. Absent when the payment carries none. Returned only to merchant credentials; omitted for buyer and checkout credentials. The platform fee a partner app charges on this payment. The merchant pays it beside processing_fee_money and add_on_fees, and merchant_net_money subtracts it. `platform_fee`: [field definitions](../models/PaymentIntentResponse.md#paymentintentresponsedataplatform_fee). |
| `processing_fee_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Flint's all-in processing fee for this payment. It is the complete price Flint charges to process the payment, never a provider cost passed through. The fee is final once the card payment is captured or the ACH payment succeeds; canceled payments and failures before success have none, except a payment intent canceled with cancellation_reason payment_returned, which shows the fee charged at capture on the charge Flint is returning. Flint returns that fee to your balance separately. Invoice, subscription, and automatic tax fees are itemized separately in add_on_fees. Your net for the payment is captured_money minus this fee and the add-on fees. Refunds do not return or revise it. Absent until Flint has determined and verified the fee. If Flint can't verify it when you read the payment intent, the field is omitted rather than shown unverified; read the payment intent again later. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `reader_id` | Optional | string | The reader the payment is or was last presented on. Set when Flint presents it and kept afterward. While processing or requires_action with a reader_id, the payment is on that reader now. Example: `"rdr_01KEZF7C007JA0G24M7SD6P46C"`. |
| `receipt_email` | Optional | string or null | Email address for this payment's receipt. When it isn't set, Flint uses the customer's email. Null when no receipt email address is recorded on the payment. Format: `email`. maxLength: `255`. Example: `"buyer@example.com"`. |
| `refund_expires_at` | Required | string or null | Last time Flint can refund this payment through the original payment method. A refund submitted at exactly this time is accepted; after it, refunds through the original payment method are refused. Today only Affirm has a refund window: 120 days after the payment settles. `null` when the method has no refund window, the payment has not succeeded with captured money, or its capture time is missing. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `refund_status` | Optional | string | How much of captured_money has been refunded, including value issued as store credit, based on refunded_money. Values: `"none"`, `"partially_refunded"`, `"refunded"`. |
| `refunded_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Total refunded against captured_money, including value issued as store credit and processor refunds still pending. Failed and canceled refunds aren't counted. Zero when nothing has been refunded. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `released_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The part of the authorization returned to the buyer without being charged: the uncaptured remainder after a partial capture, or the whole authorization after a cancellation or expiry. It was never collected, so it needs no refund and can't be captured later. Zero after a capture at or above the authorization. Absent until the payment is authorized. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `request_overcapture` | Optional | boolean | Whether one capture may collect more than the authorization where the card network allows it. Fixed at create. Always present with merchant credentials; omitted with buyer and checkout credentials. |
| `return_id` | Optional | string | Flint return ID associated with this payment, when present. Example: `"ret_01KEZF7C00PG93650ZKVQNGF7X"`. |
| `return_resolution_id` | Optional | string | The return resolution whose balance this payment collects. Set for exchange balances and corrections. Example: `"retres_01KEZF7C00C7RZJN31W9SGMEQ3"`. |
| `risk` | Optional | [PaymentRisk](../models/PaymentRisk.md#paymentrisk) or null | Risk assessment. Always present with merchant credentials. Null when no risk assessment is available. Omitted with the checkout credential. `risk`: [declared alternatives](../models/PaymentIntentResponse.md#paymentintentresponsedatarisk). |
| `selected_payment_option` | Optional | string | The payment option the most recent confirmation used. Absent until the payment intent is first confirmed. Values: `"card"`, `"apple_pay"`, `"google_pay"`, `"affirm"`, `"ach_debit"`, `"card_present"`. |
| `splits` | Optional | Array of [PaymentSplit](../models/PaymentSplit.md#paymentsplit) | Top-level PaymentSplit children in their current state, embedded whole. Empty when the payment has no splits. Child changes do not send payment_intent.updated. Omitted for buyer and checkout credentials. `splits[]`: [field definitions](../models/PaymentIntentResponse.md#paymentintentresponsedatasplits). |
| `statement_descriptor` | Required | string or null | The text shown on the buyer's card or bank statement for this payment. `null` until the charge is created. `null` when the provider supplies no descriptor. Frozen when the charge is created. |
| `status` | Required | string | Lifecycle status. requires_payment_method covers both a new payment intent and one whose last attempt failed, so read last_payment_error with it. succeeded, canceled, and expired are final. Refunds and disputes never change status. Values: `"requires_payment_method"`, `"requires_confirmation"`, `"requires_action"`, `"processing"`, `"requires_capture"`, `"canceled"`, `"succeeded"`, `"expired"`. |
| `subscription_id` | Optional | string | The subscription whose billing charged this payment: its first charge, a renewal, a retry or a setup fee. Not set for the checkout payment that created a subscription. Example: `"sub_01KEZF7C00BVRE8YDBXQB74BBM"`. |
| `support_reference` | Required | string | Opaque payment reference to share with merchant support. Do not parse its format. |
| `supported_actions` | Required | Array of string | Actions the payment intent's current state accepts, each a POST to /v1/payment-intents/{payment_intent_id}/{action}. An action that isn't listed returns 409 ACTION_NOT_ALLOWED. A listed action can still be refused because of something outside the payment intent: an open risk review, an order payment attempt that is using this payment, a closed order, or the merchant's account. An order-owned payment intent never lists confirm; pay it with POST /v1/orders/{order_id}/pay. The list changes only when the payment intent changes. Always empty for buyer credentials. New actions may be added. Items values: `"confirm"`, `"capture"`, `"cancel"`. |
| `tip_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null | Portion of amount_money that is a tip. Uses amount_money's currency and is at most amount_money. Null when no tip is recorded. |
| `transaction_purpose` | Optional | string | Why a bank debit is taken. Set only when payment_options includes ach_debit, and fixed once the payment intent exists. Values: `"goods"`, `"services"`, `"other"`. |
| `updated_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `version` | Required | integer | Persisted version of this resource's owned state. Expanded resources and external observations can change independently. Format: `uint64`. minimum: `1`. |

#### PaymentIntentResponse.data cancellation_reason values

- `"requested_by_customer"`
- `"duplicate"`
- `"fraudulent"`
- `"abandoned"`
- `"invoice_payment_failed"`
- `"invoice_voided"`
- `"order_closed"`
- `"payment_canceled"`
- `"payment_returned"`

#### PaymentIntentResponse.data dispute_status values

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

### PaymentIntentResponse.data.customer

The linked customer. Returned only with expand=customer. Present only when `expand` includes `customer`; `null` when expanded and there is no related customer.

Field definitions: [shared fields](DisputeResponse.md#disputeresponsedatacustomer).

### PaymentIntentResponse.data.customer variant 1

anyOf ExpandedCustomerSummary: A customer's summary fields, returned in place of a customer ID when the customer is expanded..

- Required: `customer_id`, `email`, `name`, `phone`, `status`.
- Optional: `created_at`, `updated_at`.

### PaymentIntentResponse.data.customer variant 2

anyOf variant 2.

- Undeclared: `created_at`, `customer_id`, `email`, `name`, `phone`, `status`, `updated_at`.
- Value shape: null. The linked customer. Returned only with expand=customer. Present only when `expand` includes `customer`; `null` when expanded and there is no related customer. 

### PaymentIntentResponse.data.fulfillment_hold

Present when a payment provider asked Flint to pause fulfillment for this payment. While its status is active, open fulfillments on the order are on hold with reason payment_review. payment_intent.fulfillment_hold_updated is sent when the hold starts and when it lifts. A hold on fulfillment tied to a payment, with the reason, the action required, and whether the hold is active or released.

Field definitions: [shared fields](PaymentFulfillmentHoldInput.md#paymentfulfillmentholdinput).

### PaymentIntentResponse.data.invoice

The linked invoice. Returned only with expand=invoice. Present only when `expand` includes `invoice`; `null` when expanded and there is no related invoice.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `collection_block_status` | Conditional | string | Whether collection is blocked. While it is inventory_blocked, collection attempts return 409 ACTION_NOT_ALLOWED with details[0].reason inventory_wait. Values: `"none"`, `"inventory_blocked"`, `"resolved"`. |
| `created_at` | Conditional | string | When the invoice was created. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `customer_id` | Conditional | string | Customer billed by the invoice. Absent when the invoice has no customer. Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. |
| `due_date` | Conditional | string | Calendar due date in YYYY-MM-DD format, interpreted in timezone (UTC when absent). The outstanding balance becomes overdue only after this date ends. Automatic collection runs at the later of issue and the start of this date. With payment terms, issue computes this date from issued_at. Absent when there is no due date. Format: `date`. Example: `"2026-08-02"`. |
| `invoice_id` | Conditional | string | Flint invoice ID. Example: `"inv_01KEZF7C00A5GEBMWHEAJFSAR4"`. |
| `invoice_number` | Conditional | string | Sequential document number assigned when the invoice is issued. Absent on a draft. |
| `is_overdue` | Conditional | boolean | Whether the invoice is open or partially_paid and past due with a balance remaining, as is_overdue on the full Invoice reports it. |
| `order_id` | Conditional | string | The order the invoice bills. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `outstanding_money` | Conditional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | What is still owed, as outstanding_money on the full Invoice reports it: never below zero, 0 on paid, credited, uncollectible, and voided invoices, and equal to pricing_amounts.total_money on a draft. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `paid_money` | Conditional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Payments collected toward this invoice, online or as recorded manual payments, minus reversed payments, including payments toward late fees. Never below zero. Disputes, including losses, don't reduce it. Refunds don't reduce it; they are in refunded_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `pricing_amounts` | Conditional | [PricingAmounts](../models/PricingAmounts.md#pricingamounts) | The invoice pricing totals, frozen at issue; a draft previews the backing order. Late fees are in late_fee_money on the full invoice. The money totals for an order or invoice: subtotal, discounts, charges, tax, requested tip, and total. |
| `refund_status` | Conditional | string | How much of the collected money has been refunded. It doesn't change status. Values: `"none"`, `"partially_refunded"`, `"refunded"`. |
| `refunded_money` | Conditional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Money refunded to the buyer after collection. Refunds don't reopen the balance; refund_status summarizes them. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `status` | Conditional | string | Current invoice status. paid and credited close the current balance and can reopen to open or partially_paid after a payment or credit allocation reversal; invoice.reopened reports that change. An uncollectible invoice accepts manual recovery payments and becomes paid when fully recovered; reversals restore the write-off. voided is final. Refunds change refund_status without reopening the balance. A lost dispute leaves paid_money, the balance, and status unchanged; collecting it again requires a new invoice. Values: `"draft"`, `"open"`, `"partially_paid"`, `"paid"`, `"voided"`, `"uncollectible"`, `"credited"`. |
| `supported_actions` | Conditional | Array of string | Lifecycle actions Flint accepts for this resource now, based on stored state. Independent of the caller's permissions; each action still requires its route's scope. Always [] when no action is available. Items values: `"collect"`, `"issue"`, `"mark_uncollectible"`, `"void"`. |
| `updated_at` | Conditional | string | When the invoice last changed. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |

### PaymentIntentResponse.data.invoice variant 1

anyOf ExpandedInvoiceSummary: An invoice's summary fields, including status, due date, and paid, outstanding, and refunded amounts, returned when the invoice is expanded..

- Required: `invoice_id`, `is_overdue`, `outstanding_money`, `paid_money`, `pricing_amounts`, `refunded_money`, `status`, `supported_actions`.
- Optional: `collection_block_status`, `created_at`, `customer_id`, `due_date`, `invoice_number`, `order_id`, `refund_status`, `updated_at`.

### PaymentIntentResponse.data.invoice variant 2

anyOf variant 2.

- Undeclared: `collection_block_status`, `created_at`, `customer_id`, `due_date`, `invoice_id`, `invoice_number`, `is_overdue`, `order_id`, `outstanding_money`, `paid_money`, `pricing_amounts`, `refund_status`, `refunded_money`, `status`, `supported_actions`, `updated_at`.
- Value shape: null. The linked invoice. Returned only with expand=invoice. Present only when `expand` includes `invoice`; `null` when expanded and there is no related invoice. 

### PaymentIntentResponse.data.last_payment_error

Most recent payment error. Null when no payment error is recorded.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `code` | Conditional | string | Flint-normalized payment failure code. Unknown provider values are returned as payment_failed. Values: [27 declared values](ErrorDetailInput.md#errordetailinput-failure_code-values). |
| `failed_at` | Conditional | string | Time the payment attempt concluded in failure. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `message` | Conditional | string | Flint-authored merchant-facing payment failure message. This is stable explanatory text, not raw provider copy. |
| `remediation` | Conditional | [ErrorRemediation](../models/ErrorRemediation.md#errorremediation) or null | Guidance for resolving the payment failure before trying to collect again. |

### PaymentIntentResponse.data.last_payment_error variant 1

anyOf PaymentErrorSummary: A summary of why a payment attempt failed, with a normalized error code, a message, the failure time, and remediation..

- Required: `code`, `failed_at`, `message`, `remediation`.

### PaymentIntentResponse.data.last_payment_error variant 2

anyOf variant 2.

- Undeclared: `code`, `failed_at`, `message`, `remediation`.
- Value shape: null. Most recent payment error. Null when no payment error is recorded. 

### PaymentIntentResponse.data.metadata

Value shape: Map of string. Caller-owned metadata. Keys starting with flint_ are reserved for Flint and aren't returned. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. 

### PaymentIntentResponse.data.order

The linked order. Returned only with expand=order. Present only when `expand` includes `order`; `null` when expanded and there is no related order.

Field definitions: [shared fields](DisputeResponse.md#disputeresponsedataorder).

### PaymentIntentResponse.data.order variant 1

anyOf ExpandedOrderSummary: An order's summary fields, including status, payment and refund status, and pricing and settlement amounts, returned when the order is expanded..

- Required: `deferred_promotions`, `governing_delivery_selection_id`, `order_id`, `paid_at`, `payment_status`, `pricing_amounts`, `refund_status`, `settlement_amounts`, `status`, `supported_actions`.
- Optional: `buyer_contact`, `closed_at`, `closed_reason`, `created_at`, `customer_id`, `fulfillment_status`, `order_number`, `payment_intent_ids`, `updated_at`.

### PaymentIntentResponse.data.order variant 2

anyOf variant 2.

- Undeclared: `buyer_contact`, `closed_at`, `closed_reason`, `created_at`, `customer_id`, `deferred_promotions`, `fulfillment_status`, `governing_delivery_selection_id`, `order_id`, `order_number`, `paid_at`, `payment_intent_ids`, `payment_status`, `pricing_amounts`, `refund_status`, `settlement_amounts`, `status`, `supported_actions`, `updated_at`.
- Value shape: null. The linked order. Returned only with expand=order. Present only when `expand` includes `order`; `null` when expanded and there is no related order. 

### PaymentIntentResponse.data.order variant 1.buyer_contact

Field definitions: [DisputeResponse.data.order variant 1.buyer_contact](../models/DisputeResponse.md#disputeresponsedataorder-variant-1buyer_contact).

### PaymentIntentResponse.data.order variant 1.deferred_promotions[]

Field definitions: [DisputeResponse.data.order variant 1.deferred_promotions[]](../models/DisputeResponse.md#disputeresponsedataorder-variant-1deferred_promotions).

### PaymentIntentResponse.data.platform_fee

The platform fee a partner app charges on this payment, when it created the payment with an install token and a fee. Absent when the payment carries none. Returned only to merchant credentials; omitted for buyer and checkout credentials. The platform fee a partner app charges on this payment. The merchant pays it beside processing_fee_money and add_on_fees, and merchant_net_money subtracts it.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The fee Flint will charge until the payment succeeds, then the fee charged. Flint lowers it at confirm and capture when the merchant's approved cap or Flint's own fees leave less, and it is 0 when Flint canceled the fee before collection. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `partner_app_id` | Required | string | The partner app that charges the fee. Example: `"papp_01KEZF7C00Y8VMXYZ1GNPP3WHV"`. |
| `platform_fee_id` | Required | string | The platform fee record, which the partner app's owner reads. Example: `"pfee_01KEZF7C00JHAZN19B3MMW0R3A"`. |
| `refunded_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The fee returned to the merchant so far: by refunds the partner app created with `refund_platform_fee: true`, each returned once its payment refund succeeds, and by Flint's returns of the whole application fee. 0 when nothing was returned. See Platform fees. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

### PaymentIntentResponse.data.risk

Risk assessment. Always present with merchant credentials. Null when no risk assessment is available. Omitted with the checkout credential.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `evaluated_at` | Conditional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `level` | Conditional | string | Values: `"normal"`, `"elevated"`, `"highest"`, `"not_assessed"`. |
| `matched_risk_rule_id` | Conditional | string | Example: `"rule_01KEZF7C00FWGAQJXXA8CRA319"`. |
| `outcome` | Conditional | string or null | Values: `"authorized"`, `"manual_review"`, `"blocked"`, `"issuer_declined"`, `"invalid"`, `null`. |
| `outcome_reason` | Conditional | string or null | Values: `"highest_risk"`, `"elevated_risk"`, `"low_authorization_probability"`, `"risk_rule"`, `"risk_policy"`, `null`. |
| `payment_review_id` | Conditional | string | Example: `"rev_01KEZF7C00BVBQ00XDFNKB1EF6"`. |
| `score` | Conditional | integer | Fraud score from the card processor's screening, from 0 to 99. Higher means riskier. Absent when no score is available, which isn't a score of 0. Format: `int32`. minimum: `0`. maximum: `99`. |
| `statement` | Conditional | string |  |

### PaymentIntentResponse.data.risk variant 1

anyOf PaymentRisk: The risk assessment for a payment intent, with its risk level, score, outcome, and any matched rule or review..

- Required: `evaluated_at`, `level`, `statement`.
- Optional: `matched_risk_rule_id`, `outcome`, `outcome_reason`, `payment_review_id`, `score`.

### PaymentIntentResponse.data.risk variant 2

anyOf variant 2.

- Undeclared: `evaluated_at`, `level`, `matched_risk_rule_id`, `outcome`, `outcome_reason`, `payment_review_id`, `score`, `statement`.
- Value shape: null. Risk assessment. Always present with merchant credentials. Null when no risk assessment is available. Omitted with the checkout credential. 

### PaymentIntentResponse.data.splits[]

A top-level child of a payment intent dividing the collecting merchant's payment funds with one seller. Both parties read this same resource with their own credentials.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The admitted amount, or its final amount set at capture. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `canceled_reason` | Optional | string | Present when status is canceled. Can gain values. Values: `"payment_not_completed"`, `"install_revoked"`, `"fully_reversed"`. |
| `collecting_merchant_id` | Required | string | The merchant of record that collected the payment. Example: `"mer_01KEZF7C00KPYH1DDFPCCX3B6E"`. |
| `created_at` | Required | string | When the payment's create recorded the split. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `description` | Optional | string | The collecting merchant's description, shown to the seller. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. Shown to the seller. Exact, case-sensitive matching. maxLength: `255`. Example: `"warehouse-1842"`. |
| `failure_reason` | Optional | string | Present when status is failed. Can gain values; unknown reasons use split_failed. Values: `"seller_cannot_receive"`, `"split_failed"`. |
| `funds_available_at` | Required | string or null | When the funds become available on Flint's balance. Null when Stripe has not reported it or the payment never succeeded. Can move later after a won dispute; frozen at release. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `partner_app_id` | Required | string | The collecting merchant's partner app. Example: `"papp_01KEZF7C00Y8VMXYZ1GNPP3WHV"`. |
| `partner_app_install_id` | Required | string | The seller's install of the app. Example: `"pinst_01KEZF7C003HVKZR3GZAW6AFAZ"`. |
| `payment_intent_id` | Required | string | The collecting merchant's payment. Sellers can read the split, but not the payment. Example: `"pi_01KEZF7C00G8H9D509YEV22P7R"`. |
| `payment_split_id` | Required | string | Unique identifier for the split. Example: `"psplit_01KEZF7C00Y5HA4Z8D4KRA07K8"`. |
| `pending_reason` | Optional | string | Present when status is pending. Can gain values. Values: `"awaiting_payment"`, `"dispute_open"`, `"reversals_pending"`, `"awaiting_funds"`. |
| `reversals` | Required | Array of [PaymentSplitReversal](../models/PaymentSplitReversal.md#paymentsplitreversal) | Read-only nested children created by Flint, embedded whole. Empty when none. At most one per refund and one per dispute. `reversals[]`: [field definitions](../models/PaymentIntentResponse.md#paymentintentresponsedatasplitsreversals). |
| `reversed_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Reversals' total amount minus their reinstated amounts. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `seller_merchant_id` | Required | string | The merchant receiving the split. Example: `"mer_01KEZF7C00KPYH1DDFPCCX3B6E"`. |
| `shortfall_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Reversed funds the collecting merchant covered for the seller, less reinstatements. The seller's net is amount_money minus reversed_money plus shortfall_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `status` | Required | string | The split lifecycle status. Values: `"pending"`, `"processing"`, `"succeeded"`, `"failed"`, `"canceled"`. |
| `succeeded_at` | Optional | string | When the split reached the seller's balance. Present when succeeded. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `updated_at` | Required | string | When the split last changed. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `version` | Required | integer | Persisted version of this resource's owned state. Expanded resources and external observations can change independently. Format: `uint64`. minimum: `1`. |

### PaymentIntentResponse.data.splits[].reversals[]

A read-only nested child of a payment split, created by Flint for a refund or dispute. Embedded whole in PaymentSplit.reversals; no routes of its own.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The split's share taken back. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `created_at` | Required | string | When the reversal was recorded. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `payment_split_reversal_id` | Required | string | Unique identifier for the reversal. Example: `"psrev_01KEZF7C00XC1HA7S8YCQJDBDM"`. |
| `reason` | Required | string | Why Flint created the reversal. Values: `"refund"`, `"dispute"`, `"other"`. |
| `reinstated_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Funds returned to whoever funded the reversal, such as after a won dispute or failed refund. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `shortfall_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The part the collecting merchant covered. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `source` | Required | [ResourceReference](../models/ResourceReference.md#resourcereference) | The refund or dispute behind the reversal. A reference to another resource by `resource_type` and `resource_id`. `source`: [field definitions](../models/PaymentIntentResponse.md#paymentintentresponsedatasplitsreversalssource). |
| `status` | Required | string | The reversal lifecycle status. Values: `"pending"`, `"succeeded"`, `"canceled"`. |
| `succeeded_at` | Optional | string | When the split's share was recovered. Present when succeeded. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |

### PaymentIntentResponse.data.splits[].reversals[].source

The refund or dispute behind the reversal. A reference to another resource by `resource_type` and `resource_id`.

Field definitions: [shared fields](ResourceReferenceInput.md#resourcereferenceinput).

### PaymentIntentResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

