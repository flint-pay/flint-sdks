[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SettlementAmounts

Money collected, returned, waived, and still owed on a bill.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `outstanding_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Money still owed on the bill, never below zero. Refunds return money already collected and do not add to it. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `outstanding_money`: [field definitions](../models/InvoiceSettlementAmounts.md#invoicesettlementamountsoutstanding_money). |
| `paid_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Money collected toward the bill, net of reversed payments. Excludes written-off debt. On orders, dispute losses do not reduce this amount. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `paid_money`: [field definitions](../models/InvoiceSettlementAmounts.md#invoicesettlementamountspaid_money). |
| `refunded_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Money returned to the buyer from what was collected toward the bill. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `refunded_money`: [field definitions](../models/InvoiceSettlementAmounts.md#invoicesettlementamountsrefunded_money). |
| `written_off_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Owed money waived as uncollectible. Reduces outstanding_money without increasing paid_money or net_collected_money. Cannot be refunded or used to fund an exchange. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `written_off_money`: [field definitions](../models/InvoiceSettlementAmounts.md#invoicesettlementamountswritten_off_money). |

### SettlementAmounts.outstanding_money

Field definitions: [InvoiceSettlementAmounts.outstanding_money](../models/InvoiceSettlementAmounts.md#invoicesettlementamountsoutstanding_money).

### SettlementAmounts.paid_money

Field definitions: [InvoiceSettlementAmounts.paid_money](../models/InvoiceSettlementAmounts.md#invoicesettlementamountspaid_money).

### SettlementAmounts.refunded_money

Field definitions: [InvoiceSettlementAmounts.refunded_money](../models/InvoiceSettlementAmounts.md#invoicesettlementamountsrefunded_money).

### SettlementAmounts.written_off_money

Field definitions: [InvoiceSettlementAmounts.written_off_money](../models/InvoiceSettlementAmounts.md#invoicesettlementamountswritten_off_money).

