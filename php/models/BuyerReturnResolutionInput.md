[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerReturnResolutionInput

The refund, exchange, or other outcome of a return.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `action_reason` | Optional | string | Values: `"buyer_payment"`, `"buyer_selection"`, `"merchant_review"`, `"manual_release"`, `"linked_effect_retry"`, `"other"`. |
| `action_required_by` | Optional | string | Values: `"buyer"`, `"merchant"`. |
| `adjustments` | Required | Array of [BuyerReturnResolutionAdjustmentInput](../models/BuyerReturnResolutionAdjustmentInput.md#buyerreturnresolutionadjustmentinput) |  |
| `buyer_payment_amount_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Amount the buyer owes when deduction_money and replacement_total_money exceed returned_total_money plus credit_money. Zero when the buyer is owed a refund and for no_monetary_action. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `buyer_refund_amount_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Value returned to the buyer: returned_total_money plus credit_money, minus deduction_money and replacement_total_money, when that balance is zero or more. For store_credit, the value issued on new gift cards. Zero for no_monetary_action. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `canceled_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `cancellation_reason` | Optional | string | Values: `"buyer_request"`, `"merchant_request"`, `"duplicate"`, `"expired"`, `"created_in_error"`, `"other"`. |
| `confirmed_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `credit_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Credits added by the resolution's adjustments. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `deduction_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Deductions taken by the resolution's adjustments, such as a restocking fee. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `execution_blockers` | Required | Array of [BuyerReturnResolutionExecutionBlockerInput](../models/BuyerReturnResolutionExecutionBlockerInput.md#buyerreturnresolutionexecutionblockerinput) |  |
| `failure_code` | Optional | string | Reason code for a failed Return resolution, when available. refund_line_value_unavailable means another refund already returned part of an order line, so retrying cannot succeed; cancel the resolution and resolve the line for fewer units or without a refund. replacement_fulfillment_canceled means the replacement Order's fulfillment was canceled, so it won't be sent. gift_card_refund_destination_required means the original gift card cannot accept the refund; retry with gift_card_refund_destination set to new_gift_card. store_credit_unavailable means the original payment cannot fund store credit; cancel the resolution and create a refund resolution. Values: [10 declared values](#buyerreturnresolutioninput-failure_code-values). |
| `failure_message` | Optional | string | Explanation of a failed Return resolution, when available. |
| `fulfilled_at` | Optional | string | When the resolution became fulfilled. Format: `date-time`. |
| `gift_card_refund_destination` | Optional | string | Where the gift-card-paid portion is refunded. original credits the original gift card; new_gift_card issues new gift cards. Accepted for refund, exchange, and correction, except a correction of store_credit. Omit for store_credit, replacement, and no_monetary_action; sending it returns INVALID_REQUEST with a NOT_ALLOWED detail and conflicting_fields naming resolution_type and gift_card_refund_destination. Store credit and its corrections always issue new gift cards. PATCH can change it only while proposed. Retry persists the chosen destination before starting the new attempt. Default: `"original"`. Values: `"original"`, `"new_gift_card"`. |
| `line_items` | Required | Array of [ReturnResolutionLineItemInput](../models/ReturnResolutionLineItemInput.md#returnresolutionlineiteminput) |  |
| `metadata` | Required | object | Always empty for buyer credentials. maxProperties: `0`. |
| `pricing_basis` | Optional | string | Values: `"original_price"`, `"current_price"`, `"merchant_agreed_price"`. |
| `replacement_line_items` | Required | Array of [ReturnReplacementLineItemInput](../models/ReturnReplacementLineItemInput.md#returnreplacementlineiteminput) |  |
| `replacement_total_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Total of the replacement items the buyer receives. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `resolution_type` | Required | string | Values: `"refund"`, `"exchange"`, `"replacement"`, `"store_credit"`, `"no_monetary_action"`, `"correction"`. |
| `return_id` | Required | string |  |
| `return_resolution_id` | Required | string |  |
| `returned_total_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Value of the returned units this resolution covers. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `status` | Required | string | fulfilled means the buyer has the value: every linked Refund succeeded, any balance was collected, and any replacement Order's fulfillment_status is fulfilled or not_applicable. Values: `"proposed"`, `"pending"`, `"requires_action"`, `"fulfilled"`, `"failed"`, `"canceled"`. |
| `supported_actions` | Required | Array of string | Lists checkout_session while the buyer owes buyer_payment_amount_money for a replacement and the resolution is pending or requires_action. Pay it with POST /v1/me/return-resolutions/{return_resolution_id}/checkout-sessions. Otherwise empty. Items values: `"checkout_session"`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `version` | Required | integer | Format: `int64`. minimum: `0`. |

#### BuyerReturnResolutionInput failure_code values

- `"gift_card_refund_destination_required"`
- `"store_credit_unavailable"`
- `"refund_creation_failed"`
- `"refund_failed"`
- `"refund_line_value_unavailable"`
- `"payment_intent_creation_failed"`
- `"payment_failed"`
- `"replacement_order_creation_failed"`
- `"replacement_fulfillment_canceled"`
- `"resolution_effect_failed"`

