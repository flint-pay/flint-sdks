[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionActivatedInstalledMerchantsEvent

The `subscription.activated` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | object | `data`: [field definitions](../models/SubscriptionActivatedInstalledMerchantsEvent.md#subscriptionactivatedinstalledmerchantseventdata). |
| `event_type` | Required | string | Values: `"subscription.activated"`. |
| `partner_app_id` | Required | string |  |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [WebhookEventSource](../models/WebhookEventSource.md#webhookeventsource) and object | The source of a partner webhook event, selected by type. `source`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### SubscriptionActivatedInstalledMerchantsEvent.data

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [Subscription](../models/Subscription.md#subscription) | A customer's recurring purchase. `object`: [field definitions](../models/SubscriptionActivatedInstalledMerchantsEvent.md#subscriptionactivatedinstalledmerchantseventdataobject). |

### SubscriptionActivatedInstalledMerchantsEvent.data.object

A customer's recurring purchase.

Field definitions: [shared fields](Subscription.md#subscription).

### SubscriptionActivatedInstalledMerchantsEvent.data.object.early_termination_fee_money

Field definitions: [BuyerSubscription.early_termination_fee_money](../models/BuyerSubscription.md#buyersubscriptionearly_termination_fee_money).

### SubscriptionActivatedInstalledMerchantsEvent.data.object.metadata

Field definitions: [BuyerRefund.metadata](../models/BuyerRefund.md#buyerrefundmetadata).

### SubscriptionActivatedInstalledMerchantsEvent.data.object.outstanding_money

Field definitions: [BuyerSubscription.outstanding_money](../models/BuyerSubscription.md#buyersubscriptionoutstanding_money).

### SubscriptionActivatedInstalledMerchantsEvent.data.object.recurring_subtotal_money

Declared alternatives: [BuyerSubscription.recurring_subtotal_money](../models/BuyerSubscription.md#buyersubscriptionrecurring_subtotal_money).

### SubscriptionActivatedInstalledMerchantsEvent.source

Declared alternatives: [BundleArchivedInstalledMerchantsEvent.source](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventsource).

