[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CancelInventoryTransferRequest

Cancels requested quantity that hasn't departed.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer | Transfer version the caller last read. Format: `uint64`. minimum: `1`. |
| `lines` | Required | Array of object | Transfer lines this action changes, each with a cumulative target. 1 to 100 lines. minItems: `1`. maxItems: `100`. `lines[]`: [field definitions](../models/CancelInventoryTransferRequest.md#cancelinventorytransferrequestlines). |
| `provenance` | Optional | [InventoryProvenanceRequest](../models/InventoryProvenanceRequest.md#inventoryprovenancerequest) | When and where the stock moved. Optional; when omitted, the movements record the time Flint received the command as occurred_at and a null source_system. Where and when an inventory event happened: the source system, external actor, and time. |

### CancelInventoryTransferRequest.lines[]

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `inventory_transfer_line_id` | Required | string | Transfer line this action changes. minLength: `1`. Example: `"invtrln_01KEZF7C00CK297J6QVV5J0PFV"`. |
| `target_canceled_quantity` | Required | integer | Cumulative quantity that should be canceled before departure. Whole-number quantity; fractional quantities are not supported. Format: `int64`. minimum: `0`. |

