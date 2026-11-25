[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## UpdateWorkloadIdentityRequest

The request body for: Update a workload identity. minProperties: `1`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `claim_conditions` | Optional | Array of [WorkloadIdentityClaimConditionRequest](../models/WorkloadIdentityClaimConditionRequest.md#workloadidentityclaimconditionrequest) | Bounded value array, at most 10. Defaults to []. Any glob requires an exact claim condition; shared issuers require tenant pinning. maxItems: `10`. uniqueItems: `true`. |
| `expected_version` | Optional | integer | Version most recently read. Required when claim_conditions or scopes is supplied; optional for scalar updates. Format: `int64`. minimum: `1`. |
| `name` | Optional | string | A label that helps you tell workload identities apart, 1 to 100 characters. Omit to keep the current name. Surrounding whitespace is trimmed before length validation. A supplied value cannot be blank; use null where clearing is supported. minLength: `1`. maxLength: `100`. |
| `scopes` | Optional | Array of string | Complete scope set to grant. A Dashboard session needs fresh verification to grant scopes outside this list: commerce.products.read, commerce.subscription_plans.read, commerce.bundles.read, commerce.catalog.read. API credentials may grant only scopes they hold in the same environment. Among API credentials, only full-access keys may grant these scopes: accounts.api_keys.write, commerce.gift_cards.secrets.write, accounts.workload_identities.write, commerce.license_keys.secrets.write. Items values: [105 declared values](APIKey.md#apikey-scopes--values). |
| `status` | Optional | string | Turns the identity on or off. Archiving is a separate DELETE. Omit to keep the current status. Values: `"active"`, `"inactive"`. |
| `subject` | Optional | string | The subject (`sub`) a token must carry, 1 to 1,024 characters, compared as subject_match says. Omit to keep the current subject. minLength: `1`. maxLength: `1024`. |
| `subject_match` | Optional | string | How `subject` is compared with a token's `sub` claim. Omit to keep the current setting. Default: `"exact"`. Values: `"exact"`, `"glob"`. |

