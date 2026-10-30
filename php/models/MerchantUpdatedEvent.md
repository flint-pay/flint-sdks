[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## MerchantUpdatedEvent

The `merchant.updated` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [MerchantUpdatedEventData](../models/MerchantUpdatedEventData.md#merchantupdatedeventdata) | `data`: [field definitions](../models/MerchantUpdatedEvent.md#merchantupdatedeventdata-fields-1). |
| `event_type` | Required | string | Values: `"merchant.updated"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [MerchantUpdatedEventRequest](../models/MerchantUpdatedEventRequest.md#merchantupdatedeventrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### MerchantUpdatedEvent.data fields 1

Field definitions: [shared fields](MerchantReadinessUpdatedEvent.md#merchantreadinessupdatedeventdata-fields-1).

### MerchantUpdatedEvent.data fields 1.object

Field definitions: [MerchantReadinessUpdatedEvent.data fields 1.object](../models/MerchantReadinessUpdatedEvent.md#merchantreadinessupdatedeventdata-fields-1object).

