[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderSettlementAmountsPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `dispute_lost_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Principal lost to chargebacks on counted order payments. A later win removes that dispute from this amount. Excludes dispute fees and does not reopen outstanding_money. |
| `disputed_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Principal of open chargebacks on counted order payments. Inquiries and disputes on payment_returned payments contribute zero. Open disputes do not reduce net_collected_money. |
| `exchange_refundable_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Remaining money available for an order refund when an exchange affects the order. Excludes return credit and payments reserved for processing refunds or applied to the exchange. Present on affected order reads, including when the amount is zero. |
| `net_collected_money` | Optional | [SignedMoneyPreviousAttributes](../models/SignedMoneyPreviousAttributes.md#signedmoneypreviousattributes) or null | Collected principal: paid_money minus refunded_money minus dispute_lost_money. Can be negative when refunds and lost disputes exceed payments. Excludes processing and dispute fees; open disputes do not reduce this amount. |
| `overpaid_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Money collected beyond what the order is owed and not yet refunded. Write-offs do not create overpayments, and neither does value order edits removed: an edit's unrefunded_money reports what it still owes the buyer. |
| `pending_refund_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Collected order money reserved for refunds that are still processing. It reduces what can be refunded as soon as Flint records the refund. Present when the amount is greater than zero. |
| `released_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Authorized money a final capture released instead of collecting, which the order no longer owes. |
| `removed_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Value order edits removed from the order, which it no longer owes: removed units' value plus each edit's charge_refunds[].amount_money, whether that value was refunded or applied to lines the edit added. This reduces outstanding_money without changing paid_money or refunded_money. |
| `settled_tip_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Portion of the collected money settled as tips. |
| `subscription_credit_refundable_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Remaining money available for an order refund while the order funds a subscription renewal or change. Excludes money reserved for the credit, exchanges, and processing refunds. Present on affected order reads, including when the amount is zero. |
| `outstanding_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Money still owed on the bill, never below zero. Refunds return money already collected and do not add to it. |
| `paid_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Money collected toward the bill, net of reversed payments. Excludes written-off debt. On orders, dispute losses do not reduce this amount. |
| `refunded_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Money returned to the buyer from what was collected toward the bill. On orders, this counts successful refunds. |
| `written_off_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Owed money waived as uncollectible. Reduces outstanding_money without increasing paid_money or net_collected_money. Cannot be refunded or used to fund an exchange. |

