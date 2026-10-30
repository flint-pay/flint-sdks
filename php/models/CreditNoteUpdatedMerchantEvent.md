[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreditNoteUpdatedMerchantEvent

The `credit_note.updated` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [CreditNoteUpdatedMerchantEventData](../models/CreditNoteUpdatedMerchantEventData.md#creditnoteupdatedmerchanteventdata) | `data`: [field definitions](../models/CreditNoteUpdatedMerchantEvent.md#creditnoteupdatedmerchanteventdata-fields-1). |
| `event_type` | Required | string | Values: `"credit_note.updated"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [CreditNoteUpdatedMerchantEventRequest](../models/CreditNoteUpdatedMerchantEventRequest.md#creditnoteupdatedmerchanteventrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### CreditNoteUpdatedMerchantEvent.data fields 1

Field definitions: [shared fields](CreditNoteCreatedMerchantEvent.md#creditnotecreatedmerchanteventdata-fields-1).

### CreditNoteUpdatedMerchantEvent.data fields 1.object

Field definitions: [CreditNoteCreatedMerchantEvent.data fields 1.object](../models/CreditNoteCreatedMerchantEvent.md#creditnotecreatedmerchanteventdata-fields-1object).

