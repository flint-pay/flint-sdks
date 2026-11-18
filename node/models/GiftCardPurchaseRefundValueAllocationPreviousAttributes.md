[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardPurchaseRefundValueAllocationPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The value allocated to the card. `amount_money`: [declared alternatives](../models/GiftCardPurchaseRefundValueAllocationPreviousAttributes.md#giftcardpurchaserefundvalueallocationpreviousattributesamount_money). |
| `gift_card_id` | Optional | string or null | ID of the gift card that received the value. `gift_card_id`: [declared alternatives](../models/GiftCardPurchaseRefundRecoveryDestinationPreviousAttributes.md#giftcardpurchaserefundrecoverydestinationpreviousattributesgift_card_id). |
| `gift_card_load_id` | Optional | string or null | ID of the load that holds the value. `gift_card_load_id`: [declared alternatives](../models/GiftCardPurchaseRefundRecoveryDestinationPreviousAttributes.md#giftcardpurchaserefundrecoverydestinationpreviousattributesgift_card_load_id). |

### GiftCardPurchaseRefundValueAllocationPreviousAttributes.amount_money

The value allocated to the card.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### GiftCardPurchaseRefundValueAllocationPreviousAttributes.amount_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### GiftCardPurchaseRefundValueAllocationPreviousAttributes.amount_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. The value allocated to the card. 

### GiftCardPurchaseRefundValueAllocationPreviousAttributes.amount_money variant 1.amount

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.amount](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1amount).

### GiftCardPurchaseRefundValueAllocationPreviousAttributes.amount_money variant 1.currency

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.currency](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1currency).

### GiftCardPurchaseRefundValueAllocationPreviousAttributes.gift_card_id

Declared alternatives: [GiftCardPurchaseRefundRecoveryDestinationPreviousAttributes.gift_card_id](../models/GiftCardPurchaseRefundRecoveryDestinationPreviousAttributes.md#giftcardpurchaserefundrecoverydestinationpreviousattributesgift_card_id).

### GiftCardPurchaseRefundValueAllocationPreviousAttributes.gift_card_load_id

Declared alternatives: [GiftCardPurchaseRefundRecoveryDestinationPreviousAttributes.gift_card_load_id](../models/GiftCardPurchaseRefundRecoveryDestinationPreviousAttributes.md#giftcardpurchaserefundrecoverydestinationpreviousattributesgift_card_load_id).

