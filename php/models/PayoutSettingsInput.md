[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PayoutSettingsInput

The merchant's payout schedule and preferences.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `blocked_reasons` | Required | Array of [MoneyMovementBlockedReasonInput](../models/MoneyMovementBlockedReasonInput.md#moneymovementblockedreasoninput) |  |
| `created_at` | Required | string or null | When Flint stored the payout settings record, as an RFC 3339 UTC instant at second precision. Null when no stored settings record exists. Format: `date-time`. |
| `default_payout_destinations` | Optional | Map of string |  |
| `delay_days` | Required | integer | Format: `int32`. |
| `delay_days_override` | Optional | integer | Format: `int32`. |
| `interval` | Required | string | Payout schedule interval. Unmapped intervals are returned as other. Values: `"manual"`, `"daily"`, `"weekly"`, `"monthly"`, `"other"`. |
| `merchant_id` | Required | string |  |
| `minimum_balance_by_currency` | Optional | Map of [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) |  |
| `monthly_payout_days` | Required | Array of integer | Items: Format: `int32`. |
| `next_actions` | Required | Array of [NextActionInput](../models/NextActionInput.md#nextactioninput) |  |
| `payout_settings_id` | Required | string |  |
| `statement_descriptor` | Optional | string |  |
| `status` | Required | string | Values: `"enabled"`, `"disabled"`, `"blocked"`, `"pending"`. |
| `updated_at` | Required | string or null | When the stored payout settings record was last updated, as an RFC 3339 UTC instant at second precision. Without a stored record, this is the provider's update time when supplied, otherwise null. Format: `date-time`. |
| `weekly_payout_days` | Required | Array of string | Days of the week on which weekly payouts are sent. Allowed values are monday, tuesday, wednesday, thursday, friday, saturday, and sunday. Items values: `"monday"`, `"tuesday"`, `"wednesday"`, `"thursday"`, `"friday"`, `"saturday"`, `"sunday"`. |

