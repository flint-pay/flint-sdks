[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionPaymentRetryCreatedInstalledMerchantsEvent

The `subscription_payment_retry.created` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | object | `data`: [field definitions](../models/SubscriptionPaymentRetryCreatedInstalledMerchantsEvent.md#subscriptionpaymentretrycreatedinstalledmerchantseventdata). |
| `event_type` | Required | string | Values: `"subscription_payment_retry.created"`. |
| `partner_app_id` | Required | string |  |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [WebhookEventSource](../models/WebhookEventSource.md#webhookeventsource) and object | The source of a partner webhook event, selected by type. `source`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### SubscriptionPaymentRetryCreatedInstalledMerchantsEvent.data

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [SubscriptionPaymentRetry](../models/SubscriptionPaymentRetry.md#subscriptionpaymentretry) | An attempt to collect a subscription's overdue payment. `object`: [field definitions](../models/SubscriptionPaymentRetryCreatedInstalledMerchantsEvent.md#subscriptionpaymentretrycreatedinstalledmerchantseventdataobject). |

### SubscriptionPaymentRetryCreatedInstalledMerchantsEvent.data.object

An attempt to collect a subscription's overdue payment.

Field definitions: [shared fields](SubscriptionPaymentRetry.md#subscriptionpaymentretry).

### SubscriptionPaymentRetryCreatedInstalledMerchantsEvent.source

Declared alternatives: [BundleArchivedInstalledMerchantsEvent.source](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventsource).

