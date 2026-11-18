[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## MerchantBillingBalanceUpdatedEvent

The `merchant_billing_balance.updated` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. |
| `data` | Required | [MerchantBillingBalanceUpdatedEventData](../models/MerchantBillingBalanceUpdatedEventData.md#merchantbillingbalanceupdatedeventdata) | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/MerchantBillingBalanceUpdatedEvent.md#merchantbillingbalanceupdatedeventdata-fields-1). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"merchant"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"merchant_billing_balance.updated"`. |
| `merchant_id` | Required | string | ID of the merchant this resource belongs to. |
| `mode` | Required | string | Environment used for this resource or request. Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [MerchantBillingBalanceUpdatedEventRequest](../models/MerchantBillingBalanceUpdatedEventRequest.md#merchantbillingbalanceupdatedeventrequest) or null | The originating request. `null` when the event has no originating request ID. |
| `sandbox_id` | Optional | string | Public sandbox ID for this event. Present exactly when mode is test; omitted in live mode. |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. |

### MerchantBillingBalanceUpdatedEvent.data fields 1

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/MerchantBillingBalanceUpdatedEvent.md#merchantbillingbalanceupdatedeventdata-fields-1object). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/MerchantBillingBalanceUpdatedEvent.md#merchantbillingbalanceupdatedeventdata-fields-1previous_attributes). |

### MerchantBillingBalanceUpdatedEvent.data fields 1.object

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.

Field definitions: [shared fields](MerchantBillingBalanceUpdatedEventDataObject.md#merchantbillingbalanceupdatedeventdataobject).

### MerchantBillingBalanceUpdatedEvent.data fields 1.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Field definitions: [shared fields](MerchantBillingBalanceUpdatedEventDataPreviousAttributes.md#merchantbillingbalanceupdatedeventdatapreviousattributes).

### MerchantBillingBalanceUpdatedEvent.data fields 1.previous_attributes.currency

### MerchantBillingBalanceUpdatedEvent.data fields 1.previous_attributes.currency variant 1

anyOf variant 1: ISO 4217 currency code..

- Value shape: string. ISO 4217 currency code. ISO 4217 currency code. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. 

### MerchantBillingBalanceUpdatedEvent.data fields 1.previous_attributes.currency variant 2

anyOf variant 2.

- Value shape: null. ISO 4217 currency code. 

### MerchantBillingBalanceUpdatedEvent.data fields 1.previous_attributes.merchant_billing_balance_id

### MerchantBillingBalanceUpdatedEvent.data fields 1.previous_attributes.merchant_billing_balance_id variant 1

anyOf variant 1: Stable identifier for this billing account and currency balance projection..

- Value shape: string. Stable identifier for this billing account and currency balance projection. 

### MerchantBillingBalanceUpdatedEvent.data fields 1.previous_attributes.merchant_billing_balance_id variant 2

anyOf variant 2.

- Value shape: null. Stable identifier for this billing account and currency balance projection. 

### MerchantBillingBalanceUpdatedEvent.data fields 1.previous_attributes.observed_at

### MerchantBillingBalanceUpdatedEvent.data fields 1.previous_attributes.observed_at variant 1

anyOf variant 1: RFC3339 timestamp for the balance snapshot..

- Value shape: string. RFC3339 timestamp for the balance snapshot. RFC3339 timestamp for the balance snapshot. Format: `date-time`. 

### MerchantBillingBalanceUpdatedEvent.data fields 1.previous_attributes.observed_at variant 2

anyOf variant 2.

- Value shape: null. RFC3339 timestamp for the balance snapshot. 

### MerchantBillingBalanceUpdatedEvent.data fields 1.previous_attributes.past_due_at

### MerchantBillingBalanceUpdatedEvent.data fields 1.previous_attributes.past_due_at variant 1

anyOf variant 1: Due date of the oldest unpaid past-due amount, as an RFC 3339 UTC timestamp. Omitted when nothing is past due..

- Value shape: string. Due date of the oldest unpaid past-due amount, as an RFC 3339 UTC timestamp. Omitted when nothing is past due. Due date of the oldest unpaid past-due amount, as an RFC 3339 UTC timestamp. Omitted when nothing is past due. Format: `date-time`. 

### MerchantBillingBalanceUpdatedEvent.data fields 1.previous_attributes.past_due_at variant 2

anyOf variant 2.

- Value shape: null. Due date of the oldest unpaid past-due amount, as an RFC 3339 UTC timestamp. Omitted when nothing is past due. 

### MerchantBillingBalanceUpdatedEvent.data fields 1.previous_attributes.payout_hold_at

### MerchantBillingBalanceUpdatedEvent.data fields 1.previous_attributes.payout_hold_at variant 1

anyOf variant 1: Time at which Flint holds payouts if the suspendable past-due amount is still unpaid and totals at least 25 major currency units in this currency (25 USD for USD billing), as an RFC 3339 UTC timestamp. Flint attempts collection from the available balance before holding payouts. The hold can begin later than this while a collection is in progress. Payouts are actually held when `readiness.payouts.status_reason` on the Merchant is `billing_suspended`. Omitted when no hold is scheduled, including when suspendable past-due amounts in this currency are below that floor or the only past-due amounts never hold payouts..

- Value shape: string. Time at which Flint holds payouts if the suspendable past-due amount is still unpaid and totals at least 25 major currency units in this currency (25 USD for USD billing), as an RFC 3339 UTC timestamp. Flint attempts collection from the available balance before holding payouts. The hold can begin later than this while a collection is in progress. Payouts are actually held when `readiness.payouts.status_reason` on the Merchant is `billing_suspended`. Omitted when no hold is scheduled, including when suspendable past-due amounts in this currency are below that floor or the only past-due amounts never hold payouts. Time at which Flint holds payouts if the suspendable past-due amount is still unpaid and totals at least 25 major currency units in this currency (25 USD for USD billing), as an RFC 3339 UTC timestamp. Flint attempts collection from the available balance before holding payouts. The hold can begin later than this while a collection is in progress. Payouts are actually held when `readiness.payouts.status_reason` on the Merchant is `billing_suspended`. Omitted when no hold is scheduled, including when suspendable past-due amounts in this currency are below that floor or the only past-due amounts never hold payouts. Format: `date-time`. 

### MerchantBillingBalanceUpdatedEvent.data fields 1.previous_attributes.payout_hold_at variant 2

anyOf variant 2.

- Value shape: null. Time at which Flint holds payouts if the suspendable past-due amount is still unpaid and totals at least 25 major currency units in this currency (25 USD for USD billing), as an RFC 3339 UTC timestamp. Flint attempts collection from the available balance before holding payouts. The hold can begin later than this while a collection is in progress. Payouts are actually held when `readiness.payouts.status_reason` on the Merchant is `billing_suspended`. Omitted when no hold is scheduled, including when suspendable past-due amounts in this currency are below that floor or the only past-due amounts never hold payouts. 

