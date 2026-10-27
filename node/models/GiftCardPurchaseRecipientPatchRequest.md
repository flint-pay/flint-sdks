[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardPurchaseRecipientPatchRequest

Changes to the recipient of a gift card purchase when updating a line item. Send null for `name` or `message` to clear it.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `email` | Required | string | Format: `email`. minLength: `1`. maxLength: `254`. |
| `message` | Optional | string or null | Send null to clear it. minLength: `1`. maxLength: `200`. |
| `name` | Optional | string or null | Send null to clear it. minLength: `1`. maxLength: `255`. |
| `send_at` | Optional | string | Optional send time between now and 90 days from now. Omission requests immediate recipient notification after funding. Format: `date-time`. minLength: `1`. |

