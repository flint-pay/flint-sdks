[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RefundLineItemAdjustmentInInput

An adjustment to apply to a refunded line item, such as a restocking fee or withheld amount, and whether it applies to the gross amount or tax.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `adjustment_type` | Required | string | Values: `"restocking_fee"`, `"withheld_amount"`, `"refund_adjustment"`, `"tax_adjustment"`. |
| `amount_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `applies_to` | Required | string | Values: `"none"`, `"gross"`, `"tax"`. |
| `reason` | Optional | [RefundAdjustmentReasonRequestInput](../models/RefundAdjustmentReasonRequestInput.md#refundadjustmentreasonrequestinput) | The reason to record for a refund adjustment, as a `code` with an optional description. |

