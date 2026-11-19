[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardPurchaseRecipientPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `email` | Optional | string or null | Email address the gift card is delivered to. `email`: [declared alternatives](../models/GiftCardPurchaseRecipientPreviousAttributesInput.md#giftcardpurchaserecipientpreviousattributesinputemail). |
| `message` | Optional | string or null | Personal message included with the gift card. `message`: [declared alternatives](../models/GiftCardPurchaseRecipientPreviousAttributesInput.md#giftcardpurchaserecipientpreviousattributesinputmessage). |
| `name` | Optional | string or null | Name of the person receiving the gift card. `name`: [declared alternatives](../models/GiftCardPurchaseRecipientPreviousAttributesInput.md#giftcardpurchaserecipientpreviousattributesinputname). |
| `send_at` | Optional | string or null | Optional send time between now and 90 days from now. Omission requests immediate recipient notification after funding. `send_at`: [declared alternatives](../models/GiftCardPurchaseRecipientPreviousAttributesInput.md#giftcardpurchaserecipientpreviousattributesinputsend_at). |
| `sender_name` | Optional | string or null | Name to show as the sender in the gift card email, when provided. `sender_name`: [declared alternatives](../models/GiftCardPurchaseRecipientPreviousAttributesInput.md#giftcardpurchaserecipientpreviousattributesinputsender_name). |

### GiftCardPurchaseRecipientPreviousAttributesInput.email

### GiftCardPurchaseRecipientPreviousAttributesInput.email variant 1

anyOf variant 1: Email address the gift card is delivered to..

- Value shape: string. Email address the gift card is delivered to. Email address the gift card is delivered to. Format: `email`. minLength: `1`. maxLength: `254`. Example: `"buyer@example.com"`. 

### GiftCardPurchaseRecipientPreviousAttributesInput.email variant 2

anyOf variant 2.

- Value shape: null. Email address the gift card is delivered to. 

### GiftCardPurchaseRecipientPreviousAttributesInput.message

### GiftCardPurchaseRecipientPreviousAttributesInput.message variant 1

anyOf variant 1: Personal message included with the gift card..

- Value shape: string. Personal message included with the gift card. Personal message included with the gift card. maxLength: `200`. 

### GiftCardPurchaseRecipientPreviousAttributesInput.message variant 2

anyOf variant 2.

- Value shape: null. Personal message included with the gift card. 

### GiftCardPurchaseRecipientPreviousAttributesInput.name

### GiftCardPurchaseRecipientPreviousAttributesInput.name variant 1

anyOf variant 1: Name of the person receiving the gift card..

- Value shape: string. Name of the person receiving the gift card. Name of the person receiving the gift card. maxLength: `255`. 

### GiftCardPurchaseRecipientPreviousAttributesInput.name variant 2

anyOf variant 2.

- Value shape: null. Name of the person receiving the gift card. 

### GiftCardPurchaseRecipientPreviousAttributesInput.send_at

### GiftCardPurchaseRecipientPreviousAttributesInput.send_at variant 1

anyOf variant 1: Optional send time between now and 90 days from now. Omission requests immediate recipient notification after funding..

- Value shape: string. Optional send time between now and 90 days from now. Omission requests immediate recipient notification after funding. Optional send time between now and 90 days from now. Omission requests immediate recipient notification after funding. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### GiftCardPurchaseRecipientPreviousAttributesInput.send_at variant 2

anyOf variant 2.

- Value shape: null. Optional send time between now and 90 days from now. Omission requests immediate recipient notification after funding. 

### GiftCardPurchaseRecipientPreviousAttributesInput.sender_name

### GiftCardPurchaseRecipientPreviousAttributesInput.sender_name variant 1

anyOf variant 1: Name to show as the sender in the gift card email, when provided..

- Value shape: string. Name to show as the sender in the gift card email, when provided. Name to show as the sender in the gift card email, when provided. maxLength: `255`. 

### GiftCardPurchaseRecipientPreviousAttributesInput.sender_name variant 2

anyOf variant 2.

- Value shape: null. Name to show as the sender in the gift card email, when provided. 

