[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemBundleGiftCardPurchase

Buyer-selected face value and recipient for a gift_card variant. The server freezes the offer and resolves consideration per unit. Omit to purchase the reference denomination without a recipient.

Gift card details for an order line item: the `face_value_money` and the `recipient` who receives the card.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `face_value_money` | Optional | [DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemBundleGiftCardPurchaseFaceValueMoney](../models/DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemBundleGiftCardPurchaseFaceValueMoney.md#deliverypreviewresponsedatadeliveryoptionslineitemsitembundlegiftcardpurchasefacevaluemoney) | Buyer-selected face value within the gift card offer's limits. Currency must be USD. Amount must be between 1 and 200000 minor units, inclusive. The amount and every computed order amount must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment option limits can apply. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `recipient` | Optional | [DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemBundleGiftCardPurchaseRecipient](../models/DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemBundleGiftCardPurchaseRecipient.md#deliverypreviewresponsedatadeliveryoptionslineitemsitembundlegiftcardpurchaserecipient) | Who receives the gift card. `null` when no recipient was set. The recipient of a purchased gift card: `email`, optional `name` and `message`, and an optional `send_at` time. `recipient`: [field definitions](../models/DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemBundleGiftCardPurchase.md#deliverypreviewresponsedatadeliveryoptionslineitemsitembundlegiftcardpurchaserecipient-fields-1). |

### DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemBundleGiftCardPurchase.recipient fields 1

Who receives the gift card. `null` when no recipient was set. The recipient of a purchased gift card: `email`, optional `name` and `message`, and an optional `send_at` time.

Field definitions: [shared fields](GiftCardPurchaseRecipientInput.md#giftcardpurchaserecipientinput).

