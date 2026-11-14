[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateRefundResponse

A response containing `RefundWithGiftCardCodes` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [RefundWithGiftCardCodes](../models/RefundWithGiftCardCodes.md#refundwithgiftcardcodes) | Resource, collection, or operation result returned by this request. A refund with newly issued gift card codes available during the command recovery window. Money returned against a collected payment. Money returned against a collected payment. `data`: [field definitions](../models/CreateRefundResponse.md#createrefundresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### CreateRefundResponse.data

Resource, collection, or operation result returned by this request. A refund with newly issued gift card codes available during the command recovery window. Money returned against a collected payment.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Total refunded across all tenders, including `refunded_tip_money`. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `credit_note_id` | Optional | string | ID of the credit note this refund paid out. Present only on refunds issued through a credit note. Example: `"cn_01KEZF7C00N1TRRCVDNY8S471H"`. |
| `customer` | Optional | ([ExpandedCustomerSummary](../models/ExpandedCustomerSummary.md#expandedcustomersummary) or null) | Present only when `expand` includes `customer`; `null` when expanded and there is no related customer. `customer`: [declared alternatives](../models/CreateRefundResponse.md#createrefundresponsedatacustomer). |
| `customer_id` | Optional | string | ID of the customer on the refunded order or payment. Absent when neither has one. Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. maxLength: `255`. Example: `"warehouse-1842"`. |
| `failure_reason` | Optional | string | Why a refund failed or a payment refund was canceled. Failed and canceled amounts become refundable again, except a refund with reason payment_returned that failed with payment_disputed: the buyer won a dispute on the charge, so nothing is left to refund. A payment_returned refund that failed with refund_abandoned cannot be retried through Flint; the store must arrange repayment outside Flint. Fix the cause, then create a new refund with a new idempotency key. Unknown provider values are returned as refund_failed. Values: [11 declared values](BuyerPaymentRefundInput.md#buyerpaymentrefundinput-failure_reason-values). |
| `gift_card_codes` | Optional | Array of object | New gift card codes recovered only within 24 hours of the original command and only while each code remains current. Omitted after the recovery window and never returned by ordinary refund reads or events. `gift_card_codes[]`: [field definitions](../models/CreateRefundResponse.md#createrefundresponsedatagift_card_codes). |
| `idempotency_key` | Optional | string | The caller's Idempotency-Key when this refund was created, including refunds created by issuing a credit note. Use GET /v1/refunds?idempotency_key= to recover a lost response. |
| `initiated_by` | Required | string | Who decided to make this refund: `merchant` for you or your integration, `flint` for a refund Flint made on its own to return a payment it couldn't accept. Unlike a Return's `initiated_by`, it doesn't say which credential asked. Read-only. Values: `"merchant"`, `"flint"`. |
| `invoice_id` | Optional | string | ID of the invoice whose credit note this refund paid out. Present only on refunds issued through a credit note. Example: `"inv_01KEZF7C00A5GEBMWHEAJFSAR4"`. |
| `line_item_allocations` | Optional | Array of [RefundLineItemAllocation](../models/RefundLineItemAllocation.md#refundlineitemallocation) | How the refund applied to each order line item it covered, with quantity, tax, and adjustments. `line_item_allocations[]`: [field definitions](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_resolutionsrefundsline_item_allocations). |
| `merchant_id` | Required | string | ID of the merchant this resource belongs to. Example: `"mer_01KEZF7C00KPYH1DDFPCCX3B6E"`. |
| `metadata` | Optional | Map of string | Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. `metadata`: [field definitions](../models/OrderResponse.md#orderresponsedatachargesmetadata). |
| `order` | Optional | ([ExpandedOrderSummary](../models/ExpandedOrderSummary.md#expandedordersummary) or null) | Present only when `expand` includes `order`; `null` when expanded and there is no related order. `order`: [declared alternatives](../models/CreateRefundResponse.md#createrefundresponsedataorder). |
| `order_edit_id` | Optional | string | ID of the paid-order edit that created this refund. Present only on refunds issued through an order edit. Example: `"oed_01KEZF7C00A6BQ4TBGWFDJ944A"`. |
| `order_id` | Optional | string | ID of the order the refund was issued against. For a refund with `reason` `payment_returned`, the order the returned payment was for; the order never received this money. Absent for a refund of a payment that has no order, and for a standalone gift card refund. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `payment_intent` | Optional | ([ExpandedPaymentIntentSummary](../models/ExpandedPaymentIntentSummary.md#expandedpaymentintentsummary) or null) | Present only when `expand` includes `payment_intent`; `null` when expanded and there is no related payment intent. `payment_intent`: [declared alternatives](../models/CreateRefundResponse.md#createrefundresponsedatapayment_intent). |
| `payment_intent_id` | Optional | string | ID of the payment the refund was issued against, when it targeted one payment. `payment_refunds` lists every payment it returned money through. Example: `"pi_01KEZF7C00G8H9D509YEV22P7R"`. |
| `payment_refunds` | Optional | Array of [PaymentRefund](../models/PaymentRefund.md#paymentrefund) | The part of the refund returned through each payment, with its own status. Absent when the refund was all gift card credit or store credit. `payment_refunds[]`: [field definitions](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_resolutionsrefundspayment_refunds). |
| `payment_review_id` | Optional | string | ID of the payment review whose decline created this refund. Present only on refunds issued for a declined review. Example: `"rev_01KEZF7C00BVBQ00XDFNKB1EF6"`. |
| `pending_reason` | Required | string or null | Why a pending refund is waiting. `null` when `status` isn't `pending`, or when the refund is on its way without review. Values: `"manual_review"`, `null`. |
| `processed_by` | Required | string | Who moved or is moving the money for this refund. Flint processes refunds through a processor or a gift card; merchant means the merchant returned the money outside Flint and recorded it here. Existing refunds are processed by Flint. Values: `"flint"`, `"merchant"`. |
| `reason` | Required | string or null | Why the refund was issued. It never changes how the money moves. The buyer's refund receipt shows it only for `requested_by_customer`, `duplicate`, `defective_product`, `wrong_item_shipped`, `never_received`, `not_as_described`, `arrived_too_late`, `accidental_order`, and `out_of_stock`. Only Flint sets `payment_returned`, and it can't be sent in requests. `null` when no reason was recorded. Values: [15 declared values](RefundInput.md#refundinput-reason-values). |
| `reason_message` | Optional | string | Note explaining the refund, up to 1,024 characters. |
| `refund_id` | Required | string | Unique identifier for this refund, prefixed `ref_`. Example: `"ref_01KEZF7C003DTD59WKYHEXYQ1K"`. |
| `refund_platform_fee` | Required | boolean | Whether the request asked to return the platform fee on the payments this refund refunds (refund_platform_fee). Each payment refund's refunded_platform_fee_money is what it returns. |
| `refund_reference` | Optional | string | The merchant's opaque check, wire, or other reference for money returned outside Flint, preserved exactly. Present only when processed_by is merchant and a reference was supplied. external_reference_id is the merchant's own refund ID. minLength: `1`. maxLength: `255`. |
| `refunded_at` | Optional | string | When the merchant reports that the money was returned outside Flint. Present only when processed_by is merchant. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `refunded_tip_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Share of `amount_money` that refunds tips. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `return_id` | Optional | string | ID of the return this refund paid out. Present only on refunds issued by a return. Example: `"ret_01KEZF7C00PG93650ZKVQNGF7X"`. |
| `return_resolution_id` | Optional | string | ID of the return resolution that issued this refund. Present only on refunds issued by a return. Example: `"retres_01KEZF7C00C7RZJN31W9SGMEQ3"`. |
| `status` | Required | string | Summary of payment_refunds and tender_allocations. Only failed is final: succeeded and partially_succeeded can still change when a bank rejects a refund after accepting it. A refund Flint made to return a payment it couldn't accept goes from succeeded back to pending, with pending_reason manual_review, when a bank reverses it. Follow refund.created when it is accepted, refund.succeeded, refund.partially_succeeded, or refund.failed when its outcome changes, and refund.updated for other changes. Values: `"pending"`, `"succeeded"`, `"partially_succeeded"`, `"failed"`. |
| `succeeded_at` | Optional | string | When `status` first became `succeeded`. For a refund with `payment_refunds` or `tender_allocations`, it's when the last of them first succeeded, so it equals the latest `succeeded_at` among them. For a refund Flint processes, it's when Flint recorded the outcome; with `processed_by` `merchant`, it equals `refunded_at`. Present only while `status` is `succeeded`; absent for every other status, including `partially_succeeded` and a refund that failed after it succeeded. A refund that succeeds again shows its first success time. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `tax_breakdown_refunds` | Optional | Array of [RefundTaxBreakdownRefund](../models/RefundTaxBreakdownRefund.md#refundtaxbreakdownrefund) | Tax reversed on order-level charges and flat taxes, one entry per tax breakdown. Tax reversed on line items is in `line_item_allocations[].tax_breakdown_refunds`. `tax_breakdown_refunds[]`: [field definitions](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_resolutionsrefundsline_item_allocationstax_breakdown_refunds). |
| `tender_allocations` | Optional | Array of [RefundTenderAllocation](../models/RefundTenderAllocation.md#refundtenderallocation) | Every tender the refund drew from, payment or gift card, with its amount, tip share, status, and destination. `tender_allocations[]`: [field definitions](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_resolutionsrefundstender_allocations). |
| `unissued_gift_card_recoveries` | Optional | Array of [RefundUnissuedGiftCardRecovery](../models/RefundUnissuedGiftCardRecovery.md#refundunissuedgiftcardrecovery) | Cash returned after an unissued gift card purchase refund failed. Return it through a new refund against payment_intent_id and order_line_item_id. It does not issue another card. Source remaining and pending amounts describe the entire original settlement allocation; repeated entries for that source are not additive. `unissued_gift_card_recoveries[]`: [field definitions](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_resolutionsrefundsunissued_gift_card_recoveries). |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `version` | Required | integer | Persisted version of this resource's owned state. Expanded resources and external observations can change independently. Format: `uint64`. minimum: `1`. |

### CreateRefundResponse.data.customer

Present only when `expand` includes `customer`; `null` when expanded and there is no related customer.

Field definitions: [shared fields](DisputeResponse.md#disputeresponsedatacustomer).

### CreateRefundResponse.data.customer variant 1

anyOf ExpandedCustomerSummary: A customer's summary fields, returned in place of a customer ID when the customer is expanded..

- Required: `customer_id`, `email`, `name`, `phone`, `status`.
- Optional: `created_at`, `updated_at`.

### CreateRefundResponse.data.customer variant 2

anyOf variant 2.

- Undeclared: `created_at`, `customer_id`, `email`, `name`, `phone`, `status`, `updated_at`.
- Value shape: null. Present only when `expand` includes `customer`; `null` when expanded and there is no related customer. 

### CreateRefundResponse.data.gift_card_codes[]

The code of a gift card issued by a refund, returned once in the refund result with its `gift_card_id`.

Field definitions: [shared fields](RefundGiftCardCodeInput.md#refundgiftcardcodeinput).

### CreateRefundResponse.data.line_item_allocations[]

Field definitions: [CancelReturnResponse.data.return_resolutions[].refunds[].line_item_allocations[]](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_resolutionsrefundsline_item_allocations).

### CreateRefundResponse.data.metadata

Field definitions: [OrderResponse.data.charges[].metadata](../models/OrderResponse.md#orderresponsedatachargesmetadata).

### CreateRefundResponse.data.order

Present only when `expand` includes `order`; `null` when expanded and there is no related order.

Field definitions: [shared fields](DisputeResponse.md#disputeresponsedataorder).

### CreateRefundResponse.data.order variant 1

anyOf ExpandedOrderSummary: An order's summary fields, including status, payment and refund status, and pricing and settlement amounts, returned when the order is expanded..

- Required: `deferred_promotions`, `governing_delivery_selection_id`, `order_id`, `paid_at`, `payment_status`, `pricing_amounts`, `refund_status`, `settlement_amounts`, `status`, `supported_actions`.
- Optional: `buyer_contact`, `closed_at`, `closed_reason`, `created_at`, `customer_id`, `fulfillment_status`, `order_number`, `payment_intent_ids`, `updated_at`.

### CreateRefundResponse.data.order variant 2

anyOf variant 2.

- Undeclared: `buyer_contact`, `closed_at`, `closed_reason`, `created_at`, `customer_id`, `deferred_promotions`, `fulfillment_status`, `governing_delivery_selection_id`, `order_id`, `order_number`, `paid_at`, `payment_intent_ids`, `payment_status`, `pricing_amounts`, `refund_status`, `settlement_amounts`, `status`, `supported_actions`, `updated_at`.
- Value shape: null. Present only when `expand` includes `order`; `null` when expanded and there is no related order. 

### CreateRefundResponse.data.order variant 1.buyer_contact

Field definitions: [DisputeResponse.data.order variant 1.buyer_contact](../models/DisputeResponse.md#disputeresponsedataorder-variant-1buyer_contact).

### CreateRefundResponse.data.order variant 1.deferred_promotions[]

Field definitions: [DisputeResponse.data.order variant 1.deferred_promotions[]](../models/DisputeResponse.md#disputeresponsedataorder-variant-1deferred_promotions).

### CreateRefundResponse.data.payment_intent

Present only when `expand` includes `payment_intent`; `null` when expanded and there is no related payment intent.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Conditional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The amount requested from the buyer, including any tip_money. Capturing doesn't change it: after a partial capture it still shows the requested amount, and captured_money shows what was collected. On a standalone payment intent, PATCH can change it only before the first confirmation attempt. An amount_money or tip_money change that leaves too little for stored splits returns LIMIT_EXCEEDED at the changed field with minimum_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `capture_method` | Conditional | string | When money is collected. Defaults to automatic. Values: `"automatic"`, `"manual"`. |
| `created_at` | Conditional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `customer_id` | Conditional | string | Customer linked to this payment intent. Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. |
| `dispute_status` | Conditional | string | Dispute state of this payment. none means no dispute or inquiry is open or recorded. The inquiry_ values track an issuer inquiry or early warning that isn't a chargeback. Read the dispute with GET /v1/disputes for its deadline and evidence. Values: [10 declared values](#createrefundresponsedatapayment_intent-dispute_status-values). |
| `order_id` | Conditional | string | Order this payment intent belongs to. Create it through the order and confirm it with POST /v1/orders/{order_id}/pay. Capture and cancel use POST /v1/payment-intents/{payment_intent_id}/capture or /cancel for every payment intent. Order-owned intents accept PATCH for metadata and external_reference_id. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `payment_intent_id` | Conditional | string | Flint payment intent ID. Example: `"pi_01KEZF7C00G8H9D509YEV22P7R"`. |
| `payment_source` | Conditional | [PaymentSourceSummary](../models/PaymentSourceSummary.md#paymentsourcesummary) | Summary of the card or bank account used for the payment. Absent until a payment source is attached. A summary of the payment source used for a payment, by funding-method family, with card or bank account display details. |
| `refund_status` | Conditional | string | How much of captured_money has been refunded, including value issued as store credit, based on refunded_money. Values: `"none"`, `"partially_refunded"`, `"refunded"`. |
| `status` | Conditional | string | Lifecycle status. requires_payment_method covers both a new payment intent and one whose last attempt failed, so read last_payment_error with it. succeeded, canceled, and expired are final. Refunds and disputes never change status. Values: `"requires_payment_method"`, `"requires_confirmation"`, `"requires_action"`, `"processing"`, `"requires_capture"`, `"canceled"`, `"succeeded"`, `"expired"`. |
| `updated_at` | Conditional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `version` | Conditional | integer | Persisted version of this resource's owned state. Expanded resources and external observations can change independently. Format: `uint64`. minimum: `1`. |

#### CreateRefundResponse.data.payment_intent dispute_status values

- `"none"`
- `"inquiry_needs_response"`
- `"inquiry_under_review"`
- `"inquiry_closed"`
- `"needs_response"`
- `"under_review"`
- `"won"`
- `"lost"`
- `"prevented"`
- `"other"`

### CreateRefundResponse.data.payment_intent variant 1

anyOf ExpandedPaymentIntentSummary: A payment intent's summary fields, including amount, status, and capture method, returned when the payment intent is expanded..

- Required: `amount_money`, `dispute_status`, `payment_intent_id`, `status`, `version`.
- Optional: `capture_method`, `created_at`, `customer_id`, `order_id`, `payment_source`, `refund_status`, `updated_at`.

### CreateRefundResponse.data.payment_intent variant 2

anyOf variant 2.

- Undeclared: `amount_money`, `capture_method`, `created_at`, `customer_id`, `dispute_status`, `order_id`, `payment_intent_id`, `payment_source`, `refund_status`, `status`, `updated_at`, `version`.
- Value shape: null. Present only when `expand` includes `payment_intent`; `null` when expanded and there is no related payment intent. 

### CreateRefundResponse.data.payment_refunds[]

Field definitions: [CancelReturnResponse.data.return_resolutions[].refunds[].payment_refunds[]](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_resolutionsrefundspayment_refunds).

### CreateRefundResponse.data.tax_breakdown_refunds[]

Field definitions: [CancelReturnResponse.data.return_resolutions[].refunds[].line_item_allocations[].tax_breakdown_refunds[]](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_resolutionsrefundsline_item_allocationstax_breakdown_refunds).

### CreateRefundResponse.data.tender_allocations[]

Field definitions: [CancelReturnResponse.data.return_resolutions[].refunds[].tender_allocations[]](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_resolutionsrefundstender_allocations).

### CreateRefundResponse.data.unissued_gift_card_recoveries[]

Field definitions: [CancelReturnResponse.data.return_resolutions[].refunds[].unissued_gift_card_recoveries[]](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_resolutionsrefundsunissued_gift_card_recoveries).

### CreateRefundResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

