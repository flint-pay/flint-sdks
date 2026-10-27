[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## UpdateSubscriptionBillingScheduleRequestExternal

The `external` variant of `UpdateSubscriptionBillingScheduleRequest`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |
| `next_billing_at` | Optional | string or null | Future date at which Flint attempts the next charge. Omit to preserve the date or send null to clear it. Format: `date-time`. minLength: `1`. |
| `owner` | Required | string | Values: `"external"`. |

