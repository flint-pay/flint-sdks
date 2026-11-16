[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerRefundPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Total refunded across all tenders, including `refunded_tip_money`. `amount_money`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesamount_money). |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at). |
| `credit_note_id` | Optional | string or null | ID of the credit note this refund paid out. Present only on refunds issued through a credit note. `credit_note_id`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributescredit_note_id). |
| `customer` | Optional | ([ExpandedCustomerSummaryPreviousAttributes](../models/ExpandedCustomerSummaryPreviousAttributes.md#expandedcustomersummarypreviousattributes) or null) or null | The customer summary for `customer_id`. Buyer refund endpoints take no `expand` parameter, so it is never expanded here. `null` when the refund is not expanded. |
| `customer_id` | Optional | string or null | ID of the customer on the refunded order or payment. Absent when neither has one. `customer_id`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributescustomer_id). |
| `failure_reason` | Optional | string or null | A coarse buyer-visible failure category. refund_abandoned means the refund could not be completed; contact the store to get your money back. refund_failed means the refund failed. Omitted when there is no failure. Values: `"refund_failed"`, `"refund_abandoned"`. `failure_reason`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesfailure_reason). |
| `idempotency_key` | Optional | string or null | The caller's Idempotency-Key when this refund was created, including refunds created by issuing a credit note. Use GET /v1/refunds?idempotency_key= to recover a lost response. `idempotency_key`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesidempotency_key). |
| `invoice_id` | Optional | string or null | ID of the invoice whose credit note this refund paid out. Present only on refunds issued through a credit note. `invoice_id`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesinvoice_id). |
| `line_item_allocations` | Optional | Array of [RefundLineItemAllocationPreviousAttributes](../models/RefundLineItemAllocationPreviousAttributes.md#refundlineitemallocationpreviousattributes) or null | How the refund applied to each order line item it covered, with quantity, tax, and adjustments. `line_item_allocations`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesline_item_allocations). |
| `order` | Optional | ([BuyerExpandedOrderSummaryPreviousAttributes](../models/BuyerExpandedOrderSummaryPreviousAttributes.md#buyerexpandedordersummarypreviousattributes) or null) or null | The order summary for `order_id`. Buyer refund endpoints take no `expand` parameter, so it is never expanded here. `null` when the refund is not expanded. |
| `order_edit_id` | Optional | string or null | ID of the paid-order edit that created this refund. Present only on refunds issued through an order edit. `order_edit_id`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesorder_edit_id). |
| `order_id` | Optional | string or null | ID of the order the refund was issued against. For a refund with `reason` `payment_returned`, the order the returned payment was for; the order never received this money. Absent for a refund of a payment that has no order, and for a standalone gift card refund. `order_id`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesorder_id). |
| `payment_intent` | Optional | ([BuyerExpandedPaymentIntentSummaryPreviousAttributes](../models/BuyerExpandedPaymentIntentSummaryPreviousAttributes.md#buyerexpandedpaymentintentsummarypreviousattributes) or null) or null | The payment summary for `payment_intent_id`. Buyer refund endpoints take no `expand` parameter, so it is never expanded here. `null` when the refund is not expanded. |
| `payment_intent_id` | Optional | string or null | ID of the payment the refund was issued against, when it targeted one payment. `payment_refunds` lists every payment it returned money through. `payment_intent_id`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributespayment_intent_id). |
| `payment_refunds` | Optional | Array of [BuyerPaymentRefundPreviousAttributes](../models/BuyerPaymentRefundPreviousAttributes.md#buyerpaymentrefundpreviousattributes) or null | The part of the refund returned through each payment, with its own status. Absent when the refund was all gift card credit or store credit. `payment_refunds`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributespayment_refunds). |
| `pending_reason` | Optional | string or null or null | Why a pending refund is waiting. `null` when `status` isn't `pending`, or when the refund is on its way without review. Values: `"manual_review"`, `null`. `pending_reason`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributespending_reason). |
| `processed_by` | Optional | string or null | Who moved or is moving the money for this refund. Flint processes refunds through a processor or a gift card; merchant means the merchant returned the money outside Flint and recorded it here. Existing refunds are processed by Flint. Values: `"flint"`, `"merchant"`. `processed_by`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesprocessed_by). |
| `reason` | Optional | string or null or null | `payment_returned` when Flint refunded a payment it couldn't apply to the order. `null` when the store made the refund, because a store's reasons aren't shared with buyers. Values: `"payment_returned"`, `null`. `reason`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesreason). |
| `reason_message` | Optional | string or null | Note explaining the refund, up to 1,024 characters. `reason_message`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesreason_message). |
| `refund_id` | Optional | string or null | Unique identifier for this refund, prefixed `ref_`. `refund_id`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesrefund_id). |
| `refund_reference` | Optional | string or null | The merchant's opaque check, wire, or other reference for money returned outside Flint, preserved exactly. Present only when processed_by is merchant and a reference was supplied. external_reference_id is the merchant's own refund ID. `refund_reference`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesrefund_reference). |
| `refunded_at` | Optional | string or null | When the merchant reports that the money was returned outside Flint. Present only when processed_by is merchant. `refunded_at`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesrefunded_at). |
| `refunded_tip_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Share of `amount_money` that refunds tips. `refunded_tip_money`: [declared alternatives](../models/BuyerPaymentRefundPreviousAttributes.md#buyerpaymentrefundpreviousattributesrefunded_tip_money). |
| `return_id` | Optional | string or null | ID of the return this refund paid out. Present only on refunds issued by a return. `return_id`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesreturn_id). |
| `return_resolution_id` | Optional | string or null | ID of the return resolution that issued this refund. Present only on refunds issued by a return. `return_resolution_id`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesreturn_resolution_id). |
| `status` | Optional | string or null | Summary of payment_refunds and tender_allocations. Only failed is final: succeeded and partially_succeeded can still change when a bank rejects a refund after accepting it. A refund Flint made to return a payment it couldn't accept goes from succeeded back to pending, with pending_reason manual_review, when a bank reverses it. Follow refund.created when it is accepted, refund.succeeded, refund.partially_succeeded, or refund.failed when its outcome changes, and refund.updated for other changes. Values: `"pending"`, `"succeeded"`, `"partially_succeeded"`, `"failed"`. `status`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesstatus). |
| `succeeded_at` | Optional | string or null | When `status` first became `succeeded`. For a refund with `payment_refunds` or `tender_allocations`, it's when the last of them first succeeded, so it equals the latest `succeeded_at` among them. For a refund Flint processes, it's when Flint recorded the outcome; with `processed_by` `merchant`, it equals `refunded_at`. Present only while `status` is `succeeded`; absent for every other status, including `partially_succeeded` and a refund that failed after it succeeded. A refund that succeeds again shows its first success time. `succeeded_at`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributessucceeded_at). |
| `tax_breakdown_refunds` | Optional | Array of [RefundTaxBreakdownRefundPreviousAttributes](../models/RefundTaxBreakdownRefundPreviousAttributes.md#refundtaxbreakdownrefundpreviousattributes) or null | Tax reversed on order-level charges and flat taxes, one entry per tax breakdown. Tax reversed on line items is in `line_item_allocations[].tax_breakdown_refunds`. `tax_breakdown_refunds`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributestax_breakdown_refunds). |
| `tender_allocations` | Optional | Array of [RefundTenderAllocationPreviousAttributes](../models/RefundTenderAllocationPreviousAttributes.md#refundtenderallocationpreviousattributes) or null | Every tender the refund drew from, payment or gift card, with its amount, tip share, status, and destination. `tender_allocations`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributestender_allocations). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at). |
| `version` | Optional | integer or null | Persisted version of this resource's owned state. Expanded resources and external observations can change independently. `version`: [declared alternatives](../models/BuyerExpandedPaymentIntentSummaryPreviousAttributes.md#buyerexpandedpaymentintentsummarypreviousattributesversion). |

### BuyerRefundPreviousAttributes.amount_money

Total refunded across all tenders, including `refunded_tip_money`.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### BuyerRefundPreviousAttributes.amount_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### BuyerRefundPreviousAttributes.amount_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Total refunded across all tenders, including `refunded_tip_money`. 

### BuyerRefundPreviousAttributes.amount_money variant 1.amount

Declared alternatives: [BalanceUpdatedInstalledMerchantsEvent.data.previous_attributes.held_money variant 1.amount](../models/BalanceUpdatedInstalledMerchantsEvent.md#balanceupdatedinstalledmerchantseventdataprevious_attributesheld_money-variant-1amount).

### BuyerRefundPreviousAttributes.amount_money variant 1.currency

Declared alternatives: [BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.amount_money variant 1.currency](../models/BalanceTransactionUpdatedInstalledMerchantsEvent.md#balancetransactionupdatedinstalledmerchantseventdataprevious_attributesamount_money-variant-1currency).

### BuyerRefundPreviousAttributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at).

### BuyerRefundPreviousAttributes.credit_note_id

### BuyerRefundPreviousAttributes.credit_note_id variant 1

anyOf variant 1: ID of the credit note this refund paid out. Present only on refunds issued through a credit note..

- Value shape: string. ID of the credit note this refund paid out. Present only on refunds issued through a credit note. ID of the credit note this refund paid out. Present only on refunds issued through a credit note. Example: `"cn_01KEZF7C00N1TRRCVDNY8S471H"`. 

### BuyerRefundPreviousAttributes.credit_note_id variant 2

anyOf variant 2.

- Value shape: null. ID of the credit note this refund paid out. Present only on refunds issued through a credit note. 

### BuyerRefundPreviousAttributes.customer_id

### BuyerRefundPreviousAttributes.customer_id variant 1

anyOf variant 1: ID of the customer on the refunded order or payment. Absent when neither has one..

- Value shape: string. ID of the customer on the refunded order or payment. Absent when neither has one. ID of the customer on the refunded order or payment. Absent when neither has one. Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. 

### BuyerRefundPreviousAttributes.customer_id variant 2

anyOf variant 2.

- Value shape: null. ID of the customer on the refunded order or payment. Absent when neither has one. 

### BuyerRefundPreviousAttributes.failure_reason

### BuyerRefundPreviousAttributes.failure_reason variant 1

anyOf variant 1: A coarse buyer-visible failure category. refund_abandoned means the refund could not be completed; contact the store to get your money back. refund_failed means the refund failed. Omitted when there is no failure..

- Value shape: string. A coarse buyer-visible failure category. refund_abandoned means the refund could not be completed; contact the store to get your money back. refund_failed means the refund failed. Omitted when there is no failure. Values: `"refund_failed"`, `"refund_abandoned"`.

### BuyerRefundPreviousAttributes.failure_reason variant 2

anyOf variant 2.

- Value shape: null. A coarse buyer-visible failure category. refund_abandoned means the refund could not be completed; contact the store to get your money back. refund_failed means the refund failed. Omitted when there is no failure. 

### BuyerRefundPreviousAttributes.idempotency_key

### BuyerRefundPreviousAttributes.idempotency_key variant 1

anyOf variant 1: The caller's Idempotency-Key when this refund was created, including refunds created by issuing a credit note. Use GET /v1/refunds?idempotency_key= to recover a lost response..

- Value shape: string. The caller's Idempotency-Key when this refund was created, including refunds created by issuing a credit note. Use GET /v1/refunds?idempotency_key= to recover a lost response. 

### BuyerRefundPreviousAttributes.idempotency_key variant 2

anyOf variant 2.

- Value shape: null. The caller's Idempotency-Key when this refund was created, including refunds created by issuing a credit note. Use GET /v1/refunds?idempotency_key= to recover a lost response. 

### BuyerRefundPreviousAttributes.invoice_id

### BuyerRefundPreviousAttributes.invoice_id variant 1

anyOf variant 1: ID of the invoice whose credit note this refund paid out. Present only on refunds issued through a credit note..

- Value shape: string. ID of the invoice whose credit note this refund paid out. Present only on refunds issued through a credit note. ID of the invoice whose credit note this refund paid out. Present only on refunds issued through a credit note. Example: `"inv_01KEZF7C00A5GEBMWHEAJFSAR4"`. 

### BuyerRefundPreviousAttributes.invoice_id variant 2

anyOf variant 2.

- Value shape: null. ID of the invoice whose credit note this refund paid out. Present only on refunds issued through a credit note. 

### BuyerRefundPreviousAttributes.line_item_allocations

### BuyerRefundPreviousAttributes.line_item_allocations variant 1

anyOf variant 1: How the refund applied to each order line item it covered, with quantity, tax, and adjustments..

- Value shape: Array of [RefundLineItemAllocationPreviousAttributes](../models/RefundLineItemAllocationPreviousAttributes.md#refundlineitemallocationpreviousattributes). How the refund applied to each order line item it covered, with quantity, tax, and adjustments. 

### BuyerRefundPreviousAttributes.line_item_allocations variant 2

anyOf variant 2.

- Value shape: null. How the refund applied to each order line item it covered, with quantity, tax, and adjustments. 

### BuyerRefundPreviousAttributes.order_edit_id

### BuyerRefundPreviousAttributes.order_edit_id variant 1

anyOf variant 1: ID of the paid-order edit that created this refund. Present only on refunds issued through an order edit..

- Value shape: string. ID of the paid-order edit that created this refund. Present only on refunds issued through an order edit. ID of the paid-order edit that created this refund. Present only on refunds issued through an order edit. Example: `"oed_01KEZF7C00A6BQ4TBGWFDJ944A"`. 

### BuyerRefundPreviousAttributes.order_edit_id variant 2

anyOf variant 2.

- Value shape: null. ID of the paid-order edit that created this refund. Present only on refunds issued through an order edit. 

### BuyerRefundPreviousAttributes.order_id

### BuyerRefundPreviousAttributes.order_id variant 1

anyOf variant 1: ID of the order the refund was issued against. For a refund with `reason` `payment_returned`, the order the returned payment was for; the order never received this money. Absent for a refund of a payment that has no order, and for a standalone gift card refund..

- Value shape: string. ID of the order the refund was issued against. For a refund with `reason` `payment_returned`, the order the returned payment was for; the order never received this money. Absent for a refund of a payment that has no order, and for a standalone gift card refund. ID of the order the refund was issued against. For a refund with `reason` `payment_returned`, the order the returned payment was for; the order never received this money. Absent for a refund of a payment that has no order, and for a standalone gift card refund. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. 

### BuyerRefundPreviousAttributes.order_id variant 2

anyOf variant 2.

- Value shape: null. ID of the order the refund was issued against. For a refund with `reason` `payment_returned`, the order the returned payment was for; the order never received this money. Absent for a refund of a payment that has no order, and for a standalone gift card refund. 

### BuyerRefundPreviousAttributes.payment_intent_id

### BuyerRefundPreviousAttributes.payment_intent_id variant 1

anyOf variant 1: ID of the payment the refund was issued against, when it targeted one payment. `payment_refunds` lists every payment it returned money through..

- Value shape: string. ID of the payment the refund was issued against, when it targeted one payment. `payment_refunds` lists every payment it returned money through. ID of the payment the refund was issued against, when it targeted one payment. `payment_refunds` lists every payment it returned money through. Example: `"pi_01KEZF7C00G8H9D509YEV22P7R"`. 

### BuyerRefundPreviousAttributes.payment_intent_id variant 2

anyOf variant 2.

- Value shape: null. ID of the payment the refund was issued against, when it targeted one payment. `payment_refunds` lists every payment it returned money through. 

### BuyerRefundPreviousAttributes.payment_refunds

### BuyerRefundPreviousAttributes.payment_refunds variant 1

anyOf variant 1: The part of the refund returned through each payment, with its own status. Absent when the refund was all gift card credit or store credit..

- Value shape: Array of [BuyerPaymentRefundPreviousAttributes](../models/BuyerPaymentRefundPreviousAttributes.md#buyerpaymentrefundpreviousattributes). The part of the refund returned through each payment, with its own status. Absent when the refund was all gift card credit or store credit. 

### BuyerRefundPreviousAttributes.payment_refunds variant 2

anyOf variant 2.

- Value shape: null. The part of the refund returned through each payment, with its own status. Absent when the refund was all gift card credit or store credit. 

### BuyerRefundPreviousAttributes.pending_reason

### BuyerRefundPreviousAttributes.pending_reason variant 1

anyOf variant 1: Why a pending refund is waiting. `null` when `status` isn't `pending`, or when the refund is on its way without review..

- Value shape: (string or null). Why a pending refund is waiting. `null` when `status` isn't `pending`, or when the refund is on its way without review. Values: `"manual_review"`, `null`.

### BuyerRefundPreviousAttributes.pending_reason variant 2

anyOf variant 2.

- Value shape: null. Why a pending refund is waiting. `null` when `status` isn't `pending`, or when the refund is on its way without review. 

### BuyerRefundPreviousAttributes.processed_by

### BuyerRefundPreviousAttributes.processed_by variant 1

anyOf variant 1: Who moved or is moving the money for this refund. Flint processes refunds through a processor or a gift card; merchant means the merchant returned the money outside Flint and recorded it here. Existing refunds are processed by Flint..

- Value shape: string. Who moved or is moving the money for this refund. Flint processes refunds through a processor or a gift card; merchant means the merchant returned the money outside Flint and recorded it here. Existing refunds are processed by Flint. Values: `"flint"`, `"merchant"`.

### BuyerRefundPreviousAttributes.processed_by variant 2

anyOf variant 2.

- Value shape: null. Who moved or is moving the money for this refund. Flint processes refunds through a processor or a gift card; merchant means the merchant returned the money outside Flint and recorded it here. Existing refunds are processed by Flint. 

### BuyerRefundPreviousAttributes.reason

### BuyerRefundPreviousAttributes.reason variant 1

anyOf variant 1: `payment_returned` when Flint refunded a payment it couldn't apply to the order. `null` when the store made the refund, because a store's reasons aren't shared with buyers..

- Value shape: (string or null). `payment_returned` when Flint refunded a payment it couldn't apply to the order. `null` when the store made the refund, because a store's reasons aren't shared with buyers. Values: `"payment_returned"`, `null`.

### BuyerRefundPreviousAttributes.reason variant 2

anyOf variant 2.

- Value shape: null. `payment_returned` when Flint refunded a payment it couldn't apply to the order. `null` when the store made the refund, because a store's reasons aren't shared with buyers. 

### BuyerRefundPreviousAttributes.reason_message

### BuyerRefundPreviousAttributes.reason_message variant 1

anyOf variant 1: Note explaining the refund, up to 1,024 characters..

- Value shape: string. Note explaining the refund, up to 1,024 characters. 

### BuyerRefundPreviousAttributes.reason_message variant 2

anyOf variant 2.

- Value shape: null. Note explaining the refund, up to 1,024 characters. 

### BuyerRefundPreviousAttributes.refund_id

### BuyerRefundPreviousAttributes.refund_id variant 1

anyOf variant 1: Unique identifier for this refund, prefixed `ref_`..

- Value shape: string. Unique identifier for this refund, prefixed `ref_`. Unique identifier for this refund, prefixed `ref_`. Example: `"ref_01KEZF7C003DTD59WKYHEXYQ1K"`. 

### BuyerRefundPreviousAttributes.refund_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this refund, prefixed `ref_`. 

### BuyerRefundPreviousAttributes.refund_reference

### BuyerRefundPreviousAttributes.refund_reference variant 1

anyOf variant 1: The merchant's opaque check, wire, or other reference for money returned outside Flint, preserved exactly. Present only when processed_by is merchant and a reference was supplied. external_reference_id is the merchant's own refund ID..

- Value shape: string. The merchant's opaque check, wire, or other reference for money returned outside Flint, preserved exactly. Present only when processed_by is merchant and a reference was supplied. external_reference_id is the merchant's own refund ID. The merchant's opaque check, wire, or other reference for money returned outside Flint, preserved exactly. Present only when processed_by is merchant and a reference was supplied. external_reference_id is the merchant's own refund ID. minLength: `1`. maxLength: `255`. 

### BuyerRefundPreviousAttributes.refund_reference variant 2

anyOf variant 2.

- Value shape: null. The merchant's opaque check, wire, or other reference for money returned outside Flint, preserved exactly. Present only when processed_by is merchant and a reference was supplied. external_reference_id is the merchant's own refund ID. 

### BuyerRefundPreviousAttributes.refunded_at

### BuyerRefundPreviousAttributes.refunded_at variant 1

anyOf variant 1: When the merchant reports that the money was returned outside Flint. Present only when processed_by is merchant..

- Value shape: string. When the merchant reports that the money was returned outside Flint. Present only when processed_by is merchant. When the merchant reports that the money was returned outside Flint. Present only when processed_by is merchant. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### BuyerRefundPreviousAttributes.refunded_at variant 2

anyOf variant 2.

- Value shape: null. When the merchant reports that the money was returned outside Flint. Present only when processed_by is merchant. 

### BuyerRefundPreviousAttributes.refunded_tip_money

Declared alternatives: [BuyerPaymentRefundPreviousAttributes.refunded_tip_money](../models/BuyerPaymentRefundPreviousAttributes.md#buyerpaymentrefundpreviousattributesrefunded_tip_money).

### BuyerRefundPreviousAttributes.return_id

### BuyerRefundPreviousAttributes.return_id variant 1

anyOf variant 1: ID of the return this refund paid out. Present only on refunds issued by a return..

- Value shape: string. ID of the return this refund paid out. Present only on refunds issued by a return. ID of the return this refund paid out. Present only on refunds issued by a return. Example: `"ret_01KEZF7C00PG93650ZKVQNGF7X"`. 

### BuyerRefundPreviousAttributes.return_id variant 2

anyOf variant 2.

- Value shape: null. ID of the return this refund paid out. Present only on refunds issued by a return. 

### BuyerRefundPreviousAttributes.return_resolution_id

### BuyerRefundPreviousAttributes.return_resolution_id variant 1

anyOf variant 1: ID of the return resolution that issued this refund. Present only on refunds issued by a return..

- Value shape: string. ID of the return resolution that issued this refund. Present only on refunds issued by a return. ID of the return resolution that issued this refund. Present only on refunds issued by a return. Example: `"retres_01KEZF7C00C7RZJN31W9SGMEQ3"`. 

### BuyerRefundPreviousAttributes.return_resolution_id variant 2

anyOf variant 2.

- Value shape: null. ID of the return resolution that issued this refund. Present only on refunds issued by a return. 

### BuyerRefundPreviousAttributes.status

### BuyerRefundPreviousAttributes.status variant 1

anyOf variant 1: Summary of payment_refunds and tender_allocations. Only failed is final: succeeded and partially_succeeded can still change when a bank rejects a refund after accepting it. A refund Flint made to return a payment it couldn't accept goes from succeeded back to pending, with pending_reason manual_review, when a bank reverses it. Follow refund.created when it is accepted, refund.succeeded, refund.partially_succeeded, or refund.failed when its outcome changes, and refund.updated for other changes..

- Value shape: string. Summary of payment_refunds and tender_allocations. Only failed is final: succeeded and partially_succeeded can still change when a bank rejects a refund after accepting it. A refund Flint made to return a payment it couldn't accept goes from succeeded back to pending, with pending_reason manual_review, when a bank reverses it. Follow refund.created when it is accepted, refund.succeeded, refund.partially_succeeded, or refund.failed when its outcome changes, and refund.updated for other changes. Values: `"pending"`, `"succeeded"`, `"partially_succeeded"`, `"failed"`.

### BuyerRefundPreviousAttributes.status variant 2

anyOf variant 2.

- Value shape: null. Summary of payment_refunds and tender_allocations. Only failed is final: succeeded and partially_succeeded can still change when a bank rejects a refund after accepting it. A refund Flint made to return a payment it couldn't accept goes from succeeded back to pending, with pending_reason manual_review, when a bank reverses it. Follow refund.created when it is accepted, refund.succeeded, refund.partially_succeeded, or refund.failed when its outcome changes, and refund.updated for other changes. 

### BuyerRefundPreviousAttributes.succeeded_at

### BuyerRefundPreviousAttributes.succeeded_at variant 1

anyOf variant 1: When `status` first became `succeeded`. For a refund with `payment_refunds` or `tender_allocations`, it's when the last of them first succeeded, so it equals the latest `succeeded_at` among them. For a refund Flint processes, it's when Flint recorded the outcome; with `processed_by` `merchant`, it equals `refunded_at`. Present only while `status` is `succeeded`; absent for every other status, including `partially_succeeded` and a refund that failed after it succeeded. A refund that succeeds again shows its first success time..

- Value shape: string. When `status` first became `succeeded`. For a refund with `payment_refunds` or `tender_allocations`, it's when the last of them first succeeded, so it equals the latest `succeeded_at` among them. For a refund Flint processes, it's when Flint recorded the outcome; with `processed_by` `merchant`, it equals `refunded_at`. Present only while `status` is `succeeded`; absent for every other status, including `partially_succeeded` and a refund that failed after it succeeded. A refund that succeeds again shows its first success time. When `status` first became `succeeded`. For a refund with `payment_refunds` or `tender_allocations`, it's when the last of them first succeeded, so it equals the latest `succeeded_at` among them. For a refund Flint processes, it's when Flint recorded the outcome; with `processed_by` `merchant`, it equals `refunded_at`. Present only while `status` is `succeeded`; absent for every other status, including `partially_succeeded` and a refund that failed after it succeeded. A refund that succeeds again shows its first success time. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### BuyerRefundPreviousAttributes.succeeded_at variant 2

anyOf variant 2.

- Value shape: null. When `status` first became `succeeded`. For a refund with `payment_refunds` or `tender_allocations`, it's when the last of them first succeeded, so it equals the latest `succeeded_at` among them. For a refund Flint processes, it's when Flint recorded the outcome; with `processed_by` `merchant`, it equals `refunded_at`. Present only while `status` is `succeeded`; absent for every other status, including `partially_succeeded` and a refund that failed after it succeeded. A refund that succeeds again shows its first success time. 

### BuyerRefundPreviousAttributes.tax_breakdown_refunds

### BuyerRefundPreviousAttributes.tax_breakdown_refunds variant 1

anyOf variant 1: Tax reversed on order-level charges and flat taxes, one entry per tax breakdown. Tax reversed on line items is in `line_item_allocations[].tax_breakdown_refunds`..

- Value shape: Array of [RefundTaxBreakdownRefundPreviousAttributes](../models/RefundTaxBreakdownRefundPreviousAttributes.md#refundtaxbreakdownrefundpreviousattributes). Tax reversed on order-level charges and flat taxes, one entry per tax breakdown. Tax reversed on line items is in `line_item_allocations[].tax_breakdown_refunds`. 

### BuyerRefundPreviousAttributes.tax_breakdown_refunds variant 2

anyOf variant 2.

- Value shape: null. Tax reversed on order-level charges and flat taxes, one entry per tax breakdown. Tax reversed on line items is in `line_item_allocations[].tax_breakdown_refunds`. 

### BuyerRefundPreviousAttributes.tender_allocations

### BuyerRefundPreviousAttributes.tender_allocations variant 1

anyOf variant 1: Every tender the refund drew from, payment or gift card, with its amount, tip share, status, and destination..

- Value shape: Array of [RefundTenderAllocationPreviousAttributes](../models/RefundTenderAllocationPreviousAttributes.md#refundtenderallocationpreviousattributes). Every tender the refund drew from, payment or gift card, with its amount, tip share, status, and destination. 

### BuyerRefundPreviousAttributes.tender_allocations variant 2

anyOf variant 2.

- Value shape: null. Every tender the refund drew from, payment or gift card, with its amount, tip share, status, and destination. 

### BuyerRefundPreviousAttributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at).

### BuyerRefundPreviousAttributes.version

Declared alternatives: [BuyerExpandedPaymentIntentSummaryPreviousAttributes.version](../models/BuyerExpandedPaymentIntentSummaryPreviousAttributes.md#buyerexpandedpaymentintentsummarypreviousattributesversion).

