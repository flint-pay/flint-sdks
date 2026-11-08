[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderSettlementAmounts

The bill settlement amounts plus order overpayments, settled tips, and debt discharged by final capture.

Money collected, returned, waived, and still owed on a bill.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `overpaid_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Money collected beyond what the order is owed and not yet refunded. Write-offs do not create overpayments. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `released_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Authorized money a final capture released instead of collecting, which the order no longer owes. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `settled_tip_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Portion of the collected money settled as tips. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `net_collected_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | paid_money minus refunded_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `outstanding_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Money still owed on the bill, never below zero. Refunds return money already collected and do not add to it. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `paid_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Money collected toward the bill, net of reversed payments. Excludes written-off debt. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `refunded_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Money returned to the buyer from what was collected toward the bill. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `written_off_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Owed money waived as uncollectible. Reduces outstanding_money without increasing paid_money or net_collected_money. Cannot be refunded or used to fund an exchange. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

