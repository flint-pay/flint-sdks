[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateGiftCardFundingDispositionRequestInput

The request body for: Create a gift card funding disposition.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `disposition` | Optional | string | Default: `"honor_value"`. Values: `"honor_value"`. |
| `dispute_id` | Required | string | The lost dispute on the payment that funded the gift card value. minLength: `1`. pattern: `^du_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `reason_message` | Required | string | Your reason for honoring the gift card value despite the confirmed funding loss. minLength: `1`. maxLength: `200`. |

