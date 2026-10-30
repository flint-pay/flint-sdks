[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## TestClockArchivedEvent

The `test_clock.archived` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [TestClockArchivedEventData](../models/TestClockArchivedEventData.md#testclockarchivedeventdata) | `data`: [field definitions](../models/TestClockArchivedEvent.md#testclockarchivedeventdata-fields-1). |
| `event_type` | Required | string | Values: `"test_clock.archived"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [TestClockArchivedEventRequest](../models/TestClockArchivedEventRequest.md#testclockarchivedeventrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### TestClockArchivedEvent.data fields 1

Field definitions: [shared fields](TestClockAdvancingEvent.md#testclockadvancingeventdata-fields-1).

### TestClockArchivedEvent.data fields 1.object

Field definitions: [TestClockAdvancingEvent.data fields 1.object](../models/TestClockAdvancingEvent.md#testclockadvancingeventdata-fields-1object).

