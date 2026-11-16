[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## TestClockAdvancingEvent

The `test_clock.advancing` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. |
| `data` | Required | [TestClockAdvancingEventData](../models/TestClockAdvancingEventData.md#testclockadvancingeventdata) | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/TestClockAdvancingEvent.md#testclockadvancingeventdata-fields-1). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"merchant"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"test_clock.advancing"`. |
| `merchant_id` | Required | string | ID of the merchant this resource belongs to. |
| `mode` | Required | string | Environment used for this resource or request. Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [TestClockAdvancingEventRequest](../models/TestClockAdvancingEventRequest.md#testclockadvancingeventrequest) or null | The originating request. `null` when the event has no originating request ID. |
| `sandbox_id` | Optional | string | Public sandbox ID for this event. Present exactly when mode is test; omitted in live mode. |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. |

### TestClockAdvancingEvent.data fields 1

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/TestClockAdvancingEvent.md#testclockadvancingeventdata-fields-1object). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/TestClockAdvancingEvent.md#testclockadvancingeventdata-fields-1previous_attributes). |

### TestClockAdvancingEvent.data fields 1.object

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.

Field definitions: [shared fields](TestClockAdvancingEventDataObject.md#testclockadvancingeventdataobject).

### TestClockAdvancingEvent.data fields 1.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Field definitions: [shared fields](TestClockAdvancingEventDataPreviousAttributes.md#testclockadvancingeventdatapreviousattributes).

### TestClockAdvancingEvent.data fields 1.previous_attributes.created_at

### TestClockAdvancingEvent.data fields 1.previous_attributes.created_at variant 1

anyOf variant 1: When the test clock was created, in real time..

- Value shape: string. When the test clock was created, in real time. When the test clock was created, in real time. Format: `date-time`. 

### TestClockAdvancingEvent.data fields 1.previous_attributes.created_at variant 2

anyOf variant 2.

- Value shape: null. When the test clock was created, in real time. 

### TestClockAdvancingEvent.data fields 1.previous_attributes.frozen_at

### TestClockAdvancingEvent.data fields 1.previous_attributes.frozen_at variant 1

anyOf variant 1: The time the test clock shows. Customers created on the clock, and their subscriptions, treat it as the current time. After you advance the clock, `frozen_at` is the time you advanced it to, while `status` is `advancing` and after..

- Value shape: string. The time the test clock shows. Customers created on the clock, and their subscriptions, treat it as the current time. After you advance the clock, `frozen_at` is the time you advanced it to, while `status` is `advancing` and after. The time the test clock shows. Customers created on the clock, and their subscriptions, treat it as the current time. After you advance the clock, `frozen_at` is the time you advanced it to, while `status` is `advancing` and after. Format: `date-time`. 

### TestClockAdvancingEvent.data fields 1.previous_attributes.frozen_at variant 2

anyOf variant 2.

- Value shape: null. The time the test clock shows. Customers created on the clock, and their subscriptions, treat it as the current time. After you advance the clock, `frozen_at` is the time you advanced it to, while `status` is `advancing` and after. 

### TestClockAdvancingEvent.data fields 1.previous_attributes.name

### TestClockAdvancingEvent.data fields 1.previous_attributes.name variant 1

anyOf variant 1: Your label for the test clock. Omitted when you didn't set one..

- Value shape: string. Your label for the test clock. Omitted when you didn't set one. Your label for the test clock. Omitted when you didn't set one. minLength: `1`. maxLength: `255`. 

### TestClockAdvancingEvent.data fields 1.previous_attributes.name variant 2

anyOf variant 2.

- Value shape: null. Your label for the test clock. Omitted when you didn't set one. 

### TestClockAdvancingEvent.data fields 1.previous_attributes.status

### TestClockAdvancingEvent.data fields 1.previous_attributes.status variant 1

anyOf variant 1: Where the test clock is in its lifecycle. Read it before advancing, and after an advance until it's `ready` or `failed`..

- Value shape: string. Where the test clock is in its lifecycle. Read it before advancing, and after an advance until it's `ready` or `failed`. Values: `"ready"`, `"advancing"`, `"failed"`, `"archived"`.

### TestClockAdvancingEvent.data fields 1.previous_attributes.status variant 2

anyOf variant 2.

- Value shape: null. Where the test clock is in its lifecycle. Read it before advancing, and after an advance until it's `ready` or `failed`. 

### TestClockAdvancingEvent.data fields 1.previous_attributes.test_clock_id

### TestClockAdvancingEvent.data fields 1.previous_attributes.test_clock_id variant 1

anyOf variant 1: Unique identifier for the test clock..

- Value shape: string. Unique identifier for the test clock. 

### TestClockAdvancingEvent.data fields 1.previous_attributes.test_clock_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for the test clock. 

### TestClockAdvancingEvent.data fields 1.previous_attributes.updated_at

### TestClockAdvancingEvent.data fields 1.previous_attributes.updated_at variant 1

anyOf variant 1: When the test clock last changed, in real time..

- Value shape: string. When the test clock last changed, in real time. When the test clock last changed, in real time. Format: `date-time`. 

### TestClockAdvancingEvent.data fields 1.previous_attributes.updated_at variant 2

anyOf variant 2.

- Value shape: null. When the test clock last changed, in real time. 

### TestClockAdvancingEvent.data fields 1.previous_attributes.version

Declared alternatives: [PaymentSplitCanceledEvent.data fields 1.previous_attributes.version](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdata-fields-1previous_attributesversion).

