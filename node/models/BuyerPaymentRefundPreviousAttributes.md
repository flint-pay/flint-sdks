[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerPaymentRefundPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Amount refunded through this payment, including `refunded_tip_money`. `amount_money`: [declared alternatives](../models/BuyerPaymentRefundPreviousAttributes.md#buyerpaymentrefundpreviousattributesamount_money). |
| `failure_reason` | Optional | string or null | Why a refund failed or a payment refund was canceled. Failed and canceled amounts become refundable again, except a refund with reason payment_returned that failed with payment_disputed: the buyer won a dispute on the charge, so nothing is left to refund. A payment_returned refund that failed with refund_abandoned can't be retried through Flint either: the money is in your balance. Flint hasn't repaid the buyer. Repay them another way if you haven't already. Fix the cause, then create a new refund with a new idempotency key. Unknown provider values are returned as refund_failed. Values: [11 declared values](BuyerPaymentRefund.md#buyerpaymentrefund-failure_reason-values). `failure_reason`: [declared alternatives](../models/BuyerPaymentRefundPreviousAttributes.md#buyerpaymentrefundpreviousattributesfailure_reason). |
| `payment_intent` | Optional | ([BuyerExpandedPaymentIntentSummaryPreviousAttributes](../models/BuyerExpandedPaymentIntentSummaryPreviousAttributes.md#buyerexpandedpaymentintentsummarypreviousattributes) or null) or null | The payment summary for `payment_intent_id`. Buyer refund endpoints take no `expand` parameter, so it is never expanded here. `null` when the refund is not expanded. |
| `payment_intent_id` | Optional | string or null | The payment this part of the refund returned money through. `payment_intent_id`: [declared alternatives](../models/BuyerPaymentRefundPreviousAttributes.md#buyerpaymentrefundpreviousattributespayment_intent_id). |
| `refunded_platform_fee_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The platform fee this payment refund returns to you, present when the payment carries a collected platform fee: its share when the refund was created with refund_platform_fee true, 0 when the partner app keeps the fee. Flint returns it once this payment refund succeeds. If this payment refund then fails, Flint doesn't take the returned fee back. See Platform fees. `refunded_platform_fee_money`: [declared alternatives](../models/BuyerPaymentRefundPreviousAttributes.md#buyerpaymentrefundpreviousattributesrefunded_platform_fee_money). |
| `refunded_tip_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Share of `amount_money` that refunds tips. `refunded_tip_money`: [declared alternatives](../models/BuyerPaymentRefundPreviousAttributes.md#buyerpaymentrefundpreviousattributesrefunded_tip_money). |
| `status` | Optional | string or null | Status of this payment refund or tender allocation. A succeeded refund can still fail after a bank rejection. Parent status transitions send refund.succeeded, refund.partially_succeeded, or refund.failed; other public changes send refund.updated. Values: `"pending"`, `"requires_action"`, `"succeeded"`, `"failed"`, `"canceled"`. `status`: [declared alternatives](../models/BuyerPaymentRefundPreviousAttributes.md#buyerpaymentrefundpreviousattributesstatus). |
| `succeeded_at` | Optional | string or null | When this payment refund's `status` first became `succeeded`, as Flint recorded the processor's outcome. It keeps that time if the part fails and later succeeds again. The refund's `tender_allocations` entry for the same payment has the same value. Present only while `status` is `succeeded`. `succeeded_at`: [declared alternatives](../models/BuyerPaymentRefundPreviousAttributes.md#buyerpaymentrefundpreviousattributessucceeded_at). |

### BuyerPaymentRefundPreviousAttributes.amount_money

Amount refunded through this payment, including `refunded_tip_money`.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### BuyerPaymentRefundPreviousAttributes.amount_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### BuyerPaymentRefundPreviousAttributes.amount_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Amount refunded through this payment, including `refunded_tip_money`. 

### BuyerPaymentRefundPreviousAttributes.amount_money variant 1.amount

Declared alternatives: [BalanceUpdatedInstalledMerchantsEvent.data.previous_attributes.held_money variant 1.amount](../models/BalanceUpdatedInstalledMerchantsEvent.md#balanceupdatedinstalledmerchantseventdataprevious_attributesheld_money-variant-1amount).

### BuyerPaymentRefundPreviousAttributes.amount_money variant 1.currency

Declared alternatives: [BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.amount_money variant 1.currency](../models/BalanceTransactionUpdatedInstalledMerchantsEvent.md#balancetransactionupdatedinstalledmerchantseventdataprevious_attributesamount_money-variant-1currency).

### BuyerPaymentRefundPreviousAttributes.failure_reason

### BuyerPaymentRefundPreviousAttributes.failure_reason variant 1

anyOf variant 1: Why a refund failed or a payment refund was canceled. Failed and canceled amounts become refundable again, except a refund with reason payment_returned that failed with payment_disputed: the buyer won a dispute on the charge, so nothing is left to refund. A payment_returned refund that failed with refund_abandoned can't be retried through Flint either: the money is in your balance. Flint hasn't repaid the buyer. Repay them another way if you haven't already. Fix the cause, then create a new refund with a new idempotency key. Unknown provider values are returned as refund_failed..

- Value shape: string. Why a refund failed or a payment refund was canceled. Failed and canceled amounts become refundable again, except a refund with reason payment_returned that failed with payment_disputed: the buyer won a dispute on the charge, so nothing is left to refund. A payment_returned refund that failed with refund_abandoned can't be retried through Flint either: the money is in your balance. Flint hasn't repaid the buyer. Repay them another way if you haven't already. Fix the cause, then create a new refund with a new idempotency key. Unknown provider values are returned as refund_failed. Values: `"expired_or_canceled_card"`, `"lost_or_stolen_card"`, `"insufficient_funds"`, `"insufficient_available_balance"`, `"declined"`, `"merchant_request"`, `"payment_disputed"`, `"refund_abandoned"`, `"payment_refund_failed"`, `"payment_refund_not_attempted"`, `"refund_failed"`.

### BuyerPaymentRefundPreviousAttributes.failure_reason variant 2

anyOf variant 2.

- Value shape: null. Why a refund failed or a payment refund was canceled. Failed and canceled amounts become refundable again, except a refund with reason payment_returned that failed with payment_disputed: the buyer won a dispute on the charge, so nothing is left to refund. A payment_returned refund that failed with refund_abandoned can't be retried through Flint either: the money is in your balance. Flint hasn't repaid the buyer. Repay them another way if you haven't already. Fix the cause, then create a new refund with a new idempotency key. Unknown provider values are returned as refund_failed. 

### BuyerPaymentRefundPreviousAttributes.payment_intent_id

### BuyerPaymentRefundPreviousAttributes.payment_intent_id variant 1

anyOf variant 1: The payment this part of the refund returned money through..

- Value shape: string. The payment this part of the refund returned money through. The payment this part of the refund returned money through. Example: `"pi_01KEZF7C00G8H9D509YEV22P7R"`. 

### BuyerPaymentRefundPreviousAttributes.payment_intent_id variant 2

anyOf variant 2.

- Value shape: null. The payment this part of the refund returned money through. 

### BuyerPaymentRefundPreviousAttributes.refunded_platform_fee_money

The platform fee this payment refund returns to you, present when the payment carries a collected platform fee: its share when the refund was created with refund_platform_fee true, 0 when the partner app keeps the fee. Flint returns it once this payment refund succeeds. If this payment refund then fails, Flint doesn't take the returned fee back. See Platform fees.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### BuyerPaymentRefundPreviousAttributes.refunded_platform_fee_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### BuyerPaymentRefundPreviousAttributes.refunded_platform_fee_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. The platform fee this payment refund returns to you, present when the payment carries a collected platform fee: its share when the refund was created with refund_platform_fee true, 0 when the partner app keeps the fee. Flint returns it once this payment refund succeeds. If this payment refund then fails, Flint doesn't take the returned fee back. See Platform fees. 

### BuyerPaymentRefundPreviousAttributes.refunded_platform_fee_money variant 1.amount

Declared alternatives: [BalanceUpdatedInstalledMerchantsEvent.data.previous_attributes.held_money variant 1.amount](../models/BalanceUpdatedInstalledMerchantsEvent.md#balanceupdatedinstalledmerchantseventdataprevious_attributesheld_money-variant-1amount).

### BuyerPaymentRefundPreviousAttributes.refunded_platform_fee_money variant 1.currency

Declared alternatives: [BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.amount_money variant 1.currency](../models/BalanceTransactionUpdatedInstalledMerchantsEvent.md#balancetransactionupdatedinstalledmerchantseventdataprevious_attributesamount_money-variant-1currency).

### BuyerPaymentRefundPreviousAttributes.refunded_tip_money

Share of `amount_money` that refunds tips.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### BuyerPaymentRefundPreviousAttributes.refunded_tip_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### BuyerPaymentRefundPreviousAttributes.refunded_tip_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Share of `amount_money` that refunds tips. 

### BuyerPaymentRefundPreviousAttributes.refunded_tip_money variant 1.amount

Declared alternatives: [BalanceUpdatedInstalledMerchantsEvent.data.previous_attributes.held_money variant 1.amount](../models/BalanceUpdatedInstalledMerchantsEvent.md#balanceupdatedinstalledmerchantseventdataprevious_attributesheld_money-variant-1amount).

### BuyerPaymentRefundPreviousAttributes.refunded_tip_money variant 1.currency

Declared alternatives: [BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.amount_money variant 1.currency](../models/BalanceTransactionUpdatedInstalledMerchantsEvent.md#balancetransactionupdatedinstalledmerchantseventdataprevious_attributesamount_money-variant-1currency).

### BuyerPaymentRefundPreviousAttributes.status

### BuyerPaymentRefundPreviousAttributes.status variant 1

anyOf variant 1: Status of this payment refund or tender allocation. A succeeded refund can still fail after a bank rejection. Parent status transitions send refund.succeeded, refund.partially_succeeded, or refund.failed; other public changes send refund.updated..

- Value shape: string. Status of this payment refund or tender allocation. A succeeded refund can still fail after a bank rejection. Parent status transitions send refund.succeeded, refund.partially_succeeded, or refund.failed; other public changes send refund.updated. Values: `"pending"`, `"requires_action"`, `"succeeded"`, `"failed"`, `"canceled"`.

### BuyerPaymentRefundPreviousAttributes.status variant 2

anyOf variant 2.

- Value shape: null. Status of this payment refund or tender allocation. A succeeded refund can still fail after a bank rejection. Parent status transitions send refund.succeeded, refund.partially_succeeded, or refund.failed; other public changes send refund.updated. 

### BuyerPaymentRefundPreviousAttributes.succeeded_at

### BuyerPaymentRefundPreviousAttributes.succeeded_at variant 1

anyOf variant 1: When this payment refund's `status` first became `succeeded`, as Flint recorded the processor's outcome. It keeps that time if the part fails and later succeeds again. The refund's `tender_allocations` entry for the same payment has the same value. Present only while `status` is `succeeded`..

- Value shape: string. When this payment refund's `status` first became `succeeded`, as Flint recorded the processor's outcome. It keeps that time if the part fails and later succeeds again. The refund's `tender_allocations` entry for the same payment has the same value. Present only while `status` is `succeeded`. When this payment refund's `status` first became `succeeded`, as Flint recorded the processor's outcome. It keeps that time if the part fails and later succeeds again. The refund's `tender_allocations` entry for the same payment has the same value. Present only while `status` is `succeeded`. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### BuyerPaymentRefundPreviousAttributes.succeeded_at variant 2

anyOf variant 2.

- Value shape: null. When this payment refund's `status` first became `succeeded`, as Flint recorded the processor's outcome. It keeps that time if the part fails and later succeeds again. The refund's `tender_allocations` entry for the same payment has the same value. Present only while `status` is `succeeded`. 

