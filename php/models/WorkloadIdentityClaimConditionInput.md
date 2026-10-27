[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## WorkloadIdentityClaimConditionInput

A condition matching one top-level scalar claim in the workload's identity token.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `claim` | Required | string | Literal top-level scalar claim name. Registered JWT claims are reserved. |
| `match` | Required | string | Default: `"exact"`. Values: `"exact"`, `"glob"`. |
| `value` | Required | string |  |

