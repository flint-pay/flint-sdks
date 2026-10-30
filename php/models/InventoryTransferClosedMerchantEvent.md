[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryTransferClosedMerchantEvent

The `inventory_transfer.closed` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [InventoryTransferClosedMerchantEventData](../models/InventoryTransferClosedMerchantEventData.md#inventorytransferclosedmerchanteventdata) | `data`: [field definitions](../models/InventoryTransferClosedMerchantEvent.md#inventorytransferclosedmerchanteventdata-fields-1). |
| `event_type` | Required | string | Values: `"inventory_transfer.closed"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [InventoryTransferClosedMerchantEventRequest](../models/InventoryTransferClosedMerchantEventRequest.md#inventorytransferclosedmerchanteventrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### InventoryTransferClosedMerchantEvent.data fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [InventoryTransfer](../models/InventoryTransfer.md#inventorytransfer) | Stock moving between locations. `object`: [field definitions](../models/InventoryTransferClosedMerchantEvent.md#inventorytransferclosedmerchanteventdata-fields-1object). |

### InventoryTransferClosedMerchantEvent.data fields 1.object

Stock moving between locations.

Field definitions: [shared fields](InventoryTransfer.md#inventorytransfer).

