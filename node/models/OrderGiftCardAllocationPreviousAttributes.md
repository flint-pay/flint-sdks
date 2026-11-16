[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderGiftCardAllocationPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | `amount_money`: [declared alternatives](../models/OrderGiftCardAllocationPreviousAttributes.md#ordergiftcardallocationpreviousattributes-variant-1amount_money), [declared alternatives](../models/OrderGiftCardAllocationPreviousAttributes.md#ordergiftcardallocationpreviousattributes-variant-2amount_money). |
| `gift_card_id` | Optional | string or null | `gift_card_id`: [declared alternatives](../models/OrderGiftCardAllocationPreviousAttributes.md#ordergiftcardallocationpreviousattributes-variant-1gift_card_id), [declared alternatives](../models/GiftCardPurchaseRefundRecoveryDestinationPreviousAttributes.md#giftcardpurchaserefundrecoverydestinationpreviousattributesgift_card_id). |

### OrderGiftCardAllocationPreviousAttributes variant 1

anyOf variant 1: Declared schema OrderGiftCardAllocationPreviousAttributes. .

- Constraints for `amount_money`: The amount this gift card covers.
- Constraints for `gift_card_id`: ID of the gift card the amount is taken from.

### OrderGiftCardAllocationPreviousAttributes variant 2

anyOf variant 2: Declared schema RefundGiftCardDestinationPreviousAttributes. .

- Constraints for `amount_money`: Amount credited to this gift card.
- Constraints for `gift_card_id`: ID of the gift card that received the value.

### OrderGiftCardAllocationPreviousAttributes variant 1.amount_money

The amount this gift card covers.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### OrderGiftCardAllocationPreviousAttributes variant 1.amount_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### OrderGiftCardAllocationPreviousAttributes variant 1.amount_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. The amount this gift card covers. 

### OrderGiftCardAllocationPreviousAttributes variant 1.amount_money variant 1.amount

Declared alternatives: [BalanceUpdatedInstalledMerchantsEvent.data.previous_attributes.held_money variant 1.amount](../models/BalanceUpdatedInstalledMerchantsEvent.md#balanceupdatedinstalledmerchantseventdataprevious_attributesheld_money-variant-1amount).

### OrderGiftCardAllocationPreviousAttributes variant 1.amount_money variant 1.currency

Declared alternatives: [BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.amount_money variant 1.currency](../models/BalanceTransactionUpdatedInstalledMerchantsEvent.md#balancetransactionupdatedinstalledmerchantseventdataprevious_attributesamount_money-variant-1currency).

### OrderGiftCardAllocationPreviousAttributes variant 1.gift_card_id

### OrderGiftCardAllocationPreviousAttributes variant 1.gift_card_id variant 1

anyOf variant 1: ID of the gift card the amount is taken from..

- Value shape: string. ID of the gift card the amount is taken from. ID of the gift card the amount is taken from. Example: `"gc_01KEZF7C00RT1618WYBM1Y94CG"`. 

### OrderGiftCardAllocationPreviousAttributes variant 1.gift_card_id variant 2

anyOf variant 2.

- Value shape: null. ID of the gift card the amount is taken from. 

### OrderGiftCardAllocationPreviousAttributes variant 2.amount_money

Amount credited to this gift card.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### OrderGiftCardAllocationPreviousAttributes variant 2.amount_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### OrderGiftCardAllocationPreviousAttributes variant 2.amount_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Amount credited to this gift card. 

### OrderGiftCardAllocationPreviousAttributes variant 2.amount_money variant 1.amount

Declared alternatives: [BalanceUpdatedInstalledMerchantsEvent.data.previous_attributes.held_money variant 1.amount](../models/BalanceUpdatedInstalledMerchantsEvent.md#balanceupdatedinstalledmerchantseventdataprevious_attributesheld_money-variant-1amount).

### OrderGiftCardAllocationPreviousAttributes variant 2.amount_money variant 1.currency

Declared alternatives: [BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.amount_money variant 1.currency](../models/BalanceTransactionUpdatedInstalledMerchantsEvent.md#balancetransactionupdatedinstalledmerchantseventdataprevious_attributesamount_money-variant-1currency).

### OrderGiftCardAllocationPreviousAttributes variant 2.gift_card_id

Declared alternatives: [GiftCardPurchaseRefundRecoveryDestinationPreviousAttributes.gift_card_id](../models/GiftCardPurchaseRefundRecoveryDestinationPreviousAttributes.md#giftcardpurchaserefundrecoverydestinationpreviousattributesgift_card_id).

