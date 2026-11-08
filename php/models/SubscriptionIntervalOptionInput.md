[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionIntervalOptionInput

A billing cadence offered by a subscription plan or offer. Every option bills the same line prices once per period; prices are not scaled by the interval. For a different price per interval, create separate plans.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_interval` | Required | string | Unit of the billing period. Every option bills the same line prices once per period. Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`. |
| `billing_interval_count` | Required | integer | Number of interval units per billing period, from 1 to 365. Does not multiply line prices. Format: `int32`. minimum: `1`. maximum: `365`. |

