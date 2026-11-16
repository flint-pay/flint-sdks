[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryCountObservationProvenancePreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `external_actor_id` | Optional | string or null | Your identifier for the actor who recorded the event. Don't put secrets in this field. `external_actor_id`: [declared alternatives](../models/InventoryCountObservationProvenancePreviousAttributes.md#inventorycountobservationprovenancepreviousattributesexternal_actor_id). |
| `occurred_at` | Optional | string or null | When the event occurred, at most 5 minutes in the future. Required when source_system.type is pos, wms, erp, or other. `occurred_at`: [declared alternatives](../models/InventoryCountObservationProvenancePreviousAttributes.md#inventorycountobservationprovenancepreviousattributesoccurred_at). |
| `source_system` | Optional | [InventorySourceSystemPreviousAttributes](../models/InventorySourceSystemPreviousAttributes.md#inventorysourcesystempreviousattributes) or null | System the change came from, such as a point-of-sale or warehouse system. `null` when the request named no source system. |

### InventoryCountObservationProvenancePreviousAttributes.external_actor_id

### InventoryCountObservationProvenancePreviousAttributes.external_actor_id variant 1

anyOf variant 1: Your identifier for the actor who recorded the event. Don't put secrets in this field..

- Value shape: string. Your identifier for the actor who recorded the event. Don't put secrets in this field. Your identifier for the actor who recorded the event. Don't put secrets in this field. maxLength: `255`. Example: `"warehouse-1842"`. 

### InventoryCountObservationProvenancePreviousAttributes.external_actor_id variant 2

anyOf variant 2.

- Value shape: null. Your identifier for the actor who recorded the event. Don't put secrets in this field. 

### InventoryCountObservationProvenancePreviousAttributes.occurred_at

### InventoryCountObservationProvenancePreviousAttributes.occurred_at variant 1

anyOf variant 1: When the event occurred, at most 5 minutes in the future. Required when source_system.type is pos, wms, erp, or other..

- Value shape: string. When the event occurred, at most 5 minutes in the future. Required when source_system.type is pos, wms, erp, or other. When the event occurred, at most 5 minutes in the future. Required when source_system.type is pos, wms, erp, or other. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### InventoryCountObservationProvenancePreviousAttributes.occurred_at variant 2

anyOf variant 2.

- Value shape: null. When the event occurred, at most 5 minutes in the future. Required when source_system.type is pos, wms, erp, or other. 

