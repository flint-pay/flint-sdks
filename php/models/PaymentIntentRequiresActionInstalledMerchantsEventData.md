[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentIntentRequiresActionInstalledMerchantsEventData

The resource snapshot recorded for this event and rendered at the delivery API version.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | [PaymentIntentRequiresActionInstalledMerchantsEventDataObject](../models/PaymentIntentRequiresActionInstalledMerchantsEventDataObject.md#paymentintentrequiresactioninstalledmerchantseventdataobject) | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit these fields: `processing_fee_money`, `add_on_fees`, `merchant_net_money`, `payment_collection`. `object`: [field definitions](../models/PaymentIntentRequiresActionInstalledMerchantsEventData.md#paymentintentrequiresactioninstalledmerchantseventdataobject-fields-1). |
| `previous_attributes` | Optional | [PaymentIntentRequiresActionInstalledMerchantsEventDataPreviousAttributes](../models/PaymentIntentRequiresActionInstalledMerchantsEventDataPreviousAttributes.md#paymentintentrequiresactioninstalledmerchantseventdatapreviousattributes) | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/PaymentIntentRequiresActionInstalledMerchantsEventData.md#paymentintentrequiresactioninstalledmerchantseventdataprevious_attributes). |

### PaymentIntentRequiresActionInstalledMerchantsEventData.object fields 1

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit these fields: `processing_fee_money`, `add_on_fees`, `merchant_net_money`, `payment_collection`.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The amount requested from the buyer, including any tip_money. Capturing doesn't change it: after a partial capture it still shows the requested amount, and captured_money shows what was collected. On a standalone payment intent, PATCH can change it only before the first confirmation attempt. An amount_money or tip_money change that leaves too little for stored splits returns LIMIT_EXCEEDED at the changed field with minimum_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `authorization_expires_at` | Optional | string | Effective Flint deadline to capture a manual-capture hold: the earlier of the provider capture deadline and any order resource guarantee. Order guarantees last at most 24 hours from the payment attempt start and may end earlier. Capture is refused at or after this time, even while status is requires_capture. Omitted until a hold is placed. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `authorized_at` | Optional | string | When the processor authorized the payment. Absent until then. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `authorized_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The amount the processor authorized. It always equals amount_money and doesn't change once set, even when a capture collects more. On a payment intent canceled with cancellation_reason payment_returned, it equals the authorization Flint released instead. Absent until the payment is authorized, and on payments canceled before authorization. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `cancellation_reason` | Optional | string | Flint-normalized reason the payment intent was canceled. Present only while status is canceled. Unknown processor values are returned as payment_canceled. Values: [9 declared values](#paymentintentrequiresactioninstalledmerchantseventdataobject-fields-1-cancellation_reason-values). |
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
| `dispute_status` | Optional | string | Dispute state of this payment. none means no dispute or inquiry is open or recorded. The inquiry_ values track an issuer inquiry or early warning that isn't a chargeback. Read the dispute with GET /v1/disputes for its deadline and evidence. Values: [10 declared values](#paymentintentrequiresactioninstalledmerchantseventdataobject-fields-1-dispute_status-values). |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. `null` when no external reference ID has been set on the payment intent. minLength: `1`. maxLength: `255`. Example: `"warehouse-1842"`. |
| `fulfillment_hold` | Optional | [PaymentFulfillmentHold](../models/PaymentFulfillmentHold.md#paymentfulfillmenthold) | Present when a payment provider asked Flint to pause fulfillment for this payment. While its status is active, open fulfillments on the order are on hold with reason payment_review. payment_intent.fulfillment_hold_updated is sent when the hold starts and when it lifts. A hold on fulfillment tied to a payment, with the reason, the action required, and whether the hold is active or released. `fulfillment_hold`: [field definitions](../models/PaymentIntentResponse.md#paymentintentresponsedatafulfillment_hold). |
| `invoice` | Optional | [ExpandedInvoiceSummary](../models/ExpandedInvoiceSummary.md#expandedinvoicesummary) or null | The linked invoice. Returned only with expand=invoice. Present only when `expand` includes `invoice`; `null` when expanded and there is no related invoice. `invoice`: [declared alternatives](../models/PaymentIntentResponse.md#paymentintentresponsedatainvoice). |
| `invoice_id` | Optional | string | Invoice this payment intent collects, when it pays an invoice. Example: `"inv_01KEZF7C00A5GEBMWHEAJFSAR4"`. |
| `invoice_schedule_entry_id` | Optional | string | The invoice installment this payment collects. Example: `"invse_01KEZF7C006JCPQBD8VZ0RNT6R"`. |
| `last_payment_error` | Required | [PaymentErrorSummary](../models/PaymentErrorSummary.md#paymenterrorsummary) or null | Most recent payment error. Null when no payment error is recorded. `last_payment_error`: [declared alternatives](../models/PaymentIntentResponse.md#paymentintentresponsedatalast_payment_error). |
| `latest_order_payment_attempt_id` | Optional | string or null | The order payment attempt that most recently used this payment intent. Start times count to the second; of attempts that started in the same second, the one with the highest order_payment_attempt_id is named. `null` when no attempt has used it yet; omitted for payment intents without an order. It changes only when an attempt starts using this payment intent, which advances version. Returned with merchant credentials; omitted with buyer and checkout credentials. Example: `"opat_01KEZF7C00B5PW9F2R8A4YSH5D"`. |
| `merchant_id` | Optional | string | Merchant that owns this payment intent. Example: `"mer_01KEZF7C00KPYH1DDFPCCX3B6E"`. |
| `metadata` | Optional | Map of string | Caller-owned metadata. Keys starting with flint_ are reserved for Flint and aren't returned. Always present with merchant credentials. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. `metadata`: [field definitions](../models/PaymentIntentResponse.md#paymentintentresponsedatametadata). |
| `order` | Optional | [ExpandedOrderSummary](../models/ExpandedOrderSummary.md#expandedordersummary) or null | The linked order. Returned only with expand=order. Present only when `expand` includes `order`; `null` when expanded and there is no related order. `order`: [declared alternatives](../models/PaymentIntentResponse.md#paymentintentresponsedataorder). |
| `order_edit_id` | Optional | string | The order edit whose balance this payment collects. Omitted when this payment doesn't collect an edit's balance. Example: `"oed_01KEZF7C00A6BQ4TBGWFDJ944A"`. |
| `order_id` | Optional | string | Order this payment intent belongs to. Create it through the order and confirm it with POST /v1/orders/{order_id}/pay. Capture and cancel use POST /v1/payment-intents/{payment_intent_id}/capture or /cancel for every payment intent. Order-owned intents accept PATCH for metadata and external_reference_id. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `overcapture` | Optional | [PaymentIntentOvercapture](../models/PaymentIntentOvercapture.md#paymentintentovercapture) | Whether one capture can collect more than the authorization, and the most it can collect. Present once a payment with request_overcapture true is authorized. Read it to show the limit; capture enforces it. Whether one capture can collect more than the authorization. |
| `payment_flow` | Required | string | How the payment was started. Fixed when the payment intent is created. Values: `"checkout"`, `"payment_link"`, `"invoice"`, `"subscription_initial"`, `"subscription_renewal"`, `"virtual_terminal"`, `"api"`. |
| `payment_intent_id` | Required | string | Flint payment intent ID. Example: `"pi_01KEZF7C00G8H9D509YEV22P7R"`. |
| `payment_options` | Required | Array of string | Payment options the buyer can use for this payment. Items values: `"card"`, `"apple_pay"`, `"google_pay"`, `"affirm"`, `"ach_debit"`, `"card_present"`. |
| `payment_source` | Optional | [PaymentSourceSummary](../models/PaymentSourceSummary.md#paymentsourcesummary) | Summary of the card or bank account used for the payment. Absent until a payment source is attached. A summary of the payment source used for a payment, by funding-method family, with card or bank account display details. |
| `platform_fee` | Optional | [PaymentIntentPlatformFee](../models/PaymentIntentPlatformFee.md#paymentintentplatformfee) | The platform fee a partner app charges on this payment, when it created the payment with an install token and a fee. Absent when the payment carries none. Returned only to merchant credentials; omitted for buyer and checkout credentials. The platform fee a partner app charges on this payment. The merchant pays it beside processing_fee_money and add_on_fees, and merchant_net_money subtracts it. `platform_fee`: [field definitions](../models/PaymentIntentResponse.md#paymentintentresponsedataplatform_fee). |
| `reader_id` | Optional | string | The reader the payment is or was last presented on. Set when Flint presents it and kept afterward. While processing or requires_action with a reader_id, the payment is on that reader now. Example: `"rdr_01KEZF7C007JA0G24M7SD6P46C"`. |
| `receipt_email` | Optional | string or null | Email address for this payment's receipt. When it isn't set, Flint uses the customer's email. `null` when no receipt email has been set on the payment intent. Format: `email`. maxLength: `255`. Example: `"buyer@example.com"`. |
| `refund_expires_at` | Optional | string or null | Last time Flint can refund this payment through the original payment method. A refund submitted at exactly this time is accepted; after it, refunds through the original payment method are refused. Today only Affirm has a refund window: 120 days after the payment settles. `null` when the method has no refund window, the payment has not succeeded with captured money, or its capture time is missing. Always present with merchant credentials. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `refund_status` | Optional | string | How much of captured_money has been refunded, including value issued as store credit, based on refunded_money. Values: `"none"`, `"partially_refunded"`, `"refunded"`. |
| `refunded_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Total refunded against captured_money, including value issued as store credit and processor refunds still pending. Failed and canceled refunds aren't counted. Zero when nothing has been refunded. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `released_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The part of the authorization returned to the buyer without being charged: the uncaptured remainder after a partial capture, or the whole authorization after a cancellation or expiry. It was never collected, so it needs no refund and can't be captured later. Zero after a capture at or above the authorization. Absent until the payment is authorized. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `request_overcapture` | Optional | boolean | Whether one capture may collect more than the authorization where the card network allows it. Fixed at create. Always present with merchant credentials; omitted with buyer and checkout credentials. |
| `return_id` | Optional | string | Flint return ID associated with this payment, when present. Example: `"ret_01KEZF7C00PG93650ZKVQNGF7X"`. |
| `return_resolution_id` | Optional | string | The return resolution whose balance this payment collects. Set for exchange balances and corrections. Example: `"retres_01KEZF7C00C7RZJN31W9SGMEQ3"`. |
| `risk` | Optional | [PaymentRisk](../models/PaymentRisk.md#paymentrisk) or null | Risk assessment. Always present with merchant credentials. `null` when the payment intent's latest payment attempt has no completed risk assessment, such as before its first confirmation. Omitted with the checkout credential. `risk`: [declared alternatives](../models/PaymentIntentResponse.md#paymentintentresponsedatarisk). |
| `selected_payment_option` | Optional | string | The payment option the most recent confirmation used. Absent until the payment intent is first confirmed. Values: `"card"`, `"apple_pay"`, `"google_pay"`, `"affirm"`, `"ach_debit"`, `"card_present"`. |
| `splits` | Optional | Array of [PaymentSplit](../models/PaymentSplit.md#paymentsplit) | Top-level PaymentSplit children in their current state, embedded whole. Empty when the payment has no splits. Child changes do not send payment_intent.updated. Omitted for buyer and checkout credentials. `splits[]`: [field definitions](../models/PaymentIntentResponse.md#paymentintentresponsedatasplits). |
| `statement_descriptor` | Required | string or null | The text shown on the buyer's card or bank statement for this payment. `null` until the charge is created. `null` when the provider supplies no descriptor. Frozen when the charge is created. |
| `status` | Required | string | Lifecycle status. requires_payment_method covers both a new payment intent and one whose last attempt failed, so read last_payment_error with it. succeeded, canceled, and expired are final. Refunds and disputes never change status. Values: `"requires_payment_method"`, `"requires_confirmation"`, `"requires_action"`, `"processing"`, `"requires_capture"`, `"canceled"`, `"succeeded"`, `"expired"`. |
| `subscription_id` | Optional | string | The subscription whose billing charged this payment: its first charge, a renewal, a retry or a setup fee. Not set for the checkout payment that created a subscription. Example: `"sub_01KEZF7C00BVRE8YDBXQB74BBM"`. |
| `support_reference` | Required | string | Opaque payment reference to share with merchant support. Do not parse its format. |
| `supported_actions` | Required | Array of string | Verbs this payment intent accepts now, each a POST to /v1/payment-intents/{payment_intent_id}/{action}. The list includes stored order facts and can change without a payment intent version change. Order legs list confirm when a single leg can pay the order or an open attempt can continue it. Several unpaid legs, selected gift cards, or automatic tax with a leg below the balance require pay_order instead. Invoice payments list only cancel; subscription payments list none. Order edit payments list confirm while awaiting payment details or action. A listed action can still be refused due to an open risk review, an order payment attempt, a closed order, or the merchant account. A managed_by_owner refusal names the owner and its command in remediation.next_actions. The merchant list is credential-independent. Checkout credentials receive that list filtered to confirm and cancel on their own session's intents, never capture. Customer sessions omit this field. New actions may be added. Items values: `"confirm"`, `"capture"`, `"cancel"`. |
| `tip_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null | Portion of amount_money that is a tip. Uses amount_money's currency and is at most amount_money. `null` when no tip is set, and for an order payment until its payment attempt has moved past requires_payment_method and requires_confirmation. An order payment without a tip can return an amount of 0 instead. |
| `transaction_purpose` | Optional | string | Why a bank debit is taken. Set only when payment_options includes ach_debit, and fixed once the payment intent exists. Values: `"goods"`, `"services"`, `"other"`. |
| `updated_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `version` | Required | integer | Persisted version of this resource's owned state. Expanded resources and external observations can change independently. Format: `uint64`. minimum: `1`. |

#### PaymentIntentRequiresActionInstalledMerchantsEventData.object fields 1 cancellation_reason values

- `"requested_by_customer"`
- `"duplicate"`
- `"fraudulent"`
- `"abandoned"`
- `"invoice_payment_failed"`
- `"invoice_voided"`
- `"order_closed"`
- `"payment_canceled"`
- `"payment_returned"`

#### PaymentIntentRequiresActionInstalledMerchantsEventData.object fields 1 dispute_status values

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

### PaymentIntentRequiresActionInstalledMerchantsEventData.object fields 1.customer

Declared alternatives: [PaymentIntentResponse.data.customer](../models/PaymentIntentResponse.md#paymentintentresponsedatacustomer).

### PaymentIntentRequiresActionInstalledMerchantsEventData.object fields 1.fulfillment_hold

Field definitions: [PaymentIntentResponse.data.fulfillment_hold](../models/PaymentIntentResponse.md#paymentintentresponsedatafulfillment_hold).

### PaymentIntentRequiresActionInstalledMerchantsEventData.object fields 1.invoice

Declared alternatives: [PaymentIntentResponse.data.invoice](../models/PaymentIntentResponse.md#paymentintentresponsedatainvoice).

### PaymentIntentRequiresActionInstalledMerchantsEventData.object fields 1.last_payment_error

Declared alternatives: [PaymentIntentResponse.data.last_payment_error](../models/PaymentIntentResponse.md#paymentintentresponsedatalast_payment_error).

### PaymentIntentRequiresActionInstalledMerchantsEventData.object fields 1.metadata

Field definitions: [PaymentIntentResponse.data.metadata](../models/PaymentIntentResponse.md#paymentintentresponsedatametadata).

### PaymentIntentRequiresActionInstalledMerchantsEventData.object fields 1.order

Declared alternatives: [PaymentIntentResponse.data.order](../models/PaymentIntentResponse.md#paymentintentresponsedataorder).

### PaymentIntentRequiresActionInstalledMerchantsEventData.object fields 1.platform_fee

Field definitions: [PaymentIntentResponse.data.platform_fee](../models/PaymentIntentResponse.md#paymentintentresponsedataplatform_fee).

### PaymentIntentRequiresActionInstalledMerchantsEventData.object fields 1.risk

Declared alternatives: [PaymentIntentResponse.data.risk](../models/PaymentIntentResponse.md#paymentintentresponsedatarisk).

### PaymentIntentRequiresActionInstalledMerchantsEventData.object fields 1.splits[]

Field definitions: [PaymentIntentResponse.data.splits[]](../models/PaymentIntentResponse.md#paymentintentresponsedatasplits).

### PaymentIntentRequiresActionInstalledMerchantsEventData.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null | The amount requested from the buyer, including any tip_money. Capturing doesn't change it: after a partial capture it still shows the requested amount, and captured_money shows what was collected. On a standalone payment intent, PATCH can change it only before the first confirmation attempt. An amount_money or tip_money change that leaves too little for stored splits returns LIMIT_EXCEEDED at the changed field with minimum_money. |
| `authorization_expires_at` | Optional | string or null | Effective Flint deadline to capture a manual-capture hold: the earlier of the provider capture deadline and any order resource guarantee. Order guarantees last at most 24 hours from the payment attempt start and may end earlier. Capture is refused at or after this time, even while status is requires_capture. Omitted until a hold is placed. `authorization_expires_at`: [declared alternatives](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributesauthorization_expires_at). |
| `authorized_at` | Optional | string or null | When the processor authorized the payment. Absent until then. `authorized_at`: [declared alternatives](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributesauthorized_at). |
| `authorized_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null | The amount the processor authorized. It always equals amount_money and doesn't change once set, even when a capture collects more. On a payment intent canceled with cancellation_reason payment_returned, it equals the authorization Flint released instead. Absent until the payment is authorized, and on payments canceled before authorization. |
| `cancellation_reason` | Optional | string or null | Flint-normalized reason the payment intent was canceled. Present only while status is canceled. Unknown processor values are returned as payment_canceled. Values: [9 declared values](#paymentintentrequiresactioninstalledmerchantseventdataprevious_attributes-cancellation_reason-values). `cancellation_reason`: [declared alternatives](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributescancellation_reason). |
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
| `dispute_status` | Optional | string or null | Dispute state of this payment. none means no dispute or inquiry is open or recorded. The inquiry_ values track an issuer inquiry or early warning that isn't a chargeback. Read the dispute with GET /v1/disputes for its deadline and evidence. Values: [10 declared values](#paymentintentrequiresactioninstalledmerchantseventdataprevious_attributes-dispute_status-values). `dispute_status`: [declared alternatives](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributesdispute_status). |
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
| `overcapture` | Optional | [PaymentIntentOvercapture](../models/PaymentIntentOvercapture.md#paymentintentovercapture) or null | Whether one capture can collect more than the authorization, and the most it can collect. Present once a payment with request_overcapture true is authorized. Read it to show the limit; capture enforces it. |
| `payment_flow` | Optional | string or null | How the payment was started. Fixed when the payment intent is created. Values: `"checkout"`, `"payment_link"`, `"invoice"`, `"subscription_initial"`, `"subscription_renewal"`, `"virtual_terminal"`, `"api"`. `payment_flow`: [declared alternatives](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributespayment_flow). |
| `payment_intent_id` | Optional | string or null | Flint payment intent ID. `payment_intent_id`: [declared alternatives](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributespayment_intent_id). |
| `payment_options` | Optional | Array of string or null | Payment options the buyer can use for this payment. Items values: `"card"`, `"apple_pay"`, `"google_pay"`, `"affirm"`, `"ach_debit"`, `"card_present"`. `payment_options`: [declared alternatives](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributespayment_options). |
| `payment_source` | Optional | [PaymentSourceSummary](../models/PaymentSourceSummary.md#paymentsourcesummary) or null | Summary of the card or bank account used for the payment. Absent until a payment source is attached. |
| `platform_fee` | Optional | [PaymentIntentPlatformFee](../models/PaymentIntentPlatformFee.md#paymentintentplatformfee) or null | The platform fee a partner app charges on this payment, when it created the payment with an install token and a fee. Absent when the payment carries none. Returned only to merchant credentials; omitted for buyer and checkout credentials. |
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

#### PaymentIntentRequiresActionInstalledMerchantsEventData.previous_attributes cancellation_reason values

- `"requested_by_customer"`
- `"duplicate"`
- `"fraudulent"`
- `"abandoned"`
- `"invoice_payment_failed"`
- `"invoice_voided"`
- `"order_closed"`
- `"payment_canceled"`
- `"payment_returned"`

#### PaymentIntentRequiresActionInstalledMerchantsEventData.previous_attributes dispute_status values

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

### PaymentIntentRequiresActionInstalledMerchantsEventData.previous_attributes.authorization_expires_at

Declared alternatives: [PaymentIntentCanceledMerchantEventDataPreviousAttributes.authorization_expires_at](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributesauthorization_expires_at).

### PaymentIntentRequiresActionInstalledMerchantsEventData.previous_attributes.authorized_at

Declared alternatives: [PaymentIntentCanceledMerchantEventDataPreviousAttributes.authorized_at](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributesauthorized_at).

### PaymentIntentRequiresActionInstalledMerchantsEventData.previous_attributes.cancellation_reason

Declared alternatives: [PaymentIntentCanceledMerchantEventDataPreviousAttributes.cancellation_reason](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributescancellation_reason).

### PaymentIntentRequiresActionInstalledMerchantsEventData.previous_attributes.capture_method

Declared alternatives: [PaymentIntentCanceledMerchantEventDataPreviousAttributes.capture_method](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributescapture_method).

### PaymentIntentRequiresActionInstalledMerchantsEventData.previous_attributes.captured_at

Declared alternatives: [PaymentIntentCanceledMerchantEventDataPreviousAttributes.captured_at](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributescaptured_at).

### PaymentIntentRequiresActionInstalledMerchantsEventData.previous_attributes.checkout_session_id

Declared alternatives: [PaymentIntentCanceledMerchantEventDataPreviousAttributes.checkout_session_id](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributescheckout_session_id).

### PaymentIntentRequiresActionInstalledMerchantsEventData.previous_attributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### PaymentIntentRequiresActionInstalledMerchantsEventData.previous_attributes.customer_id

Declared alternatives: [PaymentIntentCanceledMerchantEventDataPreviousAttributes.customer_id](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributescustomer_id).

### PaymentIntentRequiresActionInstalledMerchantsEventData.previous_attributes.customer_presence

Declared alternatives: [PaymentIntentCanceledMerchantEventDataPreviousAttributes.customer_presence](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributescustomer_presence).

### PaymentIntentRequiresActionInstalledMerchantsEventData.previous_attributes.dispute_status

Declared alternatives: [PaymentIntentCanceledMerchantEventDataPreviousAttributes.dispute_status](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributesdispute_status).

### PaymentIntentRequiresActionInstalledMerchantsEventData.previous_attributes.external_reference_id

Declared alternatives: [PaymentIntentCanceledMerchantEventDataPreviousAttributes.external_reference_id](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributesexternal_reference_id).

### PaymentIntentRequiresActionInstalledMerchantsEventData.previous_attributes.invoice_id

Declared alternatives: [PaymentIntentCanceledMerchantEventDataPreviousAttributes.invoice_id](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributesinvoice_id).

### PaymentIntentRequiresActionInstalledMerchantsEventData.previous_attributes.invoice_schedule_entry_id

Declared alternatives: [PaymentIntentCanceledMerchantEventDataPreviousAttributes.invoice_schedule_entry_id](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributesinvoice_schedule_entry_id).

### PaymentIntentRequiresActionInstalledMerchantsEventData.previous_attributes.latest_order_payment_attempt_id

Declared alternatives: [PaymentIntentCanceledMerchantEventDataPreviousAttributes.latest_order_payment_attempt_id](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributeslatest_order_payment_attempt_id).

### PaymentIntentRequiresActionInstalledMerchantsEventData.previous_attributes.merchant_id

Declared alternatives: [PaymentIntentCanceledMerchantEventDataPreviousAttributes.merchant_id](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributesmerchant_id).

### PaymentIntentRequiresActionInstalledMerchantsEventData.previous_attributes.metadata

Declared alternatives: [PaymentIntentCanceledMerchantEventDataPreviousAttributes.metadata](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributesmetadata).

### PaymentIntentRequiresActionInstalledMerchantsEventData.previous_attributes.order_edit_id

Declared alternatives: [PaymentIntentCanceledMerchantEventDataPreviousAttributes.order_edit_id](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributesorder_edit_id).

### PaymentIntentRequiresActionInstalledMerchantsEventData.previous_attributes.order_id

Declared alternatives: [PaymentIntentCanceledMerchantEventDataPreviousAttributes.order_id](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributesorder_id).

### PaymentIntentRequiresActionInstalledMerchantsEventData.previous_attributes.payment_flow

Declared alternatives: [PaymentIntentCanceledMerchantEventDataPreviousAttributes.payment_flow](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributespayment_flow).

### PaymentIntentRequiresActionInstalledMerchantsEventData.previous_attributes.payment_intent_id

Declared alternatives: [PaymentIntentCanceledMerchantEventDataPreviousAttributes.payment_intent_id](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributespayment_intent_id).

### PaymentIntentRequiresActionInstalledMerchantsEventData.previous_attributes.payment_options

Declared alternatives: [PaymentIntentCanceledMerchantEventDataPreviousAttributes.payment_options](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributespayment_options).

### PaymentIntentRequiresActionInstalledMerchantsEventData.previous_attributes.reader_id

Declared alternatives: [PaymentIntentCanceledMerchantEventDataPreviousAttributes.reader_id](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributesreader_id).

### PaymentIntentRequiresActionInstalledMerchantsEventData.previous_attributes.receipt_email

Declared alternatives: [PaymentIntentCanceledMerchantEventDataPreviousAttributes.receipt_email](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributesreceipt_email).

### PaymentIntentRequiresActionInstalledMerchantsEventData.previous_attributes.refund_expires_at

Declared alternatives: [PaymentIntentCanceledMerchantEventDataPreviousAttributes.refund_expires_at](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributesrefund_expires_at).

### PaymentIntentRequiresActionInstalledMerchantsEventData.previous_attributes.refund_status

Declared alternatives: [PaymentIntentCanceledMerchantEventDataPreviousAttributes.refund_status](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributesrefund_status).

### PaymentIntentRequiresActionInstalledMerchantsEventData.previous_attributes.request_overcapture

Declared alternatives: [PaymentIntentCanceledMerchantEventDataPreviousAttributes.request_overcapture](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributesrequest_overcapture).

### PaymentIntentRequiresActionInstalledMerchantsEventData.previous_attributes.return_id

Declared alternatives: [PaymentIntentCanceledMerchantEventDataPreviousAttributes.return_id](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributesreturn_id).

### PaymentIntentRequiresActionInstalledMerchantsEventData.previous_attributes.return_resolution_id

Declared alternatives: [PaymentIntentCanceledMerchantEventDataPreviousAttributes.return_resolution_id](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributesreturn_resolution_id).

### PaymentIntentRequiresActionInstalledMerchantsEventData.previous_attributes.selected_payment_option

Declared alternatives: [PaymentIntentCanceledMerchantEventDataPreviousAttributes.selected_payment_option](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributesselected_payment_option).

### PaymentIntentRequiresActionInstalledMerchantsEventData.previous_attributes.splits

Declared alternatives: [PaymentIntentCanceledMerchantEventDataPreviousAttributes.splits](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributessplits).

### PaymentIntentRequiresActionInstalledMerchantsEventData.previous_attributes.statement_descriptor

Declared alternatives: [PaymentIntentCanceledMerchantEventDataPreviousAttributes.statement_descriptor](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributesstatement_descriptor).

### PaymentIntentRequiresActionInstalledMerchantsEventData.previous_attributes.status

Declared alternatives: [PaymentIntentCanceledMerchantEventDataPreviousAttributes.status](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributesstatus).

### PaymentIntentRequiresActionInstalledMerchantsEventData.previous_attributes.subscription_id

Declared alternatives: [PaymentIntentCanceledMerchantEventDataPreviousAttributes.subscription_id](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributessubscription_id).

### PaymentIntentRequiresActionInstalledMerchantsEventData.previous_attributes.support_reference

Declared alternatives: [PaymentIntentCanceledMerchantEventDataPreviousAttributes.support_reference](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributessupport_reference).

### PaymentIntentRequiresActionInstalledMerchantsEventData.previous_attributes.supported_actions

Declared alternatives: [PaymentIntentCanceledMerchantEventDataPreviousAttributes.supported_actions](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributessupported_actions).

### PaymentIntentRequiresActionInstalledMerchantsEventData.previous_attributes.transaction_purpose

Declared alternatives: [PaymentIntentCanceledMerchantEventDataPreviousAttributes.transaction_purpose](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributestransaction_purpose).

### PaymentIntentRequiresActionInstalledMerchantsEventData.previous_attributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### PaymentIntentRequiresActionInstalledMerchantsEventData.previous_attributes.version

Declared alternatives: [PaymentSplitCanceledEvent.data fields 1.previous_attributes.version](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdata-fields-1previous_attributesversion).

