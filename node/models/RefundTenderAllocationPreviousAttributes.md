[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RefundTenderAllocationPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Amount of the refund that went to this tender, including `refunded_tip_money`. `amount_money`: [declared alternatives](../models/RefundTenderAllocationPreviousAttributes.md#refundtenderallocationpreviousattributesamount_money). |
| `destination` | Optional | string or null | Where this allocation is refunded. original returns value to the tender that paid; new_gift_card issues new Flint gift cards. Payment intent store credit requires a succeeded USD card, Apple Pay, Google Pay, or Link payment that belongs to an order, with no open chargeback. Affirm, ACH debit, other payment options, non-USD payments, and payments without an order return INVALID_REQUEST with a NOT_ALLOWED detail. Payment chargebacks use the existing dispute refusal. Gift card redemption destinations are unaffected by the payment restrictions. Values: `"original"`, `"new_gift_card"`. `destination`: [declared alternatives](../models/RefundTenderAllocationPreviousAttributes.md#refundtenderallocationpreviousattributesdestination). |
| `destination_cards` | Optional | Array of [OrderGiftCardAllocationPreviousAttributes](../models/OrderGiftCardAllocationPreviousAttributes.md#ordergiftcardallocationpreviousattributes) or null | The gift cards that received this allocation's value, with the amount each received. Absent when the value went back to a payment. `destination_cards`: [declared alternatives](../models/RefundTenderAllocationPreviousAttributes.md#refundtenderallocationpreviousattributesdestination_cards). |
| `failure_reason` | Optional | string or null | Why a refund failed or a payment refund was canceled. Failed and canceled amounts become refundable again, except a refund with reason payment_returned that failed with payment_disputed: the buyer won a dispute on the charge, so nothing is left to refund. A payment_returned refund that failed with refund_abandoned can't be retried through Flint either: the money is in your balance. Flint hasn't repaid the buyer. Repay them another way if you haven't already. Fix the cause, then create a new refund with a new idempotency key. Unknown provider values are returned as refund_failed. Values: [11 declared values](BuyerPaymentRefund.md#buyerpaymentrefund-failure_reason-values). `failure_reason`: [declared alternatives](../models/BuyerPaymentRefundPreviousAttributes.md#buyerpaymentrefundpreviousattributesfailure_reason). |
| `gift_card_id` | Optional | string or null | The gift card whose redemption this allocation refunded. Present when `tender_type` is `gift_card_redemption`. `gift_card_id`: [declared alternatives](../models/RefundTenderAllocationPreviousAttributes.md#refundtenderallocationpreviousattributesgift_card_id). |
| `gift_card_redemption_id` | Optional | string or null | The gift card redemption this allocation refunded. Present when `tender_type` is `gift_card_redemption`. `gift_card_redemption_id`: [declared alternatives](../models/RefundTenderAllocationPreviousAttributes.md#refundtenderallocationpreviousattributesgift_card_redemption_id). |
| `payment_intent_id` | Optional | string or null | The payment this allocation refunded. Present when `tender_type` is `payment_intent`. `payment_intent_id`: [declared alternatives](../models/RefundTenderAllocationPreviousAttributes.md#refundtenderallocationpreviousattributespayment_intent_id). |
| `refund_allocation_id` | Optional | string or null | Unique identifier for this tender allocation, prefixed `rta_`. `refund_allocation_id`: [declared alternatives](../models/RefundTenderAllocationPreviousAttributes.md#refundtenderallocationpreviousattributesrefund_allocation_id). |
| `refunded_tip_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Share of this allocation's `amount_money` that refunds tips. `refunded_tip_money`: [declared alternatives](../models/RefundTenderAllocationPreviousAttributes.md#refundtenderallocationpreviousattributesrefunded_tip_money). |
| `status` | Optional | string or null | Status of this payment refund or tender allocation. A succeeded refund can still fail after a bank rejection. Parent status transitions send refund.succeeded, refund.partially_succeeded, or refund.failed; other public changes send refund.updated. Values: `"pending"`, `"requires_action"`, `"succeeded"`, `"failed"`, `"canceled"`. `status`: [declared alternatives](../models/BuyerPaymentRefundPreviousAttributes.md#buyerpaymentrefundpreviousattributesstatus). |
| `succeeded_at` | Optional | string or null | When this tender's `status` first became `succeeded`. Gift card credit and store credit (`destination` `new_gift_card`) succeed when the refund is created. A `payment_intent` tender with `destination` `original` has the same value as its `payment_refunds` entry; store credit has no `payment_refunds` entry. Tax reports use it as `refund_succeeded_at` on the rows for this tender. Present only while `status` is `succeeded`. `succeeded_at`: [declared alternatives](../models/RefundTenderAllocationPreviousAttributes.md#refundtenderallocationpreviousattributessucceeded_at). |
| `tender_type` | Optional | string or null | Which kind of original tender this allocation refunded. Values: `"payment_intent"`, `"gift_card_redemption"`. `tender_type`: [declared alternatives](../models/RefundTenderAllocationPreviousAttributes.md#refundtenderallocationpreviousattributestender_type). |

### RefundTenderAllocationPreviousAttributes.amount_money

Amount of the refund that went to this tender, including `refunded_tip_money`.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### RefundTenderAllocationPreviousAttributes.amount_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### RefundTenderAllocationPreviousAttributes.amount_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Amount of the refund that went to this tender, including `refunded_tip_money`. 

### RefundTenderAllocationPreviousAttributes.amount_money variant 1.amount

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.amount](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1amount).

### RefundTenderAllocationPreviousAttributes.amount_money variant 1.currency

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.currency](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1currency).

### RefundTenderAllocationPreviousAttributes.destination

### RefundTenderAllocationPreviousAttributes.destination variant 1

anyOf variant 1: Where this allocation is refunded. original returns value to the tender that paid; new_gift_card issues new Flint gift cards. Payment intent store credit requires a succeeded USD card, Apple Pay, Google Pay, or Link payment that belongs to an order, with no open chargeback. Affirm, ACH debit, other payment options, non-USD payments, and payments without an order return INVALID_REQUEST with a NOT_ALLOWED detail. Payment chargebacks use the existing dispute refusal. Gift card redemption destinations are unaffected by the payment restrictions..

- Value shape: string. Where this allocation is refunded. original returns value to the tender that paid; new_gift_card issues new Flint gift cards. Payment intent store credit requires a succeeded USD card, Apple Pay, Google Pay, or Link payment that belongs to an order, with no open chargeback. Affirm, ACH debit, other payment options, non-USD payments, and payments without an order return INVALID_REQUEST with a NOT_ALLOWED detail. Payment chargebacks use the existing dispute refusal. Gift card redemption destinations are unaffected by the payment restrictions. Where this allocation is refunded. original returns value to the tender that paid; new_gift_card issues new Flint gift cards. Payment intent store credit requires a succeeded USD card, Apple Pay, Google Pay, or Link payment that belongs to an order, with no open chargeback. Affirm, ACH debit, other payment options, non-USD payments, and payments without an order return INVALID_REQUEST with a NOT_ALLOWED detail. Payment chargebacks use the existing dispute refusal. Gift card redemption destinations are unaffected by the payment restrictions. Default: `"original"`. Values: `"original"`, `"new_gift_card"`.

### RefundTenderAllocationPreviousAttributes.destination variant 2

anyOf variant 2.

- Value shape: null. Where this allocation is refunded. original returns value to the tender that paid; new_gift_card issues new Flint gift cards. Payment intent store credit requires a succeeded USD card, Apple Pay, Google Pay, or Link payment that belongs to an order, with no open chargeback. Affirm, ACH debit, other payment options, non-USD payments, and payments without an order return INVALID_REQUEST with a NOT_ALLOWED detail. Payment chargebacks use the existing dispute refusal. Gift card redemption destinations are unaffected by the payment restrictions. 

### RefundTenderAllocationPreviousAttributes.destination_cards

### RefundTenderAllocationPreviousAttributes.destination_cards variant 1

anyOf variant 1: The gift cards that received this allocation's value, with the amount each received. Absent when the value went back to a payment..

- Value shape: Array of [OrderGiftCardAllocationPreviousAttributes](../models/OrderGiftCardAllocationPreviousAttributes.md#ordergiftcardallocationpreviousattributes). The gift cards that received this allocation's value, with the amount each received. Absent when the value went back to a payment. 

### RefundTenderAllocationPreviousAttributes.destination_cards variant 2

anyOf variant 2.

- Value shape: null. The gift cards that received this allocation's value, with the amount each received. Absent when the value went back to a payment. 

### RefundTenderAllocationPreviousAttributes.destination_cards variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Amount credited to this gift card. `amount_money`: [declared alternatives](../models/OrderGiftCardAllocationPreviousAttributes.md#ordergiftcardallocationpreviousattributes-variant-2amount_money). |
| `gift_card_id` | Optional | string or null | ID of the gift card that received the value. `gift_card_id`: [declared alternatives](../models/GiftCardPurchaseRefundRecoveryDestinationPreviousAttributes.md#giftcardpurchaserefundrecoverydestinationpreviousattributesgift_card_id). |

### RefundTenderAllocationPreviousAttributes.destination_cards variant 1.[] fields 1.amount_money

Declared alternatives: [OrderGiftCardAllocationPreviousAttributes variant 2.amount_money](../models/OrderGiftCardAllocationPreviousAttributes.md#ordergiftcardallocationpreviousattributes-variant-2amount_money).

### RefundTenderAllocationPreviousAttributes.destination_cards variant 1.[] fields 1.gift_card_id

Declared alternatives: [GiftCardPurchaseRefundRecoveryDestinationPreviousAttributes.gift_card_id](../models/GiftCardPurchaseRefundRecoveryDestinationPreviousAttributes.md#giftcardpurchaserefundrecoverydestinationpreviousattributesgift_card_id).

### RefundTenderAllocationPreviousAttributes.failure_reason

Declared alternatives: [BuyerPaymentRefundPreviousAttributes.failure_reason](../models/BuyerPaymentRefundPreviousAttributes.md#buyerpaymentrefundpreviousattributesfailure_reason).

### RefundTenderAllocationPreviousAttributes.gift_card_id

### RefundTenderAllocationPreviousAttributes.gift_card_id variant 1

anyOf variant 1: The gift card whose redemption this allocation refunded. Present when `tender_type` is `gift_card_redemption`..

- Value shape: string. The gift card whose redemption this allocation refunded. Present when `tender_type` is `gift_card_redemption`. The gift card whose redemption this allocation refunded. Present when `tender_type` is `gift_card_redemption`. Example: `"gc_01KEZF7C00RT1618WYBM1Y94CG"`. 

### RefundTenderAllocationPreviousAttributes.gift_card_id variant 2

anyOf variant 2.

- Value shape: null. The gift card whose redemption this allocation refunded. Present when `tender_type` is `gift_card_redemption`. 

### RefundTenderAllocationPreviousAttributes.gift_card_redemption_id

### RefundTenderAllocationPreviousAttributes.gift_card_redemption_id variant 1

anyOf variant 1: The gift card redemption this allocation refunded. Present when `tender_type` is `gift_card_redemption`..

- Value shape: string. The gift card redemption this allocation refunded. Present when `tender_type` is `gift_card_redemption`. The gift card redemption this allocation refunded. Present when `tender_type` is `gift_card_redemption`. Example: `"gcr_01KEZF7C002YD2G2J734RRZTWT"`. 

### RefundTenderAllocationPreviousAttributes.gift_card_redemption_id variant 2

anyOf variant 2.

- Value shape: null. The gift card redemption this allocation refunded. Present when `tender_type` is `gift_card_redemption`. 

### RefundTenderAllocationPreviousAttributes.payment_intent_id

### RefundTenderAllocationPreviousAttributes.payment_intent_id variant 1

anyOf variant 1: The payment this allocation refunded. Present when `tender_type` is `payment_intent`..

- Value shape: string. The payment this allocation refunded. Present when `tender_type` is `payment_intent`. The payment this allocation refunded. Present when `tender_type` is `payment_intent`. Example: `"pi_01KEZF7C00G8H9D509YEV22P7R"`. 

### RefundTenderAllocationPreviousAttributes.payment_intent_id variant 2

anyOf variant 2.

- Value shape: null. The payment this allocation refunded. Present when `tender_type` is `payment_intent`. 

### RefundTenderAllocationPreviousAttributes.refund_allocation_id

### RefundTenderAllocationPreviousAttributes.refund_allocation_id variant 1

anyOf variant 1: Unique identifier for this tender allocation, prefixed `rta_`..

- Value shape: string. Unique identifier for this tender allocation, prefixed `rta_`. Unique identifier for this tender allocation, prefixed `rta_`. Example: `"rta_01KEZF7C00KQJTFKK6C47RSMB8"`. 

### RefundTenderAllocationPreviousAttributes.refund_allocation_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this tender allocation, prefixed `rta_`. 

### RefundTenderAllocationPreviousAttributes.refunded_tip_money

Share of this allocation's `amount_money` that refunds tips.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### RefundTenderAllocationPreviousAttributes.refunded_tip_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### RefundTenderAllocationPreviousAttributes.refunded_tip_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Share of this allocation's `amount_money` that refunds tips. 

### RefundTenderAllocationPreviousAttributes.refunded_tip_money variant 1.amount

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.amount](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1amount).

### RefundTenderAllocationPreviousAttributes.refunded_tip_money variant 1.currency

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.currency](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1currency).

### RefundTenderAllocationPreviousAttributes.status

Declared alternatives: [BuyerPaymentRefundPreviousAttributes.status](../models/BuyerPaymentRefundPreviousAttributes.md#buyerpaymentrefundpreviousattributesstatus).

### RefundTenderAllocationPreviousAttributes.succeeded_at

### RefundTenderAllocationPreviousAttributes.succeeded_at variant 1

anyOf variant 1: When this tender's `status` first became `succeeded`. Gift card credit and store credit (`destination` `new_gift_card`) succeed when the refund is created. A `payment_intent` tender with `destination` `original` has the same value as its `payment_refunds` entry; store credit has no `payment_refunds` entry. Tax reports use it as `refund_succeeded_at` on the rows for this tender. Present only while `status` is `succeeded`..

- Value shape: string. When this tender's `status` first became `succeeded`. Gift card credit and store credit (`destination` `new_gift_card`) succeed when the refund is created. A `payment_intent` tender with `destination` `original` has the same value as its `payment_refunds` entry; store credit has no `payment_refunds` entry. Tax reports use it as `refund_succeeded_at` on the rows for this tender. Present only while `status` is `succeeded`. When this tender's `status` first became `succeeded`. Gift card credit and store credit (`destination` `new_gift_card`) succeed when the refund is created. A `payment_intent` tender with `destination` `original` has the same value as its `payment_refunds` entry; store credit has no `payment_refunds` entry. Tax reports use it as `refund_succeeded_at` on the rows for this tender. Present only while `status` is `succeeded`. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### RefundTenderAllocationPreviousAttributes.succeeded_at variant 2

anyOf variant 2.

- Value shape: null. When this tender's `status` first became `succeeded`. Gift card credit and store credit (`destination` `new_gift_card`) succeed when the refund is created. A `payment_intent` tender with `destination` `original` has the same value as its `payment_refunds` entry; store credit has no `payment_refunds` entry. Tax reports use it as `refund_succeeded_at` on the rows for this tender. Present only while `status` is `succeeded`. 

### RefundTenderAllocationPreviousAttributes.tender_type

### RefundTenderAllocationPreviousAttributes.tender_type variant 1

anyOf variant 1: Which kind of original tender this allocation refunded..

- Value shape: string. Which kind of original tender this allocation refunded. Values: `"payment_intent"`, `"gift_card_redemption"`.

### RefundTenderAllocationPreviousAttributes.tender_type variant 2

anyOf variant 2.

- Value shape: null. Which kind of original tender this allocation refunded. 

