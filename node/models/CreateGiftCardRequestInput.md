[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateGiftCardRequestInput

Request input. Response: [CreateGiftCardRequest](../models/CreateGiftCardRequest.md#creategiftcardrequest).

The request body for: Create a gift card.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `code` | Optional | string | Existing gift card code, accepted only with funding.source.funding_source_type import. Must contain 16 gift card alphabet characters after removing spaces and hyphens; O maps to 0 and I/L to 1. The supplied code is never returned. minLength: `1`. maxLength: `64`. Input only. |
| `currency` | Required | string | ISO 4217 currency code. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. Example: `"USD"`. Values: `"USD"`. |
| `customer_id` | Optional | string | ID of the customer to associate with the card. minLength: `1`. Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. Example: `"warehouse-1842"`. |
| `funding` | Optional | [InitialGiftCardFundingInput](../models/InitialGiftCardFundingInput.md#initialgiftcardfundinginput) or null | The card's initial value and where it came from. Omit it to create an unfunded `pending` card. |
| `notification` | Optional | [GiftCardNotificationRecipientInput](../models/GiftCardNotificationRecipientInput.md#giftcardnotificationrecipientinput) | Optional recipient notification recorded with issuance. Requires commerce.gift_cards.secrets.write in addition to issuance authority. Who receives a gift card notification: their `email`, optional `name` and `message`, and an optional `send_at` time. |

