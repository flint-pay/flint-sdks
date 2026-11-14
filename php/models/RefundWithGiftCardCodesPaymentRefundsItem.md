[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RefundWithGiftCardCodesPaymentRefundsItem

The part of a refund returned through one payment, with the amount, tip, status, and any failure reason.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [RefundWithGiftCardCodesPaymentRefundsItemAmountMoney](../models/RefundWithGiftCardCodesPaymentRefundsItemAmountMoney.md#refundwithgiftcardcodespaymentrefundsitemamountmoney) | Amount refunded through this payment, including `refunded_tip_money`. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `failure_reason` | Optional | string | Why a refund failed or a payment refund was canceled. Failed and canceled amounts become refundable again, except a refund with reason payment_returned that failed with payment_disputed: the buyer won a dispute on the charge, so nothing is left to refund. A payment_returned refund that failed with refund_abandoned cannot be retried through Flint; the store must arrange repayment outside Flint. Fix the cause, then create a new refund with a new idempotency key. Unknown provider values are returned as refund_failed. Values: [11 declared values](BuyerPaymentRefundInput.md#buyerpaymentrefundinput-failure_reason-values). |
| `payment_intent` | Optional | [ExpandedPaymentIntentSummary](../models/ExpandedPaymentIntentSummary.md#expandedpaymentintentsummary) or null |  |
| `payment_intent_id` | Optional | string | The payment this part of the refund returned money through. |
| `refunded_platform_fee_money` | Optional | [RefundWithGiftCardCodesPaymentRefundsItemRefundedPlatformFeeMoney](../models/RefundWithGiftCardCodesPaymentRefundsItemRefundedPlatformFeeMoney.md#refundwithgiftcardcodespaymentrefundsitemrefundedplatformfeemoney) | The platform fee this payment refund returns to you, present when the payment carries a collected platform fee: its share when the refund was created with refund_platform_fee true, 0 when the partner app keeps the fee. Flint returns it once this payment refund succeeds. If this payment refund then fails, Flint doesn't take the returned fee back. See Platform fees. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `refunded_tip_money` | Required | [RefundWithGiftCardCodesPaymentRefundsItemRefundedTipMoney](../models/RefundWithGiftCardCodesPaymentRefundsItemRefundedTipMoney.md#refundwithgiftcardcodespaymentrefundsitemrefundedtipmoney) | Share of `amount_money` that refunds tips. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `split_reversals` | Optional | Array of ([RefundWithGiftCardCodesPaymentRefundsItemSplitReversalsItem](../models/RefundWithGiftCardCodesPaymentRefundsItemSplitReversalsItem.md#refundwithgiftcardcodespaymentrefundsitemsplitreversalsitem) and [SplitReversalReference](../models/SplitReversalReference.md#splitreversalreference)) | Fixed seller allocations on the payment, each naming its payment split and reversal. Present only when the payment has splits; an empty array means no seller share was allocated. Read PaymentSplit.reversals for status, shortfall, and reinstated amounts. |
| `status` | Required | string | Status of this payment refund or tender allocation. A succeeded refund can still fail after a bank rejection. Parent status transitions send refund.succeeded, refund.partially_succeeded, or refund.failed; other public changes send refund.updated. Values: `"pending"`, `"requires_action"`, `"succeeded"`, `"failed"`, `"canceled"`. |
| `succeeded_at` | Optional | string | When this payment refund's `status` first became `succeeded`, as Flint recorded the processor's outcome. It keeps that time if the part fails and later succeeds again. The refund's `tender_allocations` entry for the same payment has the same value. Present only while `status` is `succeeded`. Format: `date-time`. |

