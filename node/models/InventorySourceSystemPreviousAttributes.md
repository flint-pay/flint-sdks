[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventorySourceSystemPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `external_source_id` | Optional | string or null | Your source system's identifier. Required when type is pos, wms, erp, or other; not allowed when type is manual. Don't put secrets in this field. `external_source_id`: [declared alternatives](../models/InventorySourceSystemPreviousAttributes.md#inventorysourcesystempreviousattributesexternal_source_id). |
| `type` | Optional | string or null | Source of the event: manual for a manual entry, pos for a point of sale, wms for a warehouse management system, erp for an enterprise resource planning system, or other for another external system. Flint-authored events use flint in responses. Values: `"manual"`, `"pos"`, `"wms"`, `"erp"`, `"flint"`, `"other"`. `type`: [declared alternatives](../models/InventorySourceSystemPreviousAttributes.md#inventorysourcesystempreviousattributestype). |

### InventorySourceSystemPreviousAttributes.external_source_id

### InventorySourceSystemPreviousAttributes.external_source_id variant 1

anyOf variant 1: Your source system's identifier. Required when type is pos, wms, erp, or other; not allowed when type is manual. Don't put secrets in this field..

- Value shape: string. Your source system's identifier. Required when type is pos, wms, erp, or other; not allowed when type is manual. Don't put secrets in this field. Your source system's identifier. Required when type is pos, wms, erp, or other; not allowed when type is manual. Don't put secrets in this field. maxLength: `255`. Example: `"warehouse-1842"`. 

### InventorySourceSystemPreviousAttributes.external_source_id variant 2

anyOf variant 2.

- Value shape: null. Your source system's identifier. Required when type is pos, wms, erp, or other; not allowed when type is manual. Don't put secrets in this field. 

### InventorySourceSystemPreviousAttributes.type

### InventorySourceSystemPreviousAttributes.type variant 1

anyOf variant 1: Source of the event: manual for a manual entry, pos for a point of sale, wms for a warehouse management system, erp for an enterprise resource planning system, or other for another external system. Flint-authored events use flint in responses..

- Value shape: string. Source of the event: manual for a manual entry, pos for a point of sale, wms for a warehouse management system, erp for an enterprise resource planning system, or other for another external system. Flint-authored events use flint in responses. Values: `"manual"`, `"pos"`, `"wms"`, `"erp"`, `"flint"`, `"other"`.

### InventorySourceSystemPreviousAttributes.type variant 2

anyOf variant 2.

- Value shape: null. Source of the event: manual for a manual entry, pos for a point of sale, wms for a warehouse management system, erp for an enterprise resource planning system, or other for another external system. Flint-authored events use flint in responses. 

