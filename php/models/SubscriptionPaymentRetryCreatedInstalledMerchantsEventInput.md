[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionPaymentRetryCreatedInstalledMerchantsEventInput

The `subscription_payment_retry.created` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | object | `data`: [field definitions](../models/SubscriptionPaymentRetryCreatedInstalledMerchantsEventInput.md#subscriptionpaymentretrycreatedinstalledmerchantseventinputdata). |
| `event_type` | Required | string | Values: `"subscription_payment_retry.created"`. |
| `partner_app_id` | Required | string |  |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [PartnerWebhookEnvelopeSourceInput](../models/PartnerWebhookEnvelopeSourceInput.md#partnerwebhookenvelopesourceinput) and object | The source of a partner webhook event, selected by type. `source`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### SubscriptionPaymentRetryCreatedInstalledMerchantsEventInput.data

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [SubscriptionPaymentRetryInput](../models/SubscriptionPaymentRetryInput.md#subscriptionpaymentretryinput) | An attempt to collect a subscription's overdue payment. `object`: [field definitions](../models/SubscriptionPaymentRetryCreatedInstalledMerchantsEventInput.md#subscriptionpaymentretrycreatedinstalledmerchantseventinputdataobject). |

### SubscriptionPaymentRetryCreatedInstalledMerchantsEventInput.data.object

An attempt to collect a subscription's overdue payment.

Field definitions: [shared fields](SubscriptionPaymentRetryInput.md#subscriptionpaymentretryinput).

### SubscriptionPaymentRetryCreatedInstalledMerchantsEventInput.source

Declared alternatives: [BundleArchivedInstalledMerchantsEventInput.source](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputsource).

