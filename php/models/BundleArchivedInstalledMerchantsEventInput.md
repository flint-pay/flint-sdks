[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BundleArchivedInstalledMerchantsEventInput

The `bundle.archived` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | object | `data`: [field definitions](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputdata). |
| `event_type` | Required | string | Values: `"bundle.archived"`. |
| `partner_app_id` | Required | string |  |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [PartnerWebhookEnvelopeSourceInput](../models/PartnerWebhookEnvelopeSourceInput.md#partnerwebhookenvelopesourceinput) and object | The source of a partner webhook event, selected by type. `source`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### BundleArchivedInstalledMerchantsEventInput.data

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [BundleInput](../models/BundleInput.md#bundleinput) | Several variants sold as one line at the bundle's price. A bundle line takes its components' shared taxability and tax category; all components must share both stored values. An unset category uses the merchant default and equals only another unset category. `object`: [field definitions](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputdataobject). |

### BundleArchivedInstalledMerchantsEventInput.data.object

Several variants sold as one line at the bundle's price. A bundle line takes its components' shared taxability and tax category; all components must share both stored values. An unset category uses the merchant default and equals only another unset category.

Field definitions: [shared fields](BundleInput.md#bundleinput).

### BundleArchivedInstalledMerchantsEventInput.source

The source of a partner webhook event, selected by type.

Field definitions: [shared fields](WebhookEventSourceInstalledMerchants.md#webhookeventsourceinstalledmerchants).

### BundleArchivedInstalledMerchantsEventInput.source variant 1: `type` = `"installed_merchants"`

oneOf with type: "installed_merchants": The installed_merchants source of a partner webhook event..

No additional constraints.

