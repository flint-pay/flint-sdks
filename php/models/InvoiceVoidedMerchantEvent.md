[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceVoidedMerchantEvent

The `invoice.voided` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [InvoiceVoidedMerchantEventData](../models/InvoiceVoidedMerchantEventData.md#invoicevoidedmerchanteventdata) | `data`: [field definitions](../models/InvoiceVoidedMerchantEvent.md#invoicevoidedmerchanteventdata-fields-1). |
| `event_type` | Required | string | Values: `"invoice.voided"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [InvoiceVoidedMerchantEventRequest](../models/InvoiceVoidedMerchantEventRequest.md#invoicevoidedmerchanteventrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### InvoiceVoidedMerchantEvent.data fields 1

Field definitions: [shared fields](InvoiceCollectionBlockResolvedMerchantEvent.md#invoicecollectionblockresolvedmerchanteventdata-fields-1).

### InvoiceVoidedMerchantEvent.data fields 1.object

Field definitions: [InvoiceCollectionBlockResolvedMerchantEvent.data fields 1.object](../models/InvoiceCollectionBlockResolvedMerchantEvent.md#invoicecollectionblockresolvedmerchanteventdata-fields-1object).

