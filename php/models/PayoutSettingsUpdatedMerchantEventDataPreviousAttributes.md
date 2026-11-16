[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PayoutSettingsUpdatedMerchantEventDataPreviousAttributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `blocked_reasons` | Optional | Array of [MoneyMovementBlockedReasonPreviousAttributes](../models/MoneyMovementBlockedReasonPreviousAttributes.md#moneymovementblockedreasonpreviousattributes) or null | Why payouts can't run. Empty when nothing blocks them. `blocked_reasons`: [declared alternatives](../models/PayoutSettingsUpdatedMerchantEventDataPreviousAttributes.md#payoutsettingsupdatedmerchanteventdatapreviousattributesblocked_reasons). |
| `created_at` | Optional | string or null or null | When Flint stored the payout settings record, as an RFC 3339 UTC instant at second precision. Null when no stored settings record exists. `created_at`: [declared alternatives](../models/PayoutSettingsUpdatedMerchantEventDataPreviousAttributes.md#payoutsettingsupdatedmerchanteventdatapreviousattributescreated_at). |
| `default_payout_destinations` | Optional | Map of string or null | Default payout destination for each currency, as a map from currency code to payout_destination_id. Empty when no defaults are configured. Change a currency's default with `default_payout_destinations` on PATCH /v1/payout-settings, or in the payouts embedded component. `default_payout_destinations`: [declared alternatives](../models/PayoutSettingsUpdatedMerchantEventDataPreviousAttributes.md#payoutsettingsupdatedmerchanteventdatapreviousattributesdefault_payout_destinations). |
| `delay_days` | Optional | integer or null | Normal settlement delay in days before a payment's funds become available to pay out. A new account's first payments can stay pending longer; each balance transaction's available_at is when its funds become available. `delay_days`: [declared alternatives](../models/PayoutSettingsUpdatedMerchantEventDataPreviousAttributes.md#payoutsettingsupdatedmerchanteventdatapreviousattributesdelay_days). |
| `delay_days_override` | Optional | integer or null | Settlement delay in days you set in place of the account's default, 0 through 31. It doesn't guarantee the pending time of every payment; see available_at on each balance transaction. Absent when none is set. `delay_days_override`: [declared alternatives](../models/PayoutSettingsUpdatedMerchantEventDataPreviousAttributes.md#payoutsettingsupdatedmerchanteventdatapreviousattributesdelay_days_override). |
| `interval` | Optional | string or null | Payout schedule interval. Unmapped intervals are returned as other. Values: `"manual"`, `"daily"`, `"weekly"`, `"monthly"`, `"other"`. `interval`: [declared alternatives](../models/PayoutSettingsUpdatedMerchantEventDataPreviousAttributes.md#payoutsettingsupdatedmerchanteventdatapreviousattributesinterval). |
| `merchant_id` | Optional | string or null | Merchant these settings belong to. `merchant_id`: [declared alternatives](../models/PayoutSettingsUpdatedMerchantEventDataPreviousAttributes.md#payoutsettingsupdatedmerchanteventdatapreviousattributesmerchant_id). |
| `minimum_balance_currency_options` | Optional | Map of [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Amount kept in your balance instead of paid out, keyed by currency code. Absent when no minimum is set. `minimum_balance_currency_options`: [declared alternatives](../models/PayoutSettingsUpdatedMerchantEventDataPreviousAttributes.md#payoutsettingsupdatedmerchanteventdatapreviousattributesminimum_balance_currency_options). |
| `monthly_payout_days` | Optional | Array of integer or null | Days of the month, 1 through 31, on which monthly payouts are sent. `monthly_payout_days`: [declared alternatives](../models/PayoutSettingsUpdatedMerchantEventDataPreviousAttributes.md#payoutsettingsupdatedmerchanteventdatapreviousattributesmonthly_payout_days). |
| `next_actions` | Optional | Array of [NextActionPreviousAttributes](../models/NextActionPreviousAttributes.md#nextactionpreviousattributes) or null | Steps that would let payouts run, when Flint has one to suggest. Empty otherwise. `next_actions`: [declared alternatives](../models/PayoutSettingsUpdatedMerchantEventDataPreviousAttributes.md#payoutsettingsupdatedmerchanteventdatapreviousattributesnext_actions). |
| `payout_settings_id` | Optional | string or null | Stable identifier of your payout settings. `payout_settings_id`: [declared alternatives](../models/PayoutSettingsUpdatedMerchantEventDataPreviousAttributes.md#payoutsettingsupdatedmerchanteventdatapreviousattributespayout_settings_id). |
| `statement_descriptor` | Optional | string or null | Text shown on your bank statement for payouts. Absent when none is set. `statement_descriptor`: [declared alternatives](../models/PayoutSettingsUpdatedMerchantEventDataPreviousAttributes.md#payoutsettingsupdatedmerchanteventdatapreviousattributesstatement_descriptor). |
| `status` | Optional | string or null | Whether payouts can run: enabled, disabled, blocked, or pending. When it isn't enabled, blocked_reasons says why and next_actions lists any steps Flint can suggest. Values: `"enabled"`, `"disabled"`, `"blocked"`, `"pending"`. `status`: [declared alternatives](../models/PayoutSettingsUpdatedMerchantEventDataPreviousAttributes.md#payoutsettingsupdatedmerchanteventdatapreviousattributesstatus). |
| `updated_at` | Optional | string or null or null | When the stored payout settings record was last updated, as an RFC 3339 UTC instant at second precision. Without a stored record, this is your processor's update time. `null` when there is no stored record and your processor supplied no update time. `updated_at`: [declared alternatives](../models/PayoutSettingsUpdatedMerchantEventDataPreviousAttributes.md#payoutsettingsupdatedmerchanteventdatapreviousattributesupdated_at). |
| `version` | Optional | integer or null | Persisted version of this resource's owned state. Expanded resources and external observations can change independently. `version`: [declared alternatives](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdata-fields-1previous_attributesversion). |
| `weekly_payout_days` | Optional | Array of string or null | Days of the week weekly payouts are sent. Accounts set up outside Flint can report saturday or sunday; when you change the schedule, Flint accepts monday through friday. Items values: `"monday"`, `"tuesday"`, `"wednesday"`, `"thursday"`, `"friday"`, `"saturday"`, `"sunday"`. `weekly_payout_days`: [declared alternatives](../models/PayoutSettingsUpdatedMerchantEventDataPreviousAttributes.md#payoutsettingsupdatedmerchanteventdatapreviousattributesweekly_payout_days). |

### PayoutSettingsUpdatedMerchantEventDataPreviousAttributes.blocked_reasons

### PayoutSettingsUpdatedMerchantEventDataPreviousAttributes.blocked_reasons variant 1

anyOf variant 1: Why payouts can't run. Empty when nothing blocks them..

- Value shape: Array of [MoneyMovementBlockedReasonPreviousAttributes](../models/MoneyMovementBlockedReasonPreviousAttributes.md#moneymovementblockedreasonpreviousattributes). Why payouts can't run. Empty when nothing blocks them. 

### PayoutSettingsUpdatedMerchantEventDataPreviousAttributes.blocked_reasons variant 2

anyOf variant 2.

- Value shape: null. Why payouts can't run. Empty when nothing blocks them. 

### PayoutSettingsUpdatedMerchantEventDataPreviousAttributes.created_at

### PayoutSettingsUpdatedMerchantEventDataPreviousAttributes.created_at variant 1

anyOf variant 1: When Flint stored the payout settings record, as an RFC 3339 UTC instant at second precision. Null when no stored settings record exists..

- Value shape: (string or null). When Flint stored the payout settings record, as an RFC 3339 UTC instant at second precision. Null when no stored settings record exists. When Flint stored the payout settings record, as an RFC 3339 UTC instant at second precision. Null when no stored settings record exists. Format: `date-time`. 

### PayoutSettingsUpdatedMerchantEventDataPreviousAttributes.created_at variant 2

anyOf variant 2.

- Value shape: null. When Flint stored the payout settings record, as an RFC 3339 UTC instant at second precision. Null when no stored settings record exists. 

### PayoutSettingsUpdatedMerchantEventDataPreviousAttributes.default_payout_destinations

### PayoutSettingsUpdatedMerchantEventDataPreviousAttributes.default_payout_destinations variant 1

anyOf variant 1.

- Value shape: Map of string. Default payout destination for each currency, as a map from currency code to payout_destination_id. Empty when no defaults are configured. Change a currency's default with `default_payout_destinations` on PATCH /v1/payout-settings, or in the payouts embedded component. 

### PayoutSettingsUpdatedMerchantEventDataPreviousAttributes.default_payout_destinations variant 2

anyOf variant 2.

- Value shape: null. Default payout destination for each currency, as a map from currency code to payout_destination_id. Empty when no defaults are configured. Change a currency's default with `default_payout_destinations` on PATCH /v1/payout-settings, or in the payouts embedded component. 

### PayoutSettingsUpdatedMerchantEventDataPreviousAttributes.delay_days

### PayoutSettingsUpdatedMerchantEventDataPreviousAttributes.delay_days variant 1

anyOf variant 1: Normal settlement delay in days before a payment's funds become available to pay out. A new account's first payments can stay pending longer; each balance transaction's available_at is when its funds become available..

- Value shape: integer. Normal settlement delay in days before a payment's funds become available to pay out. A new account's first payments can stay pending longer; each balance transaction's available_at is when its funds become available. Normal settlement delay in days before a payment's funds become available to pay out. A new account's first payments can stay pending longer; each balance transaction's available_at is when its funds become available. Format: `int32`. 

### PayoutSettingsUpdatedMerchantEventDataPreviousAttributes.delay_days variant 2

anyOf variant 2.

- Value shape: null. Normal settlement delay in days before a payment's funds become available to pay out. A new account's first payments can stay pending longer; each balance transaction's available_at is when its funds become available. 

### PayoutSettingsUpdatedMerchantEventDataPreviousAttributes.delay_days_override

### PayoutSettingsUpdatedMerchantEventDataPreviousAttributes.delay_days_override variant 1

anyOf variant 1: Settlement delay in days you set in place of the account's default, 0 through 31. It doesn't guarantee the pending time of every payment; see available_at on each balance transaction. Absent when none is set..

- Value shape: integer. Settlement delay in days you set in place of the account's default, 0 through 31. It doesn't guarantee the pending time of every payment; see available_at on each balance transaction. Absent when none is set. Settlement delay in days you set in place of the account's default, 0 through 31. It doesn't guarantee the pending time of every payment; see available_at on each balance transaction. Absent when none is set. Format: `int32`. 

### PayoutSettingsUpdatedMerchantEventDataPreviousAttributes.delay_days_override variant 2

anyOf variant 2.

- Value shape: null. Settlement delay in days you set in place of the account's default, 0 through 31. It doesn't guarantee the pending time of every payment; see available_at on each balance transaction. Absent when none is set. 

### PayoutSettingsUpdatedMerchantEventDataPreviousAttributes.interval

### PayoutSettingsUpdatedMerchantEventDataPreviousAttributes.interval variant 1

anyOf variant 1: Payout schedule interval. Unmapped intervals are returned as other..

- Value shape: string. Payout schedule interval. Unmapped intervals are returned as other. Values: `"manual"`, `"daily"`, `"weekly"`, `"monthly"`, `"other"`.

### PayoutSettingsUpdatedMerchantEventDataPreviousAttributes.interval variant 2

anyOf variant 2.

- Value shape: null. Payout schedule interval. Unmapped intervals are returned as other. 

### PayoutSettingsUpdatedMerchantEventDataPreviousAttributes.merchant_id

### PayoutSettingsUpdatedMerchantEventDataPreviousAttributes.merchant_id variant 1

anyOf variant 1: Merchant these settings belong to..

- Value shape: string. Merchant these settings belong to. 

### PayoutSettingsUpdatedMerchantEventDataPreviousAttributes.merchant_id variant 2

anyOf variant 2.

- Value shape: null. Merchant these settings belong to. 

### PayoutSettingsUpdatedMerchantEventDataPreviousAttributes.minimum_balance_currency_options

### PayoutSettingsUpdatedMerchantEventDataPreviousAttributes.minimum_balance_currency_options variant 1

anyOf variant 1.

- Value shape: Map of [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes). Amount kept in your balance instead of paid out, keyed by currency code. Absent when no minimum is set. 

### PayoutSettingsUpdatedMerchantEventDataPreviousAttributes.minimum_balance_currency_options variant 2

anyOf variant 2.

- Value shape: null. Amount kept in your balance instead of paid out, keyed by currency code. Absent when no minimum is set. 

### PayoutSettingsUpdatedMerchantEventDataPreviousAttributes.monthly_payout_days

### PayoutSettingsUpdatedMerchantEventDataPreviousAttributes.monthly_payout_days variant 1

anyOf variant 1: Days of the month, 1 through 31, on which monthly payouts are sent..

- Value shape: Array of integer. Days of the month, 1 through 31, on which monthly payouts are sent. Items: Format: `int32`. 

### PayoutSettingsUpdatedMerchantEventDataPreviousAttributes.monthly_payout_days variant 2

anyOf variant 2.

- Value shape: null. Days of the month, 1 through 31, on which monthly payouts are sent. 

### PayoutSettingsUpdatedMerchantEventDataPreviousAttributes.next_actions

### PayoutSettingsUpdatedMerchantEventDataPreviousAttributes.next_actions variant 1

anyOf variant 1: Steps that would let payouts run, when Flint has one to suggest. Empty otherwise..

- Value shape: Array of [NextActionPreviousAttributes](../models/NextActionPreviousAttributes.md#nextactionpreviousattributes). Steps that would let payouts run, when Flint has one to suggest. Empty otherwise. 

### PayoutSettingsUpdatedMerchantEventDataPreviousAttributes.next_actions variant 2

anyOf variant 2.

- Value shape: null. Steps that would let payouts run, when Flint has one to suggest. Empty otherwise. 

### PayoutSettingsUpdatedMerchantEventDataPreviousAttributes.next_actions variant 1.[] fields 1

Field definitions: [CheckoutProblemResourcePreviousAttributes.remediation variant 1.next_actions variant 1.[] fields 1](../models/CheckoutProblemResourcePreviousAttributes.md#checkoutproblemresourcepreviousattributesremediation-variant-1next_actions-variant-1-fields-1).

### PayoutSettingsUpdatedMerchantEventDataPreviousAttributes.payout_settings_id

### PayoutSettingsUpdatedMerchantEventDataPreviousAttributes.payout_settings_id variant 1

anyOf variant 1: Stable identifier of your payout settings..

- Value shape: string. Stable identifier of your payout settings. 

### PayoutSettingsUpdatedMerchantEventDataPreviousAttributes.payout_settings_id variant 2

anyOf variant 2.

- Value shape: null. Stable identifier of your payout settings. 

### PayoutSettingsUpdatedMerchantEventDataPreviousAttributes.statement_descriptor

### PayoutSettingsUpdatedMerchantEventDataPreviousAttributes.statement_descriptor variant 1

anyOf variant 1: Text shown on your bank statement for payouts. Absent when none is set..

- Value shape: string. Text shown on your bank statement for payouts. Absent when none is set. 

### PayoutSettingsUpdatedMerchantEventDataPreviousAttributes.statement_descriptor variant 2

anyOf variant 2.

- Value shape: null. Text shown on your bank statement for payouts. Absent when none is set. 

### PayoutSettingsUpdatedMerchantEventDataPreviousAttributes.status

### PayoutSettingsUpdatedMerchantEventDataPreviousAttributes.status variant 1

anyOf variant 1: Whether payouts can run: enabled, disabled, blocked, or pending. When it isn't enabled, blocked_reasons says why and next_actions lists any steps Flint can suggest..

- Value shape: string. Whether payouts can run: enabled, disabled, blocked, or pending. When it isn't enabled, blocked_reasons says why and next_actions lists any steps Flint can suggest. Values: `"enabled"`, `"disabled"`, `"blocked"`, `"pending"`.

### PayoutSettingsUpdatedMerchantEventDataPreviousAttributes.status variant 2

anyOf variant 2.

- Value shape: null. Whether payouts can run: enabled, disabled, blocked, or pending. When it isn't enabled, blocked_reasons says why and next_actions lists any steps Flint can suggest. 

### PayoutSettingsUpdatedMerchantEventDataPreviousAttributes.updated_at

### PayoutSettingsUpdatedMerchantEventDataPreviousAttributes.updated_at variant 1

anyOf variant 1: When the stored payout settings record was last updated, as an RFC 3339 UTC instant at second precision. Without a stored record, this is your processor's update time. `null` when there is no stored record and your processor supplied no update time..

- Value shape: (string or null). When the stored payout settings record was last updated, as an RFC 3339 UTC instant at second precision. Without a stored record, this is your processor's update time. `null` when there is no stored record and your processor supplied no update time. When the stored payout settings record was last updated, as an RFC 3339 UTC instant at second precision. Without a stored record, this is your processor's update time. `null` when there is no stored record and your processor supplied no update time. Format: `date-time`. 

### PayoutSettingsUpdatedMerchantEventDataPreviousAttributes.updated_at variant 2

anyOf variant 2.

- Value shape: null. When the stored payout settings record was last updated, as an RFC 3339 UTC instant at second precision. Without a stored record, this is your processor's update time. `null` when there is no stored record and your processor supplied no update time. 

### PayoutSettingsUpdatedMerchantEventDataPreviousAttributes.version

Declared alternatives: [PaymentSplitCanceledEvent.data fields 1.previous_attributes.version](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdata-fields-1previous_attributesversion).

### PayoutSettingsUpdatedMerchantEventDataPreviousAttributes.weekly_payout_days

### PayoutSettingsUpdatedMerchantEventDataPreviousAttributes.weekly_payout_days variant 1

anyOf variant 1: Days of the week weekly payouts are sent. Accounts set up outside Flint can report saturday or sunday; when you change the schedule, Flint accepts monday through friday..

- Value shape: Array of string. Days of the week weekly payouts are sent. Accounts set up outside Flint can report saturday or sunday; when you change the schedule, Flint accepts monday through friday. Items values: `"monday"`, `"tuesday"`, `"wednesday"`, `"thursday"`, `"friday"`, `"saturday"`, `"sunday"`.

### PayoutSettingsUpdatedMerchantEventDataPreviousAttributes.weekly_payout_days variant 2

anyOf variant 2.

- Value shape: null. Days of the week weekly payouts are sent. Accounts set up outside Flint can report saturday or sunday; when you change the schedule, Flint accepts monday through friday. 

