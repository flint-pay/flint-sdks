[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoicePartiallyRefundedInstalledMerchantsEventData

The resource snapshot recorded for this event and rendered at the delivery API version.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `actor` | Optional | [ReturnActor](../models/ReturnActor.md#returnactor) | Who caused this event, captured when the change commits. Omitted when the event predates actor attribution or attribution is unavailable. Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID. `actor`: [field definitions](../models/ApiKeyCreatedEvent.md#apikeycreatedeventdata-fields-1actor). |
| `object` | Required | [InvoicePartiallyRefundedInstalledMerchantsEventDataObject](../models/InvoicePartiallyRefundedInstalledMerchantsEventDataObject.md#invoicepartiallyrefundedinstalledmerchantseventdataobject) | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit these fields: `public_url`. `object`: [field definitions](../models/InvoicePartiallyRefundedInstalledMerchantsEventData.md#invoicepartiallyrefundedinstalledmerchantseventdataobject-fields-1). |
| `previous_attributes` | Optional | [InvoicePartiallyRefundedInstalledMerchantsEventDataPreviousAttributes](../models/InvoicePartiallyRefundedInstalledMerchantsEventDataPreviousAttributes.md#invoicepartiallyrefundedinstalledmerchantseventdatapreviousattributes) | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. |

### InvoicePartiallyRefundedInstalledMerchantsEventData.actor

Field definitions: [ApiKeyCreatedEvent.data fields 1.actor](../models/ApiKeyCreatedEvent.md#apikeycreatedeventdata-fields-1actor).

### InvoicePartiallyRefundedInstalledMerchantsEventData.object fields 1

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit these fields: `public_url`.

Field definitions: [shared fields](InvoiceCollectionBlockResolvedMerchantEventData.md#invoicecollectionblockresolvedmerchanteventdataobject-fields-1).

### InvoicePartiallyRefundedInstalledMerchantsEventData.object fields 1.collection

Declared alternatives: [InvoiceResponse.data.collection](../models/InvoiceResponse.md#invoiceresponsedatacollection).

### InvoicePartiallyRefundedInstalledMerchantsEventData.object fields 1.customer

Declared alternatives: [InvoiceResponse.data.customer](../models/InvoiceResponse.md#invoiceresponsedatacustomer).

### InvoicePartiallyRefundedInstalledMerchantsEventData.object fields 1.late_fees[]

Field definitions: [InvoiceResponse.data.late_fees[]](../models/InvoiceResponse.md#invoiceresponsedatalate_fees).

### InvoicePartiallyRefundedInstalledMerchantsEventData.object fields 1.metadata

Field definitions: [DeliveryLocationSetResponse.data.metadata](../models/DeliveryLocationSetResponse.md#deliverylocationsetresponsedatametadata).

### InvoicePartiallyRefundedInstalledMerchantsEventData.object fields 1.order

Declared alternatives: [InvoiceResponse.data.order](../models/InvoiceResponse.md#invoiceresponsedataorder).

### InvoicePartiallyRefundedInstalledMerchantsEventData.object fields 1.payment_due

Declared alternatives: [InvoiceResponse.data.payment_due](../models/InvoiceResponse.md#invoiceresponsedatapayment_due).

### InvoicePartiallyRefundedInstalledMerchantsEventData.object fields 1.payment_terms_snapshot

Field definitions: [InvoiceResponse.data.payment_terms_snapshot](../models/InvoiceResponse.md#invoiceresponsedatapayment_terms_snapshot).

### InvoicePartiallyRefundedInstalledMerchantsEventData.object fields 1.remit_to_address

Field definitions: [InvoiceResponse.data.remit_to_address](../models/InvoiceResponse.md#invoiceresponsedataremit_to_address).

### InvoicePartiallyRefundedInstalledMerchantsEventData.object fields 1.schedule_entries[]

Field definitions: [InvoiceResponse.data.schedule_entries[]](../models/InvoiceResponse.md#invoiceresponsedataschedule_entries).

### InvoicePartiallyRefundedInstalledMerchantsEventData.object fields 1.snapshot

Field definitions: [InvoiceResponse.data.snapshot](../models/InvoiceResponse.md#invoiceresponsedatasnapshot).

