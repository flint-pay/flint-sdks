[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RefundTenderAllocationPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Amount of the refund that went to this tender, including `refunded_tip_money`. |
| `destination` | Optional | string or null | Where this allocation is refunded. original returns value to the tender that paid; new_gift_card issues new Flint gift cards. Payment intent store credit requires a succeeded USD card, Apple Pay, Google Pay, or Link payment that belongs to an order, with no open chargeback. Affirm, ACH debit, other payment options, non-USD payments, and payments without an order return INVALID_REQUEST with a NOT_ALLOWED detail. Payment chargebacks use the existing dispute refusal. Gift card redemption destinations are unaffected by the payment restrictions. Values: `"original"`, `"new_gift_card"`. `destination`: [declared alternatives](../models/RefundTenderAllocationPreviousAttributesInput.md#refundtenderallocationpreviousattributesinputdestination). |
| `destination_cards` | Optional | Array of [RefundGiftCardDestinationPreviousAttributesInput](../models/RefundGiftCardDestinationPreviousAttributesInput.md#refundgiftcarddestinationpreviousattributesinput) or null | The gift cards that received this allocation's value, with the amount each received. Absent when the value went back to a payment. `destination_cards`: [declared alternatives](../models/RefundTenderAllocationPreviousAttributesInput.md#refundtenderallocationpreviousattributesinputdestination_cards). |
| `failure_reason` | Optional | string or null | Why a refund failed or a payment refund was canceled. Failed and canceled amounts become refundable again, except a refund with reason payment_returned that failed with payment_disputed: the buyer won a dispute on the charge, so nothing is left to refund. A payment_returned refund that failed with refund_abandoned can't be retried through Flint either: the money is in your balance. Flint hasn't repaid the buyer. Repay them another way if you haven't already. Fix the cause, then create a new refund with a new idempotency key. Unknown provider values are returned as refund_failed. Values: [11 declared values](BuyerPaymentRefundInput.md#buyerpaymentrefundinput-failure_reason-values). `failure_reason`: [declared alternatives](../models/BuyerPaymentRefundPreviousAttributesInput.md#buyerpaymentrefundpreviousattributesinputfailure_reason). |
| `gift_card_id` | Optional | string or null | The gift card whose redemption this allocation refunded. Present when `tender_type` is `gift_card_redemption`. `gift_card_id`: [declared alternatives](../models/RefundTenderAllocationPreviousAttributesInput.md#refundtenderallocationpreviousattributesinputgift_card_id). |
| `gift_card_redemption_id` | Optional | string or null | The gift card redemption this allocation refunded. Present when `tender_type` is `gift_card_redemption`. `gift_card_redemption_id`: [declared alternatives](../models/RefundTenderAllocationPreviousAttributesInput.md#refundtenderallocationpreviousattributesinputgift_card_redemption_id). |
| `payment_intent_id` | Optional | string or null | The payment this allocation refunded. Present when `tender_type` is `payment_intent`. `payment_intent_id`: [declared alternatives](../models/RefundTenderAllocationPreviousAttributesInput.md#refundtenderallocationpreviousattributesinputpayment_intent_id). |
| `refund_allocation_id` | Optional | string or null | Unique identifier for this tender allocation, prefixed `rta_`. `refund_allocation_id`: [declared alternatives](../models/RefundTenderAllocationPreviousAttributesInput.md#refundtenderallocationpreviousattributesinputrefund_allocation_id). |
| `refunded_tip_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Share of this allocation's `amount_money` that refunds tips. |
| `status` | Optional | string or null | Status of this payment refund or tender allocation. A succeeded refund can still fail after a bank rejection. Parent status transitions send refund.succeeded, refund.partially_succeeded, or refund.failed; other public changes send refund.updated. Values: `"pending"`, `"requires_action"`, `"succeeded"`, `"failed"`, `"canceled"`. `status`: [declared alternatives](../models/BuyerPaymentRefundPreviousAttributesInput.md#buyerpaymentrefundpreviousattributesinputstatus). |
| `succeeded_at` | Optional | string or null | When this tender's `status` first became `succeeded`. Gift card credit and store credit (`destination` `new_gift_card`) succeed when the refund is created. A `payment_intent` tender with `destination` `original` has the same value as its `payment_refunds` entry; store credit has no `payment_refunds` entry. Tax reports use it as `refund_succeeded_at` on the rows for this tender. Present only while `status` is `succeeded`. `succeeded_at`: [declared alternatives](../models/RefundTenderAllocationPreviousAttributesInput.md#refundtenderallocationpreviousattributesinputsucceeded_at). |
| `tender_type` | Optional | string or null | Which kind of original tender this allocation refunded. Values: `"payment_intent"`, `"gift_card_redemption"`. `tender_type`: [declared alternatives](../models/RefundTenderAllocationPreviousAttributesInput.md#refundtenderallocationpreviousattributesinputtender_type). |

### RefundTenderAllocationPreviousAttributesInput.destination

### RefundTenderAllocationPreviousAttributesInput.destination variant 1

anyOf variant 1: Where this allocation is refunded. original returns value to the tender that paid; new_gift_card issues new Flint gift cards. Payment intent store credit requires a succeeded USD card, Apple Pay, Google Pay, or Link payment that belongs to an order, with no open chargeback. Affirm, ACH debit, other payment options, non-USD payments, and payments without an order return INVALID_REQUEST with a NOT_ALLOWED detail. Payment chargebacks use the existing dispute refusal. Gift card redemption destinations are unaffected by the payment restrictions..

- Value shape: string. Where this allocation is refunded. original returns value to the tender that paid; new_gift_card issues new Flint gift cards. Payment intent store credit requires a succeeded USD card, Apple Pay, Google Pay, or Link payment that belongs to an order, with no open chargeback. Affirm, ACH debit, other payment options, non-USD payments, and payments without an order return INVALID_REQUEST with a NOT_ALLOWED detail. Payment chargebacks use the existing dispute refusal. Gift card redemption destinations are unaffected by the payment restrictions. Where this allocation is refunded. original returns value to the tender that paid; new_gift_card issues new Flint gift cards. Payment intent store credit requires a succeeded USD card, Apple Pay, Google Pay, or Link payment that belongs to an order, with no open chargeback. Affirm, ACH debit, other payment options, non-USD payments, and payments without an order return INVALID_REQUEST with a NOT_ALLOWED detail. Payment chargebacks use the existing dispute refusal. Gift card redemption destinations are unaffected by the payment restrictions. Default: `"original"`. Values: `"original"`, `"new_gift_card"`.

### RefundTenderAllocationPreviousAttributesInput.destination variant 2

anyOf variant 2.

- Value shape: null. Where this allocation is refunded. original returns value to the tender that paid; new_gift_card issues new Flint gift cards. Payment intent store credit requires a succeeded USD card, Apple Pay, Google Pay, or Link payment that belongs to an order, with no open chargeback. Affirm, ACH debit, other payment options, non-USD payments, and payments without an order return INVALID_REQUEST with a NOT_ALLOWED detail. Payment chargebacks use the existing dispute refusal. Gift card redemption destinations are unaffected by the payment restrictions. 

### RefundTenderAllocationPreviousAttributesInput.destination_cards

### RefundTenderAllocationPreviousAttributesInput.destination_cards variant 1

anyOf variant 1: The gift cards that received this allocation's value, with the amount each received. Absent when the value went back to a payment..

- Value shape: Array of [RefundGiftCardDestinationPreviousAttributesInput](../models/RefundGiftCardDestinationPreviousAttributesInput.md#refundgiftcarddestinationpreviousattributesinput). The gift cards that received this allocation's value, with the amount each received. Absent when the value went back to a payment. 

### RefundTenderAllocationPreviousAttributesInput.destination_cards variant 2

anyOf variant 2.

- Value shape: null. The gift cards that received this allocation's value, with the amount each received. Absent when the value went back to a payment. 

### RefundTenderAllocationPreviousAttributesInput.failure_reason

Declared alternatives: [BuyerPaymentRefundPreviousAttributesInput.failure_reason](../models/BuyerPaymentRefundPreviousAttributesInput.md#buyerpaymentrefundpreviousattributesinputfailure_reason).

### RefundTenderAllocationPreviousAttributesInput.gift_card_id

### RefundTenderAllocationPreviousAttributesInput.gift_card_id variant 1

anyOf variant 1: The gift card whose redemption this allocation refunded. Present when `tender_type` is `gift_card_redemption`..

- Value shape: string. The gift card whose redemption this allocation refunded. Present when `tender_type` is `gift_card_redemption`. The gift card whose redemption this allocation refunded. Present when `tender_type` is `gift_card_redemption`. Example: `"gc_01KEZF7C00RT1618WYBM1Y94CG"`. 

### RefundTenderAllocationPreviousAttributesInput.gift_card_id variant 2

anyOf variant 2.

- Value shape: null. The gift card whose redemption this allocation refunded. Present when `tender_type` is `gift_card_redemption`. 

### RefundTenderAllocationPreviousAttributesInput.gift_card_redemption_id

### RefundTenderAllocationPreviousAttributesInput.gift_card_redemption_id variant 1

anyOf variant 1: The gift card redemption this allocation refunded. Present when `tender_type` is `gift_card_redemption`..

- Value shape: string. The gift card redemption this allocation refunded. Present when `tender_type` is `gift_card_redemption`. The gift card redemption this allocation refunded. Present when `tender_type` is `gift_card_redemption`. Example: `"gcr_01KEZF7C002YD2G2J734RRZTWT"`. 

### RefundTenderAllocationPreviousAttributesInput.gift_card_redemption_id variant 2

anyOf variant 2.

- Value shape: null. The gift card redemption this allocation refunded. Present when `tender_type` is `gift_card_redemption`. 

### RefundTenderAllocationPreviousAttributesInput.payment_intent_id

### RefundTenderAllocationPreviousAttributesInput.payment_intent_id variant 1

anyOf variant 1: The payment this allocation refunded. Present when `tender_type` is `payment_intent`..

- Value shape: string. The payment this allocation refunded. Present when `tender_type` is `payment_intent`. The payment this allocation refunded. Present when `tender_type` is `payment_intent`. Example: `"pi_01KEZF7C00G8H9D509YEV22P7R"`. 

### RefundTenderAllocationPreviousAttributesInput.payment_intent_id variant 2

anyOf variant 2.

- Value shape: null. The payment this allocation refunded. Present when `tender_type` is `payment_intent`. 

### RefundTenderAllocationPreviousAttributesInput.refund_allocation_id

### RefundTenderAllocationPreviousAttributesInput.refund_allocation_id variant 1

anyOf variant 1: Unique identifier for this tender allocation, prefixed `rta_`..

- Value shape: string. Unique identifier for this tender allocation, prefixed `rta_`. Unique identifier for this tender allocation, prefixed `rta_`. Example: `"rta_01KEZF7C00KQJTFKK6C47RSMB8"`. 

### RefundTenderAllocationPreviousAttributesInput.refund_allocation_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this tender allocation, prefixed `rta_`. 

### RefundTenderAllocationPreviousAttributesInput.status

Declared alternatives: [BuyerPaymentRefundPreviousAttributesInput.status](../models/BuyerPaymentRefundPreviousAttributesInput.md#buyerpaymentrefundpreviousattributesinputstatus).

### RefundTenderAllocationPreviousAttributesInput.succeeded_at

### RefundTenderAllocationPreviousAttributesInput.succeeded_at variant 1

anyOf variant 1: When this tender's `status` first became `succeeded`. Gift card credit and store credit (`destination` `new_gift_card`) succeed when the refund is created. A `payment_intent` tender with `destination` `original` has the same value as its `payment_refunds` entry; store credit has no `payment_refunds` entry. Tax reports use it as `refund_succeeded_at` on the rows for this tender. Present only while `status` is `succeeded`..

- Value shape: string. When this tender's `status` first became `succeeded`. Gift card credit and store credit (`destination` `new_gift_card`) succeed when the refund is created. A `payment_intent` tender with `destination` `original` has the same value as its `payment_refunds` entry; store credit has no `payment_refunds` entry. Tax reports use it as `refund_succeeded_at` on the rows for this tender. Present only while `status` is `succeeded`. When this tender's `status` first became `succeeded`. Gift card credit and store credit (`destination` `new_gift_card`) succeed when the refund is created. A `payment_intent` tender with `destination` `original` has the same value as its `payment_refunds` entry; store credit has no `payment_refunds` entry. Tax reports use it as `refund_succeeded_at` on the rows for this tender. Present only while `status` is `succeeded`. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### RefundTenderAllocationPreviousAttributesInput.succeeded_at variant 2

anyOf variant 2.

- Value shape: null. When this tender's `status` first became `succeeded`. Gift card credit and store credit (`destination` `new_gift_card`) succeed when the refund is created. A `payment_intent` tender with `destination` `original` has the same value as its `payment_refunds` entry; store credit has no `payment_refunds` entry. Tax reports use it as `refund_succeeded_at` on the rows for this tender. Present only while `status` is `succeeded`. 

### RefundTenderAllocationPreviousAttributesInput.tender_type

### RefundTenderAllocationPreviousAttributesInput.tender_type variant 1

anyOf variant 1: Which kind of original tender this allocation refunded..

- Value shape: string. Which kind of original tender this allocation refunded. Values: `"payment_intent"`, `"gift_card_redemption"`.

### RefundTenderAllocationPreviousAttributesInput.tender_type variant 2

anyOf variant 2.

- Value shape: null. Which kind of original tender this allocation refunded. 

