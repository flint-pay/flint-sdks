[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerReturn

A request to send purchased items back.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_actions` | Required | Array of [BuyerAction](../models/BuyerAction.md#buyeraction) | What the buyer can do with the return, in this order: withdraw, ship_items, then pay_balance. A buyer's read or change through a customer session on /v1/me, or in Flint's buyer account, lists all three every time; merchant reads and webhooks get an empty list. ship_items is required while handoff_requirements is not empty, due by the earliest expires_at there. pay_balance is required while a resolution waits for the buyer's payment. Example: `[]`. |
| `canceled_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `cancellation_reason` | Optional | string | Values: `"buyer_request"`, `"merchant_request"`, `"duplicate"`, `"expired"`, `"created_in_error"`, `"other"`. |
| `completed_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `completion_blockers` | Required | Array of [BuyerReturnCompletionBlocker](../models/BuyerReturnCompletionBlocker.md#buyerreturncompletionblocker) |  |
| `completion_mode` | Optional | string | automatic completes the Return when the last completion blocker clears; manual waits for POST /v1/returns/{return_id}/complete. Reopening a Return sets it to manual. Values: `"manual"`, `"automatic"`. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `decision_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `decision_status` | Required | string | Values: `"pending"`, `"approved"`, `"partially_approved"`, `"declined"`. |
| `financial_summary` | Required | [ReturnFinancialSummary](../models/ReturnFinancialSummary.md#returnfinancialsummary) | The money for a return: returned value, deductions, credits, replacement total, and amounts due to or from the buyer. |
| `handoff_requirements` | Required | Array of [BuyerReturnHandoffRequirement](../models/BuyerReturnHandoffRequirement.md#buyerreturnhandoffrequirement) |  |
| `initiated_by` | Required | string | Who created the Return, from the credential that sent the request: buyer for a customer session on /v1/me or Flint's hosted account, merchant for a Dashboard user, integration for an API key or partner app. It cannot be sent. Values: `"buyer"`, `"merchant"`, `"integration"`. |
| `line_items` | Required | Array of [BuyerReturnLineItem](../models/BuyerReturnLineItem.md#buyerreturnlineitem) |  |
| `merchandise_status` | Required | string | On the Return, the least-finished line's value. Values: [10 declared values](#buyerreturn-merchandise_status-values). |
| `metadata` | Required | object | Always empty for buyer credentials. maxProperties: `0`. |
| `order_id` | Required | string |  |
| `resolution_status` | Required | string | Values: `"not_selected"`, `"pending"`, `"partially_fulfilled"`, `"requires_action"`, `"fulfilled"`, `"failed"`. |
| `return_id` | Required | string |  |
| `return_number` | Required | string |  |
| `return_resolution_ids` | Required | Array of string | IDs of every resolution created for this Return, oldest first, including failed and canceled resolutions. Expand `return_resolutions` on `GET /v1/returns/{return_id}` to read them inline. |
| `status` | Required | string | Values: `"requested"`, `"open"`, `"completed"`, `"declined"`, `"canceled"`. |
| `supported_actions` | Required | Array of string | Items values: `"cancel"`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `version` | Required | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `0`. |

#### BuyerReturn merchandise_status values

- `"not_required"`
- `"awaiting_handoff"`
- `"in_transit"`
- `"partially_received"`
- `"inspection_required"`
- `"partially_inspected"`
- `"inspection_review_required"`
- `"disposition_required"`
- `"resolved"`
- `"exception"`

