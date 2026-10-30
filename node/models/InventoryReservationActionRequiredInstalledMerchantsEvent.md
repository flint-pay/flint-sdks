[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryReservationActionRequiredInstalledMerchantsEvent

The `inventory_reservation.action_required` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | object | `data`: [field definitions](../models/InventoryReservationActionRequiredInstalledMerchantsEvent.md#inventoryreservationactionrequiredinstalledmerchantseventdata). |
| `event_type` | Required | string | Values: `"inventory_reservation.action_required"`. |
| `partner_app_id` | Required | string |  |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [WebhookEventSource](../models/WebhookEventSource.md#webhookeventsource) and object | The source of a partner webhook event, selected by type. `source`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### InventoryReservationActionRequiredInstalledMerchantsEvent.data

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [InventoryReservation](../models/InventoryReservation.md#inventoryreservation) | A claim on stock. Quantity moves from held to committed to consumed, and can be released or reallocated. `object`: [field definitions](../models/InventoryReservationActionRequiredInstalledMerchantsEvent.md#inventoryreservationactionrequiredinstalledmerchantseventdataobject). |

### InventoryReservationActionRequiredInstalledMerchantsEvent.data.object

A claim on stock. Quantity moves from held to committed to consumed, and can be released or reallocated.

Field definitions: [shared fields](InventoryReservation.md#inventoryreservation).

### InventoryReservationActionRequiredInstalledMerchantsEvent.data.object.inventory_routing_source

Field definitions: [InventoryReservation.inventory_routing_source](../models/InventoryReservation.md#inventoryreservationinventory_routing_source).

### InventoryReservationActionRequiredInstalledMerchantsEvent.source

Declared alternatives: [BundleArchivedInstalledMerchantsEvent.source](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventsource).

