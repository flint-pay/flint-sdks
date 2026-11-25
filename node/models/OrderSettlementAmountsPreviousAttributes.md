[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderSettlementAmountsPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `dispute_lost_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Principal lost to chargebacks on counted order payments. A later win removes that dispute from this amount. Excludes dispute fees and does not reopen outstanding_money. `dispute_lost_money`: [declared alternatives](../models/OrderSettlementAmountsPreviousAttributes.md#ordersettlementamountspreviousattributesdispute_lost_money). |
| `disputed_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Principal of open chargebacks on counted order payments. Inquiries and disputes on payment_returned payments contribute zero. Open disputes do not reduce net_collected_money. `disputed_money`: [declared alternatives](../models/OrderSettlementAmountsPreviousAttributes.md#ordersettlementamountspreviousattributesdisputed_money). |
| `exchange_refundable_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Remaining money available for an order refund when an exchange affects the order. Excludes return credit and payments reserved for processing refunds or applied to the exchange. Present on affected order reads, including when the amount is zero. `exchange_refundable_money`: [declared alternatives](../models/OrderSettlementAmountsPreviousAttributes.md#ordersettlementamountspreviousattributesexchange_refundable_money). |
| `net_collected_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Collected principal: paid_money minus refunded_money minus dispute_lost_money. Can be negative when refunds and lost disputes exceed payments. Excludes processing and dispute fees; open disputes do not reduce this amount. `net_collected_money`: [declared alternatives](../models/OrderSettlementAmountsPreviousAttributes.md#ordersettlementamountspreviousattributesnet_collected_money). |
| `overpaid_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Money collected beyond what the order is owed and not yet refunded. Write-offs do not create overpayments, and neither does value order edits removed: an edit's unrefunded_money reports what it still owes the buyer. `overpaid_money`: [declared alternatives](../models/OrderSettlementAmountsPreviousAttributes.md#ordersettlementamountspreviousattributesoverpaid_money). |
| `pending_refund_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Collected order money reserved for refunds that are still processing. It reduces what can be refunded as soon as Flint records the refund. Present when the amount is greater than zero. `pending_refund_money`: [declared alternatives](../models/OrderSettlementAmountsPreviousAttributes.md#ordersettlementamountspreviousattributespending_refund_money). |
| `released_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Authorized money a final capture released instead of collecting, which the order no longer owes. `released_money`: [declared alternatives](../models/OrderSettlementAmountsPreviousAttributes.md#ordersettlementamountspreviousattributesreleased_money). |
| `removed_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Value order edits removed from the order, which it no longer owes: removed units' value plus each edit's charge_refunds[].amount_money, whether that value was refunded or applied to lines the edit added. This reduces outstanding_money without changing paid_money or refunded_money. `removed_money`: [declared alternatives](../models/OrderSettlementAmountsPreviousAttributes.md#ordersettlementamountspreviousattributesremoved_money). |
| `settled_tip_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Portion of the collected money settled as tips. `settled_tip_money`: [declared alternatives](../models/OrderSettlementAmountsPreviousAttributes.md#ordersettlementamountspreviousattributessettled_tip_money). |
| `subscription_credit_refundable_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Remaining money available for an order refund while the order funds a subscription renewal or change. Excludes money reserved for the credit, exchanges, and processing refunds. Present on affected order reads, including when the amount is zero. `subscription_credit_refundable_money`: [declared alternatives](../models/OrderSettlementAmountsPreviousAttributes.md#ordersettlementamountspreviousattributessubscription_credit_refundable_money). |
| `outstanding_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Money still owed on the bill, never below zero. Refunds return money already collected and do not add to it. `outstanding_money`: [declared alternatives](../models/InvoiceSettlementAmountsPreviousAttributes.md#invoicesettlementamountspreviousattributesoutstanding_money). |
| `paid_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Money collected toward the bill, net of reversed payments. Excludes written-off debt. On orders, dispute losses do not reduce this amount. `paid_money`: [declared alternatives](../models/InvoiceSettlementAmountsPreviousAttributes.md#invoicesettlementamountspreviousattributespaid_money). |
| `refunded_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Money returned to the buyer from what was collected toward the bill. On orders, this counts successful refunds. `refunded_money`: [declared alternatives](../models/InvoiceSettlementAmountsPreviousAttributes.md#invoicesettlementamountspreviousattributesrefunded_money). |
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

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.amount](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1amount).

### OrderSettlementAmountsPreviousAttributes.dispute_lost_money variant 1.currency

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.currency](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1currency).

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

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.amount](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1amount).

### OrderSettlementAmountsPreviousAttributes.disputed_money variant 1.currency

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.currency](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1currency).

### OrderSettlementAmountsPreviousAttributes.exchange_refundable_money

Remaining money available for an order refund when an exchange affects the order. Excludes return credit and payments reserved for processing refunds or applied to the exchange. Present on affected order reads, including when the amount is zero.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### OrderSettlementAmountsPreviousAttributes.exchange_refundable_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### OrderSettlementAmountsPreviousAttributes.exchange_refundable_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Remaining money available for an order refund when an exchange affects the order. Excludes return credit and payments reserved for processing refunds or applied to the exchange. Present on affected order reads, including when the amount is zero. 

### OrderSettlementAmountsPreviousAttributes.exchange_refundable_money variant 1.amount

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.amount](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1amount).

### OrderSettlementAmountsPreviousAttributes.exchange_refundable_money variant 1.currency

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.currency](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1currency).

### OrderSettlementAmountsPreviousAttributes.net_collected_money

Collected principal: paid_money minus refunded_money minus dispute_lost_money. Can be negative when refunds and lost disputes exceed payments. Excludes processing and dispute fees; open disputes do not reduce this amount.

Field definitions: [shared fields](BalanceTransactionUpdatedInstalledMerchantsEvent.md#balancetransactionupdatedinstalledmerchantseventdataprevious_attributesamount_money).

### OrderSettlementAmountsPreviousAttributes.net_collected_money variant 1

anyOf SignedMoneyPreviousAttributes.

- Optional: `amount`, `currency`.

### OrderSettlementAmountsPreviousAttributes.net_collected_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Collected principal: paid_money minus refunded_money minus dispute_lost_money. Can be negative when refunds and lost disputes exceed payments. Excludes processing and dispute fees; open disputes do not reduce this amount. 

### OrderSettlementAmountsPreviousAttributes.net_collected_money variant 1.amount

Declared alternatives: [BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.amount_money variant 1.amount](../models/BalanceTransactionUpdatedInstalledMerchantsEvent.md#balancetransactionupdatedinstalledmerchantseventdataprevious_attributesamount_money-variant-1amount).

### OrderSettlementAmountsPreviousAttributes.net_collected_money variant 1.currency

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.currency](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1currency).

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

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.amount](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1amount).

### OrderSettlementAmountsPreviousAttributes.overpaid_money variant 1.currency

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.currency](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1currency).

### OrderSettlementAmountsPreviousAttributes.pending_refund_money

Collected order money reserved for refunds that are still processing. It reduces what can be refunded as soon as Flint records the refund. Present when the amount is greater than zero.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### OrderSettlementAmountsPreviousAttributes.pending_refund_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### OrderSettlementAmountsPreviousAttributes.pending_refund_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Collected order money reserved for refunds that are still processing. It reduces what can be refunded as soon as Flint records the refund. Present when the amount is greater than zero. 

### OrderSettlementAmountsPreviousAttributes.pending_refund_money variant 1.amount

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.amount](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1amount).

### OrderSettlementAmountsPreviousAttributes.pending_refund_money variant 1.currency

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.currency](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1currency).

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

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.amount](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1amount).

### OrderSettlementAmountsPreviousAttributes.released_money variant 1.currency

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.currency](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1currency).

### OrderSettlementAmountsPreviousAttributes.removed_money

Value order edits removed from the order, which it no longer owes: removed units' value plus each edit's charge_refunds[].amount_money, whether that value was refunded or applied to lines the edit added. This reduces outstanding_money without changing paid_money or refunded_money.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### OrderSettlementAmountsPreviousAttributes.removed_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### OrderSettlementAmountsPreviousAttributes.removed_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Value order edits removed from the order, which it no longer owes: removed units' value plus each edit's charge_refunds[].amount_money, whether that value was refunded or applied to lines the edit added. This reduces outstanding_money without changing paid_money or refunded_money. 

### OrderSettlementAmountsPreviousAttributes.removed_money variant 1.amount

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.amount](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1amount).

### OrderSettlementAmountsPreviousAttributes.removed_money variant 1.currency

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.currency](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1currency).

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

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.amount](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1amount).

### OrderSettlementAmountsPreviousAttributes.settled_tip_money variant 1.currency

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.currency](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1currency).

### OrderSettlementAmountsPreviousAttributes.subscription_credit_refundable_money

Remaining money available for an order refund while the order funds a subscription renewal or change. Excludes money reserved for the credit, exchanges, and processing refunds. Present on affected order reads, including when the amount is zero.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### OrderSettlementAmountsPreviousAttributes.subscription_credit_refundable_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### OrderSettlementAmountsPreviousAttributes.subscription_credit_refundable_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Remaining money available for an order refund while the order funds a subscription renewal or change. Excludes money reserved for the credit, exchanges, and processing refunds. Present on affected order reads, including when the amount is zero. 

### OrderSettlementAmountsPreviousAttributes.subscription_credit_refundable_money variant 1.amount

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.amount](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1amount).

### OrderSettlementAmountsPreviousAttributes.subscription_credit_refundable_money variant 1.currency

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.currency](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1currency).

### OrderSettlementAmountsPreviousAttributes.outstanding_money

Declared alternatives: [InvoiceSettlementAmountsPreviousAttributes.outstanding_money](../models/InvoiceSettlementAmountsPreviousAttributes.md#invoicesettlementamountspreviousattributesoutstanding_money).

### OrderSettlementAmountsPreviousAttributes.paid_money

Declared alternatives: [InvoiceSettlementAmountsPreviousAttributes.paid_money](../models/InvoiceSettlementAmountsPreviousAttributes.md#invoicesettlementamountspreviousattributespaid_money).

### OrderSettlementAmountsPreviousAttributes.refunded_money

Declared alternatives: [InvoiceSettlementAmountsPreviousAttributes.refunded_money](../models/InvoiceSettlementAmountsPreviousAttributes.md#invoicesettlementamountspreviousattributesrefunded_money).

### OrderSettlementAmountsPreviousAttributes.written_off_money

Declared alternatives: [InvoiceSettlementAmountsPreviousAttributes.written_off_money](../models/InvoiceSettlementAmountsPreviousAttributes.md#invoicesettlementamountspreviousattributeswritten_off_money).

