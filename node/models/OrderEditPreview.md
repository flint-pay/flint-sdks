[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderEditPreview

A calculation against an order version. Previewing does not create an order edit.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `based_on_order_version` | Required | integer | The order version this calculation read. Eligibility and the refundable amount can change afterward, so calculate again before relying on it. Format: `int64`. |
| `calculated_at` | Required | string | When this preview was calculated. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `charge_refunds` | Required | Array of [OrderEditChargeRefund](../models/OrderEditChargeRefund.md#ordereditchargerefund) | The charges that would be refunded, with the amount for each. Empty when the request lists no charges. |
| `order_id` | Required | string | The order whose unassigned units were evaluated. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `refund_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The total quantity-based item refund plus the explicit charge refunds. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `refund_money`: [field definitions](../models/OrderEditPreview.md#ordereditpreviewrefund_money). |
| `remove_line_items` | Required | Array of [OrderEditRemoval](../models/OrderEditRemoval.md#ordereditremoval) | The requested removals, in request order, each with its refund. |

### OrderEditPreview.refund_money

The total quantity-based item refund plus the explicit charge refunds. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

