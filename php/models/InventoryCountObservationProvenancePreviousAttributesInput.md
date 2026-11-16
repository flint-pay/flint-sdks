[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryCountObservationProvenancePreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `external_actor_id` | Optional | string or null | Your identifier for the actor who recorded the event. Don't put secrets in this field. `external_actor_id`: [declared alternatives](../models/InventoryCountObservationProvenancePreviousAttributesInput.md#inventorycountobservationprovenancepreviousattributesinputexternal_actor_id). |
| `occurred_at` | Optional | string or null | When the event occurred, at most 5 minutes in the future. Required when source_system.type is pos, wms, erp, or other. `occurred_at`: [declared alternatives](../models/InventoryCountObservationProvenancePreviousAttributesInput.md#inventorycountobservationprovenancepreviousattributesinputoccurred_at). |
| `source_system` | Optional | [InventorySourceSystemPreviousAttributesInput](../models/InventorySourceSystemPreviousAttributesInput.md#inventorysourcesystempreviousattributesinput) or null | System the change came from, such as a point-of-sale or warehouse system. `null` when the request named no source system. |

### InventoryCountObservationProvenancePreviousAttributesInput.external_actor_id

### InventoryCountObservationProvenancePreviousAttributesInput.external_actor_id variant 1

anyOf variant 1: Your identifier for the actor who recorded the event. Don't put secrets in this field..

- Value shape: string. Your identifier for the actor who recorded the event. Don't put secrets in this field. Your identifier for the actor who recorded the event. Don't put secrets in this field. maxLength: `255`. Example: `"warehouse-1842"`. 

### InventoryCountObservationProvenancePreviousAttributesInput.external_actor_id variant 2

anyOf variant 2.

- Value shape: null. Your identifier for the actor who recorded the event. Don't put secrets in this field. 

### InventoryCountObservationProvenancePreviousAttributesInput.occurred_at

### InventoryCountObservationProvenancePreviousAttributesInput.occurred_at variant 1

anyOf variant 1: When the event occurred, at most 5 minutes in the future. Required when source_system.type is pos, wms, erp, or other..

- Value shape: string. When the event occurred, at most 5 minutes in the future. Required when source_system.type is pos, wms, erp, or other. When the event occurred, at most 5 minutes in the future. Required when source_system.type is pos, wms, erp, or other. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### InventoryCountObservationProvenancePreviousAttributesInput.occurred_at variant 2

anyOf variant 2.

- Value shape: null. When the event occurred, at most 5 minutes in the future. Required when source_system.type is pos, wms, erp, or other. 

