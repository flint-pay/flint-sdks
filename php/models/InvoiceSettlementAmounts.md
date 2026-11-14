[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceSettlementAmounts

The bill settlement amounts plus credit notes, the amount due now, and late fees. Invoice paid_money includes late-fee payments and excludes reversed payments. Refunds and dispute losses do not reopen outstanding_money or reduce paid_money. net_collected_money is paid_money minus refunded_money, never below zero.

Money collected, returned, waived, and still owed on a bill.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `credited_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Credit note credit allocated to this invoice, minus reversed allocations. Unallocated credit is not included. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `currently_due_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The part of outstanding_money due now. Without schedule_entries, it equals outstanding_money. With schedule_entries, it is the outstanding amount of the first entry, in schedule order, whose due date has started and that still has a balance, or 0 when there is none. This is the amount the next collect call or checkout session charges. Always 0 unless the invoice is open or partially_paid. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `late_fee_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Late fees assessed after issue, minus waivers, including amounts since paid or written off. Itemized in late_fees. Excluded from pricing_amounts.total_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `net_collected_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | paid_money minus refunded_money and, on orders, dispute_lost_money, never below zero. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `outstanding_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Money still owed on the bill, never below zero. Refunds return money already collected and do not add to it. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `paid_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Money collected toward the bill, net of reversed payments. Excludes written-off debt. On orders, dispute losses do not reduce this amount. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `refunded_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Money returned to the buyer from what was collected toward the bill. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `written_off_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Owed money waived as uncollectible. Reduces outstanding_money without increasing paid_money or net_collected_money. Cannot be refunded or used to fund an exchange. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

