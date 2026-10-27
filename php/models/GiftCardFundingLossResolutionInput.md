[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardFundingLossResolutionInput

How a lost funding dispute was resolved for a gift card load, such as honoring the card's value, with a reason message.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `disposition` | Required | string | Values: `"honor_value"`. |
| `gift_card_funding_disposition_id` | Required | string |  |
| `reason_message` | Required | string |  |

