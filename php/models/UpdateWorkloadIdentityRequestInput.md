[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## UpdateWorkloadIdentityRequestInput

The request body for: Update a workload identity.

minProperties: `1`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `claim_conditions` | Optional | Array of [WorkloadIdentityClaimConditionRequestInput](../models/WorkloadIdentityClaimConditionRequestInput.md#workloadidentityclaimconditionrequestinput) | Bounded value array, at most 10. Defaults to []. Any glob requires an exact claim condition; shared issuers require tenant pinning. maxItems: `10`. uniqueItems: `true`. |
| `expected_version` | Optional | integer | Version most recently read. Required when claim_conditions or scopes is supplied; optional for scalar updates. Format: `int64`. minimum: `1`. |
| `name` | Optional | string | A label that helps you tell workload identities apart, 1 to 100 characters. Omit to keep the current name. minLength: `1`. maxLength: `100`. |
| `scopes` | Optional | Array of string | Complete scope set to grant. API keys, CLI login tokens and workload tokens may grant only scopes they hold in the same environment. Only a full-access key or a freshly verified user session can grant accounts.api_keys.write, accounts.workload_identities.write or commerce.gift_cards.secrets.write, in every mode. Items values: [102 declared values](APIKeyInput.md#apikeyinput-scopes--values). |
| `status` | Optional | string | Turns the identity on or off. Archiving is a separate DELETE. Omit to keep the current status. Values: `"active"`, `"inactive"`. |
| `subject` | Optional | string | The subject (`sub`) a token must carry, 1 to 1,024 characters, compared as subject_match says. Omit to keep the current subject. minLength: `1`. maxLength: `1024`. |
| `subject_match` | Optional | string | How `subject` is compared with a token's `sub` claim. Omit to keep the current setting. Default: `"exact"`. Values: `"exact"`, `"glob"`. |

