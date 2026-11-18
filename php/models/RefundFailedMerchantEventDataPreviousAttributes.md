[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RefundFailedMerchantEventDataPreviousAttributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Total refunded across all tenders, including `refunded_tip_money`. |
| `charge_allocations` | Optional | Array of [RefundChargeAllocationPreviousAttributes](../models/RefundChargeAllocationPreviousAttributes.md#refundchargeallocationpreviousattributes) or null | Money returned for each order charge, including subtotal, discount, and tax, combined across payment refunds. `charge_allocations`: [declared alternatives](../models/RefundFailedMerchantEventDataPreviousAttributes.md#refundfailedmerchanteventdatapreviousattributescharge_allocations). |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `credit_adjustment_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Money paid for Return resolution credits, included in amount_money. It carries no merchandise, shipping, tax, or tip allocation. Zero for refunds without credits. |
| `credit_note_id` | Optional | string or null | ID of the credit note this refund paid out. Present only on refunds issued through a credit note. `credit_note_id`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributescredit_note_id). |
| `customer` | Optional | [ExpandedCustomerSummaryPreviousAttributes](../models/ExpandedCustomerSummaryPreviousAttributes.md#expandedcustomersummarypreviousattributes) or null | Present only when `expand` includes `customer`; `null` when expanded and there is no related customer. `customer`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributescustomer). |
| `customer_id` | Optional | string or null | ID of the customer on the refunded order or payment. Absent when neither has one. `customer_id`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributescustomer_id). |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. `external_reference_id`: [declared alternatives](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributesexternal_reference_id). |
| `failure_reason` | Optional | string or null | Why a refund failed or a payment refund was canceled. Failed and canceled amounts become refundable again, except a refund with reason payment_returned that failed with payment_disputed: the buyer won a dispute on the charge, so nothing is left to refund. A payment_returned refund that failed with refund_abandoned can't be retried through Flint either: the money is in your balance. Flint hasn't repaid the buyer. Repay them another way if you haven't already. Fix the cause, then create a new refund with a new idempotency key. Unknown provider values are returned as refund_failed. Values: [11 declared values](BuyerPaymentRefundInput.md#buyerpaymentrefundinput-failure_reason-values). `failure_reason`: [declared alternatives](../models/BuyerPaymentRefundPreviousAttributes.md#buyerpaymentrefundpreviousattributesfailure_reason). |
| `idempotency_key` | Optional | string or null | The caller's Idempotency-Key when this refund was created, including refunds created by issuing a credit note. Use GET /v1/refunds?idempotency_key= to recover a lost response. `idempotency_key`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesidempotency_key). |
| `initiated_by` | Optional | string or null | Who decided to make this refund: `merchant` for you or your integration, `flint` for a refund Flint made on its own to return a payment it couldn't accept. Unlike a Return's `initiated_by`, it doesn't say which credential asked. Read-only. Values: `"merchant"`, `"flint"`. `initiated_by`: [declared alternatives](../models/RefundFailedMerchantEventDataPreviousAttributes.md#refundfailedmerchanteventdatapreviousattributesinitiated_by). |
| `invoice_id` | Optional | string or null | ID of the invoice whose credit note this refund paid out. Present only on refunds issued through a credit note. `invoice_id`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesinvoice_id). |
| `line_item_allocations` | Optional | Array of [RefundLineItemAllocationPreviousAttributes](../models/RefundLineItemAllocationPreviousAttributes.md#refundlineitemallocationpreviousattributes) or null | How the refund applied to each order line item it covered, with quantity, tax, and adjustments. `line_item_allocations`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesline_item_allocations). |
| `merchant_id` | Optional | string or null | ID of the merchant this resource belongs to. `merchant_id`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributesmerchant_id). |
| `metadata` | Optional | Map of string or null | Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. `metadata`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesmetadata). |
| `order` | Optional | [ExpandedOrderSummaryPreviousAttributes](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributes) or null | Present only when `expand` includes `order`; `null` when expanded and there is no related order. `order`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesorder). |
| `order_edit_id` | Optional | string or null | ID of the paid-order edit that created this refund. Present only on refunds issued through an order edit. `order_edit_id`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesorder_edit_id). |
| `order_id` | Optional | string or null | ID of the order the refund was issued against. For a refund with `reason` `payment_returned`, the order the returned payment was for; the order never received this money. Absent for a refund of a payment that has no order, and for a standalone gift card refund. `order_id`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesorder_id). |
| `payment_intent` | Optional | [ExpandedPaymentIntentSummaryPreviousAttributes](../models/ExpandedPaymentIntentSummaryPreviousAttributes.md#expandedpaymentintentsummarypreviousattributes) or null | Present only when `expand` includes `payment_intent`; `null` when expanded and there is no related payment intent. `payment_intent`: [declared alternatives](../models/DisputeInquiryClosedMerchantEventDataPreviousAttributes.md#disputeinquiryclosedmerchanteventdatapreviousattributespayment_intent). |
| `payment_intent_id` | Optional | string or null | ID of the payment the refund was issued against, when it targeted one payment. `payment_refunds` lists every payment it returned money through. `payment_intent_id`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributespayment_intent_id). |
| `payment_refunds` | Optional | Array of [PaymentRefundPreviousAttributes](../models/PaymentRefundPreviousAttributes.md#paymentrefundpreviousattributes) or null | The part of the refund returned through each payment, with its own status. Absent when the refund was all gift card credit or store credit. `payment_refunds`: [declared alternatives](../models/RefundFailedMerchantEventDataPreviousAttributes.md#refundfailedmerchanteventdatapreviousattributespayment_refunds). |
| `payment_review_id` | Optional | string or null | ID of the payment review whose decline created this refund. Present only on refunds issued for a declined review. `payment_review_id`: [declared alternatives](../models/RefundFailedMerchantEventDataPreviousAttributes.md#refundfailedmerchanteventdatapreviousattributespayment_review_id). |
| `pending_reason` | Optional | string or null | Why a pending refund is waiting. `null` when `status` isn't `pending`, or when the refund is on its way without review. Values: `"manual_review"`, `null`. `pending_reason`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributespending_reason). |
| `processed_by` | Optional | string or null | Who moved or is moving the money for this refund. Flint processes refunds through a processor or a gift card; merchant means the merchant returned the money outside Flint and recorded it here. Existing refunds are processed by Flint. Values: `"flint"`, `"merchant"`. `processed_by`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesprocessed_by). |
| `reason` | Optional | string or null | Why the refund was issued. It never changes how the money moves. The buyer's refund receipt shows it only for `requested_by_customer`, `duplicate`, `defective_product`, `wrong_item_shipped`, `never_received`, `not_as_described`, `arrived_too_late`, `accidental_order`, and `out_of_stock`. Only Flint sets `payment_returned`, and it can't be sent in requests. `null` when no reason was recorded. Values: [15 declared values](RefundInput.md#refundinput-reason-values). `reason`: [declared alternatives](../models/RefundFailedMerchantEventDataPreviousAttributes.md#refundfailedmerchanteventdatapreviousattributesreason). |
| `reason_message` | Optional | string or null | Note explaining the refund, up to 1,024 characters. `reason_message`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesreason_message). |
| `refund_id` | Optional | string or null | Unique identifier for this refund, prefixed `ref_`. `refund_id`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesrefund_id). |
| `refund_platform_fee` | Optional | boolean or null | Whether the request asked to return the platform fee on the payments this refund refunds (refund_platform_fee). Each payment refund's refunded_platform_fee_money is what it returns. `refund_platform_fee`: [declared alternatives](../models/RefundFailedMerchantEventDataPreviousAttributes.md#refundfailedmerchanteventdatapreviousattributesrefund_platform_fee). |
| `refund_reference` | Optional | string or null | The merchant's opaque check, wire, or other reference for money returned outside Flint, preserved exactly. Present only when processed_by is merchant and a reference was supplied. external_reference_id is the merchant's own refund ID. `refund_reference`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesrefund_reference). |
| `refunded_at` | Optional | string or null | When the merchant reports that the money was returned outside Flint. Present only when processed_by is merchant. `refunded_at`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesrefunded_at). |
| `refunded_tip_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Share of `amount_money` that refunds tips. |
| `return_id` | Optional | string or null | ID of the return this refund paid out. Present only on refunds issued by a return. `return_id`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesreturn_id). |
| `return_resolution_id` | Optional | string or null | ID of the return resolution that issued this refund. Present only on refunds issued by a return. `return_resolution_id`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesreturn_resolution_id). |
| `status` | Optional | string or null | Summary of payment_refunds and tender_allocations. Only failed is final: succeeded and partially_succeeded can still change when a bank rejects a refund after accepting it. A refund Flint made to return a payment it couldn't accept goes from succeeded back to pending, with pending_reason manual_review, when a bank reverses it. Follow refund.created when it is accepted, refund.succeeded, refund.partially_succeeded, or refund.failed when its outcome changes, and refund.updated for other changes. Values: `"pending"`, `"succeeded"`, `"partially_succeeded"`, `"failed"`. `status`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesstatus). |
| `succeeded_at` | Optional | string or null | When `status` first became `succeeded`. For a refund with `payment_refunds` or `tender_allocations`, it's when the last of them first succeeded, so it equals the latest `succeeded_at` among them. For a refund Flint processes, it's when Flint recorded the outcome; with `processed_by` `merchant`, it equals `refunded_at`. Present only while `status` is `succeeded`; absent for every other status, including `partially_succeeded` and a refund that failed after it succeeded. A refund that succeeds again shows its first success time. `succeeded_at`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributessucceeded_at). |
| `tax_breakdown_refunds` | Optional | Array of [RefundTaxBreakdownRefundPreviousAttributes](../models/RefundTaxBreakdownRefundPreviousAttributes.md#refundtaxbreakdownrefundpreviousattributes) or null | Tax reversed on order-level charges and flat taxes, one entry per tax breakdown. Tax reversed on line items is in `line_item_allocations[].tax_breakdown_refunds`. `tax_breakdown_refunds`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributestax_breakdown_refunds). |
| `tender_allocations` | Optional | Array of [RefundTenderAllocationPreviousAttributes](../models/RefundTenderAllocationPreviousAttributes.md#refundtenderallocationpreviousattributes) or null | Every tender the refund drew from, payment or gift card, with its amount, tip share, status, and destination. `tender_allocations`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributestender_allocations). |
| `unissued_gift_card_recoveries` | Optional | Array of [RefundUnissuedGiftCardRecoveryPreviousAttributes](../models/RefundUnissuedGiftCardRecoveryPreviousAttributes.md#refundunissuedgiftcardrecoverypreviousattributes) or null | Cash returned after an unissued gift card purchase refund failed. Return it through a new refund against payment_intent_id and order_line_item_id. It does not issue another card. Source remaining and pending amounts describe the entire original settlement allocation; repeated entries for that source are not additive. `unissued_gift_card_recoveries`: [declared alternatives](../models/RefundFailedMerchantEventDataPreviousAttributes.md#refundfailedmerchanteventdatapreviousattributesunissued_gift_card_recoveries). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `version` | Optional | integer or null | Persisted version of this resource's owned state. Expanded resources and external observations can change independently. `version`: [declared alternatives](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdata-fields-1previous_attributesversion). |

### RefundFailedMerchantEventDataPreviousAttributes.charge_allocations

### RefundFailedMerchantEventDataPreviousAttributes.charge_allocations variant 1

anyOf variant 1: Money returned for each order charge, including subtotal, discount, and tax, combined across payment refunds..

- Value shape: Array of [RefundChargeAllocationPreviousAttributes](../models/RefundChargeAllocationPreviousAttributes.md#refundchargeallocationpreviousattributes). Money returned for each order charge, including subtotal, discount, and tax, combined across payment refunds. 

### RefundFailedMerchantEventDataPreviousAttributes.charge_allocations variant 2

anyOf variant 2.

- Value shape: null. Money returned for each order charge, including subtotal, discount, and tax, combined across payment refunds. 

### RefundFailedMerchantEventDataPreviousAttributes.charge_allocations variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Total returned for this charge, including tax. |
| `discount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Discount allocated to the refunded part of the charge. It does not increase the money returned. |
| `order_charge_id` | Optional | string or null | ID of the refunded order charge. `order_charge_id`: [declared alternatives](../models/RefundFailedMerchantEventDataPreviousAttributes.md#refundfailedmerchanteventdatapreviousattributescharge_allocations-variant-1-fields-1order_charge_id). |
| `order_id` | Optional | string or null | ID of the order containing the refunded charge. `order_id`: [declared alternatives](../models/RefundFailedMerchantEventDataPreviousAttributes.md#refundfailedmerchanteventdatapreviousattributescharge_allocations-variant-1-fields-1order_id). |
| `subtotal_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Charge amount returned excluding tax, after discounts. |
| `tax_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Tax returned for this charge under automatic or external tax. Included in amount_money. |

### RefundFailedMerchantEventDataPreviousAttributes.charge_allocations variant 1.[] fields 1.order_charge_id

### RefundFailedMerchantEventDataPreviousAttributes.charge_allocations variant 1.[] fields 1.order_charge_id variant 1

anyOf variant 1: ID of the refunded order charge..

- Value shape: string. ID of the refunded order charge. ID of the refunded order charge. Example: `"och_01KEZF7C00XX8AKACP0GHKFWWT"`. 

### RefundFailedMerchantEventDataPreviousAttributes.charge_allocations variant 1.[] fields 1.order_charge_id variant 2

anyOf variant 2.

- Value shape: null. ID of the refunded order charge. 

### RefundFailedMerchantEventDataPreviousAttributes.charge_allocations variant 1.[] fields 1.order_id

### RefundFailedMerchantEventDataPreviousAttributes.charge_allocations variant 1.[] fields 1.order_id variant 1

anyOf variant 1: ID of the order containing the refunded charge..

- Value shape: string. ID of the order containing the refunded charge. ID of the order containing the refunded charge. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. 

### RefundFailedMerchantEventDataPreviousAttributes.charge_allocations variant 1.[] fields 1.order_id variant 2

anyOf variant 2.

- Value shape: null. ID of the order containing the refunded charge. 

### RefundFailedMerchantEventDataPreviousAttributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### RefundFailedMerchantEventDataPreviousAttributes.credit_note_id

Declared alternatives: [BuyerRefundPreviousAttributes.credit_note_id](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributescredit_note_id).

### RefundFailedMerchantEventDataPreviousAttributes.customer

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.customer](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributescustomer).

### RefundFailedMerchantEventDataPreviousAttributes.customer_id

Declared alternatives: [BuyerRefundPreviousAttributes.customer_id](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributescustomer_id).

### RefundFailedMerchantEventDataPreviousAttributes.external_reference_id

Declared alternatives: [TaxCalculationCallbackActivatedEvent.data fields 1.previous_attributes.external_reference_id](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributesexternal_reference_id).

### RefundFailedMerchantEventDataPreviousAttributes.failure_reason

Declared alternatives: [BuyerPaymentRefundPreviousAttributes.failure_reason](../models/BuyerPaymentRefundPreviousAttributes.md#buyerpaymentrefundpreviousattributesfailure_reason).

### RefundFailedMerchantEventDataPreviousAttributes.idempotency_key

Declared alternatives: [BuyerRefundPreviousAttributes.idempotency_key](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesidempotency_key).

### RefundFailedMerchantEventDataPreviousAttributes.initiated_by

### RefundFailedMerchantEventDataPreviousAttributes.initiated_by variant 1

anyOf variant 1: Who decided to make this refund: `merchant` for you or your integration, `flint` for a refund Flint made on its own to return a payment it couldn't accept. Unlike a Return's `initiated_by`, it doesn't say which credential asked. Read-only..

- Value shape: string. Who decided to make this refund: `merchant` for you or your integration, `flint` for a refund Flint made on its own to return a payment it couldn't accept. Unlike a Return's `initiated_by`, it doesn't say which credential asked. Read-only. Values: `"merchant"`, `"flint"`.

### RefundFailedMerchantEventDataPreviousAttributes.initiated_by variant 2

anyOf variant 2.

- Value shape: null. Who decided to make this refund: `merchant` for you or your integration, `flint` for a refund Flint made on its own to return a payment it couldn't accept. Unlike a Return's `initiated_by`, it doesn't say which credential asked. Read-only. 

### RefundFailedMerchantEventDataPreviousAttributes.invoice_id

Declared alternatives: [BuyerRefundPreviousAttributes.invoice_id](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesinvoice_id).

### RefundFailedMerchantEventDataPreviousAttributes.line_item_allocations

Declared alternatives: [BuyerRefundPreviousAttributes.line_item_allocations](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesline_item_allocations).

### RefundFailedMerchantEventDataPreviousAttributes.merchant_id

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.merchant_id](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributesmerchant_id).

### RefundFailedMerchantEventDataPreviousAttributes.metadata

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.metadata](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesmetadata).

### RefundFailedMerchantEventDataPreviousAttributes.order

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.order](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesorder).

### RefundFailedMerchantEventDataPreviousAttributes.order_edit_id

Declared alternatives: [BuyerRefundPreviousAttributes.order_edit_id](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesorder_edit_id).

### RefundFailedMerchantEventDataPreviousAttributes.order_id

Declared alternatives: [BuyerRefundPreviousAttributes.order_id](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesorder_id).

### RefundFailedMerchantEventDataPreviousAttributes.payment_intent

Declared alternatives: [DisputeInquiryClosedMerchantEventDataPreviousAttributes.payment_intent](../models/DisputeInquiryClosedMerchantEventDataPreviousAttributes.md#disputeinquiryclosedmerchanteventdatapreviousattributespayment_intent).

### RefundFailedMerchantEventDataPreviousAttributes.payment_intent_id

Declared alternatives: [BuyerRefundPreviousAttributes.payment_intent_id](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributespayment_intent_id).

### RefundFailedMerchantEventDataPreviousAttributes.payment_refunds

### RefundFailedMerchantEventDataPreviousAttributes.payment_refunds variant 1

anyOf variant 1: The part of the refund returned through each payment, with its own status. Absent when the refund was all gift card credit or store credit..

- Value shape: Array of [PaymentRefundPreviousAttributes](../models/PaymentRefundPreviousAttributes.md#paymentrefundpreviousattributes). The part of the refund returned through each payment, with its own status. Absent when the refund was all gift card credit or store credit. 

### RefundFailedMerchantEventDataPreviousAttributes.payment_refunds variant 2

anyOf variant 2.

- Value shape: null. The part of the refund returned through each payment, with its own status. Absent when the refund was all gift card credit or store credit. 

### RefundFailedMerchantEventDataPreviousAttributes.payment_refunds variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Amount refunded through this payment, including `refunded_tip_money`. |
| `failure_reason` | Optional | string or null | Why a refund failed or a payment refund was canceled. Failed and canceled amounts become refundable again, except a refund with reason payment_returned that failed with payment_disputed: the buyer won a dispute on the charge, so nothing is left to refund. A payment_returned refund that failed with refund_abandoned can't be retried through Flint either: the money is in your balance. Flint hasn't repaid the buyer. Repay them another way if you haven't already. Fix the cause, then create a new refund with a new idempotency key. Unknown provider values are returned as refund_failed. Values: [11 declared values](BuyerPaymentRefundInput.md#buyerpaymentrefundinput-failure_reason-values). `failure_reason`: [declared alternatives](../models/BuyerPaymentRefundPreviousAttributes.md#buyerpaymentrefundpreviousattributesfailure_reason). |
| `payment_intent` | Optional | [ExpandedPaymentIntentSummaryPreviousAttributes](../models/ExpandedPaymentIntentSummaryPreviousAttributes.md#expandedpaymentintentsummarypreviousattributes) or null | Present only when `expand` includes `payment_refunds.payment_intent`; `null` when expanded and there is no related payment intent. `payment_intent`: [declared alternatives](../models/PaymentRefundPreviousAttributes.md#paymentrefundpreviousattributespayment_intent). |
| `payment_intent_id` | Optional | string or null | The payment this part of the refund returned money through. `payment_intent_id`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributespayment_refunds-variant-1-fields-1payment_intent_id). |
| `refunded_platform_fee_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The platform fee this payment refund returns to you, present when the payment carries a collected platform fee: its share when the refund was created with refund_platform_fee true, 0 when the partner app keeps the fee. Flint returns it once this payment refund succeeds. If this payment refund then fails, Flint doesn't take the returned fee back. See Platform fees. |
| `refunded_tip_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Share of `amount_money` that refunds tips. |
| `split_reversals` | Optional | Array of [SplitReversalReferencePreviousAttributes](../models/SplitReversalReferencePreviousAttributes.md#splitreversalreferencepreviousattributes) or null | Fixed seller allocations on the payment, each naming its payment split and reversal. Present only when the payment has splits; an empty array means no seller share was allocated. Read PaymentSplit.reversals for status, shortfall, and reinstated amounts. `split_reversals`: [declared alternatives](../models/DisputeInquiryClosedMerchantEventDataPreviousAttributes.md#disputeinquiryclosedmerchanteventdatapreviousattributessplit_reversals). |
| `status` | Optional | string or null | Status of this payment refund or tender allocation. A succeeded refund can still fail after a bank rejection. Parent status transitions send refund.succeeded, refund.partially_succeeded, or refund.failed; other public changes send refund.updated. Values: `"pending"`, `"requires_action"`, `"succeeded"`, `"failed"`, `"canceled"`. `status`: [declared alternatives](../models/BuyerPaymentRefundPreviousAttributes.md#buyerpaymentrefundpreviousattributesstatus). |
| `succeeded_at` | Optional | string or null | When this payment refund's `status` first became `succeeded`, as Flint recorded the processor's outcome. It keeps that time if the part fails and later succeeds again. The refund's `tender_allocations` entry for the same payment has the same value. Present only while `status` is `succeeded`. `succeeded_at`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributespayment_refunds-variant-1-fields-1succeeded_at). |

### RefundFailedMerchantEventDataPreviousAttributes.payment_refunds variant 1.[] fields 1.failure_reason

Declared alternatives: [BuyerPaymentRefundPreviousAttributes.failure_reason](../models/BuyerPaymentRefundPreviousAttributes.md#buyerpaymentrefundpreviousattributesfailure_reason).

### RefundFailedMerchantEventDataPreviousAttributes.payment_refunds variant 1.[] fields 1.payment_intent

Declared alternatives: [PaymentRefundPreviousAttributes.payment_intent](../models/PaymentRefundPreviousAttributes.md#paymentrefundpreviousattributespayment_intent).

### RefundFailedMerchantEventDataPreviousAttributes.payment_refunds variant 1.[] fields 1.payment_intent_id

Declared alternatives: [BuyerRefundPreviousAttributes.payment_refunds variant 1.[] fields 1.payment_intent_id](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributespayment_refunds-variant-1-fields-1payment_intent_id).

### RefundFailedMerchantEventDataPreviousAttributes.payment_refunds variant 1.[] fields 1.split_reversals

Declared alternatives: [DisputeInquiryClosedMerchantEventDataPreviousAttributes.split_reversals](../models/DisputeInquiryClosedMerchantEventDataPreviousAttributes.md#disputeinquiryclosedmerchanteventdatapreviousattributessplit_reversals).

### RefundFailedMerchantEventDataPreviousAttributes.payment_refunds variant 1.[] fields 1.status

Declared alternatives: [BuyerPaymentRefundPreviousAttributes.status](../models/BuyerPaymentRefundPreviousAttributes.md#buyerpaymentrefundpreviousattributesstatus).

### RefundFailedMerchantEventDataPreviousAttributes.payment_refunds variant 1.[] fields 1.succeeded_at

Declared alternatives: [BuyerRefundPreviousAttributes.payment_refunds variant 1.[] fields 1.succeeded_at](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributespayment_refunds-variant-1-fields-1succeeded_at).

### RefundFailedMerchantEventDataPreviousAttributes.payment_review_id

### RefundFailedMerchantEventDataPreviousAttributes.payment_review_id variant 1

anyOf variant 1: ID of the payment review whose decline created this refund. Present only on refunds issued for a declined review..

- Value shape: string. ID of the payment review whose decline created this refund. Present only on refunds issued for a declined review. 

### RefundFailedMerchantEventDataPreviousAttributes.payment_review_id variant 2

anyOf variant 2.

- Value shape: null. ID of the payment review whose decline created this refund. Present only on refunds issued for a declined review. 

### RefundFailedMerchantEventDataPreviousAttributes.pending_reason

Declared alternatives: [BuyerRefundPreviousAttributes.pending_reason](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributespending_reason).

### RefundFailedMerchantEventDataPreviousAttributes.processed_by

Declared alternatives: [BuyerRefundPreviousAttributes.processed_by](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesprocessed_by).

### RefundFailedMerchantEventDataPreviousAttributes.reason

### RefundFailedMerchantEventDataPreviousAttributes.reason variant 1

anyOf variant 1: Why the refund was issued. It never changes how the money moves. The buyer's refund receipt shows it only for `requested_by_customer`, `duplicate`, `defective_product`, `wrong_item_shipped`, `never_received`, `not_as_described`, `arrived_too_late`, `accidental_order`, and `out_of_stock`. Only Flint sets `payment_returned`, and it can't be sent in requests. `null` when no reason was recorded..

- Value shape: string. Why the refund was issued. It never changes how the money moves. The buyer's refund receipt shows it only for `requested_by_customer`, `duplicate`, `defective_product`, `wrong_item_shipped`, `never_received`, `not_as_described`, `arrived_too_late`, `accidental_order`, and `out_of_stock`. Only Flint sets `payment_returned`, and it can't be sent in requests. `null` when no reason was recorded. Values: `"duplicate"`, `"fraudulent"`, `"requested_by_customer"`, `"defective_product"`, `"wrong_item_shipped"`, `"never_received"`, `"not_as_described"`, `"arrived_too_late"`, `"customer_changed_mind"`, `"better_price_found"`, `"accidental_order"`, `"other"`, `"out_of_stock"`, `"payment_returned"`, `null`.

### RefundFailedMerchantEventDataPreviousAttributes.reason variant 2

anyOf variant 2.

- Value shape: null. Why the refund was issued. It never changes how the money moves. The buyer's refund receipt shows it only for `requested_by_customer`, `duplicate`, `defective_product`, `wrong_item_shipped`, `never_received`, `not_as_described`, `arrived_too_late`, `accidental_order`, and `out_of_stock`. Only Flint sets `payment_returned`, and it can't be sent in requests. `null` when no reason was recorded. 

### RefundFailedMerchantEventDataPreviousAttributes.reason_message

Declared alternatives: [BuyerRefundPreviousAttributes.reason_message](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesreason_message).

### RefundFailedMerchantEventDataPreviousAttributes.refund_id

Declared alternatives: [BuyerRefundPreviousAttributes.refund_id](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesrefund_id).

### RefundFailedMerchantEventDataPreviousAttributes.refund_platform_fee

### RefundFailedMerchantEventDataPreviousAttributes.refund_platform_fee variant 1

anyOf variant 1: Whether the request asked to return the platform fee on the payments this refund refunds (refund_platform_fee). Each payment refund's refunded_platform_fee_money is what it returns..

- Value shape: boolean. Whether the request asked to return the platform fee on the payments this refund refunds (refund_platform_fee). Each payment refund's refunded_platform_fee_money is what it returns. 

### RefundFailedMerchantEventDataPreviousAttributes.refund_platform_fee variant 2

anyOf variant 2.

- Value shape: null. Whether the request asked to return the platform fee on the payments this refund refunds (refund_platform_fee). Each payment refund's refunded_platform_fee_money is what it returns. 

### RefundFailedMerchantEventDataPreviousAttributes.refund_reference

Declared alternatives: [BuyerRefundPreviousAttributes.refund_reference](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesrefund_reference).

### RefundFailedMerchantEventDataPreviousAttributes.refunded_at

Declared alternatives: [BuyerRefundPreviousAttributes.refunded_at](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesrefunded_at).

### RefundFailedMerchantEventDataPreviousAttributes.return_id

Declared alternatives: [BuyerRefundPreviousAttributes.return_id](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesreturn_id).

### RefundFailedMerchantEventDataPreviousAttributes.return_resolution_id

Declared alternatives: [BuyerRefundPreviousAttributes.return_resolution_id](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesreturn_resolution_id).

### RefundFailedMerchantEventDataPreviousAttributes.status

Declared alternatives: [BuyerRefundPreviousAttributes.status](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesstatus).

### RefundFailedMerchantEventDataPreviousAttributes.succeeded_at

Declared alternatives: [BuyerRefundPreviousAttributes.succeeded_at](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributessucceeded_at).

### RefundFailedMerchantEventDataPreviousAttributes.tax_breakdown_refunds

Declared alternatives: [BuyerRefundPreviousAttributes.tax_breakdown_refunds](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributestax_breakdown_refunds).

### RefundFailedMerchantEventDataPreviousAttributes.tender_allocations

Declared alternatives: [BuyerRefundPreviousAttributes.tender_allocations](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributestender_allocations).

### RefundFailedMerchantEventDataPreviousAttributes.unissued_gift_card_recoveries

### RefundFailedMerchantEventDataPreviousAttributes.unissued_gift_card_recoveries variant 1

anyOf variant 1: Cash returned after an unissued gift card purchase refund failed. Return it through a new refund against payment_intent_id and order_line_item_id. It does not issue another card. Source remaining and pending amounts describe the entire original settlement allocation; repeated entries for that source are not additive..

- Value shape: Array of [RefundUnissuedGiftCardRecoveryPreviousAttributes](../models/RefundUnissuedGiftCardRecoveryPreviousAttributes.md#refundunissuedgiftcardrecoverypreviousattributes). Cash returned after an unissued gift card purchase refund failed. Return it through a new refund against payment_intent_id and order_line_item_id. It does not issue another card. Source remaining and pending amounts describe the entire original settlement allocation; repeated entries for that source are not additive. 

### RefundFailedMerchantEventDataPreviousAttributes.unissued_gift_card_recoveries variant 2

anyOf variant 2.

- Value shape: null. Cash returned after an unissued gift card purchase refund failed. Return it through a new refund against payment_intent_id and order_line_item_id. It does not issue another card. Source remaining and pending amounts describe the entire original settlement allocation; repeated entries for that source are not additive. 

### RefundFailedMerchantEventDataPreviousAttributes.unissued_gift_card_recoveries variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_id` | Optional | string or null | The order the gift card was sold on. `order_id`: [declared alternatives](../models/RefundFailedMerchantEventDataPreviousAttributes.md#refundfailedmerchanteventdatapreviousattributesunissued_gift_card_recoveries-variant-1-fields-1order_id). |
| `order_line_item_id` | Optional | string or null | The gift card line item the cash paid for. Name it in a `line_items` entry of the new refund. `order_line_item_id`: [declared alternatives](../models/RefundFailedMerchantEventDataPreviousAttributes.md#refundfailedmerchanteventdatapreviousattributesunissued_gift_card_recoveries-variant-1-fields-1order_line_item_id). |
| `payment_intent_id` | Optional | string or null | The payment the returned cash belongs to. Name it in the new refund. `payment_intent_id`: [declared alternatives](../models/RefundFailedMerchantEventDataPreviousAttributes.md#refundfailedmerchanteventdatapreviousattributesunissued_gift_card_recoveries-variant-1-fields-1payment_intent_id). |
| `purchase_refund_allocation_id` | Optional | string or null | ID of the gift card purchase refund allocation whose cash came back after it failed. `purchase_refund_allocation_id`: [declared alternatives](../models/RefundFailedMerchantEventDataPreviousAttributes.md#refundfailedmerchanteventdatapreviousattributesunissued_gift_card_recoveries-variant-1-fields-1purchase_refund_allocation_id). |
| `returned_amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Cash that came back and funded no gift card. |
| `settlement_allocation_id` | Optional | string or null | ID of the settlement allocation this entry draws on. Entries that share one describe the same pool, so their amounts aren't additive. `settlement_allocation_id`: [declared alternatives](../models/RefundFailedMerchantEventDataPreviousAttributes.md#refundfailedmerchanteventdatapreviousattributesunissued_gift_card_recoveries-variant-1-fields-1settlement_allocation_id). |
| `source_pending_amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Cash on the whole settlement allocation that pending refunds hold. |
| `source_remaining_amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Cash left on the whole settlement allocation, including cash that pending refunds hold. Subtract `source_pending_amount_money` to find what you can refund now. |

### RefundFailedMerchantEventDataPreviousAttributes.unissued_gift_card_recoveries variant 1.[] fields 1.order_id

### RefundFailedMerchantEventDataPreviousAttributes.unissued_gift_card_recoveries variant 1.[] fields 1.order_id variant 1

anyOf variant 1: The order the gift card was sold on..

- Value shape: string. The order the gift card was sold on. The order the gift card was sold on. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. 

### RefundFailedMerchantEventDataPreviousAttributes.unissued_gift_card_recoveries variant 1.[] fields 1.order_id variant 2

anyOf variant 2.

- Value shape: null. The order the gift card was sold on. 

### RefundFailedMerchantEventDataPreviousAttributes.unissued_gift_card_recoveries variant 1.[] fields 1.order_line_item_id

### RefundFailedMerchantEventDataPreviousAttributes.unissued_gift_card_recoveries variant 1.[] fields 1.order_line_item_id variant 1

anyOf variant 1: The gift card line item the cash paid for. Name it in a `line_items` entry of the new refund..

- Value shape: string. The gift card line item the cash paid for. Name it in a `line_items` entry of the new refund. The gift card line item the cash paid for. Name it in a `line_items` entry of the new refund. Example: `"li_01KEZF7C008YPRCK7VDKTGWR31"`. 

### RefundFailedMerchantEventDataPreviousAttributes.unissued_gift_card_recoveries variant 1.[] fields 1.order_line_item_id variant 2

anyOf variant 2.

- Value shape: null. The gift card line item the cash paid for. Name it in a `line_items` entry of the new refund. 

### RefundFailedMerchantEventDataPreviousAttributes.unissued_gift_card_recoveries variant 1.[] fields 1.payment_intent_id

### RefundFailedMerchantEventDataPreviousAttributes.unissued_gift_card_recoveries variant 1.[] fields 1.payment_intent_id variant 1

anyOf variant 1: The payment the returned cash belongs to. Name it in the new refund..

- Value shape: string. The payment the returned cash belongs to. Name it in the new refund. The payment the returned cash belongs to. Name it in the new refund. Example: `"pi_01KEZF7C00G8H9D509YEV22P7R"`. 

### RefundFailedMerchantEventDataPreviousAttributes.unissued_gift_card_recoveries variant 1.[] fields 1.payment_intent_id variant 2

anyOf variant 2.

- Value shape: null. The payment the returned cash belongs to. Name it in the new refund. 

### RefundFailedMerchantEventDataPreviousAttributes.unissued_gift_card_recoveries variant 1.[] fields 1.purchase_refund_allocation_id

### RefundFailedMerchantEventDataPreviousAttributes.unissued_gift_card_recoveries variant 1.[] fields 1.purchase_refund_allocation_id variant 1

anyOf variant 1: ID of the gift card purchase refund allocation whose cash came back after it failed..

- Value shape: string. ID of the gift card purchase refund allocation whose cash came back after it failed. ID of the gift card purchase refund allocation whose cash came back after it failed. Example: `"gcpra_01KEZF7C00HJZ2YP6AENMZK5KA"`. 

### RefundFailedMerchantEventDataPreviousAttributes.unissued_gift_card_recoveries variant 1.[] fields 1.purchase_refund_allocation_id variant 2

anyOf variant 2.

- Value shape: null. ID of the gift card purchase refund allocation whose cash came back after it failed. 

### RefundFailedMerchantEventDataPreviousAttributes.unissued_gift_card_recoveries variant 1.[] fields 1.settlement_allocation_id

### RefundFailedMerchantEventDataPreviousAttributes.unissued_gift_card_recoveries variant 1.[] fields 1.settlement_allocation_id variant 1

anyOf variant 1: ID of the settlement allocation this entry draws on. Entries that share one describe the same pool, so their amounts aren't additive..

- Value shape: string. ID of the settlement allocation this entry draws on. Entries that share one describe the same pool, so their amounts aren't additive. ID of the settlement allocation this entry draws on. Entries that share one describe the same pool, so their amounts aren't additive. Example: `"opsa_01KEZF7C00MB3NB1V0AM09SX8T"`. 

### RefundFailedMerchantEventDataPreviousAttributes.unissued_gift_card_recoveries variant 1.[] fields 1.settlement_allocation_id variant 2

anyOf variant 2.

- Value shape: null. ID of the settlement allocation this entry draws on. Entries that share one describe the same pool, so their amounts aren't additive. 

### RefundFailedMerchantEventDataPreviousAttributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### RefundFailedMerchantEventDataPreviousAttributes.version

Declared alternatives: [PaymentSplitCanceledEvent.data fields 1.previous_attributes.version](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdata-fields-1previous_attributesversion).

