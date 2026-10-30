[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## TestClockAdvancingEvent

The `test_clock.advancing` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | object | `data`: [field definitions](../models/TestClockAdvancingEvent.md#testclockadvancingeventdata). |
| `event_type` | Required | string | Values: `"test_clock.advancing"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | object or null | `request`: [field definitions](../models/BalanceTransactionCreatedEvent.md#balancetransactioncreatedeventrequest). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### TestClockAdvancingEvent.data

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [TestClock](../models/TestClock.md#testclock) | A sandbox clock that customers created on it, and their subscriptions, read as the current time. `object`: [field definitions](../models/TestClockAdvancingEvent.md#testclockadvancingeventdataobject). |

### TestClockAdvancingEvent.data.object

A sandbox clock that customers created on it, and their subscriptions, read as the current time.

Field definitions: [shared fields](TestClock.md#testclock).

### TestClockAdvancingEvent.request

Field definitions: [BalanceTransactionCreatedEvent.request](../models/BalanceTransactionCreatedEvent.md#balancetransactioncreatedeventrequest).

