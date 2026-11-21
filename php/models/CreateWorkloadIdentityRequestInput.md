[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateWorkloadIdentityRequestInput

The request body for: Create a workload identity.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `audience` | Optional | string | Immutable token audience. Defaults to Flint's configured issuer URL when omitted. minLength: `1`. maxLength: `255`. |
| `claim_conditions` | Optional | Array of [WorkloadIdentityClaimConditionRequestInput](../models/WorkloadIdentityClaimConditionRequestInput.md#workloadidentityclaimconditionrequestinput) | Bounded value array, at most 10. Defaults to []. Any glob requires an exact claim condition; shared issuers require tenant pinning. maxItems: `10`. uniqueItems: `true`. |
| `issuer` | Required | string | Immutable public HTTPS issuer with a DNS host, optional port 443, and no userinfo, query, or fragment. Compared exactly. minLength: `1`. maxLength: `255`. |
| `name` | Required | string | A label that helps you tell workload identities apart, 1 to 100 characters. Surrounding whitespace is trimmed before length validation. A supplied value cannot be blank; use null where clearing is supported. minLength: `1`. maxLength: `100`. |
| `scopes` | Required | Array of string | Complete scope set to grant. A Dashboard session needs fresh verification to grant scopes outside this list: commerce.products.read, commerce.subscription_plans.read, commerce.bundles.read, commerce.catalog.read. API credentials may grant only scopes they hold in the same environment. Among API credentials, only full-access keys may grant these scopes: accounts.api_keys.write, commerce.gift_cards.secrets.write, accounts.workload_identities.write, commerce.license_keys.secrets.write. Items values: [103 declared values](APIKeyInput.md#apikeyinput-scopes--values). |
| `subject` | Required | string | The subject (`sub`) a token must carry, 1 to 1,024 characters. Compared as subject_match says. minLength: `1`. maxLength: `1024`. |
| `subject_match` | Optional | string | How `subject` is compared with a token's `sub` claim. Defaults to exact. Default: `"exact"`. Values: `"exact"`, `"glob"`. |

