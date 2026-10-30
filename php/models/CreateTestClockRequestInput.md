[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateTestClockRequestInput

The request body for: Create a test clock.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `frozen_at` | Optional | string | The time the clock starts at. Defaults to now. It can be up to 5 years ahead, and no more than an hour behind now, to allow for clock skew on your side. Fractional seconds are truncated. Format: `date-time`. minLength: `1`. |
| `name` | Optional | string | Your label for the test clock. minLength: `1`. maxLength: `255`. |

