[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceDeliveryAttemptFailedInstalledMerchantsEvent

The `invoice_delivery_attempt.failed` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | object | `data`: [field definitions](../models/InvoiceDeliveryAttemptFailedInstalledMerchantsEvent.md#invoicedeliveryattemptfailedinstalledmerchantseventdata). |
| `event_type` | Required | string | Values: `"invoice_delivery_attempt.failed"`. |
| `partner_app_id` | Required | string |  |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [WebhookEventSource](../models/WebhookEventSource.md#webhookeventsource) and object | The source of a partner webhook event, selected by type. `source`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### InvoiceDeliveryAttemptFailedInstalledMerchantsEvent.data

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [InvoiceDeliveryAttempt](../models/InvoiceDeliveryAttempt.md#invoicedeliveryattempt) | One attempt to deliver an invoice by email, either the original send or a reminder, with its recipients and status. `object`: [field definitions](../models/InvoiceDeliveryAttemptFailedInstalledMerchantsEvent.md#invoicedeliveryattemptfailedinstalledmerchantseventdataobject). |

### InvoiceDeliveryAttemptFailedInstalledMerchantsEvent.data.object

One attempt to deliver an invoice by email, either the original send or a reminder, with its recipients and status.

Field definitions: [shared fields](InvoiceDeliveryAttempt.md#invoicedeliveryattempt).

### InvoiceDeliveryAttemptFailedInstalledMerchantsEvent.source

Declared alternatives: [BundleArchivedInstalledMerchantsEvent.source](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventsource).

