[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## FraudWarningResponse

A response containing `FraudWarning` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [FraudWarning](../models/FraudWarning.md#fraudwarning) | Resource, collection, or operation result returned by this request. A notice that a payment may be fraudulent. `data`: [field definitions](../models/FraudWarningResponse.md#fraudwarningresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### FraudWarningResponse.data

Resource, collection, or operation result returned by this request. A notice that a payment may be fraudulent.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `dispute` | Optional | [Dispute](../models/Dispute.md#dispute) or null | Present only when `expand` includes `dispute`; `null` when expanded and there is no related dispute. `dispute`: [declared alternatives](../models/FraudWarningResponse.md#fraudwarningresponsedatadispute). |
| `dispute_id` | Required | string or null | The dispute that opened on this payment after the warning. `null` when no dispute has opened. Example: `"du_01KEZF7C00DEJSF1KTXRT4BBQD"`. |
| `fraud_type` | Required | string | The kind of fraud the card network reported. Values: [7 declared values](#fraudwarningresponsedata-fraud_type-values). |
| `fraud_warning_id` | Required | string | Unique identifier for this fraud warning, prefixed `frw_`. Example: `"frw_01KEZF7C00WD6W4TAFS0FH851W"`. |
| `is_actionable` | Required | boolean | true until the payment is refunded in full, a dispute opens on it, or the card network marks the warning resolved; after that it stays false. A partial refund doesn't change it. |
| `payment_intent` | Optional | [ExpandedPaymentIntentSummary](../models/ExpandedPaymentIntentSummary.md#expandedpaymentintentsummary) or null | Present only when `expand` includes `payment_intent`; `null` when expanded and there is no related payment intent. `payment_intent`: [declared alternatives](../models/DisputeResponse.md#disputeresponsedatapayment_intent). |
| `payment_intent_id` | Required | string | ID of the payment the warning is about. Example: `"pi_01KEZF7C00G8H9D509YEV22P7R"`. |
| `payment_summary` | Required | [FraudWarningPaymentSummary](../models/FraudWarningPaymentSummary.md#fraudwarningpaymentsummary) | The payment's amount, buyer email, and card, for recognizing it. Payment details shown on a public fraud warning: amount, buyer email, card brand, and last four digits. |
| `reported_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |

#### FraudWarningResponse.data fraud_type values

- `"card_never_received"`
- `"fraudulent_card_application"`
- `"made_with_counterfeit_card"`
- `"made_with_lost_card"`
- `"made_with_stolen_card"`
- `"unauthorized_use_of_card"`
- `"other"`

### FraudWarningResponse.data.dispute

Present only when `expand` includes `dispute`; `null` when expanded and there is no related dispute.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Conditional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Amount in dispute. For a chargeback, this amount left your balance when the case opened; an inquiry moves no money. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `can_respond_with_evidence` | Conditional | boolean | Whether this dispute has an evidence response window. It stays true after the window closes or a decision is made. Use is_action_required to know whether a response is needed now. |
| `case_type` | Conditional | string | Kind of case the card network or bank opened. `status` and `is_action_required` say whether a response is needed. Values: `"inquiry"`, `"chargeback"`, `"compliance"`, `"resolution"`, `"block"`, `"other"`, `"bank_return"`. |
| `created_at` | Conditional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `customer` | Conditional | [ExpandedCustomerSummary](../models/ExpandedCustomerSummary.md#expandedcustomersummary) or null | Present only when `expand` includes `customer`; `null` when expanded and there is no related customer. `customer`: [declared alternatives](../models/DisputeResponse.md#disputeresponsedatacustomer). |
| `customer_id` | Conditional | string | The customer on the disputed payment. Absent when the payment has none. Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. |
| `dispute_id` | Conditional | string | Stable identifier of the dispute. Example: `"du_01KEZF7C00DEJSF1KTXRT4BBQD"`. |
| `evidence_due_at` | Conditional | string or null | Deadline for submitting evidence. Respond before it when is_action_required is true. `null` when the dispute has no response window, such as a bank return or a case your processor gave no deadline for. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `evidence_submission_count` | Conditional | integer | How many times evidence was submitted for this dispute. 0 until you submit. Format: `int32`. |
| `fraud_warning_id` | Conditional | string | The fraud warning the card network sent for this payment before the dispute. Absent when there was none. Example: `"frw_01KEZF7C00WD6W4TAFS0FH851W"`. |
| `has_evidence` | Conditional | boolean | Whether evidence is saved for this dispute, submitted or not. In test mode this includes an unsubmitted draft Flint saves when the dispute first needs a response, so it doesn't mean someone started a response. evidence_submission_count says whether evidence was submitted. |
| `is_action_required` | Conditional | boolean | True when status is needs_response or inquiry_needs_response, can_respond_with_evidence is true, and evidence_due_at hasn't passed. Evaluated when the dispute is read; in a webhook payload, as of when Flint recorded the change. It turns false once evidence_due_at has passed, with no event. |
| `is_evidence_deadline_passed` | Conditional | boolean | Whether evidence_due_at has passed on a dispute with a response window. Always false when can_respond_with_evidence is false. Evaluated when the dispute is read; in a webhook payload, as of when Flint recorded the change. It turns true once evidence_due_at has passed, with no event. |
| `merchant_id` | Conditional | string | ID of the merchant this resource belongs to. Example: `"mer_01KEZF7C00KPYH1DDFPCCX3B6E"`. |
| `network_reason_code` | Conditional | string or null | Opaque reason code assigned by the card network. Read it with the disputed payment's card brand; codes differ by network. `null` when the network supplied no code or the supplied code has an unsupported shape. pattern: `^[A-Z0-9.]{1,8}$`. |
| `order` | Conditional | [ExpandedOrderSummary](../models/ExpandedOrderSummary.md#expandedordersummary) or null | Present only when `expand` includes `order`; `null` when expanded and there is no related order. `order`: [declared alternatives](../models/DisputeResponse.md#disputeresponsedataorder). |
| `order_id` | Conditional | string | ID of the order the disputed payment was for. Absent when Flint can't link the dispute to an order. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `payment_intent` | Conditional | [ExpandedPaymentIntentSummary](../models/ExpandedPaymentIntentSummary.md#expandedpaymentintentsummary) or null | Present only when `expand` includes `payment_intent`; `null` when expanded and there is no related payment intent. `payment_intent`: [declared alternatives](../models/DisputeResponse.md#disputeresponsedatapayment_intent). |
| `payment_intent_id` | Conditional | string | ID of the payment intent that took the disputed payment. Absent when Flint can't link the dispute to a payment intent. Example: `"pi_01KEZF7C00G8H9D509YEV22P7R"`. |
| `payment_option` | Conditional | string or null | How the buyer paid for the disputed payment. `null` when Flint hasn't linked the dispute to a payment intent that records a payment option. Values: `"card"`, `"apple_pay"`, `"google_pay"`, `"affirm"`, `"ach_debit"`, `null`. |
| `reason` | Conditional | string | Why the payment was disputed. A reason Flint doesn't recognize is `other`. Values: [12 declared values](DisputeInput.md#disputeinput-reason-values). |
| `recommended_evidence_types` | Conditional | Array of string | Evidence types that usually answer this reason, chosen by Flint, most useful first. Use the ones that fit what you sold. Empty when Flint has no recommendation, including bank returns. Chosen from the stored reason and case_type; in a webhook, frozen when Flint records the change. Items values: [11 declared values](DisputeInput.md#disputeinput-recommended_evidence_types--values). |
| `response_unavailable_reason` | Conditional | string | Why a response is unavailable when can_respond_with_evidence is false. Absent when no reason is reported. Current values are bank_return_not_contestable and response_window_unavailable. response_window_unavailable means no evidence deadline was supplied. Values: `"bank_return_not_contestable"`, `"response_window_unavailable"`. |
| `split_reversals` | Conditional | Array of [SplitReversalReference](../models/SplitReversalReference.md#splitreversalreference) | Fixed seller allocations on the payment, each naming its payment split and reversal. Present only when the payment has splits; an empty array means no seller share was allocated. Read PaymentSplit.reversals for status, shortfall, and reinstated amounts. `split_reversals[]`: [field definitions](../models/DisputeResponse.md#disputeresponsedatasplit_reversals). |
| `status` | Conditional | string | Where the dispute stands. `needs_response` and `inquiry_needs_response` ask you to respond; `inquiry_closed`, `won`, `lost`, and `prevented` are final. Values: `"inquiry_needs_response"`, `"inquiry_under_review"`, `"inquiry_closed"`, `"needs_response"`, `"under_review"`, `"won"`, `"lost"`, `"prevented"`, `"other"`. |
| `status_changed_at` | Conditional | string | Recorded time of the current status. On first observation this is the dispute creation time. Later status changes use the provider event time when available, or the time Flint observed the change. This may not be the exact decision or submission time. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `supported_actions` | Conditional | Array of string | Lifecycle actions Flint accepts now. Evaluated when the dispute is read; in a webhook payload, as of when Flint recorded the change. It turns empty once evidence_due_at has passed, with no event. Items values: `"accept"`. |
| `updated_at` | Conditional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |

### FraudWarningResponse.data.dispute variant 1

anyOf Dispute: A challenge to a collected payment..

- Required: `amount_money`, `can_respond_with_evidence`, `case_type`, `created_at`, `dispute_id`, `evidence_due_at`, `evidence_submission_count`, `has_evidence`, `is_action_required`, `is_evidence_deadline_passed`, `merchant_id`, `network_reason_code`, `payment_option`, `reason`, `recommended_evidence_types`, `status`, `supported_actions`, `updated_at`.
- Optional: `customer`, `customer_id`, `fraud_warning_id`, `order`, `order_id`, `payment_intent`, `payment_intent_id`, `response_unavailable_reason`, `split_reversals`, `status_changed_at`.

### FraudWarningResponse.data.dispute variant 2

anyOf variant 2.

- Undeclared: `amount_money`, `can_respond_with_evidence`, `case_type`, `created_at`, `customer`, `customer_id`, `dispute_id`, `evidence_due_at`, `evidence_submission_count`, `fraud_warning_id`, `has_evidence`, `is_action_required`, `is_evidence_deadline_passed`, `merchant_id`, `network_reason_code`, `order`, `order_id`, `payment_intent`, `payment_intent_id`, `payment_option`, `reason`, `recommended_evidence_types`, `response_unavailable_reason`, `split_reversals`, `status`, `status_changed_at`, `supported_actions`, `updated_at`.
- Value shape: null. Present only when `expand` includes `dispute`; `null` when expanded and there is no related dispute. 

### FraudWarningResponse.data.dispute variant 1.customer

Declared alternatives: [DisputeResponse.data.customer](../models/DisputeResponse.md#disputeresponsedatacustomer).

### FraudWarningResponse.data.dispute variant 1.order

Declared alternatives: [DisputeResponse.data.order](../models/DisputeResponse.md#disputeresponsedataorder).

### FraudWarningResponse.data.dispute variant 1.payment_intent

Declared alternatives: [DisputeResponse.data.payment_intent](../models/DisputeResponse.md#disputeresponsedatapayment_intent).

### FraudWarningResponse.data.dispute variant 1.split_reversals[]

Field definitions: [DisputeResponse.data.split_reversals[]](../models/DisputeResponse.md#disputeresponsedatasplit_reversals).

### FraudWarningResponse.data.payment_intent

Declared alternatives: [DisputeResponse.data.payment_intent](../models/DisputeResponse.md#disputeresponsedatapayment_intent).

### FraudWarningResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

