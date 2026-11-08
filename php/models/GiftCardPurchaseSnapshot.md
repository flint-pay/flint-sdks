[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardPurchaseSnapshot

The gift card purchase details saved on an order line item: configuration, face value, price paid, and recipient.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Required | [GiftCardProductConfiguration](../models/GiftCardProductConfiguration.md#giftcardproductconfiguration) or null | The gift card offer's terms as they were when the line was added: price mode, face value, and any custom amount bounds. |
| `consideration_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Price paid per unit for this gift card purchase. Currency must be USD. Amount must be between 1 and 200000 minor units, inclusive. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `face_value_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Gift card value issued per unit for this purchase. Currency must be USD. Amount must be between 1 and 200000 minor units, inclusive. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `recipient` | Optional | [GiftCardPurchaseRecipient](../models/GiftCardPurchaseRecipient.md#giftcardpurchaserecipient) | Who receives the gift card. `null` when no recipient was set. The recipient of a purchased gift card: `email`, optional `name` and `message`, and an optional `send_at` time. `recipient`: [field definitions](../models/DeliveryPreviewResponse.md#deliverypreviewresponsedata-variant-1line_itemsgift_card_purchaserecipient). |
| `reference_price_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Reference price per unit from the frozen gift card offer. Currency must be USD. Amount must be between 1 and 200000 minor units, inclusive. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

### GiftCardPurchaseSnapshot.recipient

Field definitions: [DeliveryPreviewResponse.data variant 1.line_items[].gift_card_purchase.recipient](../models/DeliveryPreviewResponse.md#deliverypreviewresponsedata-variant-1line_itemsgift_card_purchaserecipient).

