[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateRefundResult

The refund created by a create refund call, with all the fields of a refund.

Money returned against a collected payment.



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options). |
| `created_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `credit_note_id` | Optional | string |  |
| `customer` | Optional | ([ExpandedCustomerSummary](../models/ExpandedCustomerSummary.md#expandedcustomersummary) or null) | Present only when `expand` includes `customer`; `null` when expanded and there is no related customer. |
| `customer_id` | Optional | string |  |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. maxLength: `255`. |
| `failure_reason` | Optional | string | Why a refund failed or a payment refund was canceled. Failed and canceled amounts become refundable again. Fix the cause, then create a new refund with a new idempotency key. Unknown provider values are returned as refund_failed. Values: [10 declared values](BuyerRefund.md#buyerrefund-failure_reason-values). |
| `gift_card_codes` | Optional | Array of [RefundGiftCardCode](../models/RefundGiftCardCode.md#refundgiftcardcode) | New gift card codes recovered only within 24 hours of the original command and only while each code remains current. Omitted after the recovery window and never returned by ordinary refund reads or events. |
| `idempotency_key` | Optional | string | Present only on refunds created through POST /v1/credit-notes/{credit_note_id}/refunds or by issuing a credit note with refund: the Idempotency-Key of that call. Use it with GET /v1/credit-notes/{credit_note_id}/refunds?idempotency_key= to recover a refund whose create response was lost. |
| `invoice_id` | Optional | string |  |
| `line_item_allocations` | Optional | Array of [RefundLineItemAllocation](../models/RefundLineItemAllocation.md#refundlineitemallocation) |  |
| `merchant_id` | Optional | string |  |
| `metadata` | Optional | [MetadataMap](../models/MetadataMap.md#metadatamap) | Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. `metadata`: [field definitions](../models/BuyerRefund.md#buyerrefundmetadata). |
| `order` | Optional | ([ExpandedOrderSummary](../models/ExpandedOrderSummary.md#expandedordersummary) or null) | Present only when `expand` includes `order`; `null` when expanded and there is no related order. |
| `order_id` | Optional | string |  |
| `payment_intent` | Optional | ([ExpandedPaymentIntentSummary](../models/ExpandedPaymentIntentSummary.md#expandedpaymentintentsummary) or null) | Present only when `expand` includes `payment_intent`; `null` when expanded and there is no related payment intent. |
| `payment_intent_id` | Optional | string |  |
| `payment_refunds` | Optional | Array of [PaymentRefund](../models/PaymentRefund.md#paymentrefund) |  |
| `payment_review_id` | Optional | string |  |
| `reason` | Required | string or null | Values: [13 declared values](#createrefundresult-reason-values). |
| `reason_message` | Optional | string |  |
| `refund_id` | Required | string |  |
| `refunded_tip_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `refunded_tip_money`: [field definitions](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options). |
| `return_id` | Optional | string |  |
| `return_resolution_id` | Optional | string |  |
| `status` | Required | string | Summary of payment_refunds and tender_allocations. Only failed is final: succeeded and partially_succeeded can still change when a bank rejects a refund after accepting it. Follow refund.updated. Values: `"pending"`, `"succeeded"`, `"partially_succeeded"`, `"failed"`. |
| `tax_breakdown_refunds` | Optional | Array of [RefundTaxBreakdownRefund](../models/RefundTaxBreakdownRefund.md#refundtaxbreakdownrefund) |  |
| `tender_allocations` | Optional | Array of [RefundTenderAllocation](../models/RefundTenderAllocation.md#refundtenderallocation) |  |
| `unissued_gift_card_recoveries` | Optional | Array of [RefundUnissuedGiftCardRecovery](../models/RefundUnissuedGiftCardRecovery.md#refundunissuedgiftcardrecovery) | Cash returned after an unissued gift card purchase refund failed. Return it through a new refund against payment_intent_id and order_line_item_id. It does not issue another card. Source remaining and pending amounts describe the entire original settlement allocation; repeated entries for that source are not additive. |
| `updated_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `version` | Required | integer | Persisted version of this resource's owned state. Expanded resources and external observations can change independently. Format: `uint64`. minimum: `1`. |

#### CreateRefundResult reason values

- `"duplicate"`
- `"fraudulent"`
- `"requested_by_customer"`
- `"defective_product"`
- `"wrong_item_shipped"`
- `"never_received"`
- `"not_as_described"`
- `"arrived_too_late"`
- `"customer_changed_mind"`
- `"better_price_found"`
- `"accidental_order"`
- `"other"`
- `null`

### CreateRefundResult.amount_money

Field definitions: [BuyerCheckoutSession.tip.smart_tip_money_options[]](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options).

### CreateRefundResult.metadata

Field definitions: [BuyerRefund.metadata](../models/BuyerRefund.md#buyerrefundmetadata).

### CreateRefundResult.refunded_tip_money

Field definitions: [BuyerCheckoutSession.tip.smart_tip_money_options[]](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options).

