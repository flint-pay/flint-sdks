[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## UpdateInventoryCountRequest

The request body for: Update inventory count.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Required | integer | Format: `uint64`. minimum: `1`. |
| `external_actor_id` | Optional | string | Your identifier for the actor who recorded the event. Don't put secrets in this field. minLength: `1`. maxLength: `255`. |
| `observations` | Required | Array of [InventoryCountObservationRequest](../models/InventoryCountObservationRequest.md#inventorycountobservationrequest) | Complete replacement containing every count item exactly once. Every physical version must match current stock or the entire save is refused. Recount affected items before submitting fresh fences. minItems: `1`. maxItems: `100`. |
| `occurred_at` | Optional | string | When the event occurred, at most 5 minutes in the future. Required when source_system.type is pos, wms, erp, or other. Format: `date-time`. minLength: `1`. |
| `source_system` | Optional | [InventorySourceSystemRequest](../models/InventorySourceSystemRequest.md#inventorysourcesystemrequest) | The source system you report for an inventory event, such as manual, pos, wms, erp, or other, with your identifier when it applies. |

