[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## UpdateWorkloadIdentityRequest

The request body for: Update a workload identity.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `claim_conditions` | Optional | Array of [WorkloadIdentityClaimConditionRequest](../models/WorkloadIdentityClaimConditionRequest.md#workloadidentityclaimconditionrequest) | Bounded value array, at most 10. Defaults to []. Any glob requires an exact claim condition; shared issuers require tenant pinning. maxItems: `10`. uniqueItems: `true`. |
| `expected_version` | Optional | integer | Version most recently read. Required when claim_conditions or scopes is supplied; optional for scalar updates. Format: `int64`. minimum: `1`. |
| `name` | Optional | string | minLength: `1`. maxLength: `100`. |
| `scopes` | Optional | Array of string | Complete scope set to grant. Machine callers may grant only scopes they hold in the same environment. Items values: [96 declared values](APIKey.md#apikey-scopes--values). |
| `status` | Optional | string | Values: `"active"`, `"inactive"`. |
| `subject` | Optional | string | minLength: `1`. maxLength: `1024`. |
| `subject_match` | Optional | string | Default: `"exact"`. Values: `"exact"`, `"glob"`. |

