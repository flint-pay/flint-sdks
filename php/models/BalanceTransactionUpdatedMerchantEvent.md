[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BalanceTransactionUpdatedMerchantEvent

The `balance_transaction.updated` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. |
| `data` | Required | [BalanceTransactionUpdatedMerchantEventData](../models/BalanceTransactionUpdatedMerchantEventData.md#balancetransactionupdatedmerchanteventdata) | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/BalanceTransactionUpdatedMerchantEvent.md#balancetransactionupdatedmerchanteventdata-fields-1). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"merchant"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"balance_transaction.updated"`. |
| `merchant_id` | Required | string | ID of the merchant this resource belongs to. |
| `mode` | Required | string | Environment used for this resource or request. Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [BalanceTransactionUpdatedMerchantEventRequest](../models/BalanceTransactionUpdatedMerchantEventRequest.md#balancetransactionupdatedmerchanteventrequest) or null | The originating request. `null` when the event has no originating request ID. |
| `sandbox_id` | Optional | string | Public sandbox ID for this event. Present exactly when mode is test; omitted in live mode. |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. |

### BalanceTransactionUpdatedMerchantEvent.data fields 1

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/BalanceTransactionCreatedMerchantEvent.md#balancetransactioncreatedmerchanteventdata-fields-1object). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/BalanceTransactionUpdatedMerchantEvent.md#balancetransactionupdatedmerchanteventdata-fields-1previous_attributes). |

### BalanceTransactionUpdatedMerchantEvent.data fields 1.object

Field definitions: [BalanceTransactionCreatedMerchantEvent.data fields 1.object](../models/BalanceTransactionCreatedMerchantEvent.md#balancetransactioncreatedmerchanteventdata-fields-1object).

### BalanceTransactionUpdatedMerchantEvent.data fields 1.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Field definitions: [shared fields](BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributes).

### BalanceTransactionUpdatedMerchantEvent.data fields 1.previous_attributes.available_at

Declared alternatives: [BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.available_at](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesavailable_at).

### BalanceTransactionUpdatedMerchantEvent.data fields 1.previous_attributes.balance_transaction_id

Declared alternatives: [BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.balance_transaction_id](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesbalance_transaction_id).

### BalanceTransactionUpdatedMerchantEvent.data fields 1.previous_attributes.currency

Declared alternatives: [MerchantBillingBalanceUpdatedEvent.data fields 1.previous_attributes.currency](../models/MerchantBillingBalanceUpdatedEvent.md#merchantbillingbalanceupdatedeventdata-fields-1previous_attributescurrency).

### BalanceTransactionUpdatedMerchantEvent.data fields 1.previous_attributes.description

Declared alternatives: [BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.description](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesdescription).

### BalanceTransactionUpdatedMerchantEvent.data fields 1.previous_attributes.merchant_id

Declared alternatives: [BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.merchant_id](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesmerchant_id).

### BalanceTransactionUpdatedMerchantEvent.data fields 1.previous_attributes.occurred_at

Declared alternatives: [BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.occurred_at](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesoccurred_at).

### BalanceTransactionUpdatedMerchantEvent.data fields 1.previous_attributes.order_id

Declared alternatives: [BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order_id](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder_id).

### BalanceTransactionUpdatedMerchantEvent.data fields 1.previous_attributes.payout_id

Declared alternatives: [BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.payout_id](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributespayout_id).

### BalanceTransactionUpdatedMerchantEvent.data fields 1.previous_attributes.related_balance_transaction_ids

Declared alternatives: [BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.related_balance_transaction_ids](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesrelated_balance_transaction_ids).

### BalanceTransactionUpdatedMerchantEvent.data fields 1.previous_attributes.status

Declared alternatives: [BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.status](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesstatus).

### BalanceTransactionUpdatedMerchantEvent.data fields 1.previous_attributes.type

Declared alternatives: [BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.type](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributestype).

