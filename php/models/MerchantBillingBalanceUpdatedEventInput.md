[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## MerchantBillingBalanceUpdatedEventInput

The `merchant_billing_balance.updated` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. Example: `"2026-08-02"`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `data` | Required | object | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/MerchantBillingBalanceUpdatedEventInput.md#merchantbillingbalanceupdatedeventinputdata). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"merchant"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"merchant_billing_balance.updated"`. |
| `merchant_id` | Required | string | ID of the merchant this resource belongs to. Example: `"mer_01KEZF7C00KPYH1DDFPCCX3B6E"`. |
| `mode` | Required | string | Environment used for this resource or request. Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | object or null | The originating request. `null` when the event has no originating request ID. `request`: [field definitions](../models/ApiKeyCreatedEventInput.md#apikeycreatedeventinputrequest). |
| `sandbox_id` | Optional | string | Public sandbox ID for this event. Present exactly when mode is test; omitted in live mode. Example: `"test_01KEZF7C00JC77HTMTB2XHNPE0"`. |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. Example: `"whev_01KEZF7C00362MS3HV970TRZGS"`. |

### MerchantBillingBalanceUpdatedEventInput.data

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/MerchantBillingBalanceUpdatedEventInput.md#merchantbillingbalanceupdatedeventinputdataobject). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/MerchantBillingBalanceUpdatedEventInput.md#merchantbillingbalanceupdatedeventinputdataprevious_attributes). |

### MerchantBillingBalanceUpdatedEventInput.data.object

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.

Field definitions: [shared fields](MerchantBillingBalanceInput.md#merchantbillingbalanceinput).

### MerchantBillingBalanceUpdatedEventInput.data.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `available_credit_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) or null | Account credit Flint holds for you that hasn't been applied yet, unsigned. Each application lowers both amounts and records a credit_applied entry. |
| `currency` | Optional | string or null | ISO 4217 currency code. `currency`: [declared alternatives](../models/BalanceTransactionUpdatedInstalledMerchantsEventInput.md#balancetransactionupdatedinstalledmerchantseventinputdataprevious_attributescurrency). |
| `merchant_billing_balance_id` | Optional | string or null | Stable identifier for this billing account and currency balance projection. `merchant_billing_balance_id`: [declared alternatives](../models/MerchantBillingBalanceUpdatedEventInput.md#merchantbillingbalanceupdatedeventinputdataprevious_attributesmerchant_billing_balance_id). |
| `observed_at` | Optional | string or null | RFC3339 timestamp for the balance snapshot. `observed_at`: [declared alternatives](../models/MerchantBillingBalanceUpdatedEventInput.md#merchantbillingbalanceupdatedeventinputdataprevious_attributesobserved_at). |
| `outstanding_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) or null | What you owe Flint now, unsigned. Available credit isn't subtracted: credit lowers this amount only when Flint applies it, which records a credit_applied entry. |
| `past_due_at` | Optional | string or null | Due date of the oldest unpaid past-due amount, as an RFC 3339 UTC timestamp. Omitted when nothing is past due. `past_due_at`: [declared alternatives](../models/MerchantBillingBalanceUpdatedEventInput.md#merchantbillingbalanceupdatedeventinputdataprevious_attributespast_due_at). |
| `past_due_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) or null | Amount that is past its due date and still unpaid. Zero when nothing is past due. |
| `payout_hold_at` | Optional | string or null | Time at which Flint holds payouts if the past-due amount is still unpaid, as an RFC 3339 UTC timestamp. The hold can begin later than this while a collection is in progress. Payouts are actually held when `readiness.payouts.status_reason` on the Merchant is `billing_suspended`. Omitted when no hold is scheduled, for example when the only past-due amounts never hold payouts. `payout_hold_at`: [declared alternatives](../models/MerchantBillingBalanceUpdatedEventInput.md#merchantbillingbalanceupdatedeventinputdataprevious_attributespayout_hold_at). |

### MerchantBillingBalanceUpdatedEventInput.data.previous_attributes.currency

Declared alternatives: [BalanceTransactionUpdatedInstalledMerchantsEventInput.data.previous_attributes.currency](../models/BalanceTransactionUpdatedInstalledMerchantsEventInput.md#balancetransactionupdatedinstalledmerchantseventinputdataprevious_attributescurrency).

### MerchantBillingBalanceUpdatedEventInput.data.previous_attributes.merchant_billing_balance_id

### MerchantBillingBalanceUpdatedEventInput.data.previous_attributes.merchant_billing_balance_id variant 1

anyOf variant 1: Stable identifier for this billing account and currency balance projection..

- Value shape: string. Stable identifier for this billing account and currency balance projection. Stable identifier for this billing account and currency balance projection. Example: `"mbbal_01KEZF7C002TWWZA70R4DRVJC9"`. 

### MerchantBillingBalanceUpdatedEventInput.data.previous_attributes.merchant_billing_balance_id variant 2

anyOf variant 2.

- Value shape: null. Stable identifier for this billing account and currency balance projection. 

### MerchantBillingBalanceUpdatedEventInput.data.previous_attributes.observed_at

### MerchantBillingBalanceUpdatedEventInput.data.previous_attributes.observed_at variant 1

anyOf variant 1: RFC3339 timestamp for the balance snapshot..

- Value shape: string. RFC3339 timestamp for the balance snapshot. RFC3339 timestamp for the balance snapshot. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### MerchantBillingBalanceUpdatedEventInput.data.previous_attributes.observed_at variant 2

anyOf variant 2.

- Value shape: null. RFC3339 timestamp for the balance snapshot. 

### MerchantBillingBalanceUpdatedEventInput.data.previous_attributes.past_due_at

### MerchantBillingBalanceUpdatedEventInput.data.previous_attributes.past_due_at variant 1

anyOf variant 1: Due date of the oldest unpaid past-due amount, as an RFC 3339 UTC timestamp. Omitted when nothing is past due..

- Value shape: string. Due date of the oldest unpaid past-due amount, as an RFC 3339 UTC timestamp. Omitted when nothing is past due. Due date of the oldest unpaid past-due amount, as an RFC 3339 UTC timestamp. Omitted when nothing is past due. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### MerchantBillingBalanceUpdatedEventInput.data.previous_attributes.past_due_at variant 2

anyOf variant 2.

- Value shape: null. Due date of the oldest unpaid past-due amount, as an RFC 3339 UTC timestamp. Omitted when nothing is past due. 

### MerchantBillingBalanceUpdatedEventInput.data.previous_attributes.payout_hold_at

### MerchantBillingBalanceUpdatedEventInput.data.previous_attributes.payout_hold_at variant 1

anyOf variant 1: Time at which Flint holds payouts if the past-due amount is still unpaid, as an RFC 3339 UTC timestamp. The hold can begin later than this while a collection is in progress. Payouts are actually held when `readiness.payouts.status_reason` on the Merchant is `billing_suspended`. Omitted when no hold is scheduled, for example when the only past-due amounts never hold payouts..

- Value shape: string. Time at which Flint holds payouts if the past-due amount is still unpaid, as an RFC 3339 UTC timestamp. The hold can begin later than this while a collection is in progress. Payouts are actually held when `readiness.payouts.status_reason` on the Merchant is `billing_suspended`. Omitted when no hold is scheduled, for example when the only past-due amounts never hold payouts. Time at which Flint holds payouts if the past-due amount is still unpaid, as an RFC 3339 UTC timestamp. The hold can begin later than this while a collection is in progress. Payouts are actually held when `readiness.payouts.status_reason` on the Merchant is `billing_suspended`. Omitted when no hold is scheduled, for example when the only past-due amounts never hold payouts. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### MerchantBillingBalanceUpdatedEventInput.data.previous_attributes.payout_hold_at variant 2

anyOf variant 2.

- Value shape: null. Time at which Flint holds payouts if the past-due amount is still unpaid, as an RFC 3339 UTC timestamp. The hold can begin later than this while a collection is in progress. Payouts are actually held when `readiness.payouts.status_reason` on the Merchant is `billing_suspended`. Omitted when no hold is scheduled, for example when the only past-due amounts never hold payouts. 

### MerchantBillingBalanceUpdatedEventInput.request

Field definitions: [ApiKeyCreatedEventInput.request](../models/ApiKeyCreatedEventInput.md#apikeycreatedeventinputrequest).

