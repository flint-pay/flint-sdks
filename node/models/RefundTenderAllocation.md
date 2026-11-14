[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RefundTenderAllocation

One tender's share of a refund, listed in the refund's tender allocations.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Amount of the refund that went to this tender, including `refunded_tip_money`. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/RefundTenderAllocation.md#refundtenderallocationamount_money). |
| `destination` | Optional | string | Where this allocation is refunded. original returns value to the tender that paid; new_gift_card issues new Flint gift cards. Payment intent store credit requires a succeeded USD card, Apple Pay, Google Pay, or Link payment that belongs to an order, with no open chargeback. Affirm, ACH debit, other payment options, non-USD payments, and payments without an order return INVALID_REQUEST with a NOT_ALLOWED detail. Payment chargebacks use the existing dispute refusal. Gift card redemption destinations are unaffected by the payment restrictions. Default: `"original"`. Values: `"original"`, `"new_gift_card"`. |
| `destination_cards` | Optional | Array of [OrderGiftCardAllocation](../models/OrderGiftCardAllocation.md#ordergiftcardallocation) | The gift cards that received this allocation's value, with the amount each received. Absent when the value went back to a payment. `destination_cards[]`: [field definitions](../models/RefundTenderAllocation.md#refundtenderallocationdestination_cards). |
| `failure_reason` | Optional | string | Why a refund failed or a payment refund was canceled. Failed and canceled amounts become refundable again, except a refund with reason payment_returned that failed with payment_disputed: the buyer won a dispute on the charge, so nothing is left to refund. A payment_returned refund that failed with refund_abandoned cannot be retried through Flint; the store must arrange repayment outside Flint. Fix the cause, then create a new refund with a new idempotency key. Unknown provider values are returned as refund_failed. Values: [11 declared values](BuyerPaymentRefund.md#buyerpaymentrefund-failure_reason-values). |
| `gift_card_id` | Optional | string | The gift card whose redemption this allocation refunded. Present when `tender_type` is `gift_card_redemption`. Example: `"gc_01KEZF7C00RT1618WYBM1Y94CG"`. |
| `gift_card_redemption_id` | Optional | string | The gift card redemption this allocation refunded. Present when `tender_type` is `gift_card_redemption`. Example: `"gcr_01KEZF7C002YD2G2J734RRZTWT"`. |
| `payment_intent_id` | Optional | string | The payment this allocation refunded. Present when `tender_type` is `payment_intent`. Example: `"pi_01KEZF7C00G8H9D509YEV22P7R"`. |
| `refund_allocation_id` | Required | string | Unique identifier for this tender allocation, prefixed `rta_`. Example: `"rta_01KEZF7C00KQJTFKK6C47RSMB8"`. |
| `refunded_tip_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Share of this allocation's `amount_money` that refunds tips. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `refunded_tip_money`: [field definitions](../models/RefundTenderAllocation.md#refundtenderallocationrefunded_tip_money). |
| `status` | Required | string | Status of this payment refund or tender allocation. A succeeded refund can still fail after a bank rejection. Parent status transitions send refund.succeeded, refund.partially_succeeded, or refund.failed; other public changes send refund.updated. Values: `"pending"`, `"requires_action"`, `"succeeded"`, `"failed"`, `"canceled"`. |
| `succeeded_at` | Optional | string | When this tender's `status` first became `succeeded`. Gift card credit and store credit (`destination` `new_gift_card`) succeed when the refund is created. A `payment_intent` tender with `destination` `original` has the same value as its `payment_refunds` entry; store credit has no `payment_refunds` entry. Tax reports use it as `refund_succeeded_at` on the rows for this tender. Present only while `status` is `succeeded`. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `tender_type` | Required | string | Which kind of original tender this allocation refunded. Values: `"payment_intent"`, `"gift_card_redemption"`. |

### RefundTenderAllocation.amount_money

Amount of the refund that went to this tender, including `refunded_tip_money`. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### RefundTenderAllocation.destination_cards[]

A gift card that received part of a refund, with the amount credited.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Amount credited to this gift card. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/OrderGiftCardAllocation.md#ordergiftcardallocation-variant-2amount_money). |
| `gift_card_id` | Required | string | ID of the gift card that received the value. Example: `"gc_01KEZF7C00RT1618WYBM1Y94CG"`. |

### RefundTenderAllocation.destination_cards[].amount_money

Field definitions: [OrderGiftCardAllocation variant 2.amount_money](../models/OrderGiftCardAllocation.md#ordergiftcardallocation-variant-2amount_money).

### RefundTenderAllocation.refunded_tip_money

Share of this allocation's `amount_money` that refunds tips. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

