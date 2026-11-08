[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryRevocationTargetDeliveryRateCallbackRevision







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_rate_callback_id` | Required | string | ID of the delivery rate callback that owns the targeted revision or signing key. Example: `"dcb_01KEZF7C00Q4GZ7YPQ60GC4HV1"`. |
| `delivery_rate_callback_revision_id` | Required | string | ID of the immutable revision to fence. It must belong to delivery_rate_callback_id. Example: `"dcbr_01KEZF7C003QAPFXXMCHC59T5J"`. |
| `target_type` | Required | string | Fences one immutable revision of the named delivery rate callback. Values: `"delivery_rate_callback_revision"`. |

### DeliveryRevocationTargetDeliveryRateCallbackRevision variant 1: `target_type` = `"delivery_rate_callback_revision"`

anyOf CreateDeliveryRevocationTargetDeliveryRateCallbackRevision: Declared schema CreateDeliveryRevocationTargetDeliveryRateCallbackRevision. Fences one immutable revision of the named delivery rate callback..

- Constraints for `delivery_rate_callback_id`: minLength: `1`.
- Constraints for `delivery_rate_callback_revision_id`: minLength: `1`.

### DeliveryRevocationTargetDeliveryRateCallbackRevision variant 2: `target_type` = `"delivery_rate_callback_revision"`

anyOf DeliveryRevocationTargetDeliveryRateCallbackRevision: Declared schema DeliveryRevocationTargetDeliveryRateCallbackRevision. Fences one immutable revision of the named delivery rate callback..

No additional constraints.

