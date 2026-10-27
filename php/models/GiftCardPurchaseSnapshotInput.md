[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardPurchaseSnapshotInput

The gift card purchase details saved on an order line item: configuration, face value, price paid, and recipient.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Required | [GiftCardProductConfigurationInput](../models/GiftCardProductConfigurationInput.md#giftcardproductconfigurationinput) or null |  |
| `consideration_money` | Required | object | `consideration_money`: [field definitions](../models/GiftCardPurchaseDetailsRequestInput.md#giftcardpurchasedetailsrequestinputface_value_money). |
| `face_value_money` | Required | object | `face_value_money`: [field definitions](../models/GiftCardPurchaseDetailsRequestInput.md#giftcardpurchasedetailsrequestinputface_value_money). |
| `recipient` | Optional | [GiftCardPurchaseRecipientInput](../models/GiftCardPurchaseRecipientInput.md#giftcardpurchaserecipientinput) | The recipient of a purchased gift card: `email`, optional `name` and `message`, and an optional `send_at` time. |
| `reference_price_money` | Required | object | `reference_price_money`: [field definitions](../models/GiftCardPurchaseDetailsRequestInput.md#giftcardpurchasedetailsrequestinputface_value_money). |

### GiftCardPurchaseSnapshotInput.consideration_money

Field definitions: [GiftCardPurchaseDetailsRequestInput.face_value_money](../models/GiftCardPurchaseDetailsRequestInput.md#giftcardpurchasedetailsrequestinputface_value_money).

### GiftCardPurchaseSnapshotInput.face_value_money

Field definitions: [GiftCardPurchaseDetailsRequestInput.face_value_money](../models/GiftCardPurchaseDetailsRequestInput.md#giftcardpurchasedetailsrequestinputface_value_money).

### GiftCardPurchaseSnapshotInput.reference_price_money

Field definitions: [GiftCardPurchaseDetailsRequestInput.face_value_money](../models/GiftCardPurchaseDetailsRequestInput.md#giftcardpurchasedetailsrequestinputface_value_money).

