[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionBillingStartRequest

How billing begins. Send exactly one closed tagged-union branch.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `type` | Required | string |  |
| `starts_at` | Conditional | string | Future instant when the first billing period starts. Format: `date-time`. minLength: `1`. Example: `"2026-08-02T16:00:00Z"`. |
| `completed_cycles` | Conditional | integer | Billing cycles already charged on the previous billing system, including the current imported period. Defaults to 1 and must be at least 1. The subscription starts with this completed_cycles count; its next renewal has subscription_cycle one higher. minimum: `1`. Default: `1`. |
| `period_started_at` | Conditional | string | Start of the already-running billing period being imported. Format: `date-time`. minLength: `1`. Example: `"2026-08-02T16:00:00Z"`. |

### SubscriptionBillingStartRequest variant 1: `type` = `"immediate"`

oneOf with type: "immediate": The `immediate` variant of `SubscriptionBillingStartInput`..

- Undeclared: `starts_at`, `completed_cycles`, `period_started_at`.
- Constraints for `type`: Starts billing now, with the plan trial when configured. Values: `"immediate"`.

### SubscriptionBillingStartRequest variant 2: `type` = `"scheduled"`

oneOf with type: "scheduled": The `scheduled` variant of `SubscriptionBillingStartInput`..

- Required: `starts_at`.
- Undeclared: `completed_cycles`, `period_started_at`.
- Constraints for `type`: Starts the first billing period at starts_at. Values: `"scheduled"`.

### SubscriptionBillingStartRequest variant 3: `type` = `"imported"`

oneOf with type: "imported": The `imported` variant of `SubscriptionBillingStartInput`..

- Required: `period_started_at`.
- Optional: `completed_cycles`.
- Undeclared: `starts_at`.
- Constraints for `type`: Continues a billing period already paid for on another system. Values: `"imported"`.

