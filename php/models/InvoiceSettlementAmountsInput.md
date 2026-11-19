[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceSettlementAmountsInput

The bill settlement amounts plus credit notes, the amount due now, and late fees. Invoice paid_money includes late-fee payments and excludes reversed payments. Refunds and card chargeback losses do not reopen outstanding_money or reduce paid_money. net_collected_money is paid_money minus refunded_money, never below zero.

Money collected, returned, waived, and still owed on a bill.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `credited_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Credit note credit allocated to this invoice, minus reversed allocations. Unallocated credit is not included. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `currently_due_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | The part of outstanding_money due now. Without schedule_entries, it equals outstanding_money. With schedule_entries, it is the outstanding amount of the first entry, in schedule order, whose due date has started and that still has a balance, or 0 when there is none. This is the amount the next collect call or checkout session charges. Always 0 unless the invoice is open or partially_paid. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `late_fee_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Late fees assessed after issue, minus waivers, including amounts since paid or written off. Itemized in late_fees. Excluded from pricing_amounts.total_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `net_collected_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | paid_money minus refunded_money, never below zero. Dispute losses do not reduce this invoice amount. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `outstanding_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Money still owed on the bill, never below zero. Refunds return money already collected and do not add to it. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `paid_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Money collected toward the bill, net of reversed payments. Excludes written-off debt. On orders, dispute losses do not reduce this amount. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `refunded_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Money returned to the buyer from what was collected toward the bill. On orders, this counts successful refunds. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `written_off_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Owed money waived as uncollectible. Reduces outstanding_money without increasing paid_money or net_collected_money. Cannot be refunded or used to fund an exchange. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

