[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DisputeInquiryClosedMerchantEventDataPreviousAttributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Amount in dispute. For a chargeback, this amount left your balance when the case opened; an inquiry moves no money. |
| `can_respond_with_evidence` | Optional | boolean or null | Whether this dispute has an evidence response window. It stays true after the window closes or a decision is made. Use is_action_required to know whether a response is needed now. `can_respond_with_evidence`: [declared alternatives](../models/DisputeInquiryClosedMerchantEventDataPreviousAttributes.md#disputeinquiryclosedmerchanteventdatapreviousattributescan_respond_with_evidence). |
| `case_type` | Optional | string or null | Kind of case the card network or bank opened. `status` and `is_action_required` say whether a response is needed. Values: `"inquiry"`, `"chargeback"`, `"compliance"`, `"resolution"`, `"block"`, `"other"`, `"bank_return"`. `case_type`: [declared alternatives](../models/DisputeInquiryClosedMerchantEventDataPreviousAttributes.md#disputeinquiryclosedmerchanteventdatapreviousattributescase_type). |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `customer` | Optional | [ExpandedCustomerSummaryPreviousAttributes](../models/ExpandedCustomerSummaryPreviousAttributes.md#expandedcustomersummarypreviousattributes) or null | Present only when `expand` includes `customer`; `null` when expanded and there is no related customer. `customer`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributescustomer). |
| `customer_id` | Optional | string or null | The customer on the disputed payment. Absent when the payment has none. `customer_id`: [declared alternatives](../models/DisputeInquiryClosedMerchantEventDataPreviousAttributes.md#disputeinquiryclosedmerchanteventdatapreviousattributescustomer_id). |
| `dispute_id` | Optional | string or null | Stable identifier of the dispute. `dispute_id`: [declared alternatives](../models/DisputeInquiryClosedMerchantEventDataPreviousAttributes.md#disputeinquiryclosedmerchanteventdatapreviousattributesdispute_id). |
| `evidence_due_at` | Optional | string or null | Deadline for submitting evidence. Respond before it when is_action_required is true. `null` when the dispute has no response window, such as a bank return or a case your processor gave no deadline for. `evidence_due_at`: [declared alternatives](../models/DisputeInquiryClosedMerchantEventDataPreviousAttributes.md#disputeinquiryclosedmerchanteventdatapreviousattributesevidence_due_at). |
| `evidence_submission_count` | Optional | integer or null | How many times evidence was submitted for this dispute. 0 until you submit. `evidence_submission_count`: [declared alternatives](../models/DisputeInquiryClosedMerchantEventDataPreviousAttributes.md#disputeinquiryclosedmerchanteventdatapreviousattributesevidence_submission_count). |
| `fraud_warning_id` | Optional | string or null | The fraud warning the card network sent for this payment before the dispute. Absent when there was none. `fraud_warning_id`: [declared alternatives](../models/DisputeInquiryClosedMerchantEventDataPreviousAttributes.md#disputeinquiryclosedmerchanteventdatapreviousattributesfraud_warning_id). |
| `has_evidence` | Optional | boolean or null | Whether evidence is saved for this dispute, submitted or not. In test mode this includes an unsubmitted draft Flint saves when the dispute first needs a response, so it doesn't mean someone started a response. evidence_submission_count says whether evidence was submitted. `has_evidence`: [declared alternatives](../models/DisputeInquiryClosedMerchantEventDataPreviousAttributes.md#disputeinquiryclosedmerchanteventdatapreviousattributeshas_evidence). |
| `is_action_required` | Optional | boolean or null | True when status is needs_response or inquiry_needs_response, can_respond_with_evidence is true, and evidence_due_at hasn't passed. Evaluated when the dispute is read; in a webhook payload, as of when Flint recorded the change. It turns false once evidence_due_at has passed, with no event. `is_action_required`: [declared alternatives](../models/DisputeInquiryClosedMerchantEventDataPreviousAttributes.md#disputeinquiryclosedmerchanteventdatapreviousattributesis_action_required). |
| `is_evidence_deadline_passed` | Optional | boolean or null | Whether evidence_due_at has passed on a dispute with a response window. Always false when can_respond_with_evidence is false. Evaluated when the dispute is read; in a webhook payload, as of when Flint recorded the change. It turns true once evidence_due_at has passed, with no event. `is_evidence_deadline_passed`: [declared alternatives](../models/DisputeInquiryClosedMerchantEventDataPreviousAttributes.md#disputeinquiryclosedmerchanteventdatapreviousattributesis_evidence_deadline_passed). |
| `merchant_id` | Optional | string or null | ID of the merchant this resource belongs to. `merchant_id`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributesmerchant_id). |
| `network_reason_code` | Optional | string or null | Opaque reason code assigned by the card network. Read it with the disputed payment's card brand; codes differ by network. `null` when the network supplied no code or the supplied code has an unsupported shape. `network_reason_code`: [declared alternatives](../models/DisputeInquiryClosedMerchantEventDataPreviousAttributes.md#disputeinquiryclosedmerchanteventdatapreviousattributesnetwork_reason_code). |
| `order` | Optional | [ExpandedOrderSummaryPreviousAttributes](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributes) or null | Present only when `expand` includes `order`; `null` when expanded and there is no related order. `order`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesorder). |
| `order_id` | Optional | string or null | ID of the order the disputed payment was for. Absent when Flint can't link the dispute to an order. `order_id`: [declared alternatives](../models/DisputeInquiryClosedMerchantEventDataPreviousAttributes.md#disputeinquiryclosedmerchanteventdatapreviousattributesorder_id). |
| `payment_intent` | Optional | [ExpandedPaymentIntentSummaryPreviousAttributes](../models/ExpandedPaymentIntentSummaryPreviousAttributes.md#expandedpaymentintentsummarypreviousattributes) or null | Present only when `expand` includes `payment_intent`; `null` when expanded and there is no related payment intent. `payment_intent`: [declared alternatives](../models/DisputeInquiryClosedMerchantEventDataPreviousAttributes.md#disputeinquiryclosedmerchanteventdatapreviousattributespayment_intent). |
| `payment_intent_id` | Optional | string or null | ID of the payment intent that took the disputed payment. Absent when Flint can't link the dispute to a payment intent. `payment_intent_id`: [declared alternatives](../models/DisputeInquiryClosedMerchantEventDataPreviousAttributes.md#disputeinquiryclosedmerchanteventdatapreviousattributespayment_intent_id). |
| `payment_option` | Optional | string or null | How the buyer paid for the disputed payment. `null` when Flint hasn't linked the dispute to a payment intent that records a payment option. Values: `"card"`, `"apple_pay"`, `"google_pay"`, `"affirm"`, `"ach_debit"`, `null`. `payment_option`: [declared alternatives](../models/DisputeInquiryClosedMerchantEventDataPreviousAttributes.md#disputeinquiryclosedmerchanteventdatapreviousattributespayment_option). |
| `reason` | Optional | string or null | Why the payment was disputed. A reason Flint doesn't recognize is `other`. Values: [12 declared values](DisputeInput.md#disputeinput-reason-values). `reason`: [declared alternatives](../models/DisputeInquiryClosedMerchantEventDataPreviousAttributes.md#disputeinquiryclosedmerchanteventdatapreviousattributesreason). |
| `recommended_evidence_types` | Optional | Array of string or null | Evidence types that usually answer this reason, chosen by Flint, most useful first. Use the ones that fit what you sold. Empty when Flint has no recommendation, including bank returns. Chosen from the stored reason and case_type; in a webhook, frozen when Flint records the change. Items values: [11 declared values](DisputeInput.md#disputeinput-recommended_evidence_types--values). `recommended_evidence_types`: [declared alternatives](../models/DisputeInquiryClosedMerchantEventDataPreviousAttributes.md#disputeinquiryclosedmerchanteventdatapreviousattributesrecommended_evidence_types). |
| `response_unavailable_reason` | Optional | string or null | Why a response is unavailable when can_respond_with_evidence is false. Absent when no reason is reported. Current values are bank_return_not_contestable and response_window_unavailable. response_window_unavailable means no evidence deadline was supplied. Values: `"bank_return_not_contestable"`, `"response_window_unavailable"`. `response_unavailable_reason`: [declared alternatives](../models/DisputeInquiryClosedMerchantEventDataPreviousAttributes.md#disputeinquiryclosedmerchanteventdatapreviousattributesresponse_unavailable_reason). |
| `split_reversals` | Optional | Array of [SplitReversalReferencePreviousAttributes](../models/SplitReversalReferencePreviousAttributes.md#splitreversalreferencepreviousattributes) or null | Fixed seller allocations on the payment, each naming its payment split and reversal. Present only when the payment has splits; an empty array means no seller share was allocated. Read PaymentSplit.reversals for status, shortfall, and reinstated amounts. `split_reversals`: [declared alternatives](../models/DisputeInquiryClosedMerchantEventDataPreviousAttributes.md#disputeinquiryclosedmerchanteventdatapreviousattributessplit_reversals). |
| `status` | Optional | string or null | Where the dispute stands. `needs_response` and `inquiry_needs_response` ask you to respond; `inquiry_closed`, `won`, `lost`, and `prevented` are final. Values: `"inquiry_needs_response"`, `"inquiry_under_review"`, `"inquiry_closed"`, `"needs_response"`, `"under_review"`, `"won"`, `"lost"`, `"prevented"`, `"other"`. `status`: [declared alternatives](../models/DisputeInquiryClosedMerchantEventDataPreviousAttributes.md#disputeinquiryclosedmerchanteventdatapreviousattributesstatus). |
| `status_changed_at` | Optional | string or null | Recorded time of the current status. On first observation this is the dispute creation time. Later status changes use the provider event time when available, or the time Flint observed the change. This may not be the exact decision or submission time. `status_changed_at`: [declared alternatives](../models/DisputeInquiryClosedMerchantEventDataPreviousAttributes.md#disputeinquiryclosedmerchanteventdatapreviousattributesstatus_changed_at). |
| `supported_actions` | Optional | Array of string or null | Lifecycle actions Flint accepts now. Evaluated when the dispute is read; in a webhook payload, as of when Flint recorded the change. It turns empty once evidence_due_at has passed, with no event. Items values: `"accept"`. `supported_actions`: [declared alternatives](../models/DisputeInquiryClosedMerchantEventDataPreviousAttributes.md#disputeinquiryclosedmerchanteventdatapreviousattributessupported_actions). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |

### DisputeInquiryClosedMerchantEventDataPreviousAttributes.can_respond_with_evidence

### DisputeInquiryClosedMerchantEventDataPreviousAttributes.can_respond_with_evidence variant 1

anyOf variant 1: Whether this dispute has an evidence response window. It stays true after the window closes or a decision is made. Use is_action_required to know whether a response is needed now..

- Value shape: boolean. Whether this dispute has an evidence response window. It stays true after the window closes or a decision is made. Use is_action_required to know whether a response is needed now. 

### DisputeInquiryClosedMerchantEventDataPreviousAttributes.can_respond_with_evidence variant 2

anyOf variant 2.

- Value shape: null. Whether this dispute has an evidence response window. It stays true after the window closes or a decision is made. Use is_action_required to know whether a response is needed now. 

### DisputeInquiryClosedMerchantEventDataPreviousAttributes.case_type

### DisputeInquiryClosedMerchantEventDataPreviousAttributes.case_type variant 1

anyOf variant 1: Kind of case the card network or bank opened. `status` and `is_action_required` say whether a response is needed..

- Value shape: string. Kind of case the card network or bank opened. `status` and `is_action_required` say whether a response is needed. Values: `"inquiry"`, `"chargeback"`, `"compliance"`, `"resolution"`, `"block"`, `"other"`, `"bank_return"`.

### DisputeInquiryClosedMerchantEventDataPreviousAttributes.case_type variant 2

anyOf variant 2.

- Value shape: null. Kind of case the card network or bank opened. `status` and `is_action_required` say whether a response is needed. 

### DisputeInquiryClosedMerchantEventDataPreviousAttributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### DisputeInquiryClosedMerchantEventDataPreviousAttributes.customer

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.customer](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributescustomer).

### DisputeInquiryClosedMerchantEventDataPreviousAttributes.customer_id

### DisputeInquiryClosedMerchantEventDataPreviousAttributes.customer_id variant 1

anyOf variant 1: The customer on the disputed payment. Absent when the payment has none..

- Value shape: string. The customer on the disputed payment. Absent when the payment has none. 

### DisputeInquiryClosedMerchantEventDataPreviousAttributes.customer_id variant 2

anyOf variant 2.

- Value shape: null. The customer on the disputed payment. Absent when the payment has none. 

### DisputeInquiryClosedMerchantEventDataPreviousAttributes.dispute_id

### DisputeInquiryClosedMerchantEventDataPreviousAttributes.dispute_id variant 1

anyOf variant 1: Stable identifier of the dispute..

- Value shape: string. Stable identifier of the dispute. 

### DisputeInquiryClosedMerchantEventDataPreviousAttributes.dispute_id variant 2

anyOf variant 2.

- Value shape: null. Stable identifier of the dispute. 

### DisputeInquiryClosedMerchantEventDataPreviousAttributes.evidence_due_at

### DisputeInquiryClosedMerchantEventDataPreviousAttributes.evidence_due_at variant 1

anyOf variant 1: Deadline for submitting evidence. Respond before it when is_action_required is true. `null` when the dispute has no response window, such as a bank return or a case your processor gave no deadline for..

- Value shape: string. Deadline for submitting evidence. Respond before it when is_action_required is true. `null` when the dispute has no response window, such as a bank return or a case your processor gave no deadline for. Deadline for submitting evidence. Respond before it when is_action_required is true. `null` when the dispute has no response window, such as a bank return or a case your processor gave no deadline for. Format: `date-time`. 

### DisputeInquiryClosedMerchantEventDataPreviousAttributes.evidence_due_at variant 2

anyOf variant 2.

- Value shape: null. Deadline for submitting evidence. Respond before it when is_action_required is true. `null` when the dispute has no response window, such as a bank return or a case your processor gave no deadline for. 

### DisputeInquiryClosedMerchantEventDataPreviousAttributes.evidence_submission_count

### DisputeInquiryClosedMerchantEventDataPreviousAttributes.evidence_submission_count variant 1

anyOf variant 1: How many times evidence was submitted for this dispute. 0 until you submit..

- Value shape: integer. How many times evidence was submitted for this dispute. 0 until you submit. How many times evidence was submitted for this dispute. 0 until you submit. Format: `int32`. 

### DisputeInquiryClosedMerchantEventDataPreviousAttributes.evidence_submission_count variant 2

anyOf variant 2.

- Value shape: null. How many times evidence was submitted for this dispute. 0 until you submit. 

### DisputeInquiryClosedMerchantEventDataPreviousAttributes.fraud_warning_id

### DisputeInquiryClosedMerchantEventDataPreviousAttributes.fraud_warning_id variant 1

anyOf variant 1: The fraud warning the card network sent for this payment before the dispute. Absent when there was none..

- Value shape: string. The fraud warning the card network sent for this payment before the dispute. Absent when there was none. 

### DisputeInquiryClosedMerchantEventDataPreviousAttributes.fraud_warning_id variant 2

anyOf variant 2.

- Value shape: null. The fraud warning the card network sent for this payment before the dispute. Absent when there was none. 

### DisputeInquiryClosedMerchantEventDataPreviousAttributes.has_evidence

### DisputeInquiryClosedMerchantEventDataPreviousAttributes.has_evidence variant 1

anyOf variant 1: Whether evidence is saved for this dispute, submitted or not. In test mode this includes an unsubmitted draft Flint saves when the dispute first needs a response, so it doesn't mean someone started a response. evidence_submission_count says whether evidence was submitted..

- Value shape: boolean. Whether evidence is saved for this dispute, submitted or not. In test mode this includes an unsubmitted draft Flint saves when the dispute first needs a response, so it doesn't mean someone started a response. evidence_submission_count says whether evidence was submitted. 

### DisputeInquiryClosedMerchantEventDataPreviousAttributes.has_evidence variant 2

anyOf variant 2.

- Value shape: null. Whether evidence is saved for this dispute, submitted or not. In test mode this includes an unsubmitted draft Flint saves when the dispute first needs a response, so it doesn't mean someone started a response. evidence_submission_count says whether evidence was submitted. 

### DisputeInquiryClosedMerchantEventDataPreviousAttributes.is_action_required

### DisputeInquiryClosedMerchantEventDataPreviousAttributes.is_action_required variant 1

anyOf variant 1: True when status is needs_response or inquiry_needs_response, can_respond_with_evidence is true, and evidence_due_at hasn't passed. Evaluated when the dispute is read; in a webhook payload, as of when Flint recorded the change. It turns false once evidence_due_at has passed, with no event..

- Value shape: boolean. True when status is needs_response or inquiry_needs_response, can_respond_with_evidence is true, and evidence_due_at hasn't passed. Evaluated when the dispute is read; in a webhook payload, as of when Flint recorded the change. It turns false once evidence_due_at has passed, with no event. 

### DisputeInquiryClosedMerchantEventDataPreviousAttributes.is_action_required variant 2

anyOf variant 2.

- Value shape: null. True when status is needs_response or inquiry_needs_response, can_respond_with_evidence is true, and evidence_due_at hasn't passed. Evaluated when the dispute is read; in a webhook payload, as of when Flint recorded the change. It turns false once evidence_due_at has passed, with no event. 

### DisputeInquiryClosedMerchantEventDataPreviousAttributes.is_evidence_deadline_passed

### DisputeInquiryClosedMerchantEventDataPreviousAttributes.is_evidence_deadline_passed variant 1

anyOf variant 1: Whether evidence_due_at has passed on a dispute with a response window. Always false when can_respond_with_evidence is false. Evaluated when the dispute is read; in a webhook payload, as of when Flint recorded the change. It turns true once evidence_due_at has passed, with no event..

- Value shape: boolean. Whether evidence_due_at has passed on a dispute with a response window. Always false when can_respond_with_evidence is false. Evaluated when the dispute is read; in a webhook payload, as of when Flint recorded the change. It turns true once evidence_due_at has passed, with no event. 

### DisputeInquiryClosedMerchantEventDataPreviousAttributes.is_evidence_deadline_passed variant 2

anyOf variant 2.

- Value shape: null. Whether evidence_due_at has passed on a dispute with a response window. Always false when can_respond_with_evidence is false. Evaluated when the dispute is read; in a webhook payload, as of when Flint recorded the change. It turns true once evidence_due_at has passed, with no event. 

### DisputeInquiryClosedMerchantEventDataPreviousAttributes.merchant_id

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.merchant_id](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributesmerchant_id).

### DisputeInquiryClosedMerchantEventDataPreviousAttributes.network_reason_code

### DisputeInquiryClosedMerchantEventDataPreviousAttributes.network_reason_code variant 1

anyOf variant 1: Opaque reason code assigned by the card network. Read it with the disputed payment's card brand; codes differ by network. `null` when the network supplied no code or the supplied code has an unsupported shape..

- Value shape: string. Opaque reason code assigned by the card network. Read it with the disputed payment's card brand; codes differ by network. `null` when the network supplied no code or the supplied code has an unsupported shape. Opaque reason code assigned by the card network. Read it with the disputed payment's card brand; codes differ by network. `null` when the network supplied no code or the supplied code has an unsupported shape. pattern: `^[A-Z0-9.]{1,8}$`. 

### DisputeInquiryClosedMerchantEventDataPreviousAttributes.network_reason_code variant 2

anyOf variant 2.

- Value shape: null. Opaque reason code assigned by the card network. Read it with the disputed payment's card brand; codes differ by network. `null` when the network supplied no code or the supplied code has an unsupported shape. 

### DisputeInquiryClosedMerchantEventDataPreviousAttributes.order

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.order](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesorder).

### DisputeInquiryClosedMerchantEventDataPreviousAttributes.order_id

### DisputeInquiryClosedMerchantEventDataPreviousAttributes.order_id variant 1

anyOf variant 1: ID of the order the disputed payment was for. Absent when Flint can't link the dispute to an order..

- Value shape: string. ID of the order the disputed payment was for. Absent when Flint can't link the dispute to an order. 

### DisputeInquiryClosedMerchantEventDataPreviousAttributes.order_id variant 2

anyOf variant 2.

- Value shape: null. ID of the order the disputed payment was for. Absent when Flint can't link the dispute to an order. 

### DisputeInquiryClosedMerchantEventDataPreviousAttributes.payment_intent

Present only when `expand` includes `payment_intent`; `null` when expanded and there is no related payment intent.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Conditional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The amount requested from the buyer, including any tip_money. Capturing doesn't change it: after a partial capture it still shows the requested amount, and captured_money shows what was collected. On a standalone payment intent, PATCH can change it only before the first confirmation attempt. An amount_money or tip_money change that leaves too little for stored splits returns LIMIT_EXCEEDED at the changed field with minimum_money. |
| `capture_method` | Conditional | string or null | When money is collected. Defaults to automatic. Values: `"automatic"`, `"manual"`. `capture_method`: [declared alternatives](../models/ExpandedPaymentIntentSummaryPreviousAttributes.md#expandedpaymentintentsummarypreviousattributescapture_method). |
| `created_at` | Conditional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at). |
| `customer_id` | Conditional | string or null | Customer linked to this payment intent. `customer_id`: [declared alternatives](../models/BuyerPaymentRefundPreviousAttributes.md#buyerpaymentrefundpreviousattributespayment_intent-variant-1customer_id). |
| `dispute_status` | Conditional | string or null | Dispute state of this payment. none means no dispute or inquiry is open or recorded. The inquiry_ values track an issuer inquiry or early warning that isn't a chargeback. Read the dispute with GET /v1/disputes for its deadline and evidence. Values: [10 declared values](#disputeinquiryclosedmerchanteventdatapreviousattributespayment_intent-dispute_status-values). `dispute_status`: [declared alternatives](../models/ExpandedPaymentIntentSummaryPreviousAttributes.md#expandedpaymentintentsummarypreviousattributesdispute_status). |
| `order_id` | Conditional | string or null | Order this payment intent belongs to. Create it through the order and confirm it with POST /v1/orders/{order_id}/pay. Capture and cancel use POST /v1/payment-intents/{payment_intent_id}/capture or /cancel for every payment intent. Order-owned intents accept PATCH for metadata and external_reference_id. `order_id`: [declared alternatives](../models/BuyerPaymentRefundPreviousAttributes.md#buyerpaymentrefundpreviousattributespayment_intent-variant-1order_id). |
| `payment_intent_id` | Conditional | string or null | Flint payment intent ID. `payment_intent_id`: [declared alternatives](../models/OrderPaymentAttemptPreviousAttributes.md#orderpaymentattemptpreviousattributespayment_intents-variant-1-fields-1payment_intent_id). |
| `payment_source` | Conditional | [PaymentSourceSummaryPreviousAttributes](../models/PaymentSourceSummaryPreviousAttributes.md#paymentsourcesummarypreviousattributes) or null | Summary of the card or bank account used for the payment. Absent until a payment source is attached. |
| `refund_status` | Conditional | string or null | How much of captured_money has been refunded, including value issued as store credit, based on refunded_money. Values: `"none"`, `"partially_refunded"`, `"refunded"`. `refund_status`: [declared alternatives](../models/ExpandedPaymentIntentSummaryPreviousAttributes.md#expandedpaymentintentsummarypreviousattributesrefund_status). |
| `status` | Conditional | string or null | Lifecycle status. requires_payment_method covers both a new payment intent and one whose last attempt failed, so read last_payment_error with it. succeeded, canceled, and expired are final. Refunds and disputes never change status. Values: `"requires_payment_method"`, `"requires_confirmation"`, `"requires_action"`, `"processing"`, `"requires_capture"`, `"canceled"`, `"succeeded"`, `"expired"`. `status`: [declared alternatives](../models/PaymentAttemptPaymentIntentPreviousAttributes.md#paymentattemptpaymentintentpreviousattributesstatus). |
| `supported_actions` | Conditional | Array of string or null | Verbs this payment intent accepts now, each a POST to /v1/payment-intents/{payment_intent_id}/{action}. The list includes stored order facts and can change without a payment intent version change. Order legs list confirm when a single leg can pay the order or an open attempt can continue it. Several unpaid legs, selected gift cards, or automatic tax with a leg below the balance require pay_order instead. Invoice payments list only cancel; subscription payments list none. Order edit payments list confirm while awaiting payment details or action. A listed action can still be refused due to an open risk review, an order payment attempt, a closed order, or the merchant account. A managed_by_owner refusal names the owner and its command in remediation.next_actions. The merchant list is credential-independent. Checkout credentials receive that list filtered to confirm and cancel on their own session's intents, never capture. Customer sessions omit this field. New actions may be added. Always present with merchant credentials. Items values: `"confirm"`, `"capture"`, `"cancel"`. `supported_actions`: [declared alternatives](../models/ExpandedPaymentIntentSummaryPreviousAttributes.md#expandedpaymentintentsummarypreviousattributessupported_actions). |
| `updated_at` | Conditional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at). |
| `version` | Conditional | integer or null | Persisted version of this resource's owned state. Expanded resources and external observations can change independently. `version`: [declared alternatives](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdata-fields-1previous_attributesversion). |

#### DisputeInquiryClosedMerchantEventDataPreviousAttributes.payment_intent dispute_status values

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

### DisputeInquiryClosedMerchantEventDataPreviousAttributes.payment_intent variant 1

anyOf ExpandedPaymentIntentSummaryPreviousAttributes.

- Optional: `amount_money`, `capture_method`, `created_at`, `customer_id`, `dispute_status`, `order_id`, `payment_intent_id`, `payment_source`, `refund_status`, `status`, `supported_actions`, `updated_at`, `version`.

### DisputeInquiryClosedMerchantEventDataPreviousAttributes.payment_intent variant 2

anyOf variant 2.

- Undeclared: `amount_money`, `capture_method`, `created_at`, `customer_id`, `dispute_status`, `order_id`, `payment_intent_id`, `payment_source`, `refund_status`, `status`, `supported_actions`, `updated_at`, `version`.
- Value shape: null. Present only when `expand` includes `payment_intent`; `null` when expanded and there is no related payment intent. 

### DisputeInquiryClosedMerchantEventDataPreviousAttributes.payment_intent variant 1.capture_method

Declared alternatives: [ExpandedPaymentIntentSummaryPreviousAttributes.capture_method](../models/ExpandedPaymentIntentSummaryPreviousAttributes.md#expandedpaymentintentsummarypreviousattributescapture_method).

### DisputeInquiryClosedMerchantEventDataPreviousAttributes.payment_intent variant 1.created_at

Declared alternatives: [PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.created_at](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at).

### DisputeInquiryClosedMerchantEventDataPreviousAttributes.payment_intent variant 1.customer_id

Declared alternatives: [BuyerPaymentRefundPreviousAttributes.payment_intent variant 1.customer_id](../models/BuyerPaymentRefundPreviousAttributes.md#buyerpaymentrefundpreviousattributespayment_intent-variant-1customer_id).

### DisputeInquiryClosedMerchantEventDataPreviousAttributes.payment_intent variant 1.dispute_status

Declared alternatives: [ExpandedPaymentIntentSummaryPreviousAttributes.dispute_status](../models/ExpandedPaymentIntentSummaryPreviousAttributes.md#expandedpaymentintentsummarypreviousattributesdispute_status).

### DisputeInquiryClosedMerchantEventDataPreviousAttributes.payment_intent variant 1.order_id

Declared alternatives: [BuyerPaymentRefundPreviousAttributes.payment_intent variant 1.order_id](../models/BuyerPaymentRefundPreviousAttributes.md#buyerpaymentrefundpreviousattributespayment_intent-variant-1order_id).

### DisputeInquiryClosedMerchantEventDataPreviousAttributes.payment_intent variant 1.payment_intent_id

Declared alternatives: [OrderPaymentAttemptPreviousAttributes.payment_intents variant 1.[] fields 1.payment_intent_id](../models/OrderPaymentAttemptPreviousAttributes.md#orderpaymentattemptpreviousattributespayment_intents-variant-1-fields-1payment_intent_id).

### DisputeInquiryClosedMerchantEventDataPreviousAttributes.payment_intent variant 1.refund_status

Declared alternatives: [ExpandedPaymentIntentSummaryPreviousAttributes.refund_status](../models/ExpandedPaymentIntentSummaryPreviousAttributes.md#expandedpaymentintentsummarypreviousattributesrefund_status).

### DisputeInquiryClosedMerchantEventDataPreviousAttributes.payment_intent variant 1.status

Declared alternatives: [PaymentAttemptPaymentIntentPreviousAttributes.status](../models/PaymentAttemptPaymentIntentPreviousAttributes.md#paymentattemptpaymentintentpreviousattributesstatus).

### DisputeInquiryClosedMerchantEventDataPreviousAttributes.payment_intent variant 1.supported_actions

Declared alternatives: [ExpandedPaymentIntentSummaryPreviousAttributes.supported_actions](../models/ExpandedPaymentIntentSummaryPreviousAttributes.md#expandedpaymentintentsummarypreviousattributessupported_actions).

### DisputeInquiryClosedMerchantEventDataPreviousAttributes.payment_intent variant 1.updated_at

Declared alternatives: [PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.created_at](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at).

### DisputeInquiryClosedMerchantEventDataPreviousAttributes.payment_intent variant 1.version

Declared alternatives: [PaymentSplitCanceledEvent.data fields 1.previous_attributes.version](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdata-fields-1previous_attributesversion).

### DisputeInquiryClosedMerchantEventDataPreviousAttributes.payment_intent_id

### DisputeInquiryClosedMerchantEventDataPreviousAttributes.payment_intent_id variant 1

anyOf variant 1: ID of the payment intent that took the disputed payment. Absent when Flint can't link the dispute to a payment intent..

- Value shape: string. ID of the payment intent that took the disputed payment. Absent when Flint can't link the dispute to a payment intent. 

### DisputeInquiryClosedMerchantEventDataPreviousAttributes.payment_intent_id variant 2

anyOf variant 2.

- Value shape: null. ID of the payment intent that took the disputed payment. Absent when Flint can't link the dispute to a payment intent. 

### DisputeInquiryClosedMerchantEventDataPreviousAttributes.payment_option

### DisputeInquiryClosedMerchantEventDataPreviousAttributes.payment_option variant 1

anyOf variant 1: How the buyer paid for the disputed payment. `null` when Flint hasn't linked the dispute to a payment intent that records a payment option..

- Value shape: string. How the buyer paid for the disputed payment. `null` when Flint hasn't linked the dispute to a payment intent that records a payment option. Values: `"card"`, `"apple_pay"`, `"google_pay"`, `"affirm"`, `"ach_debit"`, `null`.

### DisputeInquiryClosedMerchantEventDataPreviousAttributes.payment_option variant 2

anyOf variant 2.

- Value shape: null. How the buyer paid for the disputed payment. `null` when Flint hasn't linked the dispute to a payment intent that records a payment option. 

### DisputeInquiryClosedMerchantEventDataPreviousAttributes.reason

### DisputeInquiryClosedMerchantEventDataPreviousAttributes.reason variant 1

anyOf variant 1: Why the payment was disputed. A reason Flint doesn't recognize is `other`..

- Value shape: string. Why the payment was disputed. A reason Flint doesn't recognize is `other`. Values: `"fraudulent"`, `"unrecognized"`, `"duplicate"`, `"product_not_received"`, `"product_not_as_described"`, `"refund_not_processed"`, `"subscription_canceled"`, `"noncompliant"`, `"insufficient_funds"`, `"debit_not_authorized"`, `"bank_account_not_found"`, `"other"`.

### DisputeInquiryClosedMerchantEventDataPreviousAttributes.reason variant 2

anyOf variant 2.

- Value shape: null. Why the payment was disputed. A reason Flint doesn't recognize is `other`. 

### DisputeInquiryClosedMerchantEventDataPreviousAttributes.recommended_evidence_types

### DisputeInquiryClosedMerchantEventDataPreviousAttributes.recommended_evidence_types variant 1

anyOf variant 1: Evidence types that usually answer this reason, chosen by Flint, most useful first. Use the ones that fit what you sold. Empty when Flint has no recommendation, including bank returns. Chosen from the stored reason and case_type; in a webhook, frozen when Flint records the change..

- Value shape: Array of string. Evidence types that usually answer this reason, chosen by Flint, most useful first. Use the ones that fit what you sold. Empty when Flint has no recommendation, including bank returns. Chosen from the stored reason and case_type; in a webhook, frozen when Flint records the change. Items values: `"customer_details"`, `"customer_communication"`, `"customer_signature"`, `"receipt"`, `"shipping_documentation"`, `"service_documentation"`, `"access_activity_log"`, `"product_description"`, `"refund_policy"`, `"duplicate_charge_documentation"`, `"cancellation_policy"`.

### DisputeInquiryClosedMerchantEventDataPreviousAttributes.recommended_evidence_types variant 2

anyOf variant 2.

- Value shape: null. Evidence types that usually answer this reason, chosen by Flint, most useful first. Use the ones that fit what you sold. Empty when Flint has no recommendation, including bank returns. Chosen from the stored reason and case_type; in a webhook, frozen when Flint records the change. 

### DisputeInquiryClosedMerchantEventDataPreviousAttributes.response_unavailable_reason

### DisputeInquiryClosedMerchantEventDataPreviousAttributes.response_unavailable_reason variant 1

anyOf variant 1: Why a response is unavailable when can_respond_with_evidence is false. Absent when no reason is reported. Current values are bank_return_not_contestable and response_window_unavailable. response_window_unavailable means no evidence deadline was supplied..

- Value shape: string. Why a response is unavailable when can_respond_with_evidence is false. Absent when no reason is reported. Current values are bank_return_not_contestable and response_window_unavailable. response_window_unavailable means no evidence deadline was supplied. Values: `"bank_return_not_contestable"`, `"response_window_unavailable"`.

### DisputeInquiryClosedMerchantEventDataPreviousAttributes.response_unavailable_reason variant 2

anyOf variant 2.

- Value shape: null. Why a response is unavailable when can_respond_with_evidence is false. Absent when no reason is reported. Current values are bank_return_not_contestable and response_window_unavailable. response_window_unavailable means no evidence deadline was supplied. 

### DisputeInquiryClosedMerchantEventDataPreviousAttributes.split_reversals

### DisputeInquiryClosedMerchantEventDataPreviousAttributes.split_reversals variant 1

anyOf variant 1: Fixed seller allocations on the payment, each naming its payment split and reversal. Present only when the payment has splits; an empty array means no seller share was allocated. Read PaymentSplit.reversals for status, shortfall, and reinstated amounts..

- Value shape: Array of [SplitReversalReferencePreviousAttributes](../models/SplitReversalReferencePreviousAttributes.md#splitreversalreferencepreviousattributes). Fixed seller allocations on the payment, each naming its payment split and reversal. Present only when the payment has splits; an empty array means no seller share was allocated. Read PaymentSplit.reversals for status, shortfall, and reinstated amounts. 

### DisputeInquiryClosedMerchantEventDataPreviousAttributes.split_reversals variant 2

anyOf variant 2.

- Value shape: null. Fixed seller allocations on the payment, each naming its payment split and reversal. Present only when the payment has splits; an empty array means no seller share was allocated. Read PaymentSplit.reversals for status, shortfall, and reinstated amounts. 

### DisputeInquiryClosedMerchantEventDataPreviousAttributes.split_reversals variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The amount fixed at allocation, unchanged by recovery or reinstatement. |
| `payment_split_id` | Optional | string or null | The split whose seller share was allocated. `payment_split_id`: [declared alternatives](../models/DisputeInquiryClosedMerchantEventDataPreviousAttributes.md#disputeinquiryclosedmerchanteventdatapreviousattributessplit_reversals-variant-1-fields-1payment_split_id). |
| `payment_split_reversal_id` | Optional | string or null | The reversal in PaymentSplit.reversals that records recovery status. `payment_split_reversal_id`: [declared alternatives](../models/DisputeInquiryClosedMerchantEventDataPreviousAttributes.md#disputeinquiryclosedmerchanteventdatapreviousattributessplit_reversals-variant-1-fields-1payment_split_reversal_id). |

### DisputeInquiryClosedMerchantEventDataPreviousAttributes.split_reversals variant 1.[] fields 1.payment_split_id

### DisputeInquiryClosedMerchantEventDataPreviousAttributes.split_reversals variant 1.[] fields 1.payment_split_id variant 1

anyOf variant 1: The split whose seller share was allocated..

- Value shape: string. The split whose seller share was allocated. The split whose seller share was allocated. Example: `"psplit_01KEZF7C00Y5HA4Z8D4KRA07K8"`. 

### DisputeInquiryClosedMerchantEventDataPreviousAttributes.split_reversals variant 1.[] fields 1.payment_split_id variant 2

anyOf variant 2.

- Value shape: null. The split whose seller share was allocated. 

### DisputeInquiryClosedMerchantEventDataPreviousAttributes.split_reversals variant 1.[] fields 1.payment_split_reversal_id

### DisputeInquiryClosedMerchantEventDataPreviousAttributes.split_reversals variant 1.[] fields 1.payment_split_reversal_id variant 1

anyOf variant 1: The reversal in PaymentSplit.reversals that records recovery status..

- Value shape: string. The reversal in PaymentSplit.reversals that records recovery status. The reversal in PaymentSplit.reversals that records recovery status. Example: `"psrev_01KEZF7C00XC1HA7S8YCQJDBDM"`. 

### DisputeInquiryClosedMerchantEventDataPreviousAttributes.split_reversals variant 1.[] fields 1.payment_split_reversal_id variant 2

anyOf variant 2.

- Value shape: null. The reversal in PaymentSplit.reversals that records recovery status. 

### DisputeInquiryClosedMerchantEventDataPreviousAttributes.status

### DisputeInquiryClosedMerchantEventDataPreviousAttributes.status variant 1

anyOf variant 1: Where the dispute stands. `needs_response` and `inquiry_needs_response` ask you to respond; `inquiry_closed`, `won`, `lost`, and `prevented` are final..

- Value shape: string. Where the dispute stands. `needs_response` and `inquiry_needs_response` ask you to respond; `inquiry_closed`, `won`, `lost`, and `prevented` are final. Values: `"inquiry_needs_response"`, `"inquiry_under_review"`, `"inquiry_closed"`, `"needs_response"`, `"under_review"`, `"won"`, `"lost"`, `"prevented"`, `"other"`.

### DisputeInquiryClosedMerchantEventDataPreviousAttributes.status variant 2

anyOf variant 2.

- Value shape: null. Where the dispute stands. `needs_response` and `inquiry_needs_response` ask you to respond; `inquiry_closed`, `won`, `lost`, and `prevented` are final. 

### DisputeInquiryClosedMerchantEventDataPreviousAttributes.status_changed_at

### DisputeInquiryClosedMerchantEventDataPreviousAttributes.status_changed_at variant 1

anyOf variant 1: Recorded time of the current status. On first observation this is the dispute creation time. Later status changes use the provider event time when available, or the time Flint observed the change. This may not be the exact decision or submission time..

- Value shape: string. Recorded time of the current status. On first observation this is the dispute creation time. Later status changes use the provider event time when available, or the time Flint observed the change. This may not be the exact decision or submission time. Recorded time of the current status. On first observation this is the dispute creation time. Later status changes use the provider event time when available, or the time Flint observed the change. This may not be the exact decision or submission time. Format: `date-time`. 

### DisputeInquiryClosedMerchantEventDataPreviousAttributes.status_changed_at variant 2

anyOf variant 2.

- Value shape: null. Recorded time of the current status. On first observation this is the dispute creation time. Later status changes use the provider event time when available, or the time Flint observed the change. This may not be the exact decision or submission time. 

### DisputeInquiryClosedMerchantEventDataPreviousAttributes.supported_actions

### DisputeInquiryClosedMerchantEventDataPreviousAttributes.supported_actions variant 1

anyOf variant 1: Lifecycle actions Flint accepts now. Evaluated when the dispute is read; in a webhook payload, as of when Flint recorded the change. It turns empty once evidence_due_at has passed, with no event..

- Value shape: Array of string. Lifecycle actions Flint accepts now. Evaluated when the dispute is read; in a webhook payload, as of when Flint recorded the change. It turns empty once evidence_due_at has passed, with no event. Items values: `"accept"`.

### DisputeInquiryClosedMerchantEventDataPreviousAttributes.supported_actions variant 2

anyOf variant 2.

- Value shape: null. Lifecycle actions Flint accepts now. Evaluated when the dispute is read; in a webhook payload, as of when Flint recorded the change. It turns empty once evidence_due_at has passed, with no event. 

### DisputeInquiryClosedMerchantEventDataPreviousAttributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

