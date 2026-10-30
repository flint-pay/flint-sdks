[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SkipSubscriptionCycleRequest

The request body for: Skip subscription cycle.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer | Format: `uint64`. minimum: `1`. |
| `initiated_by` | Optional | string | Who asked for the skip: buyer, merchant, or integration. Defaults to merchant. Flint's skip email to the buyer says the buyer skipped for buyer, and that the store skipped otherwise. Default: `"merchant"`. Values: `"buyer"`, `"merchant"`, `"integration"`. |

