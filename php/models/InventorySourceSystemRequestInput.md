[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventorySourceSystemRequestInput

The source system you report for an inventory event, such as manual, pos, wms, erp, or other, with your identifier when it applies.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `external_source_id` | Optional | string | Your source system's identifier. Required when type is pos, wms, erp, or other; not allowed when type is manual. Don't put secrets in this field. minLength: `1`. maxLength: `255`. |
| `type` | Required | string | Source of the event: manual for a manual entry, pos for a point of sale, wms for a warehouse management system, erp for an enterprise resource planning system, or other for another external system. Flint-authored events use flint in responses. Values: `"manual"`, `"pos"`, `"wms"`, `"erp"`, `"other"`. |

