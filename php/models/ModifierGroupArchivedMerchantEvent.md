[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ModifierGroupArchivedMerchantEvent

The `modifier_group.archived` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [ModifierGroupArchivedMerchantEventData](../models/ModifierGroupArchivedMerchantEventData.md#modifiergrouparchivedmerchanteventdata) | `data`: [field definitions](../models/ModifierGroupArchivedMerchantEvent.md#modifiergrouparchivedmerchanteventdata-fields-1). |
| `event_type` | Required | string | Values: `"modifier_group.archived"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [ModifierGroupArchivedMerchantEventRequest](../models/ModifierGroupArchivedMerchantEventRequest.md#modifiergrouparchivedmerchanteventrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### ModifierGroupArchivedMerchantEvent.data fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [ModifierGroup](../models/ModifierGroup.md#modifiergroup) | A group of choices that customize an item. `object`: [field definitions](../models/ModifierGroupArchivedMerchantEvent.md#modifiergrouparchivedmerchanteventdata-fields-1object). |

### ModifierGroupArchivedMerchantEvent.data fields 1.object

A group of choices that customize an item.

Field definitions: [shared fields](ModifierGroup.md#modifiergroup).

### ModifierGroupArchivedMerchantEvent.data fields 1.object.metadata

Field definitions: [PayoutResponse.data.metadata](../models/PayoutResponse.md#payoutresponsedatametadata).

