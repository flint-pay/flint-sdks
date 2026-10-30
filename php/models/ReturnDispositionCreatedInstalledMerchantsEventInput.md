[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnDispositionCreatedInstalledMerchantsEventInput

The `return_disposition.created` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | object | `data`: [field definitions](../models/ReturnDispositionCreatedInstalledMerchantsEventInput.md#returndispositioncreatedinstalledmerchantseventinputdata). |
| `event_type` | Required | string | Values: `"return_disposition.created"`. |
| `partner_app_id` | Required | string |  |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [PartnerWebhookEnvelopeSourceInput](../models/PartnerWebhookEnvelopeSourceInput.md#partnerwebhookenvelopesourceinput) and object | The source of a partner webhook event, selected by type. `source`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### ReturnDispositionCreatedInstalledMerchantsEventInput.data

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [ReturnDispositionInput](../models/ReturnDispositionInput.md#returndispositioninput) | A decision about how returned merchandise will be handled. `object`: [field definitions](../models/ReturnDispositionCreatedInstalledMerchantsEventInput.md#returndispositioncreatedinstalledmerchantseventinputdataobject). |

### ReturnDispositionCreatedInstalledMerchantsEventInput.data.object

A decision about how returned merchandise will be handled.

Field definitions: [shared fields](ReturnDispositionInput.md#returndispositioninput).

### ReturnDispositionCreatedInstalledMerchantsEventInput.source

Declared alternatives: [BundleArchivedInstalledMerchantsEventInput.source](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputsource).

