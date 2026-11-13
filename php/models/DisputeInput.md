[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DisputeInput

A challenge to a collected payment.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Amount in dispute. For a chargeback, this amount left your balance when the case opened; an inquiry moves no money. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `can_respond_with_evidence` | Required | boolean | Whether this dispute has an evidence response window. It stays true after the window closes or a decision is made. Use is_action_required to know whether a response is needed now. |
| `case_type` | Required | string | Kind of case the card network or bank opened. `status` and `is_action_required` say whether a response is needed. Values: `"inquiry"`, `"chargeback"`, `"compliance"`, `"resolution"`, `"block"`, `"other"`, `"bank_return"`. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `customer` | Optional | [ExpandedCustomerSummaryInput](../models/ExpandedCustomerSummaryInput.md#expandedcustomersummaryinput) or null | Present only when `expand` includes `customer`; `null` when expanded and there is no related customer. |
| `customer_id` | Optional | string | The customer on the disputed payment. Absent when the payment has none. Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. |
| `dispute_id` | Required | string | Stable identifier of the dispute. Example: `"du_01KEZF7C00DEJSF1KTXRT4BBQD"`. |
| `evidence_due_at` | Required | string or null | Deadline for submitting evidence. Respond before it when is_action_required is true. `null` when the dispute has no response window, such as a bank return or a case your processor gave no deadline for. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `evidence_submission_count` | Required | integer | How many times evidence was submitted for this dispute. 0 until you submit. Format: `int32`. |
| `fraud_warning_id` | Optional | string | The fraud warning the card network sent for this payment before the dispute. Absent when there was none. Example: `"frw_01KEZF7C00WD6W4TAFS0FH851W"`. |
| `has_evidence` | Required | boolean | Whether evidence is saved for this dispute, submitted or not. In test mode this includes an unsubmitted draft Flint saves when the dispute first needs a response, so it doesn't mean someone started a response. evidence_submission_count says whether evidence was submitted. |
| `is_action_required` | Required | boolean | True when status is needs_response or inquiry_needs_response, can_respond_with_evidence is true, and evidence_due_at hasn't passed. Evaluated when the dispute is read; in a webhook payload, as of when Flint recorded the change. It turns false once evidence_due_at has passed, with no event. |
| `is_evidence_deadline_passed` | Required | boolean | Whether evidence_due_at has passed on a dispute with a response window. Always false when can_respond_with_evidence is false. Evaluated when the dispute is read; in a webhook payload, as of when Flint recorded the change. It turns true once evidence_due_at has passed, with no event. |
| `merchant_id` | Required | string | ID of the merchant this resource belongs to. Example: `"mer_01KEZF7C00KPYH1DDFPCCX3B6E"`. |
| `network_reason_code` | Required | string or null | Opaque reason code assigned by the card network. Read it with the disputed payment's card brand; codes differ by network. `null` when the network supplied no code or the supplied code has an unsupported shape. pattern: `^[A-Z0-9.]{1,8}$`. |
| `order` | Optional | [ExpandedOrderSummaryInput](../models/ExpandedOrderSummaryInput.md#expandedordersummaryinput) or null | Present only when `expand` includes `order`; `null` when expanded and there is no related order. |
| `order_id` | Optional | string | ID of the order the disputed payment was for. Absent when Flint can't link the dispute to an order. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `payment_intent` | Optional | [ExpandedPaymentIntentSummaryInput](../models/ExpandedPaymentIntentSummaryInput.md#expandedpaymentintentsummaryinput) or null | Present only when `expand` includes `payment_intent`; `null` when expanded and there is no related payment intent. |
| `payment_intent_id` | Optional | string | ID of the payment intent that took the disputed payment. Absent when Flint can't link the dispute to a payment intent. Example: `"pi_01KEZF7C00G8H9D509YEV22P7R"`. |
| `payment_option` | Required | string or null | How the buyer paid for the disputed payment. `null` when Flint hasn't linked the dispute to a payment intent that records a payment option. Values: `"card"`, `"apple_pay"`, `"google_pay"`, `"affirm"`, `"ach_debit"`, `null`. |
| `reason` | Required | string | Why the payment was disputed. A reason Flint doesn't recognize is `other`. Values: [12 declared values](#disputeinput-reason-values). |
| `recommended_evidence_types` | Required | Array of string | Evidence types that usually answer this reason, chosen by Flint, most useful first. Use the ones that fit what you sold. Empty when Flint has no recommendation, including bank returns. Chosen from the stored reason and case_type; in a webhook, frozen when Flint records the change. Items values: [11 declared values](#disputeinput-recommended_evidence_types--values). |
| `response_unavailable_reason` | Optional | string | Why a response is unavailable when can_respond_with_evidence is false. Absent when no reason is reported. Current values are bank_return_not_contestable and response_window_unavailable. response_window_unavailable means no evidence deadline was supplied. Values: `"bank_return_not_contestable"`, `"response_window_unavailable"`. |
| `split_reversals` | Optional | Array of [SplitReversalReferenceInput](../models/SplitReversalReferenceInput.md#splitreversalreferenceinput) | Fixed seller allocations on the payment, each naming its payment split and reversal. Present only when the payment has splits; an empty array means no seller share was allocated. Read PaymentSplit.reversals for status, shortfall, and reinstated amounts. |
| `status` | Required | string | Where the dispute stands. `needs_response` and `inquiry_needs_response` ask you to respond; `inquiry_closed`, `won`, `lost`, and `prevented` are final. Values: `"inquiry_needs_response"`, `"inquiry_under_review"`, `"inquiry_closed"`, `"needs_response"`, `"under_review"`, `"won"`, `"lost"`, `"prevented"`, `"other"`. |
| `status_changed_at` | Optional | string | Recorded time of the current status. On first observation this is the dispute creation time. Later status changes use the provider event time when available, or the time Flint observed the change. This may not be the exact decision or submission time. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `supported_actions` | Required | Array of string | Lifecycle actions Flint accepts now. Evaluated when the dispute is read; in a webhook payload, as of when Flint recorded the change. It turns empty once evidence_due_at has passed, with no event. Items values: `"accept"`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |

#### DisputeInput reason values

- `"fraudulent"`
- `"unrecognized"`
- `"duplicate"`
- `"product_not_received"`
- `"product_not_as_described"`
- `"refund_not_processed"`
- `"subscription_canceled"`
- `"noncompliant"`
- `"insufficient_funds"`
- `"debit_not_authorized"`
- `"bank_account_not_found"`
- `"other"`

#### DisputeInput recommended_evidence_types [] values

- `"customer_details"`
- `"customer_communication"`
- `"customer_signature"`
- `"receipt"`
- `"shipping_documentation"`
- `"service_documentation"`
- `"access_activity_log"`
- `"product_description"`
- `"refund_policy"`
- `"duplicate_charge_documentation"`
- `"cancellation_policy"`

