[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreditNoteAllocationCreatedMerchantEvent

The `credit_note_allocation.created` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [CreditNoteAllocationCreatedMerchantEventData](../models/CreditNoteAllocationCreatedMerchantEventData.md#creditnoteallocationcreatedmerchanteventdata) | `data`: [field definitions](../models/CreditNoteAllocationCreatedMerchantEvent.md#creditnoteallocationcreatedmerchanteventdata-fields-1). |
| `event_type` | Required | string | Values: `"credit_note_allocation.created"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [CreditNoteAllocationCreatedMerchantEventRequest](../models/CreditNoteAllocationCreatedMerchantEventRequest.md#creditnoteallocationcreatedmerchanteventrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### CreditNoteAllocationCreatedMerchantEvent.data fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [CreditNoteAllocation](../models/CreditNoteAllocation.md#creditnoteallocation) | One application of credit to the invoice. Allocations are append-only: a reversal sets reversed_at rather than removing the row. `object`: [field definitions](../models/CreditNoteAllocationCreatedMerchantEvent.md#creditnoteallocationcreatedmerchanteventdata-fields-1object). |

### CreditNoteAllocationCreatedMerchantEvent.data fields 1.object

One application of credit to the invoice. Allocations are append-only: a reversal sets reversed_at rather than removing the row.

Field definitions: [shared fields](CreditNoteAllocation.md#creditnoteallocation).

