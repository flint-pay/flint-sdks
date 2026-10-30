[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerPauseCapabilityInput

Whether buyers may pause their own subscriptions. Send at least one field.

minProperties: `1`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `enabled` | Optional | boolean | Whether buyers may pause. When false, a buyer's pause returns 409 ACTION_NOT_ALLOWED with reason not_offered. Default: `true`. |
| `max_cycles` | Optional | integer | The longest pause a buyer may choose, in billing periods. When set, a buyer's pause must send pause_duration_cycles from 1 to this value. Omit it for no limit, which also lets a buyer pause until they resume. Format: `int32`. minimum: `1`. maximum: `12`. |

