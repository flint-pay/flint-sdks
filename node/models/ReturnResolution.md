[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnResolution

The refund, exchange, or other outcome of a return.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `action_reason` | Optional | string | Why a requires_action resolution is waiting. buyer_payment means the buyer must pay the exchange balance; manual_release means the merchant must release the resolution. Values: `"buyer_payment"`, `"manual_release"`. |
| `action_required_by` | Optional | string | Who has to act while the resolution's status is `requires_action`. Values: `"buyer"`, `"merchant"`. |
| `adjustments` | Required | Array of [ReturnResolutionAdjustment](../models/ReturnResolutionAdjustment.md#returnresolutionadjustment) | Fees and credits applied to the resolution's amounts. |
| `buyer_payment_amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Amount the buyer owes when deduction_money and replacement_total_money exceed returned_total_money plus credit_adjustment_money. Zero when the buyer is owed a refund and for no_monetary_action. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `buyer_payment_amount_money`: [field definitions](../models/BuyerReturnResolution.md#buyerreturnresolutionbuyer_payment_amount_money). |
| `buyer_refund_amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Value returned to the buyer: returned_total_money plus credit_adjustment_money, minus deduction_money and replacement_total_money, when that balance is zero or more. For store_credit, the value issued on new gift cards. Zero for no_monetary_action. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `buyer_refund_amount_money`: [field definitions](../models/BuyerReturnResolution.md#buyerreturnresolutionbuyer_refund_amount_money). |
| `canceled_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `canceled_by` | Optional | [ReturnActor](../models/ReturnActor.md#returnactor) | Who canceled the resolution. Merchant reads only. Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID. |
| `cancellation_reason` | Optional | string | Why the resolution was canceled. Values: `"buyer_request"`, `"merchant_request"`, `"duplicate"`, `"expired"`, `"created_in_error"`, `"other"`. |
| `cancellation_reason_message` | Optional | string | Detail sent with the cancellation. Merchant reads only. |
| `confirmed_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `confirmed_by` | Optional | [ReturnActor](../models/ReturnActor.md#returnactor) | Who confirmed the resolution. Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID. |
| `corrects_return_resolution_id` | Optional | string | ID of the settled resolution this correction adjusts. Present only when `resolution_type` is `correction`. Example: `"retres_01KEZF7C00C7RZJN31W9SGMEQ3"`. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `created_by` | Required | [ReturnActor](../models/ReturnActor.md#returnactor) | Who created the resolution. Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID. |
| `credit_adjustment_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Credits added by the resolution's adjustments. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `credit_adjustment_money`: [field definitions](../models/BuyerReturnResolution.md#buyerreturnresolutioncredit_adjustment_money). |
| `deduction_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Deductions taken by the resolution's adjustments, such as a restocking fee. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `deduction_money`: [field definitions](../models/BuyerReturnResolution.md#buyerreturnresolutiondeduction_money). |
| `execution_blockers` | Required | Array of [ReturnResolutionExecutionBlocker](../models/ReturnResolutionExecutionBlocker.md#returnresolutionexecutionblocker) | What a confirmed resolution is still waiting for. Empty when nothing is. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. maxLength: `255`. Example: `"warehouse-1842"`. |
| `failure_code` | Optional | string | Reason code for a failed Return resolution, when available. refund_line_value_unavailable means another refund already returned part of an order line, so retrying cannot succeed; cancel the resolution and resolve the line for fewer units or without a refund. replacement_fulfillment_canceled means the replacement Order's fulfillment was canceled, so it won't be sent. gift_card_refund_destination_required means the original gift card cannot accept the refund; retry with gift_card_refund_destination set to new_gift_card. store_credit_unavailable means the original payment cannot fund store credit; cancel the resolution and create a refund resolution. Values: [10 declared values](BuyerReturnResolution.md#buyerreturnresolution-failure_code-values). |
| `failure_message` | Optional | string | Explanation of a failed Return resolution, when available. |
| `fulfilled_at` | Optional | string | When the resolution completed. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `gift_card_refund_destination` | Optional | string | Where the gift-card-paid portion is refunded. original credits the original gift card; new_gift_card issues new gift cards. Accepted for refund, exchange, and correction, except a correction of store_credit. Omit for store_credit, replacement, and no_monetary_action; sending it returns INVALID_REQUEST with a NOT_ALLOWED detail at gift_card_refund_destination and conflicting_fields naming resolution_type. Store credit and its corrections always issue new gift cards. PATCH can change it only while proposed. Retry persists the chosen destination before starting the new attempt. Default: `"original"`. Values: `"original"`, `"new_gift_card"`. |
| `line_items` | Required | Array of [ReturnResolutionLineItem](../models/ReturnResolutionLineItem.md#returnresolutionlineitem) | Return lines and quantities the resolution covers. Absent on a correction. |
| `metadata` | Required | [MetadataMap](../models/MetadataMap.md#metadatamap) | Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. `metadata`: [field definitions](../models/CheckoutSession.md#checkoutsessionmetadata). |
| `payment_intent_ids` | Required | Array of string | Items: Example: `"pi_01KEZF7C00G8H9D509YEV22P7R"`. |
| `payment_intents` | Optional | Array of [ExpandedPaymentIntentSummary](../models/ExpandedPaymentIntentSummary.md#expandedpaymentintentsummary) |  |
| `pricing_basis` | Optional | string | How replacement lines are priced. Present on exchanges and replacements. Values: `"original_price"`, `"current_price"`, `"merchant_agreed_price"`. |
| `refund_ids` | Required | Array of string | Items: Example: `"ref_01KEZF7C003DTD59WKYHEXYQ1K"`. |
| `refunds` | Optional | Array of [Refund](../models/Refund.md#refund) |  |
| `replacement_line_items` | Required | Array of [ReturnReplacementLineItem](../models/ReturnReplacementLineItem.md#returnreplacementlineitem) | Merchandise the buyer receives instead, for an exchange or replacement. |
| `replacement_order` | Optional | [ExpandedOrderSummary](../models/ExpandedOrderSummary.md#expandedordersummary) or null | Present only when `expand` includes `replacement_order`; `null` when expanded and there is no related order. |
| `replacement_order_id` | Optional | string | ID of the replacement Order Flint created for an exchange or replacement. Absent until it exists. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `replacement_total_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Total of the replacement items the buyer receives. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `replacement_total_money`: [field definitions](../models/BuyerReturnResolution.md#buyerreturnresolutionreplacement_total_money). |
| `resolution_type` | Required | string | What the buyer gets for the approved quantity. Values: `"refund"`, `"exchange"`, `"replacement"`, `"store_credit"`, `"no_monetary_action"`, `"correction"`. |
| `return_id` | Required | string | ID of the Return the resolution belongs to. Example: `"ret_01KEZF7C00PG93650ZKVQNGF7X"`. |
| `return_policy_id` | Required | string or null | Policy that owns return_policy_revision_id. `null` when return_policy_revision_id is null. Example: `"rpol_01KEZF7C00H8C042BEK6HBRANX"`. |
| `return_policy_revision_id` | Optional | string | Example: `"rpolv_01KEZF7C007AWH6P4QC14Q25TC"`. |
| `return_resolution_id` | Required | string | Unique identifier for this return resolution, prefixed `retres_`. Example: `"retres_01KEZF7C00C7RZJN31W9SGMEQ3"`. |
| `returned_total_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Value of the returned units this resolution covers. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `returned_total_money`: [field definitions](../models/BuyerReturnResolution.md#buyerreturnresolutionreturned_total_money). |
| `status` | Required | string | completed means the buyer has the value: every linked Refund succeeded, any balance was collected, and any replacement Order's fulfillment_status is fulfilled or not_applicable. Values: `"proposed"`, `"pending"`, `"requires_action"`, `"completed"`, `"failed"`, `"canceled"`. |
| `supported_actions` | Required | Array of string | Actions that can succeed now. Empty unless the parent Return is open, except checkout_session. A failed resolution lists retry while it has a failed effect and its failure code permits retry. It lists cancel when it never created a Refund, PaymentIntent, or Order. Items values: `"cancel"`, `"checkout_session"`, `"confirm"`, `"release"`, `"retry"`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `version` | Required | integer | Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. Format: `int64`. minimum: `0`. |

### ReturnResolution.buyer_payment_amount_money

Field definitions: [BuyerReturnResolution.buyer_payment_amount_money](../models/BuyerReturnResolution.md#buyerreturnresolutionbuyer_payment_amount_money).

### ReturnResolution.buyer_refund_amount_money

Field definitions: [BuyerReturnResolution.buyer_refund_amount_money](../models/BuyerReturnResolution.md#buyerreturnresolutionbuyer_refund_amount_money).

### ReturnResolution.credit_adjustment_money

Field definitions: [BuyerReturnResolution.credit_adjustment_money](../models/BuyerReturnResolution.md#buyerreturnresolutioncredit_adjustment_money).

### ReturnResolution.deduction_money

Field definitions: [BuyerReturnResolution.deduction_money](../models/BuyerReturnResolution.md#buyerreturnresolutiondeduction_money).

### ReturnResolution.metadata

Field definitions: [CheckoutSession.metadata](../models/CheckoutSession.md#checkoutsessionmetadata).

### ReturnResolution.replacement_total_money

Field definitions: [BuyerReturnResolution.replacement_total_money](../models/BuyerReturnResolution.md#buyerreturnresolutionreplacement_total_money).

### ReturnResolution.returned_total_money

Field definitions: [BuyerReturnResolution.returned_total_money](../models/BuyerReturnResolution.md#buyerreturnresolutionreturned_total_money).

