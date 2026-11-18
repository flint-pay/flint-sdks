[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardCustomAmountBoundsPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `maximum_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Largest gift card value buyers can choose, in the face value currency. Currency must be USD. Amount must be between 1 and 200000 minor units, inclusive. `maximum_money`: [declared alternatives](../models/GiftCardCustomAmountBoundsPreviousAttributes.md#giftcardcustomamountboundspreviousattributesmaximum_money). |
| `minimum_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Smallest gift card value buyers can choose, in the face value currency. Currency must be USD. Amount must be between 1 and 200000 minor units, inclusive. `minimum_money`: [declared alternatives](../models/GiftCardCustomAmountBoundsPreviousAttributes.md#giftcardcustomamountboundspreviousattributesminimum_money). |

### GiftCardCustomAmountBoundsPreviousAttributes.maximum_money

Largest gift card value buyers can choose, in the face value currency. Currency must be USD. Amount must be between 1 and 200000 minor units, inclusive.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### GiftCardCustomAmountBoundsPreviousAttributes.maximum_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### GiftCardCustomAmountBoundsPreviousAttributes.maximum_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Largest gift card value buyers can choose, in the face value currency. Currency must be USD. Amount must be between 1 and 200000 minor units, inclusive. 

### GiftCardCustomAmountBoundsPreviousAttributes.maximum_money variant 1.amount

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.amount](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1amount).

### GiftCardCustomAmountBoundsPreviousAttributes.maximum_money variant 1.currency

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.currency](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1currency).

### GiftCardCustomAmountBoundsPreviousAttributes.minimum_money

Smallest gift card value buyers can choose, in the face value currency. Currency must be USD. Amount must be between 1 and 200000 minor units, inclusive.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### GiftCardCustomAmountBoundsPreviousAttributes.minimum_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### GiftCardCustomAmountBoundsPreviousAttributes.minimum_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Smallest gift card value buyers can choose, in the face value currency. Currency must be USD. Amount must be between 1 and 200000 minor units, inclusive. 

### GiftCardCustomAmountBoundsPreviousAttributes.minimum_money variant 1.amount

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.amount](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1amount).

### GiftCardCustomAmountBoundsPreviousAttributes.minimum_money variant 1.currency

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.currency](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1currency).

