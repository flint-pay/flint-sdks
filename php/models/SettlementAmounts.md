[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SettlementAmounts

How much of an order has been paid, refunded, credited, written off, and settled as tips, and what balance and outstanding amount remain.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `balance_money` | Required | [SignedMoney](../models/SignedMoney.md#signedmoney) | outstanding_money minus credit_money. Negative when the order holds money beyond its total that has not been returned. Signed monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `credit_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Money collected beyond the order total and not yet refunded. Write-offs do not create credit. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `net_collected_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Payments collected for the order minus money refunded to the buyer. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `outstanding_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | What is still left to collect: the order total minus paid_money and written_off_money, never below zero. Refunds return money already collected and do not add to it. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `paid_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Settled payments and applied return credit. Excludes written-off invoice balances. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `refunded_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Money returned to the buyer from what this order collected. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `settled_tip_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Portion of the collected money settled as tips. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `written_off_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Invoice debt no longer owed. Reduces outstanding_money without increasing paid_money, net_collected_money, or credit_money. Cannot be refunded or used to fund an exchange. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

