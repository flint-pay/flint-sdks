[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## TestClockAdvancingEvent

The `test_clock.advancing` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [TestClockAdvancingEventData](../models/TestClockAdvancingEventData.md#testclockadvancingeventdata) | `data`: [field definitions](../models/TestClockAdvancingEvent.md#testclockadvancingeventdata-fields-1). |
| `event_type` | Required | string | Values: `"test_clock.advancing"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [TestClockAdvancingEventRequest](../models/TestClockAdvancingEventRequest.md#testclockadvancingeventrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### TestClockAdvancingEvent.data fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [TestClock](../models/TestClock.md#testclock) | A sandbox clock that customers created on it, and their subscriptions, read as the current time. `object`: [field definitions](../models/TestClockAdvancingEvent.md#testclockadvancingeventdata-fields-1object). |

### TestClockAdvancingEvent.data fields 1.object

A sandbox clock that customers created on it, and their subscriptions, read as the current time.

Field definitions: [shared fields](TestClockInput.md#testclockinput).

