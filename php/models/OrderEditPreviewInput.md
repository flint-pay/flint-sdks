[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderEditPreviewInput

A calculation against an order version. Previewing does not create an order edit.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `add_line_items` | Required | Array of [OrderEditPreviewAdditionInput](../models/OrderEditPreviewAdditionInput.md#ordereditpreviewadditioninput) | The requested additions, in request order, priced and taxed. Empty when the request adds nothing. |
| `added_total_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | The cost of the added lines: the sum of add_line_items[].total_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `amount_due_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | What the added lines cost beyond the removed value and released charges. At most one of refund_money and amount_due_money is above zero, and refund_money minus amount_due_money equals removed_total_money plus the charges' amount_money minus added_total_money. An edit with an amount due can't be committed yet. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `based_on_order_version` | Required | integer | The order version this calculation read. Eligibility and the refundable amount can change afterward, so calculate again before relying on it. Format: `int64`. |
| `calculated_at` | Required | string | When this preview was calculated. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `charge_refunds` | Required | Array of [OrderEditChargeRefundInput](../models/OrderEditChargeRefundInput.md#ordereditchargerefundinput) | The charges that would be released, with the value and refund for each. Empty when the request lists no charges. |
| `order_id` | Required | string | The order whose unassigned units were evaluated. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `refund_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Money that would go back to the buyer. The removed value and released charges pay for added lines first, removals in request order and then charges, and the rest is refunded. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `remove_line_items` | Required | Array of [OrderEditRemovalInput](../models/OrderEditRemovalInput.md#ordereditremovalinput) | The requested removals, in request order, each with its value and refund. |
| `removed_total_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | The value of the removed units: the sum of remove_line_items[].total_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

