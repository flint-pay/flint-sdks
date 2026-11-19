[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardNotificationRecipientPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `email` | Optional | string or null | Email address the notification is sent to. The local part before @ must be at most 64 octets (UTF-8 bytes). `email`: [declared alternatives](../models/GiftCardNotificationRecipientPreviousAttributes.md#giftcardnotificationrecipientpreviousattributesemail). |
| `message` | Optional | string or null | Message included in the notification. `message`: [declared alternatives](../models/GiftCardNotificationRecipientPreviousAttributes.md#giftcardnotificationrecipientpreviousattributesmessage). |
| `name` | Optional | string or null | Name of the person the notification is addressed to. Surrounding whitespace is trimmed before length validation. A supplied value cannot be blank; use null where clearing is supported. `name`: [declared alternatives](../models/GiftCardNotificationRecipientPreviousAttributes.md#giftcardnotificationrecipientpreviousattributesname). |
| `send_at` | Optional | string or null | Optional whole-second send time between now and 90 days from now. `send_at`: [declared alternatives](../models/GiftCardNotificationRecipientPreviousAttributes.md#giftcardnotificationrecipientpreviousattributessend_at). |

### GiftCardNotificationRecipientPreviousAttributes.email

### GiftCardNotificationRecipientPreviousAttributes.email variant 1

anyOf variant 1: Email address the notification is sent to. The local part before @ must be at most 64 octets (UTF-8 bytes)..

- Value shape: string. Email address the notification is sent to. The local part before @ must be at most 64 octets (UTF-8 bytes). Email address the notification is sent to. The local part before @ must be at most 64 octets (UTF-8 bytes). Format: `email`. minLength: `1`. maxLength: `254`. Example: `"buyer@example.com"`. 

### GiftCardNotificationRecipientPreviousAttributes.email variant 2

anyOf variant 2.

- Value shape: null. Email address the notification is sent to. The local part before @ must be at most 64 octets (UTF-8 bytes). 

### GiftCardNotificationRecipientPreviousAttributes.message

### GiftCardNotificationRecipientPreviousAttributes.message variant 1

anyOf variant 1: Message included in the notification..

- Value shape: string. Message included in the notification. Message included in the notification. minLength: `1`. maxLength: `200`. 

### GiftCardNotificationRecipientPreviousAttributes.message variant 2

anyOf variant 2.

- Value shape: null. Message included in the notification. 

### GiftCardNotificationRecipientPreviousAttributes.name

### GiftCardNotificationRecipientPreviousAttributes.name variant 1

anyOf variant 1: Name of the person the notification is addressed to. Surrounding whitespace is trimmed before length validation. A supplied value cannot be blank; use null where clearing is supported..

- Value shape: string. Name of the person the notification is addressed to. Surrounding whitespace is trimmed before length validation. A supplied value cannot be blank; use null where clearing is supported. Name of the person the notification is addressed to. Surrounding whitespace is trimmed before length validation. A supplied value cannot be blank; use null where clearing is supported. minLength: `1`. maxLength: `255`. 

### GiftCardNotificationRecipientPreviousAttributes.name variant 2

anyOf variant 2.

- Value shape: null. Name of the person the notification is addressed to. Surrounding whitespace is trimmed before length validation. A supplied value cannot be blank; use null where clearing is supported. 

### GiftCardNotificationRecipientPreviousAttributes.send_at

### GiftCardNotificationRecipientPreviousAttributes.send_at variant 1

anyOf variant 1: Optional whole-second send time between now and 90 days from now..

- Value shape: string. Optional whole-second send time between now and 90 days from now. Optional whole-second send time between now and 90 days from now. Format: `date-time`. minLength: `1`. Example: `"2026-08-02T16:00:00Z"`. 

### GiftCardNotificationRecipientPreviousAttributes.send_at variant 2

anyOf variant 2.

- Value shape: null. Optional whole-second send time between now and 90 days from now. 

