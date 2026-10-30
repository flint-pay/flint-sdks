[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryZoneActivatedInstalledMerchantsEventInput

The `delivery_zone.activated` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | object | `data`: [field definitions](../models/DeliveryZoneActivatedInstalledMerchantsEventInput.md#deliveryzoneactivatedinstalledmerchantseventinputdata). |
| `event_type` | Required | string | Values: `"delivery_zone.activated"`. |
| `partner_app_id` | Required | string |  |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [PartnerWebhookEnvelopeSourceInput](../models/PartnerWebhookEnvelopeSourceInput.md#partnerwebhookenvelopesourceinput) and object | The source of a partner webhook event, selected by type. `source`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### DeliveryZoneActivatedInstalledMerchantsEventInput.data

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [DeliveryZoneInput](../models/DeliveryZoneInput.md#deliveryzoneinput) | A geographic area served by a delivery method. `object`: [field definitions](../models/DeliveryZoneActivatedInstalledMerchantsEventInput.md#deliveryzoneactivatedinstalledmerchantseventinputdataobject). |

### DeliveryZoneActivatedInstalledMerchantsEventInput.data.object

A geographic area served by a delivery method.

Field definitions: [shared fields](DeliveryZoneInput.md#deliveryzoneinput).

### DeliveryZoneActivatedInstalledMerchantsEventInput.source

Declared alternatives: [BundleArchivedInstalledMerchantsEventInput.source](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputsource).

