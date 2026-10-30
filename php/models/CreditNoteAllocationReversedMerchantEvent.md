[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreditNoteAllocationReversedMerchantEvent

The `credit_note_allocation.reversed` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [CreditNoteAllocationReversedMerchantEventData](../models/CreditNoteAllocationReversedMerchantEventData.md#creditnoteallocationreversedmerchanteventdata) | `data`: [field definitions](../models/CreditNoteAllocationReversedMerchantEvent.md#creditnoteallocationreversedmerchanteventdata-fields-1). |
| `event_type` | Required | string | Values: `"credit_note_allocation.reversed"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [CreditNoteAllocationReversedMerchantEventRequest](../models/CreditNoteAllocationReversedMerchantEventRequest.md#creditnoteallocationreversedmerchanteventrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### CreditNoteAllocationReversedMerchantEvent.data fields 1

Field definitions: [shared fields](CreditNoteAllocationCreatedMerchantEvent.md#creditnoteallocationcreatedmerchanteventdata-fields-1).

### CreditNoteAllocationReversedMerchantEvent.data fields 1.object

Field definitions: [CreditNoteAllocationCreatedMerchantEvent.data fields 1.object](../models/CreditNoteAllocationCreatedMerchantEvent.md#creditnoteallocationcreatedmerchanteventdata-fields-1object).

