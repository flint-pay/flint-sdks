[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardPurchaseRecipientPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `email` | Optional | string or null | Email address the gift card is delivered to. The local part before @ must be at most 64 octets (UTF-8 bytes). `email`: [declared alternatives](../models/GiftCardPurchaseRecipientPreviousAttributes.md#giftcardpurchaserecipientpreviousattributesemail). |
| `message` | Optional | string or null | Personal message included with the gift card. `message`: [declared alternatives](../models/GiftCardPurchaseRecipientPreviousAttributes.md#giftcardpurchaserecipientpreviousattributesmessage). |
| `name` | Optional | string or null | Name of the person receiving the gift card. Surrounding whitespace is trimmed before length validation. A supplied value cannot be blank; use null where clearing is supported. `name`: [declared alternatives](../models/GiftCardPurchaseRecipientPreviousAttributes.md#giftcardpurchaserecipientpreviousattributesname). |
| `send_at` | Optional | string or null | Optional send time between now and 90 days from now. Omission requests immediate recipient notification after funding. `send_at`: [declared alternatives](../models/GiftCardPurchaseRecipientPreviousAttributes.md#giftcardpurchaserecipientpreviousattributessend_at). |
| `sender_name` | Optional | string or null | Name to show as the sender in the gift card email, when provided. `sender_name`: [declared alternatives](../models/GiftCardPurchaseRecipientPreviousAttributes.md#giftcardpurchaserecipientpreviousattributessender_name). |

### GiftCardPurchaseRecipientPreviousAttributes.email

### GiftCardPurchaseRecipientPreviousAttributes.email variant 1

anyOf variant 1: Email address the gift card is delivered to. The local part before @ must be at most 64 octets (UTF-8 bytes)..

- Value shape: string. Email address the gift card is delivered to. The local part before @ must be at most 64 octets (UTF-8 bytes). Email address the gift card is delivered to. The local part before @ must be at most 64 octets (UTF-8 bytes). Format: `email`. minLength: `1`. maxLength: `254`. 

### GiftCardPurchaseRecipientPreviousAttributes.email variant 2

anyOf variant 2.

- Value shape: null. Email address the gift card is delivered to. The local part before @ must be at most 64 octets (UTF-8 bytes). 

### GiftCardPurchaseRecipientPreviousAttributes.message

### GiftCardPurchaseRecipientPreviousAttributes.message variant 1

anyOf variant 1: Personal message included with the gift card..

- Value shape: string. Personal message included with the gift card. Personal message included with the gift card. maxLength: `200`. 

### GiftCardPurchaseRecipientPreviousAttributes.message variant 2

anyOf variant 2.

- Value shape: null. Personal message included with the gift card. 

### GiftCardPurchaseRecipientPreviousAttributes.name

### GiftCardPurchaseRecipientPreviousAttributes.name variant 1

anyOf variant 1: Name of the person receiving the gift card. Surrounding whitespace is trimmed before length validation. A supplied value cannot be blank; use null where clearing is supported..

- Value shape: string. Name of the person receiving the gift card. Surrounding whitespace is trimmed before length validation. A supplied value cannot be blank; use null where clearing is supported. Name of the person receiving the gift card. Surrounding whitespace is trimmed before length validation. A supplied value cannot be blank; use null where clearing is supported. maxLength: `255`. 

### GiftCardPurchaseRecipientPreviousAttributes.name variant 2

anyOf variant 2.

- Value shape: null. Name of the person receiving the gift card. Surrounding whitespace is trimmed before length validation. A supplied value cannot be blank; use null where clearing is supported. 

### GiftCardPurchaseRecipientPreviousAttributes.send_at

### GiftCardPurchaseRecipientPreviousAttributes.send_at variant 1

anyOf variant 1: Optional send time between now and 90 days from now. Omission requests immediate recipient notification after funding..

- Value shape: string. Optional send time between now and 90 days from now. Omission requests immediate recipient notification after funding. Optional send time between now and 90 days from now. Omission requests immediate recipient notification after funding. Format: `date-time`. 

### GiftCardPurchaseRecipientPreviousAttributes.send_at variant 2

anyOf variant 2.

- Value shape: null. Optional send time between now and 90 days from now. Omission requests immediate recipient notification after funding. 

### GiftCardPurchaseRecipientPreviousAttributes.sender_name

### GiftCardPurchaseRecipientPreviousAttributes.sender_name variant 1

anyOf variant 1: Name to show as the sender in the gift card email, when provided..

- Value shape: string. Name to show as the sender in the gift card email, when provided. Name to show as the sender in the gift card email, when provided. maxLength: `255`. 

### GiftCardPurchaseRecipientPreviousAttributes.sender_name variant 2

anyOf variant 2.

- Value shape: null. Name to show as the sender in the gift card email, when provided. 

