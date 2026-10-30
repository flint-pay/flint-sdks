[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceCollectionBlockedInstalledMerchantsEventInput

The `invoice.collection_blocked` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | object | `data`: [field definitions](../models/InvoiceCollectionBlockedInstalledMerchantsEventInput.md#invoicecollectionblockedinstalledmerchantseventinputdata). |
| `event_type` | Required | string | Values: `"invoice.collection_blocked"`. |
| `partner_app_id` | Required | string |  |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [PartnerWebhookEnvelopeSourceInput](../models/PartnerWebhookEnvelopeSourceInput.md#partnerwebhookenvelopesourceinput) and object | The source of a partner webhook event, selected by type. `source`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### InvoiceCollectionBlockedInstalledMerchantsEventInput.data

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [InvoiceInput](../models/InvoiceInput.md#invoiceinput) | A bill issued to a customer. `object`: [field definitions](../models/InvoiceCollectionBlockedInstalledMerchantsEventInput.md#invoicecollectionblockedinstalledmerchantseventinputdataobject). |

### InvoiceCollectionBlockedInstalledMerchantsEventInput.data.object

A bill issued to a customer.

Field definitions: [shared fields](InvoiceInput.md#invoiceinput).

### InvoiceCollectionBlockedInstalledMerchantsEventInput.source

Declared alternatives: [BundleArchivedInstalledMerchantsEventInput.source](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputsource).

