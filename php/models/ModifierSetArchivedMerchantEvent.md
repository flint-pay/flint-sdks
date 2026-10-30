[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ModifierSetArchivedMerchantEvent

The `modifier_set.archived` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [ModifierSetArchivedMerchantEventData](../models/ModifierSetArchivedMerchantEventData.md#modifiersetarchivedmerchanteventdata) | `data`: [field definitions](../models/ModifierSetArchivedMerchantEvent.md#modifiersetarchivedmerchanteventdata-fields-1). |
| `event_type` | Required | string | Values: `"modifier_set.archived"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [ModifierSetArchivedMerchantEventRequest](../models/ModifierSetArchivedMerchantEventRequest.md#modifiersetarchivedmerchanteventrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### ModifierSetArchivedMerchantEvent.data fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [ModifierSet](../models/ModifierSet.md#modifierset) | A reusable collection of customization groups. `object`: [field definitions](../models/ModifierSetArchivedMerchantEvent.md#modifiersetarchivedmerchanteventdata-fields-1object). |

### ModifierSetArchivedMerchantEvent.data fields 1.object

A reusable collection of customization groups.

Field definitions: [shared fields](ModifierSet.md#modifierset).

### ModifierSetArchivedMerchantEvent.data fields 1.object.metadata

Field definitions: [PayoutResponse.data.metadata](../models/PayoutResponse.md#payoutresponsedatametadata).

### ModifierSetArchivedMerchantEvent.data fields 1.object.modifier_groups[]

Declared alternatives: [ModifierSet.modifier_groups[]](../models/ModifierSet.md#modifiersetmodifier_groups).

