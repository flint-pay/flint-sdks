[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ModifierSetCreatedMerchantEvent

The `modifier_set.created` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [ModifierSetCreatedMerchantEventData](../models/ModifierSetCreatedMerchantEventData.md#modifiersetcreatedmerchanteventdata) | `data`: [field definitions](../models/ModifierSetCreatedMerchantEvent.md#modifiersetcreatedmerchanteventdata-fields-1). |
| `event_type` | Required | string | Values: `"modifier_set.created"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [ModifierSetCreatedMerchantEventRequest](../models/ModifierSetCreatedMerchantEventRequest.md#modifiersetcreatedmerchanteventrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### ModifierSetCreatedMerchantEvent.data fields 1

Field definitions: [shared fields](ModifierSetArchivedMerchantEvent.md#modifiersetarchivedmerchanteventdata-fields-1).

### ModifierSetCreatedMerchantEvent.data fields 1.object

Field definitions: [ModifierSetArchivedMerchantEvent.data fields 1.object](../models/ModifierSetArchivedMerchantEvent.md#modifiersetarchivedmerchanteventdata-fields-1object).

