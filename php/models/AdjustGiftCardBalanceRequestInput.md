[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## AdjustGiftCardBalanceRequestInput

The request body for: Adjust gift card value.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [SignedMoneyInput](../models/SignedMoneyInput.md#signedmoneyinput) | Signed monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `expected_version` | Optional | integer string | The gift card version last read. The command changes this card only when its current version matches. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. |
| `reason` | Required | string | Values: `"complimentary"`, `"balance_accidentally_decreased"`, `"support_issue"`, `"suspicious_activity"`, `"balance_accidentally_increased"`. |

