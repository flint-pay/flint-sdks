[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoicePaymentAttemptFailedInstalledMerchantsEvent

The `invoice_payment_attempt.failed` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | object | `data`: [field definitions](../models/InvoicePaymentAttemptCanceledInstalledMerchantsEvent.md#invoicepaymentattemptcanceledinstalledmerchantseventdata). |
| `event_type` | Required | string | Values: `"invoice_payment_attempt.failed"`. |
| `partner_app_id` | Required | string |  |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [WebhookEventSource](../models/WebhookEventSource.md#webhookeventsource) and object | The source of a partner webhook event, selected by type. `source`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### InvoicePaymentAttemptFailedInstalledMerchantsEvent.data

Field definitions: [InvoicePaymentAttemptCanceledInstalledMerchantsEvent.data](../models/InvoicePaymentAttemptCanceledInstalledMerchantsEvent.md#invoicepaymentattemptcanceledinstalledmerchantseventdata).

### InvoicePaymentAttemptFailedInstalledMerchantsEvent.source

Declared alternatives: [BundleArchivedInstalledMerchantsEvent.source](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventsource).

