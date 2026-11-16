[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardPurchaseRecipientPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `email` | Optional | string or null | `email`: [declared alternatives](../models/GiftCardNotificationUpdatedInstalledMerchantsEvent.md#giftcardnotificationupdatedinstalledmerchantseventdataprevious_attributesrecipient-variant-1email), [declared alternatives](../models/GiftCardPurchaseRecipientPreviousAttributes.md#giftcardpurchaserecipientpreviousattributes-variant-2email). |
| `message` | Optional | string or null | `message`: [declared alternatives](../models/GiftCardNotificationUpdatedInstalledMerchantsEvent.md#giftcardnotificationupdatedinstalledmerchantseventdataprevious_attributesrecipient-variant-1message), [declared alternatives](../models/GiftCardPurchaseRecipientPreviousAttributes.md#giftcardpurchaserecipientpreviousattributes-variant-2message). |
| `name` | Optional | string or null | `name`: [declared alternatives](../models/GiftCardNotificationUpdatedInstalledMerchantsEvent.md#giftcardnotificationupdatedinstalledmerchantseventdataprevious_attributesrecipient-variant-1name), [declared alternatives](../models/GiftCardPurchaseRecipientPreviousAttributes.md#giftcardpurchaserecipientpreviousattributes-variant-2name). |
| `send_at` | Optional | string or null | `send_at`: [declared alternatives](../models/GiftCardNotificationUpdatedInstalledMerchantsEvent.md#giftcardnotificationupdatedinstalledmerchantseventdataprevious_attributesrecipient-variant-1send_at), [declared alternatives](../models/GiftCardPurchaseRecipientPreviousAttributes.md#giftcardpurchaserecipientpreviousattributes-variant-2send_at). |

### GiftCardPurchaseRecipientPreviousAttributes variant 1

anyOf variant 1: Declared schema GiftCardNotificationRecipientPreviousAttributes. .

- Constraints for `email`: Email address the notification is sent to.
- Constraints for `message`: Message included in the notification.
- Constraints for `name`: Name of the person the notification is addressed to.
- Constraints for `send_at`: Optional whole-second send time between now and 90 days from now.

### GiftCardPurchaseRecipientPreviousAttributes variant 2

anyOf variant 2: Declared schema GiftCardPurchaseRecipientPreviousAttributes. .

- Constraints for `email`: Email address the gift card is delivered to.
- Constraints for `message`: Personal message included with the gift card.
- Constraints for `name`: Name of the person receiving the gift card.
- Constraints for `send_at`: Optional send time between now and 90 days from now. Omission requests immediate recipient notification after funding.

### GiftCardPurchaseRecipientPreviousAttributes variant 1.email

Declared alternatives: [GiftCardNotificationUpdatedInstalledMerchantsEvent.data.previous_attributes.recipient variant 1.email](../models/GiftCardNotificationUpdatedInstalledMerchantsEvent.md#giftcardnotificationupdatedinstalledmerchantseventdataprevious_attributesrecipient-variant-1email).

### GiftCardPurchaseRecipientPreviousAttributes variant 1.message

Declared alternatives: [GiftCardNotificationUpdatedInstalledMerchantsEvent.data.previous_attributes.recipient variant 1.message](../models/GiftCardNotificationUpdatedInstalledMerchantsEvent.md#giftcardnotificationupdatedinstalledmerchantseventdataprevious_attributesrecipient-variant-1message).

### GiftCardPurchaseRecipientPreviousAttributes variant 1.name

Declared alternatives: [GiftCardNotificationUpdatedInstalledMerchantsEvent.data.previous_attributes.recipient variant 1.name](../models/GiftCardNotificationUpdatedInstalledMerchantsEvent.md#giftcardnotificationupdatedinstalledmerchantseventdataprevious_attributesrecipient-variant-1name).

### GiftCardPurchaseRecipientPreviousAttributes variant 1.send_at

Declared alternatives: [GiftCardNotificationUpdatedInstalledMerchantsEvent.data.previous_attributes.recipient variant 1.send_at](../models/GiftCardNotificationUpdatedInstalledMerchantsEvent.md#giftcardnotificationupdatedinstalledmerchantseventdataprevious_attributesrecipient-variant-1send_at).

### GiftCardPurchaseRecipientPreviousAttributes variant 2.email

### GiftCardPurchaseRecipientPreviousAttributes variant 2.email variant 1

anyOf variant 1: Email address the gift card is delivered to..

- Value shape: string. Email address the gift card is delivered to. Email address the gift card is delivered to. Format: `email`. minLength: `1`. maxLength: `254`. Example: `"buyer@example.com"`. 

### GiftCardPurchaseRecipientPreviousAttributes variant 2.email variant 2

anyOf variant 2.

- Value shape: null. Email address the gift card is delivered to. 

### GiftCardPurchaseRecipientPreviousAttributes variant 2.message

### GiftCardPurchaseRecipientPreviousAttributes variant 2.message variant 1

anyOf variant 1: Personal message included with the gift card..

- Value shape: string. Personal message included with the gift card. Personal message included with the gift card. maxLength: `200`. 

### GiftCardPurchaseRecipientPreviousAttributes variant 2.message variant 2

anyOf variant 2.

- Value shape: null. Personal message included with the gift card. 

### GiftCardPurchaseRecipientPreviousAttributes variant 2.name

### GiftCardPurchaseRecipientPreviousAttributes variant 2.name variant 1

anyOf variant 1: Name of the person receiving the gift card..

- Value shape: string. Name of the person receiving the gift card. Name of the person receiving the gift card. maxLength: `255`. 

### GiftCardPurchaseRecipientPreviousAttributes variant 2.name variant 2

anyOf variant 2.

- Value shape: null. Name of the person receiving the gift card. 

### GiftCardPurchaseRecipientPreviousAttributes variant 2.send_at

### GiftCardPurchaseRecipientPreviousAttributes variant 2.send_at variant 1

anyOf variant 1: Optional send time between now and 90 days from now. Omission requests immediate recipient notification after funding..

- Value shape: string. Optional send time between now and 90 days from now. Omission requests immediate recipient notification after funding. Optional send time between now and 90 days from now. Omission requests immediate recipient notification after funding. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### GiftCardPurchaseRecipientPreviousAttributes variant 2.send_at variant 2

anyOf variant 2.

- Value shape: null. Optional send time between now and 90 days from now. Omission requests immediate recipient notification after funding. 

