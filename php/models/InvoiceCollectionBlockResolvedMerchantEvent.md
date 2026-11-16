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
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit these fields: `public_url`. `object`: [field definitions](../models/InvoiceCollectionBlockResolvedMerchantEvent.md#invoicecollectionblockresolvedmerchanteventdata-fields-1object). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/InvoiceCollectionBlockResolvedMerchantEvent.md#invoicecollectionblockresolvedmerchanteventdata-fields-1previous_attributes). |

### InvoiceCollectionBlockResolvedMerchantEvent.data fields 1.object

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit these fields: `public_url`.

Field definitions: [shared fields](InvoiceCollectionBlockResolvedMerchantEventData.md#invoicecollectionblockresolvedmerchanteventdataobject-fields-1).

### InvoiceCollectionBlockResolvedMerchantEvent.data fields 1.object.collection

Declared alternatives: [InvoiceResponse.data.collection](../models/InvoiceResponse.md#invoiceresponsedatacollection).

### InvoiceCollectionBlockResolvedMerchantEvent.data fields 1.object.customer

Declared alternatives: [InvoiceResponse.data.customer](../models/InvoiceResponse.md#invoiceresponsedatacustomer).

### InvoiceCollectionBlockResolvedMerchantEvent.data fields 1.object.late_fees[]

Field definitions: [InvoiceResponse.data.late_fees[]](../models/InvoiceResponse.md#invoiceresponsedatalate_fees).

### InvoiceCollectionBlockResolvedMerchantEvent.data fields 1.object.metadata

Field definitions: [DeliveryLocationSetResponse.data.metadata](../models/DeliveryLocationSetResponse.md#deliverylocationsetresponsedatametadata).

### InvoiceCollectionBlockResolvedMerchantEvent.data fields 1.object.order

Declared alternatives: [InvoiceResponse.data.order](../models/InvoiceResponse.md#invoiceresponsedataorder).

### InvoiceCollectionBlockResolvedMerchantEvent.data fields 1.object.payment_due

Declared alternatives: [InvoiceResponse.data.payment_due](../models/InvoiceResponse.md#invoiceresponsedatapayment_due).

### InvoiceCollectionBlockResolvedMerchantEvent.data fields 1.object.payment_terms_snapshot

Field definitions: [InvoiceResponse.data.payment_terms_snapshot](../models/InvoiceResponse.md#invoiceresponsedatapayment_terms_snapshot).

### InvoiceCollectionBlockResolvedMerchantEvent.data fields 1.object.remit_to_address

Field definitions: [InvoiceResponse.data.remit_to_address](../models/InvoiceResponse.md#invoiceresponsedataremit_to_address).

### InvoiceCollectionBlockResolvedMerchantEvent.data fields 1.object.schedule_entries[]

Field definitions: [InvoiceResponse.data.schedule_entries[]](../models/InvoiceResponse.md#invoiceresponsedataschedule_entries).

### InvoiceCollectionBlockResolvedMerchantEvent.data fields 1.object.snapshot

Field definitions: [InvoiceResponse.data.snapshot](../models/InvoiceResponse.md#invoiceresponsedatasnapshot).

### InvoiceCollectionBlockResolvedMerchantEvent.data fields 1.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Field definitions: [shared fields](InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributes).

### InvoiceCollectionBlockResolvedMerchantEvent.data fields 1.previous_attributes.cc_emails

Declared alternatives: [InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.cc_emails](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributescc_emails).

### InvoiceCollectionBlockResolvedMerchantEvent.data fields 1.previous_attributes.closed_at

Declared alternatives: [InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.closed_at](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributesclosed_at).

### InvoiceCollectionBlockResolvedMerchantEvent.data fields 1.previous_attributes.collection

Declared alternatives: [InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.collection](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributescollection).

### InvoiceCollectionBlockResolvedMerchantEvent.data fields 1.previous_attributes.collection_block_status

Declared alternatives: [ExpandedInvoiceSummaryPreviousAttributes.collection_block_status](../models/ExpandedInvoiceSummaryPreviousAttributes.md#expandedinvoicesummarypreviousattributescollection_block_status).

### InvoiceCollectionBlockResolvedMerchantEvent.data fields 1.previous_attributes.created_at

Declared alternatives: [ExpandedInvoiceSummaryPreviousAttributes.created_at](../models/ExpandedInvoiceSummaryPreviousAttributes.md#expandedinvoicesummarypreviousattributescreated_at).

### InvoiceCollectionBlockResolvedMerchantEvent.data fields 1.previous_attributes.customer

Declared alternatives: [InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.customer](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributescustomer).

### InvoiceCollectionBlockResolvedMerchantEvent.data fields 1.previous_attributes.customer_id

Declared alternatives: [InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.customer_id](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributescustomer_id).

### InvoiceCollectionBlockResolvedMerchantEvent.data fields 1.previous_attributes.delivery_mode

Declared alternatives: [InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.delivery_mode](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributesdelivery_mode).

### InvoiceCollectionBlockResolvedMerchantEvent.data fields 1.previous_attributes.due_date

Declared alternatives: [ExpandedInvoiceSummaryPreviousAttributes.due_date](../models/ExpandedInvoiceSummaryPreviousAttributes.md#expandedinvoicesummarypreviousattributesdue_date).

### InvoiceCollectionBlockResolvedMerchantEvent.data fields 1.previous_attributes.external_reference_id

Declared alternatives: [InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.external_reference_id](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributesexternal_reference_id).

### InvoiceCollectionBlockResolvedMerchantEvent.data fields 1.previous_attributes.footer

Declared alternatives: [InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.footer](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributesfooter).

### InvoiceCollectionBlockResolvedMerchantEvent.data fields 1.previous_attributes.invoice_id

Declared alternatives: [ExpandedInvoiceSummaryPreviousAttributes.invoice_id](../models/ExpandedInvoiceSummaryPreviousAttributes.md#expandedinvoicesummarypreviousattributesinvoice_id).

### InvoiceCollectionBlockResolvedMerchantEvent.data fields 1.previous_attributes.invoice_number

Declared alternatives: [InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.invoice_number](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributesinvoice_number).

### InvoiceCollectionBlockResolvedMerchantEvent.data fields 1.previous_attributes.is_overdue

Declared alternatives: [InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.is_overdue](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributesis_overdue).

### InvoiceCollectionBlockResolvedMerchantEvent.data fields 1.previous_attributes.issued_at

Declared alternatives: [InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.issued_at](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributesissued_at).

### InvoiceCollectionBlockResolvedMerchantEvent.data fields 1.previous_attributes.late_fees

Declared alternatives: [InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.late_fees](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributeslate_fees).

### InvoiceCollectionBlockResolvedMerchantEvent.data fields 1.previous_attributes.memo

Declared alternatives: [InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.memo](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributesmemo).

### InvoiceCollectionBlockResolvedMerchantEvent.data fields 1.previous_attributes.merchant_id

Declared alternatives: [InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.merchant_id](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributesmerchant_id).

### InvoiceCollectionBlockResolvedMerchantEvent.data fields 1.previous_attributes.metadata

Declared alternatives: [DeliveryLocationSetArchivedMerchantEventDataPreviousAttributes.metadata](../models/DeliveryLocationSetArchivedMerchantEventDataPreviousAttributes.md#deliverylocationsetarchivedmerchanteventdatapreviousattributesmetadata).

### InvoiceCollectionBlockResolvedMerchantEvent.data fields 1.previous_attributes.order

Declared alternatives: [InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.order](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributesorder).

### InvoiceCollectionBlockResolvedMerchantEvent.data fields 1.previous_attributes.order_id

Declared alternatives: [InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.order_id](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributesorder_id).

### InvoiceCollectionBlockResolvedMerchantEvent.data fields 1.previous_attributes.paid_at

Declared alternatives: [InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.paid_at](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributespaid_at).

### InvoiceCollectionBlockResolvedMerchantEvent.data fields 1.previous_attributes.payment_due

Declared alternatives: [InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.payment_due](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributespayment_due).

### InvoiceCollectionBlockResolvedMerchantEvent.data fields 1.previous_attributes.payment_terms_snapshot

Declared alternatives: [InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.payment_terms_snapshot](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributespayment_terms_snapshot).

### InvoiceCollectionBlockResolvedMerchantEvent.data fields 1.previous_attributes.po_number

Declared alternatives: [InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.po_number](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributespo_number).

### InvoiceCollectionBlockResolvedMerchantEvent.data fields 1.previous_attributes.recipient_email

Declared alternatives: [InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.recipient_email](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributesrecipient_email).

### InvoiceCollectionBlockResolvedMerchantEvent.data fields 1.previous_attributes.reference

Declared alternatives: [InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.reference](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributesreference).

### InvoiceCollectionBlockResolvedMerchantEvent.data fields 1.previous_attributes.refund_status

Declared alternatives: [ExpandedInvoiceSummaryPreviousAttributes.refund_status](../models/ExpandedInvoiceSummaryPreviousAttributes.md#expandedinvoicesummarypreviousattributesrefund_status).

### InvoiceCollectionBlockResolvedMerchantEvent.data fields 1.previous_attributes.reminders_paused

Declared alternatives: [InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.reminders_paused](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributesreminders_paused).

### InvoiceCollectionBlockResolvedMerchantEvent.data fields 1.previous_attributes.reminders_paused_at

Declared alternatives: [InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.reminders_paused_at](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributesreminders_paused_at).

### InvoiceCollectionBlockResolvedMerchantEvent.data fields 1.previous_attributes.remit_to_address

Declared alternatives: [InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.remit_to_address](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributesremit_to_address).

### InvoiceCollectionBlockResolvedMerchantEvent.data fields 1.previous_attributes.schedule_entries

Declared alternatives: [InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.schedule_entries](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributesschedule_entries).

### InvoiceCollectionBlockResolvedMerchantEvent.data fields 1.previous_attributes.scheduled_issue_at

Declared alternatives: [InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.scheduled_issue_at](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributesscheduled_issue_at).

### InvoiceCollectionBlockResolvedMerchantEvent.data fields 1.previous_attributes.service_date

Declared alternatives: [InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.service_date](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributesservice_date).

### InvoiceCollectionBlockResolvedMerchantEvent.data fields 1.previous_attributes.status

Declared alternatives: [ExpandedInvoiceSummaryPreviousAttributes.status](../models/ExpandedInvoiceSummaryPreviousAttributes.md#expandedinvoicesummarypreviousattributesstatus).

### InvoiceCollectionBlockResolvedMerchantEvent.data fields 1.previous_attributes.subscription_id

Declared alternatives: [InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.subscription_id](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessubscription_id).

### InvoiceCollectionBlockResolvedMerchantEvent.data fields 1.previous_attributes.supported_actions

Declared alternatives: [ExpandedInvoiceSummaryPreviousAttributes.supported_actions](../models/ExpandedInvoiceSummaryPreviousAttributes.md#expandedinvoicesummarypreviousattributessupported_actions).

### InvoiceCollectionBlockResolvedMerchantEvent.data fields 1.previous_attributes.timezone

Declared alternatives: [InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.timezone](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributestimezone).

### InvoiceCollectionBlockResolvedMerchantEvent.data fields 1.previous_attributes.uncollectible_at

Declared alternatives: [InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.uncollectible_at](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributesuncollectible_at).

### InvoiceCollectionBlockResolvedMerchantEvent.data fields 1.previous_attributes.updated_at

Declared alternatives: [MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.updated_at](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesupdated_at).

### InvoiceCollectionBlockResolvedMerchantEvent.data fields 1.previous_attributes.version

Declared alternatives: [InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.version](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributesversion).

### InvoiceCollectionBlockResolvedMerchantEvent.data fields 1.previous_attributes.viewed_at

Declared alternatives: [InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.viewed_at](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributesviewed_at).

### InvoiceCollectionBlockResolvedMerchantEvent.data fields 1.previous_attributes.voided_at

Declared alternatives: [InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.voided_at](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributesvoided_at).

