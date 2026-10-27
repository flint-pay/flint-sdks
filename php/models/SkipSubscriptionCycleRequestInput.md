[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SkipSubscriptionCycleRequestInput

The request body for: Skip subscription cycle.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |
| `initiated_by` | Optional | string | Who asked for the skip: buyer, merchant, or integration. Defaults to merchant. Flint's skip email to the buyer says the buyer skipped for buyer, and that the store skipped otherwise. Default: `"merchant"`. Values: `"buyer"`, `"merchant"`, `"integration"`. |

