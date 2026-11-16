[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentRefundPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Amount refunded through this payment, including `refunded_tip_money`. |
| `failure_reason` | Optional | string or null | Why a refund failed or a payment refund was canceled. Failed and canceled amounts become refundable again, except a refund with reason payment_returned that failed with payment_disputed: the buyer won a dispute on the charge, so nothing is left to refund. A payment_returned refund that failed with refund_abandoned can't be retried through Flint either: the money is in your balance. Flint hasn't repaid the buyer. Repay them another way if you haven't already. Fix the cause, then create a new refund with a new idempotency key. Unknown provider values are returned as refund_failed. Values: [11 declared values](BuyerPaymentRefundInput.md#buyerpaymentrefundinput-failure_reason-values). `failure_reason`: [declared alternatives](../models/BuyerPaymentRefundPreviousAttributes.md#buyerpaymentrefundpreviousattributesfailure_reason). |
| `payment_intent` | Optional | [ExpandedPaymentIntentSummaryPreviousAttributes](../models/ExpandedPaymentIntentSummaryPreviousAttributes.md#expandedpaymentintentsummarypreviousattributes) or null | Present only when `expand` includes `payment_refunds.payment_intent`; `null` when expanded and there is no related payment intent. `payment_intent`: [declared alternatives](../models/PaymentRefundPreviousAttributes.md#paymentrefundpreviousattributespayment_intent). |
| `payment_intent_id` | Optional | string or null | The payment this part of the refund returned money through. `payment_intent_id`: [declared alternatives](../models/BuyerPaymentRefundPreviousAttributes.md#buyerpaymentrefundpreviousattributespayment_intent_id). |
| `refunded_platform_fee_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The platform fee this payment refund returns to you, present when the payment carries a collected platform fee: its share when the refund was created with refund_platform_fee true, 0 when the partner app keeps the fee. Flint returns it once this payment refund succeeds. If this payment refund then fails, Flint doesn't take the returned fee back. See Platform fees. |
| `refunded_tip_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Share of `amount_money` that refunds tips. |
| `split_reversals` | Optional | Array of [SplitReversalReferencePreviousAttributes](../models/SplitReversalReferencePreviousAttributes.md#splitreversalreferencepreviousattributes) or null | Fixed seller allocations on the payment, each naming its payment split and reversal. Present only when the payment has splits; an empty array means no seller share was allocated. Read PaymentSplit.reversals for status, shortfall, and reinstated amounts. `split_reversals`: [declared alternatives](../models/DisputeInquiryClosedMerchantEventDataPreviousAttributes.md#disputeinquiryclosedmerchanteventdatapreviousattributessplit_reversals). |
| `status` | Optional | string or null | Status of this payment refund or tender allocation. A succeeded refund can still fail after a bank rejection. Parent status transitions send refund.succeeded, refund.partially_succeeded, or refund.failed; other public changes send refund.updated. Values: `"pending"`, `"requires_action"`, `"succeeded"`, `"failed"`, `"canceled"`. `status`: [declared alternatives](../models/BuyerPaymentRefundPreviousAttributes.md#buyerpaymentrefundpreviousattributesstatus). |
| `succeeded_at` | Optional | string or null | When this payment refund's `status` first became `succeeded`, as Flint recorded the processor's outcome. It keeps that time if the part fails and later succeeds again. The refund's `tender_allocations` entry for the same payment has the same value. Present only while `status` is `succeeded`. `succeeded_at`: [declared alternatives](../models/BuyerPaymentRefundPreviousAttributes.md#buyerpaymentrefundpreviousattributessucceeded_at). |

### PaymentRefundPreviousAttributes.failure_reason

Declared alternatives: [BuyerPaymentRefundPreviousAttributes.failure_reason](../models/BuyerPaymentRefundPreviousAttributes.md#buyerpaymentrefundpreviousattributesfailure_reason).

### PaymentRefundPreviousAttributes.payment_intent

Present only when `expand` includes `payment_refunds.payment_intent`; `null` when expanded and there is no related payment intent.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Conditional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The amount requested from the buyer, including any tip_money. Capturing doesn't change it: after a partial capture it still shows the requested amount, and captured_money shows what was collected. On a standalone payment intent, PATCH can change it only before the first confirmation attempt. An amount_money or tip_money change that leaves too little for stored splits returns LIMIT_EXCEEDED at the changed field with minimum_money. |
| `capture_method` | Conditional | string or null | When money is collected. Defaults to automatic. Values: `"automatic"`, `"manual"`. `capture_method`: [declared alternatives](../models/ExpandedPaymentIntentSummaryPreviousAttributes.md#expandedpaymentintentsummarypreviousattributescapture_method). |
| `created_at` | Conditional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at). |
| `customer_id` | Conditional | string or null | Customer linked to this payment intent. `customer_id`: [declared alternatives](../models/BuyerPaymentRefundPreviousAttributes.md#buyerpaymentrefundpreviousattributespayment_intent-variant-1customer_id). |
| `dispute_status` | Conditional | string or null | Dispute state of this payment. none means no dispute or inquiry is open or recorded. The inquiry_ values track an issuer inquiry or early warning that isn't a chargeback. Read the dispute with GET /v1/disputes for its deadline and evidence. Values: [10 declared values](#paymentrefundpreviousattributespayment_intent-dispute_status-values). `dispute_status`: [declared alternatives](../models/ExpandedPaymentIntentSummaryPreviousAttributes.md#expandedpaymentintentsummarypreviousattributesdispute_status). |
| `order_id` | Conditional | string or null | Order this payment intent belongs to. Create it through the order and confirm it with POST /v1/orders/{order_id}/pay. Capture and cancel use POST /v1/payment-intents/{payment_intent_id}/capture or /cancel for every payment intent. Order-owned intents accept PATCH for metadata and external_reference_id. `order_id`: [declared alternatives](../models/BuyerPaymentRefundPreviousAttributes.md#buyerpaymentrefundpreviousattributespayment_intent-variant-1order_id). |
| `payment_intent_id` | Conditional | string or null | Flint payment intent ID. `payment_intent_id`: [declared alternatives](../models/OrderPaymentAttemptPreviousAttributes.md#orderpaymentattemptpreviousattributespayment_intents-variant-1-fields-1payment_intent_id). |
| `payment_source` | Conditional | [PaymentSourceSummaryPreviousAttributes](../models/PaymentSourceSummaryPreviousAttributes.md#paymentsourcesummarypreviousattributes) or null | Summary of the card or bank account used for the payment. Absent until a payment source is attached. |
| `refund_status` | Conditional | string or null | How much of captured_money has been refunded, including value issued as store credit, based on refunded_money. Values: `"none"`, `"partially_refunded"`, `"refunded"`. `refund_status`: [declared alternatives](../models/ExpandedPaymentIntentSummaryPreviousAttributes.md#expandedpaymentintentsummarypreviousattributesrefund_status). |
| `status` | Conditional | string or null | Lifecycle status. requires_payment_method covers both a new payment intent and one whose last attempt failed, so read last_payment_error with it. succeeded, canceled, and expired are final. Refunds and disputes never change status. Values: `"requires_payment_method"`, `"requires_confirmation"`, `"requires_action"`, `"processing"`, `"requires_capture"`, `"canceled"`, `"succeeded"`, `"expired"`. `status`: [declared alternatives](../models/PaymentAttemptPaymentIntentPreviousAttributes.md#paymentattemptpaymentintentpreviousattributesstatus). |
| `supported_actions` | Conditional | Array of string or null | Verbs this payment intent accepts now, each a POST to /v1/payment-intents/{payment_intent_id}/{action}. The list includes stored order facts and can change without a payment intent version change. Order legs list confirm when a single leg can pay the order or an open attempt can continue it. Several unpaid legs, selected gift cards, or automatic tax with a leg below the balance require pay_order instead. Invoice payments list only cancel; subscription payments list none. Order edit payments list confirm while awaiting payment details or action. A listed action can still be refused due to an open risk review, an order payment attempt, a closed order, or the merchant account. A managed_by_owner refusal names the owner and its command in remediation.next_actions. The merchant list is credential-independent. Checkout credentials receive that list filtered to confirm and cancel on their own session's intents, never capture. Customer sessions omit this field. New actions may be added. Always present with merchant credentials. Items values: `"confirm"`, `"capture"`, `"cancel"`. `supported_actions`: [declared alternatives](../models/ExpandedPaymentIntentSummaryPreviousAttributes.md#expandedpaymentintentsummarypreviousattributessupported_actions). |
| `updated_at` | Conditional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at). |
| `version` | Conditional | integer or null | Persisted version of this resource's owned state. Expanded resources and external observations can change independently. `version`: [declared alternatives](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdata-fields-1previous_attributesversion). |

#### PaymentRefundPreviousAttributes.payment_intent dispute_status values

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

### PaymentRefundPreviousAttributes.payment_intent variant 1

anyOf ExpandedPaymentIntentSummaryPreviousAttributes.

- Optional: `amount_money`, `capture_method`, `created_at`, `customer_id`, `dispute_status`, `order_id`, `payment_intent_id`, `payment_source`, `refund_status`, `status`, `supported_actions`, `updated_at`, `version`.

### PaymentRefundPreviousAttributes.payment_intent variant 2

anyOf variant 2.

- Undeclared: `amount_money`, `capture_method`, `created_at`, `customer_id`, `dispute_status`, `order_id`, `payment_intent_id`, `payment_source`, `refund_status`, `status`, `supported_actions`, `updated_at`, `version`.
- Value shape: null. Present only when `expand` includes `payment_refunds.payment_intent`; `null` when expanded and there is no related payment intent. 

### PaymentRefundPreviousAttributes.payment_intent variant 1.capture_method

Declared alternatives: [ExpandedPaymentIntentSummaryPreviousAttributes.capture_method](../models/ExpandedPaymentIntentSummaryPreviousAttributes.md#expandedpaymentintentsummarypreviousattributescapture_method).

### PaymentRefundPreviousAttributes.payment_intent variant 1.created_at

Declared alternatives: [PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.created_at](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at).

### PaymentRefundPreviousAttributes.payment_intent variant 1.customer_id

Declared alternatives: [BuyerPaymentRefundPreviousAttributes.payment_intent variant 1.customer_id](../models/BuyerPaymentRefundPreviousAttributes.md#buyerpaymentrefundpreviousattributespayment_intent-variant-1customer_id).

### PaymentRefundPreviousAttributes.payment_intent variant 1.dispute_status

Declared alternatives: [ExpandedPaymentIntentSummaryPreviousAttributes.dispute_status](../models/ExpandedPaymentIntentSummaryPreviousAttributes.md#expandedpaymentintentsummarypreviousattributesdispute_status).

### PaymentRefundPreviousAttributes.payment_intent variant 1.order_id

Declared alternatives: [BuyerPaymentRefundPreviousAttributes.payment_intent variant 1.order_id](../models/BuyerPaymentRefundPreviousAttributes.md#buyerpaymentrefundpreviousattributespayment_intent-variant-1order_id).

### PaymentRefundPreviousAttributes.payment_intent variant 1.payment_intent_id

Declared alternatives: [OrderPaymentAttemptPreviousAttributes.payment_intents variant 1.[] fields 1.payment_intent_id](../models/OrderPaymentAttemptPreviousAttributes.md#orderpaymentattemptpreviousattributespayment_intents-variant-1-fields-1payment_intent_id).

### PaymentRefundPreviousAttributes.payment_intent variant 1.refund_status

Declared alternatives: [ExpandedPaymentIntentSummaryPreviousAttributes.refund_status](../models/ExpandedPaymentIntentSummaryPreviousAttributes.md#expandedpaymentintentsummarypreviousattributesrefund_status).

### PaymentRefundPreviousAttributes.payment_intent variant 1.status

Declared alternatives: [PaymentAttemptPaymentIntentPreviousAttributes.status](../models/PaymentAttemptPaymentIntentPreviousAttributes.md#paymentattemptpaymentintentpreviousattributesstatus).

### PaymentRefundPreviousAttributes.payment_intent variant 1.supported_actions

Declared alternatives: [ExpandedPaymentIntentSummaryPreviousAttributes.supported_actions](../models/ExpandedPaymentIntentSummaryPreviousAttributes.md#expandedpaymentintentsummarypreviousattributessupported_actions).

### PaymentRefundPreviousAttributes.payment_intent variant 1.updated_at

Declared alternatives: [PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.created_at](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at).

### PaymentRefundPreviousAttributes.payment_intent variant 1.version

Declared alternatives: [PaymentSplitCanceledEvent.data fields 1.previous_attributes.version](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdata-fields-1previous_attributesversion).

### PaymentRefundPreviousAttributes.payment_intent_id

Declared alternatives: [BuyerPaymentRefundPreviousAttributes.payment_intent_id](../models/BuyerPaymentRefundPreviousAttributes.md#buyerpaymentrefundpreviousattributespayment_intent_id).

### PaymentRefundPreviousAttributes.split_reversals

Declared alternatives: [DisputeInquiryClosedMerchantEventDataPreviousAttributes.split_reversals](../models/DisputeInquiryClosedMerchantEventDataPreviousAttributes.md#disputeinquiryclosedmerchanteventdatapreviousattributessplit_reversals).

### PaymentRefundPreviousAttributes.status

Declared alternatives: [BuyerPaymentRefundPreviousAttributes.status](../models/BuyerPaymentRefundPreviousAttributes.md#buyerpaymentrefundpreviousattributesstatus).

### PaymentRefundPreviousAttributes.succeeded_at

Declared alternatives: [BuyerPaymentRefundPreviousAttributes.succeeded_at](../models/BuyerPaymentRefundPreviousAttributes.md#buyerpaymentrefundpreviousattributessucceeded_at).

