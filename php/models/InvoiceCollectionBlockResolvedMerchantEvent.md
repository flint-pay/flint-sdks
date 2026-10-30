[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceCollectionBlockResolvedMerchantEvent

The `invoice.collection_block_resolved` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [InvoiceCollectionBlockResolvedMerchantEventData](../models/InvoiceCollectionBlockResolvedMerchantEventData.md#invoicecollectionblockresolvedmerchanteventdata) | `data`: [field definitions](../models/InvoiceCollectionBlockResolvedMerchantEvent.md#invoicecollectionblockresolvedmerchanteventdata-fields-1). |
| `event_type` | Required | string | Values: `"invoice.collection_block_resolved"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [InvoiceCollectionBlockResolvedMerchantEventRequest](../models/InvoiceCollectionBlockResolvedMerchantEventRequest.md#invoicecollectionblockresolvedmerchanteventrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### InvoiceCollectionBlockResolvedMerchantEvent.data fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [Invoice](../models/Invoice.md#invoice) | A bill issued to a customer. `object`: [field definitions](../models/InvoiceCollectionBlockResolvedMerchantEvent.md#invoicecollectionblockresolvedmerchanteventdata-fields-1object). |

### InvoiceCollectionBlockResolvedMerchantEvent.data fields 1.object

A bill issued to a customer.

Field definitions: [shared fields](Invoice.md#invoice).

### InvoiceCollectionBlockResolvedMerchantEvent.data fields 1.object.collection

Declared alternatives: [Invoice.collection](../models/Invoice.md#invoicecollection).

### InvoiceCollectionBlockResolvedMerchantEvent.data fields 1.object.metadata

Field definitions: [LocationResponse.data.metadata](../models/LocationResponse.md#locationresponsedatametadata).

### InvoiceCollectionBlockResolvedMerchantEvent.data fields 1.object.payment_due

Declared alternatives: [Invoice.payment_due](../models/Invoice.md#invoicepayment_due).

### InvoiceCollectionBlockResolvedMerchantEvent.data fields 1.object.remit_to_address

Field definitions: [Invoice.remit_to_address](../models/Invoice.md#invoiceremit_to_address).

### InvoiceCollectionBlockResolvedMerchantEvent.data fields 1.object.snapshot

Field definitions: [Invoice.snapshot fields 1](../models/Invoice.md#invoicesnapshot-fields-1).

