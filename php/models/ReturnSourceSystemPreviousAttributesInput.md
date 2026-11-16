[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnSourceSystemPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `external_source_id` | Optional | string or null | Your source system's identifier. Required when source_system_type is pos, wms, erp, or other; not allowed when source_system_type is manual. Don't put secrets in this field. `external_source_id`: [declared alternatives](../models/ReturnSourceSystemPreviousAttributesInput.md#returnsourcesystempreviousattributesinputexternal_source_id). |
| `source_system_type` | Optional | string or null | Source of the event: manual for a manual entry, pos for a point of sale, wms for a warehouse management system, erp for an enterprise resource planning system, or other for another external system. Flint-authored events use flint in responses. Values: `"manual"`, `"pos"`, `"wms"`, `"erp"`, `"other"`, `"flint"`. `source_system_type`: [declared alternatives](../models/ReturnSourceSystemPreviousAttributesInput.md#returnsourcesystempreviousattributesinputsource_system_type). |

### ReturnSourceSystemPreviousAttributesInput.external_source_id

### ReturnSourceSystemPreviousAttributesInput.external_source_id variant 1

anyOf variant 1: Your source system's identifier. Required when source_system_type is pos, wms, erp, or other; not allowed when source_system_type is manual. Don't put secrets in this field..

- Value shape: string. Your source system's identifier. Required when source_system_type is pos, wms, erp, or other; not allowed when source_system_type is manual. Don't put secrets in this field. Your source system's identifier. Required when source_system_type is pos, wms, erp, or other; not allowed when source_system_type is manual. Don't put secrets in this field. minLength: `1`. maxLength: `255`. Example: `"warehouse-1842"`. 

### ReturnSourceSystemPreviousAttributesInput.external_source_id variant 2

anyOf variant 2.

- Value shape: null. Your source system's identifier. Required when source_system_type is pos, wms, erp, or other; not allowed when source_system_type is manual. Don't put secrets in this field. 

### ReturnSourceSystemPreviousAttributesInput.source_system_type

### ReturnSourceSystemPreviousAttributesInput.source_system_type variant 1

anyOf variant 1: Source of the event: manual for a manual entry, pos for a point of sale, wms for a warehouse management system, erp for an enterprise resource planning system, or other for another external system. Flint-authored events use flint in responses..

- Value shape: string. Source of the event: manual for a manual entry, pos for a point of sale, wms for a warehouse management system, erp for an enterprise resource planning system, or other for another external system. Flint-authored events use flint in responses. Values: `"manual"`, `"pos"`, `"wms"`, `"erp"`, `"other"`, `"flint"`.

### ReturnSourceSystemPreviousAttributesInput.source_system_type variant 2

anyOf variant 2.

- Value shape: null. Source of the event: manual for a manual entry, pos for a point of sale, wms for a warehouse management system, erp for an enterprise resource planning system, or other for another external system. Flint-authored events use flint in responses. 

