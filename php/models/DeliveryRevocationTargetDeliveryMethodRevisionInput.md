[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryRevocationTargetDeliveryMethodRevisionInput

Fences one immutable revision of the named delivery method.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_method_id` | Required | string | ID of the delivery method that owns the targeted revision. Example: `"dmet_01KEZF7C00YSG3X2D1TZJ36TM0"`. |
| `delivery_method_revision_id` | Required | string | ID of the immutable revision to fence. It must belong to delivery_method_id. Example: `"dmetr_01KEZF7C001ZF9D92DY1G51GV9"`. |
| `target_type` | Required | string | Fences one immutable revision of the named delivery method. Values: `"delivery_method_revision"`. |

