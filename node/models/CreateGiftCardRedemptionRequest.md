[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateGiftCardRedemptionRequest

The request body for: Redeem gift card value.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The amount to redeem from the card. Monetary amount represented as integer minor units plus an ISO 4217 currency code. The amount to redeem from the card. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/CreateGiftCardRedemptionRequest.md#creategiftcardredemptionrequestamount_money). |
| `capture_mode` | Required | string | Whether the redemption spends the value now or reserves it to capture later. Values: `"automatic"`, `"manual"`. |
| `expected_gift_card_version` | Optional | integer | The gift card version last read. The command changes this card only when its current version matches. Format: `int64`. minimum: `1`. |
| `expires_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. minLength: `1`. Example: `"2026-08-02T16:00:00Z"`. |
| `gift_card_id` | Required | string | ID of the gift card the value is spent from. minLength: `1`. Example: `"gc_01KEZF7C00RT1618WYBM1Y94CG"`. |
| `sale_reference` | Required | string | Your reference for the sale the redemption pays for. Required; 1 to 255 characters. The value is preserved exactly as sent. minLength: `1`. maxLength: `255`. |

### CreateGiftCardRedemptionRequest variant 1: `capture_mode` = `"automatic"`

oneOf with capture_mode: "automatic": The `automatic` variant of `CreateGiftCardRedemptionRequest`..

- Condition: not (present(`expires_at`)).
- Constraints for `capture_mode`: Values: `"automatic"`.

### CreateGiftCardRedemptionRequest variant 2: `capture_mode` = `"manual"`

oneOf with capture_mode: "manual": The `manual` variant of `CreateGiftCardRedemptionRequest`..

- Constraints for `capture_mode`: Values: `"manual"`.

### CreateGiftCardRedemptionRequest.amount_money

The amount to redeem from the card. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](CapturePaymentIntentRequest.md#capturepaymentintentrequestsplitsamount_money).

