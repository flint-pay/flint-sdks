[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreditNoteUpdatedMerchantEvent

The `credit_note.updated` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. |
| `data` | Required | [CreditNoteUpdatedMerchantEventData](../models/CreditNoteUpdatedMerchantEventData.md#creditnoteupdatedmerchanteventdata) | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/CreditNoteUpdatedMerchantEvent.md#creditnoteupdatedmerchanteventdata-fields-1). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"merchant"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"credit_note.updated"`. |
| `merchant_id` | Required | string | ID of the merchant this resource belongs to. |
| `mode` | Required | string | Environment used for this resource or request. Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [CreditNoteUpdatedMerchantEventRequest](../models/CreditNoteUpdatedMerchantEventRequest.md#creditnoteupdatedmerchanteventrequest) or null | The originating request. `null` when the event has no originating request ID. |
| `sandbox_id` | Optional | string | Public sandbox ID for this event. Present exactly when mode is test; omitted in live mode. |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. |

### CreditNoteUpdatedMerchantEvent.data fields 1

The resource snapshot recorded for this event and rendered at the delivery API version.

Field definitions: [shared fields](CreditNoteCreatedMerchantEvent.md#creditnotecreatedmerchanteventdata-fields-1).

### CreditNoteUpdatedMerchantEvent.data fields 1.object

Field definitions: [CreditNoteCreatedMerchantEvent.data fields 1.object](../models/CreditNoteCreatedMerchantEvent.md#creditnotecreatedmerchanteventdata-fields-1object).

