[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceCollectionBlockResolvedMerchantEvent

The `invoice.collection_block_resolved` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. |
| `data` | Required | [InvoiceCollectionBlockResolvedMerchantEventData](../models/InvoiceCollectionBlockResolvedMerchantEventData.md#invoicecollectionblockresolvedmerchanteventdata) | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/InvoiceCollectionBlockResolvedMerchantEvent.md#invoicecollectionblockresolvedmerchanteventdata-fields-1). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"merchant"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"invoice.collection_block_resolved"`. |
| `merchant_id` | Required | string | ID of the merchant this resource belongs to. |
| `mode` | Required | string | Environment used for this resource or request. Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [InvoiceCollectionBlockResolvedMerchantEventRequest](../models/InvoiceCollectionBlockResolvedMerchantEventRequest.md#invoicecollectionblockresolvedmerchanteventrequest) or null | The originating request. `null` when the event has no originating request ID. |
| `sandbox_id` | Optional | string | Public sandbox ID for this event. Present exactly when mode is test; omitted in live mode. |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. |

### InvoiceCollectionBlockResolvedMerchantEvent.data fields 1

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit these fields: `public_url`. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit these fields: `public_url`. `object`: [field definitions](../models/InvoiceCollectionBlockResolvedMerchantEvent.md#invoicecollectionblockresolvedmerchanteventdata-fields-1object). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. |

### InvoiceCollectionBlockResolvedMerchantEvent.data fields 1.object

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit these fields: `public_url`.

Field definitions: [shared fields](Invoice.md#invoice).

### InvoiceCollectionBlockResolvedMerchantEvent.data fields 1.object.collection

Declared alternatives: [CollectInvoiceResponse.data.invoice.collection](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicecollection).

### InvoiceCollectionBlockResolvedMerchantEvent.data fields 1.object.late_fees[]

Field definitions: [CollectInvoiceResponse.data.invoice.late_fees[]](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicelate_fees).

### InvoiceCollectionBlockResolvedMerchantEvent.data fields 1.object.metadata

Field definitions: [CollectInvoiceResponse.data.invoice.metadata](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicemetadata).

### InvoiceCollectionBlockResolvedMerchantEvent.data fields 1.object.payment_due

Declared alternatives: [CollectInvoiceResponse.data.invoice.payment_due](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicepayment_due).

### InvoiceCollectionBlockResolvedMerchantEvent.data fields 1.object.payment_terms_snapshot

Field definitions: [CollectInvoiceResponse.data.invoice.payment_terms_snapshot](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicepayment_terms_snapshot).

### InvoiceCollectionBlockResolvedMerchantEvent.data fields 1.object.remit_to_address

Field definitions: [CollectInvoiceResponse.data.invoice.remit_to_address](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoiceremit_to_address).

### InvoiceCollectionBlockResolvedMerchantEvent.data fields 1.object.schedule_entries[]

Field definitions: [CollectInvoiceResponse.data.invoice.schedule_entries[]](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoiceschedule_entries).

### InvoiceCollectionBlockResolvedMerchantEvent.data fields 1.object.snapshot

Field definitions: [CollectInvoiceResponse.data.invoice.snapshot](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicesnapshot).

