[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SettlementAmounts

How much of an order has been paid, refunded, credited, written off, and settled as tips, and what balance and outstanding amount remain.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `balance_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | outstanding_money minus credit_money. Negative when the order holds money beyond its total that has not been returned. Signed monetary amount represented as integer minor units plus an ISO 4217 currency code. `balance_money`: [field definitions](../models/SettlementAmounts.md#settlementamountsbalance_money). |
| `credit_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Money collected beyond the order total and not yet refunded. Write-offs do not create credit. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `credit_money`: [field definitions](../models/SettlementAmounts.md#settlementamountscredit_money). |
| `net_collected_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Payments collected for the order minus money refunded to the buyer. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `net_collected_money`: [field definitions](../models/SettlementAmounts.md#settlementamountsnet_collected_money). |
| `outstanding_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | What is still left to collect: the order total minus paid_money and written_off_money, never below zero. Refunds return money already collected and do not add to it. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `outstanding_money`: [field definitions](../models/SettlementAmounts.md#settlementamountsoutstanding_money). |
| `paid_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Settled payments and applied return credit. Excludes written-off invoice balances. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `paid_money`: [field definitions](../models/SettlementAmounts.md#settlementamountspaid_money). |
| `refunded_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Money returned to the buyer from what this order collected. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `refunded_money`: [field definitions](../models/SettlementAmounts.md#settlementamountsrefunded_money). |
| `settled_tip_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Portion of the collected money settled as tips. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `settled_tip_money`: [field definitions](../models/SettlementAmounts.md#settlementamountssettled_tip_money). |
| `written_off_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Invoice debt no longer owed. Reduces outstanding_money without increasing paid_money, net_collected_money, or credit_money. Cannot be refunded or used to fund an exchange. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `written_off_money`: [field definitions](../models/SettlementAmounts.md#settlementamountswritten_off_money). |

### SettlementAmounts.balance_money

outstanding_money minus credit_money. Negative when the order holds money beyond its total that has not been returned. Signed monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](Balance.md#balanceavailable_by_source_type).

### SettlementAmounts.credit_money

Money collected beyond the order total and not yet refunded. Write-offs do not create credit. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### SettlementAmounts.net_collected_money

Payments collected for the order minus money refunded to the buyer. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### SettlementAmounts.outstanding_money

What is still left to collect: the order total minus paid_money and written_off_money, never below zero. Refunds return money already collected and do not add to it. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### SettlementAmounts.paid_money

Settled payments and applied return credit. Excludes written-off invoice balances. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### SettlementAmounts.refunded_money

Money returned to the buyer from what this order collected. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### SettlementAmounts.settled_tip_money

Portion of the collected money settled as tips. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### SettlementAmounts.written_off_money

Invoice debt no longer owed. Reduces outstanding_money without increasing paid_money, net_collected_money, or credit_money. Cannot be refunded or used to fund an exchange. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

