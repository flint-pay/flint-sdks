[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryTransferTransitionRequestDepartInput

The `depart` variant of `InventoryTransferTransitionRequest`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `action` | Required | string | Values: `"depart"`. |
| `expected_version` | Optional | integer | Transfer version the caller last read. Format: `uint64`. minimum: `1`. |
| `lines` | Required | Array of object | minItems: `1`. maxItems: `100`. `lines[]`: [field definitions](../models/InventoryTransferTransitionRequestInput.md#inventorytransfertransitionrequestinput-variant-1lines). |
| `provenance` | Optional | [InventoryProvenanceRequestInput](../models/InventoryProvenanceRequestInput.md#inventoryprovenancerequestinput) | When and where the stock moved. Optional; when omitted, the movements record the time Flint received the command as occurred_at and a null source_system. Where and when an inventory event happened: the source system, external actor, and time. |

### InventoryTransferTransitionRequestDepartInput.lines[]

Field definitions: [InventoryTransferTransitionRequestInput variant 1.lines[]](../models/InventoryTransferTransitionRequestInput.md#inventorytransfertransitionrequestinput-variant-1lines).

