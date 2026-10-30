[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceCollectionBlockedInstalledMerchantsEvent

The `invoice.collection_blocked` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | object | `data`: [field definitions](../models/InvoiceCollectionBlockedInstalledMerchantsEvent.md#invoicecollectionblockedinstalledmerchantseventdata). |
| `event_type` | Required | string | Values: `"invoice.collection_blocked"`. |
| `partner_app_id` | Required | string |  |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [WebhookEventSource](../models/WebhookEventSource.md#webhookeventsource) and object | The source of a partner webhook event, selected by type. `source`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### InvoiceCollectionBlockedInstalledMerchantsEvent.data

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [Invoice](../models/Invoice.md#invoice) | A bill issued to a customer. `object`: [field definitions](../models/InvoiceCollectionBlockedInstalledMerchantsEvent.md#invoicecollectionblockedinstalledmerchantseventdataobject). |

### InvoiceCollectionBlockedInstalledMerchantsEvent.data.object

A bill issued to a customer.

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

Declared alternatives: [BundleArchivedInstalledMerchantsEvent.source](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventsource).

