[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerRefund

Money returned against a collected payment.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money). |
| `created_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `credit_note_id` | Optional | string |  |
| `customer` | Optional | [ExpandedCustomerSummary](../models/ExpandedCustomerSummary.md#expandedcustomersummary) or null |  |
| `customer_id` | Optional | string |  |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. maxLength: `255`. |
| `failure_reason` | Optional | string | Why a refund failed or a payment refund was canceled. Failed and canceled amounts become refundable again. Fix the cause, then create a new refund with a new idempotency key. Unknown provider values are returned as refund_failed. Values: [10 declared values](#buyerrefund-failure_reason-values). |
| `idempotency_key` | Optional | string | Present only on refunds created through POST /v1/credit-notes/{credit_note_id}/refunds: the Idempotency-Key of that call. Use it with GET /v1/credit-notes/{credit_note_id}/refunds?idempotency_key= to recover a refund whose create response was lost. |
| `invoice_id` | Optional | string |  |
| `line_item_allocations` | Optional | Array of [RefundLineItemAllocation](../models/RefundLineItemAllocation.md#refundlineitemallocation) |  |
| `merchant_id` | Optional | string |  |
| `metadata` | Optional | Map of string |  |
| `order` | Optional | [BuyerExpandedOrderSummary](../models/BuyerExpandedOrderSummary.md#buyerexpandedordersummary) or null |  |
| `order_id` | Optional | string |  |
| `payment_intent` | Optional | [ExpandedPaymentIntentSummary](../models/ExpandedPaymentIntentSummary.md#expandedpaymentintentsummary) or null |  |
| `payment_intent_id` | Optional | string |  |
| `payment_refunds` | Optional | Array of [PaymentRefund](../models/PaymentRefund.md#paymentrefund) |  |
| `reason` | Required | null | Always null for buyer credentials. |
| `reason_message` | Optional | string |  |
| `refund_id` | Required | string |  |
| `refunded_tip_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `refunded_tip_money`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money). |
| `return_id` | Optional | string |  |
| `return_resolution_id` | Optional | string |  |
| `status` | Required | string | Summary of payment_refunds and tender_allocations. Only failed is final: succeeded and partially_succeeded can still change when a bank rejects a refund after accepting it. Follow refund.updated. Values: `"pending"`, `"succeeded"`, `"partially_succeeded"`, `"failed"`. |
| `tax_breakdown_refunds` | Optional | Array of [RefundTaxBreakdownRefund](../models/RefundTaxBreakdownRefund.md#refundtaxbreakdownrefund) |  |
| `tender_allocations` | Optional | Array of [RefundTenderAllocation](../models/RefundTenderAllocation.md#refundtenderallocation) |  |
| `updated_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |

#### BuyerRefund failure_reason values

- `"expired_or_canceled_card"`
- `"lost_or_stolen_card"`
- `"insufficient_funds"`
- `"insufficient_available_balance"`
- `"declined"`
- `"merchant_request"`
- `"payment_disputed"`
- `"payment_refund_failed"`
- `"payment_refund_not_attempted"`
- `"refund_failed"`

### BuyerRefund.amount_money

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money).

### BuyerRefund.refunded_tip_money

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money).

