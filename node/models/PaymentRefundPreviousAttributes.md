[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentRefundPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Amount refunded through this payment, including `refunded_tip_money`. `amount_money`: [declared alternatives](../models/BuyerPaymentRefundPreviousAttributes.md#buyerpaymentrefundpreviousattributesamount_money). |
| `failure_reason` | Optional | string or null | Why a refund failed or a payment refund was canceled. Failed and canceled amounts become refundable again, except a refund with reason payment_returned that failed with payment_disputed: the buyer won a dispute on the charge, so nothing is left to refund. A payment_returned refund that failed with refund_abandoned can't be retried through Flint either: the money is in your balance. Flint hasn't repaid the buyer. Repay them another way if you haven't already. Fix the cause, then create a new refund with a new idempotency key. Unknown provider values are returned as refund_failed. Values: [11 declared values](BuyerPaymentRefund.md#buyerpaymentrefund-failure_reason-values). `failure_reason`: [declared alternatives](../models/BuyerPaymentRefundPreviousAttributes.md#buyerpaymentrefundpreviousattributesfailure_reason). |
| `payment_intent` | Optional | [ExpandedPaymentIntentSummaryPreviousAttributes](../models/ExpandedPaymentIntentSummaryPreviousAttributes.md#expandedpaymentintentsummarypreviousattributes) or null | Present only when `expand` includes `payment_refunds.payment_intent`; `null` when expanded and there is no related payment intent. |
| `payment_intent_id` | Optional | string or null | The payment this part of the refund returned money through. `payment_intent_id`: [declared alternatives](../models/BuyerPaymentRefundPreviousAttributes.md#buyerpaymentrefundpreviousattributespayment_intent_id). |
| `refunded_platform_fee_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The platform fee this payment refund returns to you, present when the payment carries a collected platform fee: its share when the refund was created with refund_platform_fee true, 0 when the partner app keeps the fee. Flint returns it once this payment refund succeeds. If this payment refund then fails, Flint doesn't take the returned fee back. See Platform fees. `refunded_platform_fee_money`: [declared alternatives](../models/BuyerPaymentRefundPreviousAttributes.md#buyerpaymentrefundpreviousattributesrefunded_platform_fee_money). |
| `refunded_tip_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Share of `amount_money` that refunds tips. `refunded_tip_money`: [declared alternatives](../models/BuyerPaymentRefundPreviousAttributes.md#buyerpaymentrefundpreviousattributesrefunded_tip_money). |
| `split_reversals` | Optional | Array of [SplitReversalReferencePreviousAttributes](../models/SplitReversalReferencePreviousAttributes.md#splitreversalreferencepreviousattributes) or null | Fixed seller allocations on the payment, each naming its payment split and reversal. Present only when the payment has splits; an empty array means no seller share was allocated. Read PaymentSplit.reversals for status, shortfall, and reinstated amounts. `split_reversals`: [declared alternatives](../models/DisputeInquiryClosedInstalledMerchantsEvent.md#disputeinquiryclosedinstalledmerchantseventdataprevious_attributessplit_reversals). |
| `status` | Optional | string or null | Status of this payment refund or tender allocation. A succeeded refund can still fail after a bank rejection. Parent status transitions send refund.succeeded, refund.partially_succeeded, or refund.failed; other public changes send refund.updated. Values: `"pending"`, `"requires_action"`, `"succeeded"`, `"failed"`, `"canceled"`. `status`: [declared alternatives](../models/BuyerPaymentRefundPreviousAttributes.md#buyerpaymentrefundpreviousattributesstatus). |
| `succeeded_at` | Optional | string or null | When this payment refund's `status` first became `succeeded`, as Flint recorded the processor's outcome. It keeps that time if the part fails and later succeeds again. The refund's `tender_allocations` entry for the same payment has the same value. Present only while `status` is `succeeded`. `succeeded_at`: [declared alternatives](../models/BuyerPaymentRefundPreviousAttributes.md#buyerpaymentrefundpreviousattributessucceeded_at). |

### PaymentRefundPreviousAttributes.amount_money

Declared alternatives: [BuyerPaymentRefundPreviousAttributes.amount_money](../models/BuyerPaymentRefundPreviousAttributes.md#buyerpaymentrefundpreviousattributesamount_money).

### PaymentRefundPreviousAttributes.failure_reason

Declared alternatives: [BuyerPaymentRefundPreviousAttributes.failure_reason](../models/BuyerPaymentRefundPreviousAttributes.md#buyerpaymentrefundpreviousattributesfailure_reason).

### PaymentRefundPreviousAttributes.payment_intent_id

Declared alternatives: [BuyerPaymentRefundPreviousAttributes.payment_intent_id](../models/BuyerPaymentRefundPreviousAttributes.md#buyerpaymentrefundpreviousattributespayment_intent_id).

### PaymentRefundPreviousAttributes.refunded_platform_fee_money

Declared alternatives: [BuyerPaymentRefundPreviousAttributes.refunded_platform_fee_money](../models/BuyerPaymentRefundPreviousAttributes.md#buyerpaymentrefundpreviousattributesrefunded_platform_fee_money).

### PaymentRefundPreviousAttributes.refunded_tip_money

Declared alternatives: [BuyerPaymentRefundPreviousAttributes.refunded_tip_money](../models/BuyerPaymentRefundPreviousAttributes.md#buyerpaymentrefundpreviousattributesrefunded_tip_money).

### PaymentRefundPreviousAttributes.split_reversals

Declared alternatives: [DisputeInquiryClosedInstalledMerchantsEvent.data.previous_attributes.split_reversals](../models/DisputeInquiryClosedInstalledMerchantsEvent.md#disputeinquiryclosedinstalledmerchantseventdataprevious_attributessplit_reversals).

### PaymentRefundPreviousAttributes.status

Declared alternatives: [BuyerPaymentRefundPreviousAttributes.status](../models/BuyerPaymentRefundPreviousAttributes.md#buyerpaymentrefundpreviousattributesstatus).

### PaymentRefundPreviousAttributes.succeeded_at

Declared alternatives: [BuyerPaymentRefundPreviousAttributes.succeeded_at](../models/BuyerPaymentRefundPreviousAttributes.md#buyerpaymentrefundpreviousattributessucceeded_at).

