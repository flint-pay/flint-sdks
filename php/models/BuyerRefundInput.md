[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerRefundInput

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
| `failure_reason` | Optional | string | Why a refund failed or a payment refund was canceled. Failed and canceled amounts become refundable again. Fix the cause, then create a new refund with a new idempotency key. Unknown provider values are returned as refund_failed. Values: [10 declared values](#buyerrefundinput-failure_reason-values). |
| `idempotency_key` | Optional | string | Present only on refunds created through POST /v1/credit-notes/{credit_note_id}/refunds or by issuing a credit note with refund: the Idempotency-Key of that call. Use it with GET /v1/credit-notes/{credit_note_id}/refunds?idempotency_key= to recover a refund whose create response was lost. |
| `invoice_id` | Optional | string |  |
| `line_item_allocations` | Optional | Array of [RefundLineItemAllocationInput](../models/RefundLineItemAllocationInput.md#refundlineitemallocationinput) |  |
| `merchant_id` | Optional | string |  |
| `metadata` | Optional | [MetadataMapInput](../models/MetadataMapInput.md#metadatamapinput) | Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. |
| `order` | Optional | [BuyerExpandedOrderSummaryInput](../models/BuyerExpandedOrderSummaryInput.md#buyerexpandedordersummaryinput) or null |  |
| `order_id` | Optional | string |  |
| `payment_intent` | Optional | [ExpandedPaymentIntentSummaryInput](../models/ExpandedPaymentIntentSummaryInput.md#expandedpaymentintentsummaryinput) or null |  |
| `payment_intent_id` | Optional | string |  |
| `payment_refunds` | Optional | Array of [PaymentRefundInput](../models/PaymentRefundInput.md#paymentrefundinput) |  |
| `reason` | Required | null | Always null for buyer credentials. |
| `reason_message` | Optional | string |  |
| `refund_id` | Required | string |  |
| `refunded_tip_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `return_id` | Optional | string |  |
| `return_resolution_id` | Optional | string |  |
| `status` | Required | string | Summary of payment_refunds and tender_allocations. Only failed is final: succeeded and partially_succeeded can still change when a bank rejects a refund after accepting it. Follow refund.updated. Values: `"pending"`, `"succeeded"`, `"partially_succeeded"`, `"failed"`. |
| `tax_breakdown_refunds` | Optional | Array of [RefundTaxBreakdownRefundInput](../models/RefundTaxBreakdownRefundInput.md#refundtaxbreakdownrefundinput) |  |
| `tender_allocations` | Optional | Array of [RefundTenderAllocationInput](../models/RefundTenderAllocationInput.md#refundtenderallocationinput) |  |
| `updated_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `version` | Required | integer | Persisted version of this resource's owned state. Expanded resources and external observations can change independently. Format: `uint64`. minimum: `1`. |

#### BuyerRefundInput failure_reason values

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

