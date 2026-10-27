[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RefundsCreateResponse201

A response containing `CreateRefundResult` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [CreateRefundResult](../models/CreateRefundResult.md#createrefundresult) | The refund created by a create refund call, with all the fields of a refund. Money returned against a collected payment. Money returned against a collected payment. `data`: [field definitions](../models/RefundsCreateResponse201.md#refundscreateresponse201data). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Optional | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### RefundsCreateResponse201.data

The refund created by a create refund call, with all the fields of a refund. Money returned against a collected payment.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `created_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `credit_note_id` | Optional | string |  |
| `customer` | Optional | [ExpandedCustomerSummary](../models/ExpandedCustomerSummary.md#expandedcustomersummary) or null |  |
| `customer_id` | Optional | string |  |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. maxLength: `255`. |
| `failure_reason` | Optional | string | Why a refund failed or a payment refund was canceled. Failed and canceled amounts become refundable again. Fix the cause, then create a new refund with a new idempotency key. Unknown provider values are returned as refund_failed. Values: [10 declared values](BuyerRefundInput.md#buyerrefundinput-failure_reason-values). |
| `gift_card_codes` | Optional | Array of object | New gift card codes recovered only within 24 hours of the original command and only while each code remains current. Omitted after the recovery window and never returned by ordinary refund reads or events. `gift_card_codes[]`: [field definitions](../models/RefundsCreateResponse201.md#refundscreateresponse201datagift_card_codes). |
| `idempotency_key` | Optional | string | Present only on refunds created through POST /v1/credit-notes/{credit_note_id}/refunds: the Idempotency-Key of that call. Use it with GET /v1/credit-notes/{credit_note_id}/refunds?idempotency_key= to recover a refund whose create response was lost. |
| `invoice_id` | Optional | string |  |
| `line_item_allocations` | Optional | Array of [RefundLineItemAllocation](../models/RefundLineItemAllocation.md#refundlineitemallocation) |  |
| `merchant_id` | Optional | string |  |
| `metadata` | Optional | Map of string |  |
| `order` | Optional | [ExpandedOrderSummary](../models/ExpandedOrderSummary.md#expandedordersummary) or null |  |
| `order_id` | Optional | string |  |
| `payment_intent` | Optional | [ExpandedPaymentIntentSummary](../models/ExpandedPaymentIntentSummary.md#expandedpaymentintentsummary) or null |  |
| `payment_intent_id` | Optional | string |  |
| `payment_refunds` | Optional | Array of [PaymentRefund](../models/PaymentRefund.md#paymentrefund) |  |
| `payment_review_id` | Optional | string |  |
| `reason` | Required | string or null | Values: [13 declared values](CreateRefundResultInput.md#createrefundresultinput-reason-values). |
| `reason_message` | Optional | string |  |
| `refund_id` | Required | string |  |
| `refunded_tip_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `return_id` | Optional | string |  |
| `return_resolution_id` | Optional | string |  |
| `status` | Required | string | Summary of payment_refunds and tender_allocations. Only failed is final: succeeded and partially_succeeded can still change when a bank rejects a refund after accepting it. Follow refund.updated. Values: `"pending"`, `"succeeded"`, `"partially_succeeded"`, `"failed"`. |
| `tax_breakdown_refunds` | Optional | Array of [RefundTaxBreakdownRefund](../models/RefundTaxBreakdownRefund.md#refundtaxbreakdownrefund) |  |
| `tender_allocations` | Optional | Array of [RefundTenderAllocation](../models/RefundTenderAllocation.md#refundtenderallocation) |  |
| `unissued_gift_card_recoveries` | Optional | Array of [RefundUnissuedGiftCardRecovery](../models/RefundUnissuedGiftCardRecovery.md#refundunissuedgiftcardrecovery) | Cash returned after an unissued gift card purchase refund failed. Return it through a new refund against payment_intent_id and order_line_item_id. It does not issue another card. Source remaining and pending amounts describe the entire original settlement allocation; repeated entries for that source are not additive. |
| `updated_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |

### RefundsCreateResponse201.data.gift_card_codes[]

The code of a gift card issued by a refund, returned once in the refund result with its `gift_card_id`.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `code` | Required | string |  |
| `gift_card_id` | Required | string |  |

