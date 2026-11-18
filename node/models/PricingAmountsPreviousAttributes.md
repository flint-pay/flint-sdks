[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PricingAmountsPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `additive_tax_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Tax added on top of prices, included in total_money. `additive_tax_money`: [declared alternatives](../models/PricingAmountsPreviousAttributes.md#pricingamountspreviousattributesadditive_tax_money). |
| `charge_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Total of the order's service charges after service-charge discounts. `charge_money`: [declared alternatives](../models/PricingAmountsPreviousAttributes.md#pricingamountspreviousattributescharge_money). |
| `discount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Total of order and line-item discounts. Service-charge discounts, such as free shipping, are not included; they reduce charge_money. `discount_money`: [declared alternatives](../models/PricingAmountsPreviousAttributes.md#pricingamountspreviousattributesdiscount_money). |
| `inclusive_tax_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Tax already included in subtotal_money and charge_money. Informational; it is not added again to total_money. `inclusive_tax_money`: [declared alternatives](../models/PricingAmountsPreviousAttributes.md#pricingamountspreviousattributesinclusive_tax_money). |
| `requested_tip_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Tip money in the total: the requested tip before payment, and settled tips net of refunds after. `requested_tip_money`: [declared alternatives](../models/PricingAmountsPreviousAttributes.md#pricingamountspreviousattributesrequested_tip_money). |
| `subtotal_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Sum of the line items' subtotal_money: prices with modifiers, before discounts. Lines with tax-inclusive prices include their tax here. `subtotal_money`: [declared alternatives](../models/PricingAmountsPreviousAttributes.md#pricingamountspreviousattributessubtotal_money). |
| `tax_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Total tax, equal to additive_tax_money + inclusive_tax_money. `tax_money`: [declared alternatives](../models/PricingAmountsPreviousAttributes.md#pricingamountspreviousattributestax_money). |
| `total_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | subtotal_money - discount_money + charge_money + additive_tax_money + requested_tip_money, never below zero. `total_money`: [declared alternatives](../models/PricingAmountsPreviousAttributes.md#pricingamountspreviousattributestotal_money). |

### PricingAmountsPreviousAttributes.additive_tax_money

Tax added on top of prices, included in total_money.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### PricingAmountsPreviousAttributes.additive_tax_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### PricingAmountsPreviousAttributes.additive_tax_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Tax added on top of prices, included in total_money. 

### PricingAmountsPreviousAttributes.additive_tax_money variant 1.amount

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.amount](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1amount).

### PricingAmountsPreviousAttributes.additive_tax_money variant 1.currency

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.currency](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1currency).

### PricingAmountsPreviousAttributes.charge_money

Total of the order's service charges after service-charge discounts.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### PricingAmountsPreviousAttributes.charge_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### PricingAmountsPreviousAttributes.charge_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Total of the order's service charges after service-charge discounts. 

### PricingAmountsPreviousAttributes.charge_money variant 1.amount

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.amount](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1amount).

### PricingAmountsPreviousAttributes.charge_money variant 1.currency

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.currency](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1currency).

### PricingAmountsPreviousAttributes.discount_money

Total of order and line-item discounts. Service-charge discounts, such as free shipping, are not included; they reduce charge_money.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### PricingAmountsPreviousAttributes.discount_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### PricingAmountsPreviousAttributes.discount_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Total of order and line-item discounts. Service-charge discounts, such as free shipping, are not included; they reduce charge_money. 

### PricingAmountsPreviousAttributes.discount_money variant 1.amount

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.amount](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1amount).

### PricingAmountsPreviousAttributes.discount_money variant 1.currency

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.currency](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1currency).

### PricingAmountsPreviousAttributes.inclusive_tax_money

Tax already included in subtotal_money and charge_money. Informational; it is not added again to total_money.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### PricingAmountsPreviousAttributes.inclusive_tax_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### PricingAmountsPreviousAttributes.inclusive_tax_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Tax already included in subtotal_money and charge_money. Informational; it is not added again to total_money. 

### PricingAmountsPreviousAttributes.inclusive_tax_money variant 1.amount

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.amount](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1amount).

### PricingAmountsPreviousAttributes.inclusive_tax_money variant 1.currency

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.currency](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1currency).

### PricingAmountsPreviousAttributes.requested_tip_money

Tip money in the total: the requested tip before payment, and settled tips net of refunds after.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### PricingAmountsPreviousAttributes.requested_tip_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### PricingAmountsPreviousAttributes.requested_tip_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Tip money in the total: the requested tip before payment, and settled tips net of refunds after. 

### PricingAmountsPreviousAttributes.requested_tip_money variant 1.amount

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.amount](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1amount).

### PricingAmountsPreviousAttributes.requested_tip_money variant 1.currency

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.currency](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1currency).

### PricingAmountsPreviousAttributes.subtotal_money

Sum of the line items' subtotal_money: prices with modifiers, before discounts. Lines with tax-inclusive prices include their tax here.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### PricingAmountsPreviousAttributes.subtotal_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### PricingAmountsPreviousAttributes.subtotal_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Sum of the line items' subtotal_money: prices with modifiers, before discounts. Lines with tax-inclusive prices include their tax here. 

### PricingAmountsPreviousAttributes.subtotal_money variant 1.amount

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.amount](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1amount).

### PricingAmountsPreviousAttributes.subtotal_money variant 1.currency

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.currency](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1currency).

### PricingAmountsPreviousAttributes.tax_money

Total tax, equal to additive_tax_money + inclusive_tax_money.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### PricingAmountsPreviousAttributes.tax_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### PricingAmountsPreviousAttributes.tax_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Total tax, equal to additive_tax_money + inclusive_tax_money. 

### PricingAmountsPreviousAttributes.tax_money variant 1.amount

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.amount](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1amount).

### PricingAmountsPreviousAttributes.tax_money variant 1.currency

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.currency](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1currency).

### PricingAmountsPreviousAttributes.total_money

subtotal_money - discount_money + charge_money + additive_tax_money + requested_tip_money, never below zero.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### PricingAmountsPreviousAttributes.total_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### PricingAmountsPreviousAttributes.total_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. subtotal_money - discount_money + charge_money + additive_tax_money + requested_tip_money, never below zero. 

### PricingAmountsPreviousAttributes.total_money variant 1.amount

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.amount](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1amount).

### PricingAmountsPreviousAttributes.total_money variant 1.currency

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.currency](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1currency).

