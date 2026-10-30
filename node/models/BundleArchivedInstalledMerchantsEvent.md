[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BundleArchivedInstalledMerchantsEvent

The `bundle.archived` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | object | `data`: [field definitions](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventdata). |
| `event_type` | Required | string | Values: `"bundle.archived"`. |
| `partner_app_id` | Required | string |  |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [WebhookEventSource](../models/WebhookEventSource.md#webhookeventsource) and object | The source of a partner webhook event, selected by type. `source`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### BundleArchivedInstalledMerchantsEvent.data

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [Bundle](../models/Bundle.md#bundle) | Several variants sold as one line at the bundle's price. A bundle line takes its components' shared taxability and tax category; all components must share both stored values. An unset category uses the merchant default and equals only another unset category. `object`: [field definitions](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventdataobject). |

### BundleArchivedInstalledMerchantsEvent.data.object

Several variants sold as one line at the bundle's price. A bundle line takes its components' shared taxability and tax category; all components must share both stored values. An unset category uses the merchant default and equals only another unset category.

Field definitions: [shared fields](Bundle.md#bundle).

### BundleArchivedInstalledMerchantsEvent.data.object.metadata

Field definitions: [Bundle.metadata](../models/Bundle.md#bundlemetadata).

### BundleArchivedInstalledMerchantsEvent.data.object.unit_price_money

Field definitions: [Bundle.unit_price_money](../models/Bundle.md#bundleunit_price_money).

### BundleArchivedInstalledMerchantsEvent.source

The source of a partner webhook event, selected by type.

Field definitions: [shared fields](WebhookEventSourceInstalledMerchants.md#webhookeventsourceinstalledmerchants).

### BundleArchivedInstalledMerchantsEvent.source variant 1: `type` = `"installed_merchants"`

oneOf with type: "installed_merchants": The installed_merchants source of a partner webhook event..

No additional constraints.

