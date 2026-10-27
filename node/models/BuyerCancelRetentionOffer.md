[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerCancelRetentionOffer

An optional alternative to cancellation that this subscription can accept.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `kind` | Required | string | The alternative offered. Ignore kinds you do not recognize. Values: `"pause_instead"`. |
| `pause_duration_cycles` | Required | integer | Send this pause_duration_cycles to accept the offer. Format: `int32`. minimum: `1`. maximum: `12`. |

