[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PartnerAppCredentialWorkloadIdentity

The registered external OIDC issuer, exact subject, audience, and claim conditions.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `audience` | Required | string |  |
| `claim_conditions` | Required | Array of [WorkloadIdentityClaimCondition](../models/WorkloadIdentityClaimCondition.md#workloadidentityclaimcondition) | Bounded value array of top-level scalar conditions checked for every assertion. |
| `issuer` | Required | string |  |
| `platform` | Required | string | Computed from the issuer. New platform values may be added. Values: `"generic"`, `"github_actions"`, `"gitlab_ci"`, `"google_cloud"`, `"aws"`, `"azure"`, `"kubernetes"`, `"circleci"`, `"buildkite"`, `"vercel"`, `"fly_io"`. |
| `subject` | Required | string |  |

