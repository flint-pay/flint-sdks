[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryCountObservationProvenanceInput

Where an inventory count came from: the source system, an external actor ID, and when the event occurred.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `external_actor_id` | Optional | string | Your identifier for the actor who recorded the event. Don't put secrets in this field. maxLength: `255`. |
| `occurred_at` | Optional | string | When the event occurred, at most 5 minutes in the future. Required when source_system.type is pos, wms, erp, or other. Format: `date-time`. |
| `source_system` | Required | [InventorySourceSystemInput](../models/InventorySourceSystemInput.md#inventorysourcesysteminput) or null |  |

