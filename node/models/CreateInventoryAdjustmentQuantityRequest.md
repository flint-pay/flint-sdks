[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateInventoryAdjustmentQuantityRequest

The `loss` variant of `CreateInventoryAdjustmentRequest`. The `received` variant of `CreateInventoryAdjustmentRequest`. The `returned` variant of `CreateInventoryAdjustmentRequest`. The `sold` variant of `CreateInventoryAdjustmentRequest`. The `theft` variant of `CreateInventoryAdjustmentRequest`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `external_actor_id` | Optional | string | Your identifier for the actor who recorded the event. Don't put secrets in this field. minLength: `1`. maxLength: `255`. |
| `lines` | Required | Array of [InventoryAdjustmentQuantityLineRequest](../models/InventoryAdjustmentQuantityLineRequest.md#inventoryadjustmentquantitylinerequest) | minItems: `1`. maxItems: `100`. |
| `note` | Optional | string | minLength: `1`. |
| `occurred_at` | Optional | string | When the event occurred, at most 5 minutes in the future. Required when source_system.type is pos, wms, erp, or other. Format: `date-time`. minLength: `1`. |
| `reason` | Required | string | Values: `"received"`, `"returned"`, `"sold"`, `"theft"`, `"loss"`. |
| `source_system` | Optional | [InventorySourceSystemRequest](../models/InventorySourceSystemRequest.md#inventorysourcesystemrequest) | The source system you report for an inventory event, such as manual, pos, wms, erp, or other, with your identifier when it applies. |

