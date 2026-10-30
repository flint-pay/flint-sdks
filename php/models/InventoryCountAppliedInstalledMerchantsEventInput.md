[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryCountAppliedInstalledMerchantsEventInput

The `inventory_count.applied` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | object | `data`: [field definitions](../models/InventoryCountAppliedInstalledMerchantsEventInput.md#inventorycountappliedinstalledmerchantseventinputdata). |
| `event_type` | Required | string | Values: `"inventory_count.applied"`. |
| `partner_app_id` | Required | string |  |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [PartnerWebhookEnvelopeSourceInput](../models/PartnerWebhookEnvelopeSourceInput.md#partnerwebhookenvelopesourceinput) and object | The source of a partner webhook event, selected by type. `source`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### InventoryCountAppliedInstalledMerchantsEventInput.data

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [InventoryCountInput](../models/InventoryCountInput.md#inventorycountinput) | A physical count used to reconcile stock. `object`: [field definitions](../models/InventoryCountAppliedInstalledMerchantsEventInput.md#inventorycountappliedinstalledmerchantseventinputdataobject). |

### InventoryCountAppliedInstalledMerchantsEventInput.data.object

A physical count used to reconcile stock.

Field definitions: [shared fields](InventoryCountInput.md#inventorycountinput).

### InventoryCountAppliedInstalledMerchantsEventInput.source

Declared alternatives: [BundleArchivedInstalledMerchantsEventInput.source](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputsource).

