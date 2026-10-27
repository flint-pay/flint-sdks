[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RefundLineItemAdjustmentRefundIn

An amount to refund back against an earlier line item adjustment, identified by `refund_line_item_adjustment_id`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money). |
| `refund_line_item_adjustment_id` | Required | string | minLength: `1`. |

### RefundLineItemAdjustmentRefundIn.amount_money

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money).

