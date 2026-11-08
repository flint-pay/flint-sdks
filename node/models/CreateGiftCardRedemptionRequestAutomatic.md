[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateGiftCardRedemptionRequestAutomatic

The `automatic` variant of `CreateGiftCardRedemptionRequest`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The amount to redeem from the card. Monetary amount represented as integer minor units plus an ISO 4217 currency code. The amount to redeem from the card. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/CreateGiftCardRedemptionRequest.md#creategiftcardredemptionrequestamount_money). |
| `capture_mode` | Required | string | Whether the redemption spends the value now or reserves it to capture later. Values: `"automatic"`. |
| `expected_gift_card_version` | Optional | integer | The gift card version last read. The command changes this card only when its current version matches. Format: `int64`. minimum: `1`. |
| `expires_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. minLength: `1`. Example: `"2026-08-02T16:00:00Z"`. |
| `gift_card_id` | Required | string | ID of the gift card the value is spent from. minLength: `1`. Example: `"gc_01KEZF7C00RT1618WYBM1Y94CG"`. |
| `sale_reference` | Required | string | Your reference for the sale the redemption pays for. Required; 1 to 255 characters. The value is preserved exactly as sent. minLength: `1`. maxLength: `255`. |

### CreateGiftCardRedemptionRequestAutomatic.amount_money

Field definitions: [CreateGiftCardRedemptionRequest.amount_money](../models/CreateGiftCardRedemptionRequest.md#creategiftcardredemptionrequestamount_money).

