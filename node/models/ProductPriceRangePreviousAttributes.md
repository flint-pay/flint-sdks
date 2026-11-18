[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ProductPriceRangePreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `max_unit_price_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Highest unit price among the product's active variants. `max_unit_price_money`: [declared alternatives](../models/ProductPriceRangePreviousAttributes.md#productpricerangepreviousattributesmax_unit_price_money). |
| `min_unit_price_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Lowest unit price among the product's active variants. `min_unit_price_money`: [declared alternatives](../models/ProductPriceRangePreviousAttributes.md#productpricerangepreviousattributesmin_unit_price_money). |

### ProductPriceRangePreviousAttributes.max_unit_price_money

Highest unit price among the product's active variants.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### ProductPriceRangePreviousAttributes.max_unit_price_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### ProductPriceRangePreviousAttributes.max_unit_price_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Highest unit price among the product's active variants. 

### ProductPriceRangePreviousAttributes.max_unit_price_money variant 1.amount

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.amount](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1amount).

### ProductPriceRangePreviousAttributes.max_unit_price_money variant 1.currency

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.currency](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1currency).

### ProductPriceRangePreviousAttributes.min_unit_price_money

Lowest unit price among the product's active variants.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### ProductPriceRangePreviousAttributes.min_unit_price_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### ProductPriceRangePreviousAttributes.min_unit_price_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Lowest unit price among the product's active variants. 

### ProductPriceRangePreviousAttributes.min_unit_price_money variant 1.amount

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.amount](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1amount).

### ProductPriceRangePreviousAttributes.min_unit_price_money variant 1.currency

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.currency](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1currency).

