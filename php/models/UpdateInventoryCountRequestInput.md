[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## UpdateInventoryCountRequestInput

The request body for: Update inventory count.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Required | integer | Version last read from the resource returned in `data` (the primary resource for a result object). The write fails with `VERSION_CONFLICT` if it has changed. Requiredness depends on the operation and fields being changed. Format: `uint64`. minimum: `1`. |
| `external_actor_id` | Optional | string | Your identifier for the actor who recorded the event. Don't put secrets in this field. minLength: `1`. maxLength: `255`. Example: `"warehouse-1842"`. |
| `observations` | Required | Array of [InventoryCountObservationRequestInput](../models/InventoryCountObservationRequestInput.md#inventorycountobservationrequestinput) | Complete replacement containing every count item exactly once. Every physical version must match current stock or the entire save is refused. Recount affected items before submitting fresh fences. minItems: `1`. maxItems: `100`. |
| `occurred_at` | Optional | string | When the event occurred, at most 5 minutes in the future. Required when source_system.type is pos, wms, erp, or other. Format: `date-time`. minLength: `1`. Example: `"2026-08-02T16:00:00Z"`. |
| `source_system` | Optional | [InventorySourceSystemRequestInput](../models/InventorySourceSystemRequestInput.md#inventorysourcesystemrequestinput) | System the change came from, such as a point-of-sale or warehouse system. The source system you report for an inventory event, such as manual, pos, wms, erp, or other, with your identifier when it applies. |

