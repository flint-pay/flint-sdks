[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderSettlementAmountsInput

The bill settlement amounts plus order overpayments, settled tips, and debt discharged by final capture.

Money collected, returned, waived, and still owed on a bill.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `overpaid_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Money collected beyond what the order is owed and not yet refunded. Write-offs do not create overpayments. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `released_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Authorized money a final capture released instead of collecting, which the order no longer owes. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `settled_tip_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Portion of the collected money settled as tips. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `net_collected_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | paid_money minus refunded_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `outstanding_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Money still owed on the bill, never below zero. Refunds return money already collected and do not add to it. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `paid_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Money collected toward the bill, net of reversed payments. Excludes written-off debt. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `refunded_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Money returned to the buyer from what was collected toward the bill. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `written_off_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Owed money waived as uncollectible. Reduces outstanding_money without increasing paid_money or net_collected_money. Cannot be refunded or used to fund an exchange. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

