[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ModifierGroupUpdatedMerchantEvent

The `modifier_group.updated` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [ModifierGroupUpdatedMerchantEventData](../models/ModifierGroupUpdatedMerchantEventData.md#modifiergroupupdatedmerchanteventdata) | `data`: [field definitions](../models/ModifierGroupUpdatedMerchantEvent.md#modifiergroupupdatedmerchanteventdata-fields-1). |
| `event_type` | Required | string | Values: `"modifier_group.updated"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [ModifierGroupUpdatedMerchantEventRequest](../models/ModifierGroupUpdatedMerchantEventRequest.md#modifiergroupupdatedmerchanteventrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### ModifierGroupUpdatedMerchantEvent.data fields 1

Field definitions: [shared fields](ModifierGroupArchivedMerchantEvent.md#modifiergrouparchivedmerchanteventdata-fields-1).

### ModifierGroupUpdatedMerchantEvent.data fields 1.object

Field definitions: [ModifierGroupArchivedMerchantEvent.data fields 1.object](../models/ModifierGroupArchivedMerchantEvent.md#modifiergrouparchivedmerchanteventdata-fields-1object).

