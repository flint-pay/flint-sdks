[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentAttemptGiftCardRedemptionPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The amount reserved on the gift card for this attempt, in USD, including `tip_money`. It is taken from the card only if the attempt succeeds. A failed or canceled attempt releases it. `amount_money`: [declared alternatives](../models/PaymentAttemptGiftCardRedemptionPreviousAttributes.md#paymentattemptgiftcardredemptionpreviousattributesamount_money). |
| `gift_card_id` | Optional | string or null | ID of the gift card redeemed. `gift_card_id`: [declared alternatives](../models/PaymentAttemptGiftCardRedemptionPreviousAttributes.md#paymentattemptgiftcardredemptionpreviousattributesgift_card_id). |
| `gift_card_redemption_id` | Optional | string or null | ID of the redemption that holds this amount on the gift card. `gift_card_redemption_id`: [declared alternatives](../models/PaymentAttemptGiftCardRedemptionPreviousAttributes.md#paymentattemptgiftcardredemptionpreviousattributesgift_card_redemption_id). |
| `last4` | Optional | string or null | Last four characters of the card's current code. `last4`: [declared alternatives](../models/OrderGiftCardSelectionPreviousAttributes.md#ordergiftcardselectionpreviousattributeslast4). |
| `tip_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The part of `amount_money` that is a tip. Zero when the redemption carries no tip. `tip_money`: [declared alternatives](../models/PaymentAttemptGiftCardRedemptionPreviousAttributes.md#paymentattemptgiftcardredemptionpreviousattributestip_money). |

### PaymentAttemptGiftCardRedemptionPreviousAttributes.amount_money

The amount reserved on the gift card for this attempt, in USD, including `tip_money`. It is taken from the card only if the attempt succeeds. A failed or canceled attempt releases it.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### PaymentAttemptGiftCardRedemptionPreviousAttributes.amount_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### PaymentAttemptGiftCardRedemptionPreviousAttributes.amount_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. The amount reserved on the gift card for this attempt, in USD, including `tip_money`. It is taken from the card only if the attempt succeeds. A failed or canceled attempt releases it. 

### PaymentAttemptGiftCardRedemptionPreviousAttributes.amount_money variant 1.amount

Declared alternatives: [BalanceUpdatedInstalledMerchantsEvent.data.previous_attributes.held_money variant 1.amount](../models/BalanceUpdatedInstalledMerchantsEvent.md#balanceupdatedinstalledmerchantseventdataprevious_attributesheld_money-variant-1amount).

### PaymentAttemptGiftCardRedemptionPreviousAttributes.amount_money variant 1.currency

Declared alternatives: [BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.amount_money variant 1.currency](../models/BalanceTransactionUpdatedInstalledMerchantsEvent.md#balancetransactionupdatedinstalledmerchantseventdataprevious_attributesamount_money-variant-1currency).

### PaymentAttemptGiftCardRedemptionPreviousAttributes.gift_card_id

### PaymentAttemptGiftCardRedemptionPreviousAttributes.gift_card_id variant 1

anyOf variant 1: ID of the gift card redeemed..

- Value shape: string. ID of the gift card redeemed. ID of the gift card redeemed. Example: `"gc_01KEZF7C00RT1618WYBM1Y94CG"`. 

### PaymentAttemptGiftCardRedemptionPreviousAttributes.gift_card_id variant 2

anyOf variant 2.

- Value shape: null. ID of the gift card redeemed. 

### PaymentAttemptGiftCardRedemptionPreviousAttributes.gift_card_redemption_id

### PaymentAttemptGiftCardRedemptionPreviousAttributes.gift_card_redemption_id variant 1

anyOf variant 1: ID of the redemption that holds this amount on the gift card..

- Value shape: string. ID of the redemption that holds this amount on the gift card. ID of the redemption that holds this amount on the gift card. Example: `"gcr_01KEZF7C002YD2G2J734RRZTWT"`. 

### PaymentAttemptGiftCardRedemptionPreviousAttributes.gift_card_redemption_id variant 2

anyOf variant 2.

- Value shape: null. ID of the redemption that holds this amount on the gift card. 

### PaymentAttemptGiftCardRedemptionPreviousAttributes.last4

Declared alternatives: [OrderGiftCardSelectionPreviousAttributes.last4](../models/OrderGiftCardSelectionPreviousAttributes.md#ordergiftcardselectionpreviousattributeslast4).

### PaymentAttemptGiftCardRedemptionPreviousAttributes.tip_money

The part of `amount_money` that is a tip. Zero when the redemption carries no tip.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### PaymentAttemptGiftCardRedemptionPreviousAttributes.tip_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### PaymentAttemptGiftCardRedemptionPreviousAttributes.tip_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. The part of `amount_money` that is a tip. Zero when the redemption carries no tip. 

### PaymentAttemptGiftCardRedemptionPreviousAttributes.tip_money variant 1.amount

Declared alternatives: [BalanceUpdatedInstalledMerchantsEvent.data.previous_attributes.held_money variant 1.amount](../models/BalanceUpdatedInstalledMerchantsEvent.md#balanceupdatedinstalledmerchantseventdataprevious_attributesheld_money-variant-1amount).

### PaymentAttemptGiftCardRedemptionPreviousAttributes.tip_money variant 1.currency

Declared alternatives: [BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.amount_money variant 1.currency](../models/BalanceTransactionUpdatedInstalledMerchantsEvent.md#balancetransactionupdatedinstalledmerchantseventdataprevious_attributesamount_money-variant-1currency).

