[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceDeliveryAttemptFailedInstalledMerchantsEventInput

The `invoice_delivery_attempt.failed` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | object | `data`: [field definitions](../models/InvoiceDeliveryAttemptFailedInstalledMerchantsEventInput.md#invoicedeliveryattemptfailedinstalledmerchantseventinputdata). |
| `event_type` | Required | string | Values: `"invoice_delivery_attempt.failed"`. |
| `partner_app_id` | Required | string |  |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [PartnerWebhookEnvelopeSourceInput](../models/PartnerWebhookEnvelopeSourceInput.md#partnerwebhookenvelopesourceinput) and object | The source of a partner webhook event, selected by type. `source`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### InvoiceDeliveryAttemptFailedInstalledMerchantsEventInput.data

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [InvoiceDeliveryAttemptInput](../models/InvoiceDeliveryAttemptInput.md#invoicedeliveryattemptinput) | One attempt to deliver an invoice by email, either the original send or a reminder, with its recipients and status. `object`: [field definitions](../models/InvoiceDeliveryAttemptFailedInstalledMerchantsEventInput.md#invoicedeliveryattemptfailedinstalledmerchantseventinputdataobject). |

### InvoiceDeliveryAttemptFailedInstalledMerchantsEventInput.data.object

One attempt to deliver an invoice by email, either the original send or a reminder, with its recipients and status.

Field definitions: [shared fields](InvoiceDeliveryAttemptInput.md#invoicedeliveryattemptinput).

### InvoiceDeliveryAttemptFailedInstalledMerchantsEventInput.source

Declared alternatives: [BundleArchivedInstalledMerchantsEventInput.source](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputsource).

