[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateGiftCardRedemptionRequest

The request body for: Redeem gift card value.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/CreateGiftCardLoadRequest.md#creategiftcardloadrequestvalue_money). |
| `capture_mode` | Required | string | Values: `"automatic"`, `"manual"`. |
| `expected_version` | Optional | integer | The gift card version last read. The command changes this card only when its current version matches. Format: `int64`. minimum: `1`. |
| `expires_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. minLength: `1`. |
| `gift_card_id` | Required | string | minLength: `1`. |
| `sale_reference` | Required | string | Your reference for the sale the redemption pays for. Required; 1 to 255 characters. The value is preserved exactly as sent. minLength: `1`. maxLength: `255`. |

### CreateGiftCardRedemptionRequest variant 1: `capture_mode` = `"automatic"`

oneOf with capture_mode: "automatic": The `automatic` variant of `CreateGiftCardRedemptionRequest`..

- Condition: not (present(`expires_at`)).
- Constraints for `capture_mode`: Values: `"automatic"`.

### CreateGiftCardRedemptionRequest variant 2: `capture_mode` = `"manual"`

oneOf with capture_mode: "manual": The `manual` variant of `CreateGiftCardRedemptionRequest`..

- Constraints for `capture_mode`: Values: `"manual"`.

### CreateGiftCardRedemptionRequest.amount_money

Field definitions: [CreateGiftCardLoadRequest.value_money](../models/CreateGiftCardLoadRequest.md#creategiftcardloadrequestvalue_money).

