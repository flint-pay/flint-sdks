[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateGiftCardRedemptionRequestInput

The request body for: Redeem gift card value.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/CreateGiftCardLoadRequestInput.md#creategiftcardloadrequestinputvalue_money). |
| `capture_mode` | Required | string | Values: `"automatic"`, `"manual"`. |
| `expected_version` | Optional | integer string | The gift card version last read. The command changes this card only when its current version matches. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. |
| `expires_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. minLength: `1`. |
| `gift_card_id` | Required | string | minLength: `1`. |
| `sale_reference` | Required | string | Your reference for the sale the redemption pays for. Required; 1 to 255 characters. The value is preserved exactly as sent. minLength: `1`. maxLength: `255`. |

### CreateGiftCardRedemptionRequestInput variant 1: `capture_mode` = `"automatic"`

oneOf variant 1: The `automatic` variant of `CreateGiftCardRedemptionRequest`..

- Condition: not (present(`expires_at`)).
- Constraints for `capture_mode`: Values: `"automatic"`.

### CreateGiftCardRedemptionRequestInput variant 2: `capture_mode` = `"manual"`

oneOf variant 2: The `manual` variant of `CreateGiftCardRedemptionRequest`..

- Constraints for `capture_mode`: Values: `"manual"`.

### CreateGiftCardRedemptionRequestInput.amount_money

Field definitions: [CreateGiftCardLoadRequestInput.value_money](../models/CreateGiftCardLoadRequestInput.md#creategiftcardloadrequestinputvalue_money).

