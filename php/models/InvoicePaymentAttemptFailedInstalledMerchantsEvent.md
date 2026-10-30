[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoicePaymentAttemptFailedInstalledMerchantsEvent

The `invoice_payment_attempt.failed` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [InvoicePaymentAttemptFailedInstalledMerchantsEventData](../models/InvoicePaymentAttemptFailedInstalledMerchantsEventData.md#invoicepaymentattemptfailedinstalledmerchantseventdata) | `data`: [field definitions](../models/InvoicePaymentAttemptFailedInstalledMerchantsEvent.md#invoicepaymentattemptfailedinstalledmerchantseventdata-fields-1). |
| `event_type` | Required | string | Values: `"invoice_payment_attempt.failed"`. |
| `partner_app_id` | Required | string |  |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | Alternative shapes (see declared variants) and object | The source of a partner webhook event, selected by type. `source`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### InvoicePaymentAttemptFailedInstalledMerchantsEvent.data fields 1

Field definitions: [shared fields](InvoicePaymentAttemptCanceledMerchantEvent.md#invoicepaymentattemptcanceledmerchanteventdata-fields-1).

### InvoicePaymentAttemptFailedInstalledMerchantsEvent.data fields 1.object

Field definitions: [InvoicePaymentAttemptCanceledMerchantEvent.data fields 1.object](../models/InvoicePaymentAttemptCanceledMerchantEvent.md#invoicepaymentattemptcanceledmerchanteventdata-fields-1object).

### InvoicePaymentAttemptFailedInstalledMerchantsEvent.source

Declared alternatives: [BundleArchivedInstalledMerchantsEvent.source](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventsource).

