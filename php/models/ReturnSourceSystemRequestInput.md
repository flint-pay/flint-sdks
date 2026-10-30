[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnSourceSystemRequestInput

The system a return event came from, such as a point of sale or warehouse system, with its own identifier.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `external_source_id` | Optional | string | Your source system's identifier. Required when source_system_type is pos, wms, erp, or other; not allowed when source_system_type is manual. Don't put secrets in this field. minLength: `1`. maxLength: `255`. |
| `source_system_type` | Required | string | Source of the event: manual for a manual entry, pos for a point of sale, wms for a warehouse management system, erp for an enterprise resource planning system, or other for another external system. Flint-authored events use flint in responses. Values: `"manual"`, `"pos"`, `"wms"`, `"erp"`, `"other"`. |

