[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnResolutionCreatedInstalledMerchantsEventInput

The `return_resolution.created` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | object | `data`: [field definitions](../models/ReturnResolutionCreatedInstalledMerchantsEventInput.md#returnresolutioncreatedinstalledmerchantseventinputdata). |
| `event_type` | Required | string | Values: `"return_resolution.created"`. |
| `partner_app_id` | Required | string |  |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [PartnerWebhookEnvelopeSourceInput](../models/PartnerWebhookEnvelopeSourceInput.md#partnerwebhookenvelopesourceinput) and object | The source of a partner webhook event, selected by type. `source`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### ReturnResolutionCreatedInstalledMerchantsEventInput.data

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [ReturnResolutionInput](../models/ReturnResolutionInput.md#returnresolutioninput) | The refund, exchange, or other outcome of a return. `object`: [field definitions](../models/ReturnResolutionCreatedInstalledMerchantsEventInput.md#returnresolutioncreatedinstalledmerchantseventinputdataobject). |

### ReturnResolutionCreatedInstalledMerchantsEventInput.data.object

The refund, exchange, or other outcome of a return.

Field definitions: [shared fields](ReturnResolutionInput.md#returnresolutioninput).

### ReturnResolutionCreatedInstalledMerchantsEventInput.source

Declared alternatives: [BundleArchivedInstalledMerchantsEventInput.source](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputsource).

