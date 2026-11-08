[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateDeliveryRevocationTargetDeliveryMethodRevisionInput

Request input. Response: [DeliveryRevocationTargetDeliveryMethodRevision](../models/DeliveryRevocationTargetDeliveryMethodRevision.md#deliveryrevocationtargetdeliverymethodrevision).

Fences one immutable revision of the named delivery method.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_method_id` | Required | string | ID of the delivery method that owns the targeted revision. minLength: `1`. Example: `"dmet_01KEZF7C00YSG3X2D1TZJ36TM0"`. |
| `delivery_method_revision_id` | Required | string | ID of the immutable revision to fence. It must belong to delivery_method_id. minLength: `1`. Example: `"dmetr_01KEZF7C001ZF9D92DY1G51GV9"`. |
| `target_type` | Required | string | Fences one immutable revision of the named delivery method. Values: `"delivery_method_revision"`. |

