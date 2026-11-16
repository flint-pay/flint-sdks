[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerRefundPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Total refunded across all tenders, including `refunded_tip_money`. |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |
| `credit_note_id` | Optional | string or null | ID of the credit note this refund paid out. Present only on refunds issued through a credit note. `credit_note_id`: [declared alternatives](../models/BuyerRefundPreviousAttributesInput.md#buyerrefundpreviousattributesinputcredit_note_id). |
| `customer` | Optional | [ExpandedCustomerSummaryPreviousAttributesInput](../models/ExpandedCustomerSummaryPreviousAttributesInput.md#expandedcustomersummarypreviousattributesinput) or null | The customer summary for `customer_id`. Buyer refund endpoints take no `expand` parameter, so it is never expanded here. `null` when the refund is not expanded. |
| `customer_id` | Optional | string or null | ID of the customer on the refunded order or payment. Absent when neither has one. `customer_id`: [declared alternatives](../models/BuyerRefundPreviousAttributesInput.md#buyerrefundpreviousattributesinputcustomer_id). |
| `failure_reason` | Optional | string or null | A coarse buyer-visible failure category. refund_abandoned means the refund could not be completed; contact the store to get your money back. refund_failed means the refund failed. Omitted when there is no failure. Values: `"refund_failed"`, `"refund_abandoned"`. `failure_reason`: [declared alternatives](../models/BuyerRefundPreviousAttributesInput.md#buyerrefundpreviousattributesinputfailure_reason). |
| `idempotency_key` | Optional | string or null | The caller's Idempotency-Key when this refund was created, including refunds created by issuing a credit note. Use GET /v1/refunds?idempotency_key= to recover a lost response. `idempotency_key`: [declared alternatives](../models/BuyerRefundPreviousAttributesInput.md#buyerrefundpreviousattributesinputidempotency_key). |
| `invoice_id` | Optional | string or null | ID of the invoice whose credit note this refund paid out. Present only on refunds issued through a credit note. `invoice_id`: [declared alternatives](../models/BuyerRefundPreviousAttributesInput.md#buyerrefundpreviousattributesinputinvoice_id). |
| `line_item_allocations` | Optional | Array of [RefundLineItemAllocationPreviousAttributesInput](../models/RefundLineItemAllocationPreviousAttributesInput.md#refundlineitemallocationpreviousattributesinput) or null | How the refund applied to each order line item it covered, with quantity, tax, and adjustments. `line_item_allocations`: [declared alternatives](../models/BuyerRefundPreviousAttributesInput.md#buyerrefundpreviousattributesinputline_item_allocations). |
| `order` | Optional | [BuyerExpandedOrderSummaryPreviousAttributesInput](../models/BuyerExpandedOrderSummaryPreviousAttributesInput.md#buyerexpandedordersummarypreviousattributesinput) or null | The order summary for `order_id`. Buyer refund endpoints take no `expand` parameter, so it is never expanded here. `null` when the refund is not expanded. |
| `order_edit_id` | Optional | string or null | ID of the paid-order edit that created this refund. Present only on refunds issued through an order edit. `order_edit_id`: [declared alternatives](../models/BuyerRefundPreviousAttributesInput.md#buyerrefundpreviousattributesinputorder_edit_id). |
| `order_id` | Optional | string or null | ID of the order the refund was issued against. For a refund with `reason` `payment_returned`, the order the returned payment was for; the order never received this money. Absent for a refund of a payment that has no order, and for a standalone gift card refund. `order_id`: [declared alternatives](../models/BuyerRefundPreviousAttributesInput.md#buyerrefundpreviousattributesinputorder_id). |
| `payment_intent` | Optional | [BuyerExpandedPaymentIntentSummaryPreviousAttributesInput](../models/BuyerExpandedPaymentIntentSummaryPreviousAttributesInput.md#buyerexpandedpaymentintentsummarypreviousattributesinput) or null | The payment summary for `payment_intent_id`. Buyer refund endpoints take no `expand` parameter, so it is never expanded here. `null` when the refund is not expanded. |
| `payment_intent_id` | Optional | string or null | ID of the payment the refund was issued against, when it targeted one payment. `payment_refunds` lists every payment it returned money through. `payment_intent_id`: [declared alternatives](../models/BuyerRefundPreviousAttributesInput.md#buyerrefundpreviousattributesinputpayment_intent_id). |
| `payment_refunds` | Optional | Array of [BuyerPaymentRefundPreviousAttributesInput](../models/BuyerPaymentRefundPreviousAttributesInput.md#buyerpaymentrefundpreviousattributesinput) or null | The part of the refund returned through each payment, with its own status. Absent when the refund was all gift card credit or store credit. `payment_refunds`: [declared alternatives](../models/BuyerRefundPreviousAttributesInput.md#buyerrefundpreviousattributesinputpayment_refunds). |
| `pending_reason` | Optional | string or null | Why a pending refund is waiting. `null` when `status` isn't `pending`, or when the refund is on its way without review. Values: `"manual_review"`, `null`. `pending_reason`: [declared alternatives](../models/BuyerRefundPreviousAttributesInput.md#buyerrefundpreviousattributesinputpending_reason). |
| `processed_by` | Optional | string or null | Who moved or is moving the money for this refund. Flint processes refunds through a processor or a gift card; merchant means the merchant returned the money outside Flint and recorded it here. Existing refunds are processed by Flint. Values: `"flint"`, `"merchant"`. `processed_by`: [declared alternatives](../models/BuyerRefundPreviousAttributesInput.md#buyerrefundpreviousattributesinputprocessed_by). |
| `reason` | Optional | string or null | `payment_returned` when Flint refunded a payment it couldn't apply to the order. `null` when the store made the refund, because a store's reasons aren't shared with buyers. Values: `"payment_returned"`, `null`. `reason`: [declared alternatives](../models/BuyerRefundPreviousAttributesInput.md#buyerrefundpreviousattributesinputreason). |
| `reason_message` | Optional | string or null | Note explaining the refund, up to 1,024 characters. `reason_message`: [declared alternatives](../models/BuyerRefundPreviousAttributesInput.md#buyerrefundpreviousattributesinputreason_message). |
| `refund_id` | Optional | string or null | Unique identifier for this refund, prefixed `ref_`. `refund_id`: [declared alternatives](../models/BuyerRefundPreviousAttributesInput.md#buyerrefundpreviousattributesinputrefund_id). |
| `refund_reference` | Optional | string or null | The merchant's opaque check, wire, or other reference for money returned outside Flint, preserved exactly. Present only when processed_by is merchant and a reference was supplied. external_reference_id is the merchant's own refund ID. `refund_reference`: [declared alternatives](../models/BuyerRefundPreviousAttributesInput.md#buyerrefundpreviousattributesinputrefund_reference). |
| `refunded_at` | Optional | string or null | When the merchant reports that the money was returned outside Flint. Present only when processed_by is merchant. `refunded_at`: [declared alternatives](../models/BuyerRefundPreviousAttributesInput.md#buyerrefundpreviousattributesinputrefunded_at). |
| `refunded_tip_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Share of `amount_money` that refunds tips. |
| `return_id` | Optional | string or null | ID of the return this refund paid out. Present only on refunds issued by a return. `return_id`: [declared alternatives](../models/BuyerRefundPreviousAttributesInput.md#buyerrefundpreviousattributesinputreturn_id). |
| `return_resolution_id` | Optional | string or null | ID of the return resolution that issued this refund. Present only on refunds issued by a return. `return_resolution_id`: [declared alternatives](../models/BuyerRefundPreviousAttributesInput.md#buyerrefundpreviousattributesinputreturn_resolution_id). |
| `status` | Optional | string or null | Summary of payment_refunds and tender_allocations. Only failed is final: succeeded and partially_succeeded can still change when a bank rejects a refund after accepting it. A refund Flint made to return a payment it couldn't accept goes from succeeded back to pending, with pending_reason manual_review, when a bank reverses it. Follow refund.created when it is accepted, refund.succeeded, refund.partially_succeeded, or refund.failed when its outcome changes, and refund.updated for other changes. Values: `"pending"`, `"succeeded"`, `"partially_succeeded"`, `"failed"`. `status`: [declared alternatives](../models/BuyerRefundPreviousAttributesInput.md#buyerrefundpreviousattributesinputstatus). |
| `succeeded_at` | Optional | string or null | When `status` first became `succeeded`. For a refund with `payment_refunds` or `tender_allocations`, it's when the last of them first succeeded, so it equals the latest `succeeded_at` among them. For a refund Flint processes, it's when Flint recorded the outcome; with `processed_by` `merchant`, it equals `refunded_at`. Present only while `status` is `succeeded`; absent for every other status, including `partially_succeeded` and a refund that failed after it succeeded. A refund that succeeds again shows its first success time. `succeeded_at`: [declared alternatives](../models/BuyerRefundPreviousAttributesInput.md#buyerrefundpreviousattributesinputsucceeded_at). |
| `tax_breakdown_refunds` | Optional | Array of [RefundTaxBreakdownRefundPreviousAttributesInput](../models/RefundTaxBreakdownRefundPreviousAttributesInput.md#refundtaxbreakdownrefundpreviousattributesinput) or null | Tax reversed on order-level charges and flat taxes, one entry per tax breakdown. Tax reversed on line items is in `line_item_allocations[].tax_breakdown_refunds`. `tax_breakdown_refunds`: [declared alternatives](../models/BuyerRefundPreviousAttributesInput.md#buyerrefundpreviousattributesinputtax_breakdown_refunds). |
| `tender_allocations` | Optional | Array of [RefundTenderAllocationPreviousAttributesInput](../models/RefundTenderAllocationPreviousAttributesInput.md#refundtenderallocationpreviousattributesinput) or null | Every tender the refund drew from, payment or gift card, with its amount, tip share, status, and destination. `tender_allocations`: [declared alternatives](../models/BuyerRefundPreviousAttributesInput.md#buyerrefundpreviousattributesinputtender_allocations). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |
| `version` | Optional | integer or null | Persisted version of this resource's owned state. Expanded resources and external observations can change independently. `version`: [declared alternatives](../models/BuyerExpandedPaymentIntentSummaryPreviousAttributesInput.md#buyerexpandedpaymentintentsummarypreviousattributesinputversion). |

### BuyerRefundPreviousAttributesInput.created_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### BuyerRefundPreviousAttributesInput.credit_note_id

### BuyerRefundPreviousAttributesInput.credit_note_id variant 1

anyOf variant 1: ID of the credit note this refund paid out. Present only on refunds issued through a credit note..

- Value shape: string. ID of the credit note this refund paid out. Present only on refunds issued through a credit note. ID of the credit note this refund paid out. Present only on refunds issued through a credit note. Example: `"cn_01KEZF7C00N1TRRCVDNY8S471H"`. 

### BuyerRefundPreviousAttributesInput.credit_note_id variant 2

anyOf variant 2.

- Value shape: null. ID of the credit note this refund paid out. Present only on refunds issued through a credit note. 

### BuyerRefundPreviousAttributesInput.customer_id

### BuyerRefundPreviousAttributesInput.customer_id variant 1

anyOf variant 1: ID of the customer on the refunded order or payment. Absent when neither has one..

- Value shape: string. ID of the customer on the refunded order or payment. Absent when neither has one. ID of the customer on the refunded order or payment. Absent when neither has one. Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. 

### BuyerRefundPreviousAttributesInput.customer_id variant 2

anyOf variant 2.

- Value shape: null. ID of the customer on the refunded order or payment. Absent when neither has one. 

### BuyerRefundPreviousAttributesInput.failure_reason

### BuyerRefundPreviousAttributesInput.failure_reason variant 1

anyOf variant 1: A coarse buyer-visible failure category. refund_abandoned means the refund could not be completed; contact the store to get your money back. refund_failed means the refund failed. Omitted when there is no failure..

- Value shape: string. A coarse buyer-visible failure category. refund_abandoned means the refund could not be completed; contact the store to get your money back. refund_failed means the refund failed. Omitted when there is no failure. Values: `"refund_failed"`, `"refund_abandoned"`.

### BuyerRefundPreviousAttributesInput.failure_reason variant 2

anyOf variant 2.

- Value shape: null. A coarse buyer-visible failure category. refund_abandoned means the refund could not be completed; contact the store to get your money back. refund_failed means the refund failed. Omitted when there is no failure. 

### BuyerRefundPreviousAttributesInput.idempotency_key

### BuyerRefundPreviousAttributesInput.idempotency_key variant 1

anyOf variant 1: The caller's Idempotency-Key when this refund was created, including refunds created by issuing a credit note. Use GET /v1/refunds?idempotency_key= to recover a lost response..

- Value shape: string. The caller's Idempotency-Key when this refund was created, including refunds created by issuing a credit note. Use GET /v1/refunds?idempotency_key= to recover a lost response. 

### BuyerRefundPreviousAttributesInput.idempotency_key variant 2

anyOf variant 2.

- Value shape: null. The caller's Idempotency-Key when this refund was created, including refunds created by issuing a credit note. Use GET /v1/refunds?idempotency_key= to recover a lost response. 

### BuyerRefundPreviousAttributesInput.invoice_id

### BuyerRefundPreviousAttributesInput.invoice_id variant 1

anyOf variant 1: ID of the invoice whose credit note this refund paid out. Present only on refunds issued through a credit note..

- Value shape: string. ID of the invoice whose credit note this refund paid out. Present only on refunds issued through a credit note. ID of the invoice whose credit note this refund paid out. Present only on refunds issued through a credit note. Example: `"inv_01KEZF7C00A5GEBMWHEAJFSAR4"`. 

### BuyerRefundPreviousAttributesInput.invoice_id variant 2

anyOf variant 2.

- Value shape: null. ID of the invoice whose credit note this refund paid out. Present only on refunds issued through a credit note. 

### BuyerRefundPreviousAttributesInput.line_item_allocations

### BuyerRefundPreviousAttributesInput.line_item_allocations variant 1

anyOf variant 1: How the refund applied to each order line item it covered, with quantity, tax, and adjustments..

- Value shape: Array of [RefundLineItemAllocationPreviousAttributesInput](../models/RefundLineItemAllocationPreviousAttributesInput.md#refundlineitemallocationpreviousattributesinput). How the refund applied to each order line item it covered, with quantity, tax, and adjustments. 

### BuyerRefundPreviousAttributesInput.line_item_allocations variant 2

anyOf variant 2.

- Value shape: null. How the refund applied to each order line item it covered, with quantity, tax, and adjustments. 

### BuyerRefundPreviousAttributesInput.order_edit_id

### BuyerRefundPreviousAttributesInput.order_edit_id variant 1

anyOf variant 1: ID of the paid-order edit that created this refund. Present only on refunds issued through an order edit..

- Value shape: string. ID of the paid-order edit that created this refund. Present only on refunds issued through an order edit. ID of the paid-order edit that created this refund. Present only on refunds issued through an order edit. Example: `"oed_01KEZF7C00A6BQ4TBGWFDJ944A"`. 

### BuyerRefundPreviousAttributesInput.order_edit_id variant 2

anyOf variant 2.

- Value shape: null. ID of the paid-order edit that created this refund. Present only on refunds issued through an order edit. 

### BuyerRefundPreviousAttributesInput.order_id

### BuyerRefundPreviousAttributesInput.order_id variant 1

anyOf variant 1: ID of the order the refund was issued against. For a refund with `reason` `payment_returned`, the order the returned payment was for; the order never received this money. Absent for a refund of a payment that has no order, and for a standalone gift card refund..

- Value shape: string. ID of the order the refund was issued against. For a refund with `reason` `payment_returned`, the order the returned payment was for; the order never received this money. Absent for a refund of a payment that has no order, and for a standalone gift card refund. ID of the order the refund was issued against. For a refund with `reason` `payment_returned`, the order the returned payment was for; the order never received this money. Absent for a refund of a payment that has no order, and for a standalone gift card refund. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. 

### BuyerRefundPreviousAttributesInput.order_id variant 2

anyOf variant 2.

- Value shape: null. ID of the order the refund was issued against. For a refund with `reason` `payment_returned`, the order the returned payment was for; the order never received this money. Absent for a refund of a payment that has no order, and for a standalone gift card refund. 

### BuyerRefundPreviousAttributesInput.payment_intent_id

### BuyerRefundPreviousAttributesInput.payment_intent_id variant 1

anyOf variant 1: ID of the payment the refund was issued against, when it targeted one payment. `payment_refunds` lists every payment it returned money through..

- Value shape: string. ID of the payment the refund was issued against, when it targeted one payment. `payment_refunds` lists every payment it returned money through. ID of the payment the refund was issued against, when it targeted one payment. `payment_refunds` lists every payment it returned money through. Example: `"pi_01KEZF7C00G8H9D509YEV22P7R"`. 

### BuyerRefundPreviousAttributesInput.payment_intent_id variant 2

anyOf variant 2.

- Value shape: null. ID of the payment the refund was issued against, when it targeted one payment. `payment_refunds` lists every payment it returned money through. 

### BuyerRefundPreviousAttributesInput.payment_refunds

### BuyerRefundPreviousAttributesInput.payment_refunds variant 1

anyOf variant 1: The part of the refund returned through each payment, with its own status. Absent when the refund was all gift card credit or store credit..

- Value shape: Array of [BuyerPaymentRefundPreviousAttributesInput](../models/BuyerPaymentRefundPreviousAttributesInput.md#buyerpaymentrefundpreviousattributesinput). The part of the refund returned through each payment, with its own status. Absent when the refund was all gift card credit or store credit. 

### BuyerRefundPreviousAttributesInput.payment_refunds variant 2

anyOf variant 2.

- Value shape: null. The part of the refund returned through each payment, with its own status. Absent when the refund was all gift card credit or store credit. 

### BuyerRefundPreviousAttributesInput.pending_reason

### BuyerRefundPreviousAttributesInput.pending_reason variant 1

anyOf variant 1: Why a pending refund is waiting. `null` when `status` isn't `pending`, or when the refund is on its way without review..

- Value shape: string. Why a pending refund is waiting. `null` when `status` isn't `pending`, or when the refund is on its way without review. Values: `"manual_review"`, `null`.

### BuyerRefundPreviousAttributesInput.pending_reason variant 2

anyOf variant 2.

- Value shape: null. Why a pending refund is waiting. `null` when `status` isn't `pending`, or when the refund is on its way without review. 

### BuyerRefundPreviousAttributesInput.processed_by

### BuyerRefundPreviousAttributesInput.processed_by variant 1

anyOf variant 1: Who moved or is moving the money for this refund. Flint processes refunds through a processor or a gift card; merchant means the merchant returned the money outside Flint and recorded it here. Existing refunds are processed by Flint..

- Value shape: string. Who moved or is moving the money for this refund. Flint processes refunds through a processor or a gift card; merchant means the merchant returned the money outside Flint and recorded it here. Existing refunds are processed by Flint. Values: `"flint"`, `"merchant"`.

### BuyerRefundPreviousAttributesInput.processed_by variant 2

anyOf variant 2.

- Value shape: null. Who moved or is moving the money for this refund. Flint processes refunds through a processor or a gift card; merchant means the merchant returned the money outside Flint and recorded it here. Existing refunds are processed by Flint. 

### BuyerRefundPreviousAttributesInput.reason

### BuyerRefundPreviousAttributesInput.reason variant 1

anyOf variant 1: `payment_returned` when Flint refunded a payment it couldn't apply to the order. `null` when the store made the refund, because a store's reasons aren't shared with buyers..

- Value shape: string. `payment_returned` when Flint refunded a payment it couldn't apply to the order. `null` when the store made the refund, because a store's reasons aren't shared with buyers. Values: `"payment_returned"`, `null`.

### BuyerRefundPreviousAttributesInput.reason variant 2

anyOf variant 2.

- Value shape: null. `payment_returned` when Flint refunded a payment it couldn't apply to the order. `null` when the store made the refund, because a store's reasons aren't shared with buyers. 

### BuyerRefundPreviousAttributesInput.reason_message

### BuyerRefundPreviousAttributesInput.reason_message variant 1

anyOf variant 1: Note explaining the refund, up to 1,024 characters..

- Value shape: string. Note explaining the refund, up to 1,024 characters. 

### BuyerRefundPreviousAttributesInput.reason_message variant 2

anyOf variant 2.

- Value shape: null. Note explaining the refund, up to 1,024 characters. 

### BuyerRefundPreviousAttributesInput.refund_id

### BuyerRefundPreviousAttributesInput.refund_id variant 1

anyOf variant 1: Unique identifier for this refund, prefixed `ref_`..

- Value shape: string. Unique identifier for this refund, prefixed `ref_`. Unique identifier for this refund, prefixed `ref_`. Example: `"ref_01KEZF7C003DTD59WKYHEXYQ1K"`. 

### BuyerRefundPreviousAttributesInput.refund_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this refund, prefixed `ref_`. 

### BuyerRefundPreviousAttributesInput.refund_reference

### BuyerRefundPreviousAttributesInput.refund_reference variant 1

anyOf variant 1: The merchant's opaque check, wire, or other reference for money returned outside Flint, preserved exactly. Present only when processed_by is merchant and a reference was supplied. external_reference_id is the merchant's own refund ID..

- Value shape: string. The merchant's opaque check, wire, or other reference for money returned outside Flint, preserved exactly. Present only when processed_by is merchant and a reference was supplied. external_reference_id is the merchant's own refund ID. The merchant's opaque check, wire, or other reference for money returned outside Flint, preserved exactly. Present only when processed_by is merchant and a reference was supplied. external_reference_id is the merchant's own refund ID. minLength: `1`. maxLength: `255`. 

### BuyerRefundPreviousAttributesInput.refund_reference variant 2

anyOf variant 2.

- Value shape: null. The merchant's opaque check, wire, or other reference for money returned outside Flint, preserved exactly. Present only when processed_by is merchant and a reference was supplied. external_reference_id is the merchant's own refund ID. 

### BuyerRefundPreviousAttributesInput.refunded_at

### BuyerRefundPreviousAttributesInput.refunded_at variant 1

anyOf variant 1: When the merchant reports that the money was returned outside Flint. Present only when processed_by is merchant..

- Value shape: string. When the merchant reports that the money was returned outside Flint. Present only when processed_by is merchant. When the merchant reports that the money was returned outside Flint. Present only when processed_by is merchant. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### BuyerRefundPreviousAttributesInput.refunded_at variant 2

anyOf variant 2.

- Value shape: null. When the merchant reports that the money was returned outside Flint. Present only when processed_by is merchant. 

### BuyerRefundPreviousAttributesInput.return_id

### BuyerRefundPreviousAttributesInput.return_id variant 1

anyOf variant 1: ID of the return this refund paid out. Present only on refunds issued by a return..

- Value shape: string. ID of the return this refund paid out. Present only on refunds issued by a return. ID of the return this refund paid out. Present only on refunds issued by a return. Example: `"ret_01KEZF7C00PG93650ZKVQNGF7X"`. 

### BuyerRefundPreviousAttributesInput.return_id variant 2

anyOf variant 2.

- Value shape: null. ID of the return this refund paid out. Present only on refunds issued by a return. 

### BuyerRefundPreviousAttributesInput.return_resolution_id

### BuyerRefundPreviousAttributesInput.return_resolution_id variant 1

anyOf variant 1: ID of the return resolution that issued this refund. Present only on refunds issued by a return..

- Value shape: string. ID of the return resolution that issued this refund. Present only on refunds issued by a return. ID of the return resolution that issued this refund. Present only on refunds issued by a return. Example: `"retres_01KEZF7C00C7RZJN31W9SGMEQ3"`. 

### BuyerRefundPreviousAttributesInput.return_resolution_id variant 2

anyOf variant 2.

- Value shape: null. ID of the return resolution that issued this refund. Present only on refunds issued by a return. 

### BuyerRefundPreviousAttributesInput.status

### BuyerRefundPreviousAttributesInput.status variant 1

anyOf variant 1: Summary of payment_refunds and tender_allocations. Only failed is final: succeeded and partially_succeeded can still change when a bank rejects a refund after accepting it. A refund Flint made to return a payment it couldn't accept goes from succeeded back to pending, with pending_reason manual_review, when a bank reverses it. Follow refund.created when it is accepted, refund.succeeded, refund.partially_succeeded, or refund.failed when its outcome changes, and refund.updated for other changes..

- Value shape: string. Summary of payment_refunds and tender_allocations. Only failed is final: succeeded and partially_succeeded can still change when a bank rejects a refund after accepting it. A refund Flint made to return a payment it couldn't accept goes from succeeded back to pending, with pending_reason manual_review, when a bank reverses it. Follow refund.created when it is accepted, refund.succeeded, refund.partially_succeeded, or refund.failed when its outcome changes, and refund.updated for other changes. Values: `"pending"`, `"succeeded"`, `"partially_succeeded"`, `"failed"`.

### BuyerRefundPreviousAttributesInput.status variant 2

anyOf variant 2.

- Value shape: null. Summary of payment_refunds and tender_allocations. Only failed is final: succeeded and partially_succeeded can still change when a bank rejects a refund after accepting it. A refund Flint made to return a payment it couldn't accept goes from succeeded back to pending, with pending_reason manual_review, when a bank reverses it. Follow refund.created when it is accepted, refund.succeeded, refund.partially_succeeded, or refund.failed when its outcome changes, and refund.updated for other changes. 

### BuyerRefundPreviousAttributesInput.succeeded_at

### BuyerRefundPreviousAttributesInput.succeeded_at variant 1

anyOf variant 1: When `status` first became `succeeded`. For a refund with `payment_refunds` or `tender_allocations`, it's when the last of them first succeeded, so it equals the latest `succeeded_at` among them. For a refund Flint processes, it's when Flint recorded the outcome; with `processed_by` `merchant`, it equals `refunded_at`. Present only while `status` is `succeeded`; absent for every other status, including `partially_succeeded` and a refund that failed after it succeeded. A refund that succeeds again shows its first success time..

- Value shape: string. When `status` first became `succeeded`. For a refund with `payment_refunds` or `tender_allocations`, it's when the last of them first succeeded, so it equals the latest `succeeded_at` among them. For a refund Flint processes, it's when Flint recorded the outcome; with `processed_by` `merchant`, it equals `refunded_at`. Present only while `status` is `succeeded`; absent for every other status, including `partially_succeeded` and a refund that failed after it succeeded. A refund that succeeds again shows its first success time. When `status` first became `succeeded`. For a refund with `payment_refunds` or `tender_allocations`, it's when the last of them first succeeded, so it equals the latest `succeeded_at` among them. For a refund Flint processes, it's when Flint recorded the outcome; with `processed_by` `merchant`, it equals `refunded_at`. Present only while `status` is `succeeded`; absent for every other status, including `partially_succeeded` and a refund that failed after it succeeded. A refund that succeeds again shows its first success time. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### BuyerRefundPreviousAttributesInput.succeeded_at variant 2

anyOf variant 2.

- Value shape: null. When `status` first became `succeeded`. For a refund with `payment_refunds` or `tender_allocations`, it's when the last of them first succeeded, so it equals the latest `succeeded_at` among them. For a refund Flint processes, it's when Flint recorded the outcome; with `processed_by` `merchant`, it equals `refunded_at`. Present only while `status` is `succeeded`; absent for every other status, including `partially_succeeded` and a refund that failed after it succeeded. A refund that succeeds again shows its first success time. 

### BuyerRefundPreviousAttributesInput.tax_breakdown_refunds

### BuyerRefundPreviousAttributesInput.tax_breakdown_refunds variant 1

anyOf variant 1: Tax reversed on order-level charges and flat taxes, one entry per tax breakdown. Tax reversed on line items is in `line_item_allocations[].tax_breakdown_refunds`..

- Value shape: Array of [RefundTaxBreakdownRefundPreviousAttributesInput](../models/RefundTaxBreakdownRefundPreviousAttributesInput.md#refundtaxbreakdownrefundpreviousattributesinput). Tax reversed on order-level charges and flat taxes, one entry per tax breakdown. Tax reversed on line items is in `line_item_allocations[].tax_breakdown_refunds`. 

### BuyerRefundPreviousAttributesInput.tax_breakdown_refunds variant 2

anyOf variant 2.

- Value shape: null. Tax reversed on order-level charges and flat taxes, one entry per tax breakdown. Tax reversed on line items is in `line_item_allocations[].tax_breakdown_refunds`. 

### BuyerRefundPreviousAttributesInput.tender_allocations

### BuyerRefundPreviousAttributesInput.tender_allocations variant 1

anyOf variant 1: Every tender the refund drew from, payment or gift card, with its amount, tip share, status, and destination..

- Value shape: Array of [RefundTenderAllocationPreviousAttributesInput](../models/RefundTenderAllocationPreviousAttributesInput.md#refundtenderallocationpreviousattributesinput). Every tender the refund drew from, payment or gift card, with its amount, tip share, status, and destination. 

### BuyerRefundPreviousAttributesInput.tender_allocations variant 2

anyOf variant 2.

- Value shape: null. Every tender the refund drew from, payment or gift card, with its amount, tip share, status, and destination. 

### BuyerRefundPreviousAttributesInput.updated_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### BuyerRefundPreviousAttributesInput.version

Declared alternatives: [BuyerExpandedPaymentIntentSummaryPreviousAttributesInput.version](../models/BuyerExpandedPaymentIntentSummaryPreviousAttributesInput.md#buyerexpandedpaymentintentsummarypreviousattributesinputversion).

