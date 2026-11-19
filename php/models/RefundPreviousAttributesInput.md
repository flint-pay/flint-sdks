[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RefundPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Total refunded across all tenders, including `refunded_tip_money`. |
| `charge_allocations` | Optional | Array of [RefundChargeAllocationPreviousAttributesInput](../models/RefundChargeAllocationPreviousAttributesInput.md#refundchargeallocationpreviousattributesinput) or null | Money returned for each order charge, including subtotal, discount, and tax, combined across payment refunds. `charge_allocations`: [declared alternatives](../models/RefundFailedInstalledMerchantsEventInput.md#refundfailedinstalledmerchantseventinputdataprevious_attributescharge_allocations). |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |
| `credit_adjustment_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Money paid for Return resolution credits, included in amount_money. It carries no merchandise, shipping, tax, or tip allocation. Zero for refunds without credits. |
| `credit_note_id` | Optional | string or null | ID of the credit note this refund paid out. Present only on refunds issued through a credit note. `credit_note_id`: [declared alternatives](../models/BuyerRefundPreviousAttributesInput.md#buyerrefundpreviousattributesinputcredit_note_id). |
| `customer` | Optional | [ExpandedCustomerSummaryPreviousAttributesInput](../models/ExpandedCustomerSummaryPreviousAttributesInput.md#expandedcustomersummarypreviousattributesinput) or null | Present only when `expand` includes `customer`; `null` when expanded and there is no related customer. |
| `customer_id` | Optional | string or null | ID of the customer on the refunded order or payment. Absent when neither has one. `customer_id`: [declared alternatives](../models/BuyerRefundPreviousAttributesInput.md#buyerrefundpreviousattributesinputcustomer_id). |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. `external_reference_id`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputdataprevious_attributesexternal_reference_id). |
| `failure_reason` | Optional | string or null | Why a refund failed or a payment refund was canceled. Failed and canceled amounts become refundable again, except a refund with reason payment_returned that failed with payment_disputed: the buyer won a dispute on the charge, so nothing is left to refund. A payment_returned refund that failed with refund_abandoned can't be retried through Flint either: the money is in your balance. Flint hasn't repaid the buyer. Repay them another way if you haven't already. Fix the cause, then create a new refund with a new idempotency key. Unknown provider values are returned as refund_failed. Values: [11 declared values](BuyerPaymentRefundInput.md#buyerpaymentrefundinput-failure_reason-values). `failure_reason`: [declared alternatives](../models/BuyerPaymentRefundPreviousAttributesInput.md#buyerpaymentrefundpreviousattributesinputfailure_reason). |
| `idempotency_key` | Optional | string or null | The Idempotency-Key of the request that created this resource. `null` when that request sent no key, Flint created the resource, the reader isn't the caller that created it (another app install, a buyer, or the merchant reading an app's or buyer's record), or the caller that created an older record is unknown. Filter its list with `idempotency_key` to find it. Recorded payloads, including replayed responses and webhook events, can return `null`. To find a key that a replay returns as `null`, read the resource. `idempotency_key`: [declared alternatives](../models/CreditNoteAllocationReversedInstalledMerchantsEventInput.md#creditnoteallocationreversedinstalledmerchantseventinputdataprevious_attributesidempotency_key). |
| `initiated_by` | Optional | string or null | Who decided to make this refund: `merchant` for you or your integration, `flint` for a refund Flint made on its own to return a payment it couldn't accept. Unlike a Return's `initiated_by`, it doesn't say which credential asked. Read-only. Values: `"merchant"`, `"flint"`. `initiated_by`: [declared alternatives](../models/RefundFailedInstalledMerchantsEventInput.md#refundfailedinstalledmerchantseventinputdataprevious_attributesinitiated_by). |
| `invoice_id` | Optional | string or null | ID of the invoice whose credit note this refund paid out. Present only on refunds issued through a credit note. `invoice_id`: [declared alternatives](../models/BuyerRefundPreviousAttributesInput.md#buyerrefundpreviousattributesinputinvoice_id). |
| `line_item_allocations` | Optional | Array of [RefundLineItemAllocationPreviousAttributesInput](../models/RefundLineItemAllocationPreviousAttributesInput.md#refundlineitemallocationpreviousattributesinput) or null | How the refund applied to each order line item it covered, with quantity, tax, and adjustments. `line_item_allocations`: [declared alternatives](../models/BuyerRefundPreviousAttributesInput.md#buyerrefundpreviousattributesinputline_item_allocations). |
| `merchant_id` | Optional | string or null | ID of the merchant this resource belongs to. `merchant_id`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributesmerchant_id). |
| `metadata` | Optional | [MetadataMapPreviousAttributesInput](../models/MetadataMapPreviousAttributesInput.md#metadatamappreviousattributesinput) or null | Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. |
| `order` | Optional | [ExpandedOrderSummaryPreviousAttributesInput](../models/ExpandedOrderSummaryPreviousAttributesInput.md#expandedordersummarypreviousattributesinput) or null | Present only when `expand` includes `order`; `null` when expanded and there is no related order. |
| `order_edit_id` | Optional | string or null | ID of the paid-order edit that created this refund. Present only on refunds issued through an order edit. `order_edit_id`: [declared alternatives](../models/BuyerRefundPreviousAttributesInput.md#buyerrefundpreviousattributesinputorder_edit_id). |
| `order_id` | Optional | string or null | ID of the order the refund was issued against. For a refund with `reason` `payment_returned`, the order the returned payment was for; the order never received this money. Absent for a refund of a payment that has no order, and for a standalone gift card refund. `order_id`: [declared alternatives](../models/BuyerRefundPreviousAttributesInput.md#buyerrefundpreviousattributesinputorder_id). |
| `payment_intent` | Optional | [ExpandedPaymentIntentSummaryPreviousAttributesInput](../models/ExpandedPaymentIntentSummaryPreviousAttributesInput.md#expandedpaymentintentsummarypreviousattributesinput) or null | Present only when `expand` includes `payment_intent`; `null` when expanded and there is no related payment intent. |
| `payment_intent_id` | Optional | string or null | ID of the payment the refund was issued against, when it targeted one payment. `payment_refunds` lists every payment it returned money through. `payment_intent_id`: [declared alternatives](../models/BuyerRefundPreviousAttributesInput.md#buyerrefundpreviousattributesinputpayment_intent_id). |
| `payment_refunds` | Optional | Array of [PaymentRefundPreviousAttributesInput](../models/PaymentRefundPreviousAttributesInput.md#paymentrefundpreviousattributesinput) or null | The part of the refund returned through each payment, with its own status. Absent when the refund was all gift card credit or store credit. `payment_refunds`: [declared alternatives](../models/RefundFailedInstalledMerchantsEventInput.md#refundfailedinstalledmerchantseventinputdataprevious_attributespayment_refunds). |
| `payment_review_id` | Optional | string or null | ID of the payment review whose decline created this refund. Present only on refunds issued for a declined review. `payment_review_id`: [declared alternatives](../models/RefundFailedInstalledMerchantsEventInput.md#refundfailedinstalledmerchantseventinputdataprevious_attributespayment_review_id). |
| `pending_reason` | Optional | string or null | Why a pending refund is waiting. `null` when `status` isn't `pending`, or when the refund is on its way without review. Values: `"manual_review"`, `null`. `pending_reason`: [declared alternatives](../models/BuyerRefundPreviousAttributesInput.md#buyerrefundpreviousattributesinputpending_reason). |
| `processed_by` | Optional | string or null | Who moved or is moving the money for this refund. Flint processes refunds through a processor or a gift card; merchant means the merchant returned the money outside Flint and recorded it here. Existing refunds are processed by Flint. Values: `"flint"`, `"merchant"`. `processed_by`: [declared alternatives](../models/BuyerRefundPreviousAttributesInput.md#buyerrefundpreviousattributesinputprocessed_by). |
| `reason` | Optional | string or null | Why the refund was issued. It never changes how the money moves. The buyer's refund receipt shows it only for `requested_by_customer`, `duplicate`, `defective_product`, `wrong_item_shipped`, `never_received`, `not_as_described`, `arrived_too_late`, `accidental_order`, and `out_of_stock`. Only Flint sets `payment_returned`, and it can't be sent in requests. `null` when no reason was recorded. Values: [15 declared values](RefundInput.md#refundinput-reason-values). `reason`: [declared alternatives](../models/RefundFailedInstalledMerchantsEventInput.md#refundfailedinstalledmerchantseventinputdataprevious_attributesreason). |
| `reason_message` | Optional | string or null | Note explaining the refund, up to 1,024 characters. `reason_message`: [declared alternatives](../models/BuyerRefundPreviousAttributesInput.md#buyerrefundpreviousattributesinputreason_message). |
| `refund_id` | Optional | string or null | Unique identifier for this refund, prefixed `ref_`. `refund_id`: [declared alternatives](../models/BuyerRefundPreviousAttributesInput.md#buyerrefundpreviousattributesinputrefund_id). |
| `refund_platform_fee` | Optional | boolean or null | Whether the request asked to return the platform fee on the payments this refund refunds (refund_platform_fee). Each payment refund's refunded_platform_fee_money is what it returns. `refund_platform_fee`: [declared alternatives](../models/RefundFailedInstalledMerchantsEventInput.md#refundfailedinstalledmerchantseventinputdataprevious_attributesrefund_platform_fee). |
| `refund_reference` | Optional | string or null | The merchant's opaque check, wire, or other reference for money returned outside Flint, preserved exactly. Present only when processed_by is merchant and a reference was supplied. external_reference_id is the merchant's own refund ID. `refund_reference`: [declared alternatives](../models/BuyerRefundPreviousAttributesInput.md#buyerrefundpreviousattributesinputrefund_reference). |
| `refunded_at` | Optional | string or null | When the merchant reports that the money was returned outside Flint. Present only when processed_by is merchant. `refunded_at`: [declared alternatives](../models/BuyerRefundPreviousAttributesInput.md#buyerrefundpreviousattributesinputrefunded_at). |
| `refunded_tip_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Share of `amount_money` that refunds tips. |
| `return_id` | Optional | string or null | ID of the return this refund paid out. Present only on refunds issued by a return. `return_id`: [declared alternatives](../models/BuyerRefundPreviousAttributesInput.md#buyerrefundpreviousattributesinputreturn_id). |
| `return_resolution_id` | Optional | string or null | ID of the return resolution that issued this refund. Present only on refunds issued by a return. `return_resolution_id`: [declared alternatives](../models/BuyerRefundPreviousAttributesInput.md#buyerrefundpreviousattributesinputreturn_resolution_id). |
| `status` | Optional | string or null | Summary of payment_refunds and tender_allocations. Only failed is final: succeeded and partially_succeeded can still change when a bank rejects a refund after accepting it. A refund Flint made to return a payment it couldn't accept goes from succeeded back to pending, with pending_reason manual_review, when a bank reverses it. Follow refund.created when it is accepted, refund.succeeded, refund.partially_succeeded, or refund.failed when its outcome changes, and refund.updated for other changes. Values: `"pending"`, `"succeeded"`, `"partially_succeeded"`, `"failed"`. `status`: [declared alternatives](../models/BuyerRefundPreviousAttributesInput.md#buyerrefundpreviousattributesinputstatus). |
| `succeeded_at` | Optional | string or null | When `status` first became `succeeded`. For a refund with `payment_refunds` or `tender_allocations`, it's when the last of them first succeeded, so it equals the latest `succeeded_at` among them. For a refund Flint processes, it's when Flint recorded the outcome; with `processed_by` `merchant`, it equals `refunded_at`. Present only while `status` is `succeeded`; absent for every other status, including `partially_succeeded` and a refund that failed after it succeeded. A refund that succeeds again shows its first success time. `succeeded_at`: [declared alternatives](../models/BuyerRefundPreviousAttributesInput.md#buyerrefundpreviousattributesinputsucceeded_at). |
| `tax_breakdown_refunds` | Optional | Array of [RefundTaxBreakdownRefundPreviousAttributesInput](../models/RefundTaxBreakdownRefundPreviousAttributesInput.md#refundtaxbreakdownrefundpreviousattributesinput) or null | Tax reversed on order-level charges and flat taxes, one entry per tax breakdown. Tax reversed on line items is in `line_item_allocations[].tax_breakdown_refunds`. `tax_breakdown_refunds`: [declared alternatives](../models/BuyerRefundPreviousAttributesInput.md#buyerrefundpreviousattributesinputtax_breakdown_refunds). |
| `tender_allocations` | Optional | Array of [RefundTenderAllocationPreviousAttributesInput](../models/RefundTenderAllocationPreviousAttributesInput.md#refundtenderallocationpreviousattributesinput) or null | Every tender the refund drew from, payment or gift card, with its amount, tip share, status, and destination. `tender_allocations`: [declared alternatives](../models/BuyerRefundPreviousAttributesInput.md#buyerrefundpreviousattributesinputtender_allocations). |
| `unissued_gift_card_recoveries` | Optional | Array of [RefundUnissuedGiftCardRecoveryPreviousAttributesInput](../models/RefundUnissuedGiftCardRecoveryPreviousAttributesInput.md#refundunissuedgiftcardrecoverypreviousattributesinput) or null | Cash returned after an unissued gift card purchase refund failed. Return it through a new refund against payment_intent_id and order_line_item_id. It does not issue another card. Source remaining and pending amounts describe the entire original settlement allocation; repeated entries for that source are not additive. `unissued_gift_card_recoveries`: [declared alternatives](../models/RefundFailedInstalledMerchantsEventInput.md#refundfailedinstalledmerchantseventinputdataprevious_attributesunissued_gift_card_recoveries). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |
| `version` | Optional | integer or null | Persisted version of this resource's owned state. Expanded resources and external observations can change independently. `version`: [declared alternatives](../models/BuyerExpandedPaymentIntentSummaryPreviousAttributesInput.md#buyerexpandedpaymentintentsummarypreviousattributesinputversion). |

### RefundPreviousAttributesInput.charge_allocations

Declared alternatives: [RefundFailedInstalledMerchantsEventInput.data.previous_attributes.charge_allocations](../models/RefundFailedInstalledMerchantsEventInput.md#refundfailedinstalledmerchantseventinputdataprevious_attributescharge_allocations).

### RefundPreviousAttributesInput.created_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### RefundPreviousAttributesInput.credit_note_id

Declared alternatives: [BuyerRefundPreviousAttributesInput.credit_note_id](../models/BuyerRefundPreviousAttributesInput.md#buyerrefundpreviousattributesinputcredit_note_id).

### RefundPreviousAttributesInput.customer_id

Declared alternatives: [BuyerRefundPreviousAttributesInput.customer_id](../models/BuyerRefundPreviousAttributesInput.md#buyerrefundpreviousattributesinputcustomer_id).

### RefundPreviousAttributesInput.external_reference_id

Declared alternatives: [BundleArchivedInstalledMerchantsEventInput.data.previous_attributes.external_reference_id](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputdataprevious_attributesexternal_reference_id).

### RefundPreviousAttributesInput.failure_reason

Declared alternatives: [BuyerPaymentRefundPreviousAttributesInput.failure_reason](../models/BuyerPaymentRefundPreviousAttributesInput.md#buyerpaymentrefundpreviousattributesinputfailure_reason).

### RefundPreviousAttributesInput.idempotency_key

Declared alternatives: [CreditNoteAllocationReversedInstalledMerchantsEventInput.data.previous_attributes.idempotency_key](../models/CreditNoteAllocationReversedInstalledMerchantsEventInput.md#creditnoteallocationreversedinstalledmerchantseventinputdataprevious_attributesidempotency_key).

### RefundPreviousAttributesInput.initiated_by

Declared alternatives: [RefundFailedInstalledMerchantsEventInput.data.previous_attributes.initiated_by](../models/RefundFailedInstalledMerchantsEventInput.md#refundfailedinstalledmerchantseventinputdataprevious_attributesinitiated_by).

### RefundPreviousAttributesInput.invoice_id

Declared alternatives: [BuyerRefundPreviousAttributesInput.invoice_id](../models/BuyerRefundPreviousAttributesInput.md#buyerrefundpreviousattributesinputinvoice_id).

### RefundPreviousAttributesInput.line_item_allocations

Declared alternatives: [BuyerRefundPreviousAttributesInput.line_item_allocations](../models/BuyerRefundPreviousAttributesInput.md#buyerrefundpreviousattributesinputline_item_allocations).

### RefundPreviousAttributesInput.merchant_id

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.merchant_id](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributesmerchant_id).

### RefundPreviousAttributesInput.order_edit_id

Declared alternatives: [BuyerRefundPreviousAttributesInput.order_edit_id](../models/BuyerRefundPreviousAttributesInput.md#buyerrefundpreviousattributesinputorder_edit_id).

### RefundPreviousAttributesInput.order_id

Declared alternatives: [BuyerRefundPreviousAttributesInput.order_id](../models/BuyerRefundPreviousAttributesInput.md#buyerrefundpreviousattributesinputorder_id).

### RefundPreviousAttributesInput.payment_intent_id

Declared alternatives: [BuyerRefundPreviousAttributesInput.payment_intent_id](../models/BuyerRefundPreviousAttributesInput.md#buyerrefundpreviousattributesinputpayment_intent_id).

### RefundPreviousAttributesInput.payment_refunds

Declared alternatives: [RefundFailedInstalledMerchantsEventInput.data.previous_attributes.payment_refunds](../models/RefundFailedInstalledMerchantsEventInput.md#refundfailedinstalledmerchantseventinputdataprevious_attributespayment_refunds).

### RefundPreviousAttributesInput.payment_review_id

Declared alternatives: [RefundFailedInstalledMerchantsEventInput.data.previous_attributes.payment_review_id](../models/RefundFailedInstalledMerchantsEventInput.md#refundfailedinstalledmerchantseventinputdataprevious_attributespayment_review_id).

### RefundPreviousAttributesInput.pending_reason

Declared alternatives: [BuyerRefundPreviousAttributesInput.pending_reason](../models/BuyerRefundPreviousAttributesInput.md#buyerrefundpreviousattributesinputpending_reason).

### RefundPreviousAttributesInput.processed_by

Declared alternatives: [BuyerRefundPreviousAttributesInput.processed_by](../models/BuyerRefundPreviousAttributesInput.md#buyerrefundpreviousattributesinputprocessed_by).

### RefundPreviousAttributesInput.reason

Declared alternatives: [RefundFailedInstalledMerchantsEventInput.data.previous_attributes.reason](../models/RefundFailedInstalledMerchantsEventInput.md#refundfailedinstalledmerchantseventinputdataprevious_attributesreason).

### RefundPreviousAttributesInput.reason_message

Declared alternatives: [BuyerRefundPreviousAttributesInput.reason_message](../models/BuyerRefundPreviousAttributesInput.md#buyerrefundpreviousattributesinputreason_message).

### RefundPreviousAttributesInput.refund_id

Declared alternatives: [BuyerRefundPreviousAttributesInput.refund_id](../models/BuyerRefundPreviousAttributesInput.md#buyerrefundpreviousattributesinputrefund_id).

### RefundPreviousAttributesInput.refund_platform_fee

Declared alternatives: [RefundFailedInstalledMerchantsEventInput.data.previous_attributes.refund_platform_fee](../models/RefundFailedInstalledMerchantsEventInput.md#refundfailedinstalledmerchantseventinputdataprevious_attributesrefund_platform_fee).

### RefundPreviousAttributesInput.refund_reference

Declared alternatives: [BuyerRefundPreviousAttributesInput.refund_reference](../models/BuyerRefundPreviousAttributesInput.md#buyerrefundpreviousattributesinputrefund_reference).

### RefundPreviousAttributesInput.refunded_at

Declared alternatives: [BuyerRefundPreviousAttributesInput.refunded_at](../models/BuyerRefundPreviousAttributesInput.md#buyerrefundpreviousattributesinputrefunded_at).

### RefundPreviousAttributesInput.return_id

Declared alternatives: [BuyerRefundPreviousAttributesInput.return_id](../models/BuyerRefundPreviousAttributesInput.md#buyerrefundpreviousattributesinputreturn_id).

### RefundPreviousAttributesInput.return_resolution_id

Declared alternatives: [BuyerRefundPreviousAttributesInput.return_resolution_id](../models/BuyerRefundPreviousAttributesInput.md#buyerrefundpreviousattributesinputreturn_resolution_id).

### RefundPreviousAttributesInput.status

Declared alternatives: [BuyerRefundPreviousAttributesInput.status](../models/BuyerRefundPreviousAttributesInput.md#buyerrefundpreviousattributesinputstatus).

### RefundPreviousAttributesInput.succeeded_at

Declared alternatives: [BuyerRefundPreviousAttributesInput.succeeded_at](../models/BuyerRefundPreviousAttributesInput.md#buyerrefundpreviousattributesinputsucceeded_at).

### RefundPreviousAttributesInput.tax_breakdown_refunds

Declared alternatives: [BuyerRefundPreviousAttributesInput.tax_breakdown_refunds](../models/BuyerRefundPreviousAttributesInput.md#buyerrefundpreviousattributesinputtax_breakdown_refunds).

### RefundPreviousAttributesInput.tender_allocations

Declared alternatives: [BuyerRefundPreviousAttributesInput.tender_allocations](../models/BuyerRefundPreviousAttributesInput.md#buyerrefundpreviousattributesinputtender_allocations).

### RefundPreviousAttributesInput.unissued_gift_card_recoveries

Declared alternatives: [RefundFailedInstalledMerchantsEventInput.data.previous_attributes.unissued_gift_card_recoveries](../models/RefundFailedInstalledMerchantsEventInput.md#refundfailedinstalledmerchantseventinputdataprevious_attributesunissued_gift_card_recoveries).

### RefundPreviousAttributesInput.updated_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### RefundPreviousAttributesInput.version

Declared alternatives: [BuyerExpandedPaymentIntentSummaryPreviousAttributesInput.version](../models/BuyerExpandedPaymentIntentSummaryPreviousAttributesInput.md#buyerexpandedpaymentintentsummarypreviousattributesinputversion).

