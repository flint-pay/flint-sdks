[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderSettlementAmounts

The bill settlement amounts plus order overpayments, settled tips, debt discharged by final capture, and value order edits removed.

Money collected, returned, waived, and still owed on a bill.



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `dispute_lost_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Principal lost to chargebacks on counted order payments. A later win removes that dispute from this amount. Excludes dispute fees and does not reopen outstanding_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `dispute_lost_money`: [field definitions](../models/OrderSettlementAmounts.md#ordersettlementamountsdispute_lost_money). |
| `disputed_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Principal of open chargebacks on counted order payments. Inquiries and disputes on payment_returned payments contribute zero. Open disputes do not reduce net_collected_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `disputed_money`: [field definitions](../models/OrderSettlementAmounts.md#ordersettlementamountsdisputed_money). |
| `overpaid_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Money collected beyond what the order is owed and not yet refunded. Write-offs do not create overpayments, and neither does value order edits removed: an edit's unrefunded_money reports what it still owes the buyer. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `overpaid_money`: [field definitions](../models/OrderSettlementAmounts.md#ordersettlementamountsoverpaid_money). |
| `released_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Authorized money a final capture released instead of collecting, which the order no longer owes. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `released_money`: [field definitions](../models/OrderSettlementAmounts.md#ordersettlementamountsreleased_money). |
| `removed_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Value order edits removed from the order, which it no longer owes: removed units' value plus each edit's charge_refunds[].amount_money, whether that value was refunded or applied to lines the edit added. Not collected money, so it never changes paid_money or refunded_money. outstanding_money is the total minus paid, written-off, released, and removed money, never below zero. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `removed_money`: [field definitions](../models/OrderSettlementAmounts.md#ordersettlementamountsremoved_money). |
| `settled_tip_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Portion of the collected money settled as tips. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `settled_tip_money`: [field definitions](../models/OrderSettlementAmounts.md#ordersettlementamountssettled_tip_money). |
| `net_collected_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | paid_money minus refunded_money and, on orders, dispute_lost_money, never below zero. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `net_collected_money`: [field definitions](../models/OrderSettlementAmounts.md#ordersettlementamountsnet_collected_money). |
| `outstanding_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Money still owed on the bill, never below zero. Refunds return money already collected and do not add to it. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `outstanding_money`: [field definitions](../models/OrderSettlementAmounts.md#ordersettlementamountsoutstanding_money). |
| `paid_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Money collected toward the bill, net of reversed payments. Excludes written-off debt. On orders, dispute losses do not reduce this amount. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `paid_money`: [field definitions](../models/OrderSettlementAmounts.md#ordersettlementamountspaid_money). |
| `refunded_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Money returned to the buyer from what was collected toward the bill. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `refunded_money`: [field definitions](../models/OrderSettlementAmounts.md#ordersettlementamountsrefunded_money). |
| `written_off_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Owed money waived as uncollectible. Reduces outstanding_money without increasing paid_money or net_collected_money. Cannot be refunded or used to fund an exchange. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `written_off_money`: [field definitions](../models/OrderSettlementAmounts.md#ordersettlementamountswritten_off_money). |

### OrderSettlementAmounts.dispute_lost_money

Principal lost to chargebacks on counted order payments. A later win removes that dispute from this amount. Excludes dispute fees and does not reopen outstanding_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### OrderSettlementAmounts.disputed_money

Principal of open chargebacks on counted order payments. Inquiries and disputes on payment_returned payments contribute zero. Open disputes do not reduce net_collected_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### OrderSettlementAmounts.overpaid_money

Money collected beyond what the order is owed and not yet refunded. Write-offs do not create overpayments, and neither does value order edits removed: an edit's unrefunded_money reports what it still owes the buyer. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### OrderSettlementAmounts.released_money

Authorized money a final capture released instead of collecting, which the order no longer owes. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### OrderSettlementAmounts.removed_money

Value order edits removed from the order, which it no longer owes: removed units' value plus each edit's charge_refunds[].amount_money, whether that value was refunded or applied to lines the edit added. Not collected money, so it never changes paid_money or refunded_money. outstanding_money is the total minus paid, written-off, released, and removed money, never below zero. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### OrderSettlementAmounts.settled_tip_money

Portion of the collected money settled as tips. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### OrderSettlementAmounts.net_collected_money

paid_money minus refunded_money and, on orders, dispute_lost_money, never below zero. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### OrderSettlementAmounts.outstanding_money

Money still owed on the bill, never below zero. Refunds return money already collected and do not add to it. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### OrderSettlementAmounts.paid_money

Money collected toward the bill, net of reversed payments. Excludes written-off debt. On orders, dispute losses do not reduce this amount. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### OrderSettlementAmounts.refunded_money

Money returned to the buyer from what was collected toward the bill. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### OrderSettlementAmounts.written_off_money

Owed money waived as uncollectible. Reduces outstanding_money without increasing paid_money or net_collected_money. Cannot be refunded or used to fund an exchange. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

