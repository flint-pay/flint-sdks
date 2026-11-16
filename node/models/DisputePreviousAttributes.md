[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DisputePreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Amount in dispute. For a chargeback, this amount left your balance when the case opened; an inquiry moves no money. `amount_money`: [declared alternatives](../models/DisputeInquiryClosedInstalledMerchantsEvent.md#disputeinquiryclosedinstalledmerchantseventdataprevious_attributesamount_money). |
| `can_respond_with_evidence` | Optional | boolean or null | Whether this dispute has an evidence response window. It stays true after the window closes or a decision is made. Use is_action_required to know whether a response is needed now. `can_respond_with_evidence`: [declared alternatives](../models/DisputeInquiryClosedInstalledMerchantsEvent.md#disputeinquiryclosedinstalledmerchantseventdataprevious_attributescan_respond_with_evidence). |
| `case_type` | Optional | string or null | Kind of case the card network or bank opened. `status` and `is_action_required` say whether a response is needed. Values: `"inquiry"`, `"chargeback"`, `"compliance"`, `"resolution"`, `"block"`, `"other"`, `"bank_return"`. `case_type`: [declared alternatives](../models/DisputeInquiryClosedInstalledMerchantsEvent.md#disputeinquiryclosedinstalledmerchantseventdataprevious_attributescase_type). |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at). |
| `customer` | Optional | [ExpandedCustomerSummaryPreviousAttributes](../models/ExpandedCustomerSummaryPreviousAttributes.md#expandedcustomersummarypreviousattributes) or null | Present only when `expand` includes `customer`; `null` when expanded and there is no related customer. |
| `customer_id` | Optional | string or null | The customer on the disputed payment. Absent when the payment has none. `customer_id`: [declared alternatives](../models/DisputeInquiryClosedInstalledMerchantsEvent.md#disputeinquiryclosedinstalledmerchantseventdataprevious_attributescustomer_id). |
| `dispute_id` | Optional | string or null | Stable identifier of the dispute. `dispute_id`: [declared alternatives](../models/DisputeInquiryClosedInstalledMerchantsEvent.md#disputeinquiryclosedinstalledmerchantseventdataprevious_attributesdispute_id). |
| `evidence_due_at` | Optional | string or null | Deadline for submitting evidence. Respond before it when is_action_required is true. `null` when the dispute has no response window, such as a bank return or a case your processor gave no deadline for. `evidence_due_at`: [declared alternatives](../models/DisputeInquiryClosedInstalledMerchantsEvent.md#disputeinquiryclosedinstalledmerchantseventdataprevious_attributesevidence_due_at). |
| `evidence_submission_count` | Optional | integer or null | How many times evidence was submitted for this dispute. 0 until you submit. `evidence_submission_count`: [declared alternatives](../models/DisputeInquiryClosedInstalledMerchantsEvent.md#disputeinquiryclosedinstalledmerchantseventdataprevious_attributesevidence_submission_count). |
| `fraud_warning_id` | Optional | string or null | The fraud warning the card network sent for this payment before the dispute. Absent when there was none. `fraud_warning_id`: [declared alternatives](../models/DisputeInquiryClosedInstalledMerchantsEvent.md#disputeinquiryclosedinstalledmerchantseventdataprevious_attributesfraud_warning_id). |
| `has_evidence` | Optional | boolean or null | Whether evidence is saved for this dispute, submitted or not. In test mode this includes an unsubmitted draft Flint saves when the dispute first needs a response, so it doesn't mean someone started a response. evidence_submission_count says whether evidence was submitted. `has_evidence`: [declared alternatives](../models/DisputeInquiryClosedInstalledMerchantsEvent.md#disputeinquiryclosedinstalledmerchantseventdataprevious_attributeshas_evidence). |
| `is_action_required` | Optional | boolean or null | True when status is needs_response or inquiry_needs_response, can_respond_with_evidence is true, and evidence_due_at hasn't passed. Evaluated when the dispute is read; in a webhook payload, as of when Flint recorded the change. It turns false once evidence_due_at has passed, with no event. `is_action_required`: [declared alternatives](../models/DisputeInquiryClosedInstalledMerchantsEvent.md#disputeinquiryclosedinstalledmerchantseventdataprevious_attributesis_action_required). |
| `is_evidence_deadline_passed` | Optional | boolean or null | Whether evidence_due_at has passed on a dispute with a response window. Always false when can_respond_with_evidence is false. Evaluated when the dispute is read; in a webhook payload, as of when Flint recorded the change. It turns true once evidence_due_at has passed, with no event. `is_evidence_deadline_passed`: [declared alternatives](../models/DisputeInquiryClosedInstalledMerchantsEvent.md#disputeinquiryclosedinstalledmerchantseventdataprevious_attributesis_evidence_deadline_passed). |
| `merchant_id` | Optional | string or null | ID of the merchant this resource belongs to. `merchant_id`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributesmerchant_id). |
| `network_reason_code` | Optional | string or null | Opaque reason code assigned by the card network. Read it with the disputed payment's card brand; codes differ by network. `null` when the network supplied no code or the supplied code has an unsupported shape. `network_reason_code`: [declared alternatives](../models/DisputeInquiryClosedInstalledMerchantsEvent.md#disputeinquiryclosedinstalledmerchantseventdataprevious_attributesnetwork_reason_code). |
| `order` | Optional | [ExpandedOrderSummaryPreviousAttributes](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributes) or null | Present only when `expand` includes `order`; `null` when expanded and there is no related order. |
| `order_id` | Optional | string or null | ID of the order the disputed payment was for. Absent when Flint can't link the dispute to an order. `order_id`: [declared alternatives](../models/DisputeInquiryClosedInstalledMerchantsEvent.md#disputeinquiryclosedinstalledmerchantseventdataprevious_attributesorder_id). |
| `payment_intent` | Optional | [ExpandedPaymentIntentSummaryPreviousAttributes](../models/ExpandedPaymentIntentSummaryPreviousAttributes.md#expandedpaymentintentsummarypreviousattributes) or null | Present only when `expand` includes `payment_intent`; `null` when expanded and there is no related payment intent. |
| `payment_intent_id` | Optional | string or null | ID of the payment intent that took the disputed payment. Absent when Flint can't link the dispute to a payment intent. `payment_intent_id`: [declared alternatives](../models/DisputeInquiryClosedInstalledMerchantsEvent.md#disputeinquiryclosedinstalledmerchantseventdataprevious_attributespayment_intent_id). |
| `payment_option` | Optional | string or null | How the buyer paid for the disputed payment. `null` when Flint hasn't linked the dispute to a payment intent that records a payment option. Values: `"card"`, `"apple_pay"`, `"google_pay"`, `"affirm"`, `"ach_debit"`, `null`. `payment_option`: [declared alternatives](../models/DisputeInquiryClosedInstalledMerchantsEvent.md#disputeinquiryclosedinstalledmerchantseventdataprevious_attributespayment_option). |
| `reason` | Optional | string or null | Why the payment was disputed. A reason Flint doesn't recognize is `other`. Values: [12 declared values](Dispute.md#dispute-reason-values). `reason`: [declared alternatives](../models/DisputeInquiryClosedInstalledMerchantsEvent.md#disputeinquiryclosedinstalledmerchantseventdataprevious_attributesreason). |
| `recommended_evidence_types` | Optional | Array of string or null | Evidence types that usually answer this reason, chosen by Flint, most useful first. Use the ones that fit what you sold. Empty when Flint has no recommendation, including bank returns. Chosen from the stored reason and case_type; in a webhook, frozen when Flint records the change. Items values: [11 declared values](Dispute.md#dispute-recommended_evidence_types--values). `recommended_evidence_types`: [declared alternatives](../models/DisputeInquiryClosedInstalledMerchantsEvent.md#disputeinquiryclosedinstalledmerchantseventdataprevious_attributesrecommended_evidence_types). |
| `response_unavailable_reason` | Optional | string or null | Why a response is unavailable when can_respond_with_evidence is false. Absent when no reason is reported. Current values are bank_return_not_contestable and response_window_unavailable. response_window_unavailable means no evidence deadline was supplied. Values: `"bank_return_not_contestable"`, `"response_window_unavailable"`. `response_unavailable_reason`: [declared alternatives](../models/DisputeInquiryClosedInstalledMerchantsEvent.md#disputeinquiryclosedinstalledmerchantseventdataprevious_attributesresponse_unavailable_reason). |
| `split_reversals` | Optional | Array of [SplitReversalReferencePreviousAttributes](../models/SplitReversalReferencePreviousAttributes.md#splitreversalreferencepreviousattributes) or null | Fixed seller allocations on the payment, each naming its payment split and reversal. Present only when the payment has splits; an empty array means no seller share was allocated. Read PaymentSplit.reversals for status, shortfall, and reinstated amounts. `split_reversals`: [declared alternatives](../models/DisputeInquiryClosedInstalledMerchantsEvent.md#disputeinquiryclosedinstalledmerchantseventdataprevious_attributessplit_reversals). |
| `status` | Optional | string or null | Where the dispute stands. `needs_response` and `inquiry_needs_response` ask you to respond; `inquiry_closed`, `won`, `lost`, and `prevented` are final. Values: `"inquiry_needs_response"`, `"inquiry_under_review"`, `"inquiry_closed"`, `"needs_response"`, `"under_review"`, `"won"`, `"lost"`, `"prevented"`, `"other"`. `status`: [declared alternatives](../models/DisputeInquiryClosedInstalledMerchantsEvent.md#disputeinquiryclosedinstalledmerchantseventdataprevious_attributesstatus). |
| `status_changed_at` | Optional | string or null | Recorded time of the current status. On first observation this is the dispute creation time. Later status changes use the provider event time when available, or the time Flint observed the change. This may not be the exact decision or submission time. `status_changed_at`: [declared alternatives](../models/DisputeInquiryClosedInstalledMerchantsEvent.md#disputeinquiryclosedinstalledmerchantseventdataprevious_attributesstatus_changed_at). |
| `supported_actions` | Optional | Array of string or null | Lifecycle actions Flint accepts now. Evaluated when the dispute is read; in a webhook payload, as of when Flint recorded the change. It turns empty once evidence_due_at has passed, with no event. Items values: `"accept"`. `supported_actions`: [declared alternatives](../models/DisputeInquiryClosedInstalledMerchantsEvent.md#disputeinquiryclosedinstalledmerchantseventdataprevious_attributessupported_actions). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at). |

### DisputePreviousAttributes.amount_money

Declared alternatives: [DisputeInquiryClosedInstalledMerchantsEvent.data.previous_attributes.amount_money](../models/DisputeInquiryClosedInstalledMerchantsEvent.md#disputeinquiryclosedinstalledmerchantseventdataprevious_attributesamount_money).

### DisputePreviousAttributes.can_respond_with_evidence

Declared alternatives: [DisputeInquiryClosedInstalledMerchantsEvent.data.previous_attributes.can_respond_with_evidence](../models/DisputeInquiryClosedInstalledMerchantsEvent.md#disputeinquiryclosedinstalledmerchantseventdataprevious_attributescan_respond_with_evidence).

### DisputePreviousAttributes.case_type

Declared alternatives: [DisputeInquiryClosedInstalledMerchantsEvent.data.previous_attributes.case_type](../models/DisputeInquiryClosedInstalledMerchantsEvent.md#disputeinquiryclosedinstalledmerchantseventdataprevious_attributescase_type).

### DisputePreviousAttributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at).

### DisputePreviousAttributes.customer_id

Declared alternatives: [DisputeInquiryClosedInstalledMerchantsEvent.data.previous_attributes.customer_id](../models/DisputeInquiryClosedInstalledMerchantsEvent.md#disputeinquiryclosedinstalledmerchantseventdataprevious_attributescustomer_id).

### DisputePreviousAttributes.dispute_id

Declared alternatives: [DisputeInquiryClosedInstalledMerchantsEvent.data.previous_attributes.dispute_id](../models/DisputeInquiryClosedInstalledMerchantsEvent.md#disputeinquiryclosedinstalledmerchantseventdataprevious_attributesdispute_id).

### DisputePreviousAttributes.evidence_due_at

Declared alternatives: [DisputeInquiryClosedInstalledMerchantsEvent.data.previous_attributes.evidence_due_at](../models/DisputeInquiryClosedInstalledMerchantsEvent.md#disputeinquiryclosedinstalledmerchantseventdataprevious_attributesevidence_due_at).

### DisputePreviousAttributes.evidence_submission_count

Declared alternatives: [DisputeInquiryClosedInstalledMerchantsEvent.data.previous_attributes.evidence_submission_count](../models/DisputeInquiryClosedInstalledMerchantsEvent.md#disputeinquiryclosedinstalledmerchantseventdataprevious_attributesevidence_submission_count).

### DisputePreviousAttributes.fraud_warning_id

Declared alternatives: [DisputeInquiryClosedInstalledMerchantsEvent.data.previous_attributes.fraud_warning_id](../models/DisputeInquiryClosedInstalledMerchantsEvent.md#disputeinquiryclosedinstalledmerchantseventdataprevious_attributesfraud_warning_id).

### DisputePreviousAttributes.has_evidence

Declared alternatives: [DisputeInquiryClosedInstalledMerchantsEvent.data.previous_attributes.has_evidence](../models/DisputeInquiryClosedInstalledMerchantsEvent.md#disputeinquiryclosedinstalledmerchantseventdataprevious_attributeshas_evidence).

### DisputePreviousAttributes.is_action_required

Declared alternatives: [DisputeInquiryClosedInstalledMerchantsEvent.data.previous_attributes.is_action_required](../models/DisputeInquiryClosedInstalledMerchantsEvent.md#disputeinquiryclosedinstalledmerchantseventdataprevious_attributesis_action_required).

### DisputePreviousAttributes.is_evidence_deadline_passed

Declared alternatives: [DisputeInquiryClosedInstalledMerchantsEvent.data.previous_attributes.is_evidence_deadline_passed](../models/DisputeInquiryClosedInstalledMerchantsEvent.md#disputeinquiryclosedinstalledmerchantseventdataprevious_attributesis_evidence_deadline_passed).

### DisputePreviousAttributes.merchant_id

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.merchant_id](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributesmerchant_id).

### DisputePreviousAttributes.network_reason_code

Declared alternatives: [DisputeInquiryClosedInstalledMerchantsEvent.data.previous_attributes.network_reason_code](../models/DisputeInquiryClosedInstalledMerchantsEvent.md#disputeinquiryclosedinstalledmerchantseventdataprevious_attributesnetwork_reason_code).

### DisputePreviousAttributes.order_id

Declared alternatives: [DisputeInquiryClosedInstalledMerchantsEvent.data.previous_attributes.order_id](../models/DisputeInquiryClosedInstalledMerchantsEvent.md#disputeinquiryclosedinstalledmerchantseventdataprevious_attributesorder_id).

### DisputePreviousAttributes.payment_intent_id

Declared alternatives: [DisputeInquiryClosedInstalledMerchantsEvent.data.previous_attributes.payment_intent_id](../models/DisputeInquiryClosedInstalledMerchantsEvent.md#disputeinquiryclosedinstalledmerchantseventdataprevious_attributespayment_intent_id).

### DisputePreviousAttributes.payment_option

Declared alternatives: [DisputeInquiryClosedInstalledMerchantsEvent.data.previous_attributes.payment_option](../models/DisputeInquiryClosedInstalledMerchantsEvent.md#disputeinquiryclosedinstalledmerchantseventdataprevious_attributespayment_option).

### DisputePreviousAttributes.reason

Declared alternatives: [DisputeInquiryClosedInstalledMerchantsEvent.data.previous_attributes.reason](../models/DisputeInquiryClosedInstalledMerchantsEvent.md#disputeinquiryclosedinstalledmerchantseventdataprevious_attributesreason).

### DisputePreviousAttributes.recommended_evidence_types

Declared alternatives: [DisputeInquiryClosedInstalledMerchantsEvent.data.previous_attributes.recommended_evidence_types](../models/DisputeInquiryClosedInstalledMerchantsEvent.md#disputeinquiryclosedinstalledmerchantseventdataprevious_attributesrecommended_evidence_types).

### DisputePreviousAttributes.response_unavailable_reason

Declared alternatives: [DisputeInquiryClosedInstalledMerchantsEvent.data.previous_attributes.response_unavailable_reason](../models/DisputeInquiryClosedInstalledMerchantsEvent.md#disputeinquiryclosedinstalledmerchantseventdataprevious_attributesresponse_unavailable_reason).

### DisputePreviousAttributes.split_reversals

Declared alternatives: [DisputeInquiryClosedInstalledMerchantsEvent.data.previous_attributes.split_reversals](../models/DisputeInquiryClosedInstalledMerchantsEvent.md#disputeinquiryclosedinstalledmerchantseventdataprevious_attributessplit_reversals).

### DisputePreviousAttributes.status

Declared alternatives: [DisputeInquiryClosedInstalledMerchantsEvent.data.previous_attributes.status](../models/DisputeInquiryClosedInstalledMerchantsEvent.md#disputeinquiryclosedinstalledmerchantseventdataprevious_attributesstatus).

### DisputePreviousAttributes.status_changed_at

Declared alternatives: [DisputeInquiryClosedInstalledMerchantsEvent.data.previous_attributes.status_changed_at](../models/DisputeInquiryClosedInstalledMerchantsEvent.md#disputeinquiryclosedinstalledmerchantseventdataprevious_attributesstatus_changed_at).

### DisputePreviousAttributes.supported_actions

Declared alternatives: [DisputeInquiryClosedInstalledMerchantsEvent.data.previous_attributes.supported_actions](../models/DisputeInquiryClosedInstalledMerchantsEvent.md#disputeinquiryclosedinstalledmerchantseventdataprevious_attributessupported_actions).

### DisputePreviousAttributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at).

