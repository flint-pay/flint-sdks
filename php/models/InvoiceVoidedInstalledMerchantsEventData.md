[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceVoidedInstalledMerchantsEventData

The resource snapshot recorded for this event and rendered at the delivery API version.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | [InvoiceVoidedInstalledMerchantsEventDataObject](../models/InvoiceVoidedInstalledMerchantsEventDataObject.md#invoicevoidedinstalledmerchantseventdataobject) | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit these fields: `public_url`. `object`: [field definitions](../models/InvoiceVoidedInstalledMerchantsEventData.md#invoicevoidedinstalledmerchantseventdataobject-fields-1). |
| `previous_attributes` | Optional | [InvoiceVoidedInstalledMerchantsEventDataPreviousAttributes](../models/InvoiceVoidedInstalledMerchantsEventDataPreviousAttributes.md#invoicevoidedinstalledmerchantseventdatapreviousattributes) | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. |

### InvoiceVoidedInstalledMerchantsEventData.object fields 1

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit these fields: `public_url`.

Field definitions: [shared fields](InvoiceCollectionBlockResolvedMerchantEventData.md#invoicecollectionblockresolvedmerchanteventdataobject-fields-1).

### InvoiceVoidedInstalledMerchantsEventData.object fields 1.collection

Declared alternatives: [InvoiceResponse.data.collection](../models/InvoiceResponse.md#invoiceresponsedatacollection).

### InvoiceVoidedInstalledMerchantsEventData.object fields 1.customer

Declared alternatives: [InvoiceResponse.data.customer](../models/InvoiceResponse.md#invoiceresponsedatacustomer).

### InvoiceVoidedInstalledMerchantsEventData.object fields 1.late_fees[]

Field definitions: [InvoiceResponse.data.late_fees[]](../models/InvoiceResponse.md#invoiceresponsedatalate_fees).

### InvoiceVoidedInstalledMerchantsEventData.object fields 1.metadata

Field definitions: [DeliveryLocationSetResponse.data.metadata](../models/DeliveryLocationSetResponse.md#deliverylocationsetresponsedatametadata).

### InvoiceVoidedInstalledMerchantsEventData.object fields 1.order

Declared alternatives: [InvoiceResponse.data.order](../models/InvoiceResponse.md#invoiceresponsedataorder).

### InvoiceVoidedInstalledMerchantsEventData.object fields 1.payment_due

Declared alternatives: [InvoiceResponse.data.payment_due](../models/InvoiceResponse.md#invoiceresponsedatapayment_due).

### InvoiceVoidedInstalledMerchantsEventData.object fields 1.payment_terms_snapshot

Field definitions: [InvoiceResponse.data.payment_terms_snapshot](../models/InvoiceResponse.md#invoiceresponsedatapayment_terms_snapshot).

### InvoiceVoidedInstalledMerchantsEventData.object fields 1.remit_to_address

Field definitions: [InvoiceResponse.data.remit_to_address](../models/InvoiceResponse.md#invoiceresponsedataremit_to_address).

### InvoiceVoidedInstalledMerchantsEventData.object fields 1.schedule_entries[]

Field definitions: [InvoiceResponse.data.schedule_entries[]](../models/InvoiceResponse.md#invoiceresponsedataschedule_entries).

### InvoiceVoidedInstalledMerchantsEventData.object fields 1.snapshot

Field definitions: [InvoiceResponse.data.snapshot](../models/InvoiceResponse.md#invoiceresponsedatasnapshot).

