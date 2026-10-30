[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## UpdatePayoutSettingsRequest

The request body for: Update payout settings.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delay_days_override` | Optional | integer or null | Days, 0 through 31, a payment stays pending before its funds become available, in place of the account's default. Send null to go back to the default. Format: `int32`. |
| `expected_version` | Optional | integer | Expected version of the payout settings. Required when sending minimum_balance_by_currency, monthly_payout_days, or weekly_payout_days, including empty collections and supported null clears. A stale value returns 409 VERSION_CONFLICT; retrieve the settings and rebuild the request before retrying. Format: `uint64`. minimum: `1`. |
| `interval` | Optional | string | When Flint sends available funds: daily, weekly on weekly_payout_days, monthly on monthly_payout_days, or manual, which sends nothing until you create a payout. weekly and monthly need their day list in the same request. Values: `"manual"`, `"daily"`, `"weekly"`, `"monthly"`. |
| `minimum_balance_by_currency` | Optional | Map of ([MoneyValue](../models/MoneyValue.md#moneyvalue) or null) | Amount to keep in your balance instead of paying it out, keyed by currency code. Each value's currency must match its key and its amount can't be negative. Set a currency to null to remove its minimum. `minimum_balance_by_currency{}`: [declared alternatives](../models/GiftCardLoad.md#giftcardloadconsideration_money). |
| `monthly_payout_days` | Optional | Array of integer | Days of the month, 1 through 31, on which monthly payouts are sent. Send it with interval monthly; it is rejected with any other interval. Items: Format: `int32`. |
| `statement_descriptor` | Optional | string or null | Text shown on your bank statement for payouts, 22 characters or fewer. Send null to clear it. minLength: `1`. |
| `weekly_payout_days` | Optional | Array of string | Weekdays on which weekly payouts are sent, monday through friday. Send it with interval weekly; it is rejected with any other interval. Items values: `"monday"`, `"tuesday"`, `"wednesday"`, `"thursday"`, `"friday"`. |

### UpdatePayoutSettingsRequest.minimum_balance_by_currency{}

Declared alternatives: [GiftCardLoad.consideration_money](../models/GiftCardLoad.md#giftcardloadconsideration_money).

