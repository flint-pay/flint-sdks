[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ShipmentCreatedInstalledMerchantsEvent

The `shipment.created` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | object | `data`: [field definitions](../models/ShipmentCreatedInstalledMerchantsEvent.md#shipmentcreatedinstalledmerchantseventdata). |
| `event_type` | Required | string | Values: `"shipment.created"`. |
| `partner_app_id` | Required | string |  |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [WebhookEventSource](../models/WebhookEventSource.md#webhookeventsource) and object | The source of a partner webhook event, selected by type. `source`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### ShipmentCreatedInstalledMerchantsEvent.data

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [Shipment](../models/Shipment.md#shipment) | A shipment carrying fulfilled order items. `object`: [field definitions](../models/ShipmentCreatedInstalledMerchantsEvent.md#shipmentcreatedinstalledmerchantseventdataobject). |

### ShipmentCreatedInstalledMerchantsEvent.data.object

A shipment carrying fulfilled order items.

Field definitions: [shared fields](Shipment.md#shipment).

### ShipmentCreatedInstalledMerchantsEvent.data.object.metadata

Field definitions: [Shipment.metadata](../models/Shipment.md#shipmentmetadata).

### ShipmentCreatedInstalledMerchantsEvent.data.object.packages[]

Field definitions: [Fulfillment.packages[]](../models/Fulfillment.md#fulfillmentpackages).

### ShipmentCreatedInstalledMerchantsEvent.data.object.return_line_items[]

Field definitions: [BuyerPackage.return_line_items[]](../models/BuyerPackage.md#buyerpackagereturn_line_items).

### ShipmentCreatedInstalledMerchantsEvent.source

Declared alternatives: [BundleArchivedInstalledMerchantsEvent.source](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventsource).

