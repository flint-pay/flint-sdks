[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryReservationActionRequiredInstalledMerchantsEventInput

The `inventory_reservation.action_required` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | object | `data`: [field definitions](../models/InventoryReservationActionRequiredInstalledMerchantsEventInput.md#inventoryreservationactionrequiredinstalledmerchantseventinputdata). |
| `event_type` | Required | string | Values: `"inventory_reservation.action_required"`. |
| `partner_app_id` | Required | string |  |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [PartnerWebhookEnvelopeSourceInput](../models/PartnerWebhookEnvelopeSourceInput.md#partnerwebhookenvelopesourceinput) and object | The source of a partner webhook event, selected by type. `source`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### InventoryReservationActionRequiredInstalledMerchantsEventInput.data

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [InventoryReservationInput](../models/InventoryReservationInput.md#inventoryreservationinput) | A claim on stock. Quantity moves from held to committed to consumed, and can be released or reallocated. `object`: [field definitions](../models/InventoryReservationActionRequiredInstalledMerchantsEventInput.md#inventoryreservationactionrequiredinstalledmerchantseventinputdataobject). |

### InventoryReservationActionRequiredInstalledMerchantsEventInput.data.object

A claim on stock. Quantity moves from held to committed to consumed, and can be released or reallocated.

Field definitions: [shared fields](InventoryReservationInput.md#inventoryreservationinput).

### InventoryReservationActionRequiredInstalledMerchantsEventInput.source

Declared alternatives: [BundleArchivedInstalledMerchantsEventInput.source](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputsource).

