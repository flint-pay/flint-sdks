[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnResolutionInput

The refund, exchange, or other outcome of a return.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `action_reason` | Optional | string | Values: `"buyer_payment"`, `"buyer_selection"`, `"merchant_review"`, `"manual_release"`, `"linked_effect_retry"`, `"other"`. |
| `action_required_by` | Optional | string | Values: `"buyer"`, `"merchant"`, `"integration"`. |
| `adjustments` | Required | Array of [ReturnResolutionAdjustmentInput](../models/ReturnResolutionAdjustmentInput.md#returnresolutionadjustmentinput) |  |
| `buyer_payment_amount_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `buyer_refund_amount_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Value returned to the buyer. For store_credit, the value issued on new gift cards. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `canceled_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `canceled_by` | Optional | [ReturnActorInput](../models/ReturnActorInput.md#returnactorinput) | Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID. |
| `cancellation_reason` | Optional | string | Values: `"buyer_request"`, `"merchant_request"`, `"duplicate"`, `"expired"`, `"created_in_error"`, `"other"`. |
| `cancellation_reason_message` | Optional | string |  |
| `confirmed_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `confirmed_by` | Optional | [ReturnActorInput](../models/ReturnActorInput.md#returnactorinput) | Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID. |
| `corrects_return_resolution_id` | Optional | string |  |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `created_by` | Required | [ReturnActorInput](../models/ReturnActorInput.md#returnactorinput) | Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID. |
| `credit_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `deduction_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `execution_blockers` | Required | Array of [ReturnResolutionExecutionBlockerInput](../models/ReturnResolutionExecutionBlockerInput.md#returnresolutionexecutionblockerinput) |  |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. maxLength: `255`. |
| `failure_code` | Optional | string | Reason code for a failed Return resolution, when available. refund_line_value_unavailable means another refund already returned part of an order line, so retrying cannot succeed; cancel the resolution and resolve the line for fewer units or without a refund. replacement_fulfillment_canceled means the replacement Order's fulfillment was canceled, so it won't be sent. gift_card_refund_destination_required means the original gift card cannot accept the refund; retry with gift_card_refund_destination set to new_gift_card. store_credit_unavailable means the original payment cannot fund store credit; cancel the resolution and create a refund resolution. Values: [10 declared values](BuyerReturnResolutionInput.md#buyerreturnresolutioninput-failure_code-values). |
| `failure_message` | Optional | string | Explanation of a failed Return resolution, when available. |
| `fulfilled_at` | Optional | string | When the resolution became fulfilled. Format: `date-time`. |
| `gift_card_refund_destination` | Optional | string | Where the gift-card-paid portion is refunded. original credits the original gift card; new_gift_card issues new gift cards. Accepted for refund, exchange, and correction, except a correction of store_credit. Omit for store_credit, replacement, and no_monetary_action; sending it returns INVALID_REQUEST with a NOT_ALLOWED detail and conflicting_fields naming resolution_type and gift_card_refund_destination. Store credit and its corrections always issue new gift cards. PATCH can change it only while proposed. Retry persists the chosen destination before starting the new attempt. Default: `"original"`. Values: `"original"`, `"new_gift_card"`. |
| `line_items` | Required | Array of [ReturnResolutionLineItemInput](../models/ReturnResolutionLineItemInput.md#returnresolutionlineiteminput) |  |
| `metadata` | Required | Map of string |  |
| `payment_intent_ids` | Required | Array of string |  |
| `payment_intents` | Optional | Array of [ExpandedPaymentIntentSummaryInput](../models/ExpandedPaymentIntentSummaryInput.md#expandedpaymentintentsummaryinput) |  |
| `pricing_basis` | Optional | string | Values: `"original_price"`, `"current_price"`, `"merchant_agreed_price"`. |
| `refund_ids` | Required | Array of string |  |
| `refunds` | Optional | Array of [RefundInput](../models/RefundInput.md#refundinput) |  |
| `replacement_line_items` | Required | Array of [ReturnReplacementLineItemInput](../models/ReturnReplacementLineItemInput.md#returnreplacementlineiteminput) |  |
| `replacement_order` | Optional | [ExpandedOrderSummaryInput](../models/ExpandedOrderSummaryInput.md#expandedordersummaryinput) or null |  |
| `replacement_order_id` | Optional | string |  |
| `replacement_total_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `resolution_type` | Required | string | Values: `"refund"`, `"exchange"`, `"replacement"`, `"store_credit"`, `"no_monetary_action"`, `"correction"`. |
| `return_id` | Required | string |  |
| `return_policy_revision_id` | Optional | string |  |
| `return_resolution_id` | Required | string |  |
| `returned_total_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `status` | Required | string | fulfilled means the buyer has the value: every linked Refund succeeded, any balance was collected, and any replacement Order's fulfillment_status is fulfilled or not_applicable. Values: `"proposed"`, `"pending"`, `"requires_action"`, `"fulfilled"`, `"failed"`, `"canceled"`. |
| `supported_actions` | Required | Array of string | Actions that can succeed now. Empty unless the parent Return is open, except checkout_session. A failed resolution lists retry while it has a failed effect and its failure code permits retry. It lists cancel when it never created a Refund, PaymentIntent, or Order. Items values: `"cancel"`, `"checkout_session"`, `"confirm"`, `"release"`, `"retry"`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `version` | Required | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `0`. |

