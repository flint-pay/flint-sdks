[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryTransferTransitionRequestReturnToOrigin

The `return_to_origin` variant of `InventoryTransferTransitionRequest`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `action` | Required | string | Values: `"return_to_origin"`. |
| `expected_version` | Optional | integer | Transfer version the caller last read. Format: `uint64`. minimum: `1`. |
| `lines` | Required | Array of object | minItems: `1`. maxItems: `100`. `lines[]`: [field definitions](../models/InventoryTransferTransitionRequest.md#inventorytransfertransitionrequest-variant-3lines). |
| `provenance` | Optional | [InventoryProvenanceRequest](../models/InventoryProvenanceRequest.md#inventoryprovenancerequest) | When and where the stock moved. Optional; when omitted, the movements record the time Flint received the command as occurred_at and a null source_system. Where and when an inventory event happened: the source system, external actor, and time. |

### InventoryTransferTransitionRequestReturnToOrigin.lines[]

Field definitions: [InventoryTransferTransitionRequest variant 3.lines[]](../models/InventoryTransferTransitionRequest.md#inventorytransfertransitionrequest-variant-3lines).

