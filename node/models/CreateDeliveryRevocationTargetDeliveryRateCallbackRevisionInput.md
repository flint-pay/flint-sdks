[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateDeliveryRevocationTargetDeliveryRateCallbackRevisionInput

Request input. Response: [DeliveryRevocationTargetDeliveryRateCallbackRevision](../models/DeliveryRevocationTargetDeliveryRateCallbackRevision.md#deliveryrevocationtargetdeliveryratecallbackrevision).

Fences one immutable revision of the named delivery rate callback.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_rate_callback_id` | Required | string | ID of the delivery rate callback that owns the targeted revision or signing key. minLength: `1`. Example: `"dcb_01KEZF7C00Q4GZ7YPQ60GC4HV1"`. |
| `delivery_rate_callback_revision_id` | Required | string | ID of the immutable revision to fence. It must belong to delivery_rate_callback_id. minLength: `1`. Example: `"dcbr_01KEZF7C003QAPFXXMCHC59T5J"`. |
| `target_type` | Required | string | Fences one immutable revision of the named delivery rate callback. Values: `"delivery_rate_callback_revision"`. |

