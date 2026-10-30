[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## TestClockAdvancingEventInput

The `test_clock.advancing` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | object | `data`: [field definitions](../models/TestClockAdvancingEventInput.md#testclockadvancingeventinputdata). |
| `event_type` | Required | string | Values: `"test_clock.advancing"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | object or null | `request`: [field definitions](../models/BalanceTransactionCreatedEventInput.md#balancetransactioncreatedeventinputrequest). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### TestClockAdvancingEventInput.data

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [TestClockInput](../models/TestClockInput.md#testclockinput) | A sandbox clock that customers created on it, and their subscriptions, read as the current time. `object`: [field definitions](../models/TestClockAdvancingEventInput.md#testclockadvancingeventinputdataobject). |

### TestClockAdvancingEventInput.data.object

A sandbox clock that customers created on it, and their subscriptions, read as the current time.

Field definitions: [shared fields](TestClockInput.md#testclockinput).

### TestClockAdvancingEventInput.request

Field definitions: [BalanceTransactionCreatedEventInput.request](../models/BalanceTransactionCreatedEventInput.md#balancetransactioncreatedeventinputrequest).

