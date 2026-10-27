[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RefundLineItemAdjustmentIn

An adjustment to apply to a refunded line item, such as a restocking fee or withheld amount, and whether it applies to the gross amount or tax.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `adjustment_type` | Required | string | Values: `"restocking_fee"`, `"withheld_amount"`, `"refund_adjustment"`, `"tax_adjustment"`. |
| `amount_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money). |
| `applies_to` | Required | string | Values: `"none"`, `"gross"`, `"tax"`. |
| `reason` | Optional | [RefundAdjustmentReason](../models/RefundAdjustmentReason.md#refundadjustmentreason) | The reason to record for a refund adjustment, as a `code` with an optional description. `reason`: [field definitions](../models/RefundLineItem.md#refundlineitemtax_adjustment_reason). |

### RefundLineItemAdjustmentIn.amount_money

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money).

### RefundLineItemAdjustmentIn.reason

Field definitions: [RefundLineItem.tax_adjustment_reason](../models/RefundLineItem.md#refundlineitemtax_adjustment_reason).

