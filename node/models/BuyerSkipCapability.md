[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerSkipCapability

Whether buyers may skip renewals. Send at least one field. minProperties: `1`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `enabled` | Optional | boolean | Whether buyers may skip a renewal. Merchant credentials may always skip an eligible cycle. Default: `true`. |
| `max_consecutive_skips` | Optional | integer | Maximum consecutive cycles a buyer may skip. Omit it for no limit. The count resets after a paid renewal. Format: `int32`. minimum: `1`. maximum: `12`. |

