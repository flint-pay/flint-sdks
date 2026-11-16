[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardPurchaseRefundRecoveryDestinationPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `gift_card_id` | Optional | string or null | ID of the gift card that received the value. `gift_card_id`: [declared alternatives](../models/GiftCardPurchaseRefundRecoveryDestinationPreviousAttributes.md#giftcardpurchaserefundrecoverydestinationpreviousattributesgift_card_id). |
| `gift_card_load_id` | Optional | string or null | ID of the load that holds the value. `gift_card_load_id`: [declared alternatives](../models/GiftCardPurchaseRefundRecoveryDestinationPreviousAttributes.md#giftcardpurchaserefundrecoverydestinationpreviousattributesgift_card_load_id). |
| `value_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The value restored to the card. `value_money`: [declared alternatives](../models/GiftCardPurchaseRefundRecoveryDestinationPreviousAttributes.md#giftcardpurchaserefundrecoverydestinationpreviousattributesvalue_money). |

### GiftCardPurchaseRefundRecoveryDestinationPreviousAttributes.gift_card_id

### GiftCardPurchaseRefundRecoveryDestinationPreviousAttributes.gift_card_id variant 1

anyOf variant 1: ID of the gift card that received the value..

- Value shape: string. ID of the gift card that received the value. ID of the gift card that received the value. Example: `"gc_01KEZF7C00RT1618WYBM1Y94CG"`. 

### GiftCardPurchaseRefundRecoveryDestinationPreviousAttributes.gift_card_id variant 2

anyOf variant 2.

- Value shape: null. ID of the gift card that received the value. 

### GiftCardPurchaseRefundRecoveryDestinationPreviousAttributes.gift_card_load_id

### GiftCardPurchaseRefundRecoveryDestinationPreviousAttributes.gift_card_load_id variant 1

anyOf variant 1: ID of the load that holds the value..

- Value shape: string. ID of the load that holds the value. ID of the load that holds the value. Example: `"gcl_01KEZF7C00YJED2857SE0J6KWC"`. 

### GiftCardPurchaseRefundRecoveryDestinationPreviousAttributes.gift_card_load_id variant 2

anyOf variant 2.

- Value shape: null. ID of the load that holds the value. 

### GiftCardPurchaseRefundRecoveryDestinationPreviousAttributes.value_money

The value restored to the card.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### GiftCardPurchaseRefundRecoveryDestinationPreviousAttributes.value_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### GiftCardPurchaseRefundRecoveryDestinationPreviousAttributes.value_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. The value restored to the card. 

### GiftCardPurchaseRefundRecoveryDestinationPreviousAttributes.value_money variant 1.amount

Declared alternatives: [BalanceUpdatedInstalledMerchantsEvent.data.previous_attributes.held_money variant 1.amount](../models/BalanceUpdatedInstalledMerchantsEvent.md#balanceupdatedinstalledmerchantseventdataprevious_attributesheld_money-variant-1amount).

### GiftCardPurchaseRefundRecoveryDestinationPreviousAttributes.value_money variant 1.currency

Declared alternatives: [BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.amount_money variant 1.currency](../models/BalanceTransactionUpdatedInstalledMerchantsEvent.md#balancetransactionupdatedinstalledmerchantseventdataprevious_attributesamount_money-variant-1currency).

