[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryTransferTransitionRequestInput

The request body for: Transition inventory transfer.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `action` | Required | string |  |
| `expected_version` | Optional | integer string | Transfer version the caller last read. Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |
| `lines` | Required | Array of object | minItems: `1`. maxItems: `100`. `lines[]`: [field definitions](../models/InventoryTransferTransitionRequestInput.md#inventorytransfertransitionrequestinput-variant-1lines), [field definitions](../models/InventoryTransferTransitionRequestInput.md#inventorytransfertransitionrequestinput-variant-2lines), [field definitions](../models/InventoryTransferTransitionRequestInput.md#inventorytransfertransitionrequestinput-variant-3lines), [field definitions](../models/InventoryTransferTransitionRequestInput.md#inventorytransfertransitionrequestinput-variant-4lines), [field definitions](../models/InventoryTransferTransitionRequestInput.md#inventorytransfertransitionrequestinput-variant-5lines). |
| `provenance` | Optional | [InventoryProvenanceRequestInput](../models/InventoryProvenanceRequestInput.md#inventoryprovenancerequestinput) | When and where the stock moved. Optional; when omitted, the movements record the time Flint received the command as occurred_at and a null source_system. Where and when an inventory event happened: the source system, external actor, and time. |

### InventoryTransferTransitionRequestInput variant 1: `action` = `"depart"`

oneOf variant 1: The `depart` variant of `InventoryTransferTransitionRequest`..

- Constraints for `action`: Values: `"depart"`.

### InventoryTransferTransitionRequestInput variant 2: `action` = `"receive"`

oneOf variant 2: The `receive` variant of `InventoryTransferTransitionRequest`..

- Constraints for `action`: Values: `"receive"`.

### InventoryTransferTransitionRequestInput variant 3: `action` = `"return_to_origin"`

oneOf variant 3: The `return_to_origin` variant of `InventoryTransferTransitionRequest`..

- Constraints for `action`: Values: `"return_to_origin"`.

### InventoryTransferTransitionRequestInput variant 4: `action` = `"report_loss"`

oneOf variant 4: The `report_loss` variant of `InventoryTransferTransitionRequest`..

- Constraints for `action`: Values: `"report_loss"`.

### InventoryTransferTransitionRequestInput variant 5: `action` = `"cancel"`

oneOf variant 5: The `cancel` variant of `InventoryTransferTransitionRequest`..

- Constraints for `action`: Values: `"cancel"`.

### InventoryTransferTransitionRequestInput variant 1.lines[]

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `inventory_transfer_line_id` | Required | string | Transfer line being transitioned. minLength: `1`. |
| `target_departed_quantity` | Required | integer string | Cumulative quantity that should have departed the origin. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `0`. |

### InventoryTransferTransitionRequestInput variant 2.lines[]

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `inventory_transfer_line_id` | Required | string | Transfer line being transitioned. minLength: `1`. |
| `target_received_damaged_quantity` | Optional | integer string | Cumulative received quantity classified as damaged. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `0`. |
| `target_received_quality_control_quantity` | Optional | integer string | Cumulative received quantity classified for quality control. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `0`. |
| `target_received_quantity` | Required | integer string | Cumulative quantity that should have been received at the destination. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `0`. |
| `target_received_quarantined_quantity` | Optional | integer string | Cumulative received quantity classified as quarantined. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `0`. |
| `target_received_sellable_quantity` | Optional | integer string | Cumulative received quantity classified as sellable. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `0`. |

### InventoryTransferTransitionRequestInput variant 3.lines[]

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `inventory_transfer_line_id` | Required | string | Transfer line being transitioned. minLength: `1`. |
| `target_returned_quantity` | Required | integer string | Cumulative quantity that should have returned to the origin. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `0`. |

### InventoryTransferTransitionRequestInput variant 4.lines[]

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `inventory_transfer_line_id` | Required | string | Transfer line being transitioned. minLength: `1`. |
| `target_lost_quantity` | Required | integer string | Cumulative quantity that should be recorded as lost in transit. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `0`. |

### InventoryTransferTransitionRequestInput variant 5.lines[]

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `inventory_transfer_line_id` | Required | string | Transfer line being transitioned. minLength: `1`. |
| `target_canceled_quantity` | Required | integer string | Cumulative quantity that should be canceled before departure. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `0`. |

