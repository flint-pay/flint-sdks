[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryCountAppliedMerchantEvent

The `inventory_count.applied` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [InventoryCountAppliedMerchantEventData](../models/InventoryCountAppliedMerchantEventData.md#inventorycountappliedmerchanteventdata) | `data`: [field definitions](../models/InventoryCountAppliedMerchantEvent.md#inventorycountappliedmerchanteventdata-fields-1). |
| `event_type` | Required | string | Values: `"inventory_count.applied"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [InventoryCountAppliedMerchantEventRequest](../models/InventoryCountAppliedMerchantEventRequest.md#inventorycountappliedmerchanteventrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### InventoryCountAppliedMerchantEvent.data fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [InventoryCount](../models/InventoryCount.md#inventorycount) | A physical count used to reconcile stock. `object`: [field definitions](../models/InventoryCountAppliedMerchantEvent.md#inventorycountappliedmerchanteventdata-fields-1object). |

### InventoryCountAppliedMerchantEvent.data fields 1.object

A physical count used to reconcile stock.

Field definitions: [shared fields](InventoryCount.md#inventorycount).

### InventoryCountAppliedMerchantEvent.data fields 1.object.observation_provenance

Field definitions: [InventoryCount.observation_provenance](../models/InventoryCount.md#inventorycountobservation_provenance).

