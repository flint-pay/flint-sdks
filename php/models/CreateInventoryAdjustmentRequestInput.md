[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateInventoryAdjustmentRequestInput

The request body for: Create inventory adjustment.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `external_actor_id` | Optional | string | Your identifier for the actor who recorded the event. Don't put secrets in this field. minLength: `1`. maxLength: `255`. |
| `lines` | Required | Varies by condition | minItems: `1`. maxItems: `100`. |
| `note` | Conditional | string |  |
| `occurred_at` | Optional | string | When the event occurred, at most 5 minutes in the future. Required when source_system.type is pos, wms, erp, or other. Format: `date-time`. minLength: `1`. |
| `reason` | Required | string |  |
| `source_system` | Conditional | [InventorySourceSystemRequestInput](../models/InventorySourceSystemRequestInput.md#inventorysourcesystemrequestinput) | The source system you report for an inventory event, such as manual, pos, wms, erp, or other, with your identifier when it applies. `source_system`: [field definitions](../models/CreateInventoryAdjustmentCorrectionRequestInput.md#createinventoryadjustmentcorrectionrequestinput-variant-1source_system). |

### CreateInventoryAdjustmentRequestInput variant 1

oneOf variant 1: The `loss` variant of `CreateInventoryAdjustmentRequest`. The `received` variant of `CreateInventoryAdjustmentRequest`. The `returned` variant of `CreateInventoryAdjustmentRequest`. The `sold` variant of `CreateInventoryAdjustmentRequest`. The `theft` variant of `CreateInventoryAdjustmentRequest`..

- Optional: `note`, `source_system`.
- Constraints for `lines`: Array of [InventoryAdjustmentQuantityLineRequestInput](../models/InventoryAdjustmentQuantityLineRequestInput.md#inventoryadjustmentquantitylinerequestinput).
- Constraints for `note`: minLength: `1`.
- Constraints for `reason`: Values: `"received"`, `"returned"`, `"sold"`, `"theft"`, `"loss"`.

### CreateInventoryAdjustmentRequestInput variant 2: `reason` = `"condition_changed"`

oneOf variant 2: The `condition_changed` variant of `CreateInventoryAdjustmentRequest`..

- Optional: `note`, `source_system`.
- Constraints for `lines`: Array of [InventoryAdjustmentConditionChangeLineRequestInput](../models/InventoryAdjustmentConditionChangeLineRequestInput.md#inventoryadjustmentconditionchangelinerequestinput).
- Constraints for `note`: minLength: `1`.
- Constraints for `reason`: Values: `"condition_changed"`.

### CreateInventoryAdjustmentRequestInput variant 3: `reason` = `"counted"`

oneOf variant 3: The `counted` variant of `CreateInventoryAdjustmentRequest`.; anyOf variant 1.

- Required: `source_system`.
- Optional: `note`.
- Constraints for `lines`: Array of [InventoryAdjustmentSetLineRequestInput](../models/InventoryAdjustmentSetLineRequestInput.md#inventoryadjustmentsetlinerequestinput).
- Constraints for `note`: minLength: `1`.
- Constraints for `reason`: Values: `"counted"`.

### CreateInventoryAdjustmentRequestInput variant 4: `reason` = `"counted"`

oneOf variant 3: The `counted` variant of `CreateInventoryAdjustmentRequest`.; anyOf variant 2.

- Optional: `note`, `source_system`.
- Constraints for `lines`: Array of [InventoryAdjustmentSetLineRequestInput](../models/InventoryAdjustmentSetLineRequestInput.md#inventoryadjustmentsetlinerequestinput).
- Constraints for `note`: minLength: `1`.
- Constraints for `reason`: Values: `"counted"`.

### CreateInventoryAdjustmentRequestInput variant 5: `reason` = `"correction"`

oneOf variant 4: The `correction` variant of `CreateInventoryAdjustmentRequest`.; anyOf variant 1.

- Required: `note`, `source_system`.
- Constraints for `lines`: Array of [InventoryAdjustmentSetLineRequestInput](../models/InventoryAdjustmentSetLineRequestInput.md#inventoryadjustmentsetlinerequestinput).
- Constraints for `note`: minLength: `1`. pattern: `\S`.
- Constraints for `reason`: Values: `"correction"`.

### CreateInventoryAdjustmentRequestInput variant 6: `reason` = `"correction"`

oneOf variant 4: The `correction` variant of `CreateInventoryAdjustmentRequest`.; anyOf variant 2.

- Required: `note`.
- Optional: `source_system`.
- Constraints for `lines`: Array of [InventoryAdjustmentSetLineRequestInput](../models/InventoryAdjustmentSetLineRequestInput.md#inventoryadjustmentsetlinerequestinput).
- Constraints for `note`: minLength: `1`. pattern: `\S`.
- Constraints for `reason`: Values: `"correction"`.

### CreateInventoryAdjustmentRequestInput variant 3.source_system

Field definitions: [CreateInventoryAdjustmentCorrectionRequestInput variant 1.source_system](../models/CreateInventoryAdjustmentCorrectionRequestInput.md#createinventoryadjustmentcorrectionrequestinput-variant-1source_system).

### CreateInventoryAdjustmentRequestInput variant 5.source_system

Field definitions: [CreateInventoryAdjustmentCorrectionRequestInput variant 1.source_system](../models/CreateInventoryAdjustmentCorrectionRequestInput.md#createinventoryadjustmentcorrectionrequestinput-variant-1source_system).

