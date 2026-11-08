[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SettlementAmounts

Money collected, returned, waived, and still owed on a bill.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `net_collected_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | paid_money minus refunded_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `net_collected_money`: [field definitions](../models/OrderSettlementAmounts.md#ordersettlementamountsnet_collected_money). |
| `outstanding_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Money still owed on the bill, never below zero. Refunds return money already collected and do not add to it. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `outstanding_money`: [field definitions](../models/OrderSettlementAmounts.md#ordersettlementamountsoutstanding_money). |
| `paid_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Money collected toward the bill, net of reversed payments. Excludes written-off debt. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `paid_money`: [field definitions](../models/OrderSettlementAmounts.md#ordersettlementamountspaid_money). |
| `refunded_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Money returned to the buyer from what was collected toward the bill. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `refunded_money`: [field definitions](../models/OrderSettlementAmounts.md#ordersettlementamountsrefunded_money). |
| `written_off_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Owed money waived as uncollectible. Reduces outstanding_money without increasing paid_money or net_collected_money. Cannot be refunded or used to fund an exchange. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `written_off_money`: [field definitions](../models/OrderSettlementAmounts.md#ordersettlementamountswritten_off_money). |

### SettlementAmounts.net_collected_money

Field definitions: [OrderSettlementAmounts.net_collected_money](../models/OrderSettlementAmounts.md#ordersettlementamountsnet_collected_money).

### SettlementAmounts.outstanding_money

Field definitions: [OrderSettlementAmounts.outstanding_money](../models/OrderSettlementAmounts.md#ordersettlementamountsoutstanding_money).

### SettlementAmounts.paid_money

Field definitions: [OrderSettlementAmounts.paid_money](../models/OrderSettlementAmounts.md#ordersettlementamountspaid_money).

### SettlementAmounts.refunded_money

Field definitions: [OrderSettlementAmounts.refunded_money](../models/OrderSettlementAmounts.md#ordersettlementamountsrefunded_money).

### SettlementAmounts.written_off_money

Field definitions: [OrderSettlementAmounts.written_off_money](../models/OrderSettlementAmounts.md#ordersettlementamountswritten_off_money).

