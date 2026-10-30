[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PayoutSettingsUpdatedEvent

The `payout_settings.updated` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [PayoutSettingsUpdatedEventData](../models/PayoutSettingsUpdatedEventData.md#payoutsettingsupdatedeventdata) | `data`: [field definitions](../models/PayoutSettingsUpdatedEvent.md#payoutsettingsupdatedeventdata-fields-1). |
| `event_type` | Required | string | Values: `"payout_settings.updated"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [PayoutSettingsUpdatedEventRequest](../models/PayoutSettingsUpdatedEventRequest.md#payoutsettingsupdatedeventrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### PayoutSettingsUpdatedEvent.data fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [PayoutSettings](../models/PayoutSettings.md#payoutsettings) | The merchant's payout schedule and preferences. `object`: [field definitions](../models/PayoutSettingsUpdatedEvent.md#payoutsettingsupdatedeventdata-fields-1object). |

### PayoutSettingsUpdatedEvent.data fields 1.object

The merchant's payout schedule and preferences.

Field definitions: [shared fields](PayoutSettings.md#payoutsettings).

