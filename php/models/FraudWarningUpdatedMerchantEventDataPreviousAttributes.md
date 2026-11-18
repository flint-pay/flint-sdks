[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## FraudWarningUpdatedMerchantEventDataPreviousAttributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `dispute` | Optional | [DisputePreviousAttributes](../models/DisputePreviousAttributes.md#disputepreviousattributes) or null | Present only when `expand` includes `dispute`; `null` when expanded and there is no related dispute. `dispute`: [declared alternatives](../models/FraudWarningUpdatedMerchantEventDataPreviousAttributes.md#fraudwarningupdatedmerchanteventdatapreviousattributesdispute). |
| `dispute_id` | Optional | string or null | The dispute that opened on this payment after the warning. `null` when no dispute has opened. `dispute_id`: [declared alternatives](../models/FraudWarningUpdatedMerchantEventDataPreviousAttributes.md#fraudwarningupdatedmerchanteventdatapreviousattributesdispute_id). |
| `fraud_type` | Optional | string or null | The kind of fraud the card network reported. Values: [7 declared values](#fraudwarningupdatedmerchanteventdatapreviousattributes-fraud_type-values). `fraud_type`: [declared alternatives](../models/FraudWarningUpdatedMerchantEventDataPreviousAttributes.md#fraudwarningupdatedmerchanteventdatapreviousattributesfraud_type). |
| `fraud_warning_id` | Optional | string or null | Unique identifier for this fraud warning, prefixed `frw_`. `fraud_warning_id`: [declared alternatives](../models/FraudWarningUpdatedMerchantEventDataPreviousAttributes.md#fraudwarningupdatedmerchanteventdatapreviousattributesfraud_warning_id). |
| `is_actionable` | Optional | boolean or null | true until the payment is refunded in full, a dispute opens on it, or the card network marks the warning resolved; after that it stays false. A partial refund doesn't change it. `is_actionable`: [declared alternatives](../models/FraudWarningUpdatedMerchantEventDataPreviousAttributes.md#fraudwarningupdatedmerchanteventdatapreviousattributesis_actionable). |
| `payment_intent` | Optional | [ExpandedPaymentIntentSummaryPreviousAttributes](../models/ExpandedPaymentIntentSummaryPreviousAttributes.md#expandedpaymentintentsummarypreviousattributes) or null | Present only when `expand` includes `payment_intent`; `null` when expanded and there is no related payment intent. `payment_intent`: [declared alternatives](../models/DisputeInquiryClosedMerchantEventDataPreviousAttributes.md#disputeinquiryclosedmerchanteventdatapreviousattributespayment_intent). |
| `payment_intent_id` | Optional | string or null | ID of the payment the warning is about. `payment_intent_id`: [declared alternatives](../models/FraudWarningUpdatedMerchantEventDataPreviousAttributes.md#fraudwarningupdatedmerchanteventdatapreviousattributespayment_intent_id). |
| `payment_summary` | Optional | [FraudWarningPaymentSummaryPreviousAttributes](../models/FraudWarningPaymentSummaryPreviousAttributes.md#fraudwarningpaymentsummarypreviousattributes) or null | The payment's amount, buyer email, and card, for recognizing it. |
| `reported_at` | Optional | string or null | RFC3339 timestamp. `reported_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |

#### FraudWarningUpdatedMerchantEventDataPreviousAttributes fraud_type values

- `"card_never_received"`
- `"fraudulent_card_application"`
- `"made_with_counterfeit_card"`
- `"made_with_lost_card"`
- `"made_with_stolen_card"`
- `"unauthorized_use_of_card"`
- `"other"`

### FraudWarningUpdatedMerchantEventDataPreviousAttributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### FraudWarningUpdatedMerchantEventDataPreviousAttributes.dispute

Present only when `expand` includes `dispute`; `null` when expanded and there is no related dispute.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Conditional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Amount in dispute. For a chargeback, this amount left your balance when the case opened; an inquiry moves no money. |
| `can_respond_with_evidence` | Conditional | boolean or null | Whether this dispute has an evidence response window. It stays true after the window closes or a decision is made. Use is_action_required to know whether a response is needed now. `can_respond_with_evidence`: [declared alternatives](../models/DisputeInquiryClosedMerchantEventDataPreviousAttributes.md#disputeinquiryclosedmerchanteventdatapreviousattributescan_respond_with_evidence). |
| `case_type` | Conditional | string or null | Kind of case the card network or bank opened. `status` and `is_action_required` say whether a response is needed. Values: `"inquiry"`, `"chargeback"`, `"compliance"`, `"resolution"`, `"block"`, `"other"`, `"bank_return"`. `case_type`: [declared alternatives](../models/DisputeInquiryClosedMerchantEventDataPreviousAttributes.md#disputeinquiryclosedmerchanteventdatapreviousattributescase_type). |
| `closed_reason` | Conditional | string or null | Why the dispute closed, when Flint recorded the cause. Absent when Flint has no confirmed closure reason. Values: `"merchant_accepted"`. `closed_reason`: [declared alternatives](../models/DisputeInquiryClosedMerchantEventDataPreviousAttributes.md#disputeinquiryclosedmerchanteventdatapreviousattributesclosed_reason). |
| `created_at` | Conditional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at). |
| `customer` | Conditional | [ExpandedCustomerSummaryPreviousAttributes](../models/ExpandedCustomerSummaryPreviousAttributes.md#expandedcustomersummarypreviousattributes) or null | Present only when `expand` includes `customer`; `null` when expanded and there is no related customer. `customer`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributescustomer). |
| `customer_id` | Conditional | string or null | The customer on the disputed payment. Absent when the payment has none. `customer_id`: [declared alternatives](../models/FraudWarningUpdatedMerchantEventDataPreviousAttributes.md#fraudwarningupdatedmerchanteventdatapreviousattributesdispute-variant-1customer_id). |
| `dispute_id` | Conditional | string or null | Stable identifier of the dispute. `dispute_id`: [declared alternatives](../models/FraudWarningUpdatedMerchantEventDataPreviousAttributes.md#fraudwarningupdatedmerchanteventdatapreviousattributesdispute-variant-1dispute_id). |
| `evidence_due_at` | Conditional | string or null | Deadline for submitting evidence. Respond before it when is_action_required is true. `null` when the dispute has no response window, such as a bank return or a case your processor gave no deadline for. `evidence_due_at`: [declared alternatives](../models/FraudWarningUpdatedMerchantEventDataPreviousAttributes.md#fraudwarningupdatedmerchanteventdatapreviousattributesdispute-variant-1evidence_due_at). |
| `evidence_submission_count` | Conditional | integer or null | How many times evidence was submitted for this dispute. 0 until you submit. `evidence_submission_count`: [declared alternatives](../models/DisputeInquiryClosedMerchantEventDataPreviousAttributes.md#disputeinquiryclosedmerchanteventdatapreviousattributesevidence_submission_count). |
| `fraud_warning_id` | Conditional | string or null | The fraud warning the card network sent for this payment before the dispute. Absent when there was none. `fraud_warning_id`: [declared alternatives](../models/FraudWarningUpdatedMerchantEventDataPreviousAttributes.md#fraudwarningupdatedmerchanteventdatapreviousattributesdispute-variant-1fraud_warning_id). |
| `has_evidence` | Conditional | boolean or null | Whether evidence is saved for this dispute, submitted or not. In test mode this includes an unsubmitted draft Flint saves when the dispute first needs a response, so it doesn't mean someone started a response. evidence_submission_count says whether evidence was submitted. `has_evidence`: [declared alternatives](../models/DisputeInquiryClosedMerchantEventDataPreviousAttributes.md#disputeinquiryclosedmerchanteventdatapreviousattributeshas_evidence). |
| `is_action_required` | Conditional | boolean or null | True when status is needs_response or inquiry_needs_response, can_respond_with_evidence is true, and evidence_due_at hasn't passed. Evaluated when the dispute is read; in a webhook payload, as of when Flint recorded the change. It turns false once evidence_due_at has passed, with no event. `is_action_required`: [declared alternatives](../models/DisputeInquiryClosedMerchantEventDataPreviousAttributes.md#disputeinquiryclosedmerchanteventdatapreviousattributesis_action_required). |
| `is_evidence_deadline_passed` | Conditional | boolean or null | Whether evidence_due_at has passed on a dispute with a response window. Always false when can_respond_with_evidence is false. Evaluated when the dispute is read; in a webhook payload, as of when Flint recorded the change. It turns true once evidence_due_at has passed, with no event. `is_evidence_deadline_passed`: [declared alternatives](../models/DisputeInquiryClosedMerchantEventDataPreviousAttributes.md#disputeinquiryclosedmerchanteventdatapreviousattributesis_evidence_deadline_passed). |
| `merchant_id` | Conditional | string or null | ID of the merchant this resource belongs to. `merchant_id`: [declared alternatives](../models/FraudWarningUpdatedMerchantEventDataPreviousAttributes.md#fraudwarningupdatedmerchanteventdatapreviousattributesdispute-variant-1merchant_id). |
| `network_reason_code` | Conditional | string or null | Opaque reason code assigned by the card network. Read it with the disputed payment's card brand; codes differ by network. `null` when the network supplied no code or the supplied code has an unsupported shape. `network_reason_code`: [declared alternatives](../models/DisputeInquiryClosedMerchantEventDataPreviousAttributes.md#disputeinquiryclosedmerchanteventdatapreviousattributesnetwork_reason_code). |
| `order` | Conditional | [ExpandedOrderSummaryPreviousAttributes](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributes) or null | Present only when `expand` includes `order`; `null` when expanded and there is no related order. `order`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesorder). |
| `order_id` | Conditional | string or null | ID of the order the disputed payment was for. Absent when Flint can't link the dispute to an order. `order_id`: [declared alternatives](../models/FraudWarningUpdatedMerchantEventDataPreviousAttributes.md#fraudwarningupdatedmerchanteventdatapreviousattributesdispute-variant-1order_id). |
| `payment_intent` | Conditional | [ExpandedPaymentIntentSummaryPreviousAttributes](../models/ExpandedPaymentIntentSummaryPreviousAttributes.md#expandedpaymentintentsummarypreviousattributes) or null | Present only when `expand` includes `payment_intent`; `null` when expanded and there is no related payment intent. `payment_intent`: [declared alternatives](../models/DisputeInquiryClosedMerchantEventDataPreviousAttributes.md#disputeinquiryclosedmerchanteventdatapreviousattributespayment_intent). |
| `payment_intent_id` | Conditional | string or null | ID of the payment intent that took the disputed payment. Absent when Flint can't link the dispute to a payment intent. `payment_intent_id`: [declared alternatives](../models/FraudWarningUpdatedMerchantEventDataPreviousAttributes.md#fraudwarningupdatedmerchanteventdatapreviousattributesdispute-variant-1payment_intent_id). |
| `payment_option` | Conditional | string or null | How the buyer paid for the disputed payment. `null` when Flint hasn't linked the dispute to a payment intent that records a payment option. Values: `"card"`, `"apple_pay"`, `"google_pay"`, `"affirm"`, `"ach_debit"`, `null`. `payment_option`: [declared alternatives](../models/DisputeInquiryClosedMerchantEventDataPreviousAttributes.md#disputeinquiryclosedmerchanteventdatapreviousattributespayment_option). |
| `reason` | Conditional | string or null | Why the payment was disputed. A reason Flint doesn't recognize is `other`. Values: [12 declared values](DisputeInput.md#disputeinput-reason-values). `reason`: [declared alternatives](../models/DisputeInquiryClosedMerchantEventDataPreviousAttributes.md#disputeinquiryclosedmerchanteventdatapreviousattributesreason). |
| `recommended_evidence_types` | Conditional | Array of string or null | Evidence types that usually answer this reason, chosen by Flint, most useful first. Use the ones that fit what you sold. Empty when Flint has no recommendation, including bank returns. Chosen from the stored reason and case_type; in a webhook, frozen when Flint records the change. Items values: [11 declared values](DisputeInput.md#disputeinput-recommended_evidence_types--values). `recommended_evidence_types`: [declared alternatives](../models/DisputeInquiryClosedMerchantEventDataPreviousAttributes.md#disputeinquiryclosedmerchanteventdatapreviousattributesrecommended_evidence_types). |
| `response_unavailable_reason` | Conditional | string or null | Why a response is unavailable when can_respond_with_evidence is false. Absent when no reason is reported. Current values are bank_return_not_contestable and response_window_unavailable. response_window_unavailable means no evidence deadline was supplied. Values: `"bank_return_not_contestable"`, `"response_window_unavailable"`. `response_unavailable_reason`: [declared alternatives](../models/DisputeInquiryClosedMerchantEventDataPreviousAttributes.md#disputeinquiryclosedmerchanteventdatapreviousattributesresponse_unavailable_reason). |
| `split_reversals` | Conditional | Array of [SplitReversalReferencePreviousAttributes](../models/SplitReversalReferencePreviousAttributes.md#splitreversalreferencepreviousattributes) or null | Fixed seller allocations on the payment, each naming its payment split and reversal. Present only when the payment has splits; an empty array means no seller share was allocated. Read PaymentSplit.reversals for status, shortfall, and reinstated amounts. `split_reversals`: [declared alternatives](../models/DisputeInquiryClosedMerchantEventDataPreviousAttributes.md#disputeinquiryclosedmerchanteventdatapreviousattributessplit_reversals). |
| `status` | Conditional | string or null | Where the dispute stands. `needs_response` and `inquiry_needs_response` ask you to respond; `inquiry_closed`, `won`, `lost`, and `prevented` are final. Values: `"inquiry_needs_response"`, `"inquiry_under_review"`, `"inquiry_closed"`, `"needs_response"`, `"under_review"`, `"won"`, `"lost"`, `"prevented"`, `"other"`. `status`: [declared alternatives](../models/DisputeInquiryClosedMerchantEventDataPreviousAttributes.md#disputeinquiryclosedmerchanteventdatapreviousattributesstatus). |
| `status_changed_at` | Conditional | string or null | Recorded time of the current status. On first observation this is the dispute creation time. Later status changes use the provider event time when available, or the time Flint observed the change. This may not be the exact decision or submission time. `status_changed_at`: [declared alternatives](../models/FraudWarningUpdatedMerchantEventDataPreviousAttributes.md#fraudwarningupdatedmerchanteventdatapreviousattributesdispute-variant-1status_changed_at). |
| `supported_actions` | Conditional | Array of string or null | Lifecycle actions Flint accepts now. Evaluated when the dispute is read; in a webhook payload, as of when Flint recorded the change. It turns empty once evidence_due_at has passed, with no event. Items values: `"accept"`. `supported_actions`: [declared alternatives](../models/DisputeInquiryClosedMerchantEventDataPreviousAttributes.md#disputeinquiryclosedmerchanteventdatapreviousattributessupported_actions). |
| `updated_at` | Conditional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at). |

### FraudWarningUpdatedMerchantEventDataPreviousAttributes.dispute variant 1: `closed_reason` = `"merchant_accepted"`

anyOf DisputePreviousAttributes.

- Optional: `amount_money`, `can_respond_with_evidence`, `case_type`, `closed_reason`, `created_at`, `customer`, `customer_id`, `dispute_id`, `evidence_due_at`, `evidence_submission_count`, `fraud_warning_id`, `has_evidence`, `is_action_required`, `is_evidence_deadline_passed`, `merchant_id`, `network_reason_code`, `order`, `order_id`, `payment_intent`, `payment_intent_id`, `payment_option`, `reason`, `recommended_evidence_types`, `response_unavailable_reason`, `split_reversals`, `status`, `status_changed_at`, `supported_actions`, `updated_at`.

### FraudWarningUpdatedMerchantEventDataPreviousAttributes.dispute variant 2

anyOf variant 2.

- Undeclared: `amount_money`, `can_respond_with_evidence`, `case_type`, `closed_reason`, `created_at`, `customer`, `customer_id`, `dispute_id`, `evidence_due_at`, `evidence_submission_count`, `fraud_warning_id`, `has_evidence`, `is_action_required`, `is_evidence_deadline_passed`, `merchant_id`, `network_reason_code`, `order`, `order_id`, `payment_intent`, `payment_intent_id`, `payment_option`, `reason`, `recommended_evidence_types`, `response_unavailable_reason`, `split_reversals`, `status`, `status_changed_at`, `supported_actions`, `updated_at`.
- Value shape: null. Present only when `expand` includes `dispute`; `null` when expanded and there is no related dispute. 

### FraudWarningUpdatedMerchantEventDataPreviousAttributes.dispute variant 1.can_respond_with_evidence

Declared alternatives: [DisputeInquiryClosedMerchantEventDataPreviousAttributes.can_respond_with_evidence](../models/DisputeInquiryClosedMerchantEventDataPreviousAttributes.md#disputeinquiryclosedmerchanteventdatapreviousattributescan_respond_with_evidence).

### FraudWarningUpdatedMerchantEventDataPreviousAttributes.dispute variant 1.case_type

Declared alternatives: [DisputeInquiryClosedMerchantEventDataPreviousAttributes.case_type](../models/DisputeInquiryClosedMerchantEventDataPreviousAttributes.md#disputeinquiryclosedmerchanteventdatapreviousattributescase_type).

### FraudWarningUpdatedMerchantEventDataPreviousAttributes.dispute variant 1.closed_reason

Declared alternatives: [DisputeInquiryClosedMerchantEventDataPreviousAttributes.closed_reason](../models/DisputeInquiryClosedMerchantEventDataPreviousAttributes.md#disputeinquiryclosedmerchanteventdatapreviousattributesclosed_reason).

### FraudWarningUpdatedMerchantEventDataPreviousAttributes.dispute variant 1.created_at

Declared alternatives: [PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.created_at](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at).

### FraudWarningUpdatedMerchantEventDataPreviousAttributes.dispute variant 1.customer

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.customer](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributescustomer).

### FraudWarningUpdatedMerchantEventDataPreviousAttributes.dispute variant 1.customer_id

### FraudWarningUpdatedMerchantEventDataPreviousAttributes.dispute variant 1.customer_id variant 1

anyOf variant 1: The customer on the disputed payment. Absent when the payment has none..

- Value shape: string. The customer on the disputed payment. Absent when the payment has none. The customer on the disputed payment. Absent when the payment has none. Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. 

### FraudWarningUpdatedMerchantEventDataPreviousAttributes.dispute variant 1.customer_id variant 2

anyOf variant 2.

- Value shape: null. The customer on the disputed payment. Absent when the payment has none. 

### FraudWarningUpdatedMerchantEventDataPreviousAttributes.dispute variant 1.dispute_id

### FraudWarningUpdatedMerchantEventDataPreviousAttributes.dispute variant 1.dispute_id variant 1

anyOf variant 1: Stable identifier of the dispute..

- Value shape: string. Stable identifier of the dispute. Stable identifier of the dispute. Example: `"du_01KEZF7C00DEJSF1KTXRT4BBQD"`. 

### FraudWarningUpdatedMerchantEventDataPreviousAttributes.dispute variant 1.dispute_id variant 2

anyOf variant 2.

- Value shape: null. Stable identifier of the dispute. 

### FraudWarningUpdatedMerchantEventDataPreviousAttributes.dispute variant 1.evidence_due_at

### FraudWarningUpdatedMerchantEventDataPreviousAttributes.dispute variant 1.evidence_due_at variant 1

anyOf variant 1: Deadline for submitting evidence. Respond before it when is_action_required is true. `null` when the dispute has no response window, such as a bank return or a case your processor gave no deadline for..

- Value shape: string. Deadline for submitting evidence. Respond before it when is_action_required is true. `null` when the dispute has no response window, such as a bank return or a case your processor gave no deadline for. Deadline for submitting evidence. Respond before it when is_action_required is true. `null` when the dispute has no response window, such as a bank return or a case your processor gave no deadline for. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### FraudWarningUpdatedMerchantEventDataPreviousAttributes.dispute variant 1.evidence_due_at variant 2

anyOf variant 2.

- Value shape: null. Deadline for submitting evidence. Respond before it when is_action_required is true. `null` when the dispute has no response window, such as a bank return or a case your processor gave no deadline for. 

### FraudWarningUpdatedMerchantEventDataPreviousAttributes.dispute variant 1.evidence_submission_count

Declared alternatives: [DisputeInquiryClosedMerchantEventDataPreviousAttributes.evidence_submission_count](../models/DisputeInquiryClosedMerchantEventDataPreviousAttributes.md#disputeinquiryclosedmerchanteventdatapreviousattributesevidence_submission_count).

### FraudWarningUpdatedMerchantEventDataPreviousAttributes.dispute variant 1.fraud_warning_id

### FraudWarningUpdatedMerchantEventDataPreviousAttributes.dispute variant 1.fraud_warning_id variant 1

anyOf variant 1: The fraud warning the card network sent for this payment before the dispute. Absent when there was none..

- Value shape: string. The fraud warning the card network sent for this payment before the dispute. Absent when there was none. The fraud warning the card network sent for this payment before the dispute. Absent when there was none. Example: `"frw_01KEZF7C00WD6W4TAFS0FH851W"`. 

### FraudWarningUpdatedMerchantEventDataPreviousAttributes.dispute variant 1.fraud_warning_id variant 2

anyOf variant 2.

- Value shape: null. The fraud warning the card network sent for this payment before the dispute. Absent when there was none. 

### FraudWarningUpdatedMerchantEventDataPreviousAttributes.dispute variant 1.has_evidence

Declared alternatives: [DisputeInquiryClosedMerchantEventDataPreviousAttributes.has_evidence](../models/DisputeInquiryClosedMerchantEventDataPreviousAttributes.md#disputeinquiryclosedmerchanteventdatapreviousattributeshas_evidence).

### FraudWarningUpdatedMerchantEventDataPreviousAttributes.dispute variant 1.is_action_required

Declared alternatives: [DisputeInquiryClosedMerchantEventDataPreviousAttributes.is_action_required](../models/DisputeInquiryClosedMerchantEventDataPreviousAttributes.md#disputeinquiryclosedmerchanteventdatapreviousattributesis_action_required).

### FraudWarningUpdatedMerchantEventDataPreviousAttributes.dispute variant 1.is_evidence_deadline_passed

Declared alternatives: [DisputeInquiryClosedMerchantEventDataPreviousAttributes.is_evidence_deadline_passed](../models/DisputeInquiryClosedMerchantEventDataPreviousAttributes.md#disputeinquiryclosedmerchanteventdatapreviousattributesis_evidence_deadline_passed).

### FraudWarningUpdatedMerchantEventDataPreviousAttributes.dispute variant 1.merchant_id

### FraudWarningUpdatedMerchantEventDataPreviousAttributes.dispute variant 1.merchant_id variant 1

anyOf variant 1: ID of the merchant this resource belongs to..

- Value shape: string. ID of the merchant this resource belongs to. ID of the merchant this resource belongs to. Example: `"mer_01KEZF7C00KPYH1DDFPCCX3B6E"`. 

### FraudWarningUpdatedMerchantEventDataPreviousAttributes.dispute variant 1.merchant_id variant 2

anyOf variant 2.

- Value shape: null. ID of the merchant this resource belongs to. 

### FraudWarningUpdatedMerchantEventDataPreviousAttributes.dispute variant 1.network_reason_code

Declared alternatives: [DisputeInquiryClosedMerchantEventDataPreviousAttributes.network_reason_code](../models/DisputeInquiryClosedMerchantEventDataPreviousAttributes.md#disputeinquiryclosedmerchanteventdatapreviousattributesnetwork_reason_code).

### FraudWarningUpdatedMerchantEventDataPreviousAttributes.dispute variant 1.order

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.order](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesorder).

### FraudWarningUpdatedMerchantEventDataPreviousAttributes.dispute variant 1.order_id

### FraudWarningUpdatedMerchantEventDataPreviousAttributes.dispute variant 1.order_id variant 1

anyOf variant 1: ID of the order the disputed payment was for. Absent when Flint can't link the dispute to an order..

- Value shape: string. ID of the order the disputed payment was for. Absent when Flint can't link the dispute to an order. ID of the order the disputed payment was for. Absent when Flint can't link the dispute to an order. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. 

### FraudWarningUpdatedMerchantEventDataPreviousAttributes.dispute variant 1.order_id variant 2

anyOf variant 2.

- Value shape: null. ID of the order the disputed payment was for. Absent when Flint can't link the dispute to an order. 

### FraudWarningUpdatedMerchantEventDataPreviousAttributes.dispute variant 1.payment_intent

Declared alternatives: [DisputeInquiryClosedMerchantEventDataPreviousAttributes.payment_intent](../models/DisputeInquiryClosedMerchantEventDataPreviousAttributes.md#disputeinquiryclosedmerchanteventdatapreviousattributespayment_intent).

### FraudWarningUpdatedMerchantEventDataPreviousAttributes.dispute variant 1.payment_intent_id

### FraudWarningUpdatedMerchantEventDataPreviousAttributes.dispute variant 1.payment_intent_id variant 1

anyOf variant 1: ID of the payment intent that took the disputed payment. Absent when Flint can't link the dispute to a payment intent..

- Value shape: string. ID of the payment intent that took the disputed payment. Absent when Flint can't link the dispute to a payment intent. ID of the payment intent that took the disputed payment. Absent when Flint can't link the dispute to a payment intent. Example: `"pi_01KEZF7C00G8H9D509YEV22P7R"`. 

### FraudWarningUpdatedMerchantEventDataPreviousAttributes.dispute variant 1.payment_intent_id variant 2

anyOf variant 2.

- Value shape: null. ID of the payment intent that took the disputed payment. Absent when Flint can't link the dispute to a payment intent. 

### FraudWarningUpdatedMerchantEventDataPreviousAttributes.dispute variant 1.payment_option

Declared alternatives: [DisputeInquiryClosedMerchantEventDataPreviousAttributes.payment_option](../models/DisputeInquiryClosedMerchantEventDataPreviousAttributes.md#disputeinquiryclosedmerchanteventdatapreviousattributespayment_option).

### FraudWarningUpdatedMerchantEventDataPreviousAttributes.dispute variant 1.reason

Declared alternatives: [DisputeInquiryClosedMerchantEventDataPreviousAttributes.reason](../models/DisputeInquiryClosedMerchantEventDataPreviousAttributes.md#disputeinquiryclosedmerchanteventdatapreviousattributesreason).

### FraudWarningUpdatedMerchantEventDataPreviousAttributes.dispute variant 1.recommended_evidence_types

Declared alternatives: [DisputeInquiryClosedMerchantEventDataPreviousAttributes.recommended_evidence_types](../models/DisputeInquiryClosedMerchantEventDataPreviousAttributes.md#disputeinquiryclosedmerchanteventdatapreviousattributesrecommended_evidence_types).

### FraudWarningUpdatedMerchantEventDataPreviousAttributes.dispute variant 1.response_unavailable_reason

Declared alternatives: [DisputeInquiryClosedMerchantEventDataPreviousAttributes.response_unavailable_reason](../models/DisputeInquiryClosedMerchantEventDataPreviousAttributes.md#disputeinquiryclosedmerchanteventdatapreviousattributesresponse_unavailable_reason).

### FraudWarningUpdatedMerchantEventDataPreviousAttributes.dispute variant 1.split_reversals

Declared alternatives: [DisputeInquiryClosedMerchantEventDataPreviousAttributes.split_reversals](../models/DisputeInquiryClosedMerchantEventDataPreviousAttributes.md#disputeinquiryclosedmerchanteventdatapreviousattributessplit_reversals).

### FraudWarningUpdatedMerchantEventDataPreviousAttributes.dispute variant 1.status

Declared alternatives: [DisputeInquiryClosedMerchantEventDataPreviousAttributes.status](../models/DisputeInquiryClosedMerchantEventDataPreviousAttributes.md#disputeinquiryclosedmerchanteventdatapreviousattributesstatus).

### FraudWarningUpdatedMerchantEventDataPreviousAttributes.dispute variant 1.status_changed_at

### FraudWarningUpdatedMerchantEventDataPreviousAttributes.dispute variant 1.status_changed_at variant 1

anyOf variant 1: Recorded time of the current status. On first observation this is the dispute creation time. Later status changes use the provider event time when available, or the time Flint observed the change. This may not be the exact decision or submission time..

- Value shape: string. Recorded time of the current status. On first observation this is the dispute creation time. Later status changes use the provider event time when available, or the time Flint observed the change. This may not be the exact decision or submission time. Recorded time of the current status. On first observation this is the dispute creation time. Later status changes use the provider event time when available, or the time Flint observed the change. This may not be the exact decision or submission time. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### FraudWarningUpdatedMerchantEventDataPreviousAttributes.dispute variant 1.status_changed_at variant 2

anyOf variant 2.

- Value shape: null. Recorded time of the current status. On first observation this is the dispute creation time. Later status changes use the provider event time when available, or the time Flint observed the change. This may not be the exact decision or submission time. 

### FraudWarningUpdatedMerchantEventDataPreviousAttributes.dispute variant 1.supported_actions

Declared alternatives: [DisputeInquiryClosedMerchantEventDataPreviousAttributes.supported_actions](../models/DisputeInquiryClosedMerchantEventDataPreviousAttributes.md#disputeinquiryclosedmerchanteventdatapreviousattributessupported_actions).

### FraudWarningUpdatedMerchantEventDataPreviousAttributes.dispute variant 1.updated_at

Declared alternatives: [PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.created_at](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at).

### FraudWarningUpdatedMerchantEventDataPreviousAttributes.dispute_id

### FraudWarningUpdatedMerchantEventDataPreviousAttributes.dispute_id variant 1

anyOf variant 1: The dispute that opened on this payment after the warning. `null` when no dispute has opened..

- Value shape: string. The dispute that opened on this payment after the warning. `null` when no dispute has opened. 

### FraudWarningUpdatedMerchantEventDataPreviousAttributes.dispute_id variant 2

anyOf variant 2.

- Value shape: null. The dispute that opened on this payment after the warning. `null` when no dispute has opened. 

### FraudWarningUpdatedMerchantEventDataPreviousAttributes.fraud_type

### FraudWarningUpdatedMerchantEventDataPreviousAttributes.fraud_type variant 1

anyOf variant 1: The kind of fraud the card network reported..

- Value shape: string. The kind of fraud the card network reported. Values: `"card_never_received"`, `"fraudulent_card_application"`, `"made_with_counterfeit_card"`, `"made_with_lost_card"`, `"made_with_stolen_card"`, `"unauthorized_use_of_card"`, `"other"`.

### FraudWarningUpdatedMerchantEventDataPreviousAttributes.fraud_type variant 2

anyOf variant 2.

- Value shape: null. The kind of fraud the card network reported. 

### FraudWarningUpdatedMerchantEventDataPreviousAttributes.fraud_warning_id

### FraudWarningUpdatedMerchantEventDataPreviousAttributes.fraud_warning_id variant 1

anyOf variant 1: Unique identifier for this fraud warning, prefixed `frw_`..

- Value shape: string. Unique identifier for this fraud warning, prefixed `frw_`. 

### FraudWarningUpdatedMerchantEventDataPreviousAttributes.fraud_warning_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this fraud warning, prefixed `frw_`. 

### FraudWarningUpdatedMerchantEventDataPreviousAttributes.is_actionable

### FraudWarningUpdatedMerchantEventDataPreviousAttributes.is_actionable variant 1

anyOf variant 1: true until the payment is refunded in full, a dispute opens on it, or the card network marks the warning resolved; after that it stays false. A partial refund doesn't change it..

- Value shape: boolean. true until the payment is refunded in full, a dispute opens on it, or the card network marks the warning resolved; after that it stays false. A partial refund doesn't change it. 

### FraudWarningUpdatedMerchantEventDataPreviousAttributes.is_actionable variant 2

anyOf variant 2.

- Value shape: null. true until the payment is refunded in full, a dispute opens on it, or the card network marks the warning resolved; after that it stays false. A partial refund doesn't change it. 

### FraudWarningUpdatedMerchantEventDataPreviousAttributes.payment_intent

Declared alternatives: [DisputeInquiryClosedMerchantEventDataPreviousAttributes.payment_intent](../models/DisputeInquiryClosedMerchantEventDataPreviousAttributes.md#disputeinquiryclosedmerchanteventdatapreviousattributespayment_intent).

### FraudWarningUpdatedMerchantEventDataPreviousAttributes.payment_intent_id

### FraudWarningUpdatedMerchantEventDataPreviousAttributes.payment_intent_id variant 1

anyOf variant 1: ID of the payment the warning is about..

- Value shape: string. ID of the payment the warning is about. 

### FraudWarningUpdatedMerchantEventDataPreviousAttributes.payment_intent_id variant 2

anyOf variant 2.

- Value shape: null. ID of the payment the warning is about. 

### FraudWarningUpdatedMerchantEventDataPreviousAttributes.reported_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### FraudWarningUpdatedMerchantEventDataPreviousAttributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

