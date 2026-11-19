[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentIntentCanceledMerchantEventDataPreviousAttributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The amount requested from the buyer, including any tip_money. Capturing doesn't change it: after a partial capture it still shows the requested amount, and captured_money shows what was collected. On a standalone payment intent, PATCH can change it only before the first confirmation attempt. An amount_money or tip_money change that leaves too little for stored splits returns LIMIT_EXCEEDED at the changed field with minimum_money. |
| `authorization_expires_at` | Optional | string or null | Effective Flint deadline to capture a manual-capture hold: the earlier of the provider capture deadline and any order resource guarantee. Order guarantees last at most 24 hours from the payment attempt start and may end earlier. Capture is refused at or after this time, even while status is requires_capture. Omitted until a hold is placed. `authorization_expires_at`: [declared alternatives](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributesauthorization_expires_at). |
| `authorized_at` | Optional | string or null | When the processor authorized the payment. Absent until then. `authorized_at`: [declared alternatives](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributesauthorized_at). |
| `authorized_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The amount the processor authorized. It always equals amount_money and doesn't change once set, even when a capture collects more. On a payment intent canceled with cancellation_reason payment_returned, it equals the authorization Flint released instead. Absent until the payment is authorized, and on payments canceled before authorization. |
| `cancellation_reason` | Optional | string or null | Flint-normalized reason the payment intent was canceled. Present only while status is canceled. A cancellation without a specific reason returns payment_canceled. Absent while last_payment_error.code is payment_blocked and Flint has not identified money to return. Unknown processor values are returned as payment_canceled. Values: [9 declared values](#paymentintentcanceledmerchanteventdatapreviousattributes-cancellation_reason-values). `cancellation_reason`: [declared alternatives](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributescancellation_reason). |
| `capturable_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The part of the authorization you can still capture. Positive only while status is requires_capture, and zero after you capture or cancel or the authorization expires. The authorization lapses at authorization_expires_at, and a capture attempted after that fails even if this is positive. Absent until the payment is authorized. |
| `capture_method` | Optional | string or null | When money is collected. Defaults to automatic. Values: `"automatic"`, `"manual"`. `capture_method`: [declared alternatives](../models/ExpandedPaymentIntentSummaryPreviousAttributes.md#expandedpaymentintentsummarypreviousattributescapture_method). |
| `captured_at` | Optional | string or null | When money was captured. For automatic capture, this is when the payment succeeded. Absent until capture. `captured_at`: [declared alternatives](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributescaptured_at). |
| `captured_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The amount collected from the buyer, including captured_tip_money. Reconcile revenue and print receipts from this amount, not amount_money. Zero while a hold is open, and positive whenever status is succeeded. After an overcapture it is above authorized_money. Also positive on a payment intent canceled with cancellation_reason payment_returned: Flint captured the money and is returning it through a refund with reason payment_returned. processing_fee_money, merchant_net_money, and refunds are based on it. Absent until the payment is authorized. |
| `captured_tip_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The part of captured_money that is a tip: the capture's tip_money when it sent one, otherwise the tip the authorization carried, at most captured_money. tip_money keeps the tip the authorization carried. Refunds return it last. Absent until the payment is captured. |
| `checkout_session_id` | Optional | string or null | Flint checkout session ID associated with this payment, when present. `checkout_session_id`: [declared alternatives](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributescheckout_session_id). |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `customer` | Optional | [ExpandedCustomerSummaryPreviousAttributes](../models/ExpandedCustomerSummaryPreviousAttributes.md#expandedcustomersummarypreviousattributes) or null | The linked customer. Returned only with expand=customer. Present only when `expand` includes `customer`; `null` when expanded and there is no related customer. `customer`: [declared alternatives](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributescustomer). |
| `customer_id` | Optional | string or null | Customer linked to this payment intent. `customer_id`: [declared alternatives](../models/ExpandedPaymentIntentSummaryPreviousAttributes.md#expandedpaymentintentsummarypreviousattributescustomer_id). |
| `customer_presence` | Optional | string or null | Whether the customer was present for the most recent confirmation. absent means Flint charged a saved card without them, as a merchant-initiated payment on its stored credential. Subscription renewals and automatic invoice charges are absent, and other payments are absent only when confirmed or paid with customer_presence absent. A customer who pays any of them with a card they enter makes it present. Each confirmation sets it again. Values: `"present"`, `"absent"`. `customer_presence`: [declared alternatives](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributescustomer_presence). |
| `dispute_status` | Optional | string or null | Dispute state of this payment. none means no dispute or inquiry is open or recorded. The inquiry_ values track an issuer inquiry or early warning that isn't a chargeback. Read the dispute with GET /v1/disputes for its deadline and evidence. Values: [10 declared values](#paymentintentcanceledmerchanteventdatapreviousattributes-dispute_status-values). `dispute_status`: [declared alternatives](../models/ExpandedPaymentIntentSummaryPreviousAttributes.md#expandedpaymentintentsummarypreviousattributesdispute_status). |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. `null` when no external reference ID has been set on the payment intent. `external_reference_id`: [declared alternatives](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributesexternal_reference_id). |
| `failed_attempt_count` | Optional | integer or null | All-time failed-attempt count. Present on merchant reads; omitted for buyer credentials. `failed_attempt_count`: [declared alternatives](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributesfailed_attempt_count). |
| `failed_attempts` | Optional | Array of [FailedPaymentAttemptPreviousAttributes](../models/FailedPaymentAttemptPreviousAttributes.md#failedpaymentattemptpreviousattributes) or null | Newest 50 failed attempts, newest first, with merchant-only card and buyer evidence frozen at admission. Older attempts can be included in failed_attempt_count. `failed_attempts`: [declared alternatives](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributesfailed_attempts). |
| `fulfillment_hold` | Optional | [PaymentFulfillmentHoldPreviousAttributes](../models/PaymentFulfillmentHoldPreviousAttributes.md#paymentfulfillmentholdpreviousattributes) or null | Present when a payment provider asked Flint to pause fulfillment for this payment. While its status is active, open fulfillments on the order are on hold with reason payment_review. payment_intent.fulfillment_hold_updated is sent when the hold starts and when it lifts. `fulfillment_hold`: [declared alternatives](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributesfulfillment_hold). |
| `idempotency_key` | Optional | string or null | The Idempotency-Key of the request that created this resource. `null` when that request sent no key, Flint created the resource, the reader isn't the caller that created it (another app install, a buyer, or the merchant reading an app's or buyer's record), or the caller that created an older record is unknown. Filter its list with `idempotency_key` to find it. Recorded payloads, including replayed responses and webhook events, can return `null`. To find a key that a replay returns as `null`, read the resource. Buyer sessions on routes shared with merchants get `null`. `/v1/me` responses do not include this field. `idempotency_key`: [declared alternatives](../models/WebhookSnapshotOrderPaymentAttemptPreviousAttributes.md#webhooksnapshotorderpaymentattemptpreviousattributesidempotency_key). |
| `invoice` | Optional | [ExpandedInvoiceSummaryPreviousAttributes](../models/ExpandedInvoiceSummaryPreviousAttributes.md#expandedinvoicesummarypreviousattributes) or null | The linked invoice. Returned only with expand=invoice. Present only when `expand` includes `invoice`; `null` when expanded and there is no related invoice. `invoice`: [declared alternatives](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributesinvoice). |
| `invoice_id` | Optional | string or null | Invoice this payment intent collects, when it pays an invoice. `invoice_id`: [declared alternatives](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributesinvoice_id). |
| `invoice_schedule_entry_id` | Optional | string or null | The invoice installment this payment collects. `invoice_schedule_entry_id`: [declared alternatives](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributesinvoice_schedule_entry_id). |
| `last_payment_error` | Optional | [PaymentErrorSummaryPreviousAttributes](../models/PaymentErrorSummaryPreviousAttributes.md#paymenterrorsummarypreviousattributes) or null | Most recent payment error. Null when no payment error is recorded. `last_payment_error`: [declared alternatives](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributeslast_payment_error). |
| `latest_order_payment_attempt_id` | Optional | string or null | The order payment attempt that most recently used this payment intent. Start times count to the second; of attempts that started in the same second, the one with the highest order_payment_attempt_id is named. `null` when no attempt has used it yet; omitted for payment intents without an order. It changes only when an attempt starts using this payment intent, which advances version. Returned with merchant credentials; omitted with buyer and checkout credentials. `latest_order_payment_attempt_id`: [declared alternatives](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributeslatest_order_payment_attempt_id). |
| `merchant_id` | Optional | string or null | Merchant that owns this payment intent. `merchant_id`: [declared alternatives](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributesmerchant_id). |
| `metadata` | Optional | Map of string or null | Caller-owned metadata. Keys starting with flint_ are reserved for Flint and aren't returned. Always present with merchant credentials. `metadata`: [declared alternatives](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributesmetadata). |
| `order` | Optional | [ExpandedOrderSummaryPreviousAttributes](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributes) or null | The linked order. Returned only with expand=order. Present only when `expand` includes `order`; `null` when expanded and there is no related order. `order`: [declared alternatives](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributesorder). |
| `order_edit_id` | Optional | string or null | The order edit whose balance this payment collects. Omitted when this payment doesn't collect an edit's balance. `order_edit_id`: [declared alternatives](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributesorder_edit_id). |
| `order_id` | Optional | string or null | Order this payment intent belongs to. Create it through the order and confirm it with POST /v1/orders/{order_id}/pay. Capture and cancel use POST /v1/payment-intents/{payment_intent_id}/capture or /cancel for every payment intent. Order-owned intents accept PATCH for metadata and external_reference_id. `order_id`: [declared alternatives](../models/ExpandedPaymentIntentSummaryPreviousAttributes.md#expandedpaymentintentsummarypreviousattributesorder_id). |
| `overcapture` | Optional | [PaymentIntentOvercapturePreviousAttributes](../models/PaymentIntentOvercapturePreviousAttributes.md#paymentintentovercapturepreviousattributes) or null | Whether one capture can collect more than the authorization, and the most it can collect. Present once a payment with request_overcapture true is authorized. Read it to show the limit; capture enforces it. |
| `payment_flow` | Optional | string or null | How the payment was started. Fixed when the payment intent is created. Values: `"checkout"`, `"payment_link"`, `"invoice"`, `"subscription_initial"`, `"subscription_renewal"`, `"virtual_terminal"`, `"api"`. `payment_flow`: [declared alternatives](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributespayment_flow). |
| `payment_intent_id` | Optional | string or null | Flint payment intent ID. `payment_intent_id`: [declared alternatives](../models/PaymentAttemptPaymentIntentPreviousAttributes.md#paymentattemptpaymentintentpreviousattributespayment_intent_id). |
| `payment_options` | Optional | Array of string or null | Payment options the buyer can use for this payment. Items values: `"card"`, `"apple_pay"`, `"google_pay"`, `"affirm"`, `"ach_debit"`, `"card_present"`. `payment_options`: [declared alternatives](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributespayment_options). |
| `payment_source` | Optional | [PaymentSourceSummaryPreviousAttributes](../models/PaymentSourceSummaryPreviousAttributes.md#paymentsourcesummarypreviousattributes) or null | Summary of the card or bank account used for the payment. Absent until a payment source is attached. |
| `platform_fee` | Optional | [PaymentIntentPlatformFeePreviousAttributes](../models/PaymentIntentPlatformFeePreviousAttributes.md#paymentintentplatformfeepreviousattributes) or null | The platform fee a partner app charges on this payment, when it created the payment with an install token and a fee. Absent when the payment carries none. Returned only to merchant credentials; omitted for buyer and checkout credentials. `platform_fee`: [declared alternatives](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributesplatform_fee). |
| `reader_id` | Optional | string or null | The reader the payment is or was last presented on. Set when Flint presents it and kept afterward. While processing or requires_action with a reader_id and no payment_source.card.card_present, the payment is on that reader now. After a card is read, the payment can stay processing while Flint captures it. `reader_id`: [declared alternatives](../models/PaymentAttemptPaymentIntentPreviousAttributes.md#paymentattemptpaymentintentpreviousattributesreader_id). |
| `receipt_email` | Optional | string or null | Email address for this payment's receipt. When it isn't set, Flint uses the customer's email. `null` when no receipt email has been set on the payment intent. `receipt_email`: [declared alternatives](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributesreceipt_email). |
| `refund_expires_at` | Optional | string or null | Last time Flint can refund this payment through the original payment method. A refund submitted at exactly this time is accepted; after it, refunds through the original payment method are refused. Today only Affirm has a refund window: 120 days after the payment settles. `null` when the method has no refund window, the payment has not succeeded with captured money, or its capture time is missing. Always present with merchant credentials. `refund_expires_at`: [declared alternatives](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributesrefund_expires_at). |
| `refund_status` | Optional | string or null | How much of captured_money has been refunded, including value issued as store credit, based on refunded_money. Values: `"none"`, `"partially_refunded"`, `"refunded"`. `refund_status`: [declared alternatives](../models/ExpandedPaymentIntentSummaryPreviousAttributes.md#expandedpaymentintentsummarypreviousattributesrefund_status). |
| `refunded_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Total refunded against captured_money, including value issued as store credit and processor refunds still pending. Failed and canceled refunds aren't counted. Zero when nothing has been refunded. |
| `released_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The part of the authorization returned to the buyer without being charged: the uncaptured remainder after a partial capture, or the whole authorization after a cancellation or expiry. It was never collected, so it needs no refund and can't be captured later. Zero after a capture at or above the authorization. Absent until the payment is authorized. |
| `request_overcapture` | Optional | boolean or null | Whether one capture may collect more than the authorization where the card network allows it. Fixed at create. Always present with merchant credentials; omitted with buyer and checkout credentials. `request_overcapture`: [declared alternatives](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributesrequest_overcapture). |
| `return_id` | Optional | string or null | Flint return ID associated with this payment, when present. `return_id`: [declared alternatives](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributesreturn_id). |
| `return_resolution_id` | Optional | string or null | The return resolution whose balance this payment collects. Set for exchange balances and corrections. `return_resolution_id`: [declared alternatives](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributesreturn_resolution_id). |
| `risk` | Optional | [PaymentRiskPreviousAttributes](../models/PaymentRiskPreviousAttributes.md#paymentriskpreviousattributes) or null | Risk assessment. Always present with merchant credentials. `null` when the payment intent's latest payment attempt has no completed risk assessment, such as before its first confirmation. Omitted with the checkout credential. `risk`: [declared alternatives](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributesrisk). |
| `selected_payment_option` | Optional | string or null | The payment option the most recent confirmation used. Absent until the payment intent is first confirmed. Values: `"card"`, `"apple_pay"`, `"google_pay"`, `"affirm"`, `"ach_debit"`, `"card_present"`. `selected_payment_option`: [declared alternatives](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributesselected_payment_option). |
| `splits` | Optional | Array of [PaymentSplitPreviousAttributes](../models/PaymentSplitPreviousAttributes.md#paymentsplitpreviousattributes) or null | Top-level PaymentSplit children in their current state, embedded whole. Empty when the payment has no splits. Child changes do not send payment_intent.updated. Omitted for buyer and checkout credentials. `splits`: [declared alternatives](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributessplits). |
| `statement_descriptor` | Optional | string or null | The text shown on the buyer's card or bank statement for this payment. `null` until the charge is created. `null` when the provider supplies no descriptor. Frozen when the charge is created. `statement_descriptor`: [declared alternatives](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributesstatement_descriptor). |
| `status` | Optional | string or null | Lifecycle status. requires_payment_method covers both a new payment intent and one whose last attempt failed, so read last_payment_error with it. succeeded, canceled, and expired are final. Refunds and disputes never change status. Values: `"requires_payment_method"`, `"requires_confirmation"`, `"requires_action"`, `"processing"`, `"requires_capture"`, `"canceled"`, `"succeeded"`, `"expired"`. `status`: [declared alternatives](../models/PaymentAttemptPaymentIntentPreviousAttributes.md#paymentattemptpaymentintentpreviousattributesstatus). |
| `subscription_id` | Optional | string or null | The subscription whose billing charged this payment: its first charge, a renewal, a retry or a setup fee. Not set for the checkout payment that created a subscription. `subscription_id`: [declared alternatives](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributessubscription_id). |
| `support_reference` | Optional | string or null | Opaque payment reference to share with merchant support. Do not parse its format. `support_reference`: [declared alternatives](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributessupport_reference). |
| `supported_actions` | Optional | Array of string or null | Verbs this payment intent accepts now, each a POST to /v1/payment-intents/{payment_intent_id}/{action}. The list includes stored order facts and can change without a payment intent version change. Order legs list confirm when a single leg can pay the order or an open attempt can continue it. Several unpaid legs, selected gift cards, or automatic tax with a leg below the balance require pay_order instead. Invoice payments list only cancel. An unused first-period subscription payment lists cancel once the subscription is canceled. Order edit payments list confirm while awaiting payment details or action. A listed action can still be refused due to an open risk review, an order payment attempt, a closed order, or the merchant account. A managed_by_owner refusal names the owner and its command in remediation.next_actions. The merchant list is credential-independent. Checkout credentials receive that list filtered to confirm and cancel on their own session's intents, never capture. Customer sessions omit this field. New actions may be added. Items values: `"confirm"`, `"capture"`, `"cancel"`. `supported_actions`: [declared alternatives](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributessupported_actions). |
| `tip_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Portion of amount_money that is a tip. Uses amount_money's currency and is at most amount_money. `null` when no tip is set, and for an order payment until its payment attempt has moved past requires_payment_method and requires_confirmation. An order payment without a tip can return an amount of 0 instead. |
| `transaction_purpose` | Optional | string or null | Why a bank debit is taken. Set only when payment_options includes ach_debit, and fixed once the payment intent exists. Values: `"goods"`, `"services"`, `"other"`. `transaction_purpose`: [declared alternatives](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributestransaction_purpose). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `version` | Optional | integer or null | Persisted version of this resource's owned state. Expanded resources and external observations can change independently. `version`: [declared alternatives](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdata-fields-1previous_attributesversion). |

#### PaymentIntentCanceledMerchantEventDataPreviousAttributes cancellation_reason values

- `"requested_by_customer"`
- `"duplicate"`
- `"fraudulent"`
- `"abandoned"`
- `"invoice_payment_failed"`
- `"invoice_voided"`
- `"order_closed"`
- `"payment_canceled"`
- `"payment_returned"`

#### PaymentIntentCanceledMerchantEventDataPreviousAttributes dispute_status values

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

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.authorization_expires_at

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.authorization_expires_at variant 1

anyOf variant 1: Effective Flint deadline to capture a manual-capture hold: the earlier of the provider capture deadline and any order resource guarantee. Order guarantees last at most 24 hours from the payment attempt start and may end earlier. Capture is refused at or after this time, even while status is requires_capture. Omitted until a hold is placed..

- Value shape: string. Effective Flint deadline to capture a manual-capture hold: the earlier of the provider capture deadline and any order resource guarantee. Order guarantees last at most 24 hours from the payment attempt start and may end earlier. Capture is refused at or after this time, even while status is requires_capture. Omitted until a hold is placed. Effective Flint deadline to capture a manual-capture hold: the earlier of the provider capture deadline and any order resource guarantee. Order guarantees last at most 24 hours from the payment attempt start and may end earlier. Capture is refused at or after this time, even while status is requires_capture. Omitted until a hold is placed. Format: `date-time`. 

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.authorization_expires_at variant 2

anyOf variant 2.

- Value shape: null. Effective Flint deadline to capture a manual-capture hold: the earlier of the provider capture deadline and any order resource guarantee. Order guarantees last at most 24 hours from the payment attempt start and may end earlier. Capture is refused at or after this time, even while status is requires_capture. Omitted until a hold is placed. 

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.authorized_at

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.authorized_at variant 1

anyOf variant 1: When the processor authorized the payment. Absent until then..

- Value shape: string. When the processor authorized the payment. Absent until then. When the processor authorized the payment. Absent until then. Format: `date-time`. 

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.authorized_at variant 2

anyOf variant 2.

- Value shape: null. When the processor authorized the payment. Absent until then. 

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.cancellation_reason

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.cancellation_reason variant 1

anyOf variant 1: Flint-normalized reason the payment intent was canceled. Present only while status is canceled. A cancellation without a specific reason returns payment_canceled. Absent while last_payment_error.code is payment_blocked and Flint has not identified money to return. Unknown processor values are returned as payment_canceled..

- Value shape: string. Flint-normalized reason the payment intent was canceled. Present only while status is canceled. A cancellation without a specific reason returns payment_canceled. Absent while last_payment_error.code is payment_blocked and Flint has not identified money to return. Unknown processor values are returned as payment_canceled. Values: `"requested_by_customer"`, `"duplicate"`, `"fraudulent"`, `"abandoned"`, `"invoice_payment_failed"`, `"invoice_voided"`, `"order_closed"`, `"payment_canceled"`, `"payment_returned"`.

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.cancellation_reason variant 2

anyOf variant 2.

- Value shape: null. Flint-normalized reason the payment intent was canceled. Present only while status is canceled. A cancellation without a specific reason returns payment_canceled. Absent while last_payment_error.code is payment_blocked and Flint has not identified money to return. Unknown processor values are returned as payment_canceled. 

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.capture_method

Declared alternatives: [ExpandedPaymentIntentSummaryPreviousAttributes.capture_method](../models/ExpandedPaymentIntentSummaryPreviousAttributes.md#expandedpaymentintentsummarypreviousattributescapture_method).

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.captured_at

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.captured_at variant 1

anyOf variant 1: When money was captured. For automatic capture, this is when the payment succeeded. Absent until capture..

- Value shape: string. When money was captured. For automatic capture, this is when the payment succeeded. Absent until capture. When money was captured. For automatic capture, this is when the payment succeeded. Absent until capture. Format: `date-time`. 

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.captured_at variant 2

anyOf variant 2.

- Value shape: null. When money was captured. For automatic capture, this is when the payment succeeded. Absent until capture. 

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.checkout_session_id

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.checkout_session_id variant 1

anyOf variant 1: Flint checkout session ID associated with this payment, when present..

- Value shape: string. Flint checkout session ID associated with this payment, when present. 

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.checkout_session_id variant 2

anyOf variant 2.

- Value shape: null. Flint checkout session ID associated with this payment, when present. 

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.customer

The linked customer. Returned only with expand=customer. Present only when `expand` includes `customer`; `null` when expanded and there is no related customer.

Field definitions: [shared fields](BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributescustomer).

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.customer variant 1

anyOf ExpandedCustomerSummaryPreviousAttributes.

- Optional: `created_at`, `customer_id`, `email`, `name`, `phone`, `status`, `updated_at`.

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.customer variant 2

anyOf variant 2.

- Undeclared: `created_at`, `customer_id`, `email`, `name`, `phone`, `status`, `updated_at`.
- Value shape: null. The linked customer. Returned only with expand=customer. Present only when `expand` includes `customer`; `null` when expanded and there is no related customer. 

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.customer variant 1.created_at

Declared alternatives: [PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.created_at](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at).

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.customer variant 1.customer_id

Declared alternatives: [BuyerRefundPreviousAttributes.customer variant 1.customer_id](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributescustomer-variant-1customer_id).

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.customer variant 1.email

Declared alternatives: [ExpandedCustomerSummaryPreviousAttributes.email](../models/ExpandedCustomerSummaryPreviousAttributes.md#expandedcustomersummarypreviousattributesemail).

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.customer variant 1.name

Declared alternatives: [ExpandedCustomerSummaryPreviousAttributes.name](../models/ExpandedCustomerSummaryPreviousAttributes.md#expandedcustomersummarypreviousattributesname).

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.customer variant 1.phone

Declared alternatives: [ExpandedCustomerSummaryPreviousAttributes.phone](../models/ExpandedCustomerSummaryPreviousAttributes.md#expandedcustomersummarypreviousattributesphone).

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.customer variant 1.status

Declared alternatives: [ExpandedCustomerSummaryPreviousAttributes.status](../models/ExpandedCustomerSummaryPreviousAttributes.md#expandedcustomersummarypreviousattributesstatus).

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.customer variant 1.updated_at

Declared alternatives: [PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.created_at](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at).

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.customer_id

Declared alternatives: [ExpandedPaymentIntentSummaryPreviousAttributes.customer_id](../models/ExpandedPaymentIntentSummaryPreviousAttributes.md#expandedpaymentintentsummarypreviousattributescustomer_id).

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.customer_presence

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.customer_presence variant 1

anyOf variant 1: Whether the customer was present for the most recent confirmation. absent means Flint charged a saved card without them, as a merchant-initiated payment on its stored credential. Subscription renewals and automatic invoice charges are absent, and other payments are absent only when confirmed or paid with customer_presence absent. A customer who pays any of them with a card they enter makes it present. Each confirmation sets it again..

- Value shape: string. Whether the customer was present for the most recent confirmation. absent means Flint charged a saved card without them, as a merchant-initiated payment on its stored credential. Subscription renewals and automatic invoice charges are absent, and other payments are absent only when confirmed or paid with customer_presence absent. A customer who pays any of them with a card they enter makes it present. Each confirmation sets it again. Values: `"present"`, `"absent"`.

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.customer_presence variant 2

anyOf variant 2.

- Value shape: null. Whether the customer was present for the most recent confirmation. absent means Flint charged a saved card without them, as a merchant-initiated payment on its stored credential. Subscription renewals and automatic invoice charges are absent, and other payments are absent only when confirmed or paid with customer_presence absent. A customer who pays any of them with a card they enter makes it present. Each confirmation sets it again. 

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.dispute_status

Declared alternatives: [ExpandedPaymentIntentSummaryPreviousAttributes.dispute_status](../models/ExpandedPaymentIntentSummaryPreviousAttributes.md#expandedpaymentintentsummarypreviousattributesdispute_status).

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.external_reference_id

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.external_reference_id variant 1

anyOf variant 1: Caller-owned identifier for this resource in an external system. `null` when no external reference ID has been set on the payment intent..

- Value shape: string. Caller-owned identifier for this resource in an external system. `null` when no external reference ID has been set on the payment intent. Caller-owned identifier for this resource in an external system. `null` when no external reference ID has been set on the payment intent. minLength: `1`. maxLength: `255`. 

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.external_reference_id variant 2

anyOf variant 2.

- Value shape: null. Caller-owned identifier for this resource in an external system. `null` when no external reference ID has been set on the payment intent. 

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.failed_attempt_count

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.failed_attempt_count variant 1

anyOf variant 1: All-time failed-attempt count. Present on merchant reads; omitted for buyer credentials..

- Value shape: integer. All-time failed-attempt count. Present on merchant reads; omitted for buyer credentials. All-time failed-attempt count. Present on merchant reads; omitted for buyer credentials. Format: `int64`. 

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.failed_attempt_count variant 2

anyOf variant 2.

- Value shape: null. All-time failed-attempt count. Present on merchant reads; omitted for buyer credentials. 

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.failed_attempts

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.failed_attempts variant 1

anyOf variant 1: Newest 50 failed attempts, newest first, with merchant-only card and buyer evidence frozen at admission. Older attempts can be included in failed_attempt_count..

- Value shape: Array of [FailedPaymentAttemptPreviousAttributes](../models/FailedPaymentAttemptPreviousAttributes.md#failedpaymentattemptpreviousattributes). Newest 50 failed attempts, newest first, with merchant-only card and buyer evidence frozen at admission. Older attempts can be included in failed_attempt_count. 

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.failed_attempts variant 2

anyOf variant 2.

- Value shape: null. Newest 50 failed attempts, newest first, with merchant-only card and buyer evidence frozen at admission. Older attempts can be included in failed_attempt_count. 

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.failed_attempts variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_email` | Optional | string or null | Email used for risk evaluation at admission. `buyer_email`: [declared alternatives](../models/FailedPaymentAttemptPreviousAttributes.md#failedpaymentattemptpreviousattributesbuyer_email). |
| `buyer_ip_address` | Optional | string or null | Canonical buyer IP stored at admission. API-key relays must supply a trusted buyer_ip_address. `buyer_ip_address`: [declared alternatives](../models/FailedPaymentAttemptPreviousAttributes.md#failedpaymentattemptpreviousattributesbuyer_ip_address). |
| `card_brand` | Optional | string or null | Card brand recorded before authorization, when available. `card_brand`: [declared alternatives](../models/FailedPaymentAttemptPreviousAttributes.md#failedpaymentattemptpreviousattributescard_brand). |
| `card_country` | Optional | string or null | Card issuing country, when provided by the processor. Not the buyer IP's country. `card_country`: [declared alternatives](../models/FailedPaymentAttemptPreviousAttributes.md#failedpaymentattemptpreviousattributescard_country). |
| `card_fingerprint` | Optional | string or null | Merchant/environment-scoped fingerprint used by risk card-fingerprint lists. Never a raw provider fingerprint. `card_fingerprint`: [declared alternatives](../models/FailedPaymentAttemptPreviousAttributes.md#failedpaymentattemptpreviousattributescard_fingerprint). |
| `card_last4` | Optional | string or null | Last four card digits recorded before authorization. Not a unique card identity. `card_last4`: [declared alternatives](../models/FailedPaymentAttemptPreviousAttributes.md#failedpaymentattemptpreviousattributescard_last4). |
| `created_at` | Optional | string or null | UTC time the attempt was created. `created_at`: [declared alternatives](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributesfailed_attempts-variant-1-fields-1created_at). |
| `decline_code` | Optional | string or null | Stable decline code recorded for this attempt. `decline_code`: [declared alternatives](../models/FailedPaymentAttemptPreviousAttributes.md#failedpaymentattemptpreviousattributesdecline_code). |
| `payment_attempt_id` | Optional | string or null | Identity of the failed attempt. `payment_attempt_id`: [declared alternatives](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributesfailed_attempts-variant-1-fields-1payment_attempt_id). |

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.failed_attempts variant 1.[] fields 1.buyer_email

Declared alternatives: [FailedPaymentAttemptPreviousAttributes.buyer_email](../models/FailedPaymentAttemptPreviousAttributes.md#failedpaymentattemptpreviousattributesbuyer_email).

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.failed_attempts variant 1.[] fields 1.buyer_ip_address

Declared alternatives: [FailedPaymentAttemptPreviousAttributes.buyer_ip_address](../models/FailedPaymentAttemptPreviousAttributes.md#failedpaymentattemptpreviousattributesbuyer_ip_address).

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.failed_attempts variant 1.[] fields 1.card_brand

Declared alternatives: [FailedPaymentAttemptPreviousAttributes.card_brand](../models/FailedPaymentAttemptPreviousAttributes.md#failedpaymentattemptpreviousattributescard_brand).

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.failed_attempts variant 1.[] fields 1.card_country

Declared alternatives: [FailedPaymentAttemptPreviousAttributes.card_country](../models/FailedPaymentAttemptPreviousAttributes.md#failedpaymentattemptpreviousattributescard_country).

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.failed_attempts variant 1.[] fields 1.card_fingerprint

Declared alternatives: [FailedPaymentAttemptPreviousAttributes.card_fingerprint](../models/FailedPaymentAttemptPreviousAttributes.md#failedpaymentattemptpreviousattributescard_fingerprint).

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.failed_attempts variant 1.[] fields 1.card_last4

Declared alternatives: [FailedPaymentAttemptPreviousAttributes.card_last4](../models/FailedPaymentAttemptPreviousAttributes.md#failedpaymentattemptpreviousattributescard_last4).

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.failed_attempts variant 1.[] fields 1.created_at

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.failed_attempts variant 1.[] fields 1.created_at variant 1

anyOf variant 1: UTC time the attempt was created..

- Value shape: string. UTC time the attempt was created. UTC time the attempt was created. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.failed_attempts variant 1.[] fields 1.created_at variant 2

anyOf variant 2.

- Value shape: null. UTC time the attempt was created. 

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.failed_attempts variant 1.[] fields 1.decline_code

Declared alternatives: [FailedPaymentAttemptPreviousAttributes.decline_code](../models/FailedPaymentAttemptPreviousAttributes.md#failedpaymentattemptpreviousattributesdecline_code).

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.failed_attempts variant 1.[] fields 1.payment_attempt_id

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.failed_attempts variant 1.[] fields 1.payment_attempt_id variant 1

anyOf variant 1: Identity of the failed attempt..

- Value shape: string. Identity of the failed attempt. Identity of the failed attempt. Example: `"pia_01KEZF7C00CGGHWWR7KPCGNJRM"`. 

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.failed_attempts variant 1.[] fields 1.payment_attempt_id variant 2

anyOf variant 2.

- Value shape: null. Identity of the failed attempt. 

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.fulfillment_hold

Present when a payment provider asked Flint to pause fulfillment for this payment. While its status is active, open fulfillments on the order are on hold with reason payment_review. payment_intent.fulfillment_hold_updated is sent when the hold starts and when it lifts.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `reason` | Conditional | string or null | Why the hold exists, which follows its status. Values: `"external_payment_hold"`, `"external_payment_hold_released"`. `reason`: [declared alternatives](../models/PaymentFulfillmentHoldPreviousAttributes.md#paymentfulfillmentholdpreviousattributesreason). |
| `released_at` | Conditional | string or null | RFC3339 timestamp. `released_at`: [declared alternatives](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at). |
| `requested_at` | Conditional | string or null | RFC3339 timestamp. `requested_at`: [declared alternatives](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at). |
| `required_action` | Conditional | string or null | What to do with fulfillment for this payment now. It follows the hold's status. Values: `"pause_fulfillment"`, `"reevaluate_fulfillment"`. `required_action`: [declared alternatives](../models/PaymentFulfillmentHoldPreviousAttributes.md#paymentfulfillmentholdpreviousattributesrequired_action). |
| `status` | Conditional | string or null | Whether the hold is in force. Values: `"active"`, `"released"`. `status`: [declared alternatives](../models/PaymentFulfillmentHoldPreviousAttributes.md#paymentfulfillmentholdpreviousattributesstatus). |
| `updated_at` | Conditional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at). |

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.fulfillment_hold variant 1

anyOf PaymentFulfillmentHoldPreviousAttributes.

- Optional: `reason`, `released_at`, `requested_at`, `required_action`, `status`, `updated_at`.

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.fulfillment_hold variant 2

anyOf variant 2.

- Undeclared: `reason`, `released_at`, `requested_at`, `required_action`, `status`, `updated_at`.
- Value shape: null. Present when a payment provider asked Flint to pause fulfillment for this payment. While its status is active, open fulfillments on the order are on hold with reason payment_review. payment_intent.fulfillment_hold_updated is sent when the hold starts and when it lifts. 

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.fulfillment_hold variant 1.reason

Declared alternatives: [PaymentFulfillmentHoldPreviousAttributes.reason](../models/PaymentFulfillmentHoldPreviousAttributes.md#paymentfulfillmentholdpreviousattributesreason).

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.fulfillment_hold variant 1.released_at

Declared alternatives: [PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.created_at](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at).

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.fulfillment_hold variant 1.requested_at

Declared alternatives: [PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.created_at](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at).

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.fulfillment_hold variant 1.required_action

Declared alternatives: [PaymentFulfillmentHoldPreviousAttributes.required_action](../models/PaymentFulfillmentHoldPreviousAttributes.md#paymentfulfillmentholdpreviousattributesrequired_action).

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.fulfillment_hold variant 1.status

Declared alternatives: [PaymentFulfillmentHoldPreviousAttributes.status](../models/PaymentFulfillmentHoldPreviousAttributes.md#paymentfulfillmentholdpreviousattributesstatus).

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.fulfillment_hold variant 1.updated_at

Declared alternatives: [PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.created_at](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at).

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.idempotency_key

Declared alternatives: [WebhookSnapshotOrderPaymentAttemptPreviousAttributes.idempotency_key](../models/WebhookSnapshotOrderPaymentAttemptPreviousAttributes.md#webhooksnapshotorderpaymentattemptpreviousattributesidempotency_key).

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.invoice

The linked invoice. Returned only with expand=invoice. Present only when `expand` includes `invoice`; `null` when expanded and there is no related invoice.

Field definitions: [shared fields](CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesinvoice).

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.invoice variant 1

anyOf ExpandedInvoiceSummaryPreviousAttributes.

- Optional: `collection_block_status`, `created_at`, `customer_id`, `due_date`, `invoice_id`, `invoice_number`, `is_overdue`, `order_id`, `pricing_amounts`, `refund_status`, `settlement_amounts`, `status`, `supported_actions`, `updated_at`.

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.invoice variant 2

anyOf variant 2.

- Undeclared: `collection_block_status`, `created_at`, `customer_id`, `due_date`, `invoice_id`, `invoice_number`, `is_overdue`, `order_id`, `pricing_amounts`, `refund_status`, `settlement_amounts`, `status`, `supported_actions`, `updated_at`.
- Value shape: null. The linked invoice. Returned only with expand=invoice. Present only when `expand` includes `invoice`; `null` when expanded and there is no related invoice. 

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.invoice variant 1.collection_block_status

Declared alternatives: [ExpandedInvoiceSummaryPreviousAttributes.collection_block_status](../models/ExpandedInvoiceSummaryPreviousAttributes.md#expandedinvoicesummarypreviousattributescollection_block_status).

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.invoice variant 1.created_at

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.invoice variant 1.created_at](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesinvoice-variant-1created_at).

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.invoice variant 1.customer_id

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.invoice variant 1.customer_id](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesinvoice-variant-1customer_id).

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.invoice variant 1.due_date

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.invoice variant 1.due_date](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesinvoice-variant-1due_date).

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.invoice variant 1.invoice_id

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.invoice variant 1.invoice_id](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesinvoice-variant-1invoice_id).

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.invoice variant 1.invoice_number

Declared alternatives: [ExpandedInvoiceSummaryPreviousAttributes.invoice_number](../models/ExpandedInvoiceSummaryPreviousAttributes.md#expandedinvoicesummarypreviousattributesinvoice_number).

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.invoice variant 1.is_overdue

Declared alternatives: [ExpandedInvoiceSummaryPreviousAttributes.is_overdue](../models/ExpandedInvoiceSummaryPreviousAttributes.md#expandedinvoicesummarypreviousattributesis_overdue).

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.invoice variant 1.order_id

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.invoice variant 1.order_id](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesinvoice-variant-1order_id).

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.invoice variant 1.refund_status

Declared alternatives: [ExpandedInvoiceSummaryPreviousAttributes.refund_status](../models/ExpandedInvoiceSummaryPreviousAttributes.md#expandedinvoicesummarypreviousattributesrefund_status).

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.invoice variant 1.status

Declared alternatives: [ExpandedInvoiceSummaryPreviousAttributes.status](../models/ExpandedInvoiceSummaryPreviousAttributes.md#expandedinvoicesummarypreviousattributesstatus).

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.invoice variant 1.supported_actions

Declared alternatives: [ExpandedInvoiceSummaryPreviousAttributes.supported_actions](../models/ExpandedInvoiceSummaryPreviousAttributes.md#expandedinvoicesummarypreviousattributessupported_actions).

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.invoice variant 1.updated_at

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.invoice variant 1.updated_at](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesinvoice-variant-1updated_at).

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.invoice_id

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.invoice_id variant 1

anyOf variant 1: Invoice this payment intent collects, when it pays an invoice..

- Value shape: string. Invoice this payment intent collects, when it pays an invoice. 

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.invoice_id variant 2

anyOf variant 2.

- Value shape: null. Invoice this payment intent collects, when it pays an invoice. 

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.invoice_schedule_entry_id

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.invoice_schedule_entry_id variant 1

anyOf variant 1: The invoice installment this payment collects..

- Value shape: string. The invoice installment this payment collects. 

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.invoice_schedule_entry_id variant 2

anyOf variant 2.

- Value shape: null. The invoice installment this payment collects. 

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.last_payment_error

Most recent payment error. Null when no payment error is recorded.

Field definitions: [shared fields](PaymentAttemptPaymentIntentPreviousAttributes.md#paymentattemptpaymentintentpreviousattributeslast_payment_error).

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.last_payment_error variant 1

anyOf PaymentErrorSummaryPreviousAttributes.

- Optional: `code`, `failed_at`, `message`, `remediation`.

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.last_payment_error variant 2

anyOf variant 2.

- Undeclared: `code`, `failed_at`, `message`, `remediation`.
- Value shape: null. Most recent payment error. Null when no payment error is recorded. 

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.last_payment_error variant 1.code

Declared alternatives: [PaymentErrorSummaryPreviousAttributes.code](../models/PaymentErrorSummaryPreviousAttributes.md#paymenterrorsummarypreviousattributescode).

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.last_payment_error variant 1.failed_at

Declared alternatives: [PaymentAttemptPaymentIntentPreviousAttributes.last_payment_error variant 1.failed_at](../models/PaymentAttemptPaymentIntentPreviousAttributes.md#paymentattemptpaymentintentpreviousattributeslast_payment_error-variant-1failed_at).

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.last_payment_error variant 1.message

Declared alternatives: [PaymentErrorSummaryPreviousAttributes.message](../models/PaymentErrorSummaryPreviousAttributes.md#paymenterrorsummarypreviousattributesmessage).

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.latest_order_payment_attempt_id

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.latest_order_payment_attempt_id variant 1

anyOf variant 1: The order payment attempt that most recently used this payment intent. Start times count to the second; of attempts that started in the same second, the one with the highest order_payment_attempt_id is named. `null` when no attempt has used it yet; omitted for payment intents without an order. It changes only when an attempt starts using this payment intent, which advances version. Returned with merchant credentials; omitted with buyer and checkout credentials..

- Value shape: string. The order payment attempt that most recently used this payment intent. Start times count to the second; of attempts that started in the same second, the one with the highest order_payment_attempt_id is named. `null` when no attempt has used it yet; omitted for payment intents without an order. It changes only when an attempt starts using this payment intent, which advances version. Returned with merchant credentials; omitted with buyer and checkout credentials. 

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.latest_order_payment_attempt_id variant 2

anyOf variant 2.

- Value shape: null. The order payment attempt that most recently used this payment intent. Start times count to the second; of attempts that started in the same second, the one with the highest order_payment_attempt_id is named. `null` when no attempt has used it yet; omitted for payment intents without an order. It changes only when an attempt starts using this payment intent, which advances version. Returned with merchant credentials; omitted with buyer and checkout credentials. 

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.merchant_id

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.merchant_id variant 1

anyOf variant 1: Merchant that owns this payment intent..

- Value shape: string. Merchant that owns this payment intent. 

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.merchant_id variant 2

anyOf variant 2.

- Value shape: null. Merchant that owns this payment intent. 

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.metadata

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.metadata variant 1

anyOf MetadataMapPreviousAttributes.

- Value shape: Map of string. Caller-owned metadata. Keys starting with flint_ are reserved for Flint and aren't returned. Always present with merchant credentials. Map values: maxLength: `4096`. 

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.metadata variant 2

anyOf variant 2.

- Value shape: null. Caller-owned metadata. Keys starting with flint_ are reserved for Flint and aren't returned. Always present with merchant credentials. 

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.order

The linked order. Returned only with expand=order. Present only when `expand` includes `order`; `null` when expanded and there is no related order.

Field definitions: [shared fields](BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder).

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.order variant 1

anyOf ExpandedOrderSummaryPreviousAttributes.

- Optional: `buyer_contact`, `closed_at`, `closed_reason`, `created_at`, `customer_id`, `deferred_promotions`, `fulfillment_status`, `governing_delivery_selection_id`, `order_id`, `order_number`, `paid_at`, `payment_intent_ids`, `payment_status`, `pricing_amounts`, `refund_status`, `settlement_amounts`, `status`, `supported_actions`, `updated_at`.

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.order variant 2

anyOf variant 2.

- Undeclared: `buyer_contact`, `closed_at`, `closed_reason`, `created_at`, `customer_id`, `deferred_promotions`, `fulfillment_status`, `governing_delivery_selection_id`, `order_id`, `order_number`, `paid_at`, `payment_intent_ids`, `payment_status`, `pricing_amounts`, `refund_status`, `settlement_amounts`, `status`, `supported_actions`, `updated_at`.
- Value shape: null. The linked order. Returned only with expand=order. Present only when `expand` includes `order`; `null` when expanded and there is no related order. 

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.order variant 1.buyer_contact

Declared alternatives: [ExpandedOrderSummaryPreviousAttributes.buyer_contact](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributesbuyer_contact).

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.order variant 1.closed_at

Declared alternatives: [BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.closed_at](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder-variant-1closed_at).

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.order variant 1.closed_reason

Declared alternatives: [ExpandedOrderSummaryPreviousAttributes.closed_reason](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributesclosed_reason).

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.order variant 1.created_at

Declared alternatives: [BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.created_at](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder-variant-1created_at).

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.order variant 1.customer_id

Declared alternatives: [BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.customer_id](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder-variant-1customer_id).

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.order variant 1.deferred_promotions

Declared alternatives: [ExpandedOrderSummaryPreviousAttributes.deferred_promotions](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributesdeferred_promotions).

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.order variant 1.fulfillment_status

Declared alternatives: [ExpandedOrderSummaryPreviousAttributes.fulfillment_status](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributesfulfillment_status).

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.order variant 1.governing_delivery_selection_id

Declared alternatives: [BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.governing_delivery_selection_id](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder-variant-1governing_delivery_selection_id).

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.order variant 1.order_id

Declared alternatives: [BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.order_id](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder-variant-1order_id).

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.order variant 1.order_number

Declared alternatives: [ExpandedOrderSummaryPreviousAttributes.order_number](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributesorder_number).

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.order variant 1.paid_at

Declared alternatives: [BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.paid_at](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder-variant-1paid_at).

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.order variant 1.payment_intent_ids

Declared alternatives: [BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.payment_intent_ids](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder-variant-1payment_intent_ids).

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.order variant 1.payment_status

Declared alternatives: [ExpandedOrderSummaryPreviousAttributes.payment_status](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributespayment_status).

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.order variant 1.refund_status

Declared alternatives: [ExpandedOrderSummaryPreviousAttributes.refund_status](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributesrefund_status).

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.order variant 1.status

Declared alternatives: [ExpandedOrderSummaryPreviousAttributes.status](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributesstatus).

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.order variant 1.supported_actions

Declared alternatives: [ExpandedOrderSummaryPreviousAttributes.supported_actions](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributessupported_actions).

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.order variant 1.updated_at

Declared alternatives: [BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.updated_at](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder-variant-1updated_at).

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.order_edit_id

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.order_edit_id variant 1

anyOf variant 1: The order edit whose balance this payment collects. Omitted when this payment doesn't collect an edit's balance..

- Value shape: string. The order edit whose balance this payment collects. Omitted when this payment doesn't collect an edit's balance. 

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.order_edit_id variant 2

anyOf variant 2.

- Value shape: null. The order edit whose balance this payment collects. Omitted when this payment doesn't collect an edit's balance. 

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.order_id

Declared alternatives: [ExpandedPaymentIntentSummaryPreviousAttributes.order_id](../models/ExpandedPaymentIntentSummaryPreviousAttributes.md#expandedpaymentintentsummarypreviousattributesorder_id).

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.payment_flow

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.payment_flow variant 1

anyOf variant 1: How the payment was started. Fixed when the payment intent is created..

- Value shape: string. How the payment was started. Fixed when the payment intent is created. Values: `"checkout"`, `"payment_link"`, `"invoice"`, `"subscription_initial"`, `"subscription_renewal"`, `"virtual_terminal"`, `"api"`.

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.payment_flow variant 2

anyOf variant 2.

- Value shape: null. How the payment was started. Fixed when the payment intent is created. 

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.payment_intent_id

Declared alternatives: [PaymentAttemptPaymentIntentPreviousAttributes.payment_intent_id](../models/PaymentAttemptPaymentIntentPreviousAttributes.md#paymentattemptpaymentintentpreviousattributespayment_intent_id).

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.payment_options

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.payment_options variant 1

anyOf variant 1: Payment options the buyer can use for this payment..

- Value shape: Array of string. Payment options the buyer can use for this payment. Items values: `"card"`, `"apple_pay"`, `"google_pay"`, `"affirm"`, `"ach_debit"`, `"card_present"`.

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.payment_options variant 2

anyOf variant 2.

- Value shape: null. Payment options the buyer can use for this payment. 

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.platform_fee

The platform fee a partner app charges on this payment, when it created the payment with an install token and a fee. Absent when the payment carries none. Returned only to merchant credentials; omitted for buyer and checkout credentials.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Conditional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The fee Flint will charge until the payment succeeds, then the fee charged. Flint lowers it at confirm and capture when the merchant's approved cap or Flint's own fees leave less, and it is 0 when Flint canceled the fee before collection. |
| `partner_app_id` | Conditional | string or null | The partner app that charges the fee. `partner_app_id`: [declared alternatives](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributesplatform_fee-variant-1partner_app_id). |
| `platform_fee_id` | Conditional | string or null | The platform fee record, which the partner app's owner reads. `platform_fee_id`: [declared alternatives](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributesplatform_fee-variant-1platform_fee_id). |
| `refunded_money` | Conditional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The fee debited from the platform for returns so far, including refunds the partner app created with `refund_platform_fee: true` and returns of the whole application fee. Matches the platform ledger, including returns awaiting completion; reversals reduce the total. 0 when nothing has been debited. See Platform fees. |

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.platform_fee variant 1

anyOf PaymentIntentPlatformFeePreviousAttributes.

- Optional: `amount_money`, `partner_app_id`, `platform_fee_id`, `refunded_money`.

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.platform_fee variant 2

anyOf variant 2.

- Undeclared: `amount_money`, `partner_app_id`, `platform_fee_id`, `refunded_money`.
- Value shape: null. The platform fee a partner app charges on this payment, when it created the payment with an install token and a fee. Absent when the payment carries none. Returned only to merchant credentials; omitted for buyer and checkout credentials. 

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.platform_fee variant 1.partner_app_id

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.platform_fee variant 1.partner_app_id variant 1

anyOf variant 1: The partner app that charges the fee..

- Value shape: string. The partner app that charges the fee. The partner app that charges the fee. Example: `"papp_01KEZF7C00Y8VMXYZ1GNPP3WHV"`. 

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.platform_fee variant 1.partner_app_id variant 2

anyOf variant 2.

- Value shape: null. The partner app that charges the fee. 

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.platform_fee variant 1.platform_fee_id

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.platform_fee variant 1.platform_fee_id variant 1

anyOf variant 1: The platform fee record, which the partner app's owner reads..

- Value shape: string. The platform fee record, which the partner app's owner reads. The platform fee record, which the partner app's owner reads. Example: `"pfee_01KEZF7C00JHAZN19B3MMW0R3A"`. 

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.platform_fee variant 1.platform_fee_id variant 2

anyOf variant 2.

- Value shape: null. The platform fee record, which the partner app's owner reads. 

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.reader_id

Declared alternatives: [PaymentAttemptPaymentIntentPreviousAttributes.reader_id](../models/PaymentAttemptPaymentIntentPreviousAttributes.md#paymentattemptpaymentintentpreviousattributesreader_id).

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.receipt_email

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.receipt_email variant 1

anyOf variant 1: Email address for this payment's receipt. When it isn't set, Flint uses the customer's email. `null` when no receipt email has been set on the payment intent..

- Value shape: string. Email address for this payment's receipt. When it isn't set, Flint uses the customer's email. `null` when no receipt email has been set on the payment intent. Email address for this payment's receipt. When it isn't set, Flint uses the customer's email. `null` when no receipt email has been set on the payment intent. Format: `email`. maxLength: `255`. 

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.receipt_email variant 2

anyOf variant 2.

- Value shape: null. Email address for this payment's receipt. When it isn't set, Flint uses the customer's email. `null` when no receipt email has been set on the payment intent. 

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.refund_expires_at

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.refund_expires_at variant 1

anyOf variant 1: Last time Flint can refund this payment through the original payment method. A refund submitted at exactly this time is accepted; after it, refunds through the original payment method are refused. Today only Affirm has a refund window: 120 days after the payment settles. `null` when the method has no refund window, the payment has not succeeded with captured money, or its capture time is missing. Always present with merchant credentials..

- Value shape: string. Last time Flint can refund this payment through the original payment method. A refund submitted at exactly this time is accepted; after it, refunds through the original payment method are refused. Today only Affirm has a refund window: 120 days after the payment settles. `null` when the method has no refund window, the payment has not succeeded with captured money, or its capture time is missing. Always present with merchant credentials. Last time Flint can refund this payment through the original payment method. A refund submitted at exactly this time is accepted; after it, refunds through the original payment method are refused. Today only Affirm has a refund window: 120 days after the payment settles. `null` when the method has no refund window, the payment has not succeeded with captured money, or its capture time is missing. Always present with merchant credentials. Format: `date-time`. 

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.refund_expires_at variant 2

anyOf variant 2.

- Value shape: null. Last time Flint can refund this payment through the original payment method. A refund submitted at exactly this time is accepted; after it, refunds through the original payment method are refused. Today only Affirm has a refund window: 120 days after the payment settles. `null` when the method has no refund window, the payment has not succeeded with captured money, or its capture time is missing. Always present with merchant credentials. 

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.refund_status

Declared alternatives: [ExpandedPaymentIntentSummaryPreviousAttributes.refund_status](../models/ExpandedPaymentIntentSummaryPreviousAttributes.md#expandedpaymentintentsummarypreviousattributesrefund_status).

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.request_overcapture

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.request_overcapture variant 1

anyOf variant 1: Whether one capture may collect more than the authorization where the card network allows it. Fixed at create. Always present with merchant credentials; omitted with buyer and checkout credentials..

- Value shape: boolean. Whether one capture may collect more than the authorization where the card network allows it. Fixed at create. Always present with merchant credentials; omitted with buyer and checkout credentials. 

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.request_overcapture variant 2

anyOf variant 2.

- Value shape: null. Whether one capture may collect more than the authorization where the card network allows it. Fixed at create. Always present with merchant credentials; omitted with buyer and checkout credentials. 

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.return_id

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.return_id variant 1

anyOf variant 1: Flint return ID associated with this payment, when present..

- Value shape: string. Flint return ID associated with this payment, when present. 

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.return_id variant 2

anyOf variant 2.

- Value shape: null. Flint return ID associated with this payment, when present. 

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.return_resolution_id

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.return_resolution_id variant 1

anyOf variant 1: The return resolution whose balance this payment collects. Set for exchange balances and corrections..

- Value shape: string. The return resolution whose balance this payment collects. Set for exchange balances and corrections. 

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.return_resolution_id variant 2

anyOf variant 2.

- Value shape: null. The return resolution whose balance this payment collects. Set for exchange balances and corrections. 

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.risk

Risk assessment. Always present with merchant credentials. `null` when the payment intent's latest payment attempt has no completed risk assessment, such as before its first confirmation. Omitted with the checkout credential.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `evaluated_at` | Conditional | string or null | RFC3339 timestamp. `evaluated_at`: [declared alternatives](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at). |
| `level` | Conditional | string or null | Fraud risk level from the card processor's screening of the payment intent's latest payment attempt. Values: `"normal"`, `"elevated"`, `"highest"`, `"not_assessed"`. `level`: [declared alternatives](../models/PaymentRiskPreviousAttributes.md#paymentriskpreviousattributeslevel). |
| `matched_risk_rule_id` | Conditional | string or null | The risk rule that decided the outcome. Absent when no risk rule did. `matched_risk_rule_id`: [declared alternatives](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributesrisk-variant-1matched_risk_rule_id). |
| `outcome` | Conditional | string or null | What the risk evaluation decided about the payment intent's latest payment attempt. `null` when the evaluation has no outcome to report, such as when the attempt was canceled. Values: `"authorized"`, `"manual_review"`, `"blocked"`, `"issuer_declined"`, `"invalid"`, `null`. `outcome`: [declared alternatives](../models/PaymentRiskPreviousAttributes.md#paymentriskpreviousattributesoutcome). |
| `outcome_reason` | Conditional | string or null | Why the evaluation reached its outcome. `null` when the evaluation has no reason to report, such as an authorized payment that raised no flags. Values: `"highest_risk"`, `"elevated_risk"`, `"low_authorization_probability"`, `"risk_rule"`, `"risk_policy"`, `null`. `outcome_reason`: [declared alternatives](../models/PaymentRiskPreviousAttributes.md#paymentriskpreviousattributesoutcome_reason). |
| `payment_review_id` | Conditional | string or null | The payment review opened for the attempt. Present only when the outcome is manual_review. `payment_review_id`: [declared alternatives](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributesrisk-variant-1payment_review_id). |
| `score` | Conditional | integer or null | Fraud score from the card processor's screening, from 0 to 99. Higher means riskier. Absent when no score is available, which isn't a score of 0. `score`: [declared alternatives](../models/PaymentRiskPreviousAttributes.md#paymentriskpreviousattributesscore). |
| `statement` | Conditional | string or null | A plain-language summary of the evaluation. `statement`: [declared alternatives](../models/PaymentRiskPreviousAttributes.md#paymentriskpreviousattributesstatement). |

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.risk variant 1

anyOf PaymentRiskPreviousAttributes.

- Optional: `evaluated_at`, `level`, `matched_risk_rule_id`, `outcome`, `outcome_reason`, `payment_review_id`, `score`, `statement`.

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.risk variant 2

anyOf variant 2.

- Undeclared: `evaluated_at`, `level`, `matched_risk_rule_id`, `outcome`, `outcome_reason`, `payment_review_id`, `score`, `statement`.
- Value shape: null. Risk assessment. Always present with merchant credentials. `null` when the payment intent's latest payment attempt has no completed risk assessment, such as before its first confirmation. Omitted with the checkout credential. 

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.risk variant 1.evaluated_at

Declared alternatives: [PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.created_at](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at).

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.risk variant 1.level

Declared alternatives: [PaymentRiskPreviousAttributes.level](../models/PaymentRiskPreviousAttributes.md#paymentriskpreviousattributeslevel).

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.risk variant 1.matched_risk_rule_id

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.risk variant 1.matched_risk_rule_id variant 1

anyOf variant 1: The risk rule that decided the outcome. Absent when no risk rule did..

- Value shape: string. The risk rule that decided the outcome. Absent when no risk rule did. The risk rule that decided the outcome. Absent when no risk rule did. Example: `"rule_01KEZF7C00FWGAQJXXA8CRA319"`. 

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.risk variant 1.matched_risk_rule_id variant 2

anyOf variant 2.

- Value shape: null. The risk rule that decided the outcome. Absent when no risk rule did. 

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.risk variant 1.outcome

Declared alternatives: [PaymentRiskPreviousAttributes.outcome](../models/PaymentRiskPreviousAttributes.md#paymentriskpreviousattributesoutcome).

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.risk variant 1.outcome_reason

Declared alternatives: [PaymentRiskPreviousAttributes.outcome_reason](../models/PaymentRiskPreviousAttributes.md#paymentriskpreviousattributesoutcome_reason).

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.risk variant 1.payment_review_id

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.risk variant 1.payment_review_id variant 1

anyOf variant 1: The payment review opened for the attempt. Present only when the outcome is manual_review..

- Value shape: string. The payment review opened for the attempt. Present only when the outcome is manual_review. The payment review opened for the attempt. Present only when the outcome is manual_review. Example: `"rev_01KEZF7C00BVBQ00XDFNKB1EF6"`. 

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.risk variant 1.payment_review_id variant 2

anyOf variant 2.

- Value shape: null. The payment review opened for the attempt. Present only when the outcome is manual_review. 

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.risk variant 1.score

Declared alternatives: [PaymentRiskPreviousAttributes.score](../models/PaymentRiskPreviousAttributes.md#paymentriskpreviousattributesscore).

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.risk variant 1.statement

Declared alternatives: [PaymentRiskPreviousAttributes.statement](../models/PaymentRiskPreviousAttributes.md#paymentriskpreviousattributesstatement).

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.selected_payment_option

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.selected_payment_option variant 1

anyOf variant 1: The payment option the most recent confirmation used. Absent until the payment intent is first confirmed..

- Value shape: string. The payment option the most recent confirmation used. Absent until the payment intent is first confirmed. Values: `"card"`, `"apple_pay"`, `"google_pay"`, `"affirm"`, `"ach_debit"`, `"card_present"`.

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.selected_payment_option variant 2

anyOf variant 2.

- Value shape: null. The payment option the most recent confirmation used. Absent until the payment intent is first confirmed. 

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.splits

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.splits variant 1

anyOf variant 1: Top-level PaymentSplit children in their current state, embedded whole. Empty when the payment has no splits. Child changes do not send payment_intent.updated. Omitted for buyer and checkout credentials..

- Value shape: Array of [PaymentSplitPreviousAttributes](../models/PaymentSplitPreviousAttributes.md#paymentsplitpreviousattributes). Top-level PaymentSplit children in their current state, embedded whole. Empty when the payment has no splits. Child changes do not send payment_intent.updated. Omitted for buyer and checkout credentials. 

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.splits variant 2

anyOf variant 2.

- Value shape: null. Top-level PaymentSplit children in their current state, embedded whole. Empty when the payment has no splits. Child changes do not send payment_intent.updated. Omitted for buyer and checkout credentials. 

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.splits variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The admitted amount, or its final amount set at capture. |
| `canceled_reason` | Optional | string or null | Present when status is canceled. Can gain values. Values: `"payment_not_completed"`, `"install_revoked"`, `"fully_reversed"`. `canceled_reason`: [declared alternatives](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdata-fields-1previous_attributescanceled_reason). |
| `collecting_merchant_id` | Optional | string or null | The merchant of record that collected the payment. `collecting_merchant_id`: [declared alternatives](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributessplits-variant-1-fields-1collecting_merchant_id). |
| `created_at` | Optional | string or null | When the payment's create recorded the split. `created_at`: [declared alternatives](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributessplits-variant-1-fields-1created_at). |
| `description` | Optional | string or null | The collecting merchant's description, shown to the seller. `description`: [declared alternatives](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdata-fields-1previous_attributesdescription). |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Shown to the seller. Exact, case-sensitive matching. `external_reference_id`: [declared alternatives](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributessplits-variant-1-fields-1external_reference_id). |
| `failure_reason` | Optional | string or null | Present when status is failed. Can gain values; unknown reasons use split_failed. Values: `"seller_cannot_receive"`, `"split_failed"`. `failure_reason`: [declared alternatives](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdata-fields-1previous_attributesfailure_reason). |
| `funds_available_at` | Optional | string or null | When the funds become available on Flint's balance. Null when Stripe has not reported it or the payment never succeeded. Can move later after a won dispute; frozen at release. `funds_available_at`: [declared alternatives](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributessplits-variant-1-fields-1funds_available_at). |
| `partner_app_id` | Optional | string or null | The collecting merchant's partner app. `partner_app_id`: [declared alternatives](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributessplits-variant-1-fields-1partner_app_id). |
| `partner_app_install_id` | Optional | string or null | The seller's install of the app. `partner_app_install_id`: [declared alternatives](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributessplits-variant-1-fields-1partner_app_install_id). |
| `payment_intent_id` | Optional | string or null | The collecting merchant's payment. Sellers can read the split, but not the payment. `payment_intent_id`: [declared alternatives](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributessplits-variant-1-fields-1payment_intent_id). |
| `payment_split_id` | Optional | string or null | Unique identifier for the split. `payment_split_id`: [declared alternatives](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributessplits-variant-1-fields-1payment_split_id). |
| `pending_reason` | Optional | string or null | Present when status is pending. Can gain values. Values: `"awaiting_payment"`, `"dispute_open"`, `"reversals_pending"`, `"awaiting_funds"`. `pending_reason`: [declared alternatives](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdata-fields-1previous_attributespending_reason). |
| `reversals` | Optional | Array of [PaymentSplitReversalPreviousAttributes](../models/PaymentSplitReversalPreviousAttributes.md#paymentsplitreversalpreviousattributes) or null | Read-only nested children created by Flint, embedded whole. Empty when none. At most one per refund and one per dispute. `reversals`: [declared alternatives](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdata-fields-1previous_attributesreversals). |
| `reversed_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Reversals' total amount minus their reinstated amounts. |
| `seller_merchant_id` | Optional | string or null | The merchant receiving the split. `seller_merchant_id`: [declared alternatives](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributessplits-variant-1-fields-1seller_merchant_id). |
| `shortfall_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Reversed funds the collecting merchant covered for the seller, less reinstatements. The seller's net is amount_money minus reversed_money plus shortfall_money. |
| `status` | Optional | string or null | The split lifecycle status. Values: `"pending"`, `"processing"`, `"succeeded"`, `"failed"`, `"canceled"`. `status`: [declared alternatives](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdata-fields-1previous_attributesstatus). |
| `succeeded_at` | Optional | string or null | When the split reached the seller's balance. Present when succeeded. `succeeded_at`: [declared alternatives](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributessplits-variant-1-fields-1succeeded_at). |
| `updated_at` | Optional | string or null | When the split last changed. `updated_at`: [declared alternatives](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributessplits-variant-1-fields-1updated_at). |
| `version` | Optional | integer or null | Persisted version of this resource's owned state. Expanded resources and external observations can change independently. `version`: [declared alternatives](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdata-fields-1previous_attributesversion). |

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.splits variant 1.[] fields 1.canceled_reason

Declared alternatives: [PaymentSplitCanceledEvent.data fields 1.previous_attributes.canceled_reason](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdata-fields-1previous_attributescanceled_reason).

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.splits variant 1.[] fields 1.collecting_merchant_id

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.splits variant 1.[] fields 1.collecting_merchant_id variant 1

anyOf variant 1: The merchant of record that collected the payment..

- Value shape: string. The merchant of record that collected the payment. The merchant of record that collected the payment. Example: `"mer_01KEZF7C00KPYH1DDFPCCX3B6E"`. 

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.splits variant 1.[] fields 1.collecting_merchant_id variant 2

anyOf variant 2.

- Value shape: null. The merchant of record that collected the payment. 

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.splits variant 1.[] fields 1.created_at

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.splits variant 1.[] fields 1.created_at variant 1

anyOf variant 1: When the payment's create recorded the split..

- Value shape: string. When the payment's create recorded the split. When the payment's create recorded the split. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.splits variant 1.[] fields 1.created_at variant 2

anyOf variant 2.

- Value shape: null. When the payment's create recorded the split. 

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.splits variant 1.[] fields 1.description

Declared alternatives: [PaymentSplitCanceledEvent.data fields 1.previous_attributes.description](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdata-fields-1previous_attributesdescription).

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.splits variant 1.[] fields 1.external_reference_id

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.splits variant 1.[] fields 1.external_reference_id variant 1

anyOf variant 1: Caller-owned identifier for this resource in an external system. Shown to the seller. Exact, case-sensitive matching..

- Value shape: string. Caller-owned identifier for this resource in an external system. Shown to the seller. Exact, case-sensitive matching. Caller-owned identifier for this resource in an external system. Shown to the seller. Exact, case-sensitive matching. maxLength: `255`. Example: `"warehouse-1842"`. 

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.splits variant 1.[] fields 1.external_reference_id variant 2

anyOf variant 2.

- Value shape: null. Caller-owned identifier for this resource in an external system. Shown to the seller. Exact, case-sensitive matching. 

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.splits variant 1.[] fields 1.failure_reason

Declared alternatives: [PaymentSplitCanceledEvent.data fields 1.previous_attributes.failure_reason](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdata-fields-1previous_attributesfailure_reason).

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.splits variant 1.[] fields 1.funds_available_at

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.splits variant 1.[] fields 1.funds_available_at variant 1

anyOf variant 1: When the funds become available on Flint's balance. Null when Stripe has not reported it or the payment never succeeded. Can move later after a won dispute; frozen at release..

- Value shape: string. When the funds become available on Flint's balance. Null when Stripe has not reported it or the payment never succeeded. Can move later after a won dispute; frozen at release. When the funds become available on Flint's balance. Null when Stripe has not reported it or the payment never succeeded. Can move later after a won dispute; frozen at release. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.splits variant 1.[] fields 1.funds_available_at variant 2

anyOf variant 2.

- Value shape: null. When the funds become available on Flint's balance. Null when Stripe has not reported it or the payment never succeeded. Can move later after a won dispute; frozen at release. 

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.splits variant 1.[] fields 1.partner_app_id

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.splits variant 1.[] fields 1.partner_app_id variant 1

anyOf variant 1: The collecting merchant's partner app..

- Value shape: string. The collecting merchant's partner app. The collecting merchant's partner app. Example: `"papp_01KEZF7C00Y8VMXYZ1GNPP3WHV"`. 

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.splits variant 1.[] fields 1.partner_app_id variant 2

anyOf variant 2.

- Value shape: null. The collecting merchant's partner app. 

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.splits variant 1.[] fields 1.partner_app_install_id

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.splits variant 1.[] fields 1.partner_app_install_id variant 1

anyOf variant 1: The seller's install of the app..

- Value shape: string. The seller's install of the app. The seller's install of the app. Example: `"pinst_01KEZF7C003HVKZR3GZAW6AFAZ"`. 

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.splits variant 1.[] fields 1.partner_app_install_id variant 2

anyOf variant 2.

- Value shape: null. The seller's install of the app. 

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.splits variant 1.[] fields 1.payment_intent_id

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.splits variant 1.[] fields 1.payment_intent_id variant 1

anyOf variant 1: The collecting merchant's payment. Sellers can read the split, but not the payment..

- Value shape: string. The collecting merchant's payment. Sellers can read the split, but not the payment. The collecting merchant's payment. Sellers can read the split, but not the payment. Example: `"pi_01KEZF7C00G8H9D509YEV22P7R"`. 

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.splits variant 1.[] fields 1.payment_intent_id variant 2

anyOf variant 2.

- Value shape: null. The collecting merchant's payment. Sellers can read the split, but not the payment. 

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.splits variant 1.[] fields 1.payment_split_id

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.splits variant 1.[] fields 1.payment_split_id variant 1

anyOf variant 1: Unique identifier for the split..

- Value shape: string. Unique identifier for the split. Unique identifier for the split. Example: `"psplit_01KEZF7C00Y5HA4Z8D4KRA07K8"`. 

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.splits variant 1.[] fields 1.payment_split_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for the split. 

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.splits variant 1.[] fields 1.pending_reason

Declared alternatives: [PaymentSplitCanceledEvent.data fields 1.previous_attributes.pending_reason](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdata-fields-1previous_attributespending_reason).

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.splits variant 1.[] fields 1.reversals

Declared alternatives: [PaymentSplitCanceledEvent.data fields 1.previous_attributes.reversals](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdata-fields-1previous_attributesreversals).

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.splits variant 1.[] fields 1.seller_merchant_id

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.splits variant 1.[] fields 1.seller_merchant_id variant 1

anyOf variant 1: The merchant receiving the split..

- Value shape: string. The merchant receiving the split. The merchant receiving the split. Example: `"mer_01KEZF7C00KPYH1DDFPCCX3B6E"`. 

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.splits variant 1.[] fields 1.seller_merchant_id variant 2

anyOf variant 2.

- Value shape: null. The merchant receiving the split. 

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.splits variant 1.[] fields 1.status

Declared alternatives: [PaymentSplitCanceledEvent.data fields 1.previous_attributes.status](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdata-fields-1previous_attributesstatus).

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.splits variant 1.[] fields 1.succeeded_at

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.splits variant 1.[] fields 1.succeeded_at variant 1

anyOf variant 1: When the split reached the seller's balance. Present when succeeded..

- Value shape: string. When the split reached the seller's balance. Present when succeeded. When the split reached the seller's balance. Present when succeeded. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.splits variant 1.[] fields 1.succeeded_at variant 2

anyOf variant 2.

- Value shape: null. When the split reached the seller's balance. Present when succeeded. 

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.splits variant 1.[] fields 1.updated_at

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.splits variant 1.[] fields 1.updated_at variant 1

anyOf variant 1: When the split last changed..

- Value shape: string. When the split last changed. When the split last changed. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.splits variant 1.[] fields 1.updated_at variant 2

anyOf variant 2.

- Value shape: null. When the split last changed. 

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.splits variant 1.[] fields 1.version

Declared alternatives: [PaymentSplitCanceledEvent.data fields 1.previous_attributes.version](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdata-fields-1previous_attributesversion).

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.statement_descriptor

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.statement_descriptor variant 1

anyOf variant 1: The text shown on the buyer's card or bank statement for this payment. `null` until the charge is created. `null` when the provider supplies no descriptor. Frozen when the charge is created..

- Value shape: string. The text shown on the buyer's card or bank statement for this payment. `null` until the charge is created. `null` when the provider supplies no descriptor. Frozen when the charge is created. 

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.statement_descriptor variant 2

anyOf variant 2.

- Value shape: null. The text shown on the buyer's card or bank statement for this payment. `null` until the charge is created. `null` when the provider supplies no descriptor. Frozen when the charge is created. 

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.status

Declared alternatives: [PaymentAttemptPaymentIntentPreviousAttributes.status](../models/PaymentAttemptPaymentIntentPreviousAttributes.md#paymentattemptpaymentintentpreviousattributesstatus).

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.subscription_id

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.subscription_id variant 1

anyOf variant 1: The subscription whose billing charged this payment: its first charge, a renewal, a retry or a setup fee. Not set for the checkout payment that created a subscription..

- Value shape: string. The subscription whose billing charged this payment: its first charge, a renewal, a retry or a setup fee. Not set for the checkout payment that created a subscription. 

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.subscription_id variant 2

anyOf variant 2.

- Value shape: null. The subscription whose billing charged this payment: its first charge, a renewal, a retry or a setup fee. Not set for the checkout payment that created a subscription. 

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.support_reference

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.support_reference variant 1

anyOf variant 1: Opaque payment reference to share with merchant support. Do not parse its format..

- Value shape: string. Opaque payment reference to share with merchant support. Do not parse its format. 

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.support_reference variant 2

anyOf variant 2.

- Value shape: null. Opaque payment reference to share with merchant support. Do not parse its format. 

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.supported_actions

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.supported_actions variant 1

anyOf variant 1: Verbs this payment intent accepts now, each a POST to /v1/payment-intents/{payment_intent_id}/{action}. The list includes stored order facts and can change without a payment intent version change. Order legs list confirm when a single leg can pay the order or an open attempt can continue it. Several unpaid legs, selected gift cards, or automatic tax with a leg below the balance require pay_order instead. Invoice payments list only cancel. An unused first-period subscription payment lists cancel once the subscription is canceled. Order edit payments list confirm while awaiting payment details or action. A listed action can still be refused due to an open risk review, an order payment attempt, a closed order, or the merchant account. A managed_by_owner refusal names the owner and its command in remediation.next_actions. The merchant list is credential-independent. Checkout credentials receive that list filtered to confirm and cancel on their own session's intents, never capture. Customer sessions omit this field. New actions may be added..

- Value shape: Array of string. Verbs this payment intent accepts now, each a POST to /v1/payment-intents/{payment_intent_id}/{action}. The list includes stored order facts and can change without a payment intent version change. Order legs list confirm when a single leg can pay the order or an open attempt can continue it. Several unpaid legs, selected gift cards, or automatic tax with a leg below the balance require pay_order instead. Invoice payments list only cancel. An unused first-period subscription payment lists cancel once the subscription is canceled. Order edit payments list confirm while awaiting payment details or action. A listed action can still be refused due to an open risk review, an order payment attempt, a closed order, or the merchant account. A managed_by_owner refusal names the owner and its command in remediation.next_actions. The merchant list is credential-independent. Checkout credentials receive that list filtered to confirm and cancel on their own session's intents, never capture. Customer sessions omit this field. New actions may be added. Items values: `"confirm"`, `"capture"`, `"cancel"`.

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.supported_actions variant 2

anyOf variant 2.

- Value shape: null. Verbs this payment intent accepts now, each a POST to /v1/payment-intents/{payment_intent_id}/{action}. The list includes stored order facts and can change without a payment intent version change. Order legs list confirm when a single leg can pay the order or an open attempt can continue it. Several unpaid legs, selected gift cards, or automatic tax with a leg below the balance require pay_order instead. Invoice payments list only cancel. An unused first-period subscription payment lists cancel once the subscription is canceled. Order edit payments list confirm while awaiting payment details or action. A listed action can still be refused due to an open risk review, an order payment attempt, a closed order, or the merchant account. A managed_by_owner refusal names the owner and its command in remediation.next_actions. The merchant list is credential-independent. Checkout credentials receive that list filtered to confirm and cancel on their own session's intents, never capture. Customer sessions omit this field. New actions may be added. 

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.transaction_purpose

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.transaction_purpose variant 1

anyOf variant 1: Why a bank debit is taken. Set only when payment_options includes ach_debit, and fixed once the payment intent exists..

- Value shape: string. Why a bank debit is taken. Set only when payment_options includes ach_debit, and fixed once the payment intent exists. Values: `"goods"`, `"services"`, `"other"`.

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.transaction_purpose variant 2

anyOf variant 2.

- Value shape: null. Why a bank debit is taken. Set only when payment_options includes ach_debit, and fixed once the payment intent exists. 

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.version

Declared alternatives: [PaymentSplitCanceledEvent.data fields 1.previous_attributes.version](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdata-fields-1previous_attributesversion).

