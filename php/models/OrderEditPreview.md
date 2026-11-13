[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderEditPreview

A calculation against an order version. Previewing does not create an order edit.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `add_line_items` | Required | Array of [OrderEditPreviewAddition](../models/OrderEditPreviewAddition.md#ordereditpreviewaddition) | The requested additions, in request order, priced and taxed. Empty when the request adds nothing. `add_line_items[]`: [field definitions](../models/OrderEditPreviewResponse.md#ordereditpreviewresponsedataadd_line_items). |
| `added_total_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The cost of the added lines: the sum of add_line_items[].total_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `amount_due_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | What the added lines cost beyond the removed value and released charges. At most one of refund_money and amount_due_money is above zero, and refund_money minus amount_due_money equals removed_total_money plus the charges' amount_money minus added_total_money. An edit with an amount due can't be committed yet. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `based_on_order_version` | Required | integer | The order version this calculation read. Eligibility and the refundable amount can change afterward, so calculate again before relying on it. Format: `int64`. |
| `calculated_at` | Required | string | When this preview was calculated. Format: `date-time`. |
| `charge_refunds` | Required | Array of [OrderEditChargeRefund](../models/OrderEditChargeRefund.md#ordereditchargerefund) | The charges that would be released, with the value and refund for each. Empty when the request lists no charges. `charge_refunds[]`: [field definitions](../models/OrderEditPreviewResponse.md#ordereditpreviewresponsedatacharge_refunds). |
| `order_id` | Required | string | The order whose unassigned units were evaluated. |
| `refund_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Money that would go back to the buyer. The removed value and released charges pay for added lines first, removals in request order and then charges, and the rest is refunded. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `remove_line_items` | Required | Array of [OrderEditRemoval](../models/OrderEditRemoval.md#ordereditremoval) | The requested removals, in request order, each with its value and refund. `remove_line_items[]`: [field definitions](../models/OrderEditPreviewResponse.md#ordereditpreviewresponsedataremove_line_items). |
| `removed_total_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The value of the removed units: the sum of remove_line_items[].total_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

### OrderEditPreview.add_line_items[]

Field definitions: [OrderEditPreviewResponse.data.add_line_items[]](../models/OrderEditPreviewResponse.md#ordereditpreviewresponsedataadd_line_items).

### OrderEditPreview.charge_refunds[]

Field definitions: [OrderEditPreviewResponse.data.charge_refunds[]](../models/OrderEditPreviewResponse.md#ordereditpreviewresponsedatacharge_refunds).

### OrderEditPreview.remove_line_items[]

Field definitions: [OrderEditPreviewResponse.data.remove_line_items[]](../models/OrderEditPreviewResponse.md#ordereditpreviewresponsedataremove_line_items).

