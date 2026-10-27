[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionBillingScheduleRequest

Who owns the billing schedule when creating a subscription: Flint or an external system.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `owner` | Required | string | Values: `"flint"`, `"external"`. |

### SubscriptionBillingScheduleRequest variant 1: `owner` = `"flint"`

oneOf variant 1: The `flint` variant of `SubscriptionBillingScheduleInput`..

- Constraints for `owner`: Values: `"flint"`.

### SubscriptionBillingScheduleRequest variant 2: `owner` = `"external"`

oneOf variant 2: The `external` variant of `SubscriptionBillingScheduleInput`..

- Constraints for `owner`: Values: `"external"`.

