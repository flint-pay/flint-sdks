[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BundleArchivedMerchantEvent

The `bundle.archived` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [BundleArchivedMerchantEventData](../models/BundleArchivedMerchantEventData.md#bundlearchivedmerchanteventdata) | `data`: [field definitions](../models/BundleArchivedMerchantEvent.md#bundlearchivedmerchanteventdata-fields-1). |
| `event_type` | Required | string | Values: `"bundle.archived"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [BundleArchivedMerchantEventRequest](../models/BundleArchivedMerchantEventRequest.md#bundlearchivedmerchanteventrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### BundleArchivedMerchantEvent.data fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [Bundle](../models/Bundle.md#bundle) | Several variants sold as one line at the bundle's price. A bundle line takes its components' shared taxability and tax category; all components must share both stored values. An unset category uses the merchant default and equals only another unset category. `object`: [field definitions](../models/BundleArchivedMerchantEvent.md#bundlearchivedmerchanteventdata-fields-1object). |

### BundleArchivedMerchantEvent.data fields 1.object

Several variants sold as one line at the bundle's price. A bundle line takes its components' shared taxability and tax category; all components must share both stored values. An unset category uses the merchant default and equals only another unset category.

Field definitions: [shared fields](Bundle.md#bundle).

### BundleArchivedMerchantEvent.data fields 1.object.metadata

Field definitions: [Bundle.metadata](../models/Bundle.md#bundlemetadata).

