[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SettlementAmountsPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `net_collected_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | paid_money minus refunded_money and, on orders, dispute_lost_money, never below zero. `net_collected_money`: [declared alternatives](../models/InvoiceSettlementAmountsPreviousAttributes.md#invoicesettlementamountspreviousattributesnet_collected_money). |
| `outstanding_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Money still owed on the bill, never below zero. Refunds return money already collected and do not add to it. `outstanding_money`: [declared alternatives](../models/InvoiceSettlementAmountsPreviousAttributes.md#invoicesettlementamountspreviousattributesoutstanding_money). |
| `paid_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Money collected toward the bill, net of reversed payments. Excludes written-off debt. On orders, dispute losses do not reduce this amount. `paid_money`: [declared alternatives](../models/InvoiceSettlementAmountsPreviousAttributes.md#invoicesettlementamountspreviousattributespaid_money). |
| `refunded_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Money returned to the buyer from what was collected toward the bill. `refunded_money`: [declared alternatives](../models/InvoiceSettlementAmountsPreviousAttributes.md#invoicesettlementamountspreviousattributesrefunded_money). |
| `written_off_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Owed money waived as uncollectible. Reduces outstanding_money without increasing paid_money or net_collected_money. Cannot be refunded or used to fund an exchange. `written_off_money`: [declared alternatives](../models/InvoiceSettlementAmountsPreviousAttributes.md#invoicesettlementamountspreviousattributeswritten_off_money). |

### SettlementAmountsPreviousAttributes.net_collected_money

Declared alternatives: [InvoiceSettlementAmountsPreviousAttributes.net_collected_money](../models/InvoiceSettlementAmountsPreviousAttributes.md#invoicesettlementamountspreviousattributesnet_collected_money).

### SettlementAmountsPreviousAttributes.outstanding_money

Declared alternatives: [InvoiceSettlementAmountsPreviousAttributes.outstanding_money](../models/InvoiceSettlementAmountsPreviousAttributes.md#invoicesettlementamountspreviousattributesoutstanding_money).

### SettlementAmountsPreviousAttributes.paid_money

Declared alternatives: [InvoiceSettlementAmountsPreviousAttributes.paid_money](../models/InvoiceSettlementAmountsPreviousAttributes.md#invoicesettlementamountspreviousattributespaid_money).

### SettlementAmountsPreviousAttributes.refunded_money

Declared alternatives: [InvoiceSettlementAmountsPreviousAttributes.refunded_money](../models/InvoiceSettlementAmountsPreviousAttributes.md#invoicesettlementamountspreviousattributesrefunded_money).

### SettlementAmountsPreviousAttributes.written_off_money

Declared alternatives: [InvoiceSettlementAmountsPreviousAttributes.written_off_money](../models/InvoiceSettlementAmountsPreviousAttributes.md#invoicesettlementamountspreviousattributeswritten_off_money).

