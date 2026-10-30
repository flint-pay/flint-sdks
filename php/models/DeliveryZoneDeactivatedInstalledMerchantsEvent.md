[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryZoneDeactivatedInstalledMerchantsEvent

The `delivery_zone.deactivated` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [DeliveryZoneDeactivatedInstalledMerchantsEventData](../models/DeliveryZoneDeactivatedInstalledMerchantsEventData.md#deliveryzonedeactivatedinstalledmerchantseventdata) | `data`: [field definitions](../models/DeliveryZoneDeactivatedInstalledMerchantsEvent.md#deliveryzonedeactivatedinstalledmerchantseventdata-fields-1). |
| `event_type` | Required | string | Values: `"delivery_zone.deactivated"`. |
| `partner_app_id` | Required | string |  |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | Alternative shapes (see declared variants) and object | The source of a partner webhook event, selected by type. `source`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### DeliveryZoneDeactivatedInstalledMerchantsEvent.data fields 1

Field definitions: [shared fields](DeliveryZoneActivatedMerchantEvent.md#deliveryzoneactivatedmerchanteventdata-fields-1).

### DeliveryZoneDeactivatedInstalledMerchantsEvent.data fields 1.object

Field definitions: [DeliveryZoneActivatedMerchantEvent.data fields 1.object](../models/DeliveryZoneActivatedMerchantEvent.md#deliveryzoneactivatedmerchanteventdata-fields-1object).

### DeliveryZoneDeactivatedInstalledMerchantsEvent.source

Declared alternatives: [BundleArchivedInstalledMerchantsEvent.source](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventsource).

