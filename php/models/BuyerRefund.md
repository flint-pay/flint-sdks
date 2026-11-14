[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerRefund

Money returned against a collected payment.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Total refunded across all tenders, including `refunded_tip_money`. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `credit_note_id` | Optional | string | ID of the credit note this refund paid out. Present only on refunds issued through a credit note. |
| `customer` | Optional | [ExpandedCustomerSummary](../models/ExpandedCustomerSummary.md#expandedcustomersummary) or null | The customer summary for `customer_id`. Buyer refund endpoints take no `expand` parameter, so it is never expanded here. `null` when the refund is not expanded. |
| `customer_id` | Optional | string | ID of the customer on the refunded order or payment. Absent when neither has one. |
| `failure_reason` | Optional | string | A coarse buyer-visible failure category. refund_abandoned means the refund could not be completed; contact the store to get your money back. refund_failed means the refund failed. Omitted when there is no failure. Values: `"refund_failed"`, `"refund_abandoned"`. |
| `idempotency_key` | Optional | string | The caller's Idempotency-Key when this refund was created, including refunds created by issuing a credit note. Use GET /v1/refunds?idempotency_key= to recover a lost response. |
| `invoice_id` | Optional | string | ID of the invoice whose credit note this refund paid out. Present only on refunds issued through a credit note. |
| `line_item_allocations` | Optional | Array of [RefundLineItemAllocation](../models/RefundLineItemAllocation.md#refundlineitemallocation) | How the refund applied to each order line item it covered, with quantity, tax, and adjustments. `line_item_allocations[]`: [field definitions](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_resolutionsrefundsline_item_allocations). |
| `order` | Optional | [BuyerExpandedOrderSummary](../models/BuyerExpandedOrderSummary.md#buyerexpandedordersummary) or null | The order summary for `order_id`. Buyer refund endpoints take no `expand` parameter, so it is never expanded here. `null` when the refund is not expanded. |
| `order_edit_id` | Optional | string | ID of the paid-order edit that created this refund. Present only on refunds issued through an order edit. |
| `order_id` | Optional | string | ID of the order the refund was issued against. For a refund with `reason` `payment_returned`, the order the returned payment was for; the order never received this money. Absent for a refund of a payment that has no order, and for a standalone gift card refund. |
| `payment_intent` | Optional | [ExpandedPaymentIntentSummary](../models/ExpandedPaymentIntentSummary.md#expandedpaymentintentsummary) or null | The payment summary for `payment_intent_id`. Buyer refund endpoints take no `expand` parameter, so it is never expanded here. `null` when the refund is not expanded. |
| `payment_intent_id` | Optional | string | ID of the payment the refund was issued against, when it targeted one payment. `payment_refunds` lists every payment it returned money through. |
| `payment_refunds` | Optional | Array of [BuyerPaymentRefund](../models/BuyerPaymentRefund.md#buyerpaymentrefund) | The part of the refund returned through each payment, with its own status. Absent when the refund was all gift card credit or store credit. `payment_refunds[]`: [field definitions](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatarefundspayment_refunds). |
| `pending_reason` | Required | string or null | Why a pending refund is waiting. `null` when `status` isn't `pending`, or when the refund is on its way without review. Values: `"manual_review"`, `null`. |
| `processed_by` | Required | string | Who moved or is moving the money for this refund. Flint processes refunds through a processor or a gift card; merchant means the merchant returned the money outside Flint and recorded it here. Existing refunds are processed by Flint. Values: `"flint"`, `"merchant"`. |
| `reason` | Required | string or null | `payment_returned` when Flint refunded a payment it couldn't apply to the order. `null` when the store made the refund, because a store's reasons aren't shared with buyers. Values: `"payment_returned"`, `null`. |
| `reason_message` | Optional | string | Note explaining the refund, up to 1,024 characters. |
| `refund_id` | Required | string | Unique identifier for this refund, prefixed `ref_`. |
| `refund_reference` | Optional | string | The merchant's opaque check, wire, or other reference for money returned outside Flint, preserved exactly. Present only when processed_by is merchant and a reference was supplied. external_reference_id is the merchant's own refund ID. minLength: `1`. maxLength: `255`. |
| `refunded_at` | Optional | string | When the merchant reports that the money was returned outside Flint. Present only when processed_by is merchant. Format: `date-time`. |
| `refunded_tip_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Share of `amount_money` that refunds tips. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `return_id` | Optional | string | ID of the return this refund paid out. Present only on refunds issued by a return. |
| `return_resolution_id` | Optional | string | ID of the return resolution that issued this refund. Present only on refunds issued by a return. |
| `status` | Required | string | Summary of payment_refunds and tender_allocations. Only failed is final: succeeded and partially_succeeded can still change when a bank rejects a refund after accepting it. A refund Flint made to return a payment it couldn't accept goes from succeeded back to pending, with pending_reason manual_review, when a bank reverses it. Follow refund.created when it is accepted, refund.succeeded, refund.partially_succeeded, or refund.failed when its outcome changes, and refund.updated for other changes. Values: `"pending"`, `"succeeded"`, `"partially_succeeded"`, `"failed"`. |
| `succeeded_at` | Optional | string | When `status` first became `succeeded`. For a refund with `payment_refunds` or `tender_allocations`, it's when the last of them first succeeded, so it equals the latest `succeeded_at` among them. For a refund Flint processes, it's when Flint recorded the outcome; with `processed_by` `merchant`, it equals `refunded_at`. Present only while `status` is `succeeded`; absent for every other status, including `partially_succeeded` and a refund that failed after it succeeded. A refund that succeeds again shows its first success time. Format: `date-time`. |
| `tax_breakdown_refunds` | Optional | Array of [RefundTaxBreakdownRefund](../models/RefundTaxBreakdownRefund.md#refundtaxbreakdownrefund) | Tax reversed on order-level charges and flat taxes, one entry per tax breakdown. Tax reversed on line items is in `line_item_allocations[].tax_breakdown_refunds`. `tax_breakdown_refunds[]`: [field definitions](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_resolutionsrefundsline_item_allocationstax_breakdown_refunds). |
| `tender_allocations` | Optional | Array of [RefundTenderAllocation](../models/RefundTenderAllocation.md#refundtenderallocation) | Every tender the refund drew from, payment or gift card, with its amount, tip share, status, and destination. `tender_allocations[]`: [field definitions](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_resolutionsrefundstender_allocations). |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `version` | Required | integer | Persisted version of this resource's owned state. Expanded resources and external observations can change independently. Format: `uint64`. minimum: `1`. |

### BuyerRefund.line_item_allocations[]

Field definitions: [CancelReturnResponse.data.return_resolutions[].refunds[].line_item_allocations[]](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_resolutionsrefundsline_item_allocations).

### BuyerRefund.payment_refunds[]

Field definitions: [CheckoutSessionResponse.data.refunds[].payment_refunds[]](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatarefundspayment_refunds).

### BuyerRefund.tax_breakdown_refunds[]

Field definitions: [CancelReturnResponse.data.return_resolutions[].refunds[].line_item_allocations[].tax_breakdown_refunds[]](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_resolutionsrefundsline_item_allocationstax_breakdown_refunds).

### BuyerRefund.tender_allocations[]

Field definitions: [CancelReturnResponse.data.return_resolutions[].refunds[].tender_allocations[]](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_resolutionsrefundstender_allocations).

