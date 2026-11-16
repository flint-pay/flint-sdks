[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentIntentCanceledMerchantEventDataPreviousAttributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null | The amount requested from the buyer, including any tip_money. Capturing doesn't change it: after a partial capture it still shows the requested amount, and captured_money shows what was collected. On a standalone payment intent, PATCH can change it only before the first confirmation attempt. An amount_money or tip_money change that leaves too little for stored splits returns LIMIT_EXCEEDED at the changed field with minimum_money. |
| `authorization_expires_at` | Optional | string or null | Effective Flint deadline to capture a manual-capture hold: the earlier of the provider capture deadline and any order resource guarantee. Order guarantees last at most 24 hours from the payment attempt start and may end earlier. Capture is refused at or after this time, even while status is requires_capture. Omitted until a hold is placed. `authorization_expires_at`: [declared alternatives](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributesauthorization_expires_at). |
| `authorized_at` | Optional | string or null | When the processor authorized the payment. Absent until then. `authorized_at`: [declared alternatives](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributesauthorized_at). |
| `authorized_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null | The amount the processor authorized. It always equals amount_money and doesn't change once set, even when a capture collects more. On a payment intent canceled with cancellation_reason payment_returned, it equals the authorization Flint released instead. Absent until the payment is authorized, and on payments canceled before authorization. |
| `cancellation_reason` | Optional | string or null | Flint-normalized reason the payment intent was canceled. Present only while status is canceled. Unknown processor values are returned as payment_canceled. Values: [9 declared values](#paymentintentcanceledmerchanteventdatapreviousattributes-cancellation_reason-values). `cancellation_reason`: [declared alternatives](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributescancellation_reason). |
| `capturable_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null | The part of the authorization you can still capture. Positive only while status is requires_capture, and zero after you capture or cancel or the authorization expires. The authorization lapses at authorization_expires_at, and a capture attempted after that fails even if this is positive. Absent until the payment is authorized. |
| `capture_method` | Optional | string or null | When money is collected. Defaults to automatic. Values: `"automatic"`, `"manual"`. `capture_method`: [declared alternatives](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributescapture_method). |
| `captured_at` | Optional | string or null | When money was captured. For automatic capture, this is when the payment succeeded. Absent until capture. `captured_at`: [declared alternatives](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributescaptured_at). |
| `captured_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null | The amount collected from the buyer, including captured_tip_money. Reconcile revenue and print receipts from this amount, not amount_money. Zero while a hold is open, and positive whenever status is succeeded. After an overcapture it is above authorized_money. Also positive on a payment intent canceled with cancellation_reason payment_returned: Flint captured the money and is returning it through a refund with reason payment_returned. processing_fee_money, merchant_net_money, and refunds are based on it. Absent until the payment is authorized. |
| `captured_tip_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null | The part of captured_money that is a tip: the capture's tip_money when it sent one, otherwise the tip the authorization carried, at most captured_money. tip_money keeps the tip the authorization carried. Refunds return it last. Absent until the payment is captured. |
| `checkout_session_id` | Optional | string or null | Flint checkout session ID associated with this payment, when present. `checkout_session_id`: [declared alternatives](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributescheckout_session_id). |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `customer` | Optional | [ExpandedCustomerSummary](../models/ExpandedCustomerSummary.md#expandedcustomersummary) or null or null | The linked customer. Returned only with expand=customer. Present only when `expand` includes `customer`; `null` when expanded and there is no related customer. |
| `customer_id` | Optional | string or null | Customer linked to this payment intent. `customer_id`: [declared alternatives](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributescustomer_id). |
| `customer_presence` | Optional | string or null | Whether the customer was present for the most recent confirmation. absent means Flint charged a saved card without them, as a merchant-initiated payment on its stored credential. Subscription renewals and automatic invoice charges are absent, and other payments are absent only when confirmed or paid with customer_presence absent. A customer who pays any of them with a card they enter makes it present. Each confirmation sets it again. Values: `"present"`, `"absent"`. `customer_presence`: [declared alternatives](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributescustomer_presence). |
| `dispute_status` | Optional | string or null | Dispute state of this payment. none means no dispute or inquiry is open or recorded. The inquiry_ values track an issuer inquiry or early warning that isn't a chargeback. Read the dispute with GET /v1/disputes for its deadline and evidence. Values: [10 declared values](#paymentintentcanceledmerchanteventdatapreviousattributes-dispute_status-values). `dispute_status`: [declared alternatives](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributesdispute_status). |
| `external_reference_id` | Optional | string or null or null | Caller-owned identifier for this resource in an external system. `null` when no external reference ID has been set on the payment intent. `external_reference_id`: [declared alternatives](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributesexternal_reference_id). |
| `fulfillment_hold` | Optional | [PaymentFulfillmentHold](../models/PaymentFulfillmentHold.md#paymentfulfillmenthold) or null | Present when a payment provider asked Flint to pause fulfillment for this payment. While its status is active, open fulfillments on the order are on hold with reason payment_review. payment_intent.fulfillment_hold_updated is sent when the hold starts and when it lifts. |
| `invoice` | Optional | [ExpandedInvoiceSummary](../models/ExpandedInvoiceSummary.md#expandedinvoicesummary) or null or null | The linked invoice. Returned only with expand=invoice. Present only when `expand` includes `invoice`; `null` when expanded and there is no related invoice. |
| `invoice_id` | Optional | string or null | Invoice this payment intent collects, when it pays an invoice. `invoice_id`: [declared alternatives](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributesinvoice_id). |
| `invoice_schedule_entry_id` | Optional | string or null | The invoice installment this payment collects. `invoice_schedule_entry_id`: [declared alternatives](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributesinvoice_schedule_entry_id). |
| `last_payment_error` | Optional | [PaymentErrorSummary](../models/PaymentErrorSummary.md#paymenterrorsummary) or null or null | Most recent payment error. Null when no payment error is recorded. |
| `latest_order_payment_attempt_id` | Optional | string or null or null | The order payment attempt that most recently used this payment intent. Start times count to the second; of attempts that started in the same second, the one with the highest order_payment_attempt_id is named. `null` when no attempt has used it yet; omitted for payment intents without an order. It changes only when an attempt starts using this payment intent, which advances version. Returned with merchant credentials; omitted with buyer and checkout credentials. `latest_order_payment_attempt_id`: [declared alternatives](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributeslatest_order_payment_attempt_id). |
| `merchant_id` | Optional | string or null | Merchant that owns this payment intent. `merchant_id`: [declared alternatives](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributesmerchant_id). |
| `metadata` | Optional | Map of string or null | Caller-owned metadata. Keys starting with flint_ are reserved for Flint and aren't returned. Always present with merchant credentials. `metadata`: [declared alternatives](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributesmetadata). |
| `order` | Optional | [ExpandedOrderSummary](../models/ExpandedOrderSummary.md#expandedordersummary) or null or null | The linked order. Returned only with expand=order. Present only when `expand` includes `order`; `null` when expanded and there is no related order. |
| `order_edit_id` | Optional | string or null | The order edit whose balance this payment collects. Omitted when this payment doesn't collect an edit's balance. `order_edit_id`: [declared alternatives](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributesorder_edit_id). |
| `order_id` | Optional | string or null | Order this payment intent belongs to. Create it through the order and confirm it with POST /v1/orders/{order_id}/pay. Capture and cancel use POST /v1/payment-intents/{payment_intent_id}/capture or /cancel for every payment intent. Order-owned intents accept PATCH for metadata and external_reference_id. `order_id`: [declared alternatives](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributesorder_id). |
| `overcapture` | Optional | [PaymentIntentCanceledMerchantEventDataPreviousAttributesOvercapture](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributesOvercapture.md#paymentintentcanceledmerchanteventdatapreviousattributesovercapture) or null | Whether one capture can collect more than the authorization, and the most it can collect. Present once a payment with request_overcapture true is authorized. Read it to show the limit; capture enforces it. |
| `payment_flow` | Optional | string or null | How the payment was started. Fixed when the payment intent is created. Values: `"checkout"`, `"payment_link"`, `"invoice"`, `"subscription_initial"`, `"subscription_renewal"`, `"virtual_terminal"`, `"api"`. `payment_flow`: [declared alternatives](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributespayment_flow). |
| `payment_intent_id` | Optional | string or null | Flint payment intent ID. `payment_intent_id`: [declared alternatives](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributespayment_intent_id). |
| `payment_options` | Optional | Array of string or null | Payment options the buyer can use for this payment. Items values: `"card"`, `"apple_pay"`, `"google_pay"`, `"affirm"`, `"ach_debit"`, `"card_present"`. `payment_options`: [declared alternatives](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributespayment_options). |
| `payment_source` | Optional | [PaymentSourceSummary](../models/PaymentSourceSummary.md#paymentsourcesummary) or null | Summary of the card or bank account used for the payment. Absent until a payment source is attached. |
| `platform_fee` | Optional | [PaymentIntentCanceledMerchantEventDataPreviousAttributesPlatformFee](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributesPlatformFee.md#paymentintentcanceledmerchanteventdatapreviousattributesplatformfee) or null | The platform fee a partner app charges on this payment, when it created the payment with an install token and a fee. Absent when the payment carries none. Returned only to merchant credentials; omitted for buyer and checkout credentials. |
| `reader_id` | Optional | string or null | The reader the payment is or was last presented on. Set when Flint presents it and kept afterward. While processing or requires_action with a reader_id, the payment is on that reader now. `reader_id`: [declared alternatives](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributesreader_id). |
| `receipt_email` | Optional | string or null or null | Email address for this payment's receipt. When it isn't set, Flint uses the customer's email. `null` when no receipt email has been set on the payment intent. `receipt_email`: [declared alternatives](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributesreceipt_email). |
| `refund_expires_at` | Optional | string or null or null | Last time Flint can refund this payment through the original payment method. A refund submitted at exactly this time is accepted; after it, refunds through the original payment method are refused. Today only Affirm has a refund window: 120 days after the payment settles. `null` when the method has no refund window, the payment has not succeeded with captured money, or its capture time is missing. Always present with merchant credentials. `refund_expires_at`: [declared alternatives](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributesrefund_expires_at). |
| `refund_status` | Optional | string or null | How much of captured_money has been refunded, including value issued as store credit, based on refunded_money. Values: `"none"`, `"partially_refunded"`, `"refunded"`. `refund_status`: [declared alternatives](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributesrefund_status). |
| `refunded_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null | Total refunded against captured_money, including value issued as store credit and processor refunds still pending. Failed and canceled refunds aren't counted. Zero when nothing has been refunded. |
| `released_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null | The part of the authorization returned to the buyer without being charged: the uncaptured remainder after a partial capture, or the whole authorization after a cancellation or expiry. It was never collected, so it needs no refund and can't be captured later. Zero after a capture at or above the authorization. Absent until the payment is authorized. |
| `request_overcapture` | Optional | boolean or null | Whether one capture may collect more than the authorization where the card network allows it. Fixed at create. Always present with merchant credentials; omitted with buyer and checkout credentials. `request_overcapture`: [declared alternatives](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributesrequest_overcapture). |
| `return_id` | Optional | string or null | Flint return ID associated with this payment, when present. `return_id`: [declared alternatives](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributesreturn_id). |
| `return_resolution_id` | Optional | string or null | The return resolution whose balance this payment collects. Set for exchange balances and corrections. `return_resolution_id`: [declared alternatives](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributesreturn_resolution_id). |
| `risk` | Optional | [PaymentRisk](../models/PaymentRisk.md#paymentrisk) or null or null | Risk assessment. Always present with merchant credentials. `null` when the payment intent's latest payment attempt has no completed risk assessment, such as before its first confirmation. Omitted with the checkout credential. |
| `selected_payment_option` | Optional | string or null | The payment option the most recent confirmation used. Absent until the payment intent is first confirmed. Values: `"card"`, `"apple_pay"`, `"google_pay"`, `"affirm"`, `"ach_debit"`, `"card_present"`. `selected_payment_option`: [declared alternatives](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributesselected_payment_option). |
| `splits` | Optional | Array of [PaymentSplit](../models/PaymentSplit.md#paymentsplit) or null | Top-level PaymentSplit children in their current state, embedded whole. Empty when the payment has no splits. Child changes do not send payment_intent.updated. Omitted for buyer and checkout credentials. `splits`: [declared alternatives](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributessplits). |
| `statement_descriptor` | Optional | string or null or null | The text shown on the buyer's card or bank statement for this payment. `null` until the charge is created. `null` when the provider supplies no descriptor. Frozen when the charge is created. `statement_descriptor`: [declared alternatives](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributesstatement_descriptor). |
| `status` | Optional | string or null | Lifecycle status. requires_payment_method covers both a new payment intent and one whose last attempt failed, so read last_payment_error with it. succeeded, canceled, and expired are final. Refunds and disputes never change status. Values: `"requires_payment_method"`, `"requires_confirmation"`, `"requires_action"`, `"processing"`, `"requires_capture"`, `"canceled"`, `"succeeded"`, `"expired"`. `status`: [declared alternatives](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributesstatus). |
| `subscription_id` | Optional | string or null | The subscription whose billing charged this payment: its first charge, a renewal, a retry or a setup fee. Not set for the checkout payment that created a subscription. `subscription_id`: [declared alternatives](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributessubscription_id). |
| `support_reference` | Optional | string or null | Opaque payment reference to share with merchant support. Do not parse its format. `support_reference`: [declared alternatives](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributessupport_reference). |
| `supported_actions` | Optional | Array of string or null | Verbs this payment intent accepts now, each a POST to /v1/payment-intents/{payment_intent_id}/{action}. The list includes stored order facts and can change without a payment intent version change. Order legs list confirm when a single leg can pay the order or an open attempt can continue it. Several unpaid legs, selected gift cards, or automatic tax with a leg below the balance require pay_order instead. Invoice payments list only cancel; subscription payments list none. Order edit payments list confirm while awaiting payment details or action. A listed action can still be refused due to an open risk review, an order payment attempt, a closed order, or the merchant account. A managed_by_owner refusal names the owner and its command in remediation.next_actions. The merchant list is credential-independent. Checkout credentials receive that list filtered to confirm and cancel on their own session's intents, never capture. Customer sessions omit this field. New actions may be added. Items values: `"confirm"`, `"capture"`, `"cancel"`. `supported_actions`: [declared alternatives](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributessupported_actions). |
| `tip_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null or null | Portion of amount_money that is a tip. Uses amount_money's currency and is at most amount_money. `null` when no tip is set, and for an order payment until its payment attempt has moved past requires_payment_method and requires_confirmation. An order payment without a tip can return an amount of 0 instead. |
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

anyOf variant 1: Flint-normalized reason the payment intent was canceled. Present only while status is canceled. Unknown processor values are returned as payment_canceled..

- Value shape: string. Flint-normalized reason the payment intent was canceled. Present only while status is canceled. Unknown processor values are returned as payment_canceled. Values: `"requested_by_customer"`, `"duplicate"`, `"fraudulent"`, `"abandoned"`, `"invoice_payment_failed"`, `"invoice_voided"`, `"order_closed"`, `"payment_canceled"`, `"payment_returned"`.

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.cancellation_reason variant 2

anyOf variant 2.

- Value shape: null. Flint-normalized reason the payment intent was canceled. Present only while status is canceled. Unknown processor values are returned as payment_canceled. 

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.capture_method

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.capture_method variant 1

anyOf variant 1: When money is collected. Defaults to automatic..

- Value shape: string. When money is collected. Defaults to automatic. Values: `"automatic"`, `"manual"`.

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.capture_method variant 2

anyOf variant 2.

- Value shape: null. When money is collected. Defaults to automatic. 

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

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.customer_id

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.customer_id variant 1

anyOf variant 1: Customer linked to this payment intent..

- Value shape: string. Customer linked to this payment intent. 

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.customer_id variant 2

anyOf variant 2.

- Value shape: null. Customer linked to this payment intent. 

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.customer_presence

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.customer_presence variant 1

anyOf variant 1: Whether the customer was present for the most recent confirmation. absent means Flint charged a saved card without them, as a merchant-initiated payment on its stored credential. Subscription renewals and automatic invoice charges are absent, and other payments are absent only when confirmed or paid with customer_presence absent. A customer who pays any of them with a card they enter makes it present. Each confirmation sets it again..

- Value shape: string. Whether the customer was present for the most recent confirmation. absent means Flint charged a saved card without them, as a merchant-initiated payment on its stored credential. Subscription renewals and automatic invoice charges are absent, and other payments are absent only when confirmed or paid with customer_presence absent. A customer who pays any of them with a card they enter makes it present. Each confirmation sets it again. Values: `"present"`, `"absent"`.

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.customer_presence variant 2

anyOf variant 2.

- Value shape: null. Whether the customer was present for the most recent confirmation. absent means Flint charged a saved card without them, as a merchant-initiated payment on its stored credential. Subscription renewals and automatic invoice charges are absent, and other payments are absent only when confirmed or paid with customer_presence absent. A customer who pays any of them with a card they enter makes it present. Each confirmation sets it again. 

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.dispute_status

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.dispute_status variant 1

anyOf variant 1: Dispute state of this payment. none means no dispute or inquiry is open or recorded. The inquiry_ values track an issuer inquiry or early warning that isn't a chargeback. Read the dispute with GET /v1/disputes for its deadline and evidence..

- Value shape: string. Dispute state of this payment. none means no dispute or inquiry is open or recorded. The inquiry_ values track an issuer inquiry or early warning that isn't a chargeback. Read the dispute with GET /v1/disputes for its deadline and evidence. Values: `"none"`, `"inquiry_needs_response"`, `"inquiry_under_review"`, `"inquiry_closed"`, `"needs_response"`, `"under_review"`, `"won"`, `"lost"`, `"prevented"`, `"other"`.

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.dispute_status variant 2

anyOf variant 2.

- Value shape: null. Dispute state of this payment. none means no dispute or inquiry is open or recorded. The inquiry_ values track an issuer inquiry or early warning that isn't a chargeback. Read the dispute with GET /v1/disputes for its deadline and evidence. 

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.external_reference_id

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.external_reference_id variant 1

anyOf variant 1: Caller-owned identifier for this resource in an external system. `null` when no external reference ID has been set on the payment intent..

- Value shape: (string or null). Caller-owned identifier for this resource in an external system. `null` when no external reference ID has been set on the payment intent. Caller-owned identifier for this resource in an external system. `null` when no external reference ID has been set on the payment intent. minLength: `1`. maxLength: `255`. 

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.external_reference_id variant 2

anyOf variant 2.

- Value shape: null. Caller-owned identifier for this resource in an external system. `null` when no external reference ID has been set on the payment intent. 

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

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.latest_order_payment_attempt_id

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.latest_order_payment_attempt_id variant 1

anyOf variant 1: The order payment attempt that most recently used this payment intent. Start times count to the second; of attempts that started in the same second, the one with the highest order_payment_attempt_id is named. `null` when no attempt has used it yet; omitted for payment intents without an order. It changes only when an attempt starts using this payment intent, which advances version. Returned with merchant credentials; omitted with buyer and checkout credentials..

- Value shape: (string or null). The order payment attempt that most recently used this payment intent. Start times count to the second; of attempts that started in the same second, the one with the highest order_payment_attempt_id is named. `null` when no attempt has used it yet; omitted for payment intents without an order. It changes only when an attempt starts using this payment intent, which advances version. Returned with merchant credentials; omitted with buyer and checkout credentials. 

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

anyOf MetadataMap: Caller-owned metadata. Keys starting with flint_ are reserved for Flint and aren't returned. Always present with merchant credentials..

- Value shape: Map of string. Caller-owned metadata. Keys starting with flint_ are reserved for Flint and aren't returned. Always present with merchant credentials. Map values: maxLength: `4096`. 

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.metadata variant 2

anyOf variant 2.

- Value shape: null. Caller-owned metadata. Keys starting with flint_ are reserved for Flint and aren't returned. Always present with merchant credentials. 

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.order_edit_id

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.order_edit_id variant 1

anyOf variant 1: The order edit whose balance this payment collects. Omitted when this payment doesn't collect an edit's balance..

- Value shape: string. The order edit whose balance this payment collects. Omitted when this payment doesn't collect an edit's balance. 

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.order_edit_id variant 2

anyOf variant 2.

- Value shape: null. The order edit whose balance this payment collects. Omitted when this payment doesn't collect an edit's balance. 

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.order_id

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.order_id variant 1

anyOf variant 1: Order this payment intent belongs to. Create it through the order and confirm it with POST /v1/orders/{order_id}/pay. Capture and cancel use POST /v1/payment-intents/{payment_intent_id}/capture or /cancel for every payment intent. Order-owned intents accept PATCH for metadata and external_reference_id..

- Value shape: string. Order this payment intent belongs to. Create it through the order and confirm it with POST /v1/orders/{order_id}/pay. Capture and cancel use POST /v1/payment-intents/{payment_intent_id}/capture or /cancel for every payment intent. Order-owned intents accept PATCH for metadata and external_reference_id. 

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.order_id variant 2

anyOf variant 2.

- Value shape: null. Order this payment intent belongs to. Create it through the order and confirm it with POST /v1/orders/{order_id}/pay. Capture and cancel use POST /v1/payment-intents/{payment_intent_id}/capture or /cancel for every payment intent. Order-owned intents accept PATCH for metadata and external_reference_id. 

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.payment_flow

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.payment_flow variant 1

anyOf variant 1: How the payment was started. Fixed when the payment intent is created..

- Value shape: string. How the payment was started. Fixed when the payment intent is created. Values: `"checkout"`, `"payment_link"`, `"invoice"`, `"subscription_initial"`, `"subscription_renewal"`, `"virtual_terminal"`, `"api"`.

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.payment_flow variant 2

anyOf variant 2.

- Value shape: null. How the payment was started. Fixed when the payment intent is created. 

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.payment_intent_id

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.payment_intent_id variant 1

anyOf variant 1: Flint payment intent ID..

- Value shape: string. Flint payment intent ID. 

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.payment_intent_id variant 2

anyOf variant 2.

- Value shape: null. Flint payment intent ID. 

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.payment_options

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.payment_options variant 1

anyOf variant 1: Payment options the buyer can use for this payment..

- Value shape: Array of string. Payment options the buyer can use for this payment. Items values: `"card"`, `"apple_pay"`, `"google_pay"`, `"affirm"`, `"ach_debit"`, `"card_present"`.

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.payment_options variant 2

anyOf variant 2.

- Value shape: null. Payment options the buyer can use for this payment. 

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.reader_id

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.reader_id variant 1

anyOf variant 1: The reader the payment is or was last presented on. Set when Flint presents it and kept afterward. While processing or requires_action with a reader_id, the payment is on that reader now..

- Value shape: string. The reader the payment is or was last presented on. Set when Flint presents it and kept afterward. While processing or requires_action with a reader_id, the payment is on that reader now. 

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.reader_id variant 2

anyOf variant 2.

- Value shape: null. The reader the payment is or was last presented on. Set when Flint presents it and kept afterward. While processing or requires_action with a reader_id, the payment is on that reader now. 

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.receipt_email

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.receipt_email variant 1

anyOf variant 1: Email address for this payment's receipt. When it isn't set, Flint uses the customer's email. `null` when no receipt email has been set on the payment intent..

- Value shape: (string or null). Email address for this payment's receipt. When it isn't set, Flint uses the customer's email. `null` when no receipt email has been set on the payment intent. Email address for this payment's receipt. When it isn't set, Flint uses the customer's email. `null` when no receipt email has been set on the payment intent. Format: `email`. maxLength: `255`. 

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.receipt_email variant 2

anyOf variant 2.

- Value shape: null. Email address for this payment's receipt. When it isn't set, Flint uses the customer's email. `null` when no receipt email has been set on the payment intent. 

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.refund_expires_at

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.refund_expires_at variant 1

anyOf variant 1: Last time Flint can refund this payment through the original payment method. A refund submitted at exactly this time is accepted; after it, refunds through the original payment method are refused. Today only Affirm has a refund window: 120 days after the payment settles. `null` when the method has no refund window, the payment has not succeeded with captured money, or its capture time is missing. Always present with merchant credentials..

- Value shape: (string or null). Last time Flint can refund this payment through the original payment method. A refund submitted at exactly this time is accepted; after it, refunds through the original payment method are refused. Today only Affirm has a refund window: 120 days after the payment settles. `null` when the method has no refund window, the payment has not succeeded with captured money, or its capture time is missing. Always present with merchant credentials. Last time Flint can refund this payment through the original payment method. A refund submitted at exactly this time is accepted; after it, refunds through the original payment method are refused. Today only Affirm has a refund window: 120 days after the payment settles. `null` when the method has no refund window, the payment has not succeeded with captured money, or its capture time is missing. Always present with merchant credentials. Format: `date-time`. 

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.refund_expires_at variant 2

anyOf variant 2.

- Value shape: null. Last time Flint can refund this payment through the original payment method. A refund submitted at exactly this time is accepted; after it, refunds through the original payment method are refused. Today only Affirm has a refund window: 120 days after the payment settles. `null` when the method has no refund window, the payment has not succeeded with captured money, or its capture time is missing. Always present with merchant credentials. 

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.refund_status

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.refund_status variant 1

anyOf variant 1: How much of captured_money has been refunded, including value issued as store credit, based on refunded_money..

- Value shape: string. How much of captured_money has been refunded, including value issued as store credit, based on refunded_money. Values: `"none"`, `"partially_refunded"`, `"refunded"`.

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.refund_status variant 2

anyOf variant 2.

- Value shape: null. How much of captured_money has been refunded, including value issued as store credit, based on refunded_money. 

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

- Value shape: Array of [PaymentSplit](../models/PaymentSplit.md#paymentsplit). Top-level PaymentSplit children in their current state, embedded whole. Empty when the payment has no splits. Child changes do not send payment_intent.updated. Omitted for buyer and checkout credentials. 

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.splits variant 2

anyOf variant 2.

- Value shape: null. Top-level PaymentSplit children in their current state, embedded whole. Empty when the payment has no splits. Child changes do not send payment_intent.updated. Omitted for buyer and checkout credentials. 

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.splits variant 1.[] fields 1

Field definitions: [PaymentIntentResponse.data.splits[]](../models/PaymentIntentResponse.md#paymentintentresponsedatasplits).

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.statement_descriptor

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.statement_descriptor variant 1

anyOf variant 1: The text shown on the buyer's card or bank statement for this payment. `null` until the charge is created. `null` when the provider supplies no descriptor. Frozen when the charge is created..

- Value shape: (string or null). The text shown on the buyer's card or bank statement for this payment. `null` until the charge is created. `null` when the provider supplies no descriptor. Frozen when the charge is created. 

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.statement_descriptor variant 2

anyOf variant 2.

- Value shape: null. The text shown on the buyer's card or bank statement for this payment. `null` until the charge is created. `null` when the provider supplies no descriptor. Frozen when the charge is created. 

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.status

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.status variant 1

anyOf variant 1: Lifecycle status. requires_payment_method covers both a new payment intent and one whose last attempt failed, so read last_payment_error with it. succeeded, canceled, and expired are final. Refunds and disputes never change status..

- Value shape: string. Lifecycle status. requires_payment_method covers both a new payment intent and one whose last attempt failed, so read last_payment_error with it. succeeded, canceled, and expired are final. Refunds and disputes never change status. Values: `"requires_payment_method"`, `"requires_confirmation"`, `"requires_action"`, `"processing"`, `"requires_capture"`, `"canceled"`, `"succeeded"`, `"expired"`.

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.status variant 2

anyOf variant 2.

- Value shape: null. Lifecycle status. requires_payment_method covers both a new payment intent and one whose last attempt failed, so read last_payment_error with it. succeeded, canceled, and expired are final. Refunds and disputes never change status. 

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

anyOf variant 1: Verbs this payment intent accepts now, each a POST to /v1/payment-intents/{payment_intent_id}/{action}. The list includes stored order facts and can change without a payment intent version change. Order legs list confirm when a single leg can pay the order or an open attempt can continue it. Several unpaid legs, selected gift cards, or automatic tax with a leg below the balance require pay_order instead. Invoice payments list only cancel; subscription payments list none. Order edit payments list confirm while awaiting payment details or action. A listed action can still be refused due to an open risk review, an order payment attempt, a closed order, or the merchant account. A managed_by_owner refusal names the owner and its command in remediation.next_actions. The merchant list is credential-independent. Checkout credentials receive that list filtered to confirm and cancel on their own session's intents, never capture. Customer sessions omit this field. New actions may be added..

- Value shape: Array of string. Verbs this payment intent accepts now, each a POST to /v1/payment-intents/{payment_intent_id}/{action}. The list includes stored order facts and can change without a payment intent version change. Order legs list confirm when a single leg can pay the order or an open attempt can continue it. Several unpaid legs, selected gift cards, or automatic tax with a leg below the balance require pay_order instead. Invoice payments list only cancel; subscription payments list none. Order edit payments list confirm while awaiting payment details or action. A listed action can still be refused due to an open risk review, an order payment attempt, a closed order, or the merchant account. A managed_by_owner refusal names the owner and its command in remediation.next_actions. The merchant list is credential-independent. Checkout credentials receive that list filtered to confirm and cancel on their own session's intents, never capture. Customer sessions omit this field. New actions may be added. Items values: `"confirm"`, `"capture"`, `"cancel"`.

### PaymentIntentCanceledMerchantEventDataPreviousAttributes.supported_actions variant 2

anyOf variant 2.

- Value shape: null. Verbs this payment intent accepts now, each a POST to /v1/payment-intents/{payment_intent_id}/{action}. The list includes stored order facts and can change without a payment intent version change. Order legs list confirm when a single leg can pay the order or an open attempt can continue it. Several unpaid legs, selected gift cards, or automatic tax with a leg below the balance require pay_order instead. Invoice payments list only cancel; subscription payments list none. Order edit payments list confirm while awaiting payment details or action. A listed action can still be refused due to an open risk review, an order payment attempt, a closed order, or the merchant account. A managed_by_owner refusal names the owner and its command in remediation.next_actions. The merchant list is credential-independent. Checkout credentials receive that list filtered to confirm and cancel on their own session's intents, never capture. Customer sessions omit this field. New actions may be added. 

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

