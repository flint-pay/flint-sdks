[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## UpdateSubscriptionBillingScheduleRequestFlint

The `flint` variant of `UpdateSubscriptionBillingScheduleRequest`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_anchor_day` | Optional | integer | UTC day of the month used for monthly and yearly billing. Overrides the day inferred from a moved next_billing_at. Format: `int32`. minimum: `1`. maximum: `31`. |
| `expected_version` | Optional | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |
| `next_billing_at` | Required | string | Future date at which Flint attempts the next charge. Format: `date-time`. minLength: `1`. |
| `owner` | Required | string | Values: `"flint"`. |

