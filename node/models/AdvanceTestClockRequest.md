[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## AdvanceTestClockRequest

The request body for: Advance a test clock.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer | Optional expected version of this resource. A stale value returns 409 VERSION_CONFLICT with the current version. Retrieve the resource and rebuild the request before retrying. Format: `uint64`. minimum: `1`. |
| `frozen_at` | Required | string | The time to move the clock to. It must be later than the clock's current `frozen_at`, and no later than two years after it or two billing intervals of any subscription on the clock that isn't canceled, whichever is earlier. Fractional seconds are truncated. Format: `date-time`. minLength: `1`. |

