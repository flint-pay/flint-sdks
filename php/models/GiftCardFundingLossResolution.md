[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardFundingLossResolution

How a lost funding dispute was resolved for a gift card load, such as honoring the card's value, with a reason message.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `disposition` | Required | string | What the merchant decided about the card's value after the funding payment lost a dispute. Values: `"honor_value"`. |
| `gift_card_funding_disposition_id` | Required | string | ID of the funding disposition recorded for the lost dispute. |
| `reason_message` | Required | string | The note you gave when you created the disposition. |

