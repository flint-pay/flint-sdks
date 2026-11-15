[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## WorkloadIdentityClaimConditionInput

A condition matching one top-level scalar claim in the workload's identity token.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `claim` | Required | string | Literal top-level scalar claim name. Registered JWT claims are reserved. |
| `match` | Required | string | How `value` is compared with the claim. Defaults to exact. Default: `"exact"`. Values: `"exact"`, `"glob"`. |
| `value` | Required | string | The value the claim must have, not empty. Strings compare as sent, booleans as `true` or `false`, and numbers as canonical decimal text. A claim that is missing, `null`, an array, or an object never matches. |

