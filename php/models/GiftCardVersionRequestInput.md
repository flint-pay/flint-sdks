[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardVersionRequestInput

Optional version fence for the redemption being captured or canceled.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer string | The redemption version last read. Capture or cancel changes the redemption only when its current version matches. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. |

