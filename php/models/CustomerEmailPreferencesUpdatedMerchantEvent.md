[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CustomerEmailPreferencesUpdatedMerchantEvent

The `customer_email_preferences.updated` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. |
| `data` | Required | [CustomerEmailPreferencesUpdatedMerchantEventData](../models/CustomerEmailPreferencesUpdatedMerchantEventData.md#customeremailpreferencesupdatedmerchanteventdata) | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/CustomerEmailPreferencesUpdatedMerchantEvent.md#customeremailpreferencesupdatedmerchanteventdata-fields-1). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"merchant"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"customer_email_preferences.updated"`. |
| `merchant_id` | Required | string | ID of the merchant this resource belongs to. |
| `mode` | Required | string | Environment used for this resource or request. Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [CustomerEmailPreferencesUpdatedMerchantEventRequest](../models/CustomerEmailPreferencesUpdatedMerchantEventRequest.md#customeremailpreferencesupdatedmerchanteventrequest) or null | The originating request. `null` when the event has no originating request ID. |
| `sandbox_id` | Optional | string | Public sandbox ID for this event. Present exactly when mode is test; omitted in live mode. |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. |

### CustomerEmailPreferencesUpdatedMerchantEvent.data fields 1

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `actor` | Optional | [ReturnActor](../models/ReturnActor.md#returnactor) | Who caused this event, captured when the change commits. Omitted when the event predates actor attribution or attribution is unavailable. Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID. `actor`: [field definitions](../models/ApiKeyCreatedEvent.md#apikeycreatedeventdata-fields-1actor). |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/CustomerEmailPreferencesUpdatedMerchantEvent.md#customeremailpreferencesupdatedmerchanteventdata-fields-1object). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/CustomerEmailPreferencesUpdatedMerchantEvent.md#customeremailpreferencesupdatedmerchanteventdata-fields-1previous_attributes). |

### CustomerEmailPreferencesUpdatedMerchantEvent.data fields 1.actor

Field definitions: [ApiKeyCreatedEvent.data fields 1.actor](../models/ApiKeyCreatedEvent.md#apikeycreatedeventdata-fields-1actor).

### CustomerEmailPreferencesUpdatedMerchantEvent.data fields 1.object

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.

Field definitions: [shared fields](CustomerEmailPreferencesUpdatedMerchantEventDataObject.md#customeremailpreferencesupdatedmerchanteventdataobject).

### CustomerEmailPreferencesUpdatedMerchantEvent.data fields 1.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Field definitions: [shared fields](CustomerEmailPreferencesUpdatedMerchantEventDataPreviousAttributes.md#customeremailpreferencesupdatedmerchanteventdatapreviousattributes).

### CustomerEmailPreferencesUpdatedMerchantEvent.data fields 1.previous_attributes.checkout_reminders

Declared alternatives: [CustomerEmailPreferencesUpdatedMerchantEventDataPreviousAttributes.checkout_reminders](../models/CustomerEmailPreferencesUpdatedMerchantEventDataPreviousAttributes.md#customeremailpreferencesupdatedmerchanteventdatapreviousattributescheckout_reminders).

### CustomerEmailPreferencesUpdatedMerchantEvent.data fields 1.previous_attributes.customer_id

Declared alternatives: [CustomerEmailPreferencesUpdatedMerchantEventDataPreviousAttributes.customer_id](../models/CustomerEmailPreferencesUpdatedMerchantEventDataPreviousAttributes.md#customeremailpreferencesupdatedmerchanteventdatapreviousattributescustomer_id).

### CustomerEmailPreferencesUpdatedMerchantEvent.data fields 1.previous_attributes.email

Declared alternatives: [CustomerEmailPreferencesUpdatedMerchantEventDataPreviousAttributes.email](../models/CustomerEmailPreferencesUpdatedMerchantEventDataPreviousAttributes.md#customeremailpreferencesupdatedmerchanteventdatapreviousattributesemail).

### CustomerEmailPreferencesUpdatedMerchantEvent.data fields 1.previous_attributes.shipping_updates

Declared alternatives: [CustomerEmailPreferencesUpdatedMerchantEventDataPreviousAttributes.shipping_updates](../models/CustomerEmailPreferencesUpdatedMerchantEventDataPreviousAttributes.md#customeremailpreferencesupdatedmerchanteventdatapreviousattributesshipping_updates).

### CustomerEmailPreferencesUpdatedMerchantEvent.data fields 1.previous_attributes.version

Declared alternatives: [CustomerEmailPreferencesUpdatedMerchantEventDataPreviousAttributes.version](../models/CustomerEmailPreferencesUpdatedMerchantEventDataPreviousAttributes.md#customeremailpreferencesupdatedmerchanteventdatapreviousattributesversion).

