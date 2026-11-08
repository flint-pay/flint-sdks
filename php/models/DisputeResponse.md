[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DisputeResponse

A response containing `Dispute` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [Dispute](../models/Dispute.md#dispute) | Resource, collection, or operation result returned by this request. A challenge to a collected payment. `data`: [field definitions](../models/DisputeResponse.md#disputeresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### DisputeResponse.data

Resource, collection, or operation result returned by this request. A challenge to a collected payment.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Amount in dispute. For a chargeback, this amount left your balance when the case opened; an inquiry moves no money. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `can_respond_with_evidence` | Required | boolean | Whether this dispute has an evidence response window. It stays true after the window closes or a decision is made. Use is_action_required to know whether a response is needed now. |
| `case_type` | Required | string | Kind of case the card network or bank opened. `status` and `is_action_required` say whether a response is needed. Values: `"inquiry"`, `"chargeback"`, `"compliance"`, `"resolution"`, `"block"`, `"other"`, `"bank_return"`. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `customer` | Optional | [ExpandedCustomerSummary](../models/ExpandedCustomerSummary.md#expandedcustomersummary) or null | Present only when `expand` includes `customer`; `null` when expanded and there is no related customer. `customer`: [declared alternatives](../models/DisputeResponse.md#disputeresponsedatacustomer). |
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
| `order` | Optional | [ExpandedOrderSummary](../models/ExpandedOrderSummary.md#expandedordersummary) or null | Present only when `expand` includes `order`; `null` when expanded and there is no related order. `order`: [declared alternatives](../models/DisputeResponse.md#disputeresponsedataorder). |
| `order_id` | Optional | string | ID of the order the disputed payment was for. Absent when Flint can't link the dispute to an order. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `payment_intent` | Optional | [ExpandedPaymentIntentSummary](../models/ExpandedPaymentIntentSummary.md#expandedpaymentintentsummary) or null | Present only when `expand` includes `payment_intent`; `null` when expanded and there is no related payment intent. `payment_intent`: [declared alternatives](../models/DisputeResponse.md#disputeresponsedatapayment_intent). |
| `payment_intent_id` | Optional | string | ID of the payment intent that took the disputed payment. Absent when Flint can't link the dispute to a payment intent. Example: `"pi_01KEZF7C00G8H9D509YEV22P7R"`. |
| `payment_option` | Required | string or null | How the buyer paid for the disputed payment. `null` when Flint hasn't linked the dispute to a payment intent that records a payment option. Values: `"card"`, `"apple_pay"`, `"google_pay"`, `"affirm"`, `"ach_debit"`, `null`. |
| `reason` | Required | string | Why the payment was disputed. A reason Flint doesn't recognize is `other`. Values: [12 declared values](DisputeInput.md#disputeinput-reason-values). |
| `recommended_evidence_types` | Required | Array of string | Evidence types that usually answer this reason, chosen by Flint, most useful first. Use the ones that fit what you sold. Empty when Flint has no recommendation, including bank returns. Chosen from the stored reason and case_type; in a webhook, frozen when Flint records the change. Items values: [11 declared values](DisputeInput.md#disputeinput-recommended_evidence_types--values). |
| `response_unavailable_reason` | Optional | string | Why a response is unavailable when can_respond_with_evidence is false. Absent when no reason is reported. Current values are bank_return_not_contestable and response_window_unavailable. response_window_unavailable means no evidence deadline was supplied. Values: `"bank_return_not_contestable"`, `"response_window_unavailable"`. |
| `status` | Required | string | Where the dispute stands. `needs_response` and `inquiry_needs_response` ask you to respond; `inquiry_closed`, `won`, `lost`, and `prevented` are final. Values: `"inquiry_needs_response"`, `"inquiry_under_review"`, `"inquiry_closed"`, `"needs_response"`, `"under_review"`, `"won"`, `"lost"`, `"prevented"`, `"other"`. |
| `status_changed_at` | Optional | string | Recorded time of the current status. On first observation this is the dispute creation time. Later status changes use the provider event time when available, or the time Flint observed the change. This may not be the exact decision or submission time. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `supported_actions` | Required | Array of string | Lifecycle actions Flint accepts now. Evaluated when the dispute is read; in a webhook payload, as of when Flint recorded the change. It turns empty once evidence_due_at has passed, with no event. Items values: `"accept"`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |

### DisputeResponse.data.customer

Present only when `expand` includes `customer`; `null` when expanded and there is no related customer.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Conditional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `customer_id` | Conditional | string | Unique identifier for this customer, prefixed `cus_`. Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. |
| `email` | Conditional | string or null | Customer email. `null` when the customer has none. Unique among the environment's customers. |
| `name` | Conditional | string or null | Customer name. `null` when none is set. |
| `phone` | Conditional | string or null | Customer phone number. `null` when none is set. |
| `status` | Conditional | string | Where the customer is in the deletion lifecycle. Values: `"active"`, `"deletion_processing"`, `"deleted"`. |
| `updated_at` | Conditional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |

### DisputeResponse.data.customer variant 1

anyOf ExpandedCustomerSummary: A customer's summary fields, returned in place of a customer ID when the customer is expanded..

- Required: `customer_id`, `email`, `name`, `phone`, `status`.
- Optional: `created_at`, `updated_at`.

### DisputeResponse.data.customer variant 2

anyOf variant 2.

- Undeclared: `created_at`, `customer_id`, `email`, `name`, `phone`, `status`, `updated_at`.
- Value shape: null. Present only when `expand` includes `customer`; `null` when expanded and there is no related customer. 

### DisputeResponse.data.order

Present only when `expand` includes `order`; `null` when expanded and there is no related order.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_contact` | Conditional | [CheckoutBuyerContact](../models/CheckoutBuyerContact.md#checkoutbuyercontact) | Buyer contact recorded on the order, including guest contact when retained. Omitted when the order has no recorded contact. Buyer contact supplied with payment or saved during checkout. `buyer_contact`: [field definitions](../models/DisputeResponse.md#disputeresponsedataorder-variant-1buyer_contact). |
| `closed_at` | Conditional | string | When the order closed. Present exactly when status is closed. Set once at the transition and never changed. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `closed_reason` | Conditional | string | Why the order closed. Present exactly when status is closed. Set once at closure. Unrecognized reasons are returned as other; new values may be added. Values: `"paid"`, `"closed_by_merchant"`, `"checkout_expired"`, `"written_off"`, `"superseded"`, `"return_resolution_canceled"`, `"other"`. |
| `created_at` | Conditional | string | When the order was created, in RFC3339 format. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `customer_id` | Conditional | string | Customer associated with the order, when one is set. Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. |
| `deferred_promotions` | Conditional | Array of [DeferredPromotion](../models/DeferredPromotion.md#deferredpromotion) | Promotions accepted at subscription signup. They attach when the subscription is provisioned and first discount its first charged cycle. They do not discount this order and are separate from discounts and order totals. Always present; empty when no promotions are deferred. `deferred_promotions[]`: [field definitions](../models/DisputeResponse.md#disputeresponsedataorder-variant-1deferred_promotions). |
| `fulfillment_status` | Conditional | string | Aggregate progress across the order's fulfillment quantities. Values: `"not_fulfilled"`, `"partially_fulfilled"`, `"fulfilled"`, `"canceled"`, `"not_applicable"`, `"closed"`. |
| `governing_delivery_selection_id` | Conditional | string or null | ID of the delivery selection that governs this order. Null when no selection governs the order. Example: `"dsel_01KEZF7C00QC35XBXVXQSCEB2D"`. |
| `order_id` | Conditional | string | Stable identifier of the expanded order. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `order_number` | Conditional | string | Human-readable order number for receipts and merchant reference. |
| `paid_at` | Conditional | string or null | When `payment_status` became `paid`, including a final capture that releases the remaining balance. Set once and never changed, including after refunds. `null` when `payment_status` isn't `paid`, including an order whose balance was written off without being paid. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `payment_intent_ids` | Conditional | Array of string | Payment intents associated with the order. Items: Example: `"pi_01KEZF7C00G8H9D509YEV22P7R"`. |
| `payment_status` | Conditional | string | Collection progress. An invoice write-off also completes collection without receiving the written-off amount. Values: `"unpaid"`, `"partially_paid"`, `"paid"`. |
| `pricing_amounts` | Conditional | [PricingAmounts](../models/PricingAmounts.md#pricingamounts) | Order totals before accounting for collected payments and refunds. The money totals for an order or invoice: subtotal, discounts, charges, tax, requested tip, and total. |
| `refund_status` | Conditional | string | Refund progress for collected money. Values: `"none"`, `"partially_refunded"`, `"refunded"`. |
| `settlement_amounts` | Conditional | [OrderSettlementAmounts](../models/OrderSettlementAmounts.md#ordersettlementamounts) | Payments, refunds, credits, and amounts still owed for the order. The bill settlement amounts plus order overpayments, settled tips, and debt discharged by final capture. Money collected, returned, waived, and still owed on a bill. Money collected, returned, waived, and still owed on a bill. |
| `status` | Conditional | string | Whether the order still accepts changes and new payments. Refunds, fulfillment, disputes, returns, and metadata or note edits continue on a closed order. Values: `"open"`, `"closed"`. |
| `supported_actions` | Conditional | Array of string | Lifecycle actions Flint accepts on the order now, independent of permissions. Items values: `"close"`, `"pay"`, `"resolve_inventory_exception"`. |
| `updated_at` | Conditional | string | When the order was last updated, in RFC3339 format. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |

### DisputeResponse.data.order variant 1

anyOf ExpandedOrderSummary: An order's summary fields, including status, payment and refund status, and pricing and settlement amounts, returned when the order is expanded..

- Required: `deferred_promotions`, `governing_delivery_selection_id`, `order_id`, `paid_at`, `payment_status`, `pricing_amounts`, `refund_status`, `settlement_amounts`, `status`, `supported_actions`.
- Optional: `buyer_contact`, `closed_at`, `closed_reason`, `created_at`, `customer_id`, `fulfillment_status`, `order_number`, `payment_intent_ids`, `updated_at`.

### DisputeResponse.data.order variant 2

anyOf variant 2.

- Undeclared: `buyer_contact`, `closed_at`, `closed_reason`, `created_at`, `customer_id`, `deferred_promotions`, `fulfillment_status`, `governing_delivery_selection_id`, `order_id`, `order_number`, `paid_at`, `payment_intent_ids`, `payment_status`, `pricing_amounts`, `refund_status`, `settlement_amounts`, `status`, `supported_actions`, `updated_at`.
- Value shape: null. Present only when `expand` includes `order`; `null` when expanded and there is no related order. 

### DisputeResponse.data.order variant 1.buyer_contact

Buyer contact recorded on the order, including guest contact when retained. Omitted when the order has no recorded contact. Buyer contact supplied with payment or saved during checkout.

Field definitions: [shared fields](CheckoutBuyerContactInput.md#checkoutbuyercontactinput).

### DisputeResponse.data.order variant 1.deferred_promotions[]

A promotion accepted at subscription signup for the subscription's first charged cycle. It does not discount the signup order.

Field definitions: [shared fields](DeferredPromotionInput.md#deferredpromotioninput).

### DisputeResponse.data.payment_intent

Present only when `expand` includes `payment_intent`; `null` when expanded and there is no related payment intent.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Conditional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The amount requested from the buyer, including any tip_money. Capturing doesn't change it: after a partial capture it still shows the requested amount, and captured_money shows what was collected. On a standalone payment intent, PATCH can change it only before the first confirmation attempt. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `capture_method` | Conditional | string | When money is collected. Defaults to automatic. Values: `"automatic"`, `"manual"`. |
| `created_at` | Conditional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `customer_id` | Conditional | string | Customer linked to this payment intent. Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. |
| `order_id` | Conditional | string | Order this payment intent belongs to. Create it through the order and confirm it with POST /v1/orders/{order_id}/pay. Capture and cancel use POST /v1/payment-intents/{payment_intent_id}/capture or /cancel for every payment intent. Order-owned intents accept PATCH for metadata and external_reference_id. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `payment_intent_id` | Conditional | string | Flint payment intent ID. Example: `"pi_01KEZF7C00G8H9D509YEV22P7R"`. |
| `payment_source` | Conditional | [PaymentSourceSummary](../models/PaymentSourceSummary.md#paymentsourcesummary) | Summary of the card or bank account used for the payment. Absent until a payment source is attached. A summary of the payment source used for a payment, by funding-method family, with card or bank account display details. |
| `refund_status` | Conditional | string | How much of captured_money has been refunded, including value issued as store credit, based on refunded_money. Values: `"none"`, `"partially_refunded"`, `"refunded"`. |
| `status` | Conditional | string | Lifecycle status. requires_payment_method covers both a new payment intent and one whose last attempt failed, so read last_payment_error with it. succeeded, canceled, and expired are final. Refunds and disputes never change status. Values: `"requires_payment_method"`, `"requires_confirmation"`, `"requires_action"`, `"processing"`, `"requires_capture"`, `"canceled"`, `"succeeded"`, `"expired"`. |
| `updated_at` | Conditional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `version` | Conditional | integer | Persisted version of this resource's owned state. Expanded resources and external observations can change independently. Format: `uint64`. minimum: `1`. |

### DisputeResponse.data.payment_intent variant 1

anyOf ExpandedPaymentIntentSummary: A payment intent's summary fields, including amount, status, and capture method, returned when the payment intent is expanded..

- Required: `amount_money`, `payment_intent_id`, `status`, `version`.
- Optional: `capture_method`, `created_at`, `customer_id`, `order_id`, `payment_source`, `refund_status`, `updated_at`.

### DisputeResponse.data.payment_intent variant 2

anyOf variant 2.

- Undeclared: `amount_money`, `capture_method`, `created_at`, `customer_id`, `order_id`, `payment_intent_id`, `payment_source`, `refund_status`, `status`, `updated_at`, `version`.
- Value shape: null. Present only when `expand` includes `payment_intent`; `null` when expanded and there is no related payment intent. 

### DisputeResponse.meta

Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Optional | string | API version used to produce this response. |
| `idempotency_replayed` | Optional | boolean | Whether this response replays a stored result for the supplied Idempotency-Key. |
| `trace_id` | Optional | string | Trace identifier to include when contacting Flint about this request. Example: `"0123456789abcdef0123456789abcdef"`. |
| `warnings` | Optional | Array of [ResponseWarning](../models/ResponseWarning.md#responsewarning) | Conditions that need attention even though the request succeeded. `warnings[]`: [field definitions](../models/DisputeResponse.md#disputeresponsemetawarnings). |

### DisputeResponse.meta.warnings[]

A non-blocking condition reported with a response. The `code` identifies the condition and `severity` says how urgent it is.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `capability` | Optional | string | Merchant capability for merchant_onboarding_deadline, merchant_capability_pending, or merchant_capability_inactive. Allowed for `merchant_onboarding_deadline`, `merchant_capability_pending`, `merchant_capability_inactive` warnings. Values: [8 declared values](#disputeresponsemetawarnings-capability-values). |
| `code` | Required | string | Warning code. Clients must accept values added in future releases. Values: [13 declared values](ResponseWarningInput.md#responsewarninginput-code-values). |
| `due_at` | Optional | string | Time by which the merchant must submit onboarding requirements, as an RFC 3339 UTC timestamp. Present only for merchant_onboarding_deadline or merchant_onboarding_past_due when a submission deadline is set. Allowed for `merchant_onboarding_past_due`, `merchant_onboarding_deadline` warnings. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `message` | Required | string | Description of the non-blocking condition. |
| `next_actions` | Optional | Array of [NextAction](../models/NextAction.md#nextaction) | Suggested actions for addressing the warning. Allowed for `merchant_onboarding_past_due`, `merchant_onboarding_deadline`, `merchant_capability_pending`, `merchant_capability_inactive`, `payout_settings_reconciling` warnings. `next_actions[]`: [field definitions](../models/DisputeResponse.md#disputeresponsemetawarningsnext_actions). |
| `observed_at` | Optional | string | Last synchronization time for merchant_onboarding_past_due, merchant_onboarding_deadline, merchant_capability_pending, or merchant_capability_inactive, when available. Allowed for `merchant_onboarding_past_due`, `merchant_onboarding_deadline`, `merchant_capability_pending`, `merchant_capability_inactive` warnings. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `previous_stage` | Optional | string | Previous risk rule evaluation stage for rule_evaluation_stage_changed. Allowed for `rule_evaluation_stage_changed` warnings. Values: `"pre_authorization"`, `"post_authorization"`. |
| `promotion_code` | Optional | string | Promotion code that was accepted but did not apply, on a promotion_declined warning, or the code of a removed promotion discount, on a promotion_removed warning. Allowed for `promotion_declined`, `promotion_removed` warnings. |
| `reason` | Optional | string | Stable Flint reason code. On a promotion_declined or promotion_removed warning this is the promotion decline reason (for example superseded_by_better_offer); an unrecognized value falls back to not_eligible. See the Promotions reference for the full list. Allowed for `promotion_declined`, `promotion_removed` warnings. Values: [24 declared values](PromotionCandidateInput.md#promotioncandidateinput-promotion_decline_reason-values). |
| `removed_scopes` | Optional | Array of string | Requested scopes excluded from the issued API key for api_key_scopes_reduced. Allowed for `api_key_scopes_reduced` warnings. Items values: [96 declared values](APIKeyInput.md#apikeyinput-scopes--values). |
| `resets_at` | Optional | string | End of the original order reservation's usage period, at the start of a New York calendar month, as an RFC 3339 UTC timestamp. Replays preserve this original reset time. Allowed for `external_paid_orders_over_allowance` warnings. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `resource_id` | Optional | string | Resource ID, paired with resource_type when the warning identifies a resource. Allowed for `billing_interval_options_same_price`, `merchant_onboarding_past_due`, `merchant_onboarding_deadline`, `merchant_capability_pending`, `merchant_capability_inactive`, `payout_settings_reconciling`, `promotion_declined`, `promotion_removed`, `risk_rule_limit_reached`, `rule_evaluation_stage_changed`, `external_paid_orders_over_allowance`, `replacement_codes_unavailable` warnings. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `resource_type` | Optional | string | Type of the resource identified by resource_id. Allowed for `billing_interval_options_same_price`, `merchant_onboarding_past_due`, `merchant_onboarding_deadline`, `merchant_capability_pending`, `merchant_capability_inactive`, `payout_settings_reconciling`, `promotion_declined`, `promotion_removed`, `risk_rule_limit_reached`, `rule_evaluation_stage_changed`, `external_paid_orders_over_allowance`, `replacement_codes_unavailable` warnings. Example: `"order"`. Values: [146 declared values](APIRequestLogInput.md#apirequestloginput-resource_type-values). |
| `severity` | Required | string | Warning severity. Values: `"warning"`, `"critical"`. |
| `stage` | Optional | string | New risk rule evaluation stage for rule_evaluation_stage_changed. Allowed for `rule_evaluation_stage_changed` warnings. Values: `"pre_authorization"`, `"post_authorization"`. |
| `would_have_applied_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Discount amount this promotion would have applied had it won, on a promotion_declined warning, or the amount a removed promotion discount applied before removal, on a promotion_removed warning. Allowed for `promotion_declined`, `promotion_removed` warnings. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

#### DisputeResponse.meta.warnings[] capability values

- `"accept_card_payments"`
- `"save_payment_methods"`
- `"accept_affirm_payments"`
- `"accept_ach_debit_payments"`
- `"receive_payouts"`
- `"create_standard_payouts"`
- `"manage_payout_destinations"`
- `"manage_payout_settings"`

### DisputeResponse.meta.warnings[].next_actions[]

A follow-up action. When target_resource is present, send its resource_id in the target request field named {resource_type}_id.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `action_type` | Required | string | Action to take next. Use its target resource and required_fields to prepare the request. Values: [34 declared values](NextActionInput.md#nextactioninput-action_type-values). |
| `expires_at` | Optional | string | When this suggested action expires, in RFC3339 format. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `merchant_account_session` | Optional | [ReadinessMerchantAccountSession](../models/ReadinessMerchantAccountSession.md#readinessmerchantaccountsession) | Request body to send unchanged to POST /v1/merchant-account-sessions when action_type is create_merchant_account_session. When absent, GET merchant readiness and use its recommended session body. Shared request body for `create_merchant_account_session` next actions in readiness, onboarding, errors, and warnings. Send unchanged to POST /v1/merchant-account-sessions; components and collection policy describe which requirements to collect. |
| `reason_code` | Optional | string | Machine-readable reason this action is suggested. |
| `reason_message` | Optional | string | Explanation of why this action is suggested. |
| `required_fields` | Optional | Array of string | Field names that must be supplied to perform this action. |
| `required_scope` | Optional | string | API key scope required to call the public endpoint in url, when the action points at another Flint API endpoint. Values: [96 declared values](APIKeyInput.md#apikeyinput-scopes--values). |
| `requires_human_confirmation` | Optional | boolean | Whether a person must approve the action before it is performed. |
| `suggested_delay_milliseconds` | Optional | integer | Suggested wait before performing the action, in milliseconds. Format: `int32`. |
| `target_resource` | Optional | [ResourceReference](../models/ResourceReference.md#resourcereference) | Resource whose ID to send in the target request field named {resource_type}_id when url cannot carry the target. A reference to another resource by `resource_type` and `resource_id`. `target_resource`: [field definitions](../models/DisputeResponse.md#disputeresponsemetawarningsnext_actionstarget_resource). |
| `url` | Optional | string | Public endpoint or launch URL for this remediation action, when applicable. |

### DisputeResponse.meta.warnings[].next_actions[].target_resource

Resource whose ID to send in the target request field named {resource_type}_id when url cannot carry the target. A reference to another resource by `resource_type` and `resource_id`.

Field definitions: [shared fields](ResourceReferenceInput.md#resourcereferenceinput).

