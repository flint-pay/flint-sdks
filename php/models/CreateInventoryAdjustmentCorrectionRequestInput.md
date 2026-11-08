[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateInventoryAdjustmentCorrectionRequestInput

The `correction` variant of `CreateInventoryAdjustmentRequest`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `external_actor_id` | Optional | string | Your identifier for the actor who recorded the event. Don't put secrets in this field. minLength: `1`. maxLength: `255`. Example: `"warehouse-1842"`. |
| `lines` | Required | Array of [InventoryAdjustmentSetLineRequestInput](../models/InventoryAdjustmentSetLineRequestInput.md#inventoryadjustmentsetlinerequestinput) | Stock changes, one for each inventory item and Location, from 1 to 100 lines. minItems: `1`. maxItems: `100`. |
| `note` | Required | string | Free-text note explaining the change. Required when `reason` is `correction`. minLength: `1`. pattern: `\S`. |
| `occurred_at` | Optional | string | When the event occurred, at most 5 minutes in the future. Required when source_system.type is pos, wms, erp, or other. Format: `date-time`. minLength: `1`. Example: `"2026-08-02T16:00:00Z"`. |
| `reason` | Required | string | Why the stock changed. It decides which fields each line takes. Values: `"correction"`. |
| `source_system` | Conditional | [InventorySourceSystemRequestInput](../models/InventorySourceSystemRequestInput.md#inventorysourcesystemrequestinput) | System the change came from, such as a point-of-sale or warehouse system. The source system you report for an inventory event, such as manual, pos, wms, erp, or other, with your identifier when it applies. `source_system`: [field definitions](../models/CreateInventoryAdjustmentCorrectionRequestInput.md#createinventoryadjustmentcorrectionrequestinput-variant-1source_system). |

### CreateInventoryAdjustmentCorrectionRequestInput variant 1: `reason` = `"correction"`

anyOf variant 1.

- Required: `source_system`.

### CreateInventoryAdjustmentCorrectionRequestInput variant 2: `reason` = `"correction"`

anyOf variant 2.

- Optional: `source_system`.

### CreateInventoryAdjustmentCorrectionRequestInput variant 1.source_system

System the change came from, such as a point-of-sale or warehouse system. The source system you report for an inventory event, such as manual, pos, wms, erp, or other, with your identifier when it applies.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `external_source_id` | Required | string | Your source system's identifier. Required when type is pos, wms, erp, or other; not allowed when type is manual. Don't put secrets in this field. minLength: `1`. maxLength: `255`. Example: `"warehouse-1842"`. |
| `type` | Required | string | Source of the event: manual for a manual entry, pos for a point of sale, wms for a warehouse management system, erp for an enterprise resource planning system, or other for another external system. Flint-authored events use flint in responses. Values: `"pos"`, `"wms"`, `"erp"`, `"other"`. |

