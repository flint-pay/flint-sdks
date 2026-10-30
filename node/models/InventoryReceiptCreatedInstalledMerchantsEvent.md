[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryReceiptCreatedInstalledMerchantsEvent

The `inventory_receipt.created` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | object | `data`: [field definitions](../models/InventoryReceiptCreatedInstalledMerchantsEvent.md#inventoryreceiptcreatedinstalledmerchantseventdata). |
| `event_type` | Required | string | Values: `"inventory_receipt.created"`. |
| `partner_app_id` | Required | string |  |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [WebhookEventSource](../models/WebhookEventSource.md#webhookeventsource) and object | The source of a partner webhook event, selected by type. `source`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### InventoryReceiptCreatedInstalledMerchantsEvent.data

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [InventoryReceipt](../models/InventoryReceipt.md#inventoryreceipt) | Returned units received into Inventory, from a Return disposition or against the reservation line that consumed them. `object`: [field definitions](../models/InventoryReceiptCreatedInstalledMerchantsEvent.md#inventoryreceiptcreatedinstalledmerchantseventdataobject). |

### InventoryReceiptCreatedInstalledMerchantsEvent.data.object

Returned units received into Inventory, from a Return disposition or against the reservation line that consumed them.

Field definitions: [shared fields](InventoryReceipt.md#inventoryreceipt).

### InventoryReceiptCreatedInstalledMerchantsEvent.source

Declared alternatives: [BundleArchivedInstalledMerchantsEvent.source](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventsource).

