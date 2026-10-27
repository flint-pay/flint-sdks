[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryTransferTransitionRequestReportLoss

The `report_loss` variant of `InventoryTransferTransitionRequest`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `action` | Required | string | Values: `"report_loss"`. |
| `expected_version` | Optional | integer string | Transfer version the caller last read. Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |
| `lines` | Required | Array of object | minItems: `1`. maxItems: `100`. `lines[]`: [field definitions](../models/InventoryTransferTransitionRequest.md#inventorytransfertransitionrequest-variant-4lines). |
| `provenance` | Optional | [InventoryProvenanceRequest](../models/InventoryProvenanceRequest.md#inventoryprovenancerequest) | When and where the stock moved. Optional; when omitted, the movements record the time Flint received the command as occurred_at and a null source_system. Where and when an inventory event happened: the source system, external actor, and time. |

### InventoryTransferTransitionRequestReportLoss.lines[]

Field definitions: [InventoryTransferTransitionRequest variant 4.lines[]](../models/InventoryTransferTransitionRequest.md#inventorytransfertransitionrequest-variant-4lines).

