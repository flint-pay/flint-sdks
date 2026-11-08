[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardNotificationRecipient

Who receives a gift card notification: their `email`, optional `name` and `message`, and an optional `send_at` time.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `email` | Required | string | Email address the notification is sent to. Format: `email`. minLength: `1`. maxLength: `254`. |
| `message` | Optional | string | Message included in the notification. minLength: `1`. maxLength: `200`. |
| `name` | Optional | string | Name of the person the notification is addressed to. minLength: `1`. maxLength: `255`. |
| `send_at` | Optional | string | Optional whole-second send time between now and 90 days from now. Format: `date-time`. minLength: `1`. |

