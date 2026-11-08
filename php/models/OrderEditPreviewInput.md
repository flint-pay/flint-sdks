[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderEditPreviewInput

A calculation against an order version. Previewing does not create an order edit.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `based_on_order_version` | Required | integer | The order version this calculation read. Eligibility and the refundable amount can change afterward, so calculate again before relying on it. Format: `int64`. |
| `calculated_at` | Required | string | When this preview was calculated. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `charge_refunds` | Required | Array of [OrderEditChargeRefundInput](../models/OrderEditChargeRefundInput.md#ordereditchargerefundinput) | The charges that would be refunded, with the amount for each. Empty when the request lists no charges. |
| `order_id` | Required | string | The order whose unassigned units were evaluated. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `refund_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | The total quantity-based item refund plus the explicit charge refunds. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `remove_line_items` | Required | Array of [OrderEditRemovalInput](../models/OrderEditRemovalInput.md#ordereditremovalinput) | The requested removals, in request order, each with its refund. |

