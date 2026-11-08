[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnInventoryTransferToOriginRequestInput

Puts in-transit stock back at the origin location.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer | Transfer version the caller last read. Format: `uint64`. minimum: `1`. |
| `lines` | Required | Array of object | Transfer lines this action changes, each with a cumulative target. 1 to 100 lines. minItems: `1`. maxItems: `100`. `lines[]`: [field definitions](../models/ReturnInventoryTransferToOriginRequestInput.md#returninventorytransfertooriginrequestinputlines). |
| `provenance` | Optional | [InventoryProvenanceRequestInput](../models/InventoryProvenanceRequestInput.md#inventoryprovenancerequestinput) | When and where the stock moved. Optional; when omitted, the movements record the time Flint received the command as occurred_at and a null source_system. Where and when an inventory event happened: the source system, external actor, and time. |

### ReturnInventoryTransferToOriginRequestInput.lines[]

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `inventory_transfer_line_id` | Required | string | Transfer line this action changes. minLength: `1`. Example: `"invtrln_01KEZF7C00CK297J6QVV5J0PFV"`. |
| `target_returned_quantity` | Required | integer | Cumulative quantity that should have returned to the origin. Whole-number quantity; fractional quantities are not supported. Format: `int64`. minimum: `0`. |

