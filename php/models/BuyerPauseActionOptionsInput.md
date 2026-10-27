[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerPauseActionOptionsInput

The pause lengths this subscription accepts from its buyer.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `max_pause_duration_cycles` | Optional | integer | When present, pause_duration_cycles is required and must be between 1 and this value. When absent, omit pause_duration_cycles to pause until the buyer resumes. Format: `int32`. minimum: `1`. maximum: `12`. |

