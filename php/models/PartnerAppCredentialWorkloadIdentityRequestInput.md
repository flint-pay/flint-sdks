[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PartnerAppCredentialWorkloadIdentityRequestInput

An external OIDC identity whose subject and claim conditions must match exactly the registered policy.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `audience` | Optional | string | Token audience. Defaults to Flint's configured issuer URL when omitted. minLength: `1`. maxLength: `255`. |
| `claim_conditions` | Optional | Array of [WorkloadIdentityClaimConditionRequestInput](../models/WorkloadIdentityClaimConditionRequestInput.md#workloadidentityclaimconditionrequestinput) | Bounded value array of at most 10 top-level scalar claim conditions. Defaults to []. A glob requires an exact condition; shared issuers require tenant pinning. maxItems: `10`. uniqueItems: `true`. |
| `issuer` | Required | string | Immutable public HTTPS issuer with a DNS host, optional port 443, and no userinfo, query, or fragment. Compared exactly. Must publish valid OIDC discovery metadata. minLength: `1`. maxLength: `255`. |
| `subject` | Required | string | Exact token subject. Google Cloud subjects must be numeric. minLength: `1`. maxLength: `1024`. |

