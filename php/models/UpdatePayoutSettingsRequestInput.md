[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## UpdatePayoutSettingsRequestInput

The request body for: Update payout settings.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `default_payout_destinations` | Optional | Map of string | Map values: minLength: `1`. |
| `delay_days_override` | Optional | integer or null | Format: `int32`. |
| `interval` | Optional | string | Values: `"manual"`, `"daily"`, `"weekly"`, `"monthly"`. |
| `minimum_balance_by_currency` | Optional | Map of ([MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) or null) |  |
| `monthly_payout_days` | Optional | Array of integer | Items: Format: `int32`. |
| `statement_descriptor` | Optional | string or null | Send null to clear it. minLength: `1`. |
| `weekly_payout_days` | Optional | Array of string | Weekdays on which weekly payouts are sent. Allowed values are monday, tuesday, wednesday, thursday, and friday. Items values: `"monday"`, `"tuesday"`, `"wednesday"`, `"thursday"`, `"friday"`. |

