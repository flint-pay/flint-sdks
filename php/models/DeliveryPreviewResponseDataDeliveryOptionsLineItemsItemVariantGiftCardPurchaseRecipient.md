[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemVariantGiftCardPurchaseRecipient

Who receives the gift card. `null` when no recipient was set.

The recipient of a purchased gift card: `email`, optional `name` and `message`, and an optional `send_at` time.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `email` | Required | string | Email address the gift card is delivered to. Format: `email`. minLength: `1`. maxLength: `254`. |
| `message` | Optional | string | Personal message included with the gift card. maxLength: `200`. |
| `name` | Optional | string | Name of the person receiving the gift card. maxLength: `255`. |
| `send_at` | Optional | string | Optional send time between now and 90 days from now. Omission requests immediate recipient notification after funding. Format: `date-time`. |

