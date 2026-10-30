[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PayoutSettings

The merchant's payout schedule and preferences.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `blocked_reasons` | Required | Array of [MoneyMovementBlockedReason](../models/MoneyMovementBlockedReason.md#moneymovementblockedreason) | Why payouts can't run. Empty when nothing blocks them. |
| `created_at` | Required | string or null | When Flint stored the payout settings record, as an RFC 3339 UTC instant at second precision. Null when no stored settings record exists. Format: `date-time`. |
| `default_payout_destinations` | Optional | Map of string | Default payout destination for each currency, as a map from currency code to payout_destination_id. Read-only: change defaults in the payouts embedded component. |
| `delay_days` | Required | integer | Days a payment stays pending before its funds become available to pay out. Format: `int32`. |
| `delay_days_override` | Optional | integer | Delay in days you set in place of the account's default, 0 through 31. Absent when none is set. Format: `int32`. |
| `interval` | Required | string | Payout schedule interval. Unmapped intervals are returned as other. Values: `"manual"`, `"daily"`, `"weekly"`, `"monthly"`, `"other"`. |
| `merchant_id` | Required | string | Merchant these settings belong to. |
| `minimum_balance_by_currency` | Optional | Map of [MoneyValue](../models/MoneyValue.md#moneyvalue) | Amount kept in your balance instead of paid out, keyed by currency code. Absent when no minimum is set. `minimum_balance_by_currency{}`: [field definitions](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options). |
| `monthly_payout_days` | Required | Array of integer | Days of the month, 1 through 31, on which monthly payouts are sent. Items: Format: `int32`. |
| `next_actions` | Required | Array of [NextAction](../models/NextAction.md#nextaction) | Steps that would let payouts run, when Flint has one to suggest. Empty otherwise. |
| `payout_settings_id` | Required | string | Stable identifier of your payout settings. |
| `statement_descriptor` | Optional | string | Text shown on your bank statement for payouts. Absent when none is set. |
| `status` | Required | string | Whether payouts can run: enabled, disabled, blocked, or pending. When it isn't enabled, blocked_reasons says why and next_actions lists any steps Flint can suggest. Values: `"enabled"`, `"disabled"`, `"blocked"`, `"pending"`. |
| `updated_at` | Required | string or null | When the stored payout settings record was last updated, as an RFC 3339 UTC instant at second precision. Without a stored record, this is the provider's update time when supplied, otherwise null. Format: `date-time`. |
| `version` | Required | integer | Persisted version of this resource's owned state. Expanded resources and external observations can change independently. Format: `uint64`. minimum: `1`. |
| `weekly_payout_days` | Required | Array of string | Days of the week weekly payouts are sent. Accounts set up outside Flint can report saturday or sunday; when you change the schedule, Flint accepts monday through friday. Items values: `"monday"`, `"tuesday"`, `"wednesday"`, `"thursday"`, `"friday"`, `"saturday"`, `"sunday"`. |

### PayoutSettings.minimum_balance_by_currency{}

Field definitions: [BuyerCheckoutSession.tip.smart_tip_money_options[]](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options).

