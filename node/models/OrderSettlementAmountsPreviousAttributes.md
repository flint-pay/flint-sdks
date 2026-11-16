[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderSettlementAmountsPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `dispute_lost_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Principal lost to chargebacks on counted order payments. A later win removes that dispute from this amount. Excludes dispute fees and does not reopen outstanding_money. `dispute_lost_money`: [declared alternatives](../models/OrderSettlementAmountsPreviousAttributes.md#ordersettlementamountspreviousattributesdispute_lost_money). |
| `disputed_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Principal of open chargebacks on counted order payments. Inquiries and disputes on payment_returned payments contribute zero. Open disputes do not reduce net_collected_money. `disputed_money`: [declared alternatives](../models/OrderSettlementAmountsPreviousAttributes.md#ordersettlementamountspreviousattributesdisputed_money). |
| `overpaid_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Money collected beyond what the order is owed and not yet refunded. Write-offs do not create overpayments, and neither does value order edits removed: an edit's unrefunded_money reports what it still owes the buyer. `overpaid_money`: [declared alternatives](../models/OrderSettlementAmountsPreviousAttributes.md#ordersettlementamountspreviousattributesoverpaid_money). |
| `released_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Authorized money a final capture released instead of collecting, which the order no longer owes. `released_money`: [declared alternatives](../models/OrderSettlementAmountsPreviousAttributes.md#ordersettlementamountspreviousattributesreleased_money). |
| `removed_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Value order edits removed from the order, which it no longer owes: removed units' value plus each edit's charge_refunds[].amount_money, whether that value was refunded or applied to lines the edit added. Not collected money, so it never changes paid_money or refunded_money. outstanding_money is the total minus paid, written-off, released, and removed money, never below zero. `removed_money`: [declared alternatives](../models/OrderSettlementAmountsPreviousAttributes.md#ordersettlementamountspreviousattributesremoved_money). |
| `settled_tip_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Portion of the collected money settled as tips. `settled_tip_money`: [declared alternatives](../models/OrderSettlementAmountsPreviousAttributes.md#ordersettlementamountspreviousattributessettled_tip_money). |
| `net_collected_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | paid_money minus refunded_money and, on orders, dispute_lost_money, never below zero. `net_collected_money`: [declared alternatives](../models/InvoiceSettlementAmountsPreviousAttributes.md#invoicesettlementamountspreviousattributesnet_collected_money). |
| `outstanding_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Money still owed on the bill, never below zero. Refunds return money already collected and do not add to it. `outstanding_money`: [declared alternatives](../models/InvoiceSettlementAmountsPreviousAttributes.md#invoicesettlementamountspreviousattributesoutstanding_money). |
| `paid_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Money collected toward the bill, net of reversed payments. Excludes written-off debt. On orders, dispute losses do not reduce this amount. `paid_money`: [declared alternatives](../models/InvoiceSettlementAmountsPreviousAttributes.md#invoicesettlementamountspreviousattributespaid_money). |
| `refunded_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Money returned to the buyer from what was collected toward the bill. `refunded_money`: [declared alternatives](../models/InvoiceSettlementAmountsPreviousAttributes.md#invoicesettlementamountspreviousattributesrefunded_money). |
| `written_off_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Owed money waived as uncollectible. Reduces outstanding_money without increasing paid_money or net_collected_money. Cannot be refunded or used to fund an exchange. `written_off_money`: [declared alternatives](../models/InvoiceSettlementAmountsPreviousAttributes.md#invoicesettlementamountspreviousattributeswritten_off_money). |

### OrderSettlementAmountsPreviousAttributes.dispute_lost_money

Principal lost to chargebacks on counted order payments. A later win removes that dispute from this amount. Excludes dispute fees and does not reopen outstanding_money.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### OrderSettlementAmountsPreviousAttributes.dispute_lost_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### OrderSettlementAmountsPreviousAttributes.dispute_lost_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Principal lost to chargebacks on counted order payments. A later win removes that dispute from this amount. Excludes dispute fees and does not reopen outstanding_money. 

### OrderSettlementAmountsPreviousAttributes.dispute_lost_money variant 1.amount

Declared alternatives: [BalanceUpdatedInstalledMerchantsEvent.data.previous_attributes.held_money variant 1.amount](../models/BalanceUpdatedInstalledMerchantsEvent.md#balanceupdatedinstalledmerchantseventdataprevious_attributesheld_money-variant-1amount).

### OrderSettlementAmountsPreviousAttributes.dispute_lost_money variant 1.currency

Declared alternatives: [BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.amount_money variant 1.currency](../models/BalanceTransactionUpdatedInstalledMerchantsEvent.md#balancetransactionupdatedinstalledmerchantseventdataprevious_attributesamount_money-variant-1currency).

### OrderSettlementAmountsPreviousAttributes.disputed_money

Principal of open chargebacks on counted order payments. Inquiries and disputes on payment_returned payments contribute zero. Open disputes do not reduce net_collected_money.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### OrderSettlementAmountsPreviousAttributes.disputed_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### OrderSettlementAmountsPreviousAttributes.disputed_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Principal of open chargebacks on counted order payments. Inquiries and disputes on payment_returned payments contribute zero. Open disputes do not reduce net_collected_money. 

### OrderSettlementAmountsPreviousAttributes.disputed_money variant 1.amount

Declared alternatives: [BalanceUpdatedInstalledMerchantsEvent.data.previous_attributes.held_money variant 1.amount](../models/BalanceUpdatedInstalledMerchantsEvent.md#balanceupdatedinstalledmerchantseventdataprevious_attributesheld_money-variant-1amount).

### OrderSettlementAmountsPreviousAttributes.disputed_money variant 1.currency

Declared alternatives: [BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.amount_money variant 1.currency](../models/BalanceTransactionUpdatedInstalledMerchantsEvent.md#balancetransactionupdatedinstalledmerchantseventdataprevious_attributesamount_money-variant-1currency).

### OrderSettlementAmountsPreviousAttributes.overpaid_money

Money collected beyond what the order is owed and not yet refunded. Write-offs do not create overpayments, and neither does value order edits removed: an edit's unrefunded_money reports what it still owes the buyer.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### OrderSettlementAmountsPreviousAttributes.overpaid_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### OrderSettlementAmountsPreviousAttributes.overpaid_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Money collected beyond what the order is owed and not yet refunded. Write-offs do not create overpayments, and neither does value order edits removed: an edit's unrefunded_money reports what it still owes the buyer. 

### OrderSettlementAmountsPreviousAttributes.overpaid_money variant 1.amount

Declared alternatives: [BalanceUpdatedInstalledMerchantsEvent.data.previous_attributes.held_money variant 1.amount](../models/BalanceUpdatedInstalledMerchantsEvent.md#balanceupdatedinstalledmerchantseventdataprevious_attributesheld_money-variant-1amount).

### OrderSettlementAmountsPreviousAttributes.overpaid_money variant 1.currency

Declared alternatives: [BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.amount_money variant 1.currency](../models/BalanceTransactionUpdatedInstalledMerchantsEvent.md#balancetransactionupdatedinstalledmerchantseventdataprevious_attributesamount_money-variant-1currency).

### OrderSettlementAmountsPreviousAttributes.released_money

Authorized money a final capture released instead of collecting, which the order no longer owes.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### OrderSettlementAmountsPreviousAttributes.released_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### OrderSettlementAmountsPreviousAttributes.released_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Authorized money a final capture released instead of collecting, which the order no longer owes. 

### OrderSettlementAmountsPreviousAttributes.released_money variant 1.amount

Declared alternatives: [BalanceUpdatedInstalledMerchantsEvent.data.previous_attributes.held_money variant 1.amount](../models/BalanceUpdatedInstalledMerchantsEvent.md#balanceupdatedinstalledmerchantseventdataprevious_attributesheld_money-variant-1amount).

### OrderSettlementAmountsPreviousAttributes.released_money variant 1.currency

Declared alternatives: [BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.amount_money variant 1.currency](../models/BalanceTransactionUpdatedInstalledMerchantsEvent.md#balancetransactionupdatedinstalledmerchantseventdataprevious_attributesamount_money-variant-1currency).

### OrderSettlementAmountsPreviousAttributes.removed_money

Value order edits removed from the order, which it no longer owes: removed units' value plus each edit's charge_refunds[].amount_money, whether that value was refunded or applied to lines the edit added. Not collected money, so it never changes paid_money or refunded_money. outstanding_money is the total minus paid, written-off, released, and removed money, never below zero.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### OrderSettlementAmountsPreviousAttributes.removed_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### OrderSettlementAmountsPreviousAttributes.removed_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Value order edits removed from the order, which it no longer owes: removed units' value plus each edit's charge_refunds[].amount_money, whether that value was refunded or applied to lines the edit added. Not collected money, so it never changes paid_money or refunded_money. outstanding_money is the total minus paid, written-off, released, and removed money, never below zero. 

### OrderSettlementAmountsPreviousAttributes.removed_money variant 1.amount

Declared alternatives: [BalanceUpdatedInstalledMerchantsEvent.data.previous_attributes.held_money variant 1.amount](../models/BalanceUpdatedInstalledMerchantsEvent.md#balanceupdatedinstalledmerchantseventdataprevious_attributesheld_money-variant-1amount).

### OrderSettlementAmountsPreviousAttributes.removed_money variant 1.currency

Declared alternatives: [BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.amount_money variant 1.currency](../models/BalanceTransactionUpdatedInstalledMerchantsEvent.md#balancetransactionupdatedinstalledmerchantseventdataprevious_attributesamount_money-variant-1currency).

### OrderSettlementAmountsPreviousAttributes.settled_tip_money

Portion of the collected money settled as tips.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### OrderSettlementAmountsPreviousAttributes.settled_tip_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### OrderSettlementAmountsPreviousAttributes.settled_tip_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Portion of the collected money settled as tips. 

### OrderSettlementAmountsPreviousAttributes.settled_tip_money variant 1.amount

Declared alternatives: [BalanceUpdatedInstalledMerchantsEvent.data.previous_attributes.held_money variant 1.amount](../models/BalanceUpdatedInstalledMerchantsEvent.md#balanceupdatedinstalledmerchantseventdataprevious_attributesheld_money-variant-1amount).

### OrderSettlementAmountsPreviousAttributes.settled_tip_money variant 1.currency

Declared alternatives: [BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.amount_money variant 1.currency](../models/BalanceTransactionUpdatedInstalledMerchantsEvent.md#balancetransactionupdatedinstalledmerchantseventdataprevious_attributesamount_money-variant-1currency).

### OrderSettlementAmountsPreviousAttributes.net_collected_money

Declared alternatives: [InvoiceSettlementAmountsPreviousAttributes.net_collected_money](../models/InvoiceSettlementAmountsPreviousAttributes.md#invoicesettlementamountspreviousattributesnet_collected_money).

### OrderSettlementAmountsPreviousAttributes.outstanding_money

Declared alternatives: [InvoiceSettlementAmountsPreviousAttributes.outstanding_money](../models/InvoiceSettlementAmountsPreviousAttributes.md#invoicesettlementamountspreviousattributesoutstanding_money).

### OrderSettlementAmountsPreviousAttributes.paid_money

Declared alternatives: [InvoiceSettlementAmountsPreviousAttributes.paid_money](../models/InvoiceSettlementAmountsPreviousAttributes.md#invoicesettlementamountspreviousattributespaid_money).

### OrderSettlementAmountsPreviousAttributes.refunded_money

Declared alternatives: [InvoiceSettlementAmountsPreviousAttributes.refunded_money](../models/InvoiceSettlementAmountsPreviousAttributes.md#invoicesettlementamountspreviousattributesrefunded_money).

### OrderSettlementAmountsPreviousAttributes.written_off_money

Declared alternatives: [InvoiceSettlementAmountsPreviousAttributes.written_off_money](../models/InvoiceSettlementAmountsPreviousAttributes.md#invoicesettlementamountspreviousattributeswritten_off_money).

