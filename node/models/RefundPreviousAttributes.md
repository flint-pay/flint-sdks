[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RefundPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Total refunded across all tenders, including `refunded_tip_money`. `amount_money`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesamount_money). |
| `charge_allocations` | Optional | Array of [RefundChargeAllocationPreviousAttributes](../models/RefundChargeAllocationPreviousAttributes.md#refundchargeallocationpreviousattributes) or null | Money returned for each order charge, including subtotal, discount, and tax, combined across payment refunds. `charge_allocations`: [declared alternatives](../models/RefundFailedInstalledMerchantsEvent.md#refundfailedinstalledmerchantseventdataprevious_attributescharge_allocations). |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at). |
| `credit_adjustment_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Money paid for Return resolution credits, included in amount_money. It carries no merchandise, shipping, tax, or tip allocation. Zero for refunds without credits. `credit_adjustment_money`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributescredit_adjustment_money). |
| `credit_note_id` | Optional | string or null | ID of the credit note this refund paid out. Present only on refunds issued through a credit note. `credit_note_id`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributescredit_note_id). |
| `customer` | Optional | [ExpandedCustomerSummaryPreviousAttributes](../models/ExpandedCustomerSummaryPreviousAttributes.md#expandedcustomersummarypreviousattributes) or null | Present only when `expand` includes `customer`; `null` when expanded and there is no related customer. |
| `customer_id` | Optional | string or null | ID of the customer on the refunded order or payment. Absent when neither has one. `customer_id`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributescustomer_id). |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. `external_reference_id`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventdataprevious_attributesexternal_reference_id). |
| `failure_reason` | Optional | string or null | Why a refund failed or a payment refund was canceled. Failed and canceled amounts become refundable again, except a refund with reason payment_returned that failed with payment_disputed: the buyer won a dispute on the charge, so nothing is left to refund. A payment_returned refund that failed with refund_abandoned can't be retried through Flint either: the money is in your balance. Flint hasn't repaid the buyer. Repay them another way if you haven't already. Fix the cause, then create a new refund with a new idempotency key. Unknown provider values are returned as refund_failed. Values: [11 declared values](BuyerPaymentRefund.md#buyerpaymentrefund-failure_reason-values). `failure_reason`: [declared alternatives](../models/BuyerPaymentRefundPreviousAttributes.md#buyerpaymentrefundpreviousattributesfailure_reason). |
| `idempotency_key` | Optional | string or null | The caller's Idempotency-Key when this refund was created, including refunds created by issuing a credit note. Use GET /v1/refunds?idempotency_key= to recover a lost response. `idempotency_key`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesidempotency_key). |
| `initiated_by` | Optional | string or null | Who decided to make this refund: `merchant` for you or your integration, `flint` for a refund Flint made on its own to return a payment it couldn't accept. Unlike a Return's `initiated_by`, it doesn't say which credential asked. Read-only. Values: `"merchant"`, `"flint"`. `initiated_by`: [declared alternatives](../models/RefundFailedInstalledMerchantsEvent.md#refundfailedinstalledmerchantseventdataprevious_attributesinitiated_by). |
| `invoice_id` | Optional | string or null | ID of the invoice whose credit note this refund paid out. Present only on refunds issued through a credit note. `invoice_id`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesinvoice_id). |
| `line_item_allocations` | Optional | Array of [RefundLineItemAllocationPreviousAttributes](../models/RefundLineItemAllocationPreviousAttributes.md#refundlineitemallocationpreviousattributes) or null | How the refund applied to each order line item it covered, with quantity, tax, and adjustments. `line_item_allocations`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesline_item_allocations). |
| `merchant_id` | Optional | string or null | ID of the merchant this resource belongs to. `merchant_id`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributesmerchant_id). |
| `metadata` | Optional | [MetadataMap](../models/MetadataMap.md#metadatamap) or null | Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. `metadata`: [declared alternatives](../models/CheckoutSessionClosedInstalledMerchantsEvent.md#checkoutsessionclosedinstalledmerchantseventdataprevious_attributesmetadata). |
| `order` | Optional | [ExpandedOrderSummaryPreviousAttributes](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributes) or null | Present only when `expand` includes `order`; `null` when expanded and there is no related order. |
| `order_edit_id` | Optional | string or null | ID of the paid-order edit that created this refund. Present only on refunds issued through an order edit. `order_edit_id`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesorder_edit_id). |
| `order_id` | Optional | string or null | ID of the order the refund was issued against. For a refund with `reason` `payment_returned`, the order the returned payment was for; the order never received this money. Absent for a refund of a payment that has no order, and for a standalone gift card refund. `order_id`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesorder_id). |
| `payment_intent` | Optional | [ExpandedPaymentIntentSummaryPreviousAttributes](../models/ExpandedPaymentIntentSummaryPreviousAttributes.md#expandedpaymentintentsummarypreviousattributes) or null | Present only when `expand` includes `payment_intent`; `null` when expanded and there is no related payment intent. |
| `payment_intent_id` | Optional | string or null | ID of the payment the refund was issued against, when it targeted one payment. `payment_refunds` lists every payment it returned money through. `payment_intent_id`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributespayment_intent_id). |
| `payment_refunds` | Optional | Array of [PaymentRefundPreviousAttributes](../models/PaymentRefundPreviousAttributes.md#paymentrefundpreviousattributes) or null | The part of the refund returned through each payment, with its own status. Absent when the refund was all gift card credit or store credit. `payment_refunds`: [declared alternatives](../models/RefundFailedInstalledMerchantsEvent.md#refundfailedinstalledmerchantseventdataprevious_attributespayment_refunds). |
| `payment_review_id` | Optional | string or null | ID of the payment review whose decline created this refund. Present only on refunds issued for a declined review. `payment_review_id`: [declared alternatives](../models/RefundFailedInstalledMerchantsEvent.md#refundfailedinstalledmerchantseventdataprevious_attributespayment_review_id). |
| `pending_reason` | Optional | string or null | Why a pending refund is waiting. `null` when `status` isn't `pending`, or when the refund is on its way without review. Values: `"manual_review"`, `null`. `pending_reason`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributespending_reason). |
| `processed_by` | Optional | string or null | Who moved or is moving the money for this refund. Flint processes refunds through a processor or a gift card; merchant means the merchant returned the money outside Flint and recorded it here. Existing refunds are processed by Flint. Values: `"flint"`, `"merchant"`. `processed_by`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesprocessed_by). |
| `reason` | Optional | string or null | Why the refund was issued. It never changes how the money moves. The buyer's refund receipt shows it only for `requested_by_customer`, `duplicate`, `defective_product`, `wrong_item_shipped`, `never_received`, `not_as_described`, `arrived_too_late`, `accidental_order`, and `out_of_stock`. Only Flint sets `payment_returned`, and it can't be sent in requests. `null` when no reason was recorded. Values: [15 declared values](Refund.md#refund-reason-values). `reason`: [declared alternatives](../models/RefundFailedInstalledMerchantsEvent.md#refundfailedinstalledmerchantseventdataprevious_attributesreason). |
| `reason_message` | Optional | string or null | Note explaining the refund, up to 1,024 characters. `reason_message`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesreason_message). |
| `refund_id` | Optional | string or null | Unique identifier for this refund, prefixed `ref_`. `refund_id`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesrefund_id). |
| `refund_platform_fee` | Optional | boolean or null | Whether the request asked to return the platform fee on the payments this refund refunds (refund_platform_fee). Each payment refund's refunded_platform_fee_money is what it returns. `refund_platform_fee`: [declared alternatives](../models/RefundFailedInstalledMerchantsEvent.md#refundfailedinstalledmerchantseventdataprevious_attributesrefund_platform_fee). |
| `refund_reference` | Optional | string or null | The merchant's opaque check, wire, or other reference for money returned outside Flint, preserved exactly. Present only when processed_by is merchant and a reference was supplied. external_reference_id is the merchant's own refund ID. `refund_reference`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesrefund_reference). |
| `refunded_at` | Optional | string or null | When the merchant reports that the money was returned outside Flint. Present only when processed_by is merchant. `refunded_at`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesrefunded_at). |
| `refunded_tip_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Share of `amount_money` that refunds tips. `refunded_tip_money`: [declared alternatives](../models/BuyerPaymentRefundPreviousAttributes.md#buyerpaymentrefundpreviousattributesrefunded_tip_money). |
| `return_id` | Optional | string or null | ID of the return this refund paid out. Present only on refunds issued by a return. `return_id`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesreturn_id). |
| `return_resolution_id` | Optional | string or null | ID of the return resolution that issued this refund. Present only on refunds issued by a return. `return_resolution_id`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesreturn_resolution_id). |
| `status` | Optional | string or null | Summary of payment_refunds and tender_allocations. Only failed is final: succeeded and partially_succeeded can still change when a bank rejects a refund after accepting it. A refund Flint made to return a payment it couldn't accept goes from succeeded back to pending, with pending_reason manual_review, when a bank reverses it. Follow refund.created when it is accepted, refund.succeeded, refund.partially_succeeded, or refund.failed when its outcome changes, and refund.updated for other changes. Values: `"pending"`, `"succeeded"`, `"partially_succeeded"`, `"failed"`. `status`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesstatus). |
| `succeeded_at` | Optional | string or null | When `status` first became `succeeded`. For a refund with `payment_refunds` or `tender_allocations`, it's when the last of them first succeeded, so it equals the latest `succeeded_at` among them. For a refund Flint processes, it's when Flint recorded the outcome; with `processed_by` `merchant`, it equals `refunded_at`. Present only while `status` is `succeeded`; absent for every other status, including `partially_succeeded` and a refund that failed after it succeeded. A refund that succeeds again shows its first success time. `succeeded_at`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributessucceeded_at). |
| `tax_breakdown_refunds` | Optional | Array of [RefundTaxBreakdownRefundPreviousAttributes](../models/RefundTaxBreakdownRefundPreviousAttributes.md#refundtaxbreakdownrefundpreviousattributes) or null | Tax reversed on order-level charges and flat taxes, one entry per tax breakdown. Tax reversed on line items is in `line_item_allocations[].tax_breakdown_refunds`. `tax_breakdown_refunds`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributestax_breakdown_refunds). |
| `tender_allocations` | Optional | Array of [RefundTenderAllocationPreviousAttributes](../models/RefundTenderAllocationPreviousAttributes.md#refundtenderallocationpreviousattributes) or null | Every tender the refund drew from, payment or gift card, with its amount, tip share, status, and destination. `tender_allocations`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributestender_allocations). |
| `unissued_gift_card_recoveries` | Optional | Array of [RefundUnissuedGiftCardRecoveryPreviousAttributes](../models/RefundUnissuedGiftCardRecoveryPreviousAttributes.md#refundunissuedgiftcardrecoverypreviousattributes) or null | Cash returned after an unissued gift card purchase refund failed. Return it through a new refund against payment_intent_id and order_line_item_id. It does not issue another card. Source remaining and pending amounts describe the entire original settlement allocation; repeated entries for that source are not additive. `unissued_gift_card_recoveries`: [declared alternatives](../models/RefundFailedInstalledMerchantsEvent.md#refundfailedinstalledmerchantseventdataprevious_attributesunissued_gift_card_recoveries). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at). |
| `version` | Optional | integer or null | Persisted version of this resource's owned state. Expanded resources and external observations can change independently. `version`: [declared alternatives](../models/BuyerExpandedPaymentIntentSummaryPreviousAttributes.md#buyerexpandedpaymentintentsummarypreviousattributesversion). |

### RefundPreviousAttributes.amount_money

Declared alternatives: [BuyerRefundPreviousAttributes.amount_money](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesamount_money).

### RefundPreviousAttributes.charge_allocations

Declared alternatives: [RefundFailedInstalledMerchantsEvent.data.previous_attributes.charge_allocations](../models/RefundFailedInstalledMerchantsEvent.md#refundfailedinstalledmerchantseventdataprevious_attributescharge_allocations).

### RefundPreviousAttributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at).

### RefundPreviousAttributes.credit_adjustment_money

Declared alternatives: [BuyerRefundPreviousAttributes.credit_adjustment_money](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributescredit_adjustment_money).

### RefundPreviousAttributes.credit_note_id

Declared alternatives: [BuyerRefundPreviousAttributes.credit_note_id](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributescredit_note_id).

### RefundPreviousAttributes.customer_id

Declared alternatives: [BuyerRefundPreviousAttributes.customer_id](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributescustomer_id).

### RefundPreviousAttributes.external_reference_id

Declared alternatives: [BundleArchivedInstalledMerchantsEvent.data.previous_attributes.external_reference_id](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventdataprevious_attributesexternal_reference_id).

### RefundPreviousAttributes.failure_reason

Declared alternatives: [BuyerPaymentRefundPreviousAttributes.failure_reason](../models/BuyerPaymentRefundPreviousAttributes.md#buyerpaymentrefundpreviousattributesfailure_reason).

### RefundPreviousAttributes.idempotency_key

Declared alternatives: [BuyerRefundPreviousAttributes.idempotency_key](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesidempotency_key).

### RefundPreviousAttributes.initiated_by

Declared alternatives: [RefundFailedInstalledMerchantsEvent.data.previous_attributes.initiated_by](../models/RefundFailedInstalledMerchantsEvent.md#refundfailedinstalledmerchantseventdataprevious_attributesinitiated_by).

### RefundPreviousAttributes.invoice_id

Declared alternatives: [BuyerRefundPreviousAttributes.invoice_id](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesinvoice_id).

### RefundPreviousAttributes.line_item_allocations

Declared alternatives: [BuyerRefundPreviousAttributes.line_item_allocations](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesline_item_allocations).

### RefundPreviousAttributes.merchant_id

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.merchant_id](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributesmerchant_id).

### RefundPreviousAttributes.metadata

Declared alternatives: [CheckoutSessionClosedInstalledMerchantsEvent.data.previous_attributes.metadata](../models/CheckoutSessionClosedInstalledMerchantsEvent.md#checkoutsessionclosedinstalledmerchantseventdataprevious_attributesmetadata).

### RefundPreviousAttributes.order_edit_id

Declared alternatives: [BuyerRefundPreviousAttributes.order_edit_id](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesorder_edit_id).

### RefundPreviousAttributes.order_id

Declared alternatives: [BuyerRefundPreviousAttributes.order_id](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesorder_id).

### RefundPreviousAttributes.payment_intent_id

Declared alternatives: [BuyerRefundPreviousAttributes.payment_intent_id](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributespayment_intent_id).

### RefundPreviousAttributes.payment_refunds

Declared alternatives: [RefundFailedInstalledMerchantsEvent.data.previous_attributes.payment_refunds](../models/RefundFailedInstalledMerchantsEvent.md#refundfailedinstalledmerchantseventdataprevious_attributespayment_refunds).

### RefundPreviousAttributes.payment_review_id

Declared alternatives: [RefundFailedInstalledMerchantsEvent.data.previous_attributes.payment_review_id](../models/RefundFailedInstalledMerchantsEvent.md#refundfailedinstalledmerchantseventdataprevious_attributespayment_review_id).

### RefundPreviousAttributes.pending_reason

Declared alternatives: [BuyerRefundPreviousAttributes.pending_reason](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributespending_reason).

### RefundPreviousAttributes.processed_by

Declared alternatives: [BuyerRefundPreviousAttributes.processed_by](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesprocessed_by).

### RefundPreviousAttributes.reason

Declared alternatives: [RefundFailedInstalledMerchantsEvent.data.previous_attributes.reason](../models/RefundFailedInstalledMerchantsEvent.md#refundfailedinstalledmerchantseventdataprevious_attributesreason).

### RefundPreviousAttributes.reason_message

Declared alternatives: [BuyerRefundPreviousAttributes.reason_message](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesreason_message).

### RefundPreviousAttributes.refund_id

Declared alternatives: [BuyerRefundPreviousAttributes.refund_id](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesrefund_id).

### RefundPreviousAttributes.refund_platform_fee

Declared alternatives: [RefundFailedInstalledMerchantsEvent.data.previous_attributes.refund_platform_fee](../models/RefundFailedInstalledMerchantsEvent.md#refundfailedinstalledmerchantseventdataprevious_attributesrefund_platform_fee).

### RefundPreviousAttributes.refund_reference

Declared alternatives: [BuyerRefundPreviousAttributes.refund_reference](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesrefund_reference).

### RefundPreviousAttributes.refunded_at

Declared alternatives: [BuyerRefundPreviousAttributes.refunded_at](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesrefunded_at).

### RefundPreviousAttributes.refunded_tip_money

Declared alternatives: [BuyerPaymentRefundPreviousAttributes.refunded_tip_money](../models/BuyerPaymentRefundPreviousAttributes.md#buyerpaymentrefundpreviousattributesrefunded_tip_money).

### RefundPreviousAttributes.return_id

Declared alternatives: [BuyerRefundPreviousAttributes.return_id](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesreturn_id).

### RefundPreviousAttributes.return_resolution_id

Declared alternatives: [BuyerRefundPreviousAttributes.return_resolution_id](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesreturn_resolution_id).

### RefundPreviousAttributes.status

Declared alternatives: [BuyerRefundPreviousAttributes.status](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesstatus).

### RefundPreviousAttributes.succeeded_at

Declared alternatives: [BuyerRefundPreviousAttributes.succeeded_at](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributessucceeded_at).

### RefundPreviousAttributes.tax_breakdown_refunds

Declared alternatives: [BuyerRefundPreviousAttributes.tax_breakdown_refunds](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributestax_breakdown_refunds).

### RefundPreviousAttributes.tender_allocations

Declared alternatives: [BuyerRefundPreviousAttributes.tender_allocations](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributestender_allocations).

### RefundPreviousAttributes.unissued_gift_card_recoveries

Declared alternatives: [RefundFailedInstalledMerchantsEvent.data.previous_attributes.unissued_gift_card_recoveries](../models/RefundFailedInstalledMerchantsEvent.md#refundfailedinstalledmerchantseventdataprevious_attributesunissued_gift_card_recoveries).

### RefundPreviousAttributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at).

### RefundPreviousAttributes.version

Declared alternatives: [BuyerExpandedPaymentIntentSummaryPreviousAttributes.version](../models/BuyerExpandedPaymentIntentSummaryPreviousAttributes.md#buyerexpandedpaymentintentsummarypreviousattributesversion).

