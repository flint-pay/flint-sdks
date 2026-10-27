[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## UpdateWorkloadIdentityRequestInput

The request body for: Update a workload identity.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `claim_conditions` | Optional | Array of [WorkloadIdentityClaimConditionRequestInput](../models/WorkloadIdentityClaimConditionRequestInput.md#workloadidentityclaimconditionrequestinput) | Bounded value array, at most 10. Defaults to []. Any glob requires an exact claim condition; shared issuers require tenant pinning. maxItems: `10`. uniqueItems: `true`. |
| `expected_version` | Optional | integer string | Version most recently read. Required when claim_conditions or scopes is supplied; optional for scalar updates. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. |
| `name` | Optional | string | minLength: `1`. maxLength: `100`. |
| `scopes` | Optional | Array of string | Complete scope set to grant. Machine callers may grant only scopes they hold in the same environment. minItems: `1`. uniqueItems: `true`. Items values: [95 declared values](APIKeyInput.md#apikeyinput-scopes--values). |
| `status` | Optional | string | Values: `"active"`, `"inactive"`. |
| `subject` | Optional | string | minLength: `1`. maxLength: `1024`. |
| `subject_match` | Optional | string | Default: `"exact"`. Values: `"exact"`, `"glob"`. |

