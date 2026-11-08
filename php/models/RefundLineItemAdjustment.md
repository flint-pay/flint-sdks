[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RefundLineItemAdjustment

An adjustment on a refunded line item, such as a restocking fee.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `adjustment_type` | Required | string | What kind of adjustment this is. Values: `"restocking_fee"`, `"withheld_amount"`, `"refund_adjustment"`, `"tax_adjustment"`. |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Amount withheld from the line's refund. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `applies_to` | Required | string | Which part of the line the adjustment reduces. Values: `"none"`, `"gross"`, `"tax"`. |
| `reason` | Required | [RefundAdjustmentReason](../models/RefundAdjustmentReason.md#refundadjustmentreason) | Why the amount was withheld. The reason recorded for a refund line item adjustment, as a `code` with an optional description. |
| `refund_line_item_adjustment_id` | Required | string | Unique identifier for this refund line item adjustment, prefixed `rlia_`. |
| `refunded_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Part of the withheld amount that later refunds have returned. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `remaining_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Part of the withheld amount that can still be refunded: `amount_money` less `refunded_money`. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

