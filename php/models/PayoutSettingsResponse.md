[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PayoutSettingsResponse

A response containing `PayoutSettings` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [PayoutSettings](../models/PayoutSettings.md#payoutsettings) | Resource, collection, or operation result returned by this request. The merchant's payout schedule and preferences. `data`: [field definitions](../models/PayoutSettingsResponse.md#payoutsettingsresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### PayoutSettingsResponse.data

Resource, collection, or operation result returned by this request. The merchant's payout schedule and preferences.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `blocked_reasons` | Required | Array of [MoneyMovementBlockedReason](../models/MoneyMovementBlockedReason.md#moneymovementblockedreason) | Why payouts can't run. Empty when nothing blocks them. |
| `created_at` | Required | string or null | When Flint stored the payout settings record, as an RFC 3339 UTC instant at second precision. Null when no stored settings record exists. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `default_payout_destinations` | Required | Map of string | Default payout destination for each currency, as a map from currency code to payout_destination_id. Empty when no defaults are configured. Change a currency's default with `default_payout_destinations` on PATCH /v1/payout-settings, or in the payouts embedded component. |
| `delay_days` | Required | integer | Normal settlement delay in days before a payment's funds become available to pay out. A new account's first payments can stay pending longer; each balance transaction's available_at is when its funds become available. Format: `int32`. |
| `delay_days_override` | Optional | integer | Settlement delay in days you set in place of the account's default, 0 through 31. It doesn't guarantee the pending time of every payment; see available_at on each balance transaction. Absent when none is set. Format: `int32`. |
| `interval` | Required | string | Payout schedule interval. Unmapped intervals are returned as other. Values: `"manual"`, `"daily"`, `"weekly"`, `"monthly"`, `"other"`. |
| `merchant_id` | Required | string | Merchant these settings belong to. Example: `"mer_01KEZF7C00KPYH1DDFPCCX3B6E"`. |
| `minimum_balance_currency_options` | Optional | Map of [MoneyValue](../models/MoneyValue.md#moneyvalue) | Amount kept in your balance instead of paid out, keyed by currency code. Absent when no minimum is set. |
| `monthly_payout_days` | Required | Array of integer | Days of the month, 1 through 31, on which monthly payouts are sent. Items: Format: `int32`. |
| `next_actions` | Required | Array of [NextAction](../models/NextAction.md#nextaction) | Steps that would let payouts run, when Flint has one to suggest. Empty otherwise. `next_actions[]`: [field definitions](../models/DisputeResponse.md#disputeresponsemetawarningsnext_actions). |
| `payout_settings_id` | Required | string | Stable identifier of your payout settings. Example: `"pset_01KEZF7C0027X093301CQ36WSZ"`. |
| `statement_descriptor` | Optional | string | Text shown on your bank statement for payouts. Absent when none is set. |
| `status` | Required | string | Whether payouts can run: enabled, disabled, blocked, or pending. When it isn't enabled, blocked_reasons says why and next_actions lists any steps Flint can suggest. Values: `"enabled"`, `"disabled"`, `"blocked"`, `"pending"`. |
| `updated_at` | Required | string or null | When the stored payout settings record was last updated, as an RFC 3339 UTC instant at second precision. Without a stored record, this is your processor's update time. `null` when there is no stored record and your processor supplied no update time. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `version` | Required | integer | Persisted version of this resource's owned state. Expanded resources and external observations can change independently. Format: `uint64`. minimum: `1`. |
| `weekly_payout_days` | Required | Array of string | Days of the week weekly payouts are sent. Accounts set up outside Flint can report saturday or sunday; when you change the schedule, Flint accepts monday through friday. Items values: `"monday"`, `"tuesday"`, `"wednesday"`, `"thursday"`, `"friday"`, `"saturday"`, `"sunday"`. |

### PayoutSettingsResponse.data.next_actions[]

Field definitions: [DisputeResponse.meta.warnings[].next_actions[]](../models/DisputeResponse.md#disputeresponsemetawarningsnext_actions).

### PayoutSettingsResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

