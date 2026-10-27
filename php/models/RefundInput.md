[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RefundInput

Money returned against a collected payment.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `created_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `credit_note_id` | Optional | string |  |
| `customer` | Optional | [ExpandedCustomerSummaryInput](../models/ExpandedCustomerSummaryInput.md#expandedcustomersummaryinput) or null |  |
| `customer_id` | Optional | string |  |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. maxLength: `255`. |
| `failure_reason` | Optional | string | Why a refund failed or a payment refund was canceled. Failed and canceled amounts become refundable again. Fix the cause, then create a new refund with a new idempotency key. Unknown provider values are returned as refund_failed. Values: [10 declared values](BuyerRefundInput.md#buyerrefundinput-failure_reason-values). |
| `idempotency_key` | Optional | string | Present only on refunds created through POST /v1/credit-notes/{credit_note_id}/refunds: the Idempotency-Key of that call. Use it with GET /v1/credit-notes/{credit_note_id}/refunds?idempotency_key= to recover a refund whose create response was lost. |
| `invoice_id` | Optional | string |  |
| `line_item_allocations` | Optional | Array of [RefundLineItemAllocationInput](../models/RefundLineItemAllocationInput.md#refundlineitemallocationinput) |  |
| `merchant_id` | Optional | string |  |
| `metadata` | Optional | Map of string |  |
| `order` | Optional | [ExpandedOrderSummaryInput](../models/ExpandedOrderSummaryInput.md#expandedordersummaryinput) or null |  |
| `order_id` | Optional | string |  |
| `payment_intent` | Optional | [ExpandedPaymentIntentSummaryInput](../models/ExpandedPaymentIntentSummaryInput.md#expandedpaymentintentsummaryinput) or null |  |
| `payment_intent_id` | Optional | string |  |
| `payment_refunds` | Optional | Array of [PaymentRefundInput](../models/PaymentRefundInput.md#paymentrefundinput) |  |
| `payment_review_id` | Optional | string |  |
| `reason` | Required | string or null | Values: [13 declared values](CreateRefundResultInput.md#createrefundresultinput-reason-values). |
| `reason_message` | Optional | string |  |
| `refund_id` | Required | string |  |
| `refunded_tip_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `return_id` | Optional | string |  |
| `return_resolution_id` | Optional | string |  |
| `status` | Required | string | Summary of payment_refunds and tender_allocations. Only failed is final: succeeded and partially_succeeded can still change when a bank rejects a refund after accepting it. Follow refund.updated. Values: `"pending"`, `"succeeded"`, `"partially_succeeded"`, `"failed"`. |
| `tax_breakdown_refunds` | Optional | Array of [RefundTaxBreakdownRefundInput](../models/RefundTaxBreakdownRefundInput.md#refundtaxbreakdownrefundinput) |  |
| `tender_allocations` | Optional | Array of [RefundTenderAllocationInput](../models/RefundTenderAllocationInput.md#refundtenderallocationinput) |  |
| `unissued_gift_card_recoveries` | Optional | Array of [RefundUnissuedGiftCardRecoveryInput](../models/RefundUnissuedGiftCardRecoveryInput.md#refundunissuedgiftcardrecoveryinput) | Cash returned after an unissued gift card purchase refund failed. Return it through a new refund against payment_intent_id and order_line_item_id. It does not issue another card. Source remaining and pending amounts describe the entire original settlement allocation; repeated entries for that source are not additive. |
| `updated_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `version` | Required | integer string | Persisted version of this resource's owned state. Expanded resources and external observations can change independently. Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |

