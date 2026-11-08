[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RefundLineItemAdjustmentInInput

An adjustment to apply to a refunded line item, such as a restocking fee or withheld amount, and whether it applies to the gross amount or tax.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `adjustment_type` | Required | string | What kind of adjustment this is. Values: `"restocking_fee"`, `"withheld_amount"`, `"refund_adjustment"`, `"tax_adjustment"`. |
| `amount_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Amount to withhold from the line's refund. Above zero, in the refund's currency. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `applies_to` | Required | string | Which part of the line the adjustment reduces. Values: `"none"`, `"gross"`, `"tax"`. |
| `reason` | Required | [RefundAdjustmentReasonRequestInput](../models/RefundAdjustmentReasonRequestInput.md#refundadjustmentreasonrequestinput) | Why the amount is withheld. The reason to record for a refund adjustment, as a `code` with an optional description. |

