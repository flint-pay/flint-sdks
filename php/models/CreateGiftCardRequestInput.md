[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateGiftCardRequestInput

The request body for: Create a gift card.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `currency` | Required | string | ISO 4217 currency code. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. Example: `"USD"`. Values: `"USD"`. |
| `customer_id` | Optional | string | minLength: `1`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `funding` | Optional | [InitialGiftCardFundingInput](../models/InitialGiftCardFundingInput.md#initialgiftcardfundinginput) or null |  |
| `notification` | Optional | [GiftCardNotificationRecipientInput](../models/GiftCardNotificationRecipientInput.md#giftcardnotificationrecipientinput) | Optional recipient notification recorded with issuance. Requires commerce.gift_cards.secrets.write in addition to issuance authority. Who receives a gift card notification: their `email`, optional `name` and `message`, and an optional `send_at` time. |

