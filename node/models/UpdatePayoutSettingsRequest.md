[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## UpdatePayoutSettingsRequest

The request body for: Update payout settings.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `default_payout_destinations` | Optional | Map of string | Map values: minLength: `1`. |
| `delay_days_override` | Optional | integer or null | Format: `int32`. |
| `interval` | Optional | string | Values: `"manual"`, `"daily"`, `"weekly"`, `"monthly"`. |
| `minimum_balance_by_currency` | Optional | Map of ([MoneyValue](../models/MoneyValue.md#moneyvalue) or null) | `minimum_balance_by_currency{}`: [declared alternatives](../models/GiftCardLoad.md#giftcardloadconsideration_money). |
| `monthly_payout_days` | Optional | Array of integer | Items: Format: `int32`. |
| `statement_descriptor` | Optional | string or null | Send null to clear it. minLength: `1`. |
| `weekly_payout_days` | Optional | Array of string | Weekdays on which weekly payouts are sent. Allowed values are monday, tuesday, wednesday, thursday, and friday. Items values: `"monday"`, `"tuesday"`, `"wednesday"`, `"thursday"`, `"friday"`. |

### UpdatePayoutSettingsRequest.minimum_balance_by_currency{}

Declared alternatives: [GiftCardLoad.consideration_money](../models/GiftCardLoad.md#giftcardloadconsideration_money).

