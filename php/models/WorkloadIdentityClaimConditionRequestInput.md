[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## WorkloadIdentityClaimConditionRequestInput

A condition to match one top-level scalar claim in the workload's identity token. Omitted match defaults to exact.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `claim` | Required | string | Literal top-level scalar claim name. Registered JWT claims are reserved. minLength: `1`. |
| `match` | Optional | string | Default: `"exact"`. Values: `"exact"`, `"glob"`. |
| `value` | Required | string | minLength: `1`. |

