[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardNotificationRecipientPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `email` | Optional | string or null | Email address the notification is sent to. The local part before @ must be at most 64 octets (UTF-8 bytes). `email`: [declared alternatives](../models/GiftCardNotificationRecipientPreviousAttributesInput.md#giftcardnotificationrecipientpreviousattributesinputemail). |
| `message` | Optional | string or null | Message included in the notification. `message`: [declared alternatives](../models/GiftCardNotificationRecipientPreviousAttributesInput.md#giftcardnotificationrecipientpreviousattributesinputmessage). |
| `name` | Optional | string or null | Name of the person the notification is addressed to. Surrounding whitespace is trimmed before length validation. A supplied value cannot be blank; use null where clearing is supported. `name`: [declared alternatives](../models/GiftCardNotificationRecipientPreviousAttributesInput.md#giftcardnotificationrecipientpreviousattributesinputname). |
| `send_at` | Optional | string or null | Optional whole-second send time between now and 90 days from now. `send_at`: [declared alternatives](../models/GiftCardNotificationRecipientPreviousAttributesInput.md#giftcardnotificationrecipientpreviousattributesinputsend_at). |

### GiftCardNotificationRecipientPreviousAttributesInput.email

### GiftCardNotificationRecipientPreviousAttributesInput.email variant 1

anyOf variant 1: Email address the notification is sent to. The local part before @ must be at most 64 octets (UTF-8 bytes)..

- Value shape: string. Email address the notification is sent to. The local part before @ must be at most 64 octets (UTF-8 bytes). Email address the notification is sent to. The local part before @ must be at most 64 octets (UTF-8 bytes). Format: `email`. minLength: `1`. maxLength: `254`. Example: `"buyer@example.com"`. 

### GiftCardNotificationRecipientPreviousAttributesInput.email variant 2

anyOf variant 2.

- Value shape: null. Email address the notification is sent to. The local part before @ must be at most 64 octets (UTF-8 bytes). 

### GiftCardNotificationRecipientPreviousAttributesInput.message

### GiftCardNotificationRecipientPreviousAttributesInput.message variant 1

anyOf variant 1: Message included in the notification..

- Value shape: string. Message included in the notification. Message included in the notification. minLength: `1`. maxLength: `200`. 

### GiftCardNotificationRecipientPreviousAttributesInput.message variant 2

anyOf variant 2.

- Value shape: null. Message included in the notification. 

### GiftCardNotificationRecipientPreviousAttributesInput.name

### GiftCardNotificationRecipientPreviousAttributesInput.name variant 1

anyOf variant 1: Name of the person the notification is addressed to. Surrounding whitespace is trimmed before length validation. A supplied value cannot be blank; use null where clearing is supported..

- Value shape: string. Name of the person the notification is addressed to. Surrounding whitespace is trimmed before length validation. A supplied value cannot be blank; use null where clearing is supported. Name of the person the notification is addressed to. Surrounding whitespace is trimmed before length validation. A supplied value cannot be blank; use null where clearing is supported. minLength: `1`. maxLength: `255`. 

### GiftCardNotificationRecipientPreviousAttributesInput.name variant 2

anyOf variant 2.

- Value shape: null. Name of the person the notification is addressed to. Surrounding whitespace is trimmed before length validation. A supplied value cannot be blank; use null where clearing is supported. 

### GiftCardNotificationRecipientPreviousAttributesInput.send_at

### GiftCardNotificationRecipientPreviousAttributesInput.send_at variant 1

anyOf variant 1: Optional whole-second send time between now and 90 days from now..

- Value shape: string. Optional whole-second send time between now and 90 days from now. Optional whole-second send time between now and 90 days from now. Format: `date-time`. minLength: `1`. Example: `"2026-08-02T16:00:00Z"`. 

### GiftCardNotificationRecipientPreviousAttributesInput.send_at variant 2

anyOf variant 2.

- Value shape: null. Optional whole-second send time between now and 90 days from now. 

