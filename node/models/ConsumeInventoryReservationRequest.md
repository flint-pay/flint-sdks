[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ConsumeInventoryReservationRequest

Consumes committed quantity when you hand the goods off, removing it from on-hand stock. Accepts provenance describing the handoff.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer | Optional resource version the caller last read. Enforced when sent. Format: `uint64`. minimum: `1`. |
| `lines` | Required | Array of object | Reservation lines this action changes, each with a cumulative target. 1 to 100 lines. minItems: `1`. maxItems: `100`. `lines[]`: [field definitions](../models/ConsumeInventoryReservationRequest.md#consumeinventoryreservationrequestlines). |
| `provenance` | Optional | [InventoryProvenanceRequest](../models/InventoryProvenanceRequest.md#inventoryprovenancerequest) | When and where the physical handoff happened. When omitted, occurred_at is the command receipt time and source_system is null. Where and when an inventory event happened: the source system, external actor, and time. |

### ConsumeInventoryReservationRequest.lines[]

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `inventory_reservation_line_id` | Required | string | Reservation line this action changes. minLength: `1`. Example: `"invrln_01KEZF7C002JCDA729XDSNWGY5"`. |
| `target_consumed_quantity` | Required | integer | Cumulative whole-number quantity that should have reached this target. Format: `int64`. minimum: `0`. |

