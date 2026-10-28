[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemCustomGiftCardPurchase

Buyer-selected face value and recipient for a gift_card variant. The server freezes the offer and resolves consideration per unit. Omit to purchase the reference denomination without a recipient.

Gift card details for an order line item: the `face_value_money` and the `recipient` who receives the card.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `face_value_money` | Optional | [DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemCustomGiftCardPurchaseFaceValueMoney](../models/DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemCustomGiftCardPurchaseFaceValueMoney.md#deliverypreviewscreateresponse200datadeliveryoptionslineitemsitemcustomgiftcardpurchasefacevaluemoney) |  |
| `recipient` | Optional | [DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemCustomGiftCardPurchaseRecipient](../models/DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemCustomGiftCardPurchaseRecipient.md#deliverypreviewscreateresponse200datadeliveryoptionslineitemsitemcustomgiftcardpurchaserecipient) | The recipient of a purchased gift card: `email`, optional `name` and `message`, and an optional `send_at` time. |

