[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RefundLineItemAdjustmentInput

An adjustment on a refunded line item, such as a restocking fee.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `adjustment_type` | Required | string | What kind of adjustment this is. Values: `"restocking_fee"`, `"withheld_amount"`, `"refund_adjustment"`, `"tax_adjustment"`. |
| `amount_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Amount withheld from the line's refund. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `applies_to` | Required | string | Which part of the line the adjustment reduces. Values: `"none"`, `"gross"`, `"tax"`. |
| `reason` | Required | [RefundAdjustmentReasonInput](../models/RefundAdjustmentReasonInput.md#refundadjustmentreasoninput) | Why the amount was withheld. The reason recorded for a refund line item adjustment, as a `code` with an optional description. |
| `refund_line_item_adjustment_id` | Required | string | Unique identifier for this refund line item adjustment, prefixed `rlia_`. Example: `"rlia_01KEZF7C00GA968004EWM2QQBC"`. |
| `refunded_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Part of the withheld amount that later refunds have returned. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `remaining_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Part of the withheld amount that can still be refunded: `amount_money` less `refunded_money`. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

