[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## StatementDescriptorStatus

Stripe's current decision about the card statement name.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `reason` | Required | string or null | Stripe's refusal reason in plain language. Null when status is accepted or pending. |
| `status` | Required | string | accepted when Stripe has no outstanding descriptor requirement, rejected when Stripe reports a refusal, or pending while a change or review is unresolved. Values: `"accepted"`, `"rejected"`, `"pending"`. |

