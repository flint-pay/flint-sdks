[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PayoutSettingsUpdatedMerchantEvent

The `payout_settings.updated` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. |
| `data` | Required | [PayoutSettingsUpdatedMerchantEventData](../models/PayoutSettingsUpdatedMerchantEventData.md#payoutsettingsupdatedmerchanteventdata) | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/PayoutSettingsUpdatedMerchantEvent.md#payoutsettingsupdatedmerchanteventdata-fields-1). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"merchant"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"payout_settings.updated"`. |
| `merchant_id` | Required | string | ID of the merchant this resource belongs to. |
| `mode` | Required | string | Environment used for this resource or request. Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [PayoutSettingsUpdatedMerchantEventRequest](../models/PayoutSettingsUpdatedMerchantEventRequest.md#payoutsettingsupdatedmerchanteventrequest) or null | The originating request. `null` when the event has no originating request ID. |
| `sandbox_id` | Optional | string | Public sandbox ID for this event. Present exactly when mode is test; omitted in live mode. |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. |

### PayoutSettingsUpdatedMerchantEvent.data fields 1

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `actor` | Optional | [ReturnActor](../models/ReturnActor.md#returnactor) | Who caused this event, captured when the change commits. Omitted when the event predates actor attribution or attribution is unavailable. Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID. `actor`: [field definitions](../models/ApiKeyCreatedEvent.md#apikeycreatedeventdata-fields-1actor). |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/PayoutSettingsUpdatedMerchantEvent.md#payoutsettingsupdatedmerchanteventdata-fields-1object). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/PayoutSettingsUpdatedMerchantEvent.md#payoutsettingsupdatedmerchanteventdata-fields-1previous_attributes). |

### PayoutSettingsUpdatedMerchantEvent.data fields 1.actor

Field definitions: [ApiKeyCreatedEvent.data fields 1.actor](../models/ApiKeyCreatedEvent.md#apikeycreatedeventdata-fields-1actor).

### PayoutSettingsUpdatedMerchantEvent.data fields 1.object

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.

Field definitions: [shared fields](PayoutSettings.md#payoutsettings).

### PayoutSettingsUpdatedMerchantEvent.data fields 1.object.next_actions[]

Field definitions: [DisputeResponse.meta.warnings[].next_actions[]](../models/DisputeResponse.md#disputeresponsemetawarningsnext_actions).

### PayoutSettingsUpdatedMerchantEvent.data fields 1.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Field definitions: [shared fields](PayoutSettingsUpdatedMerchantEventDataPreviousAttributes.md#payoutsettingsupdatedmerchanteventdatapreviousattributes).

### PayoutSettingsUpdatedMerchantEvent.data fields 1.previous_attributes.blocked_reasons

Declared alternatives: [PayoutSettingsUpdatedMerchantEventDataPreviousAttributes.blocked_reasons](../models/PayoutSettingsUpdatedMerchantEventDataPreviousAttributes.md#payoutsettingsupdatedmerchanteventdatapreviousattributesblocked_reasons).

### PayoutSettingsUpdatedMerchantEvent.data fields 1.previous_attributes.created_at

Declared alternatives: [PayoutSettingsUpdatedMerchantEventDataPreviousAttributes.created_at](../models/PayoutSettingsUpdatedMerchantEventDataPreviousAttributes.md#payoutsettingsupdatedmerchanteventdatapreviousattributescreated_at).

### PayoutSettingsUpdatedMerchantEvent.data fields 1.previous_attributes.default_payout_destinations

Declared alternatives: [PayoutSettingsUpdatedMerchantEventDataPreviousAttributes.default_payout_destinations](../models/PayoutSettingsUpdatedMerchantEventDataPreviousAttributes.md#payoutsettingsupdatedmerchanteventdatapreviousattributesdefault_payout_destinations).

### PayoutSettingsUpdatedMerchantEvent.data fields 1.previous_attributes.delay_days

Declared alternatives: [PayoutSettingsUpdatedMerchantEventDataPreviousAttributes.delay_days](../models/PayoutSettingsUpdatedMerchantEventDataPreviousAttributes.md#payoutsettingsupdatedmerchanteventdatapreviousattributesdelay_days).

### PayoutSettingsUpdatedMerchantEvent.data fields 1.previous_attributes.delay_days_override

Declared alternatives: [PayoutSettingsUpdatedMerchantEventDataPreviousAttributes.delay_days_override](../models/PayoutSettingsUpdatedMerchantEventDataPreviousAttributes.md#payoutsettingsupdatedmerchanteventdatapreviousattributesdelay_days_override).

### PayoutSettingsUpdatedMerchantEvent.data fields 1.previous_attributes.interval

Declared alternatives: [PayoutSettingsUpdatedMerchantEventDataPreviousAttributes.interval](../models/PayoutSettingsUpdatedMerchantEventDataPreviousAttributes.md#payoutsettingsupdatedmerchanteventdatapreviousattributesinterval).

### PayoutSettingsUpdatedMerchantEvent.data fields 1.previous_attributes.merchant_id

Declared alternatives: [PayoutSettingsUpdatedMerchantEventDataPreviousAttributes.merchant_id](../models/PayoutSettingsUpdatedMerchantEventDataPreviousAttributes.md#payoutsettingsupdatedmerchanteventdatapreviousattributesmerchant_id).

### PayoutSettingsUpdatedMerchantEvent.data fields 1.previous_attributes.minimum_balance_currency_options

Declared alternatives: [PayoutSettingsUpdatedMerchantEventDataPreviousAttributes.minimum_balance_currency_options](../models/PayoutSettingsUpdatedMerchantEventDataPreviousAttributes.md#payoutsettingsupdatedmerchanteventdatapreviousattributesminimum_balance_currency_options).

### PayoutSettingsUpdatedMerchantEvent.data fields 1.previous_attributes.monthly_payout_days

Declared alternatives: [PayoutSettingsUpdatedMerchantEventDataPreviousAttributes.monthly_payout_days](../models/PayoutSettingsUpdatedMerchantEventDataPreviousAttributes.md#payoutsettingsupdatedmerchanteventdatapreviousattributesmonthly_payout_days).

### PayoutSettingsUpdatedMerchantEvent.data fields 1.previous_attributes.next_actions

Declared alternatives: [PayoutSettingsUpdatedMerchantEventDataPreviousAttributes.next_actions](../models/PayoutSettingsUpdatedMerchantEventDataPreviousAttributes.md#payoutsettingsupdatedmerchanteventdatapreviousattributesnext_actions).

### PayoutSettingsUpdatedMerchantEvent.data fields 1.previous_attributes.payout_settings_id

Declared alternatives: [PayoutSettingsUpdatedMerchantEventDataPreviousAttributes.payout_settings_id](../models/PayoutSettingsUpdatedMerchantEventDataPreviousAttributes.md#payoutsettingsupdatedmerchanteventdatapreviousattributespayout_settings_id).

### PayoutSettingsUpdatedMerchantEvent.data fields 1.previous_attributes.statement_descriptor

Declared alternatives: [PayoutSettingsUpdatedMerchantEventDataPreviousAttributes.statement_descriptor](../models/PayoutSettingsUpdatedMerchantEventDataPreviousAttributes.md#payoutsettingsupdatedmerchanteventdatapreviousattributesstatement_descriptor).

### PayoutSettingsUpdatedMerchantEvent.data fields 1.previous_attributes.status

Declared alternatives: [PayoutSettingsUpdatedMerchantEventDataPreviousAttributes.status](../models/PayoutSettingsUpdatedMerchantEventDataPreviousAttributes.md#payoutsettingsupdatedmerchanteventdatapreviousattributesstatus).

### PayoutSettingsUpdatedMerchantEvent.data fields 1.previous_attributes.updated_at

Declared alternatives: [PayoutSettingsUpdatedMerchantEventDataPreviousAttributes.updated_at](../models/PayoutSettingsUpdatedMerchantEventDataPreviousAttributes.md#payoutsettingsupdatedmerchanteventdatapreviousattributesupdated_at).

### PayoutSettingsUpdatedMerchantEvent.data fields 1.previous_attributes.version

Declared alternatives: [PaymentSplitCanceledEvent.data fields 1.previous_attributes.version](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdata-fields-1previous_attributesversion).

### PayoutSettingsUpdatedMerchantEvent.data fields 1.previous_attributes.weekly_payout_days

Declared alternatives: [PayoutSettingsUpdatedMerchantEventDataPreviousAttributes.weekly_payout_days](../models/PayoutSettingsUpdatedMerchantEventDataPreviousAttributes.md#payoutsettingsupdatedmerchanteventdatapreviousattributesweekly_payout_days).

