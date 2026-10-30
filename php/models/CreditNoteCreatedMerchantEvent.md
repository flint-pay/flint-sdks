[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreditNoteCreatedMerchantEvent

The `credit_note.created` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [CreditNoteCreatedMerchantEventData](../models/CreditNoteCreatedMerchantEventData.md#creditnotecreatedmerchanteventdata) | `data`: [field definitions](../models/CreditNoteCreatedMerchantEvent.md#creditnotecreatedmerchanteventdata-fields-1). |
| `event_type` | Required | string | Values: `"credit_note.created"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [CreditNoteCreatedMerchantEventRequest](../models/CreditNoteCreatedMerchantEventRequest.md#creditnotecreatedmerchanteventrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### CreditNoteCreatedMerchantEvent.data fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [CreditNote](../models/CreditNote.md#creditnote) | A correction against an issued invoice. Credit notes reduce what is owed; refunds return what was already collected. `object`: [field definitions](../models/CreditNoteCreatedMerchantEvent.md#creditnotecreatedmerchanteventdata-fields-1object). |

### CreditNoteCreatedMerchantEvent.data fields 1.object

A correction against an issued invoice. Credit notes reduce what is owed; refunds return what was already collected.

Field definitions: [shared fields](CreditNoteResponse.md#creditnoteresponsedata).

### CreditNoteCreatedMerchantEvent.data fields 1.object.buyer_tax_identity

Declared alternatives: [CreditNoteResponse.data.buyer_tax_identity](../models/CreditNoteResponse.md#creditnoteresponsedatabuyer_tax_identity).

### CreditNoteCreatedMerchantEvent.data fields 1.object.seller_tax_identity

Declared alternatives: [CreditNoteResponse.data.buyer_tax_identity](../models/CreditNoteResponse.md#creditnoteresponsedatabuyer_tax_identity).

