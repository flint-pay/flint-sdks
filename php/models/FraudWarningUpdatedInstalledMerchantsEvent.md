[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## FraudWarningUpdatedInstalledMerchantsEvent

The `fraud_warning.updated` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [FraudWarningUpdatedInstalledMerchantsEventData](../models/FraudWarningUpdatedInstalledMerchantsEventData.md#fraudwarningupdatedinstalledmerchantseventdata) | `data`: [field definitions](../models/FraudWarningUpdatedInstalledMerchantsEvent.md#fraudwarningupdatedinstalledmerchantseventdata-fields-1). |
| `event_type` | Required | string | Values: `"fraud_warning.updated"`. |
| `partner_app_id` | Required | string |  |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | Alternative shapes (see declared variants) and object | The source of a partner webhook event, selected by type. `source`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### FraudWarningUpdatedInstalledMerchantsEvent.data fields 1

Field definitions: [shared fields](FraudWarningCreatedMerchantEvent.md#fraudwarningcreatedmerchanteventdata-fields-1).

### FraudWarningUpdatedInstalledMerchantsEvent.data fields 1.object

Field definitions: [FraudWarningCreatedMerchantEvent.data fields 1.object](../models/FraudWarningCreatedMerchantEvent.md#fraudwarningcreatedmerchanteventdata-fields-1object).

### FraudWarningUpdatedInstalledMerchantsEvent.source

Declared alternatives: [BundleArchivedInstalledMerchantsEvent.source](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventsource).

