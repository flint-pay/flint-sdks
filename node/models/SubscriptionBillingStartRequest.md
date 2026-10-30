[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionBillingStartRequest

How billing begins. Send exactly one closed tagged-union branch.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `type` | Required | string |  |
| `starts_at` | Conditional | string | Future instant when the first billing period starts. Format: `date-time`. minLength: `1`. |
| `completed_cycles` | Conditional | integer | Number of billing cycles already charged on the previous billing system, including the current imported period. The subscription's completed_cycles starts here, and the next renewal's subscription_cycle is this number plus one. minimum: `0`. Default: `0`. |
| `period_started_at` | Conditional | string | Start of the already-running billing period being imported. Format: `date-time`. minLength: `1`. |

### SubscriptionBillingStartRequest variant 1: `type` = `"immediate"`

oneOf with type: "immediate": The `immediate` variant of `SubscriptionBillingStartInput`..

- Undeclared: `starts_at`, `completed_cycles`, `period_started_at`.
- Constraints for `type`: Values: `"immediate"`.

### SubscriptionBillingStartRequest variant 2: `type` = `"scheduled"`

oneOf with type: "scheduled": The `scheduled` variant of `SubscriptionBillingStartInput`..

- Required: `starts_at`.
- Undeclared: `completed_cycles`, `period_started_at`.
- Constraints for `type`: Values: `"scheduled"`.

### SubscriptionBillingStartRequest variant 3: `type` = `"imported"`

oneOf with type: "imported": The `imported` variant of `SubscriptionBillingStartInput`..

- Required: `period_started_at`.
- Optional: `completed_cycles`.
- Undeclared: `starts_at`.
- Constraints for `type`: Values: `"imported"`.

