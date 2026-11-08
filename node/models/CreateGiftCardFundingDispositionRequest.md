[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateGiftCardFundingDispositionRequest

The request body for: Create a gift card funding disposition.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `disposition` | Optional | string | What the merchant decided about the card's value after the funding payment lost a dispute. Default: `"honor_value"`. Values: `"honor_value"`. |
| `dispute_id` | Required | string | The lost dispute on the payment that funded the gift card value. minLength: `1`. pattern: `^du_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"du_01KEZF7C00DEJSF1KTXRT4BBQD"`. |
| `reason_message` | Required | string | Your reason for honoring the gift card value despite the confirmed funding loss. minLength: `1`. maxLength: `200`. |

