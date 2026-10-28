[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PartnerAppCredentialWorkloadIdentityInput

The registered external OIDC issuer, exact subject, audience, and claim conditions.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `audience` | Required | string |  |
| `claim_conditions` | Required | Array of [WorkloadIdentityClaimConditionInput](../models/WorkloadIdentityClaimConditionInput.md#workloadidentityclaimconditioninput) | Bounded value array of top-level scalar conditions checked for every assertion. |
| `issuer` | Required | string |  |
| `platform` | Required | string | Computed from the issuer. New platform values may be added. Values: `"generic"`, `"github_actions"`, `"gitlab_ci"`, `"google_cloud"`, `"aws"`, `"azure"`, `"kubernetes"`, `"circleci"`, `"buildkite"`, `"vercel"`, `"fly_io"`. |
| `subject` | Required | string |  |

