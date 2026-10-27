[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryTransferTransitionRequestReceiveInput

The `receive` variant of `InventoryTransferTransitionRequest`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `action` | Required | string | Values: `"receive"`. |
| `expected_version` | Optional | integer string | Transfer version the caller last read. Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |
| `lines` | Required | Array of object | minItems: `1`. maxItems: `100`. `lines[]`: [field definitions](../models/InventoryTransferTransitionRequestInput.md#inventorytransfertransitionrequestinput-variant-2lines). |
| `provenance` | Optional | [InventoryProvenanceRequestInput](../models/InventoryProvenanceRequestInput.md#inventoryprovenancerequestinput) | When and where the stock moved. Optional; when omitted, the movements record the time Flint received the command as occurred_at and a null source_system. Where and when an inventory event happened: the source system, external actor, and time. |

### InventoryTransferTransitionRequestReceiveInput.lines[]

Field definitions: [InventoryTransferTransitionRequestInput variant 2.lines[]](../models/InventoryTransferTransitionRequestInput.md#inventorytransfertransitionrequestinput-variant-2lines).

