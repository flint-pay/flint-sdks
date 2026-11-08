[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerReturnInput

A request to send purchased items back.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_actions` | Required | Array of [BuyerActionInput](../models/BuyerActionInput.md#buyeractioninput) | What the buyer can do with the return, in this order: withdraw, ship_items, then pay_balance. A buyer's read or change through a customer session on /v1/me, or in Flint's buyer account, lists all three every time; merchant reads and webhooks get an empty list. ship_items is required while handoff_requirements is not empty, due by the earliest expires_at there. pay_balance is required while a resolution waits for the buyer's payment. Example: `[]`. |
| `canceled_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `cancellation_reason` | Optional | string | Why the Return was canceled. Values: `"buyer_request"`, `"merchant_request"`, `"duplicate"`, `"expired"`, `"created_in_error"`, `"other"`. |
| `completed_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `completion_blockers` | Required | Array of [BuyerReturnCompletionBlockerInput](../models/BuyerReturnCompletionBlockerInput.md#buyerreturncompletionblockerinput) | What is still owed before the Return can complete. Empty when nothing is. |
| `completion_mode` | Optional | string | automatic completes the Return when the last completion blocker clears; manual waits for POST /v1/returns/{return_id}/complete. Reopening a Return sets it to manual. Values: `"manual"`, `"automatic"`. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `decision_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `decision_status` | Required | string | Whether the requested units were approved. `pending` until one decision covers every line. Values: `"pending"`, `"approved"`, `"partially_approved"`, `"declined"`. |
| `financial_summary` | Required | [ReturnFinancialSummaryInput](../models/ReturnFinancialSummaryInput.md#returnfinancialsummaryinput) | The Return's money in one place: the value of the returned lines, deductions and credits, and what has been refunded or collected. The money for a return: returned value, deductions, credits, replacement total, and amounts due to or from the buyer. |
| `handoff_requirements` | Required | Array of [BuyerReturnHandoffRequirementInput](../models/BuyerReturnHandoffRequirementInput.md#buyerreturnhandoffrequirementinput) | What the buyer still has to send back and where. Each entry leaves the list once it is satisfied, so an empty list means nothing is waiting on the buyer. |
| `initiated_by` | Required | string | Who created the Return, from the credential that sent the request: buyer for a customer session on /v1/me or Flint's hosted account, merchant for a Dashboard user, integration for an API key or partner app. It cannot be sent. Values: `"buyer"`, `"merchant"`, `"integration"`. |
| `line_items` | Required | Array of [BuyerReturnLineItemInput](../models/BuyerReturnLineItemInput.md#buyerreturnlineiteminput) | The lines being returned. |
| `merchandise_status` | Required | string | On the Return, the least-finished line's value. Values: [10 declared values](#buyerreturninput-merchandise_status-values). |
| `metadata` | Required | object | Always empty for buyer credentials. maxProperties: `0`. |
| `order_id` | Required | string | ID of the Order the Return is against. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `resolution_status` | Required | string | Whether the buyer has received the value they are owed. Combines the Return's resolutions and its unsettled corrections. Values: `"not_selected"`, `"pending"`, `"partially_fulfilled"`, `"requires_action"`, `"fulfilled"`, `"failed"`. |
| `return_id` | Required | string | Unique identifier for this return, prefixed `ret_`. Example: `"ret_01KEZF7C00PG93650ZKVQNGF7X"`. |
| `return_number` | Required | string | Human-readable number for the Return. |
| `return_resolution_ids` | Required | Array of string | IDs of every resolution created for this Return, oldest first, including failed and canceled resolutions. Expand `return_resolutions` on `GET /v1/returns/{return_id}` to read them inline. Items: Example: `"retres_01KEZF7C00C7RZJN31W9SGMEQ3"`. |
| `status` | Required | string | Where the whole Return stands. Read `decision_status`, `merchandise_status`, and `resolution_status` for the part you need. Values: `"requested"`, `"open"`, `"completed"`, `"declined"`, `"canceled"`. |
| `supported_actions` | Required | Array of string | Items values: `"cancel"`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `version` | Required | integer | Goes up with every change to the Return. Each activity's `return_version` is the version that activity produced. A write that takes `expected_version` or `expected_return_version` for this Return compares it with this value. Format: `int64`. minimum: `0`. |

#### BuyerReturnInput merchandise_status values

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

