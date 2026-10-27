[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionBillingScheduleRequestInput

Who owns the billing schedule when creating a subscription: Flint or an external system.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `owner` | Required | string | Values: `"flint"`, `"external"`. |

### SubscriptionBillingScheduleRequestInput variant 1: `owner` = `"flint"`

oneOf variant 1: The `flint` variant of `SubscriptionBillingScheduleInput`..

- Constraints for `owner`: Values: `"flint"`.

### SubscriptionBillingScheduleRequestInput variant 2: `owner` = `"external"`

oneOf variant 2: The `external` variant of `SubscriptionBillingScheduleInput`..

- Constraints for `owner`: Values: `"external"`.

