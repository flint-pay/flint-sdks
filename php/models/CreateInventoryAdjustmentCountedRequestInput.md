[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateInventoryAdjustmentCountedRequestInput

The `counted` variant of `CreateInventoryAdjustmentRequest`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `external_actor_id` | Optional | string | Your identifier for the actor who recorded the event. Don't put secrets in this field. minLength: `1`. maxLength: `255`. |
| `lines` | Required | Array of [InventoryAdjustmentSetLineRequestInput](../models/InventoryAdjustmentSetLineRequestInput.md#inventoryadjustmentsetlinerequestinput) | minItems: `1`. maxItems: `100`. |
| `note` | Optional | string | minLength: `1`. |
| `occurred_at` | Optional | string | When the event occurred, at most 5 minutes in the future. Required when source_system.type is pos, wms, erp, or other. Format: `date-time`. minLength: `1`. |
| `reason` | Required | string | Values: `"counted"`. |
| `source_system` | Conditional | [InventorySourceSystemRequestInput](../models/InventorySourceSystemRequestInput.md#inventorysourcesystemrequestinput) | The source system you report for an inventory event, such as manual, pos, wms, erp, or other, with your identifier when it applies. `source_system`: [field definitions](../models/CreateInventoryAdjustmentCorrectionRequestInput.md#createinventoryadjustmentcorrectionrequestinput-variant-1source_system). |

### CreateInventoryAdjustmentCountedRequestInput variant 1: `reason` = `"counted"`

anyOf variant 1.

- Required: `source_system`.

### CreateInventoryAdjustmentCountedRequestInput variant 2: `reason` = `"counted"`

anyOf variant 2.

- Optional: `source_system`.

### CreateInventoryAdjustmentCountedRequestInput variant 1.source_system

Field definitions: [CreateInventoryAdjustmentCorrectionRequestInput variant 1.source_system](../models/CreateInventoryAdjustmentCorrectionRequestInput.md#createinventoryadjustmentcorrectionrequestinput-variant-1source_system).

