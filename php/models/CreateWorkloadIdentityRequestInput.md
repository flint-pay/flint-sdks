[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateWorkloadIdentityRequestInput

The request body for: Create a workload identity.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `audience` | Optional | string | Immutable token audience. Defaults to Flint's configured issuer URL when omitted. minLength: `1`. maxLength: `255`. |
| `claim_conditions` | Optional | Array of [WorkloadIdentityClaimConditionRequestInput](../models/WorkloadIdentityClaimConditionRequestInput.md#workloadidentityclaimconditionrequestinput) | Bounded value array, at most 10. Defaults to []. Any glob requires an exact claim condition; shared issuers require tenant pinning. maxItems: `10`. uniqueItems: `true`. |
| `issuer` | Required | string | Immutable public HTTPS issuer with a DNS host, optional port 443, and no userinfo, query, or fragment. Compared exactly. minLength: `1`. maxLength: `255`. |
| `name` | Required | string | minLength: `1`. maxLength: `100`. |
| `scopes` | Required | Array of string | Complete scope set to grant. Machine callers may grant only scopes they hold in the same environment. minItems: `1`. uniqueItems: `true`. Items values: [95 declared values](APIKeyInput.md#apikeyinput-scopes--values). |
| `subject` | Required | string | minLength: `1`. maxLength: `1024`. |
| `subject_match` | Optional | string | Default: `"exact"`. Values: `"exact"`, `"glob"`. |

