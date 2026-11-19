[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceSettlementAmountsPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `credited_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Credit note credit allocated to this invoice, minus reversed allocations. Unallocated credit is not included. |
| `currently_due_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | The part of outstanding_money due now. Without schedule_entries, it equals outstanding_money. With schedule_entries, it is the outstanding amount of the first entry, in schedule order, whose due date has started and that still has a balance, or 0 when there is none. This is the amount the next collect call or checkout session charges. Always 0 unless the invoice is open or partially_paid. |
| `late_fee_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Late fees assessed after issue, minus waivers, including amounts since paid or written off. Itemized in late_fees. Excluded from pricing_amounts.total_money. |
| `net_collected_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | paid_money minus refunded_money, never below zero. Dispute losses do not reduce this invoice amount. |
| `outstanding_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Money still owed on the bill, never below zero. Refunds return money already collected and do not add to it. |
| `paid_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Money collected toward the bill, net of reversed payments. Excludes written-off debt. On orders, dispute losses do not reduce this amount. |
| `refunded_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Money returned to the buyer from what was collected toward the bill. On orders, this counts successful refunds. |
| `written_off_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Owed money waived as uncollectible. Reduces outstanding_money without increasing paid_money or net_collected_money. Cannot be refunded or used to fund an exchange. |

