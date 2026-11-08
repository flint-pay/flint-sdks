[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReceiveInventoryTransferRequestInput

Adds in-transit stock to the destination location. Optional condition targets split the received quantity by condition.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer | Transfer version the caller last read. Format: `uint64`. minimum: `1`. |
| `lines` | Required | Array of object | Transfer lines this action changes, each with a cumulative target. 1 to 100 lines. minItems: `1`. maxItems: `100`. `lines[]`: [field definitions](../models/ReceiveInventoryTransferRequestInput.md#receiveinventorytransferrequestinputlines). |
| `provenance` | Optional | [InventoryProvenanceRequestInput](../models/InventoryProvenanceRequestInput.md#inventoryprovenancerequestinput) | When and where the stock moved. Optional; when omitted, the movements record the time Flint received the command as occurred_at and a null source_system. Where and when an inventory event happened: the source system, external actor, and time. |

### ReceiveInventoryTransferRequestInput.lines[]

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `inventory_transfer_line_id` | Required | string | Transfer line this action changes. minLength: `1`. Example: `"invtrln_01KEZF7C00CK297J6QVV5J0PFV"`. |
| `target_received_damaged_quantity` | Optional | integer | Cumulative received quantity classified as damaged. Whole-number quantity; fractional quantities are not supported. Format: `int64`. minimum: `0`. |
| `target_received_quality_control_quantity` | Optional | integer | Cumulative received quantity classified for quality control. Whole-number quantity; fractional quantities are not supported. Format: `int64`. minimum: `0`. |
| `target_received_quantity` | Required | integer | Cumulative quantity that should have been received at the destination. Whole-number quantity; fractional quantities are not supported. Format: `int64`. minimum: `0`. |
| `target_received_quarantined_quantity` | Optional | integer | Cumulative received quantity classified as quarantined. Whole-number quantity; fractional quantities are not supported. Format: `int64`. minimum: `0`. |
| `target_received_sellable_quantity` | Optional | integer | Cumulative received quantity classified as sellable. Whole-number quantity; fractional quantities are not supported. Format: `int64`. minimum: `0`. |

