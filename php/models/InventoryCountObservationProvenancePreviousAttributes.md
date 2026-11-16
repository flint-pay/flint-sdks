[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryCountObservationProvenancePreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `external_actor_id` | Optional | string or null | Your identifier for the actor who recorded the event. Don't put secrets in this field. `external_actor_id`: [declared alternatives](../models/InventoryCountObservationProvenancePreviousAttributes.md#inventorycountobservationprovenancepreviousattributesexternal_actor_id). |
| `occurred_at` | Optional | string or null | When the event occurred, at most 5 minutes in the future. Required when source_system.type is pos, wms, erp, or other. `occurred_at`: [declared alternatives](../models/InventoryCountObservationProvenancePreviousAttributes.md#inventorycountobservationprovenancepreviousattributesoccurred_at). |
| `source_system` | Optional | [InventorySourceSystemPreviousAttributes](../models/InventorySourceSystemPreviousAttributes.md#inventorysourcesystempreviousattributes) or null | System the change came from, such as a point-of-sale or warehouse system. `null` when the request named no source system. `source_system`: [declared alternatives](../models/InventoryCountObservationProvenancePreviousAttributes.md#inventorycountobservationprovenancepreviousattributessource_system). |

### InventoryCountObservationProvenancePreviousAttributes.external_actor_id

### InventoryCountObservationProvenancePreviousAttributes.external_actor_id variant 1

anyOf variant 1: Your identifier for the actor who recorded the event. Don't put secrets in this field..

- Value shape: string. Your identifier for the actor who recorded the event. Don't put secrets in this field. Your identifier for the actor who recorded the event. Don't put secrets in this field. maxLength: `255`. 

### InventoryCountObservationProvenancePreviousAttributes.external_actor_id variant 2

anyOf variant 2.

- Value shape: null. Your identifier for the actor who recorded the event. Don't put secrets in this field. 

### InventoryCountObservationProvenancePreviousAttributes.occurred_at

### InventoryCountObservationProvenancePreviousAttributes.occurred_at variant 1

anyOf variant 1: When the event occurred, at most 5 minutes in the future. Required when source_system.type is pos, wms, erp, or other..

- Value shape: string. When the event occurred, at most 5 minutes in the future. Required when source_system.type is pos, wms, erp, or other. When the event occurred, at most 5 minutes in the future. Required when source_system.type is pos, wms, erp, or other. Format: `date-time`. 

### InventoryCountObservationProvenancePreviousAttributes.occurred_at variant 2

anyOf variant 2.

- Value shape: null. When the event occurred, at most 5 minutes in the future. Required when source_system.type is pos, wms, erp, or other. 

### InventoryCountObservationProvenancePreviousAttributes.source_system

System the change came from, such as a point-of-sale or warehouse system. `null` when the request named no source system.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `external_source_id` | Conditional | string or null | Your source system's identifier. Required when type is pos, wms, erp, or other; not allowed when type is manual. Don't put secrets in this field. `external_source_id`: [declared alternatives](../models/InventoryCountObservationProvenancePreviousAttributes.md#inventorycountobservationprovenancepreviousattributessource_system-variant-1external_source_id). |
| `type` | Conditional | string or null | Source of the event: manual for a manual entry, pos for a point of sale, wms for a warehouse management system, erp for an enterprise resource planning system, or other for another external system. Flint-authored events use flint in responses. Values: `"manual"`, `"pos"`, `"wms"`, `"erp"`, `"flint"`, `"other"`. `type`: [declared alternatives](../models/InventorySourceSystemPreviousAttributes.md#inventorysourcesystempreviousattributestype). |

### InventoryCountObservationProvenancePreviousAttributes.source_system variant 1

anyOf InventorySourceSystemPreviousAttributes.

- Optional: `external_source_id`, `type`.

### InventoryCountObservationProvenancePreviousAttributes.source_system variant 2

anyOf variant 2.

- Undeclared: `external_source_id`, `type`.
- Value shape: null. System the change came from, such as a point-of-sale or warehouse system. `null` when the request named no source system. 

### InventoryCountObservationProvenancePreviousAttributes.source_system variant 1.external_source_id

### InventoryCountObservationProvenancePreviousAttributes.source_system variant 1.external_source_id variant 1

anyOf variant 1: Your source system's identifier. Required when type is pos, wms, erp, or other; not allowed when type is manual. Don't put secrets in this field..

- Value shape: string. Your source system's identifier. Required when type is pos, wms, erp, or other; not allowed when type is manual. Don't put secrets in this field. Your source system's identifier. Required when type is pos, wms, erp, or other; not allowed when type is manual. Don't put secrets in this field. maxLength: `255`. Example: `"warehouse-1842"`. 

### InventoryCountObservationProvenancePreviousAttributes.source_system variant 1.external_source_id variant 2

anyOf variant 2.

- Value shape: null. Your source system's identifier. Required when type is pos, wms, erp, or other; not allowed when type is manual. Don't put secrets in this field. 

### InventoryCountObservationProvenancePreviousAttributes.source_system variant 1.type

Declared alternatives: [InventorySourceSystemPreviousAttributes.type](../models/InventorySourceSystemPreviousAttributes.md#inventorysourcesystempreviousattributestype).

