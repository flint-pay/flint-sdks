[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreditNoteIssuedMerchantEvent

The `credit_note.issued` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [CreditNoteIssuedMerchantEventData](../models/CreditNoteIssuedMerchantEventData.md#creditnoteissuedmerchanteventdata) | `data`: [field definitions](../models/CreditNoteIssuedMerchantEvent.md#creditnoteissuedmerchanteventdata-fields-1). |
| `event_type` | Required | string | Values: `"credit_note.issued"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [CreditNoteIssuedMerchantEventRequest](../models/CreditNoteIssuedMerchantEventRequest.md#creditnoteissuedmerchanteventrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### CreditNoteIssuedMerchantEvent.data fields 1

Field definitions: [shared fields](CreditNoteCreatedMerchantEvent.md#creditnotecreatedmerchanteventdata-fields-1).

### CreditNoteIssuedMerchantEvent.data fields 1.object

Field definitions: [CreditNoteCreatedMerchantEvent.data fields 1.object](../models/CreditNoteCreatedMerchantEvent.md#creditnotecreatedmerchanteventdata-fields-1object).

