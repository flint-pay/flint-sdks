[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateRefundResultPaymentRefundsItem

The part of a refund returned through one payment, with the amount, tip, status, and any failure reason.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [CreateRefundResultPaymentRefundsItemAmountMoney](../models/CreateRefundResultPaymentRefundsItemAmountMoney.md#createrefundresultpaymentrefundsitemamountmoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `failure_reason` | Optional | string | Why a refund failed or a payment refund was canceled. Failed and canceled amounts become refundable again. Fix the cause, then create a new refund with a new idempotency key. Unknown provider values are returned as refund_failed. Values: [10 declared values](BuyerRefundInput.md#buyerrefundinput-failure_reason-values). |
| `payment_intent` | Optional | [ExpandedPaymentIntentSummary](../models/ExpandedPaymentIntentSummary.md#expandedpaymentintentsummary) or null |  |
| `payment_intent_id` | Optional | string |  |
| `refunded_tip_money` | Required | [CreateRefundResultPaymentRefundsItemRefundedTipMoney](../models/CreateRefundResultPaymentRefundsItemRefundedTipMoney.md#createrefundresultpaymentrefundsitemrefundedtipmoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `status` | Required | string | Status of this payment refund or tender allocation. A succeeded refund can still fail after a bank rejection. Parent status transitions send refund.succeeded, refund.partially_succeeded, or refund.failed; other public changes send refund.updated. Values: `"pending"`, `"requires_action"`, `"succeeded"`, `"failed"`, `"canceled"`. |

