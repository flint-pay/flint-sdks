[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionPaymentRetrySucceededInstalledMerchantsEvent

The `subscription_payment_retry.succeeded` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | object | `data`: [field definitions](../models/SubscriptionPaymentRetryCreatedInstalledMerchantsEvent.md#subscriptionpaymentretrycreatedinstalledmerchantseventdata). |
| `event_type` | Required | string | Values: `"subscription_payment_retry.succeeded"`. |
| `partner_app_id` | Required | string |  |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [WebhookEventSource](../models/WebhookEventSource.md#webhookeventsource) and object | The source of a partner webhook event, selected by type. `source`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### SubscriptionPaymentRetrySucceededInstalledMerchantsEvent.data

Field definitions: [SubscriptionPaymentRetryCreatedInstalledMerchantsEvent.data](../models/SubscriptionPaymentRetryCreatedInstalledMerchantsEvent.md#subscriptionpaymentretrycreatedinstalledmerchantseventdata).

### SubscriptionPaymentRetrySucceededInstalledMerchantsEvent.source

Declared alternatives: [BundleArchivedInstalledMerchantsEvent.source](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventsource).

