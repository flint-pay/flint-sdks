[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## TestClockAdvancingEvent

The `test_clock.advancing` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. Example: `"2026-08-02"`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `data` | Required | object | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/TestClockAdvancingEvent.md#testclockadvancingeventdata). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"merchant"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"test_clock.advancing"`. |
| `merchant_id` | Required | string | ID of the merchant this resource belongs to. Example: `"mer_01KEZF7C00KPYH1DDFPCCX3B6E"`. |
| `mode` | Required | string | Environment used for this resource or request. Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | object or null | The originating request. `null` when the event has no originating request ID. `request`: [field definitions](../models/ApiKeyCreatedEvent.md#apikeycreatedeventrequest). |
| `sandbox_id` | Optional | string | Public sandbox ID for this event. Present exactly when mode is test; omitted in live mode. Example: `"test_01KEZF7C00JC77HTMTB2XHNPE0"`. |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. Example: `"whev_01KEZF7C00362MS3HV970TRZGS"`. |

### TestClockAdvancingEvent.data

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/TestClockAdvancingEvent.md#testclockadvancingeventdataobject). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/TestClockAdvancingEvent.md#testclockadvancingeventdataprevious_attributes). |

### TestClockAdvancingEvent.data.object

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.

Field definitions: [shared fields](TestClock.md#testclock).

### TestClockAdvancingEvent.data.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Optional | string or null | When the test clock was created, in real time. `created_at`: [declared alternatives](../models/TestClockAdvancingEvent.md#testclockadvancingeventdataprevious_attributescreated_at). |
| `frozen_at` | Optional | string or null | The time the test clock shows. Customers created on the clock, and their subscriptions, treat it as the current time. After you advance the clock, `frozen_at` is the time you advanced it to, while `status` is `advancing` and after. `frozen_at`: [declared alternatives](../models/TestClockAdvancingEvent.md#testclockadvancingeventdataprevious_attributesfrozen_at). |
| `name` | Optional | string or null | Your label for the test clock. Omitted when you didn't set one. `name`: [declared alternatives](../models/TestClockAdvancingEvent.md#testclockadvancingeventdataprevious_attributesname). |
| `status` | Optional | string or null | Where the test clock is in its lifecycle. Read it before advancing, and after an advance until it's `ready` or `failed`. Values: `"ready"`, `"advancing"`, `"failed"`, `"archived"`. `status`: [declared alternatives](../models/TestClockAdvancingEvent.md#testclockadvancingeventdataprevious_attributesstatus). |
| `test_clock_id` | Optional | string or null | Unique identifier for the test clock. `test_clock_id`: [declared alternatives](../models/TestClockAdvancingEvent.md#testclockadvancingeventdataprevious_attributestest_clock_id). |
| `updated_at` | Optional | string or null | When the test clock last changed, in real time. `updated_at`: [declared alternatives](../models/TestClockAdvancingEvent.md#testclockadvancingeventdataprevious_attributesupdated_at). |
| `version` | Optional | integer or null | Persisted version of this resource's owned state. Expanded resources and external observations can change independently. `version`: [declared alternatives](../models/BuyerExpandedPaymentIntentSummaryPreviousAttributes.md#buyerexpandedpaymentintentsummarypreviousattributesversion). |

### TestClockAdvancingEvent.data.previous_attributes.created_at

### TestClockAdvancingEvent.data.previous_attributes.created_at variant 1

anyOf variant 1: When the test clock was created, in real time..

- Value shape: string. When the test clock was created, in real time. When the test clock was created, in real time. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### TestClockAdvancingEvent.data.previous_attributes.created_at variant 2

anyOf variant 2.

- Value shape: null. When the test clock was created, in real time. 

### TestClockAdvancingEvent.data.previous_attributes.frozen_at

### TestClockAdvancingEvent.data.previous_attributes.frozen_at variant 1

anyOf variant 1: The time the test clock shows. Customers created on the clock, and their subscriptions, treat it as the current time. After you advance the clock, `frozen_at` is the time you advanced it to, while `status` is `advancing` and after..

- Value shape: string. The time the test clock shows. Customers created on the clock, and their subscriptions, treat it as the current time. After you advance the clock, `frozen_at` is the time you advanced it to, while `status` is `advancing` and after. The time the test clock shows. Customers created on the clock, and their subscriptions, treat it as the current time. After you advance the clock, `frozen_at` is the time you advanced it to, while `status` is `advancing` and after. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### TestClockAdvancingEvent.data.previous_attributes.frozen_at variant 2

anyOf variant 2.

- Value shape: null. The time the test clock shows. Customers created on the clock, and their subscriptions, treat it as the current time. After you advance the clock, `frozen_at` is the time you advanced it to, while `status` is `advancing` and after. 

### TestClockAdvancingEvent.data.previous_attributes.name

### TestClockAdvancingEvent.data.previous_attributes.name variant 1

anyOf variant 1: Your label for the test clock. Omitted when you didn't set one..

- Value shape: string. Your label for the test clock. Omitted when you didn't set one. Your label for the test clock. Omitted when you didn't set one. minLength: `1`. maxLength: `255`. 

### TestClockAdvancingEvent.data.previous_attributes.name variant 2

anyOf variant 2.

- Value shape: null. Your label for the test clock. Omitted when you didn't set one. 

### TestClockAdvancingEvent.data.previous_attributes.status

### TestClockAdvancingEvent.data.previous_attributes.status variant 1

anyOf variant 1: Where the test clock is in its lifecycle. Read it before advancing, and after an advance until it's `ready` or `failed`..

- Value shape: string. Where the test clock is in its lifecycle. Read it before advancing, and after an advance until it's `ready` or `failed`. Values: `"ready"`, `"advancing"`, `"failed"`, `"archived"`.

### TestClockAdvancingEvent.data.previous_attributes.status variant 2

anyOf variant 2.

- Value shape: null. Where the test clock is in its lifecycle. Read it before advancing, and after an advance until it's `ready` or `failed`. 

### TestClockAdvancingEvent.data.previous_attributes.test_clock_id

### TestClockAdvancingEvent.data.previous_attributes.test_clock_id variant 1

anyOf variant 1: Unique identifier for the test clock..

- Value shape: string. Unique identifier for the test clock. Unique identifier for the test clock. Example: `"tclk_01KEZF7C00J8YBNPS7XJ5FG5ZZ"`. 

### TestClockAdvancingEvent.data.previous_attributes.test_clock_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for the test clock. 

### TestClockAdvancingEvent.data.previous_attributes.updated_at

### TestClockAdvancingEvent.data.previous_attributes.updated_at variant 1

anyOf variant 1: When the test clock last changed, in real time..

- Value shape: string. When the test clock last changed, in real time. When the test clock last changed, in real time. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### TestClockAdvancingEvent.data.previous_attributes.updated_at variant 2

anyOf variant 2.

- Value shape: null. When the test clock last changed, in real time. 

### TestClockAdvancingEvent.data.previous_attributes.version

Declared alternatives: [BuyerExpandedPaymentIntentSummaryPreviousAttributes.version](../models/BuyerExpandedPaymentIntentSummaryPreviousAttributes.md#buyerexpandedpaymentintentsummarypreviousattributesversion).

### TestClockAdvancingEvent.request

Field definitions: [ApiKeyCreatedEvent.request](../models/ApiKeyCreatedEvent.md#apikeycreatedeventrequest).

