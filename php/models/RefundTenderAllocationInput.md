[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RefundTenderAllocationInput

One tender's share of a refund, listed in the refund's tender allocations.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Amount of the refund that went to this tender, including `refunded_tip_money`. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `destination` | Optional | string | Where this allocation is refunded. original returns value to the tender that paid; new_gift_card issues new Flint gift cards. Payment intent store credit requires a succeeded USD card, Apple Pay, Google Pay, or Link payment that belongs to an order, with no open chargeback. Affirm, ACH debit, other payment options, non-USD payments, and payments without an order return INVALID_REQUEST with a NOT_ALLOWED detail. Payment chargebacks use the existing dispute refusal. Gift card redemption destinations are unaffected by the payment restrictions. Default: `"original"`. Values: `"original"`, `"new_gift_card"`. |
| `destination_cards` | Optional | Array of [RefundGiftCardDestinationInput](../models/RefundGiftCardDestinationInput.md#refundgiftcarddestinationinput) | The gift cards that received this allocation's value, with the amount each received. Absent when the value went back to a payment. |
| `failure_reason` | Optional | string | Why a refund failed or a payment refund was canceled. Failed and canceled amounts become refundable again. Fix the cause, then create a new refund with a new idempotency key. Unknown provider values are returned as refund_failed. Values: [10 declared values](BuyerRefundInput.md#buyerrefundinput-failure_reason-values). |
| `gift_card_id` | Optional | string | The gift card whose redemption this allocation refunded. Present when `tender_type` is `gift_card_redemption`. Example: `"gc_01KEZF7C00RT1618WYBM1Y94CG"`. |
| `gift_card_redemption_id` | Optional | string | The gift card redemption this allocation refunded. Present when `tender_type` is `gift_card_redemption`. Example: `"gcr_01KEZF7C002YD2G2J734RRZTWT"`. |
| `payment_intent_id` | Optional | string | The payment this allocation refunded. Present when `tender_type` is `payment_intent`. Example: `"pi_01KEZF7C00G8H9D509YEV22P7R"`. |
| `refund_allocation_id` | Required | string | Unique identifier for this tender allocation, prefixed `rta_`. Example: `"rta_01KEZF7C00KQJTFKK6C47RSMB8"`. |
| `refunded_tip_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Share of this allocation's `amount_money` that refunds tips. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `status` | Required | string | Status of this payment refund or tender allocation. A succeeded refund can still fail after a bank rejection. Parent status transitions send refund.succeeded, refund.partially_succeeded, or refund.failed; other public changes send refund.updated. Values: `"pending"`, `"requires_action"`, `"succeeded"`, `"failed"`, `"canceled"`. |
| `succeeded_at` | Optional | string | When this tender's `status` first became `succeeded`. Gift card credit and store credit (`destination` `new_gift_card`) succeed when the refund is created. A `payment_intent` tender with `destination` `original` has the same value as its `payment_refunds` entry; store credit has no `payment_refunds` entry. Tax reports use it as `refund_succeeded_at` on the rows for this tender. Present only while `status` is `succeeded`. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `tender_type` | Required | string | Which kind of original tender this allocation refunded. Values: `"payment_intent"`, `"gift_card_redemption"`. |

