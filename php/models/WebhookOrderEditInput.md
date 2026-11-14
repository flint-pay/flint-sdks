[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## WebhookOrderEditInput

The resource snapshot, without expansions. Webhooks omit these fields: `note`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `add_line_items` | Required | Array of [OrderEditLineAdditionInput](../models/OrderEditLineAdditionInput.md#ordereditlineadditioninput) | Added order lines, in request order, with their quantities and values frozen at commit. Empty when the edit added nothing. |
| `added_total_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | The cost of the added lines: the sum of add_line_items[].total_money. Zero when the edit added nothing. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `charge_refunds` | Required | Array of [OrderEditChargeRefundInput](../models/OrderEditChargeRefundInput.md#ordereditchargerefundinput) | Charges released by this edit, frozen at commit. Empty when no charges were released. |
| `created_at` | Required | string | When the edit committed. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `order_edit_id` | Required | string | Stable ID of this order edit. pattern: `^oed_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"oed_01KEZF7C00A6BQ4TBGWFDJ944A"`. |
| `order_id` | Required | string | The order this edit belongs to. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `reason` | Optional | string | Reason for the edit and its refund. Values: [13 declared values](CreateOrderEditRequestInput.md#createordereditrequestinput-reason-values). |
| `refund_ids` | Required | Array of string | Refunds created for this edit. Empty when no refund is needed or processing has not created it yet. Items: Example: `"ref_01KEZF7C003DTD59WKYHEXYQ1K"`. |
| `refund_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Money to refund after the removed value and released charges pay for added lines. May be zero; an edit with no refund money creates no refund. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `remove_line_items` | Required | Array of [OrderEditLineRemovalInput](../models/OrderEditLineRemovalInput.md#ordereditlineremovalinput) | Removed units and their refund amounts frozen at commit. |
| `removed_total_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | The value of the removed units: the sum of remove_line_items[].total_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `status` | Required | string | Whether this edit has committed. Refund processing has its own status on each refund. Values: `"completed"`. |
| `supported_actions` | Required | Array of string | Contains retry when unrefunded_money is positive and no linked refund is pending. Empty while Flint is still processing the original refund before any linked refund exists; retry becomes available if that processing ends without a refund. Independent of caller permissions. Items values: `"retry"`. |
| `unrefunded_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Frozen refund money not covered by pending or succeeded allocations from refunds linked to this edit. Failed allocations do not reduce it. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

