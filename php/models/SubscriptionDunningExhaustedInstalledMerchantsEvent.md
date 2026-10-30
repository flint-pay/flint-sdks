[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionDunningExhaustedInstalledMerchantsEvent

The `subscription.dunning_exhausted` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [SubscriptionDunningExhaustedInstalledMerchantsEventData](../models/SubscriptionDunningExhaustedInstalledMerchantsEventData.md#subscriptiondunningexhaustedinstalledmerchantseventdata) | `data`: [field definitions](../models/SubscriptionDunningExhaustedInstalledMerchantsEvent.md#subscriptiondunningexhaustedinstalledmerchantseventdata-fields-1). |
| `event_type` | Required | string | Values: `"subscription.dunning_exhausted"`. |
| `partner_app_id` | Required | string |  |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | Alternative shapes (see declared variants) and object | The source of a partner webhook event, selected by type. `source`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### SubscriptionDunningExhaustedInstalledMerchantsEvent.data fields 1

Field definitions: [shared fields](SubscriptionActivatedMerchantEvent.md#subscriptionactivatedmerchanteventdata-fields-1).

### SubscriptionDunningExhaustedInstalledMerchantsEvent.data fields 1.object

Field definitions: [SubscriptionActivatedMerchantEvent.data fields 1.object](../models/SubscriptionActivatedMerchantEvent.md#subscriptionactivatedmerchanteventdata-fields-1object).

### SubscriptionDunningExhaustedInstalledMerchantsEvent.source

Declared alternatives: [BundleArchivedInstalledMerchantsEvent.source](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventsource).

