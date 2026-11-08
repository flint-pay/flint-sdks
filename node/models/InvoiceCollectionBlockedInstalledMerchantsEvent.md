[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceCollectionBlockedInstalledMerchantsEvent

The `invoice.collection_blocked` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. Example: `"2026-08-02"`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `data` | Required | object | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/InvoiceCollectionBlockedInstalledMerchantsEvent.md#invoicecollectionblockedinstalledmerchantseventdata). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"installed_merchants"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"invoice.collection_blocked"`. |
| `partner_app_id` | Required | string | ID of the partner app that owns the receiving endpoint. Example: `"papp_01KEZF7C00Y8VMXYZ1GNPP3WHV"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [WebhookEventSource](../models/WebhookEventSource.md#webhookeventsource) and object | The merchant and partner app install this event concerns, with environment details for installed-merchant events. The merchant and partner app install the event concerns. Environment fields are present for installed-merchant events. `source`: [field definitions](../models/BalanceTransactionCreatedInstalledMerchantsEvent.md#balancetransactioncreatedinstalledmerchantseventsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. Example: `"whev_01KEZF7C00362MS3HV970TRZGS"`. |

### InvoiceCollectionBlockedInstalledMerchantsEvent.data

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit these fields: `public_url`. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit these fields: `public_url`. `object`: [field definitions](../models/InvoiceCollectionBlockedInstalledMerchantsEvent.md#invoicecollectionblockedinstalledmerchantseventdataobject). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. |

### InvoiceCollectionBlockedInstalledMerchantsEvent.data.object

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit these fields: `public_url`.

Field definitions: [shared fields](Invoice.md#invoice).

### InvoiceCollectionBlockedInstalledMerchantsEvent.data.object.credit_money

Field definitions: [BuyerInvoice.credit_money](../models/BuyerInvoice.md#buyerinvoicecredit_money).

### InvoiceCollectionBlockedInstalledMerchantsEvent.data.object.currently_due_money

Field definitions: [BuyerInvoice.currently_due_money](../models/BuyerInvoice.md#buyerinvoicecurrently_due_money).

### InvoiceCollectionBlockedInstalledMerchantsEvent.data.object.late_fee_money

Field definitions: [BuyerInvoice.late_fee_money](../models/BuyerInvoice.md#buyerinvoicelate_fee_money).

### InvoiceCollectionBlockedInstalledMerchantsEvent.data.object.metadata

Field definitions: [DeliveryLocationSet.metadata](../models/DeliveryLocationSet.md#deliverylocationsetmetadata).

### InvoiceCollectionBlockedInstalledMerchantsEvent.data.object.outstanding_money

Field definitions: [Invoice.outstanding_money](../models/Invoice.md#invoiceoutstanding_money).

### InvoiceCollectionBlockedInstalledMerchantsEvent.data.object.paid_money

Field definitions: [BuyerInvoice.paid_money](../models/BuyerInvoice.md#buyerinvoicepaid_money).

### InvoiceCollectionBlockedInstalledMerchantsEvent.data.object.refunded_money

Field definitions: [BuyerInvoice.refunded_money](../models/BuyerInvoice.md#buyerinvoicerefunded_money).

### InvoiceCollectionBlockedInstalledMerchantsEvent.data.object.total_money

Field definitions: [Invoice.total_money](../models/Invoice.md#invoicetotal_money).

### InvoiceCollectionBlockedInstalledMerchantsEvent.data.object.written_off_money

Field definitions: [Invoice.written_off_money](../models/Invoice.md#invoicewritten_off_money).

### InvoiceCollectionBlockedInstalledMerchantsEvent.source

Field definitions: [BalanceTransactionCreatedInstalledMerchantsEvent.source](../models/BalanceTransactionCreatedInstalledMerchantsEvent.md#balancetransactioncreatedinstalledmerchantseventsource).

