[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderEditPreview

A calculation against an order version. Previewing does not create an order edit.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `add_line_items` | Required | Array of [OrderEditPreviewAddition](../models/OrderEditPreviewAddition.md#ordereditpreviewaddition) | The requested additions, in request order, priced and taxed. Empty when the request adds nothing. |
| `added_total_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The cost of the added lines: the sum of add_line_items[].total_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `added_total_money`: [field definitions](../models/OrderEditPreview.md#ordereditpreviewadded_total_money). |
| `amount_due_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | What the added lines cost beyond the removed value and released charges. At most one of refund_money and amount_due_money is above zero, and refund_money minus amount_due_money equals removed_total_money plus the charges' amount_money minus added_total_money. An edit with an amount due can't be committed yet. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_due_money`: [field definitions](../models/OrderEditPreview.md#ordereditpreviewamount_due_money). |
| `based_on_order_version` | Required | integer | The order version this calculation read. Eligibility and the refundable amount can change afterward, so calculate again before relying on it. Format: `int64`. |
| `calculated_at` | Required | string | When this preview was calculated. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `charge_refunds` | Required | Array of [OrderEditChargeRefund](../models/OrderEditChargeRefund.md#ordereditchargerefund) | The charges that would be released, with the value and refund for each. Empty when the request lists no charges. |
| `order_id` | Required | string | The order whose unassigned units were evaluated. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `refund_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Money that would go back to the buyer. The removed value and released charges pay for added lines first, removals in request order and then charges, and the rest is refunded. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `refund_money`: [field definitions](../models/OrderEditPreview.md#ordereditpreviewrefund_money). |
| `remove_line_items` | Required | Array of [OrderEditRemoval](../models/OrderEditRemoval.md#ordereditremoval) | The requested removals, in request order, each with its value and refund. |
| `removed_total_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The value of the removed units: the sum of remove_line_items[].total_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `removed_total_money`: [field definitions](../models/OrderEdit.md#ordereditremoved_total_money). |

### OrderEditPreview.added_total_money

The cost of the added lines: the sum of add_line_items[].total_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### OrderEditPreview.amount_due_money

What the added lines cost beyond the removed value and released charges. At most one of refund_money and amount_due_money is above zero, and refund_money minus amount_due_money equals removed_total_money plus the charges' amount_money minus added_total_money. An edit with an amount due can't be committed yet. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### OrderEditPreview.refund_money

Money that would go back to the buyer. The removed value and released charges pay for added lines first, removals in request order and then charges, and the rest is refunded. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### OrderEditPreview.removed_total_money

Field definitions: [OrderEdit.removed_total_money](../models/OrderEdit.md#ordereditremoved_total_money).

