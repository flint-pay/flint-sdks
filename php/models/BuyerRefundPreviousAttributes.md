[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerRefundPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Total refunded across all tenders, including `refunded_tip_money`. |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `credit_adjustment_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Money paid for Return resolution credits, included in amount_money. It carries no merchandise, shipping, tax, or tip allocation. Zero for refunds without credits. |
| `credit_note_id` | Optional | string or null | ID of the credit note this refund paid out. Present only on refunds issued through a credit note. `credit_note_id`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributescredit_note_id). |
| `customer` | Optional | [ExpandedCustomerSummaryPreviousAttributes](../models/ExpandedCustomerSummaryPreviousAttributes.md#expandedcustomersummarypreviousattributes) or null | The customer summary for `customer_id`. Buyer refund endpoints take no `expand` parameter, so it is never expanded here. `null` when the refund is not expanded. `customer`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributescustomer). |
| `customer_id` | Optional | string or null | ID of the customer on the refunded order or payment. Absent when neither has one. `customer_id`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributescustomer_id). |
| `failure_reason` | Optional | string or null | A coarse buyer-visible failure category. refund_abandoned means the refund could not be completed; contact the store to get your money back. refund_failed means the refund failed. Omitted when there is no failure. Values: `"refund_failed"`, `"refund_abandoned"`. `failure_reason`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesfailure_reason). |
| `invoice_id` | Optional | string or null | ID of the invoice whose credit note this refund paid out. Present only on refunds issued through a credit note. `invoice_id`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesinvoice_id). |
| `line_item_allocations` | Optional | Array of [RefundLineItemAllocationPreviousAttributes](../models/RefundLineItemAllocationPreviousAttributes.md#refundlineitemallocationpreviousattributes) or null | How the refund applied to each order line item it covered, with quantity, tax, and adjustments. `line_item_allocations`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesline_item_allocations). |
| `order` | Optional | [BuyerExpandedOrderSummaryPreviousAttributes](../models/BuyerExpandedOrderSummaryPreviousAttributes.md#buyerexpandedordersummarypreviousattributes) or null | The order summary for `order_id`. Buyer refund endpoints take no `expand` parameter, so it is never expanded here. `null` when the refund is not expanded. `order`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesorder). |
| `order_edit_id` | Optional | string or null | ID of the paid-order edit that created this refund. Present only on refunds issued through an order edit. `order_edit_id`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesorder_edit_id). |
| `order_id` | Optional | string or null | ID of the order the refund was issued against. For a refund with `reason` `payment_returned`, the order the returned payment was for; the order never received this money. Absent for a refund of a payment that has no order, and for a standalone gift card refund. `order_id`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesorder_id). |
| `payment_intent` | Optional | [BuyerExpandedPaymentIntentSummaryPreviousAttributes](../models/BuyerExpandedPaymentIntentSummaryPreviousAttributes.md#buyerexpandedpaymentintentsummarypreviousattributes) or null | The payment summary for `payment_intent_id`. Buyer refund endpoints take no `expand` parameter, so it is never expanded here. `null` when the refund is not expanded. `payment_intent`: [declared alternatives](../models/BuyerPaymentRefundPreviousAttributes.md#buyerpaymentrefundpreviousattributespayment_intent). |
| `payment_intent_id` | Optional | string or null | ID of the payment the refund was issued against, when it targeted one payment. `payment_refunds` lists every payment it returned money through. `payment_intent_id`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributespayment_intent_id). |
| `payment_refunds` | Optional | Array of [BuyerPaymentRefundPreviousAttributes](../models/BuyerPaymentRefundPreviousAttributes.md#buyerpaymentrefundpreviousattributes) or null | The part of the refund returned through each payment, with its own status. Absent when the refund was all gift card credit or store credit. `payment_refunds`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributespayment_refunds). |
| `pending_reason` | Optional | string or null | Why a pending refund is waiting. `null` when `status` isn't `pending`, or when the refund is on its way without review. Values: `"manual_review"`, `null`. `pending_reason`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributespending_reason). |
| `processed_by` | Optional | string or null | Who moved or is moving the money for this refund. Flint processes refunds through a processor or a gift card; merchant means the merchant returned the money outside Flint and recorded it here. Existing refunds are processed by Flint. Values: `"flint"`, `"merchant"`. `processed_by`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesprocessed_by). |
| `reason` | Optional | string or null | `payment_returned` when Flint refunded a payment it couldn't apply to the order. `null` when the store made the refund, because a store's reasons aren't shared with buyers. Values: `"payment_returned"`, `null`. `reason`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesreason). |
| `reason_message` | Optional | string or null | Note explaining the refund, up to 1,024 characters. `reason_message`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesreason_message). |
| `refund_id` | Optional | string or null | Unique identifier for this refund, prefixed `ref_`. `refund_id`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesrefund_id). |
| `refund_reference` | Optional | string or null | The merchant's opaque check, wire, or other reference for money returned outside Flint, preserved exactly. Present only when processed_by is merchant and a reference was supplied. external_reference_id is the merchant's own refund ID. `refund_reference`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesrefund_reference). |
| `refunded_at` | Optional | string or null | When the merchant reports that the money was returned outside Flint. Present only when processed_by is merchant. `refunded_at`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesrefunded_at). |
| `refunded_tip_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Share of `amount_money` that refunds tips. |
| `return_id` | Optional | string or null | ID of the return this refund paid out. Present only on refunds issued by a return. `return_id`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesreturn_id). |
| `return_resolution_id` | Optional | string or null | ID of the return resolution that issued this refund. Present only on refunds issued by a return. `return_resolution_id`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesreturn_resolution_id). |
| `status` | Optional | string or null | Summary of payment_refunds and tender_allocations. Only failed is final: succeeded and partially_succeeded can still change when a bank rejects a refund after accepting it. A refund Flint made to return a payment it couldn't accept goes from succeeded back to pending, with pending_reason manual_review, when a bank reverses it. Follow refund.created when it is accepted, refund.succeeded, refund.partially_succeeded, or refund.failed when its outcome changes, and refund.updated for other changes. Values: `"pending"`, `"succeeded"`, `"partially_succeeded"`, `"failed"`. `status`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesstatus). |
| `succeeded_at` | Optional | string or null | When `status` first became `succeeded`. For a refund with `payment_refunds` or `tender_allocations`, it's when the last of them first succeeded, so it equals the latest `succeeded_at` among them. For a refund Flint processes, it's when Flint recorded the outcome; with `processed_by` `merchant`, it equals `refunded_at`. Present only while `status` is `succeeded`; absent for every other status, including `partially_succeeded` and a refund that failed after it succeeded. A refund that succeeds again shows its first success time. `succeeded_at`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributessucceeded_at). |
| `tax_breakdown_refunds` | Optional | Array of [RefundTaxBreakdownRefundPreviousAttributes](../models/RefundTaxBreakdownRefundPreviousAttributes.md#refundtaxbreakdownrefundpreviousattributes) or null | Tax reversed on order-level charges and flat taxes, one entry per tax breakdown. Tax reversed on line items is in `line_item_allocations[].tax_breakdown_refunds`. `tax_breakdown_refunds`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributestax_breakdown_refunds). |
| `tender_allocations` | Optional | Array of [RefundTenderAllocationPreviousAttributes](../models/RefundTenderAllocationPreviousAttributes.md#refundtenderallocationpreviousattributes) or null | Every tender the refund drew from, payment or gift card, with its amount, tip share, status, and destination. `tender_allocations`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributestender_allocations). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `version` | Optional | integer or null | Persisted version of this resource's owned state. Expanded resources and external observations can change independently. `version`: [declared alternatives](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdata-fields-1previous_attributesversion). |

### BuyerRefundPreviousAttributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### BuyerRefundPreviousAttributes.credit_note_id

### BuyerRefundPreviousAttributes.credit_note_id variant 1

anyOf variant 1: ID of the credit note this refund paid out. Present only on refunds issued through a credit note..

- Value shape: string. ID of the credit note this refund paid out. Present only on refunds issued through a credit note. 

### BuyerRefundPreviousAttributes.credit_note_id variant 2

anyOf variant 2.

- Value shape: null. ID of the credit note this refund paid out. Present only on refunds issued through a credit note. 

### BuyerRefundPreviousAttributes.customer

The customer summary for `customer_id`. Buyer refund endpoints take no `expand` parameter, so it is never expanded here. `null` when the refund is not expanded.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Conditional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at). |
| `customer_id` | Conditional | string or null | Unique identifier for this customer, prefixed `cus_`. `customer_id`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributescustomer-variant-1customer_id). |
| `email` | Conditional | string or null | Customer email. `null` when the customer has none. Unique among the environment's customers. `email`: [declared alternatives](../models/ExpandedCustomerSummaryPreviousAttributes.md#expandedcustomersummarypreviousattributesemail). |
| `name` | Conditional | string or null | Customer name. `null` when none is set. `name`: [declared alternatives](../models/ExpandedCustomerSummaryPreviousAttributes.md#expandedcustomersummarypreviousattributesname). |
| `phone` | Conditional | string or null | Customer phone number. `null` when none is set. `phone`: [declared alternatives](../models/ExpandedCustomerSummaryPreviousAttributes.md#expandedcustomersummarypreviousattributesphone). |
| `status` | Conditional | string or null | Where the customer is in the deletion lifecycle. Values: `"active"`, `"deletion_processing"`, `"deleted"`. `status`: [declared alternatives](../models/ExpandedCustomerSummaryPreviousAttributes.md#expandedcustomersummarypreviousattributesstatus). |
| `updated_at` | Conditional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at). |

### BuyerRefundPreviousAttributes.customer variant 1

anyOf ExpandedCustomerSummaryPreviousAttributes.

- Optional: `created_at`, `customer_id`, `email`, `name`, `phone`, `status`, `updated_at`.

### BuyerRefundPreviousAttributes.customer variant 2

anyOf variant 2.

- Undeclared: `created_at`, `customer_id`, `email`, `name`, `phone`, `status`, `updated_at`.
- Value shape: null. The customer summary for `customer_id`. Buyer refund endpoints take no `expand` parameter, so it is never expanded here. `null` when the refund is not expanded. 

### BuyerRefundPreviousAttributes.customer variant 1.created_at

Declared alternatives: [PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.created_at](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at).

### BuyerRefundPreviousAttributes.customer variant 1.customer_id

### BuyerRefundPreviousAttributes.customer variant 1.customer_id variant 1

anyOf variant 1: Unique identifier for this customer, prefixed `cus_`..

- Value shape: string. Unique identifier for this customer, prefixed `cus_`. Unique identifier for this customer, prefixed `cus_`. Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. 

### BuyerRefundPreviousAttributes.customer variant 1.customer_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this customer, prefixed `cus_`. 

### BuyerRefundPreviousAttributes.customer variant 1.email

Declared alternatives: [ExpandedCustomerSummaryPreviousAttributes.email](../models/ExpandedCustomerSummaryPreviousAttributes.md#expandedcustomersummarypreviousattributesemail).

### BuyerRefundPreviousAttributes.customer variant 1.name

Declared alternatives: [ExpandedCustomerSummaryPreviousAttributes.name](../models/ExpandedCustomerSummaryPreviousAttributes.md#expandedcustomersummarypreviousattributesname).

### BuyerRefundPreviousAttributes.customer variant 1.phone

Declared alternatives: [ExpandedCustomerSummaryPreviousAttributes.phone](../models/ExpandedCustomerSummaryPreviousAttributes.md#expandedcustomersummarypreviousattributesphone).

### BuyerRefundPreviousAttributes.customer variant 1.status

Declared alternatives: [ExpandedCustomerSummaryPreviousAttributes.status](../models/ExpandedCustomerSummaryPreviousAttributes.md#expandedcustomersummarypreviousattributesstatus).

### BuyerRefundPreviousAttributes.customer variant 1.updated_at

Declared alternatives: [PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.created_at](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at).

### BuyerRefundPreviousAttributes.customer_id

### BuyerRefundPreviousAttributes.customer_id variant 1

anyOf variant 1: ID of the customer on the refunded order or payment. Absent when neither has one..

- Value shape: string. ID of the customer on the refunded order or payment. Absent when neither has one. 

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

### BuyerRefundPreviousAttributes.invoice_id

### BuyerRefundPreviousAttributes.invoice_id variant 1

anyOf variant 1: ID of the invoice whose credit note this refund paid out. Present only on refunds issued through a credit note..

- Value shape: string. ID of the invoice whose credit note this refund paid out. Present only on refunds issued through a credit note. 

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

### BuyerRefundPreviousAttributes.line_item_allocations variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `adjustment_refunds` | Optional | Array of [RefundLineItemAdjustmentRefundPreviousAttributes](../models/RefundLineItemAdjustmentRefundPreviousAttributes.md#refundlineitemadjustmentrefundpreviousattributes) or null | Amounts refunded back against adjustments withheld by earlier refunds of this line. `adjustment_refunds`: [declared alternatives](../models/RefundLineItemAllocationPreviousAttributes.md#refundlineitemallocationpreviousattributesadjustment_refunds). |
| `adjustments` | Optional | Array of [RefundLineItemAdjustmentPreviousAttributes](../models/RefundLineItemAdjustmentPreviousAttributes.md#refundlineitemadjustmentpreviousattributes) or null | Amounts withheld from this line's refund, such as a restocking fee. `adjustments`: [declared alternatives](../models/RefundLineItemAllocationPreviousAttributes.md#refundlineitemallocationpreviousattributesadjustments). |
| `automatic_refund` | Optional | [RefundLineItemAutomaticRefundPreviousAttributes](../models/RefundLineItemAutomaticRefundPreviousAttributes.md#refundlineitemautomaticrefundpreviousattributes) or null | What Flint calculated for the refunded portion of the line before adjustments. |
| `bundle_id` | Optional | string or null | ID of the bundle the line was sold from. `bundle_id`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesline_item_allocations-variant-1-fields-1bundle_id). |
| `categories` | Optional | Array of [CategoryReferencePreviousAttributes](../models/CategoryReferencePreviousAttributes.md#categoryreferencepreviousattributes) or null | Catalog categories of the item. `categories`: [declared alternatives](../models/RefundLineItemAllocationPreviousAttributes.md#refundlineitemallocationpreviousattributescategories). |
| `modifiers` | Optional | Array of [RefundLineItemModifierAllocationPreviousAttributes](../models/RefundLineItemModifierAllocationPreviousAttributes.md#refundlineitemmodifierallocationpreviousattributes) or null | The part of the refund that applies to each modifier on the line. `modifiers`: [declared alternatives](../models/RefundLineItemAllocationPreviousAttributes.md#refundlineitemallocationpreviousattributesmodifiers). |
| `order_id` | Optional | string or null | ID of the order that owns the refunded line item. `order_id`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesline_item_allocations-variant-1-fields-1order_id). |
| `order_line_item_id` | Optional | string or null | ID of the order line item this allocation refunded. `order_line_item_id`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesline_item_allocations-variant-1-fields-1order_line_item_id). |
| `product_id` | Optional | string or null | ID of the catalog product the line was sold from. `product_id`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesline_item_allocations-variant-1-fields-1product_id). |
| `quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `quantity`: [declared alternatives](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity). |
| `refunded_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Amount refunded for this line: the automatic refund less adjustments, plus any refunds back against earlier adjustments. |
| `selected_options` | Optional | Array of [SelectedProductOptionPreviousAttributes](../models/SelectedProductOptionPreviousAttributes.md#selectedproductoptionpreviousattributes) or null | Variant options selected for the item, such as size and color. `selected_options`: [declared alternatives](../models/RefundLineItemAllocationPreviousAttributes.md#refundlineitemallocationpreviousattributesselected_options). |
| `sku` | Optional | string or null | SKU of the item as sold. `sku`: [declared alternatives](../models/RefundLineItemAllocationPreviousAttributes.md#refundlineitemallocationpreviousattributessku). |
| `source_type` | Optional | string or null | Whether the line was sold as a catalog `variant` or a `bundle`. Values: `"variant"`, `"bundle"`. `source_type`: [declared alternatives](../models/RefundLineItemAllocationPreviousAttributes.md#refundlineitemallocationpreviousattributessource_type). |
| `tax_breakdown_refunds` | Optional | Array of [RefundTaxBreakdownRefundPreviousAttributes](../models/RefundTaxBreakdownRefundPreviousAttributes.md#refundtaxbreakdownrefundpreviousattributes) or null | Tax reversed for each jurisdiction on this line. `tax_breakdown_refunds`: [declared alternatives](../models/RefundLineItemAllocationPreviousAttributes.md#refundlineitemallocationpreviousattributestax_breakdown_refunds). |
| `tax_refund_mode` | Optional | string or null | Whether Flint calculated the tax refunded (`automatic`) or you set it (`explicit`). Values: `"automatic"`, `"explicit"`. `tax_refund_mode`: [declared alternatives](../models/RefundLineItemAllocationPreviousAttributes.md#refundlineitemallocationpreviousattributestax_refund_mode). |
| `variant_id` | Optional | string or null | ID of the catalog variant the line was sold from. `variant_id`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesline_item_allocations-variant-1-fields-1variant_id). |

### BuyerRefundPreviousAttributes.line_item_allocations variant 1.[] fields 1.adjustment_refunds

Declared alternatives: [RefundLineItemAllocationPreviousAttributes.adjustment_refunds](../models/RefundLineItemAllocationPreviousAttributes.md#refundlineitemallocationpreviousattributesadjustment_refunds).

### BuyerRefundPreviousAttributes.line_item_allocations variant 1.[] fields 1.adjustments

Declared alternatives: [RefundLineItemAllocationPreviousAttributes.adjustments](../models/RefundLineItemAllocationPreviousAttributes.md#refundlineitemallocationpreviousattributesadjustments).

### BuyerRefundPreviousAttributes.line_item_allocations variant 1.[] fields 1.bundle_id

### BuyerRefundPreviousAttributes.line_item_allocations variant 1.[] fields 1.bundle_id variant 1

anyOf variant 1: ID of the bundle the line was sold from..

- Value shape: string. ID of the bundle the line was sold from. ID of the bundle the line was sold from. Example: `"bun_01KEZF7C00TQ6S76Z6CVQF5SVN"`. 

### BuyerRefundPreviousAttributes.line_item_allocations variant 1.[] fields 1.bundle_id variant 2

anyOf variant 2.

- Value shape: null. ID of the bundle the line was sold from. 

### BuyerRefundPreviousAttributes.line_item_allocations variant 1.[] fields 1.categories

Declared alternatives: [RefundLineItemAllocationPreviousAttributes.categories](../models/RefundLineItemAllocationPreviousAttributes.md#refundlineitemallocationpreviousattributescategories).

### BuyerRefundPreviousAttributes.line_item_allocations variant 1.[] fields 1.modifiers

Declared alternatives: [RefundLineItemAllocationPreviousAttributes.modifiers](../models/RefundLineItemAllocationPreviousAttributes.md#refundlineitemallocationpreviousattributesmodifiers).

### BuyerRefundPreviousAttributes.line_item_allocations variant 1.[] fields 1.order_id

### BuyerRefundPreviousAttributes.line_item_allocations variant 1.[] fields 1.order_id variant 1

anyOf variant 1: ID of the order that owns the refunded line item..

- Value shape: string. ID of the order that owns the refunded line item. ID of the order that owns the refunded line item. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. 

### BuyerRefundPreviousAttributes.line_item_allocations variant 1.[] fields 1.order_id variant 2

anyOf variant 2.

- Value shape: null. ID of the order that owns the refunded line item. 

### BuyerRefundPreviousAttributes.line_item_allocations variant 1.[] fields 1.order_line_item_id

### BuyerRefundPreviousAttributes.line_item_allocations variant 1.[] fields 1.order_line_item_id variant 1

anyOf variant 1: ID of the order line item this allocation refunded..

- Value shape: string. ID of the order line item this allocation refunded. ID of the order line item this allocation refunded. Example: `"li_01KEZF7C008YPRCK7VDKTGWR31"`. 

### BuyerRefundPreviousAttributes.line_item_allocations variant 1.[] fields 1.order_line_item_id variant 2

anyOf variant 2.

- Value shape: null. ID of the order line item this allocation refunded. 

### BuyerRefundPreviousAttributes.line_item_allocations variant 1.[] fields 1.product_id

### BuyerRefundPreviousAttributes.line_item_allocations variant 1.[] fields 1.product_id variant 1

anyOf variant 1: ID of the catalog product the line was sold from..

- Value shape: string. ID of the catalog product the line was sold from. ID of the catalog product the line was sold from. Example: `"prod_01KEZF7C00BVSHCNWVH528HB66"`. 

### BuyerRefundPreviousAttributes.line_item_allocations variant 1.[] fields 1.product_id variant 2

anyOf variant 2.

- Value shape: null. ID of the catalog product the line was sold from. 

### BuyerRefundPreviousAttributes.line_item_allocations variant 1.[] fields 1.quantity

Declared alternatives: [MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.line_items variant 1.[] fields 1.quantity](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity).

### BuyerRefundPreviousAttributes.line_item_allocations variant 1.[] fields 1.selected_options

Declared alternatives: [RefundLineItemAllocationPreviousAttributes.selected_options](../models/RefundLineItemAllocationPreviousAttributes.md#refundlineitemallocationpreviousattributesselected_options).

### BuyerRefundPreviousAttributes.line_item_allocations variant 1.[] fields 1.sku

Declared alternatives: [RefundLineItemAllocationPreviousAttributes.sku](../models/RefundLineItemAllocationPreviousAttributes.md#refundlineitemallocationpreviousattributessku).

### BuyerRefundPreviousAttributes.line_item_allocations variant 1.[] fields 1.source_type

Declared alternatives: [RefundLineItemAllocationPreviousAttributes.source_type](../models/RefundLineItemAllocationPreviousAttributes.md#refundlineitemallocationpreviousattributessource_type).

### BuyerRefundPreviousAttributes.line_item_allocations variant 1.[] fields 1.tax_breakdown_refunds

Declared alternatives: [RefundLineItemAllocationPreviousAttributes.tax_breakdown_refunds](../models/RefundLineItemAllocationPreviousAttributes.md#refundlineitemallocationpreviousattributestax_breakdown_refunds).

### BuyerRefundPreviousAttributes.line_item_allocations variant 1.[] fields 1.tax_refund_mode

Declared alternatives: [RefundLineItemAllocationPreviousAttributes.tax_refund_mode](../models/RefundLineItemAllocationPreviousAttributes.md#refundlineitemallocationpreviousattributestax_refund_mode).

### BuyerRefundPreviousAttributes.line_item_allocations variant 1.[] fields 1.variant_id

### BuyerRefundPreviousAttributes.line_item_allocations variant 1.[] fields 1.variant_id variant 1

anyOf variant 1: ID of the catalog variant the line was sold from..

- Value shape: string. ID of the catalog variant the line was sold from. ID of the catalog variant the line was sold from. Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. 

### BuyerRefundPreviousAttributes.line_item_allocations variant 1.[] fields 1.variant_id variant 2

anyOf variant 2.

- Value shape: null. ID of the catalog variant the line was sold from. 

### BuyerRefundPreviousAttributes.order

The order summary for `order_id`. Buyer refund endpoints take no `expand` parameter, so it is never expanded here. `null` when the refund is not expanded.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `closed_at` | Conditional | string or null | When the order last closed. Present exactly when status is closed. `closed_at`: [declared alternatives](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder-variant-1closed_at). |
| `closed_reason` | Conditional | string or null | Why the order closed. Present exactly when status is closed. Flint returns other for an unrecognized reason and may add new values. Values: `"invoice_voided"`, `"paid"`, `"closed_by_merchant"`, `"checkout_expired"`, `"written_off"`, `"superseded"`, `"return_resolution_canceled"`, `"other"`. `closed_reason`: [declared alternatives](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributesclosed_reason). |
| `created_at` | Conditional | string or null | When the order was created, in RFC3339 format. `created_at`: [declared alternatives](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder-variant-1created_at). |
| `customer_id` | Conditional | string or null | Customer associated with the order, when one is set. `customer_id`: [declared alternatives](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder-variant-1customer_id). |
| `deferred_promotions` | Conditional | Array of [DeferredPromotionPreviousAttributes](../models/DeferredPromotionPreviousAttributes.md#deferredpromotionpreviousattributes) or null | Promotions accepted at subscription signup. They attach when the subscription is provisioned and first discount its first charged cycle. They do not discount this order and are separate from discounts and order totals. Always present; empty when no promotions are deferred. `deferred_promotions`: [declared alternatives](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributesdeferred_promotions). |
| `fulfillment_status` | Conditional | string or null | Aggregate progress across the order's fulfillment quantities. Values: `"not_fulfilled"`, `"partially_fulfilled"`, `"fulfilled"`, `"canceled"`, `"not_applicable"`, `"closed"`. `fulfillment_status`: [declared alternatives](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributesfulfillment_status). |
| `governing_delivery_selection_id` | Conditional | string or null | ID of the delivery selection that governs this order. Null when no selection governs the order. `governing_delivery_selection_id`: [declared alternatives](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder-variant-1governing_delivery_selection_id). |
| `order_id` | Conditional | string or null | Stable identifier of the expanded order. `order_id`: [declared alternatives](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder-variant-1order_id). |
| `order_number` | Conditional | string or null | Human-readable order number for receipts and merchant reference. `order_number`: [declared alternatives](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributesorder_number). |
| `paid_at` | Conditional | string or null | When the current paid state began, including a final capture that releases the remaining balance. A reversal that reopens the order clears this timestamp. `null` when `payment_status` isn't `paid`, including an order whose balance was written off without being paid. `paid_at`: [declared alternatives](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder-variant-1paid_at). |
| `payment_intent_ids` | Conditional | Array of string or null | Payment intents associated with the order. `payment_intent_ids`: [declared alternatives](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder-variant-1payment_intent_ids). |
| `payment_status` | Conditional | string or null | Collection progress. Reversing a recorded invoice payment can move this back to unpaid or partially_paid. An invoice write-off also completes collection without receiving the written-off amount. Values: `"unpaid"`, `"partially_paid"`, `"paid"`. `payment_status`: [declared alternatives](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributespayment_status). |
| `pricing_amounts` | Conditional | [PricingAmountsPreviousAttributes](../models/PricingAmountsPreviousAttributes.md#pricingamountspreviousattributes) or null | Order totals before accounting for collected payments and refunds. |
| `refund_status` | Conditional | string or null | Refund progress for collected money. Refunds with `reason` `payment_returned` return money the order never received and don't count. Values: `"none"`, `"partially_refunded"`, `"refunded"`. `refund_status`: [declared alternatives](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributesrefund_status). |
| `settlement_amounts` | Conditional | [OrderSettlementAmountsPreviousAttributes](../models/OrderSettlementAmountsPreviousAttributes.md#ordersettlementamountspreviousattributes) or null | Payments, refunds, credits, and amounts still owed for the order. |
| `status` | Conditional | string or null | Whether the order still accepts changes and new payments. An order closed as paid reopens if reversing a recorded invoice payment leaves an outstanding order balance. Refunds, fulfillment, disputes, returns, and metadata or note edits continue on a closed order. Values: `"open"`, `"closed"`. `status`: [declared alternatives](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributesstatus). |
| `updated_at` | Conditional | string or null | When the order was last updated, in RFC3339 format. `updated_at`: [declared alternatives](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder-variant-1updated_at). |

### BuyerRefundPreviousAttributes.order variant 1

anyOf BuyerExpandedOrderSummaryPreviousAttributes.

- Optional: `closed_at`, `closed_reason`, `created_at`, `customer_id`, `deferred_promotions`, `fulfillment_status`, `governing_delivery_selection_id`, `order_id`, `order_number`, `paid_at`, `payment_intent_ids`, `payment_status`, `pricing_amounts`, `refund_status`, `settlement_amounts`, `status`, `updated_at`.

### BuyerRefundPreviousAttributes.order variant 2

anyOf variant 2.

- Undeclared: `closed_at`, `closed_reason`, `created_at`, `customer_id`, `deferred_promotions`, `fulfillment_status`, `governing_delivery_selection_id`, `order_id`, `order_number`, `paid_at`, `payment_intent_ids`, `payment_status`, `pricing_amounts`, `refund_status`, `settlement_amounts`, `status`, `updated_at`.
- Value shape: null. The order summary for `order_id`. Buyer refund endpoints take no `expand` parameter, so it is never expanded here. `null` when the refund is not expanded. 

### BuyerRefundPreviousAttributes.order variant 1.closed_at

Declared alternatives: [BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.closed_at](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder-variant-1closed_at).

### BuyerRefundPreviousAttributes.order variant 1.closed_reason

Declared alternatives: [ExpandedOrderSummaryPreviousAttributes.closed_reason](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributesclosed_reason).

### BuyerRefundPreviousAttributes.order variant 1.created_at

Declared alternatives: [BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.created_at](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder-variant-1created_at).

### BuyerRefundPreviousAttributes.order variant 1.customer_id

Declared alternatives: [BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.customer_id](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder-variant-1customer_id).

### BuyerRefundPreviousAttributes.order variant 1.deferred_promotions

Declared alternatives: [ExpandedOrderSummaryPreviousAttributes.deferred_promotions](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributesdeferred_promotions).

### BuyerRefundPreviousAttributes.order variant 1.fulfillment_status

Declared alternatives: [ExpandedOrderSummaryPreviousAttributes.fulfillment_status](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributesfulfillment_status).

### BuyerRefundPreviousAttributes.order variant 1.governing_delivery_selection_id

Declared alternatives: [BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.governing_delivery_selection_id](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder-variant-1governing_delivery_selection_id).

### BuyerRefundPreviousAttributes.order variant 1.order_id

Declared alternatives: [BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.order_id](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder-variant-1order_id).

### BuyerRefundPreviousAttributes.order variant 1.order_number

Declared alternatives: [ExpandedOrderSummaryPreviousAttributes.order_number](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributesorder_number).

### BuyerRefundPreviousAttributes.order variant 1.paid_at

Declared alternatives: [BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.paid_at](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder-variant-1paid_at).

### BuyerRefundPreviousAttributes.order variant 1.payment_intent_ids

Declared alternatives: [BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.payment_intent_ids](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder-variant-1payment_intent_ids).

### BuyerRefundPreviousAttributes.order variant 1.payment_status

Declared alternatives: [ExpandedOrderSummaryPreviousAttributes.payment_status](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributespayment_status).

### BuyerRefundPreviousAttributes.order variant 1.refund_status

Declared alternatives: [ExpandedOrderSummaryPreviousAttributes.refund_status](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributesrefund_status).

### BuyerRefundPreviousAttributes.order variant 1.status

Declared alternatives: [ExpandedOrderSummaryPreviousAttributes.status](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributesstatus).

### BuyerRefundPreviousAttributes.order variant 1.updated_at

Declared alternatives: [BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.updated_at](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder-variant-1updated_at).

### BuyerRefundPreviousAttributes.order_edit_id

### BuyerRefundPreviousAttributes.order_edit_id variant 1

anyOf variant 1: ID of the paid-order edit that created this refund. Present only on refunds issued through an order edit..

- Value shape: string. ID of the paid-order edit that created this refund. Present only on refunds issued through an order edit. 

### BuyerRefundPreviousAttributes.order_edit_id variant 2

anyOf variant 2.

- Value shape: null. ID of the paid-order edit that created this refund. Present only on refunds issued through an order edit. 

### BuyerRefundPreviousAttributes.order_id

### BuyerRefundPreviousAttributes.order_id variant 1

anyOf variant 1: ID of the order the refund was issued against. For a refund with `reason` `payment_returned`, the order the returned payment was for; the order never received this money. Absent for a refund of a payment that has no order, and for a standalone gift card refund..

- Value shape: string. ID of the order the refund was issued against. For a refund with `reason` `payment_returned`, the order the returned payment was for; the order never received this money. Absent for a refund of a payment that has no order, and for a standalone gift card refund. 

### BuyerRefundPreviousAttributes.order_id variant 2

anyOf variant 2.

- Value shape: null. ID of the order the refund was issued against. For a refund with `reason` `payment_returned`, the order the returned payment was for; the order never received this money. Absent for a refund of a payment that has no order, and for a standalone gift card refund. 

### BuyerRefundPreviousAttributes.payment_intent

Declared alternatives: [BuyerPaymentRefundPreviousAttributes.payment_intent](../models/BuyerPaymentRefundPreviousAttributes.md#buyerpaymentrefundpreviousattributespayment_intent).

### BuyerRefundPreviousAttributes.payment_intent_id

### BuyerRefundPreviousAttributes.payment_intent_id variant 1

anyOf variant 1: ID of the payment the refund was issued against, when it targeted one payment. `payment_refunds` lists every payment it returned money through..

- Value shape: string. ID of the payment the refund was issued against, when it targeted one payment. `payment_refunds` lists every payment it returned money through. 

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

### BuyerRefundPreviousAttributes.payment_refunds variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Amount refunded through this payment, including `refunded_tip_money`. |
| `failure_reason` | Optional | string or null | Why a refund failed or a payment refund was canceled. Failed and canceled amounts become refundable again, except a refund with reason payment_returned that failed with payment_disputed: the buyer won a dispute on the charge, so nothing is left to refund. A payment_returned refund that failed with refund_abandoned can't be retried through Flint either: the money is in your balance. Flint hasn't repaid the buyer. Repay them another way if you haven't already. Fix the cause, then create a new refund with a new idempotency key. Unknown provider values are returned as refund_failed. Values: [11 declared values](BuyerPaymentRefundInput.md#buyerpaymentrefundinput-failure_reason-values). `failure_reason`: [declared alternatives](../models/BuyerPaymentRefundPreviousAttributes.md#buyerpaymentrefundpreviousattributesfailure_reason). |
| `payment_intent` | Optional | [BuyerExpandedPaymentIntentSummaryPreviousAttributes](../models/BuyerExpandedPaymentIntentSummaryPreviousAttributes.md#buyerexpandedpaymentintentsummarypreviousattributes) or null | The payment summary for `payment_intent_id`. Buyer refund endpoints take no `expand` parameter, so it is never expanded here. `null` when the refund is not expanded. `payment_intent`: [declared alternatives](../models/BuyerPaymentRefundPreviousAttributes.md#buyerpaymentrefundpreviousattributespayment_intent). |
| `payment_intent_id` | Optional | string or null | The payment this part of the refund returned money through. `payment_intent_id`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributespayment_refunds-variant-1-fields-1payment_intent_id). |
| `refunded_platform_fee_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The platform fee this payment refund returns to you, present when the payment carries a collected platform fee: its share when the refund was created with refund_platform_fee true, 0 when the partner app keeps the fee. Flint returns it once this payment refund succeeds. If this payment refund then fails, Flint doesn't take the returned fee back. See Platform fees. |
| `refunded_tip_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Share of `amount_money` that refunds tips. |
| `status` | Optional | string or null | Status of this payment refund or tender allocation. A succeeded refund can still fail after a bank rejection. Parent status transitions send refund.succeeded, refund.partially_succeeded, or refund.failed; other public changes send refund.updated. Values: `"pending"`, `"requires_action"`, `"succeeded"`, `"failed"`, `"canceled"`. `status`: [declared alternatives](../models/BuyerPaymentRefundPreviousAttributes.md#buyerpaymentrefundpreviousattributesstatus). |
| `succeeded_at` | Optional | string or null | When this payment refund's `status` first became `succeeded`, as Flint recorded the processor's outcome. It keeps that time if the part fails and later succeeds again. The refund's `tender_allocations` entry for the same payment has the same value. Present only while `status` is `succeeded`. `succeeded_at`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributespayment_refunds-variant-1-fields-1succeeded_at). |

### BuyerRefundPreviousAttributes.payment_refunds variant 1.[] fields 1.failure_reason

Declared alternatives: [BuyerPaymentRefundPreviousAttributes.failure_reason](../models/BuyerPaymentRefundPreviousAttributes.md#buyerpaymentrefundpreviousattributesfailure_reason).

### BuyerRefundPreviousAttributes.payment_refunds variant 1.[] fields 1.payment_intent

Declared alternatives: [BuyerPaymentRefundPreviousAttributes.payment_intent](../models/BuyerPaymentRefundPreviousAttributes.md#buyerpaymentrefundpreviousattributespayment_intent).

### BuyerRefundPreviousAttributes.payment_refunds variant 1.[] fields 1.payment_intent_id

### BuyerRefundPreviousAttributes.payment_refunds variant 1.[] fields 1.payment_intent_id variant 1

anyOf variant 1: The payment this part of the refund returned money through..

- Value shape: string. The payment this part of the refund returned money through. The payment this part of the refund returned money through. Example: `"pi_01KEZF7C00G8H9D509YEV22P7R"`. 

### BuyerRefundPreviousAttributes.payment_refunds variant 1.[] fields 1.payment_intent_id variant 2

anyOf variant 2.

- Value shape: null. The payment this part of the refund returned money through. 

### BuyerRefundPreviousAttributes.payment_refunds variant 1.[] fields 1.status

Declared alternatives: [BuyerPaymentRefundPreviousAttributes.status](../models/BuyerPaymentRefundPreviousAttributes.md#buyerpaymentrefundpreviousattributesstatus).

### BuyerRefundPreviousAttributes.payment_refunds variant 1.[] fields 1.succeeded_at

### BuyerRefundPreviousAttributes.payment_refunds variant 1.[] fields 1.succeeded_at variant 1

anyOf variant 1: When this payment refund's `status` first became `succeeded`, as Flint recorded the processor's outcome. It keeps that time if the part fails and later succeeds again. The refund's `tender_allocations` entry for the same payment has the same value. Present only while `status` is `succeeded`..

- Value shape: string. When this payment refund's `status` first became `succeeded`, as Flint recorded the processor's outcome. It keeps that time if the part fails and later succeeds again. The refund's `tender_allocations` entry for the same payment has the same value. Present only while `status` is `succeeded`. When this payment refund's `status` first became `succeeded`, as Flint recorded the processor's outcome. It keeps that time if the part fails and later succeeds again. The refund's `tender_allocations` entry for the same payment has the same value. Present only while `status` is `succeeded`. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### BuyerRefundPreviousAttributes.payment_refunds variant 1.[] fields 1.succeeded_at variant 2

anyOf variant 2.

- Value shape: null. When this payment refund's `status` first became `succeeded`, as Flint recorded the processor's outcome. It keeps that time if the part fails and later succeeds again. The refund's `tender_allocations` entry for the same payment has the same value. Present only while `status` is `succeeded`. 

### BuyerRefundPreviousAttributes.pending_reason

### BuyerRefundPreviousAttributes.pending_reason variant 1

anyOf variant 1: Why a pending refund is waiting. `null` when `status` isn't `pending`, or when the refund is on its way without review..

- Value shape: string. Why a pending refund is waiting. `null` when `status` isn't `pending`, or when the refund is on its way without review. Values: `"manual_review"`, `null`.

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

- Value shape: string. `payment_returned` when Flint refunded a payment it couldn't apply to the order. `null` when the store made the refund, because a store's reasons aren't shared with buyers. Values: `"payment_returned"`, `null`.

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

- Value shape: string. Unique identifier for this refund, prefixed `ref_`. 

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

- Value shape: string. When the merchant reports that the money was returned outside Flint. Present only when processed_by is merchant. When the merchant reports that the money was returned outside Flint. Present only when processed_by is merchant. Format: `date-time`. 

### BuyerRefundPreviousAttributes.refunded_at variant 2

anyOf variant 2.

- Value shape: null. When the merchant reports that the money was returned outside Flint. Present only when processed_by is merchant. 

### BuyerRefundPreviousAttributes.return_id

### BuyerRefundPreviousAttributes.return_id variant 1

anyOf variant 1: ID of the return this refund paid out. Present only on refunds issued by a return..

- Value shape: string. ID of the return this refund paid out. Present only on refunds issued by a return. 

### BuyerRefundPreviousAttributes.return_id variant 2

anyOf variant 2.

- Value shape: null. ID of the return this refund paid out. Present only on refunds issued by a return. 

### BuyerRefundPreviousAttributes.return_resolution_id

### BuyerRefundPreviousAttributes.return_resolution_id variant 1

anyOf variant 1: ID of the return resolution that issued this refund. Present only on refunds issued by a return..

- Value shape: string. ID of the return resolution that issued this refund. Present only on refunds issued by a return. 

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

- Value shape: string. When `status` first became `succeeded`. For a refund with `payment_refunds` or `tender_allocations`, it's when the last of them first succeeded, so it equals the latest `succeeded_at` among them. For a refund Flint processes, it's when Flint recorded the outcome; with `processed_by` `merchant`, it equals `refunded_at`. Present only while `status` is `succeeded`; absent for every other status, including `partially_succeeded` and a refund that failed after it succeeded. A refund that succeeds again shows its first success time. When `status` first became `succeeded`. For a refund with `payment_refunds` or `tender_allocations`, it's when the last of them first succeeded, so it equals the latest `succeeded_at` among them. For a refund Flint processes, it's when Flint recorded the outcome; with `processed_by` `merchant`, it equals `refunded_at`. Present only while `status` is `succeeded`; absent for every other status, including `partially_succeeded` and a refund that failed after it succeeded. A refund that succeeds again shows its first success time. Format: `date-time`. 

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

### BuyerRefundPreviousAttributes.tax_breakdown_refunds variant 1.[] fields 1

Field definitions: [RefundLineItemAllocationPreviousAttributes.tax_breakdown_refunds variant 1.[] fields 1](../models/RefundLineItemAllocationPreviousAttributes.md#refundlineitemallocationpreviousattributestax_breakdown_refunds-variant-1-fields-1).

### BuyerRefundPreviousAttributes.tender_allocations

### BuyerRefundPreviousAttributes.tender_allocations variant 1

anyOf variant 1: Every tender the refund drew from, payment or gift card, with its amount, tip share, status, and destination..

- Value shape: Array of [RefundTenderAllocationPreviousAttributes](../models/RefundTenderAllocationPreviousAttributes.md#refundtenderallocationpreviousattributes). Every tender the refund drew from, payment or gift card, with its amount, tip share, status, and destination. 

### BuyerRefundPreviousAttributes.tender_allocations variant 2

anyOf variant 2.

- Value shape: null. Every tender the refund drew from, payment or gift card, with its amount, tip share, status, and destination. 

### BuyerRefundPreviousAttributes.tender_allocations variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Amount of the refund that went to this tender, including `refunded_tip_money`. |
| `destination` | Optional | string or null | Where this allocation is refunded. original returns value to the tender that paid; new_gift_card issues new Flint gift cards. Payment intent store credit requires a succeeded USD card, Apple Pay, Google Pay, or Link payment that belongs to an order, with no open chargeback. Affirm, ACH debit, other payment options, non-USD payments, and payments without an order return INVALID_REQUEST with a NOT_ALLOWED detail. Payment chargebacks use the existing dispute refusal. Gift card redemption destinations are unaffected by the payment restrictions. Values: `"original"`, `"new_gift_card"`. `destination`: [declared alternatives](../models/RefundTenderAllocationPreviousAttributes.md#refundtenderallocationpreviousattributesdestination). |
| `destination_cards` | Optional | Array of [RefundGiftCardDestinationPreviousAttributes](../models/RefundGiftCardDestinationPreviousAttributes.md#refundgiftcarddestinationpreviousattributes) or null | The gift cards that received this allocation's value, with the amount each received. Absent when the value went back to a payment. `destination_cards`: [declared alternatives](../models/RefundTenderAllocationPreviousAttributes.md#refundtenderallocationpreviousattributesdestination_cards). |
| `failure_reason` | Optional | string or null | Why a refund failed or a payment refund was canceled. Failed and canceled amounts become refundable again, except a refund with reason payment_returned that failed with payment_disputed: the buyer won a dispute on the charge, so nothing is left to refund. A payment_returned refund that failed with refund_abandoned can't be retried through Flint either: the money is in your balance. Flint hasn't repaid the buyer. Repay them another way if you haven't already. Fix the cause, then create a new refund with a new idempotency key. Unknown provider values are returned as refund_failed. Values: [11 declared values](BuyerPaymentRefundInput.md#buyerpaymentrefundinput-failure_reason-values). `failure_reason`: [declared alternatives](../models/BuyerPaymentRefundPreviousAttributes.md#buyerpaymentrefundpreviousattributesfailure_reason). |
| `gift_card_id` | Optional | string or null | The gift card whose redemption this allocation refunded. Present when `tender_type` is `gift_card_redemption`. `gift_card_id`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributestender_allocations-variant-1-fields-1gift_card_id). |
| `gift_card_redemption_id` | Optional | string or null | The gift card redemption this allocation refunded. Present when `tender_type` is `gift_card_redemption`. `gift_card_redemption_id`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributestender_allocations-variant-1-fields-1gift_card_redemption_id). |
| `payment_intent_id` | Optional | string or null | The payment this allocation refunded. Present when `tender_type` is `payment_intent`. `payment_intent_id`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributestender_allocations-variant-1-fields-1payment_intent_id). |
| `refund_allocation_id` | Optional | string or null | Unique identifier for this tender allocation, prefixed `rta_`. `refund_allocation_id`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributestender_allocations-variant-1-fields-1refund_allocation_id). |
| `refunded_tip_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Share of this allocation's `amount_money` that refunds tips. |
| `status` | Optional | string or null | Status of this payment refund or tender allocation. A succeeded refund can still fail after a bank rejection. Parent status transitions send refund.succeeded, refund.partially_succeeded, or refund.failed; other public changes send refund.updated. Values: `"pending"`, `"requires_action"`, `"succeeded"`, `"failed"`, `"canceled"`. `status`: [declared alternatives](../models/BuyerPaymentRefundPreviousAttributes.md#buyerpaymentrefundpreviousattributesstatus). |
| `succeeded_at` | Optional | string or null | When this tender's `status` first became `succeeded`. Gift card credit and store credit (`destination` `new_gift_card`) succeed when the refund is created. A `payment_intent` tender with `destination` `original` has the same value as its `payment_refunds` entry; store credit has no `payment_refunds` entry. Tax reports use it as `refund_succeeded_at` on the rows for this tender. Present only while `status` is `succeeded`. `succeeded_at`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributestender_allocations-variant-1-fields-1succeeded_at). |
| `tender_type` | Optional | string or null | Which kind of original tender this allocation refunded. Values: `"payment_intent"`, `"gift_card_redemption"`. `tender_type`: [declared alternatives](../models/RefundTenderAllocationPreviousAttributes.md#refundtenderallocationpreviousattributestender_type). |

### BuyerRefundPreviousAttributes.tender_allocations variant 1.[] fields 1.destination

Declared alternatives: [RefundTenderAllocationPreviousAttributes.destination](../models/RefundTenderAllocationPreviousAttributes.md#refundtenderallocationpreviousattributesdestination).

### BuyerRefundPreviousAttributes.tender_allocations variant 1.[] fields 1.destination_cards

Declared alternatives: [RefundTenderAllocationPreviousAttributes.destination_cards](../models/RefundTenderAllocationPreviousAttributes.md#refundtenderallocationpreviousattributesdestination_cards).

### BuyerRefundPreviousAttributes.tender_allocations variant 1.[] fields 1.failure_reason

Declared alternatives: [BuyerPaymentRefundPreviousAttributes.failure_reason](../models/BuyerPaymentRefundPreviousAttributes.md#buyerpaymentrefundpreviousattributesfailure_reason).

### BuyerRefundPreviousAttributes.tender_allocations variant 1.[] fields 1.gift_card_id

### BuyerRefundPreviousAttributes.tender_allocations variant 1.[] fields 1.gift_card_id variant 1

anyOf variant 1: The gift card whose redemption this allocation refunded. Present when `tender_type` is `gift_card_redemption`..

- Value shape: string. The gift card whose redemption this allocation refunded. Present when `tender_type` is `gift_card_redemption`. The gift card whose redemption this allocation refunded. Present when `tender_type` is `gift_card_redemption`. Example: `"gc_01KEZF7C00RT1618WYBM1Y94CG"`. 

### BuyerRefundPreviousAttributes.tender_allocations variant 1.[] fields 1.gift_card_id variant 2

anyOf variant 2.

- Value shape: null. The gift card whose redemption this allocation refunded. Present when `tender_type` is `gift_card_redemption`. 

### BuyerRefundPreviousAttributes.tender_allocations variant 1.[] fields 1.gift_card_redemption_id

### BuyerRefundPreviousAttributes.tender_allocations variant 1.[] fields 1.gift_card_redemption_id variant 1

anyOf variant 1: The gift card redemption this allocation refunded. Present when `tender_type` is `gift_card_redemption`..

- Value shape: string. The gift card redemption this allocation refunded. Present when `tender_type` is `gift_card_redemption`. The gift card redemption this allocation refunded. Present when `tender_type` is `gift_card_redemption`. Example: `"gcr_01KEZF7C002YD2G2J734RRZTWT"`. 

### BuyerRefundPreviousAttributes.tender_allocations variant 1.[] fields 1.gift_card_redemption_id variant 2

anyOf variant 2.

- Value shape: null. The gift card redemption this allocation refunded. Present when `tender_type` is `gift_card_redemption`. 

### BuyerRefundPreviousAttributes.tender_allocations variant 1.[] fields 1.payment_intent_id

### BuyerRefundPreviousAttributes.tender_allocations variant 1.[] fields 1.payment_intent_id variant 1

anyOf variant 1: The payment this allocation refunded. Present when `tender_type` is `payment_intent`..

- Value shape: string. The payment this allocation refunded. Present when `tender_type` is `payment_intent`. The payment this allocation refunded. Present when `tender_type` is `payment_intent`. Example: `"pi_01KEZF7C00G8H9D509YEV22P7R"`. 

### BuyerRefundPreviousAttributes.tender_allocations variant 1.[] fields 1.payment_intent_id variant 2

anyOf variant 2.

- Value shape: null. The payment this allocation refunded. Present when `tender_type` is `payment_intent`. 

### BuyerRefundPreviousAttributes.tender_allocations variant 1.[] fields 1.refund_allocation_id

### BuyerRefundPreviousAttributes.tender_allocations variant 1.[] fields 1.refund_allocation_id variant 1

anyOf variant 1: Unique identifier for this tender allocation, prefixed `rta_`..

- Value shape: string. Unique identifier for this tender allocation, prefixed `rta_`. Unique identifier for this tender allocation, prefixed `rta_`. Example: `"rta_01KEZF7C00KQJTFKK6C47RSMB8"`. 

### BuyerRefundPreviousAttributes.tender_allocations variant 1.[] fields 1.refund_allocation_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this tender allocation, prefixed `rta_`. 

### BuyerRefundPreviousAttributes.tender_allocations variant 1.[] fields 1.status

Declared alternatives: [BuyerPaymentRefundPreviousAttributes.status](../models/BuyerPaymentRefundPreviousAttributes.md#buyerpaymentrefundpreviousattributesstatus).

### BuyerRefundPreviousAttributes.tender_allocations variant 1.[] fields 1.succeeded_at

### BuyerRefundPreviousAttributes.tender_allocations variant 1.[] fields 1.succeeded_at variant 1

anyOf variant 1: When this tender's `status` first became `succeeded`. Gift card credit and store credit (`destination` `new_gift_card`) succeed when the refund is created. A `payment_intent` tender with `destination` `original` has the same value as its `payment_refunds` entry; store credit has no `payment_refunds` entry. Tax reports use it as `refund_succeeded_at` on the rows for this tender. Present only while `status` is `succeeded`..

- Value shape: string. When this tender's `status` first became `succeeded`. Gift card credit and store credit (`destination` `new_gift_card`) succeed when the refund is created. A `payment_intent` tender with `destination` `original` has the same value as its `payment_refunds` entry; store credit has no `payment_refunds` entry. Tax reports use it as `refund_succeeded_at` on the rows for this tender. Present only while `status` is `succeeded`. When this tender's `status` first became `succeeded`. Gift card credit and store credit (`destination` `new_gift_card`) succeed when the refund is created. A `payment_intent` tender with `destination` `original` has the same value as its `payment_refunds` entry; store credit has no `payment_refunds` entry. Tax reports use it as `refund_succeeded_at` on the rows for this tender. Present only while `status` is `succeeded`. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### BuyerRefundPreviousAttributes.tender_allocations variant 1.[] fields 1.succeeded_at variant 2

anyOf variant 2.

- Value shape: null. When this tender's `status` first became `succeeded`. Gift card credit and store credit (`destination` `new_gift_card`) succeed when the refund is created. A `payment_intent` tender with `destination` `original` has the same value as its `payment_refunds` entry; store credit has no `payment_refunds` entry. Tax reports use it as `refund_succeeded_at` on the rows for this tender. Present only while `status` is `succeeded`. 

### BuyerRefundPreviousAttributes.tender_allocations variant 1.[] fields 1.tender_type

Declared alternatives: [RefundTenderAllocationPreviousAttributes.tender_type](../models/RefundTenderAllocationPreviousAttributes.md#refundtenderallocationpreviousattributestender_type).

### BuyerRefundPreviousAttributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### BuyerRefundPreviousAttributes.version

Declared alternatives: [PaymentSplitCanceledEvent.data fields 1.previous_attributes.version](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdata-fields-1previous_attributesversion).

