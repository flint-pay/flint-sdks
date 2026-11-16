[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PayoutSettingsUpdatedInstalledMerchantsEventInput

The `payout_settings.updated` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. Example: `"2026-08-02"`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `data` | Required | object | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/PayoutSettingsUpdatedInstalledMerchantsEventInput.md#payoutsettingsupdatedinstalledmerchantseventinputdata). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"installed_merchants"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"payout_settings.updated"`. |
| `partner_app_id` | Required | string | ID of the partner app that owns the receiving endpoint. Example: `"papp_01KEZF7C00Y8VMXYZ1GNPP3WHV"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [PartnerWebhookEnvelopeSourceInput](../models/PartnerWebhookEnvelopeSourceInput.md#partnerwebhookenvelopesourceinput) and object | The merchant and partner app install this event concerns, with environment details for installed-merchant events. The merchant and partner app install the event concerns. Environment fields are present for installed-merchant events. `source`: [field definitions](../models/BalanceTransactionCreatedInstalledMerchantsEventInput.md#balancetransactioncreatedinstalledmerchantseventinputsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. Example: `"whev_01KEZF7C00362MS3HV970TRZGS"`. |

### PayoutSettingsUpdatedInstalledMerchantsEventInput.data

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/PayoutSettingsUpdatedInstalledMerchantsEventInput.md#payoutsettingsupdatedinstalledmerchantseventinputdataobject). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/PayoutSettingsUpdatedInstalledMerchantsEventInput.md#payoutsettingsupdatedinstalledmerchantseventinputdataprevious_attributes). |

### PayoutSettingsUpdatedInstalledMerchantsEventInput.data.object

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.

Field definitions: [shared fields](PayoutSettingsInput.md#payoutsettingsinput).

### PayoutSettingsUpdatedInstalledMerchantsEventInput.data.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `blocked_reasons` | Optional | Array of [MoneyMovementBlockedReasonInput](../models/MoneyMovementBlockedReasonInput.md#moneymovementblockedreasoninput) or null | Why payouts can't run. Empty when nothing blocks them. `blocked_reasons`: [declared alternatives](../models/PayoutSettingsUpdatedInstalledMerchantsEventInput.md#payoutsettingsupdatedinstalledmerchantseventinputdataprevious_attributesblocked_reasons). |
| `created_at` | Optional | string or null or null | When Flint stored the payout settings record, as an RFC 3339 UTC instant at second precision. Null when no stored settings record exists. `created_at`: [declared alternatives](../models/PayoutSettingsUpdatedInstalledMerchantsEventInput.md#payoutsettingsupdatedinstalledmerchantseventinputdataprevious_attributescreated_at). |
| `default_payout_destinations` | Optional | Map of string or null | Default payout destination for each currency, as a map from currency code to payout_destination_id. Empty when no defaults are configured. Change a currency's default with `default_payout_destinations` on PATCH /v1/payout-settings, or in the payouts embedded component. `default_payout_destinations`: [declared alternatives](../models/PayoutSettingsUpdatedInstalledMerchantsEventInput.md#payoutsettingsupdatedinstalledmerchantseventinputdataprevious_attributesdefault_payout_destinations). |
| `delay_days` | Optional | integer or null | Normal settlement delay in days before a payment's funds become available to pay out. A new account's first payments can stay pending longer; each balance transaction's available_at is when its funds become available. `delay_days`: [declared alternatives](../models/PayoutSettingsUpdatedInstalledMerchantsEventInput.md#payoutsettingsupdatedinstalledmerchantseventinputdataprevious_attributesdelay_days). |
| `delay_days_override` | Optional | integer or null | Settlement delay in days you set in place of the account's default, 0 through 31. It doesn't guarantee the pending time of every payment; see available_at on each balance transaction. Absent when none is set. `delay_days_override`: [declared alternatives](../models/PayoutSettingsUpdatedInstalledMerchantsEventInput.md#payoutsettingsupdatedinstalledmerchantseventinputdataprevious_attributesdelay_days_override). |
| `interval` | Optional | string or null | Payout schedule interval. Unmapped intervals are returned as other. Values: `"manual"`, `"daily"`, `"weekly"`, `"monthly"`, `"other"`. `interval`: [declared alternatives](../models/PayoutSettingsUpdatedInstalledMerchantsEventInput.md#payoutsettingsupdatedinstalledmerchantseventinputdataprevious_attributesinterval). |
| `merchant_id` | Optional | string or null | Merchant these settings belong to. `merchant_id`: [declared alternatives](../models/PayoutSettingsUpdatedInstalledMerchantsEventInput.md#payoutsettingsupdatedinstalledmerchantseventinputdataprevious_attributesmerchant_id). |
| `minimum_balance_currency_options` | Optional | Map of [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) or null | Amount kept in your balance instead of paid out, keyed by currency code. Absent when no minimum is set. `minimum_balance_currency_options`: [declared alternatives](../models/PayoutSettingsUpdatedInstalledMerchantsEventInput.md#payoutsettingsupdatedinstalledmerchantseventinputdataprevious_attributesminimum_balance_currency_options). |
| `monthly_payout_days` | Optional | Array of integer or null | Days of the month, 1 through 31, on which monthly payouts are sent. `monthly_payout_days`: [declared alternatives](../models/PayoutSettingsUpdatedInstalledMerchantsEventInput.md#payoutsettingsupdatedinstalledmerchantseventinputdataprevious_attributesmonthly_payout_days). |
| `next_actions` | Optional | Array of [NextActionInput](../models/NextActionInput.md#nextactioninput) or null | Steps that would let payouts run, when Flint has one to suggest. Empty otherwise. `next_actions`: [declared alternatives](../models/PayoutSettingsUpdatedInstalledMerchantsEventInput.md#payoutsettingsupdatedinstalledmerchantseventinputdataprevious_attributesnext_actions). |
| `payout_settings_id` | Optional | string or null | Stable identifier of your payout settings. `payout_settings_id`: [declared alternatives](../models/PayoutSettingsUpdatedInstalledMerchantsEventInput.md#payoutsettingsupdatedinstalledmerchantseventinputdataprevious_attributespayout_settings_id). |
| `statement_descriptor` | Optional | string or null | Text shown on your bank statement for payouts. Absent when none is set. `statement_descriptor`: [declared alternatives](../models/PayoutSettingsUpdatedInstalledMerchantsEventInput.md#payoutsettingsupdatedinstalledmerchantseventinputdataprevious_attributesstatement_descriptor). |
| `status` | Optional | string or null | Whether payouts can run: enabled, disabled, blocked, or pending. When it isn't enabled, blocked_reasons says why and next_actions lists any steps Flint can suggest. Values: `"enabled"`, `"disabled"`, `"blocked"`, `"pending"`. `status`: [declared alternatives](../models/PayoutSettingsUpdatedInstalledMerchantsEventInput.md#payoutsettingsupdatedinstalledmerchantseventinputdataprevious_attributesstatus). |
| `updated_at` | Optional | string or null or null | When the stored payout settings record was last updated, as an RFC 3339 UTC instant at second precision. Without a stored record, this is your processor's update time. `null` when there is no stored record and your processor supplied no update time. `updated_at`: [declared alternatives](../models/PayoutSettingsUpdatedInstalledMerchantsEventInput.md#payoutsettingsupdatedinstalledmerchantseventinputdataprevious_attributesupdated_at). |
| `version` | Optional | integer or null | Persisted version of this resource's owned state. Expanded resources and external observations can change independently. `version`: [declared alternatives](../models/CheckoutSessionClosedInstalledMerchantsEventInput.md#checkoutsessionclosedinstalledmerchantseventinputdataprevious_attributesversion). |
| `weekly_payout_days` | Optional | Array of string or null | Days of the week weekly payouts are sent. Accounts set up outside Flint can report saturday or sunday; when you change the schedule, Flint accepts monday through friday. Items values: `"monday"`, `"tuesday"`, `"wednesday"`, `"thursday"`, `"friday"`, `"saturday"`, `"sunday"`. `weekly_payout_days`: [declared alternatives](../models/PayoutSettingsUpdatedInstalledMerchantsEventInput.md#payoutsettingsupdatedinstalledmerchantseventinputdataprevious_attributesweekly_payout_days). |

### PayoutSettingsUpdatedInstalledMerchantsEventInput.data.previous_attributes.blocked_reasons

### PayoutSettingsUpdatedInstalledMerchantsEventInput.data.previous_attributes.blocked_reasons variant 1

anyOf variant 1: Why payouts can't run. Empty when nothing blocks them..

- Value shape: Array of [MoneyMovementBlockedReasonInput](../models/MoneyMovementBlockedReasonInput.md#moneymovementblockedreasoninput). Why payouts can't run. Empty when nothing blocks them. 

### PayoutSettingsUpdatedInstalledMerchantsEventInput.data.previous_attributes.blocked_reasons variant 2

anyOf variant 2.

- Value shape: null. Why payouts can't run. Empty when nothing blocks them. 

### PayoutSettingsUpdatedInstalledMerchantsEventInput.data.previous_attributes.created_at

### PayoutSettingsUpdatedInstalledMerchantsEventInput.data.previous_attributes.created_at variant 1

anyOf variant 1: When Flint stored the payout settings record, as an RFC 3339 UTC instant at second precision. Null when no stored settings record exists..

- Value shape: (string or null). When Flint stored the payout settings record, as an RFC 3339 UTC instant at second precision. Null when no stored settings record exists. When Flint stored the payout settings record, as an RFC 3339 UTC instant at second precision. Null when no stored settings record exists. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### PayoutSettingsUpdatedInstalledMerchantsEventInput.data.previous_attributes.created_at variant 2

anyOf variant 2.

- Value shape: null. When Flint stored the payout settings record, as an RFC 3339 UTC instant at second precision. Null when no stored settings record exists. 

### PayoutSettingsUpdatedInstalledMerchantsEventInput.data.previous_attributes.default_payout_destinations

### PayoutSettingsUpdatedInstalledMerchantsEventInput.data.previous_attributes.default_payout_destinations variant 1

anyOf variant 1: Default payout destination for each currency, as a map from currency code to payout_destination_id. Empty when no defaults are configured. Change a currency's default with `default_payout_destinations` on PATCH /v1/payout-settings, or in the payouts embedded component..

- Value shape: Map of string. Default payout destination for each currency, as a map from currency code to payout_destination_id. Empty when no defaults are configured. Change a currency's default with `default_payout_destinations` on PATCH /v1/payout-settings, or in the payouts embedded component. 

### PayoutSettingsUpdatedInstalledMerchantsEventInput.data.previous_attributes.default_payout_destinations variant 2

anyOf variant 2.

- Value shape: null. Default payout destination for each currency, as a map from currency code to payout_destination_id. Empty when no defaults are configured. Change a currency's default with `default_payout_destinations` on PATCH /v1/payout-settings, or in the payouts embedded component. 

### PayoutSettingsUpdatedInstalledMerchantsEventInput.data.previous_attributes.delay_days

### PayoutSettingsUpdatedInstalledMerchantsEventInput.data.previous_attributes.delay_days variant 1

anyOf variant 1: Normal settlement delay in days before a payment's funds become available to pay out. A new account's first payments can stay pending longer; each balance transaction's available_at is when its funds become available..

- Value shape: integer. Normal settlement delay in days before a payment's funds become available to pay out. A new account's first payments can stay pending longer; each balance transaction's available_at is when its funds become available. Normal settlement delay in days before a payment's funds become available to pay out. A new account's first payments can stay pending longer; each balance transaction's available_at is when its funds become available. Format: `int32`. 

### PayoutSettingsUpdatedInstalledMerchantsEventInput.data.previous_attributes.delay_days variant 2

anyOf variant 2.

- Value shape: null. Normal settlement delay in days before a payment's funds become available to pay out. A new account's first payments can stay pending longer; each balance transaction's available_at is when its funds become available. 

### PayoutSettingsUpdatedInstalledMerchantsEventInput.data.previous_attributes.delay_days_override

### PayoutSettingsUpdatedInstalledMerchantsEventInput.data.previous_attributes.delay_days_override variant 1

anyOf variant 1: Settlement delay in days you set in place of the account's default, 0 through 31. It doesn't guarantee the pending time of every payment; see available_at on each balance transaction. Absent when none is set..

- Value shape: integer. Settlement delay in days you set in place of the account's default, 0 through 31. It doesn't guarantee the pending time of every payment; see available_at on each balance transaction. Absent when none is set. Settlement delay in days you set in place of the account's default, 0 through 31. It doesn't guarantee the pending time of every payment; see available_at on each balance transaction. Absent when none is set. Format: `int32`. 

### PayoutSettingsUpdatedInstalledMerchantsEventInput.data.previous_attributes.delay_days_override variant 2

anyOf variant 2.

- Value shape: null. Settlement delay in days you set in place of the account's default, 0 through 31. It doesn't guarantee the pending time of every payment; see available_at on each balance transaction. Absent when none is set. 

### PayoutSettingsUpdatedInstalledMerchantsEventInput.data.previous_attributes.interval

### PayoutSettingsUpdatedInstalledMerchantsEventInput.data.previous_attributes.interval variant 1

anyOf variant 1: Payout schedule interval. Unmapped intervals are returned as other..

- Value shape: string. Payout schedule interval. Unmapped intervals are returned as other. Values: `"manual"`, `"daily"`, `"weekly"`, `"monthly"`, `"other"`.

### PayoutSettingsUpdatedInstalledMerchantsEventInput.data.previous_attributes.interval variant 2

anyOf variant 2.

- Value shape: null. Payout schedule interval. Unmapped intervals are returned as other. 

### PayoutSettingsUpdatedInstalledMerchantsEventInput.data.previous_attributes.merchant_id

### PayoutSettingsUpdatedInstalledMerchantsEventInput.data.previous_attributes.merchant_id variant 1

anyOf variant 1: Merchant these settings belong to..

- Value shape: string. Merchant these settings belong to. Merchant these settings belong to. Example: `"mer_01KEZF7C00KPYH1DDFPCCX3B6E"`. 

### PayoutSettingsUpdatedInstalledMerchantsEventInput.data.previous_attributes.merchant_id variant 2

anyOf variant 2.

- Value shape: null. Merchant these settings belong to. 

### PayoutSettingsUpdatedInstalledMerchantsEventInput.data.previous_attributes.minimum_balance_currency_options

### PayoutSettingsUpdatedInstalledMerchantsEventInput.data.previous_attributes.minimum_balance_currency_options variant 1

anyOf variant 1: Amount kept in your balance instead of paid out, keyed by currency code. Absent when no minimum is set..

- Value shape: Map of [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput). Amount kept in your balance instead of paid out, keyed by currency code. Absent when no minimum is set. 

### PayoutSettingsUpdatedInstalledMerchantsEventInput.data.previous_attributes.minimum_balance_currency_options variant 2

anyOf variant 2.

- Value shape: null. Amount kept in your balance instead of paid out, keyed by currency code. Absent when no minimum is set. 

### PayoutSettingsUpdatedInstalledMerchantsEventInput.data.previous_attributes.monthly_payout_days

### PayoutSettingsUpdatedInstalledMerchantsEventInput.data.previous_attributes.monthly_payout_days variant 1

anyOf variant 1: Days of the month, 1 through 31, on which monthly payouts are sent..

- Value shape: Array of integer. Days of the month, 1 through 31, on which monthly payouts are sent. Items: Format: `int32`. 

### PayoutSettingsUpdatedInstalledMerchantsEventInput.data.previous_attributes.monthly_payout_days variant 2

anyOf variant 2.

- Value shape: null. Days of the month, 1 through 31, on which monthly payouts are sent. 

### PayoutSettingsUpdatedInstalledMerchantsEventInput.data.previous_attributes.next_actions

### PayoutSettingsUpdatedInstalledMerchantsEventInput.data.previous_attributes.next_actions variant 1

anyOf variant 1: Steps that would let payouts run, when Flint has one to suggest. Empty otherwise..

- Value shape: Array of [NextActionInput](../models/NextActionInput.md#nextactioninput). Steps that would let payouts run, when Flint has one to suggest. Empty otherwise. 

### PayoutSettingsUpdatedInstalledMerchantsEventInput.data.previous_attributes.next_actions variant 2

anyOf variant 2.

- Value shape: null. Steps that would let payouts run, when Flint has one to suggest. Empty otherwise. 

### PayoutSettingsUpdatedInstalledMerchantsEventInput.data.previous_attributes.payout_settings_id

### PayoutSettingsUpdatedInstalledMerchantsEventInput.data.previous_attributes.payout_settings_id variant 1

anyOf variant 1: Stable identifier of your payout settings..

- Value shape: string. Stable identifier of your payout settings. Stable identifier of your payout settings. Example: `"pset_01KEZF7C0027X093301CQ36WSZ"`. 

### PayoutSettingsUpdatedInstalledMerchantsEventInput.data.previous_attributes.payout_settings_id variant 2

anyOf variant 2.

- Value shape: null. Stable identifier of your payout settings. 

### PayoutSettingsUpdatedInstalledMerchantsEventInput.data.previous_attributes.statement_descriptor

### PayoutSettingsUpdatedInstalledMerchantsEventInput.data.previous_attributes.statement_descriptor variant 1

anyOf variant 1: Text shown on your bank statement for payouts. Absent when none is set..

- Value shape: string. Text shown on your bank statement for payouts. Absent when none is set. 

### PayoutSettingsUpdatedInstalledMerchantsEventInput.data.previous_attributes.statement_descriptor variant 2

anyOf variant 2.

- Value shape: null. Text shown on your bank statement for payouts. Absent when none is set. 

### PayoutSettingsUpdatedInstalledMerchantsEventInput.data.previous_attributes.status

### PayoutSettingsUpdatedInstalledMerchantsEventInput.data.previous_attributes.status variant 1

anyOf variant 1: Whether payouts can run: enabled, disabled, blocked, or pending. When it isn't enabled, blocked_reasons says why and next_actions lists any steps Flint can suggest..

- Value shape: string. Whether payouts can run: enabled, disabled, blocked, or pending. When it isn't enabled, blocked_reasons says why and next_actions lists any steps Flint can suggest. Values: `"enabled"`, `"disabled"`, `"blocked"`, `"pending"`.

### PayoutSettingsUpdatedInstalledMerchantsEventInput.data.previous_attributes.status variant 2

anyOf variant 2.

- Value shape: null. Whether payouts can run: enabled, disabled, blocked, or pending. When it isn't enabled, blocked_reasons says why and next_actions lists any steps Flint can suggest. 

### PayoutSettingsUpdatedInstalledMerchantsEventInput.data.previous_attributes.updated_at

### PayoutSettingsUpdatedInstalledMerchantsEventInput.data.previous_attributes.updated_at variant 1

anyOf variant 1: When the stored payout settings record was last updated, as an RFC 3339 UTC instant at second precision. Without a stored record, this is your processor's update time. `null` when there is no stored record and your processor supplied no update time..

- Value shape: (string or null). When the stored payout settings record was last updated, as an RFC 3339 UTC instant at second precision. Without a stored record, this is your processor's update time. `null` when there is no stored record and your processor supplied no update time. When the stored payout settings record was last updated, as an RFC 3339 UTC instant at second precision. Without a stored record, this is your processor's update time. `null` when there is no stored record and your processor supplied no update time. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### PayoutSettingsUpdatedInstalledMerchantsEventInput.data.previous_attributes.updated_at variant 2

anyOf variant 2.

- Value shape: null. When the stored payout settings record was last updated, as an RFC 3339 UTC instant at second precision. Without a stored record, this is your processor's update time. `null` when there is no stored record and your processor supplied no update time. 

### PayoutSettingsUpdatedInstalledMerchantsEventInput.data.previous_attributes.version

Declared alternatives: [CheckoutSessionClosedInstalledMerchantsEventInput.data.previous_attributes.version](../models/CheckoutSessionClosedInstalledMerchantsEventInput.md#checkoutsessionclosedinstalledmerchantseventinputdataprevious_attributesversion).

### PayoutSettingsUpdatedInstalledMerchantsEventInput.data.previous_attributes.weekly_payout_days

### PayoutSettingsUpdatedInstalledMerchantsEventInput.data.previous_attributes.weekly_payout_days variant 1

anyOf variant 1: Days of the week weekly payouts are sent. Accounts set up outside Flint can report saturday or sunday; when you change the schedule, Flint accepts monday through friday..

- Value shape: Array of string. Days of the week weekly payouts are sent. Accounts set up outside Flint can report saturday or sunday; when you change the schedule, Flint accepts monday through friday. Items values: `"monday"`, `"tuesday"`, `"wednesday"`, `"thursday"`, `"friday"`, `"saturday"`, `"sunday"`.

### PayoutSettingsUpdatedInstalledMerchantsEventInput.data.previous_attributes.weekly_payout_days variant 2

anyOf variant 2.

- Value shape: null. Days of the week weekly payouts are sent. Accounts set up outside Flint can report saturday or sunday; when you change the schedule, Flint accepts monday through friday. 

### PayoutSettingsUpdatedInstalledMerchantsEventInput.source

Field definitions: [BalanceTransactionCreatedInstalledMerchantsEventInput.source](../models/BalanceTransactionCreatedInstalledMerchantsEventInput.md#balancetransactioncreatedinstalledmerchantseventinputsource).

