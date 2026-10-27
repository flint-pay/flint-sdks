[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateInventoryAdjustmentCountedRequest

The `counted` variant of `CreateInventoryAdjustmentRequest`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `external_actor_id` | Optional | string | Your identifier for the actor who recorded the event. Don't put secrets in this field. minLength: `1`. maxLength: `255`. |
| `lines` | Required | Array of [InventoryAdjustmentSetLineRequest](../models/InventoryAdjustmentSetLineRequest.md#inventoryadjustmentsetlinerequest) | minItems: `1`. maxItems: `100`. |
| `note` | Optional | string | minLength: `1`. |
| `occurred_at` | Optional | string | When the event occurred, at most 5 minutes in the future. Required when source_system.type is pos, wms, erp, or other. Format: `date-time`. minLength: `1`. |
| `reason` | Required | string | Values: `"counted"`. |
| `source_system` | Conditional | [InventorySourceSystemRequest](../models/InventorySourceSystemRequest.md#inventorysourcesystemrequest) | The source system you report for an inventory event, such as manual, pos, wms, erp, or other, with your identifier when it applies. `source_system`: [field definitions](../models/CreateInventoryAdjustmentCorrectionRequest.md#createinventoryadjustmentcorrectionrequest-variant-1source_system). |

### CreateInventoryAdjustmentCountedRequest variant 1: `reason` = `"counted"`

anyOf variant 1.

- Required: `source_system`.

### CreateInventoryAdjustmentCountedRequest variant 2: `reason` = `"counted"`

anyOf variant 2.

- Optional: `source_system`.

### CreateInventoryAdjustmentCountedRequest variant 1.source_system

Field definitions: [CreateInventoryAdjustmentCorrectionRequest variant 1.source_system](../models/CreateInventoryAdjustmentCorrectionRequest.md#createinventoryadjustmentcorrectionrequest-variant-1source_system).

