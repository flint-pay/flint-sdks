[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceLateFeeWaivedInstalledMerchantsEventData

The resource snapshot recorded for this event and rendered at the delivery API version.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | [InvoiceLateFeeWaivedInstalledMerchantsEventDataObject](../models/InvoiceLateFeeWaivedInstalledMerchantsEventDataObject.md#invoicelatefeewaivedinstalledmerchantseventdataobject) | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit these fields: `public_url`. `object`: [field definitions](../models/InvoiceLateFeeWaivedInstalledMerchantsEventData.md#invoicelatefeewaivedinstalledmerchantseventdataobject-fields-1). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. |

### InvoiceLateFeeWaivedInstalledMerchantsEventData.object fields 1

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit these fields: `public_url`.

Field definitions: [shared fields](InvoiceCollectionBlockResolvedMerchantEventData.md#invoicecollectionblockresolvedmerchanteventdataobject-fields-1).

### InvoiceLateFeeWaivedInstalledMerchantsEventData.object fields 1.collection

Declared alternatives: [CollectInvoiceResponse.data.invoice.collection](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicecollection).

### InvoiceLateFeeWaivedInstalledMerchantsEventData.object fields 1.customer

Declared alternatives: [CollectInvoiceResponse.data.invoice.customer](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicecustomer).

### InvoiceLateFeeWaivedInstalledMerchantsEventData.object fields 1.late_fees[]

Field definitions: [CollectInvoiceResponse.data.invoice.late_fees[]](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicelate_fees).

### InvoiceLateFeeWaivedInstalledMerchantsEventData.object fields 1.metadata

Field definitions: [CollectInvoiceResponse.data.invoice.metadata](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicemetadata).

### InvoiceLateFeeWaivedInstalledMerchantsEventData.object fields 1.order

Declared alternatives: [CollectInvoiceResponse.data.invoice.order](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoiceorder).

### InvoiceLateFeeWaivedInstalledMerchantsEventData.object fields 1.payment_due

Declared alternatives: [CollectInvoiceResponse.data.invoice.payment_due](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicepayment_due).

### InvoiceLateFeeWaivedInstalledMerchantsEventData.object fields 1.payment_terms_snapshot

Field definitions: [CollectInvoiceResponse.data.invoice.payment_terms_snapshot](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicepayment_terms_snapshot).

### InvoiceLateFeeWaivedInstalledMerchantsEventData.object fields 1.remit_to_address

Field definitions: [CollectInvoiceResponse.data.invoice.remit_to_address](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoiceremit_to_address).

### InvoiceLateFeeWaivedInstalledMerchantsEventData.object fields 1.schedule_entries[]

Field definitions: [CollectInvoiceResponse.data.invoice.schedule_entries[]](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoiceschedule_entries).

### InvoiceLateFeeWaivedInstalledMerchantsEventData.object fields 1.snapshot

Field definitions: [CollectInvoiceResponse.data.invoice.snapshot](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicesnapshot).

