[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentIntentCanceledMerchantEvent

The `payment_intent.canceled` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. |
| `data` | Required | [PaymentIntentCanceledMerchantEventData](../models/PaymentIntentCanceledMerchantEventData.md#paymentintentcanceledmerchanteventdata) | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/PaymentIntentCanceledMerchantEvent.md#paymentintentcanceledmerchanteventdata-fields-1). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"merchant"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"payment_intent.canceled"`. |
| `merchant_id` | Required | string | ID of the merchant this resource belongs to. |
| `mode` | Required | string | Environment used for this resource or request. Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [PaymentIntentCanceledMerchantEventRequest](../models/PaymentIntentCanceledMerchantEventRequest.md#paymentintentcanceledmerchanteventrequest) or null | The originating request. `null` when the event has no originating request ID. |
| `sandbox_id` | Optional | string | Public sandbox ID for this event. Present exactly when mode is test; omitted in live mode. |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. |

### PaymentIntentCanceledMerchantEvent.data fields 1

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `actor` | Optional | [ReturnActor](../models/ReturnActor.md#returnactor) | Who caused this event, captured when the change commits. Omitted when the event predates actor attribution or attribution is unavailable. Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID. `actor`: [field definitions](../models/ApiKeyCreatedEvent.md#apikeycreatedeventdata-fields-1actor). |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit these fields: `processing_fee_money`, `processing_fee_details`, `add_on_fees`, `merchant_net_money`, `payment_collection`, `remaining_refundable_money`. `object`: [field definitions](../models/PaymentIntentAuthorizationExpiringMerchantEvent.md#paymentintentauthorizationexpiringmerchanteventdata-fields-1object). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/PaymentIntentCanceledMerchantEvent.md#paymentintentcanceledmerchanteventdata-fields-1previous_attributes). |

### PaymentIntentCanceledMerchantEvent.data fields 1.actor

Field definitions: [ApiKeyCreatedEvent.data fields 1.actor](../models/ApiKeyCreatedEvent.md#apikeycreatedeventdata-fields-1actor).

### PaymentIntentCanceledMerchantEvent.data fields 1.object

Field definitions: [PaymentIntentAuthorizationExpiringMerchantEvent.data fields 1.object](../models/PaymentIntentAuthorizationExpiringMerchantEvent.md#paymentintentauthorizationexpiringmerchanteventdata-fields-1object).

### PaymentIntentCanceledMerchantEvent.data fields 1.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The amount requested from the buyer, including any tip_money. Capturing doesn't change it: after a partial capture it still shows the requested amount, and captured_money shows what was collected. On a standalone payment intent, PATCH can change it only before the first confirmation attempt. An amount_money or tip_money change that leaves too little for stored splits returns LIMIT_EXCEEDED at the changed field with minimum_money. |
| `authorization_expires_at` | Optional | string or null | Effective Flint deadline to capture a manual-capture hold: the earlier of the provider capture deadline and any order resource guarantee. Order guarantees last at most 24 hours from the payment attempt start and may end earlier. Capture is refused at or after this time, even while status is requires_capture. Omitted until a hold is placed. `authorization_expires_at`: [declared alternatives](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributesauthorization_expires_at). |
| `authorized_at` | Optional | string or null | When the processor authorized the payment. Absent until then. `authorized_at`: [declared alternatives](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributesauthorized_at). |
| `authorized_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The amount the processor authorized. It always equals amount_money and doesn't change once set, even when a capture collects more. On a payment intent canceled with cancellation_reason payment_returned, it equals the authorization Flint released instead. Absent until the payment is authorized, and on payments canceled before authorization. |
| `cancellation_reason` | Optional | string or null | Flint-normalized reason the payment intent was canceled. Present only while status is canceled. A cancellation without a specific reason returns payment_canceled. Absent while last_payment_error.code is payment_blocked and Flint has not identified money to return. Unknown processor values are returned as payment_canceled. Values: [9 declared values](#paymentintentcanceledmerchanteventdata-fields-1previous_attributes-cancellation_reason-values). `cancellation_reason`: [declared alternatives](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributescancellation_reason). |
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
| `dispute_status` | Optional | string or null | Dispute state of this payment. none means no dispute or inquiry is open or recorded. The inquiry_ values track an issuer inquiry or early warning that isn't a chargeback. Read the dispute with GET /v1/disputes for its deadline and evidence. Values: [10 declared values](#paymentintentcanceledmerchanteventdata-fields-1previous_attributes-dispute_status-values). `dispute_status`: [declared alternatives](../models/ExpandedPaymentIntentSummaryPreviousAttributes.md#expandedpaymentintentsummarypreviousattributesdispute_status). |
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

#### PaymentIntentCanceledMerchantEvent.data fields 1.previous_attributes cancellation_reason values

- `"requested_by_customer"`
- `"duplicate"`
- `"fraudulent"`
- `"abandoned"`
- `"invoice_payment_failed"`
- `"invoice_voided"`
- `"order_closed"`
- `"payment_canceled"`
- `"payment_returned"`

#### PaymentIntentCanceledMerchantEvent.data fields 1.previous_attributes dispute_status values

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

### PaymentIntentCanceledMerchantEvent.data fields 1.previous_attributes.authorization_expires_at

Declared alternatives: [PaymentIntentCanceledMerchantEventDataPreviousAttributes.authorization_expires_at](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributesauthorization_expires_at).

### PaymentIntentCanceledMerchantEvent.data fields 1.previous_attributes.authorized_at

Declared alternatives: [PaymentIntentCanceledMerchantEventDataPreviousAttributes.authorized_at](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributesauthorized_at).

### PaymentIntentCanceledMerchantEvent.data fields 1.previous_attributes.cancellation_reason

Declared alternatives: [PaymentIntentCanceledMerchantEventDataPreviousAttributes.cancellation_reason](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributescancellation_reason).

### PaymentIntentCanceledMerchantEvent.data fields 1.previous_attributes.capture_method

Declared alternatives: [ExpandedPaymentIntentSummaryPreviousAttributes.capture_method](../models/ExpandedPaymentIntentSummaryPreviousAttributes.md#expandedpaymentintentsummarypreviousattributescapture_method).

### PaymentIntentCanceledMerchantEvent.data fields 1.previous_attributes.captured_at

Declared alternatives: [PaymentIntentCanceledMerchantEventDataPreviousAttributes.captured_at](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributescaptured_at).

### PaymentIntentCanceledMerchantEvent.data fields 1.previous_attributes.checkout_session_id

Declared alternatives: [PaymentIntentCanceledMerchantEventDataPreviousAttributes.checkout_session_id](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributescheckout_session_id).

### PaymentIntentCanceledMerchantEvent.data fields 1.previous_attributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### PaymentIntentCanceledMerchantEvent.data fields 1.previous_attributes.customer

Declared alternatives: [PaymentIntentCanceledMerchantEventDataPreviousAttributes.customer](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributescustomer).

### PaymentIntentCanceledMerchantEvent.data fields 1.previous_attributes.customer_id

Declared alternatives: [ExpandedPaymentIntentSummaryPreviousAttributes.customer_id](../models/ExpandedPaymentIntentSummaryPreviousAttributes.md#expandedpaymentintentsummarypreviousattributescustomer_id).

### PaymentIntentCanceledMerchantEvent.data fields 1.previous_attributes.customer_presence

Declared alternatives: [PaymentIntentCanceledMerchantEventDataPreviousAttributes.customer_presence](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributescustomer_presence).

### PaymentIntentCanceledMerchantEvent.data fields 1.previous_attributes.dispute_status

Declared alternatives: [ExpandedPaymentIntentSummaryPreviousAttributes.dispute_status](../models/ExpandedPaymentIntentSummaryPreviousAttributes.md#expandedpaymentintentsummarypreviousattributesdispute_status).

### PaymentIntentCanceledMerchantEvent.data fields 1.previous_attributes.external_reference_id

Declared alternatives: [PaymentIntentCanceledMerchantEventDataPreviousAttributes.external_reference_id](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributesexternal_reference_id).

### PaymentIntentCanceledMerchantEvent.data fields 1.previous_attributes.failed_attempt_count

Declared alternatives: [PaymentIntentCanceledMerchantEventDataPreviousAttributes.failed_attempt_count](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributesfailed_attempt_count).

### PaymentIntentCanceledMerchantEvent.data fields 1.previous_attributes.failed_attempts

Declared alternatives: [PaymentIntentCanceledMerchantEventDataPreviousAttributes.failed_attempts](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributesfailed_attempts).

### PaymentIntentCanceledMerchantEvent.data fields 1.previous_attributes.fulfillment_hold

Declared alternatives: [PaymentIntentCanceledMerchantEventDataPreviousAttributes.fulfillment_hold](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributesfulfillment_hold).

### PaymentIntentCanceledMerchantEvent.data fields 1.previous_attributes.idempotency_key

Declared alternatives: [WebhookSnapshotOrderPaymentAttemptPreviousAttributes.idempotency_key](../models/WebhookSnapshotOrderPaymentAttemptPreviousAttributes.md#webhooksnapshotorderpaymentattemptpreviousattributesidempotency_key).

### PaymentIntentCanceledMerchantEvent.data fields 1.previous_attributes.invoice

Declared alternatives: [PaymentIntentCanceledMerchantEventDataPreviousAttributes.invoice](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributesinvoice).

### PaymentIntentCanceledMerchantEvent.data fields 1.previous_attributes.invoice_id

Declared alternatives: [PaymentIntentCanceledMerchantEventDataPreviousAttributes.invoice_id](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributesinvoice_id).

### PaymentIntentCanceledMerchantEvent.data fields 1.previous_attributes.invoice_schedule_entry_id

Declared alternatives: [PaymentIntentCanceledMerchantEventDataPreviousAttributes.invoice_schedule_entry_id](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributesinvoice_schedule_entry_id).

### PaymentIntentCanceledMerchantEvent.data fields 1.previous_attributes.last_payment_error

Declared alternatives: [PaymentIntentCanceledMerchantEventDataPreviousAttributes.last_payment_error](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributeslast_payment_error).

### PaymentIntentCanceledMerchantEvent.data fields 1.previous_attributes.latest_order_payment_attempt_id

Declared alternatives: [PaymentIntentCanceledMerchantEventDataPreviousAttributes.latest_order_payment_attempt_id](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributeslatest_order_payment_attempt_id).

### PaymentIntentCanceledMerchantEvent.data fields 1.previous_attributes.merchant_id

Declared alternatives: [PaymentIntentCanceledMerchantEventDataPreviousAttributes.merchant_id](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributesmerchant_id).

### PaymentIntentCanceledMerchantEvent.data fields 1.previous_attributes.metadata

Declared alternatives: [PaymentIntentCanceledMerchantEventDataPreviousAttributes.metadata](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributesmetadata).

### PaymentIntentCanceledMerchantEvent.data fields 1.previous_attributes.order

Declared alternatives: [PaymentIntentCanceledMerchantEventDataPreviousAttributes.order](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributesorder).

### PaymentIntentCanceledMerchantEvent.data fields 1.previous_attributes.order_edit_id

Declared alternatives: [PaymentIntentCanceledMerchantEventDataPreviousAttributes.order_edit_id](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributesorder_edit_id).

### PaymentIntentCanceledMerchantEvent.data fields 1.previous_attributes.order_id

Declared alternatives: [ExpandedPaymentIntentSummaryPreviousAttributes.order_id](../models/ExpandedPaymentIntentSummaryPreviousAttributes.md#expandedpaymentintentsummarypreviousattributesorder_id).

### PaymentIntentCanceledMerchantEvent.data fields 1.previous_attributes.payment_flow

Declared alternatives: [PaymentIntentCanceledMerchantEventDataPreviousAttributes.payment_flow](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributespayment_flow).

### PaymentIntentCanceledMerchantEvent.data fields 1.previous_attributes.payment_intent_id

Declared alternatives: [PaymentAttemptPaymentIntentPreviousAttributes.payment_intent_id](../models/PaymentAttemptPaymentIntentPreviousAttributes.md#paymentattemptpaymentintentpreviousattributespayment_intent_id).

### PaymentIntentCanceledMerchantEvent.data fields 1.previous_attributes.payment_options

Declared alternatives: [PaymentIntentCanceledMerchantEventDataPreviousAttributes.payment_options](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributespayment_options).

### PaymentIntentCanceledMerchantEvent.data fields 1.previous_attributes.platform_fee

Declared alternatives: [PaymentIntentCanceledMerchantEventDataPreviousAttributes.platform_fee](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributesplatform_fee).

### PaymentIntentCanceledMerchantEvent.data fields 1.previous_attributes.reader_id

Declared alternatives: [PaymentAttemptPaymentIntentPreviousAttributes.reader_id](../models/PaymentAttemptPaymentIntentPreviousAttributes.md#paymentattemptpaymentintentpreviousattributesreader_id).

### PaymentIntentCanceledMerchantEvent.data fields 1.previous_attributes.receipt_email

Declared alternatives: [PaymentIntentCanceledMerchantEventDataPreviousAttributes.receipt_email](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributesreceipt_email).

### PaymentIntentCanceledMerchantEvent.data fields 1.previous_attributes.refund_expires_at

Declared alternatives: [PaymentIntentCanceledMerchantEventDataPreviousAttributes.refund_expires_at](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributesrefund_expires_at).

### PaymentIntentCanceledMerchantEvent.data fields 1.previous_attributes.refund_status

Declared alternatives: [ExpandedPaymentIntentSummaryPreviousAttributes.refund_status](../models/ExpandedPaymentIntentSummaryPreviousAttributes.md#expandedpaymentintentsummarypreviousattributesrefund_status).

### PaymentIntentCanceledMerchantEvent.data fields 1.previous_attributes.request_overcapture

Declared alternatives: [PaymentIntentCanceledMerchantEventDataPreviousAttributes.request_overcapture](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributesrequest_overcapture).

### PaymentIntentCanceledMerchantEvent.data fields 1.previous_attributes.return_id

Declared alternatives: [PaymentIntentCanceledMerchantEventDataPreviousAttributes.return_id](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributesreturn_id).

### PaymentIntentCanceledMerchantEvent.data fields 1.previous_attributes.return_resolution_id

Declared alternatives: [PaymentIntentCanceledMerchantEventDataPreviousAttributes.return_resolution_id](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributesreturn_resolution_id).

### PaymentIntentCanceledMerchantEvent.data fields 1.previous_attributes.risk

Declared alternatives: [PaymentIntentCanceledMerchantEventDataPreviousAttributes.risk](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributesrisk).

### PaymentIntentCanceledMerchantEvent.data fields 1.previous_attributes.selected_payment_option

Declared alternatives: [PaymentIntentCanceledMerchantEventDataPreviousAttributes.selected_payment_option](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributesselected_payment_option).

### PaymentIntentCanceledMerchantEvent.data fields 1.previous_attributes.splits

Declared alternatives: [PaymentIntentCanceledMerchantEventDataPreviousAttributes.splits](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributessplits).

### PaymentIntentCanceledMerchantEvent.data fields 1.previous_attributes.statement_descriptor

Declared alternatives: [PaymentIntentCanceledMerchantEventDataPreviousAttributes.statement_descriptor](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributesstatement_descriptor).

### PaymentIntentCanceledMerchantEvent.data fields 1.previous_attributes.status

Declared alternatives: [PaymentAttemptPaymentIntentPreviousAttributes.status](../models/PaymentAttemptPaymentIntentPreviousAttributes.md#paymentattemptpaymentintentpreviousattributesstatus).

### PaymentIntentCanceledMerchantEvent.data fields 1.previous_attributes.subscription_id

Declared alternatives: [PaymentIntentCanceledMerchantEventDataPreviousAttributes.subscription_id](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributessubscription_id).

### PaymentIntentCanceledMerchantEvent.data fields 1.previous_attributes.support_reference

Declared alternatives: [PaymentIntentCanceledMerchantEventDataPreviousAttributes.support_reference](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributessupport_reference).

### PaymentIntentCanceledMerchantEvent.data fields 1.previous_attributes.supported_actions

Declared alternatives: [PaymentIntentCanceledMerchantEventDataPreviousAttributes.supported_actions](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributessupported_actions).

### PaymentIntentCanceledMerchantEvent.data fields 1.previous_attributes.transaction_purpose

Declared alternatives: [PaymentIntentCanceledMerchantEventDataPreviousAttributes.transaction_purpose](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributestransaction_purpose).

### PaymentIntentCanceledMerchantEvent.data fields 1.previous_attributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### PaymentIntentCanceledMerchantEvent.data fields 1.previous_attributes.version

Declared alternatives: [PaymentSplitCanceledEvent.data fields 1.previous_attributes.version](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdata-fields-1previous_attributesversion).

