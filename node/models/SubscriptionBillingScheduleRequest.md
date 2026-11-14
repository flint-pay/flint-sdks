[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionBillingScheduleRequest

Who owns the billing schedule when creating a subscription: Flint or an external system.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `owner` | Required | string | Who supplies billing dates: `flint` computes each next billing date; `external` waits for you to set `next_billing_at`. Values: `"flint"`, `"external"`. |

### SubscriptionBillingScheduleRequest variant 1: `owner` = `"flint"`

oneOf with owner: "flint": The `flint` variant of `SubscriptionBillingScheduleInput`..

- Constraints for `owner`: Values: `"flint"`.

### SubscriptionBillingScheduleRequest variant 2: `owner` = `"external"`

oneOf with owner: "external": The `external` variant of `SubscriptionBillingScheduleInput`..

- Constraints for `owner`: Values: `"external"`.

