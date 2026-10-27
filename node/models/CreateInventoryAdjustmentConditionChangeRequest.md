[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateInventoryAdjustmentConditionChangeRequest

The `condition_changed` variant of `CreateInventoryAdjustmentRequest`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `external_actor_id` | Optional | string | Your identifier for the actor who recorded the event. Don't put secrets in this field. minLength: `1`. maxLength: `255`. |
| `lines` | Required | Array of [InventoryAdjustmentConditionChangeLineRequest](../models/InventoryAdjustmentConditionChangeLineRequest.md#inventoryadjustmentconditionchangelinerequest) | minItems: `1`. maxItems: `100`. |
| `note` | Optional | string | minLength: `1`. |
| `occurred_at` | Optional | string | When the event occurred, at most 5 minutes in the future. Required when source_system.type is pos, wms, erp, or other. Format: `date-time`. minLength: `1`. |
| `reason` | Required | string | Values: `"condition_changed"`. |
| `source_system` | Optional | [InventorySourceSystemRequest](../models/InventorySourceSystemRequest.md#inventorysourcesystemrequest) | The source system you report for an inventory event, such as manual, pos, wms, erp, or other, with your identifier when it applies. |

