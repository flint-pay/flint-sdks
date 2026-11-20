[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentIntentCanceledInstalledMerchantsEventInput

The `payment_intent.canceled` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. Example: `"2026-08-02"`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `data` | Required | object | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/PaymentIntentCanceledInstalledMerchantsEventInput.md#paymentintentcanceledinstalledmerchantseventinputdata). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"installed_merchants"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"payment_intent.canceled"`. |
| `partner_app_id` | Required | string | ID of the partner app that owns the receiving endpoint. Example: `"papp_01KEZF7C00Y8VMXYZ1GNPP3WHV"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [PartnerWebhookEnvelopeSourceInput](../models/PartnerWebhookEnvelopeSourceInput.md#partnerwebhookenvelopesourceinput) and object | The merchant and partner app install this event concerns, with environment details for installed-merchant events. The merchant and partner app install the event concerns. Environment fields are present for installed-merchant events. `source`: [field definitions](../models/BalanceTransactionCreatedInstalledMerchantsEventInput.md#balancetransactioncreatedinstalledmerchantseventinputsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. Example: `"whev_01KEZF7C00362MS3HV970TRZGS"`. |

### PaymentIntentCanceledInstalledMerchantsEventInput.data

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `actor` | Optional | [ReturnActorInput](../models/ReturnActorInput.md#returnactorinput) | Who caused this event, captured when the change commits. Omitted when the event predates actor attribution or attribution is unavailable. Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID. |
| `object` | Required | object and [WebhookPaymentIntentInput](../models/WebhookPaymentIntentInput.md#webhookpaymentintentinput) | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit these fields: `processing_fee_money`, `processing_fee_details`, `add_on_fees`, `merchant_net_money`, `payment_collection`, `remaining_refundable_money`. `object`: [field definitions](../models/PaymentIntentAuthorizationExpiringInstalledMerchantsEventInput.md#paymentintentauthorizationexpiringinstalledmerchantseventinputdataobject). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/PaymentIntentCanceledInstalledMerchantsEventInput.md#paymentintentcanceledinstalledmerchantseventinputdataprevious_attributes). |

### PaymentIntentCanceledInstalledMerchantsEventInput.data.object

Field definitions: [PaymentIntentAuthorizationExpiringInstalledMerchantsEventInput.data.object](../models/PaymentIntentAuthorizationExpiringInstalledMerchantsEventInput.md#paymentintentauthorizationexpiringinstalledmerchantseventinputdataobject).

### PaymentIntentCanceledInstalledMerchantsEventInput.data.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | The amount requested from the buyer, including any tip_money. Capturing doesn't change it: after a partial capture it still shows the requested amount, and captured_money shows what was collected. On a standalone payment intent, PATCH can change it only before the first confirmation attempt. An amount_money or tip_money change that leaves too little for stored splits returns LIMIT_EXCEEDED at the changed field with minimum_money. |
| `authorization_expires_at` | Optional | string or null | Effective Flint deadline to capture a manual-capture hold: the earlier of the provider capture deadline and any order resource guarantee. Order guarantees last at most 24 hours from the payment attempt start and may end earlier. Capture is refused at or after this time, even while status is requires_capture. Omitted until a hold is placed. `authorization_expires_at`: [declared alternatives](../models/PaymentIntentCanceledInstalledMerchantsEventInput.md#paymentintentcanceledinstalledmerchantseventinputdataprevious_attributesauthorization_expires_at). |
| `authorized_at` | Optional | string or null | When the processor authorized the payment. Absent until then. `authorized_at`: [declared alternatives](../models/PaymentIntentCanceledInstalledMerchantsEventInput.md#paymentintentcanceledinstalledmerchantseventinputdataprevious_attributesauthorized_at). |
| `authorized_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | The amount the processor authorized. It always equals amount_money and doesn't change once set, even when a capture collects more. On a payment intent canceled with cancellation_reason payment_returned, it equals the authorization Flint released instead. Absent until the payment is authorized, and on payments canceled before authorization. |
| `cancellation_reason` | Optional | string or null | Flint-normalized reason the payment intent was canceled. Present only while status is canceled. A cancellation without a specific reason returns payment_canceled. Absent while last_payment_error.code is payment_blocked and Flint has not identified money to return. Unknown processor values are returned as payment_canceled. Values: [9 declared values](#paymentintentcanceledinstalledmerchantseventinputdataprevious_attributes-cancellation_reason-values). `cancellation_reason`: [declared alternatives](../models/PaymentIntentCanceledInstalledMerchantsEventInput.md#paymentintentcanceledinstalledmerchantseventinputdataprevious_attributescancellation_reason). |
| `capturable_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | The part of the authorization you can still capture. Positive only while status is requires_capture, and zero after you capture or cancel or the authorization expires. The authorization lapses at authorization_expires_at, and a capture attempted after that fails even if this is positive. Absent until the payment is authorized. |
| `capture_method` | Optional | string or null | When money is collected. Defaults to automatic. Values: `"automatic"`, `"manual"`. `capture_method`: [declared alternatives](../models/BuyerExpandedPaymentIntentSummaryPreviousAttributesInput.md#buyerexpandedpaymentintentsummarypreviousattributesinputcapture_method). |
| `captured_at` | Optional | string or null | When money was captured. For automatic capture, this is when the payment succeeded. Absent until capture. `captured_at`: [declared alternatives](../models/PaymentIntentCanceledInstalledMerchantsEventInput.md#paymentintentcanceledinstalledmerchantseventinputdataprevious_attributescaptured_at). |
| `captured_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | The amount collected from the buyer, including captured_tip_money. Reconcile revenue and print receipts from this amount, not amount_money. Zero while a hold is open, and positive whenever status is succeeded. After an overcapture it is above authorized_money. Also positive on a payment intent canceled with cancellation_reason payment_returned: Flint captured the money and is returning it through a refund with reason payment_returned. processing_fee_money, merchant_net_money, and refunds are based on it. Absent until the payment is authorized. |
| `captured_tip_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | The part of captured_money that is a tip: the capture's tip_money when it sent one, otherwise the tip the authorization carried, at most captured_money. tip_money keeps the tip the authorization carried. Refunds return it last. Absent until the payment is captured. |
| `checkout_session_id` | Optional | string or null | Flint checkout session ID associated with this payment, when present. `checkout_session_id`: [declared alternatives](../models/PaymentIntentCanceledInstalledMerchantsEventInput.md#paymentintentcanceledinstalledmerchantseventinputdataprevious_attributescheckout_session_id). |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |
| `customer` | Optional | [ExpandedCustomerSummaryPreviousAttributesInput](../models/ExpandedCustomerSummaryPreviousAttributesInput.md#expandedcustomersummarypreviousattributesinput) or null | The linked customer. Returned only with expand=customer. Present only when `expand` includes `customer`; `null` when expanded and there is no related customer. |
| `customer_id` | Optional | string or null | Customer linked to this payment intent. `customer_id`: [declared alternatives](../models/BuyerExpandedPaymentIntentSummaryPreviousAttributesInput.md#buyerexpandedpaymentintentsummarypreviousattributesinputcustomer_id). |
| `customer_presence` | Optional | string or null | Whether the customer was present for the most recent confirmation. absent means Flint charged a saved card without them, as a merchant-initiated payment on its stored credential. Subscription renewals and automatic invoice charges are absent, and other payments are absent only when confirmed or paid with customer_presence absent. A customer who pays any of them with a card they enter makes it present. Each confirmation sets it again. Values: `"present"`, `"absent"`. `customer_presence`: [declared alternatives](../models/PaymentIntentCanceledInstalledMerchantsEventInput.md#paymentintentcanceledinstalledmerchantseventinputdataprevious_attributescustomer_presence). |
| `dispute_status` | Optional | string or null | Dispute state of this payment. none means no dispute or inquiry is open or recorded. The inquiry_ values track an issuer inquiry or early warning that isn't a chargeback. Read the dispute with GET /v1/disputes for its deadline and evidence. Values: [10 declared values](#paymentintentcanceledinstalledmerchantseventinputdataprevious_attributes-dispute_status-values). `dispute_status`: [declared alternatives](../models/BuyerExpandedPaymentIntentSummaryPreviousAttributesInput.md#buyerexpandedpaymentintentsummarypreviousattributesinputdispute_status). |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. `null` when no external reference ID has been set on the payment intent. `external_reference_id`: [declared alternatives](../models/PaymentIntentCanceledInstalledMerchantsEventInput.md#paymentintentcanceledinstalledmerchantseventinputdataprevious_attributesexternal_reference_id). |
| `failed_attempt_count` | Optional | integer or null | All-time failed-attempt count. Present on merchant reads; omitted for buyer credentials. `failed_attempt_count`: [declared alternatives](../models/PaymentIntentCanceledInstalledMerchantsEventInput.md#paymentintentcanceledinstalledmerchantseventinputdataprevious_attributesfailed_attempt_count). |
| `failed_attempts` | Optional | Array of [FailedPaymentAttemptPreviousAttributesInput](../models/FailedPaymentAttemptPreviousAttributesInput.md#failedpaymentattemptpreviousattributesinput) or null | Newest 50 failed attempts, newest first, with merchant-only card and buyer evidence frozen at admission. Older attempts can be included in failed_attempt_count. `failed_attempts`: [declared alternatives](../models/PaymentIntentCanceledInstalledMerchantsEventInput.md#paymentintentcanceledinstalledmerchantseventinputdataprevious_attributesfailed_attempts). |
| `fulfillment_hold` | Optional | [PaymentFulfillmentHoldPreviousAttributesInput](../models/PaymentFulfillmentHoldPreviousAttributesInput.md#paymentfulfillmentholdpreviousattributesinput) or null | Present when a payment provider asked Flint to pause fulfillment for this payment. While its status is active, open fulfillments on the order are on hold with reason payment_review. payment_intent.fulfillment_hold_updated is sent when the hold starts and when it lifts. |
| `idempotency_key` | Optional | string or null | The Idempotency-Key of the request that created this resource. `null` when that request sent no key, Flint created the resource, the reader isn't the caller that created it (another app install, a buyer, or the merchant reading an app's or buyer's record), or the caller that created an older record is unknown. Filter its list with `idempotency_key` to find it. Recorded payloads, including replayed responses and webhook events, can return `null`. To find a key that a replay returns as `null`, read the resource. Buyer sessions on routes shared with merchants get `null`. `/v1/me` responses do not include this field. `idempotency_key`: [declared alternatives](../models/FulfillmentCanceledInstalledMerchantsEventInput.md#fulfillmentcanceledinstalledmerchantseventinputdataprevious_attributesidempotency_key). |
| `invoice` | Optional | [ExpandedInvoiceSummaryPreviousAttributesInput](../models/ExpandedInvoiceSummaryPreviousAttributesInput.md#expandedinvoicesummarypreviousattributesinput) or null | The linked invoice. Returned only with expand=invoice. Present only when `expand` includes `invoice`; `null` when expanded and there is no related invoice. |
| `invoice_id` | Optional | string or null | Invoice this payment intent collects, when it pays an invoice. `invoice_id`: [declared alternatives](../models/PaymentIntentCanceledInstalledMerchantsEventInput.md#paymentintentcanceledinstalledmerchantseventinputdataprevious_attributesinvoice_id). |
| `invoice_schedule_entry_id` | Optional | string or null | The invoice installment this payment collects. `invoice_schedule_entry_id`: [declared alternatives](../models/PaymentIntentCanceledInstalledMerchantsEventInput.md#paymentintentcanceledinstalledmerchantseventinputdataprevious_attributesinvoice_schedule_entry_id). |
| `last_payment_error` | Optional | [PaymentErrorSummaryPreviousAttributesInput](../models/PaymentErrorSummaryPreviousAttributesInput.md#paymenterrorsummarypreviousattributesinput) or null | Most recent payment error. Null when no payment error is recorded. |
| `latest_order_payment_attempt_id` | Optional | string or null | The order payment attempt that most recently used this payment intent. Start times count to the second; of attempts that started in the same second, the one with the highest order_payment_attempt_id is named. `null` when no attempt has used it yet; omitted for payment intents without an order. It changes only when an attempt starts using this payment intent, which advances version. Returned with merchant credentials; omitted with buyer and checkout credentials. `latest_order_payment_attempt_id`: [declared alternatives](../models/PaymentIntentCanceledInstalledMerchantsEventInput.md#paymentintentcanceledinstalledmerchantseventinputdataprevious_attributeslatest_order_payment_attempt_id). |
| `merchant_id` | Optional | string or null | Merchant that owns this payment intent. `merchant_id`: [declared alternatives](../models/PaymentIntentCanceledInstalledMerchantsEventInput.md#paymentintentcanceledinstalledmerchantseventinputdataprevious_attributesmerchant_id). |
| `metadata` | Optional | [MetadataMapPreviousAttributesInput](../models/MetadataMapPreviousAttributesInput.md#metadatamappreviousattributesinput) or null | Caller-owned metadata. Keys starting with flint_ are reserved for Flint and aren't returned. Always present with merchant credentials. |
| `order` | Optional | [ExpandedOrderSummaryPreviousAttributesInput](../models/ExpandedOrderSummaryPreviousAttributesInput.md#expandedordersummarypreviousattributesinput) or null | The linked order. Returned only with expand=order. Present only when `expand` includes `order`; `null` when expanded and there is no related order. |
| `order_edit_id` | Optional | string or null | The order edit whose balance this payment collects. Omitted when this payment doesn't collect an edit's balance. `order_edit_id`: [declared alternatives](../models/PaymentIntentCanceledInstalledMerchantsEventInput.md#paymentintentcanceledinstalledmerchantseventinputdataprevious_attributesorder_edit_id). |
| `order_id` | Optional | string or null | Order this payment intent belongs to. Create it through the order and confirm it with POST /v1/orders/{order_id}/pay. Capture and cancel use POST /v1/payment-intents/{payment_intent_id}/capture or /cancel for every payment intent. Order-owned intents accept PATCH for metadata and external_reference_id. `order_id`: [declared alternatives](../models/BuyerExpandedPaymentIntentSummaryPreviousAttributesInput.md#buyerexpandedpaymentintentsummarypreviousattributesinputorder_id). |
| `overcapture` | Optional | [PaymentIntentOvercapturePreviousAttributesInput](../models/PaymentIntentOvercapturePreviousAttributesInput.md#paymentintentovercapturepreviousattributesinput) or null | Whether one capture can collect more than the authorization, and the most it can collect. Present once a payment with request_overcapture true is authorized. Read it to show the limit; capture enforces it. |
| `payment_flow` | Optional | string or null | How the payment was started. Fixed when the payment intent is created. Values: `"checkout"`, `"payment_link"`, `"invoice"`, `"subscription_initial"`, `"subscription_renewal"`, `"virtual_terminal"`, `"api"`. `payment_flow`: [declared alternatives](../models/PaymentIntentCanceledInstalledMerchantsEventInput.md#paymentintentcanceledinstalledmerchantseventinputdataprevious_attributespayment_flow). |
| `payment_intent_id` | Optional | string or null | Flint payment intent ID. `payment_intent_id`: [declared alternatives](../models/BuyerExpandedPaymentIntentSummaryPreviousAttributesInput.md#buyerexpandedpaymentintentsummarypreviousattributesinputpayment_intent_id). |
| `payment_options` | Optional | Array of string or null | Payment options the buyer can use for this payment. Items values: `"card"`, `"apple_pay"`, `"google_pay"`, `"affirm"`, `"ach_debit"`, `"card_present"`. `payment_options`: [declared alternatives](../models/PaymentIntentCanceledInstalledMerchantsEventInput.md#paymentintentcanceledinstalledmerchantseventinputdataprevious_attributespayment_options). |
| `payment_source` | Optional | [PaymentSourceSummaryPreviousAttributesInput](../models/PaymentSourceSummaryPreviousAttributesInput.md#paymentsourcesummarypreviousattributesinput) or null | Summary of the card or bank account used for the payment. Absent until a payment source is attached. |
| `platform_fee` | Optional | [PaymentIntentPlatformFeePreviousAttributesInput](../models/PaymentIntentPlatformFeePreviousAttributesInput.md#paymentintentplatformfeepreviousattributesinput) or null | The platform fee a partner app charges on this payment, when it created the payment with an install token and a fee. Absent when the payment carries none. Returned only to merchant credentials; omitted for buyer and checkout credentials. |
| `reader_id` | Optional | string or null | The reader the payment is or was last presented on. Set when Flint presents it and kept afterward. While processing or requires_action with a reader_id and no payment_source.card.card_present, the payment is on that reader now. After a card is read, the payment can stay processing while Flint captures it. `reader_id`: [declared alternatives](../models/PaymentAttemptPaymentIntentPreviousAttributesInput.md#paymentattemptpaymentintentpreviousattributesinputreader_id). |
| `receipt_email` | Optional | string or null | Email address for this payment's receipt. When it isn't set, Flint uses the customer's email. `null` when no receipt email has been set on the payment intent. `receipt_email`: [declared alternatives](../models/PaymentIntentCanceledInstalledMerchantsEventInput.md#paymentintentcanceledinstalledmerchantseventinputdataprevious_attributesreceipt_email). |
| `refund_expires_at` | Optional | string or null | Last time Flint can refund this payment through the original payment method. A refund submitted at exactly this time is accepted; after it, refunds through the original payment method are refused. Today only Affirm has a refund window: 120 days after the payment settles. `null` when the method has no refund window, the payment has not succeeded with captured money, or its capture time is missing. Always present with merchant credentials. `refund_expires_at`: [declared alternatives](../models/PaymentIntentCanceledInstalledMerchantsEventInput.md#paymentintentcanceledinstalledmerchantseventinputdataprevious_attributesrefund_expires_at). |
| `refund_status` | Optional | string or null | How much of captured_money has been refunded, including value issued as store credit, based on refunded_money. Values: `"none"`, `"partially_refunded"`, `"refunded"`. `refund_status`: [declared alternatives](../models/BuyerExpandedPaymentIntentSummaryPreviousAttributesInput.md#buyerexpandedpaymentintentsummarypreviousattributesinputrefund_status). |
| `refunded_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Total refunded against captured_money, including value issued as store credit and processor refunds still pending. Failed and canceled refunds aren't counted. Zero when nothing has been refunded. |
| `released_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | The part of the authorization returned to the buyer without being charged: the uncaptured remainder after a partial capture, or the whole authorization after a cancellation or expiry. It was never collected, so it needs no refund and can't be captured later. Zero after a capture at or above the authorization. Absent until the payment is authorized. |
| `request_overcapture` | Optional | boolean or null | Whether one capture may collect more than the authorization where the card network allows it. Fixed at create. Always present with merchant credentials; omitted with buyer and checkout credentials. `request_overcapture`: [declared alternatives](../models/PaymentIntentCanceledInstalledMerchantsEventInput.md#paymentintentcanceledinstalledmerchantseventinputdataprevious_attributesrequest_overcapture). |
| `return_id` | Optional | string or null | Flint return ID associated with this payment, when present. `return_id`: [declared alternatives](../models/PaymentIntentCanceledInstalledMerchantsEventInput.md#paymentintentcanceledinstalledmerchantseventinputdataprevious_attributesreturn_id). |
| `return_resolution_id` | Optional | string or null | The return resolution whose balance this payment collects. Set for exchange balances and corrections. `return_resolution_id`: [declared alternatives](../models/PaymentIntentCanceledInstalledMerchantsEventInput.md#paymentintentcanceledinstalledmerchantseventinputdataprevious_attributesreturn_resolution_id). |
| `risk` | Optional | [PaymentRiskPreviousAttributesInput](../models/PaymentRiskPreviousAttributesInput.md#paymentriskpreviousattributesinput) or null | Risk assessment. Always present with merchant credentials. `null` when the payment intent's latest payment attempt has no completed risk assessment, such as before its first confirmation. Omitted with the checkout credential. |
| `selected_payment_option` | Optional | string or null | The payment option the most recent confirmation used. Absent until the payment intent is first confirmed. Values: `"card"`, `"apple_pay"`, `"google_pay"`, `"affirm"`, `"ach_debit"`, `"card_present"`. `selected_payment_option`: [declared alternatives](../models/PaymentIntentCanceledInstalledMerchantsEventInput.md#paymentintentcanceledinstalledmerchantseventinputdataprevious_attributesselected_payment_option). |
| `splits` | Optional | Array of [PaymentSplitPreviousAttributesInput](../models/PaymentSplitPreviousAttributesInput.md#paymentsplitpreviousattributesinput) or null | Top-level PaymentSplit children in their current state, embedded whole. Empty when the payment has no splits. Child changes do not send payment_intent.updated. Omitted for buyer and checkout credentials. `splits`: [declared alternatives](../models/PaymentIntentCanceledInstalledMerchantsEventInput.md#paymentintentcanceledinstalledmerchantseventinputdataprevious_attributessplits). |
| `statement_descriptor` | Optional | string or null | The text shown on the buyer's card or bank statement for this payment. `null` until the charge is created. `null` when the provider supplies no descriptor. Frozen when the charge is created. `statement_descriptor`: [declared alternatives](../models/PaymentIntentCanceledInstalledMerchantsEventInput.md#paymentintentcanceledinstalledmerchantseventinputdataprevious_attributesstatement_descriptor). |
| `status` | Optional | string or null | Lifecycle status. requires_payment_method covers both a new payment intent and one whose last attempt failed, so read last_payment_error with it. succeeded, canceled, and expired are final. Refunds and disputes never change status. Values: `"requires_payment_method"`, `"requires_confirmation"`, `"requires_action"`, `"processing"`, `"requires_capture"`, `"canceled"`, `"succeeded"`, `"expired"`. `status`: [declared alternatives](../models/BuyerExpandedPaymentIntentSummaryPreviousAttributesInput.md#buyerexpandedpaymentintentsummarypreviousattributesinputstatus). |
| `subscription_id` | Optional | string or null | The subscription whose billing charged this payment: its first charge, a renewal, a retry or a setup fee. Not set for the checkout payment that created a subscription. `subscription_id`: [declared alternatives](../models/PaymentIntentCanceledInstalledMerchantsEventInput.md#paymentintentcanceledinstalledmerchantseventinputdataprevious_attributessubscription_id). |
| `support_reference` | Optional | string or null | Opaque payment reference to share with merchant support. Do not parse its format. `support_reference`: [declared alternatives](../models/PaymentIntentCanceledInstalledMerchantsEventInput.md#paymentintentcanceledinstalledmerchantseventinputdataprevious_attributessupport_reference). |
| `supported_actions` | Optional | Array of string or null | Verbs this payment intent accepts now, each a POST to /v1/payment-intents/{payment_intent_id}/{action}. The list includes stored order facts and can change without a payment intent version change. Order legs list confirm when a single leg can pay the order or an open attempt can continue it. Several unpaid legs, selected gift cards, or automatic tax with a leg below the balance require pay_order instead. Invoice payments list only cancel. An unused first-period subscription payment lists cancel once the subscription is canceled. Order edit payments list confirm while awaiting payment details or action. A listed action can still be refused due to an open risk review, an order payment attempt, a closed order, or the merchant account. A managed_by_owner refusal names the owner and its command in remediation.next_actions. The merchant list is credential-independent. Checkout credentials receive that list filtered to confirm and cancel on their own session's intents, never capture. Customer sessions omit this field. New actions may be added. Items values: `"confirm"`, `"capture"`, `"cancel"`. `supported_actions`: [declared alternatives](../models/PaymentIntentCanceledInstalledMerchantsEventInput.md#paymentintentcanceledinstalledmerchantseventinputdataprevious_attributessupported_actions). |
| `tip_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Portion of amount_money that is a tip. Uses amount_money's currency and is at most amount_money. `null` when no tip is set, and for an order payment until its payment attempt has moved past requires_payment_method and requires_confirmation. An order payment without a tip can return an amount of 0 instead. |
| `transaction_purpose` | Optional | string or null | Why a bank debit is taken. Set only when payment_options includes ach_debit, and fixed once the payment intent exists. Values: `"goods"`, `"services"`, `"other"`. `transaction_purpose`: [declared alternatives](../models/PaymentIntentCanceledInstalledMerchantsEventInput.md#paymentintentcanceledinstalledmerchantseventinputdataprevious_attributestransaction_purpose). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |
| `version` | Optional | integer or null | Persisted version of this resource's owned state. Expanded resources and external observations can change independently. `version`: [declared alternatives](../models/BuyerExpandedPaymentIntentSummaryPreviousAttributesInput.md#buyerexpandedpaymentintentsummarypreviousattributesinputversion). |

#### PaymentIntentCanceledInstalledMerchantsEventInput.data.previous_attributes cancellation_reason values

- `"requested_by_customer"`
- `"duplicate"`
- `"fraudulent"`
- `"abandoned"`
- `"invoice_payment_failed"`
- `"invoice_voided"`
- `"order_closed"`
- `"payment_canceled"`
- `"payment_returned"`

#### PaymentIntentCanceledInstalledMerchantsEventInput.data.previous_attributes dispute_status values

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

### PaymentIntentCanceledInstalledMerchantsEventInput.data.previous_attributes.authorization_expires_at

### PaymentIntentCanceledInstalledMerchantsEventInput.data.previous_attributes.authorization_expires_at variant 1

anyOf variant 1: Effective Flint deadline to capture a manual-capture hold: the earlier of the provider capture deadline and any order resource guarantee. Order guarantees last at most 24 hours from the payment attempt start and may end earlier. Capture is refused at or after this time, even while status is requires_capture. Omitted until a hold is placed..

- Value shape: string. Effective Flint deadline to capture a manual-capture hold: the earlier of the provider capture deadline and any order resource guarantee. Order guarantees last at most 24 hours from the payment attempt start and may end earlier. Capture is refused at or after this time, even while status is requires_capture. Omitted until a hold is placed. Effective Flint deadline to capture a manual-capture hold: the earlier of the provider capture deadline and any order resource guarantee. Order guarantees last at most 24 hours from the payment attempt start and may end earlier. Capture is refused at or after this time, even while status is requires_capture. Omitted until a hold is placed. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### PaymentIntentCanceledInstalledMerchantsEventInput.data.previous_attributes.authorization_expires_at variant 2

anyOf variant 2.

- Value shape: null. Effective Flint deadline to capture a manual-capture hold: the earlier of the provider capture deadline and any order resource guarantee. Order guarantees last at most 24 hours from the payment attempt start and may end earlier. Capture is refused at or after this time, even while status is requires_capture. Omitted until a hold is placed. 

### PaymentIntentCanceledInstalledMerchantsEventInput.data.previous_attributes.authorized_at

### PaymentIntentCanceledInstalledMerchantsEventInput.data.previous_attributes.authorized_at variant 1

anyOf variant 1: When the processor authorized the payment. Absent until then..

- Value shape: string. When the processor authorized the payment. Absent until then. When the processor authorized the payment. Absent until then. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### PaymentIntentCanceledInstalledMerchantsEventInput.data.previous_attributes.authorized_at variant 2

anyOf variant 2.

- Value shape: null. When the processor authorized the payment. Absent until then. 

### PaymentIntentCanceledInstalledMerchantsEventInput.data.previous_attributes.cancellation_reason

### PaymentIntentCanceledInstalledMerchantsEventInput.data.previous_attributes.cancellation_reason variant 1

anyOf variant 1: Flint-normalized reason the payment intent was canceled. Present only while status is canceled. A cancellation without a specific reason returns payment_canceled. Absent while last_payment_error.code is payment_blocked and Flint has not identified money to return. Unknown processor values are returned as payment_canceled..

- Value shape: string. Flint-normalized reason the payment intent was canceled. Present only while status is canceled. A cancellation without a specific reason returns payment_canceled. Absent while last_payment_error.code is payment_blocked and Flint has not identified money to return. Unknown processor values are returned as payment_canceled. Values: `"requested_by_customer"`, `"duplicate"`, `"fraudulent"`, `"abandoned"`, `"invoice_payment_failed"`, `"invoice_voided"`, `"order_closed"`, `"payment_canceled"`, `"payment_returned"`.

### PaymentIntentCanceledInstalledMerchantsEventInput.data.previous_attributes.cancellation_reason variant 2

anyOf variant 2.

- Value shape: null. Flint-normalized reason the payment intent was canceled. Present only while status is canceled. A cancellation without a specific reason returns payment_canceled. Absent while last_payment_error.code is payment_blocked and Flint has not identified money to return. Unknown processor values are returned as payment_canceled. 

### PaymentIntentCanceledInstalledMerchantsEventInput.data.previous_attributes.capture_method

Declared alternatives: [BuyerExpandedPaymentIntentSummaryPreviousAttributesInput.capture_method](../models/BuyerExpandedPaymentIntentSummaryPreviousAttributesInput.md#buyerexpandedpaymentintentsummarypreviousattributesinputcapture_method).

### PaymentIntentCanceledInstalledMerchantsEventInput.data.previous_attributes.captured_at

### PaymentIntentCanceledInstalledMerchantsEventInput.data.previous_attributes.captured_at variant 1

anyOf variant 1: When money was captured. For automatic capture, this is when the payment succeeded. Absent until capture..

- Value shape: string. When money was captured. For automatic capture, this is when the payment succeeded. Absent until capture. When money was captured. For automatic capture, this is when the payment succeeded. Absent until capture. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### PaymentIntentCanceledInstalledMerchantsEventInput.data.previous_attributes.captured_at variant 2

anyOf variant 2.

- Value shape: null. When money was captured. For automatic capture, this is when the payment succeeded. Absent until capture. 

### PaymentIntentCanceledInstalledMerchantsEventInput.data.previous_attributes.checkout_session_id

### PaymentIntentCanceledInstalledMerchantsEventInput.data.previous_attributes.checkout_session_id variant 1

anyOf variant 1: Flint checkout session ID associated with this payment, when present..

- Value shape: string. Flint checkout session ID associated with this payment, when present. Flint checkout session ID associated with this payment, when present. Example: `"cs_01KEZF7C004JRWFW43H037MQRN"`. 

### PaymentIntentCanceledInstalledMerchantsEventInput.data.previous_attributes.checkout_session_id variant 2

anyOf variant 2.

- Value shape: null. Flint checkout session ID associated with this payment, when present. 

### PaymentIntentCanceledInstalledMerchantsEventInput.data.previous_attributes.created_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### PaymentIntentCanceledInstalledMerchantsEventInput.data.previous_attributes.customer_id

Declared alternatives: [BuyerExpandedPaymentIntentSummaryPreviousAttributesInput.customer_id](../models/BuyerExpandedPaymentIntentSummaryPreviousAttributesInput.md#buyerexpandedpaymentintentsummarypreviousattributesinputcustomer_id).

### PaymentIntentCanceledInstalledMerchantsEventInput.data.previous_attributes.customer_presence

### PaymentIntentCanceledInstalledMerchantsEventInput.data.previous_attributes.customer_presence variant 1

anyOf variant 1: Whether the customer was present for the most recent confirmation. absent means Flint charged a saved card without them, as a merchant-initiated payment on its stored credential. Subscription renewals and automatic invoice charges are absent, and other payments are absent only when confirmed or paid with customer_presence absent. A customer who pays any of them with a card they enter makes it present. Each confirmation sets it again..

- Value shape: string. Whether the customer was present for the most recent confirmation. absent means Flint charged a saved card without them, as a merchant-initiated payment on its stored credential. Subscription renewals and automatic invoice charges are absent, and other payments are absent only when confirmed or paid with customer_presence absent. A customer who pays any of them with a card they enter makes it present. Each confirmation sets it again. Values: `"present"`, `"absent"`.

### PaymentIntentCanceledInstalledMerchantsEventInput.data.previous_attributes.customer_presence variant 2

anyOf variant 2.

- Value shape: null. Whether the customer was present for the most recent confirmation. absent means Flint charged a saved card without them, as a merchant-initiated payment on its stored credential. Subscription renewals and automatic invoice charges are absent, and other payments are absent only when confirmed or paid with customer_presence absent. A customer who pays any of them with a card they enter makes it present. Each confirmation sets it again. 

### PaymentIntentCanceledInstalledMerchantsEventInput.data.previous_attributes.dispute_status

Declared alternatives: [BuyerExpandedPaymentIntentSummaryPreviousAttributesInput.dispute_status](../models/BuyerExpandedPaymentIntentSummaryPreviousAttributesInput.md#buyerexpandedpaymentintentsummarypreviousattributesinputdispute_status).

### PaymentIntentCanceledInstalledMerchantsEventInput.data.previous_attributes.external_reference_id

### PaymentIntentCanceledInstalledMerchantsEventInput.data.previous_attributes.external_reference_id variant 1

anyOf variant 1: Caller-owned identifier for this resource in an external system. `null` when no external reference ID has been set on the payment intent..

- Value shape: string. Caller-owned identifier for this resource in an external system. `null` when no external reference ID has been set on the payment intent. Caller-owned identifier for this resource in an external system. `null` when no external reference ID has been set on the payment intent. minLength: `1`. maxLength: `255`. Example: `"warehouse-1842"`. 

### PaymentIntentCanceledInstalledMerchantsEventInput.data.previous_attributes.external_reference_id variant 2

anyOf variant 2.

- Value shape: null. Caller-owned identifier for this resource in an external system. `null` when no external reference ID has been set on the payment intent. 

### PaymentIntentCanceledInstalledMerchantsEventInput.data.previous_attributes.failed_attempt_count

### PaymentIntentCanceledInstalledMerchantsEventInput.data.previous_attributes.failed_attempt_count variant 1

anyOf variant 1: All-time failed-attempt count. Present on merchant reads; omitted for buyer credentials..

- Value shape: integer. All-time failed-attempt count. Present on merchant reads; omitted for buyer credentials. All-time failed-attempt count. Present on merchant reads; omitted for buyer credentials. Format: `int64`. 

### PaymentIntentCanceledInstalledMerchantsEventInput.data.previous_attributes.failed_attempt_count variant 2

anyOf variant 2.

- Value shape: null. All-time failed-attempt count. Present on merchant reads; omitted for buyer credentials. 

### PaymentIntentCanceledInstalledMerchantsEventInput.data.previous_attributes.failed_attempts

### PaymentIntentCanceledInstalledMerchantsEventInput.data.previous_attributes.failed_attempts variant 1

anyOf variant 1: Newest 50 failed attempts, newest first, with merchant-only card and buyer evidence frozen at admission. Older attempts can be included in failed_attempt_count..

- Value shape: Array of [FailedPaymentAttemptPreviousAttributesInput](../models/FailedPaymentAttemptPreviousAttributesInput.md#failedpaymentattemptpreviousattributesinput). Newest 50 failed attempts, newest first, with merchant-only card and buyer evidence frozen at admission. Older attempts can be included in failed_attempt_count. 

### PaymentIntentCanceledInstalledMerchantsEventInput.data.previous_attributes.failed_attempts variant 2

anyOf variant 2.

- Value shape: null. Newest 50 failed attempts, newest first, with merchant-only card and buyer evidence frozen at admission. Older attempts can be included in failed_attempt_count. 

### PaymentIntentCanceledInstalledMerchantsEventInput.data.previous_attributes.idempotency_key

Declared alternatives: [FulfillmentCanceledInstalledMerchantsEventInput.data.previous_attributes.idempotency_key](../models/FulfillmentCanceledInstalledMerchantsEventInput.md#fulfillmentcanceledinstalledmerchantseventinputdataprevious_attributesidempotency_key).

### PaymentIntentCanceledInstalledMerchantsEventInput.data.previous_attributes.invoice_id

### PaymentIntentCanceledInstalledMerchantsEventInput.data.previous_attributes.invoice_id variant 1

anyOf variant 1: Invoice this payment intent collects, when it pays an invoice..

- Value shape: string. Invoice this payment intent collects, when it pays an invoice. Invoice this payment intent collects, when it pays an invoice. Example: `"inv_01KEZF7C00A5GEBMWHEAJFSAR4"`. 

### PaymentIntentCanceledInstalledMerchantsEventInput.data.previous_attributes.invoice_id variant 2

anyOf variant 2.

- Value shape: null. Invoice this payment intent collects, when it pays an invoice. 

### PaymentIntentCanceledInstalledMerchantsEventInput.data.previous_attributes.invoice_schedule_entry_id

### PaymentIntentCanceledInstalledMerchantsEventInput.data.previous_attributes.invoice_schedule_entry_id variant 1

anyOf variant 1: The invoice installment this payment collects..

- Value shape: string. The invoice installment this payment collects. The invoice installment this payment collects. Example: `"invse_01KEZF7C006JCPQBD8VZ0RNT6R"`. 

### PaymentIntentCanceledInstalledMerchantsEventInput.data.previous_attributes.invoice_schedule_entry_id variant 2

anyOf variant 2.

- Value shape: null. The invoice installment this payment collects. 

### PaymentIntentCanceledInstalledMerchantsEventInput.data.previous_attributes.latest_order_payment_attempt_id

### PaymentIntentCanceledInstalledMerchantsEventInput.data.previous_attributes.latest_order_payment_attempt_id variant 1

anyOf variant 1: The order payment attempt that most recently used this payment intent. Start times count to the second; of attempts that started in the same second, the one with the highest order_payment_attempt_id is named. `null` when no attempt has used it yet; omitted for payment intents without an order. It changes only when an attempt starts using this payment intent, which advances version. Returned with merchant credentials; omitted with buyer and checkout credentials..

- Value shape: string. The order payment attempt that most recently used this payment intent. Start times count to the second; of attempts that started in the same second, the one with the highest order_payment_attempt_id is named. `null` when no attempt has used it yet; omitted for payment intents without an order. It changes only when an attempt starts using this payment intent, which advances version. Returned with merchant credentials; omitted with buyer and checkout credentials. The order payment attempt that most recently used this payment intent. Start times count to the second; of attempts that started in the same second, the one with the highest order_payment_attempt_id is named. `null` when no attempt has used it yet; omitted for payment intents without an order. It changes only when an attempt starts using this payment intent, which advances version. Returned with merchant credentials; omitted with buyer and checkout credentials. Example: `"opat_01KEZF7C00B5PW9F2R8A4YSH5D"`. 

### PaymentIntentCanceledInstalledMerchantsEventInput.data.previous_attributes.latest_order_payment_attempt_id variant 2

anyOf variant 2.

- Value shape: null. The order payment attempt that most recently used this payment intent. Start times count to the second; of attempts that started in the same second, the one with the highest order_payment_attempt_id is named. `null` when no attempt has used it yet; omitted for payment intents without an order. It changes only when an attempt starts using this payment intent, which advances version. Returned with merchant credentials; omitted with buyer and checkout credentials. 

### PaymentIntentCanceledInstalledMerchantsEventInput.data.previous_attributes.merchant_id

### PaymentIntentCanceledInstalledMerchantsEventInput.data.previous_attributes.merchant_id variant 1

anyOf variant 1: Merchant that owns this payment intent..

- Value shape: string. Merchant that owns this payment intent. Merchant that owns this payment intent. Example: `"mer_01KEZF7C00KPYH1DDFPCCX3B6E"`. 

### PaymentIntentCanceledInstalledMerchantsEventInput.data.previous_attributes.merchant_id variant 2

anyOf variant 2.

- Value shape: null. Merchant that owns this payment intent. 

### PaymentIntentCanceledInstalledMerchantsEventInput.data.previous_attributes.order_edit_id

### PaymentIntentCanceledInstalledMerchantsEventInput.data.previous_attributes.order_edit_id variant 1

anyOf variant 1: The order edit whose balance this payment collects. Omitted when this payment doesn't collect an edit's balance..

- Value shape: string. The order edit whose balance this payment collects. Omitted when this payment doesn't collect an edit's balance. The order edit whose balance this payment collects. Omitted when this payment doesn't collect an edit's balance. Example: `"oed_01KEZF7C00A6BQ4TBGWFDJ944A"`. 

### PaymentIntentCanceledInstalledMerchantsEventInput.data.previous_attributes.order_edit_id variant 2

anyOf variant 2.

- Value shape: null. The order edit whose balance this payment collects. Omitted when this payment doesn't collect an edit's balance. 

### PaymentIntentCanceledInstalledMerchantsEventInput.data.previous_attributes.order_id

Declared alternatives: [BuyerExpandedPaymentIntentSummaryPreviousAttributesInput.order_id](../models/BuyerExpandedPaymentIntentSummaryPreviousAttributesInput.md#buyerexpandedpaymentintentsummarypreviousattributesinputorder_id).

### PaymentIntentCanceledInstalledMerchantsEventInput.data.previous_attributes.payment_flow

### PaymentIntentCanceledInstalledMerchantsEventInput.data.previous_attributes.payment_flow variant 1

anyOf variant 1: How the payment was started. Fixed when the payment intent is created..

- Value shape: string. How the payment was started. Fixed when the payment intent is created. Values: `"checkout"`, `"payment_link"`, `"invoice"`, `"subscription_initial"`, `"subscription_renewal"`, `"virtual_terminal"`, `"api"`.

### PaymentIntentCanceledInstalledMerchantsEventInput.data.previous_attributes.payment_flow variant 2

anyOf variant 2.

- Value shape: null. How the payment was started. Fixed when the payment intent is created. 

### PaymentIntentCanceledInstalledMerchantsEventInput.data.previous_attributes.payment_intent_id

Declared alternatives: [BuyerExpandedPaymentIntentSummaryPreviousAttributesInput.payment_intent_id](../models/BuyerExpandedPaymentIntentSummaryPreviousAttributesInput.md#buyerexpandedpaymentintentsummarypreviousattributesinputpayment_intent_id).

### PaymentIntentCanceledInstalledMerchantsEventInput.data.previous_attributes.payment_options

### PaymentIntentCanceledInstalledMerchantsEventInput.data.previous_attributes.payment_options variant 1

anyOf variant 1: Payment options the buyer can use for this payment..

- Value shape: Array of string. Payment options the buyer can use for this payment. Items values: `"card"`, `"apple_pay"`, `"google_pay"`, `"affirm"`, `"ach_debit"`, `"card_present"`.

### PaymentIntentCanceledInstalledMerchantsEventInput.data.previous_attributes.payment_options variant 2

anyOf variant 2.

- Value shape: null. Payment options the buyer can use for this payment. 

### PaymentIntentCanceledInstalledMerchantsEventInput.data.previous_attributes.reader_id

Declared alternatives: [PaymentAttemptPaymentIntentPreviousAttributesInput.reader_id](../models/PaymentAttemptPaymentIntentPreviousAttributesInput.md#paymentattemptpaymentintentpreviousattributesinputreader_id).

### PaymentIntentCanceledInstalledMerchantsEventInput.data.previous_attributes.receipt_email

### PaymentIntentCanceledInstalledMerchantsEventInput.data.previous_attributes.receipt_email variant 1

anyOf variant 1: Email address for this payment's receipt. When it isn't set, Flint uses the customer's email. `null` when no receipt email has been set on the payment intent..

- Value shape: string. Email address for this payment's receipt. When it isn't set, Flint uses the customer's email. `null` when no receipt email has been set on the payment intent. Email address for this payment's receipt. When it isn't set, Flint uses the customer's email. `null` when no receipt email has been set on the payment intent. Format: `email`. maxLength: `255`. Example: `"buyer@example.com"`. 

### PaymentIntentCanceledInstalledMerchantsEventInput.data.previous_attributes.receipt_email variant 2

anyOf variant 2.

- Value shape: null. Email address for this payment's receipt. When it isn't set, Flint uses the customer's email. `null` when no receipt email has been set on the payment intent. 

### PaymentIntentCanceledInstalledMerchantsEventInput.data.previous_attributes.refund_expires_at

### PaymentIntentCanceledInstalledMerchantsEventInput.data.previous_attributes.refund_expires_at variant 1

anyOf variant 1: Last time Flint can refund this payment through the original payment method. A refund submitted at exactly this time is accepted; after it, refunds through the original payment method are refused. Today only Affirm has a refund window: 120 days after the payment settles. `null` when the method has no refund window, the payment has not succeeded with captured money, or its capture time is missing. Always present with merchant credentials..

- Value shape: string. Last time Flint can refund this payment through the original payment method. A refund submitted at exactly this time is accepted; after it, refunds through the original payment method are refused. Today only Affirm has a refund window: 120 days after the payment settles. `null` when the method has no refund window, the payment has not succeeded with captured money, or its capture time is missing. Always present with merchant credentials. Last time Flint can refund this payment through the original payment method. A refund submitted at exactly this time is accepted; after it, refunds through the original payment method are refused. Today only Affirm has a refund window: 120 days after the payment settles. `null` when the method has no refund window, the payment has not succeeded with captured money, or its capture time is missing. Always present with merchant credentials. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### PaymentIntentCanceledInstalledMerchantsEventInput.data.previous_attributes.refund_expires_at variant 2

anyOf variant 2.

- Value shape: null. Last time Flint can refund this payment through the original payment method. A refund submitted at exactly this time is accepted; after it, refunds through the original payment method are refused. Today only Affirm has a refund window: 120 days after the payment settles. `null` when the method has no refund window, the payment has not succeeded with captured money, or its capture time is missing. Always present with merchant credentials. 

### PaymentIntentCanceledInstalledMerchantsEventInput.data.previous_attributes.refund_status

Declared alternatives: [BuyerExpandedPaymentIntentSummaryPreviousAttributesInput.refund_status](../models/BuyerExpandedPaymentIntentSummaryPreviousAttributesInput.md#buyerexpandedpaymentintentsummarypreviousattributesinputrefund_status).

### PaymentIntentCanceledInstalledMerchantsEventInput.data.previous_attributes.request_overcapture

### PaymentIntentCanceledInstalledMerchantsEventInput.data.previous_attributes.request_overcapture variant 1

anyOf variant 1: Whether one capture may collect more than the authorization where the card network allows it. Fixed at create. Always present with merchant credentials; omitted with buyer and checkout credentials..

- Value shape: boolean. Whether one capture may collect more than the authorization where the card network allows it. Fixed at create. Always present with merchant credentials; omitted with buyer and checkout credentials. 

### PaymentIntentCanceledInstalledMerchantsEventInput.data.previous_attributes.request_overcapture variant 2

anyOf variant 2.

- Value shape: null. Whether one capture may collect more than the authorization where the card network allows it. Fixed at create. Always present with merchant credentials; omitted with buyer and checkout credentials. 

### PaymentIntentCanceledInstalledMerchantsEventInput.data.previous_attributes.return_id

### PaymentIntentCanceledInstalledMerchantsEventInput.data.previous_attributes.return_id variant 1

anyOf variant 1: Flint return ID associated with this payment, when present..

- Value shape: string. Flint return ID associated with this payment, when present. Flint return ID associated with this payment, when present. Example: `"ret_01KEZF7C00PG93650ZKVQNGF7X"`. 

### PaymentIntentCanceledInstalledMerchantsEventInput.data.previous_attributes.return_id variant 2

anyOf variant 2.

- Value shape: null. Flint return ID associated with this payment, when present. 

### PaymentIntentCanceledInstalledMerchantsEventInput.data.previous_attributes.return_resolution_id

### PaymentIntentCanceledInstalledMerchantsEventInput.data.previous_attributes.return_resolution_id variant 1

anyOf variant 1: The return resolution whose balance this payment collects. Set for exchange balances and corrections..

- Value shape: string. The return resolution whose balance this payment collects. Set for exchange balances and corrections. The return resolution whose balance this payment collects. Set for exchange balances and corrections. Example: `"retres_01KEZF7C00C7RZJN31W9SGMEQ3"`. 

### PaymentIntentCanceledInstalledMerchantsEventInput.data.previous_attributes.return_resolution_id variant 2

anyOf variant 2.

- Value shape: null. The return resolution whose balance this payment collects. Set for exchange balances and corrections. 

### PaymentIntentCanceledInstalledMerchantsEventInput.data.previous_attributes.selected_payment_option

### PaymentIntentCanceledInstalledMerchantsEventInput.data.previous_attributes.selected_payment_option variant 1

anyOf variant 1: The payment option the most recent confirmation used. Absent until the payment intent is first confirmed..

- Value shape: string. The payment option the most recent confirmation used. Absent until the payment intent is first confirmed. Values: `"card"`, `"apple_pay"`, `"google_pay"`, `"affirm"`, `"ach_debit"`, `"card_present"`.

### PaymentIntentCanceledInstalledMerchantsEventInput.data.previous_attributes.selected_payment_option variant 2

anyOf variant 2.

- Value shape: null. The payment option the most recent confirmation used. Absent until the payment intent is first confirmed. 

### PaymentIntentCanceledInstalledMerchantsEventInput.data.previous_attributes.splits

### PaymentIntentCanceledInstalledMerchantsEventInput.data.previous_attributes.splits variant 1

anyOf variant 1: Top-level PaymentSplit children in their current state, embedded whole. Empty when the payment has no splits. Child changes do not send payment_intent.updated. Omitted for buyer and checkout credentials..

- Value shape: Array of [PaymentSplitPreviousAttributesInput](../models/PaymentSplitPreviousAttributesInput.md#paymentsplitpreviousattributesinput). Top-level PaymentSplit children in their current state, embedded whole. Empty when the payment has no splits. Child changes do not send payment_intent.updated. Omitted for buyer and checkout credentials. 

### PaymentIntentCanceledInstalledMerchantsEventInput.data.previous_attributes.splits variant 2

anyOf variant 2.

- Value shape: null. Top-level PaymentSplit children in their current state, embedded whole. Empty when the payment has no splits. Child changes do not send payment_intent.updated. Omitted for buyer and checkout credentials. 

### PaymentIntentCanceledInstalledMerchantsEventInput.data.previous_attributes.statement_descriptor

### PaymentIntentCanceledInstalledMerchantsEventInput.data.previous_attributes.statement_descriptor variant 1

anyOf variant 1: The text shown on the buyer's card or bank statement for this payment. `null` until the charge is created. `null` when the provider supplies no descriptor. Frozen when the charge is created..

- Value shape: string. The text shown on the buyer's card or bank statement for this payment. `null` until the charge is created. `null` when the provider supplies no descriptor. Frozen when the charge is created. 

### PaymentIntentCanceledInstalledMerchantsEventInput.data.previous_attributes.statement_descriptor variant 2

anyOf variant 2.

- Value shape: null. The text shown on the buyer's card or bank statement for this payment. `null` until the charge is created. `null` when the provider supplies no descriptor. Frozen when the charge is created. 

### PaymentIntentCanceledInstalledMerchantsEventInput.data.previous_attributes.status

Declared alternatives: [BuyerExpandedPaymentIntentSummaryPreviousAttributesInput.status](../models/BuyerExpandedPaymentIntentSummaryPreviousAttributesInput.md#buyerexpandedpaymentintentsummarypreviousattributesinputstatus).

### PaymentIntentCanceledInstalledMerchantsEventInput.data.previous_attributes.subscription_id

### PaymentIntentCanceledInstalledMerchantsEventInput.data.previous_attributes.subscription_id variant 1

anyOf variant 1: The subscription whose billing charged this payment: its first charge, a renewal, a retry or a setup fee. Not set for the checkout payment that created a subscription..

- Value shape: string. The subscription whose billing charged this payment: its first charge, a renewal, a retry or a setup fee. Not set for the checkout payment that created a subscription. The subscription whose billing charged this payment: its first charge, a renewal, a retry or a setup fee. Not set for the checkout payment that created a subscription. Example: `"sub_01KEZF7C00BVRE8YDBXQB74BBM"`. 

### PaymentIntentCanceledInstalledMerchantsEventInput.data.previous_attributes.subscription_id variant 2

anyOf variant 2.

- Value shape: null. The subscription whose billing charged this payment: its first charge, a renewal, a retry or a setup fee. Not set for the checkout payment that created a subscription. 

### PaymentIntentCanceledInstalledMerchantsEventInput.data.previous_attributes.support_reference

### PaymentIntentCanceledInstalledMerchantsEventInput.data.previous_attributes.support_reference variant 1

anyOf variant 1: Opaque payment reference to share with merchant support. Do not parse its format..

- Value shape: string. Opaque payment reference to share with merchant support. Do not parse its format. 

### PaymentIntentCanceledInstalledMerchantsEventInput.data.previous_attributes.support_reference variant 2

anyOf variant 2.

- Value shape: null. Opaque payment reference to share with merchant support. Do not parse its format. 

### PaymentIntentCanceledInstalledMerchantsEventInput.data.previous_attributes.supported_actions

### PaymentIntentCanceledInstalledMerchantsEventInput.data.previous_attributes.supported_actions variant 1

anyOf variant 1: Verbs this payment intent accepts now, each a POST to /v1/payment-intents/{payment_intent_id}/{action}. The list includes stored order facts and can change without a payment intent version change. Order legs list confirm when a single leg can pay the order or an open attempt can continue it. Several unpaid legs, selected gift cards, or automatic tax with a leg below the balance require pay_order instead. Invoice payments list only cancel. An unused first-period subscription payment lists cancel once the subscription is canceled. Order edit payments list confirm while awaiting payment details or action. A listed action can still be refused due to an open risk review, an order payment attempt, a closed order, or the merchant account. A managed_by_owner refusal names the owner and its command in remediation.next_actions. The merchant list is credential-independent. Checkout credentials receive that list filtered to confirm and cancel on their own session's intents, never capture. Customer sessions omit this field. New actions may be added..

- Value shape: Array of string. Verbs this payment intent accepts now, each a POST to /v1/payment-intents/{payment_intent_id}/{action}. The list includes stored order facts and can change without a payment intent version change. Order legs list confirm when a single leg can pay the order or an open attempt can continue it. Several unpaid legs, selected gift cards, or automatic tax with a leg below the balance require pay_order instead. Invoice payments list only cancel. An unused first-period subscription payment lists cancel once the subscription is canceled. Order edit payments list confirm while awaiting payment details or action. A listed action can still be refused due to an open risk review, an order payment attempt, a closed order, or the merchant account. A managed_by_owner refusal names the owner and its command in remediation.next_actions. The merchant list is credential-independent. Checkout credentials receive that list filtered to confirm and cancel on their own session's intents, never capture. Customer sessions omit this field. New actions may be added. Items values: `"confirm"`, `"capture"`, `"cancel"`.

### PaymentIntentCanceledInstalledMerchantsEventInput.data.previous_attributes.supported_actions variant 2

anyOf variant 2.

- Value shape: null. Verbs this payment intent accepts now, each a POST to /v1/payment-intents/{payment_intent_id}/{action}. The list includes stored order facts and can change without a payment intent version change. Order legs list confirm when a single leg can pay the order or an open attempt can continue it. Several unpaid legs, selected gift cards, or automatic tax with a leg below the balance require pay_order instead. Invoice payments list only cancel. An unused first-period subscription payment lists cancel once the subscription is canceled. Order edit payments list confirm while awaiting payment details or action. A listed action can still be refused due to an open risk review, an order payment attempt, a closed order, or the merchant account. A managed_by_owner refusal names the owner and its command in remediation.next_actions. The merchant list is credential-independent. Checkout credentials receive that list filtered to confirm and cancel on their own session's intents, never capture. Customer sessions omit this field. New actions may be added. 

### PaymentIntentCanceledInstalledMerchantsEventInput.data.previous_attributes.transaction_purpose

### PaymentIntentCanceledInstalledMerchantsEventInput.data.previous_attributes.transaction_purpose variant 1

anyOf variant 1: Why a bank debit is taken. Set only when payment_options includes ach_debit, and fixed once the payment intent exists..

- Value shape: string. Why a bank debit is taken. Set only when payment_options includes ach_debit, and fixed once the payment intent exists. Values: `"goods"`, `"services"`, `"other"`.

### PaymentIntentCanceledInstalledMerchantsEventInput.data.previous_attributes.transaction_purpose variant 2

anyOf variant 2.

- Value shape: null. Why a bank debit is taken. Set only when payment_options includes ach_debit, and fixed once the payment intent exists. 

### PaymentIntentCanceledInstalledMerchantsEventInput.data.previous_attributes.updated_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### PaymentIntentCanceledInstalledMerchantsEventInput.data.previous_attributes.version

Declared alternatives: [BuyerExpandedPaymentIntentSummaryPreviousAttributesInput.version](../models/BuyerExpandedPaymentIntentSummaryPreviousAttributesInput.md#buyerexpandedpaymentintentsummarypreviousattributesinputversion).

### PaymentIntentCanceledInstalledMerchantsEventInput.source

Field definitions: [BalanceTransactionCreatedInstalledMerchantsEventInput.source](../models/BalanceTransactionCreatedInstalledMerchantsEventInput.md#balancetransactioncreatedinstalledmerchantseventinputsource).

