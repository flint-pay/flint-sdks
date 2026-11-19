[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardPurchaseSnapshotPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Optional | [GiftCardProductConfigurationPreviousAttributes](../models/GiftCardProductConfigurationPreviousAttributes.md#giftcardproductconfigurationpreviousattributes) or null | The gift card offer's terms as they were when the line was added: price mode, face value, and any custom amount bounds. |
| `consideration_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Price paid per unit for this gift card purchase. Currency must be USD. Amount must be between 1 and 200000 minor units, inclusive. `consideration_money`: [declared alternatives](../models/GiftCardPurchaseSnapshotPreviousAttributes.md#giftcardpurchasesnapshotpreviousattributesconsideration_money). |
| `face_value_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Gift card value issued per unit for this purchase. Currency must be USD. Amount must be between 1 and 200000 minor units, inclusive. `face_value_money`: [declared alternatives](../models/GiftCardPurchaseSnapshotPreviousAttributes.md#giftcardpurchasesnapshotpreviousattributesface_value_money). |
| `recipient` | Optional | [GiftCardPurchaseRecipientPreviousAttributes](../models/GiftCardPurchaseRecipientPreviousAttributes.md#giftcardpurchaserecipientpreviousattributes) or null | Who receives the gift card. `null` when no recipient was set. |
| `reference_price_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Reference price per unit from the frozen gift card offer. Currency must be USD. Amount must be between 1 and 200000 minor units, inclusive. `reference_price_money`: [declared alternatives](../models/GiftCardPurchaseSnapshotPreviousAttributes.md#giftcardpurchasesnapshotpreviousattributesreference_price_money). |

### GiftCardPurchaseSnapshotPreviousAttributes.consideration_money

Price paid per unit for this gift card purchase. Currency must be USD. Amount must be between 1 and 200000 minor units, inclusive.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### GiftCardPurchaseSnapshotPreviousAttributes.consideration_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### GiftCardPurchaseSnapshotPreviousAttributes.consideration_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Price paid per unit for this gift card purchase. Currency must be USD. Amount must be between 1 and 200000 minor units, inclusive. 

### GiftCardPurchaseSnapshotPreviousAttributes.consideration_money variant 1.amount

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.amount](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1amount).

### GiftCardPurchaseSnapshotPreviousAttributes.consideration_money variant 1.currency

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.currency](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1currency).

### GiftCardPurchaseSnapshotPreviousAttributes.face_value_money

Gift card value issued per unit for this purchase. Currency must be USD. Amount must be between 1 and 200000 minor units, inclusive.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### GiftCardPurchaseSnapshotPreviousAttributes.face_value_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### GiftCardPurchaseSnapshotPreviousAttributes.face_value_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Gift card value issued per unit for this purchase. Currency must be USD. Amount must be between 1 and 200000 minor units, inclusive. 

### GiftCardPurchaseSnapshotPreviousAttributes.face_value_money variant 1.amount

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.amount](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1amount).

### GiftCardPurchaseSnapshotPreviousAttributes.face_value_money variant 1.currency

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.currency](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1currency).

### GiftCardPurchaseSnapshotPreviousAttributes.reference_price_money

Reference price per unit from the frozen gift card offer. Currency must be USD. Amount must be between 1 and 200000 minor units, inclusive.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### GiftCardPurchaseSnapshotPreviousAttributes.reference_price_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### GiftCardPurchaseSnapshotPreviousAttributes.reference_price_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Reference price per unit from the frozen gift card offer. Currency must be USD. Amount must be between 1 and 200000 minor units, inclusive. 

### GiftCardPurchaseSnapshotPreviousAttributes.reference_price_money variant 1.amount

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.amount](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1amount).

### GiftCardPurchaseSnapshotPreviousAttributes.reference_price_money variant 1.currency

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.currency](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1currency).

