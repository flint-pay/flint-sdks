[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderEditInput

Nested child of an order: an immutable, completed removal with frozen refund amounts. Refund completion is tracked on the refunds.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `charge_refunds` | Required | Array of [OrderEditChargeRefundInput](../models/OrderEditChargeRefundInput.md#ordereditchargerefundinput) | Explicit charge refunds frozen at commit. Empty when no charges were refunded. |
| `created_at` | Required | string | When the edit committed. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `note` | Optional | string | Internal merchant note. Omitted from buyer and webhook payloads and refund messages. maxLength: `500`. |
| `order_edit_id` | Required | string | Stable ID of this order edit. pattern: `^oed_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"oed_01KEZF7C00A6BQ4TBGWFDJ944A"`. |
| `order_id` | Required | string | The order this edit belongs to. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `reason` | Optional | string | Reason for the edit and its refund. Values: [13 declared values](CreateOrderEditRequestInput.md#createordereditrequestinput-reason-values). |
| `refund_ids` | Required | Array of string | Refunds created for this edit. Empty when no refund is needed or processing has not created it yet. Items: Example: `"ref_01KEZF7C003DTD59WKYHEXYQ1K"`. |
| `refund_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Total money to refund for removed units and charges. May be zero; a zero-value edit creates no refund. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `remove_line_items` | Required | Array of [OrderEditLineRemovalInput](../models/OrderEditLineRemovalInput.md#ordereditlineremovalinput) | Removed units and their refund amounts frozen at commit. |
| `status` | Required | string | Whether this edit has committed. Refund processing has its own status on each refund. Values: `"completed"`. |
| `supported_actions` | Required | Array of string | Contains retry when unrefunded_money is positive and no linked refund is pending. Empty while Flint is still processing the original refund before any linked refund exists; retry becomes available if that processing ends without a refund. Independent of caller permissions. Items values: `"retry"`. |
| `unrefunded_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Frozen refund money not covered by pending or succeeded allocations from refunds linked to this edit. Failed allocations do not reduce it. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

