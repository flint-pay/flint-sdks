[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemVariantGiftCardPurchase

Buyer-selected face value and recipient for a gift_card variant. The server freezes the offer and resolves consideration per unit. Omit to purchase the reference denomination without a recipient.

Gift card details for an order line item: the `face_value_money` and the `recipient` who receives the card.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `face_value_money` | Optional | [DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemVariantGiftCardPurchaseFaceValueMoney](../models/DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemVariantGiftCardPurchaseFaceValueMoney.md#deliverypreviewresponsedatadeliveryoptionslineitemsitemvariantgiftcardpurchasefacevaluemoney) | Buyer-selected face value within the gift card offer's limits. The amount and every computed order amount must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment option limits can apply. |
| `recipient` | Optional | [DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemVariantGiftCardPurchaseRecipient](../models/DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemVariantGiftCardPurchaseRecipient.md#deliverypreviewresponsedatadeliveryoptionslineitemsitemvariantgiftcardpurchaserecipient) | The recipient of a purchased gift card: `email`, optional `name` and `message`, and an optional `send_at` time. |

