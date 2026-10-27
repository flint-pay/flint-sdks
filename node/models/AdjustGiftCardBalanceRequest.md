[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## AdjustGiftCardBalanceRequest

The request body for: Adjust gift card value.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Nonzero USD amount to change the card's value by: positive adds value and negative removes it. Signed monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/AdjustGiftCardBalanceRequest.md#adjustgiftcardbalancerequestamount_money). |
| `expected_version` | Optional | integer string | The gift card version last read. The command changes this card only when its current version matches. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. |
| `reason` | Required | string | Why you're adjusting the value. A negative amount_money takes suspicious_activity, balance_accidentally_increased, or support_issue; a positive one takes complimentary, balance_accidentally_decreased, or support_issue. Values: `"complimentary"`, `"balance_accidentally_decreased"`, `"support_issue"`, `"suspicious_activity"`, `"balance_accidentally_increased"`. |

### AdjustGiftCardBalanceRequest.amount_money

Nonzero USD amount to change the card's value by: positive adds value and negative removes it. Signed monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](SignedMoneyInput.md#signedmoneyinput).

