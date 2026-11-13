[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## UpdateWorkloadIdentityRequest

The request body for: Update a workload identity. minProperties: `1`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `claim_conditions` | Optional | Array of [WorkloadIdentityClaimConditionRequest](../models/WorkloadIdentityClaimConditionRequest.md#workloadidentityclaimconditionrequest) | Bounded value array, at most 10. Defaults to []. Any glob requires an exact claim condition; shared issuers require tenant pinning. maxItems: `10`. uniqueItems: `true`. |
| `expected_version` | Optional | integer | Version most recently read. Required when claim_conditions or scopes is supplied; optional for scalar updates. Format: `int64`. minimum: `1`. |
| `name` | Optional | string | minLength: `1`. maxLength: `100`. |
| `scopes` | Optional | Array of string | Complete scope set to grant. API keys, CLI login tokens and workload tokens may grant only scopes they hold in the same environment. Only a full-access key or a freshly verified user session can grant accounts.api_keys.write, accounts.workload_identities.write or commerce.gift_cards.secrets.write, in every mode. Items values: [102 declared values](APIKey.md#apikey-scopes--values). |
| `status` | Optional | string | Values: `"active"`, `"inactive"`. |
| `subject` | Optional | string | minLength: `1`. maxLength: `1024`. |
| `subject_match` | Optional | string | Default: `"exact"`. Values: `"exact"`, `"glob"`. |

