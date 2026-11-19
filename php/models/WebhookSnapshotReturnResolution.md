[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## WebhookSnapshotReturnResolution

The refund, exchange, or other outcome of a return.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `action_reason` | Optional | string | Why a requires_action resolution is waiting. buyer_payment means the buyer must pay the exchange balance; manual_release means the merchant must release the resolution. Values: `"buyer_payment"`, `"manual_release"`. |
| `action_required_by` | Optional | string | Who has to act while the resolution's status is `requires_action`. Values: `"buyer"`, `"merchant"`. |
| `adjustments` | Required | Array of [ReturnResolutionAdjustment](../models/ReturnResolutionAdjustment.md#returnresolutionadjustment) | Fees and credits applied to the resolution's amounts. `adjustments[]`: [field definitions](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_resolutionsadjustments). |
| `buyer_payment_amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Amount the buyer owes when deduction_money and replacement_total_money exceed returned_total_money plus credit_adjustment_money. Zero when the buyer is owed a refund and for no_monetary_action. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `buyer_refund_amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Value returned to the buyer: returned_total_money plus credit_adjustment_money, minus deduction_money and replacement_total_money, when that balance is zero or more. For store_credit, the value issued on new gift cards. Zero for no_monetary_action. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `canceled_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `canceled_by` | Optional | [ReturnActor](../models/ReturnActor.md#returnactor) | Who canceled the resolution. Merchant reads only. Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID. `canceled_by`: [field definitions](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_resolutionscanceled_by). |
| `cancellation_reason` | Optional | string | Why the resolution was canceled. Values: `"buyer_request"`, `"merchant_request"`, `"duplicate"`, `"expired"`, `"created_in_error"`, `"other"`. |
| `cancellation_reason_message` | Optional | string | Detail sent with the cancellation. Merchant reads only. |
| `confirmed_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `confirmed_by` | Optional | [ReturnActor](../models/ReturnActor.md#returnactor) | Who confirmed the resolution. Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID. `confirmed_by`: [field definitions](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_resolutionsconfirmed_by). |
| `corrects_return_resolution_id` | Optional | string | ID of the settled resolution this correction adjusts. Present only when `resolution_type` is `correction`. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `created_by` | Required | [ReturnActor](../models/ReturnActor.md#returnactor) | Who created the resolution. Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID. `created_by`: [field definitions](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_resolutionscreated_by). |
| `credit_adjustment_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Credits added by the resolution's adjustments. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `deduction_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Deductions taken by the resolution's adjustments, such as a restocking fee. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `execution_blockers` | Required | Array of [ReturnResolutionExecutionBlocker](../models/ReturnResolutionExecutionBlocker.md#returnresolutionexecutionblocker) | What a confirmed resolution is still waiting for. Empty when nothing is. `execution_blockers[]`: [field definitions](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_resolutionsexecution_blockers). |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. maxLength: `255`. |
| `failure_code` | Optional | string | Reason code for a failed Return resolution, when available. refund_payment_balance_unavailable means the original payments cannot fund the resolution; cancel it, then add an explicit deduction or settle the shortfall outside Flint. refund_line_value_unavailable means another refund already returned part of an order line, so retrying cannot succeed; cancel the resolution and resolve the line for fewer units or without a refund. replacement_fulfillment_canceled means the replacement Order's fulfillment was canceled, so it won't be sent. gift_card_refund_destination_required means the original gift card cannot accept the refund; retry with gift_card_refund_destination set to new_gift_card. store_credit_unavailable means the original payment cannot fund store credit; cancel the resolution and create a refund resolution. Values: [11 declared values](BuyerReturnResolutionInput.md#buyerreturnresolutioninput-failure_code-values). |
| `failure_message` | Optional | string | Explanation of a failed Return resolution, when available. |
| `fulfilled_at` | Optional | string | When the resolution completed. Format: `date-time`. |
| `gift_card_refund_destination` | Optional | string | Where the gift-card-paid portion is refunded. original credits the original gift card; new_gift_card issues new gift cards. Accepted for refund, exchange, and correction, except a correction of store_credit. Omit for store_credit, replacement, and no_monetary_action; sending it returns INVALID_REQUEST with a NOT_ALLOWED detail at gift_card_refund_destination and conflicting_fields naming resolution_type. Store credit and its corrections always issue new gift cards. PATCH can change it only while proposed. Retry persists the chosen destination before starting the new attempt. Default: `"original"`. Values: `"original"`, `"new_gift_card"`. |
| `line_items` | Required | Array of [ReturnResolutionLineItem](../models/ReturnResolutionLineItem.md#returnresolutionlineitem) | Return lines and quantities the resolution covers. Absent on a correction. `line_items[]`: [field definitions](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_resolutionsline_items). |
| `metadata` | Required | Map of string | Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. `metadata`: [field definitions](../models/OrderResponse.md#orderresponsedatachargesmetadata). |
| `payment_intent_ids` | Required | Array of string | IDs of the payment intents that collect the buyer's balance for this resolution, in the order Flint linked them. Empty until a payment exists. |
| `payment_intents` | Optional | Array of [ExpandedPaymentIntentSummary](../models/ExpandedPaymentIntentSummary.md#expandedpaymentintentsummary) | Present only when `expand` includes `payment_intents`. Summaries of the payment intents in `payment_intent_ids`, in the same order. `payment_intents[]`: [field definitions](../models/OrderResponse.md#orderresponsedatapayment_intents). |
| `pricing_basis` | Optional | string | How replacement lines are priced. Present on exchanges and replacements. Values: `"original_price"`, `"current_price"`, `"merchant_agreed_price"`. |
| `refund_ids` | Required | Array of string | IDs of the Refunds that pay the buyer for this resolution, in the order Flint linked them. Empty until a Refund exists. |
| `refunds` | Optional | Array of [WebhookSnapshotRefund](../models/WebhookSnapshotRefund.md#webhooksnapshotrefund) | Present only when `expand` includes `refunds`. The refunds in `refund_ids`, in the same order. `refunds[]`: [field definitions](../models/WebhookSnapshotReturnResolution.md#webhooksnapshotreturnresolutionrefunds). |
| `replacement_line_items` | Required | Array of [ReturnReplacementLineItem](../models/ReturnReplacementLineItem.md#returnreplacementlineitem) | Merchandise the buyer receives instead, for an exchange or replacement. `replacement_line_items[]`: [field definitions](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_resolutionsreplacement_line_items). |
| `replacement_order` | Optional | [ExpandedOrderSummary](../models/ExpandedOrderSummary.md#expandedordersummary) or null | Present only when `expand` includes `replacement_order`; `null` when expanded and there is no related order. |
| `replacement_order_id` | Optional | string | ID of the replacement Order Flint created for an exchange or replacement. Absent until it exists. |
| `replacement_total_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Total of the replacement items the buyer receives. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `resolution_type` | Required | string | What the buyer gets for the approved quantity. Values: `"refund"`, `"exchange"`, `"replacement"`, `"store_credit"`, `"no_monetary_action"`, `"correction"`. |
| `return_id` | Required | string | ID of the Return the resolution belongs to. |
| `return_policy_id` | Required | string or null | Policy that owns return_policy_revision_id. `null` when return_policy_revision_id is null. |
| `return_policy_revision_id` | Optional | string | ID of the return policy revision that judged the lines. Set only when Flint created the resolution itself and no merchant decision overrode the policy. Absent otherwise, including on resolutions you create and on corrections. |
| `return_resolution_id` | Required | string | Unique identifier for this return resolution, prefixed `retres_`. |
| `returned_total_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Value of the returned units this resolution covers. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `status` | Required | string | completed means the buyer has the value: every linked Refund succeeded, any balance was collected, and any replacement Order's fulfillment_status is fulfilled or not_applicable. Values: `"proposed"`, `"pending"`, `"requires_action"`, `"completed"`, `"failed"`, `"canceled"`. |
| `supported_actions` | Required | Array of string | Actions that can succeed now. checkout_session is listed while a replacement Order needs a buyer payment, including when the parent Return is not open. Other actions require an open Return. A failed resolution lists retry while it has a failed effect and its failure code permits retry. It lists cancel when it never created a Refund, PaymentIntent, or Order. Items values: `"cancel"`, `"checkout_session"`, `"confirm"`, `"release"`, `"retry"`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `version` | Required | integer | Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. Format: `int64`. minimum: `0`. |

### WebhookSnapshotReturnResolution.adjustments[]

Field definitions: [CancelReturnResponse.data.return_resolutions[].adjustments[]](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_resolutionsadjustments).

### WebhookSnapshotReturnResolution.canceled_by

Field definitions: [CancelReturnResponse.data.return_resolutions[].canceled_by](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_resolutionscanceled_by).

### WebhookSnapshotReturnResolution.confirmed_by

Field definitions: [CancelReturnResponse.data.return_resolutions[].confirmed_by](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_resolutionsconfirmed_by).

### WebhookSnapshotReturnResolution.created_by

Field definitions: [CancelReturnResponse.data.return_resolutions[].created_by](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_resolutionscreated_by).

### WebhookSnapshotReturnResolution.execution_blockers[]

Field definitions: [CancelReturnResponse.data.return_resolutions[].execution_blockers[]](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_resolutionsexecution_blockers).

### WebhookSnapshotReturnResolution.line_items[]

Field definitions: [CancelReturnResponse.data.return_resolutions[].line_items[]](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_resolutionsline_items).

### WebhookSnapshotReturnResolution.metadata

Field definitions: [OrderResponse.data.charges[].metadata](../models/OrderResponse.md#orderresponsedatachargesmetadata).

### WebhookSnapshotReturnResolution.payment_intents[]

Field definitions: [OrderResponse.data.payment_intents[]](../models/OrderResponse.md#orderresponsedatapayment_intents).

### WebhookSnapshotReturnResolution.refunds[]

Money returned against a collected payment.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Total refunded across all tenders, including `refunded_tip_money`. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `charge_allocations` | Optional | Array of [RefundChargeAllocation](../models/RefundChargeAllocation.md#refundchargeallocation) | Money returned for each order charge, including subtotal, discount, and tax, combined across payment refunds. `charge_allocations[]`: [field definitions](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_resolutionsrefundscharge_allocations). |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `credit_adjustment_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Money paid for Return resolution credits, included in amount_money. It carries no merchandise, shipping, tax, or tip allocation. Zero for refunds without credits. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `credit_note_id` | Optional | string | ID of the credit note this refund paid out. Present only on refunds issued through a credit note. Example: `"cn_01KEZF7C00N1TRRCVDNY8S471H"`. |
| `customer` | Optional | [ExpandedCustomerSummary](../models/ExpandedCustomerSummary.md#expandedcustomersummary) or null | Present only when `expand` includes `customer`; `null` when expanded and there is no related customer. `customer`: [declared alternatives](../models/DisputeResponse.md#disputeresponsedatacustomer). |
| `customer_id` | Optional | string | ID of the customer on the refunded order or payment. Absent when neither has one. Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. maxLength: `255`. Example: `"warehouse-1842"`. |
| `failure_reason` | Optional | string | Why a refund failed or a payment refund was canceled. Failed and canceled amounts become refundable again, except a refund with reason payment_returned that failed with payment_disputed: the buyer won a dispute on the charge, so nothing is left to refund. A payment_returned refund that failed with refund_abandoned can't be retried through Flint either: the money is in your balance. Flint hasn't repaid the buyer. Repay them another way if you haven't already. Fix the cause, then create a new refund with a new idempotency key. Unknown provider values are returned as refund_failed. Values: [11 declared values](BuyerPaymentRefundInput.md#buyerpaymentrefundinput-failure_reason-values). |
| `idempotency_key` | Optional | string or null | The Idempotency-Key of the request that created this resource. `null` when that request sent no key, Flint created the resource, the reader isn't the caller that created it (another app install, a buyer, or the merchant reading an app's or buyer's record), or the caller that created an older record is unknown. Filter its list with `idempotency_key` to find it. Recorded payloads, including replayed responses and webhook events, can return `null`. To find a key that a replay returns as `null`, read the resource. |
| `initiated_by` | Required | string | Who decided to make this refund: `merchant` for you or your integration, `flint` for a refund Flint made on its own to return a payment it couldn't accept. Unlike a Return's `initiated_by`, it doesn't say which credential asked. Read-only. Values: `"merchant"`, `"flint"`. |
| `invoice_id` | Optional | string | ID of the invoice whose credit note this refund paid out. Present only on refunds issued through a credit note. Example: `"inv_01KEZF7C00A5GEBMWHEAJFSAR4"`. |
| `line_item_allocations` | Optional | Array of [RefundLineItemAllocation](../models/RefundLineItemAllocation.md#refundlineitemallocation) | How the refund applied to each order line item it covered, with quantity, tax, and adjustments. `line_item_allocations[]`: [field definitions](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_resolutionsrefundsline_item_allocations). |
| `merchant_id` | Required | string | ID of the merchant this resource belongs to. Example: `"mer_01KEZF7C00KPYH1DDFPCCX3B6E"`. |
| `metadata` | Optional | Map of string | Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. `metadata`: [field definitions](../models/OrderResponse.md#orderresponsedatachargesmetadata). |
| `order` | Optional | [ExpandedOrderSummary](../models/ExpandedOrderSummary.md#expandedordersummary) or null | Present only when `expand` includes `order`; `null` when expanded and there is no related order. `order`: [declared alternatives](../models/DisputeResponse.md#disputeresponsedataorder). |
| `order_edit_id` | Optional | string | ID of the paid-order edit that created this refund. Present only on refunds issued through an order edit. Example: `"oed_01KEZF7C00A6BQ4TBGWFDJ944A"`. |
| `order_id` | Optional | string | ID of the order the refund was issued against. For a refund with `reason` `payment_returned`, the order the returned payment was for; the order never received this money. Absent for a refund of a payment that has no order, and for a standalone gift card refund. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `payment_intent` | Optional | [ExpandedPaymentIntentSummary](../models/ExpandedPaymentIntentSummary.md#expandedpaymentintentsummary) or null | Present only when `expand` includes `payment_intent`; `null` when expanded and there is no related payment intent. `payment_intent`: [declared alternatives](../models/DisputeResponse.md#disputeresponsedatapayment_intent). |
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

### WebhookSnapshotReturnResolution.refunds[].charge_allocations[]

Field definitions: [CancelReturnResponse.data.return_resolutions[].refunds[].charge_allocations[]](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_resolutionsrefundscharge_allocations).

### WebhookSnapshotReturnResolution.refunds[].customer

Declared alternatives: [DisputeResponse.data.customer](../models/DisputeResponse.md#disputeresponsedatacustomer).

### WebhookSnapshotReturnResolution.refunds[].line_item_allocations[]

Field definitions: [CancelReturnResponse.data.return_resolutions[].refunds[].line_item_allocations[]](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_resolutionsrefundsline_item_allocations).

### WebhookSnapshotReturnResolution.refunds[].metadata

Field definitions: [OrderResponse.data.charges[].metadata](../models/OrderResponse.md#orderresponsedatachargesmetadata).

### WebhookSnapshotReturnResolution.refunds[].order

Declared alternatives: [DisputeResponse.data.order](../models/DisputeResponse.md#disputeresponsedataorder).

### WebhookSnapshotReturnResolution.refunds[].payment_intent

Declared alternatives: [DisputeResponse.data.payment_intent](../models/DisputeResponse.md#disputeresponsedatapayment_intent).

### WebhookSnapshotReturnResolution.refunds[].payment_refunds[]

Field definitions: [CancelReturnResponse.data.return_resolutions[].refunds[].payment_refunds[]](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_resolutionsrefundspayment_refunds).

### WebhookSnapshotReturnResolution.refunds[].tax_breakdown_refunds[]

Field definitions: [CancelReturnResponse.data.return_resolutions[].refunds[].line_item_allocations[].tax_breakdown_refunds[]](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_resolutionsrefundsline_item_allocationstax_breakdown_refunds).

### WebhookSnapshotReturnResolution.refunds[].tender_allocations[]

Field definitions: [CancelReturnResponse.data.return_resolutions[].refunds[].tender_allocations[]](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_resolutionsrefundstender_allocations).

### WebhookSnapshotReturnResolution.refunds[].unissued_gift_card_recoveries[]

Field definitions: [CancelReturnResponse.data.return_resolutions[].refunds[].unissued_gift_card_recoveries[]](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_resolutionsrefundsunissued_gift_card_recoveries).

### WebhookSnapshotReturnResolution.replacement_line_items[]

Field definitions: [CancelReturnResponse.data.return_resolutions[].replacement_line_items[]](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_resolutionsreplacement_line_items).

