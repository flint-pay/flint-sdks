[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ChangeMeSubscriptionBillingIntervalRequest

The request body for: Change subscription billing interval.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_interval` | Required | string | Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`. |
| `billing_interval_count` | Required | integer | minimum: `1`. maximum: `365`. |
| `expected_version` | Optional | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |

