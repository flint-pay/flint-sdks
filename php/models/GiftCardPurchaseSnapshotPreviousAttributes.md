[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardPurchaseSnapshotPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Optional | [GiftCardProductConfigurationPreviousAttributes](../models/GiftCardProductConfigurationPreviousAttributes.md#giftcardproductconfigurationpreviousattributes) or null | The gift card offer's terms as they were when the line was added: price mode, face value, and any custom amount bounds. |
| `consideration_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Price paid per unit for this gift card purchase. Currency must be USD. Amount must be between 1 and 200000 minor units, inclusive. |
| `face_value_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Gift card value issued per unit for this purchase. Currency must be USD. Amount must be between 1 and 200000 minor units, inclusive. |
| `recipient` | Optional | [GiftCardPurchaseRecipientPreviousAttributes](../models/GiftCardPurchaseRecipientPreviousAttributes.md#giftcardpurchaserecipientpreviousattributes) or null | Who receives the gift card. `null` when no recipient was set. `recipient`: [declared alternatives](../models/GiftCardPurchaseSnapshotPreviousAttributes.md#giftcardpurchasesnapshotpreviousattributesrecipient). |
| `reference_price_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Reference price per unit from the frozen gift card offer. Currency must be USD. Amount must be between 1 and 200000 minor units, inclusive. |

### GiftCardPurchaseSnapshotPreviousAttributes.recipient

Who receives the gift card. `null` when no recipient was set.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `email` | Conditional | string or null | Email address the gift card is delivered to. `email`: [declared alternatives](../models/GiftCardPurchaseSnapshotPreviousAttributes.md#giftcardpurchasesnapshotpreviousattributesrecipient-variant-1email). |
| `message` | Conditional | string or null | Personal message included with the gift card. `message`: [declared alternatives](../models/GiftCardPurchaseRecipientPreviousAttributes.md#giftcardpurchaserecipientpreviousattributesmessage). |
| `name` | Conditional | string or null | Name of the person receiving the gift card. `name`: [declared alternatives](../models/GiftCardPurchaseRecipientPreviousAttributes.md#giftcardpurchaserecipientpreviousattributesname). |
| `send_at` | Conditional | string or null | Optional send time between now and 90 days from now. Omission requests immediate recipient notification after funding. `send_at`: [declared alternatives](../models/GiftCardPurchaseSnapshotPreviousAttributes.md#giftcardpurchasesnapshotpreviousattributesrecipient-variant-1send_at). |

### GiftCardPurchaseSnapshotPreviousAttributes.recipient variant 1

anyOf GiftCardPurchaseRecipientPreviousAttributes.

- Optional: `email`, `message`, `name`, `send_at`.

### GiftCardPurchaseSnapshotPreviousAttributes.recipient variant 2

anyOf variant 2.

- Undeclared: `email`, `message`, `name`, `send_at`.
- Value shape: null. Who receives the gift card. `null` when no recipient was set. 

### GiftCardPurchaseSnapshotPreviousAttributes.recipient variant 1.email

### GiftCardPurchaseSnapshotPreviousAttributes.recipient variant 1.email variant 1

anyOf variant 1: Email address the gift card is delivered to..

- Value shape: string. Email address the gift card is delivered to. Email address the gift card is delivered to. Format: `email`. minLength: `1`. maxLength: `254`. Example: `"buyer@example.com"`. 

### GiftCardPurchaseSnapshotPreviousAttributes.recipient variant 1.email variant 2

anyOf variant 2.

- Value shape: null. Email address the gift card is delivered to. 

### GiftCardPurchaseSnapshotPreviousAttributes.recipient variant 1.message

Declared alternatives: [GiftCardPurchaseRecipientPreviousAttributes.message](../models/GiftCardPurchaseRecipientPreviousAttributes.md#giftcardpurchaserecipientpreviousattributesmessage).

### GiftCardPurchaseSnapshotPreviousAttributes.recipient variant 1.name

Declared alternatives: [GiftCardPurchaseRecipientPreviousAttributes.name](../models/GiftCardPurchaseRecipientPreviousAttributes.md#giftcardpurchaserecipientpreviousattributesname).

### GiftCardPurchaseSnapshotPreviousAttributes.recipient variant 1.send_at

### GiftCardPurchaseSnapshotPreviousAttributes.recipient variant 1.send_at variant 1

anyOf variant 1: Optional send time between now and 90 days from now. Omission requests immediate recipient notification after funding..

- Value shape: string. Optional send time between now and 90 days from now. Omission requests immediate recipient notification after funding. Optional send time between now and 90 days from now. Omission requests immediate recipient notification after funding. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### GiftCardPurchaseSnapshotPreviousAttributes.recipient variant 1.send_at variant 2

anyOf variant 2.

- Value shape: null. Optional send time between now and 90 days from now. Omission requests immediate recipient notification after funding. 

