[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderEditPreview

A calculation against an order version. Previewing does not create an order edit.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `based_on_order_version` | Required | integer | The order version this calculation read. Eligibility and the refundable amount can change afterward, so calculate again before relying on it. Format: `int64`. |
| `calculated_at` | Required | string | When this preview was calculated. Format: `date-time`. |
| `charge_refunds` | Required | Array of [OrderEditChargeRefund](../models/OrderEditChargeRefund.md#ordereditchargerefund) | The charges that would be refunded, with the amount for each. Empty when the request lists no charges. `charge_refunds[]`: [field definitions](../models/OrderEditPreviewResponse.md#ordereditpreviewresponsedatacharge_refunds). |
| `order_id` | Required | string | The order whose unassigned units were evaluated. |
| `refund_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The total quantity-based item refund plus the explicit charge refunds. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `remove_line_items` | Required | Array of [OrderEditRemoval](../models/OrderEditRemoval.md#ordereditremoval) | The requested removals, in request order, each with its refund. `remove_line_items[]`: [field definitions](../models/OrderEditPreviewResponse.md#ordereditpreviewresponsedataremove_line_items). |

### OrderEditPreview.charge_refunds[]

Field definitions: [OrderEditPreviewResponse.data.charge_refunds[]](../models/OrderEditPreviewResponse.md#ordereditpreviewresponsedatacharge_refunds).

### OrderEditPreview.remove_line_items[]

Field definitions: [OrderEditPreviewResponse.data.remove_line_items[]](../models/OrderEditPreviewResponse.md#ordereditpreviewresponsedataremove_line_items).

