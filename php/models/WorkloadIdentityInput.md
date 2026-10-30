[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## WorkloadIdentityInput

A policy that grants API access to a workload authenticated by an external identity provider.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `archived_at` | Optional | string | Time the identity was archived. Omitted before archival. Format: `date-time`. |
| `audience` | Required | string |  |
| `claim_conditions` | Required | Array of [WorkloadIdentityClaimConditionInput](../models/WorkloadIdentityClaimConditionInput.md#workloadidentityclaimconditioninput) | Bounded value array of top-level scalar claim conditions. Replaced as a whole on PATCH; [] clears it when the remaining policy is valid. |
| `created_at` | Required | string | Time the identity was created. Format: `date-time`. |
| `created_by` | Required | [WorkloadIdentityCreatorInput](../models/WorkloadIdentityCreatorInput.md#workloadidentitycreatorinput) | The user or credential that created a workload identity, identified by resource type and ID. |
| `issuer` | Required | string |  |
| `last_used_at` | Optional | string | Most recent use. Omitted before the first use. Format: `date-time`. |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `name` | Required | string |  |
| `platform` | Required | string | Computed from the issuer. New platform values may be added. Values: `"generic"`, `"github_actions"`, `"gitlab_ci"`, `"google_cloud"`, `"aws"`, `"azure"`, `"kubernetes"`, `"circleci"`, `"buildkite"`, `"vercel"`, `"fly_io"`. |
| `sandbox_id` | Optional | string | The sandbox containing this identity. Present only in test mode. |
| `scopes` | Required | Array of string | Complete scope set granted to this identity. Replaced as a whole on PATCH. |
| `status` | Required | string | Values: `"active"`, `"inactive"`, `"archived"`. |
| `subject` | Required | string |  |
| `subject_match` | Required | string | Values: `"exact"`, `"glob"`. |
| `updated_at` | Required | string | Time the identity last changed. Format: `date-time`. |
| `version` | Required | integer | Positive concurrency version. Increases on policy and lifecycle changes. Format: `int64`. minimum: `1`. |
| `workload_identity_id` | Required | string |  |

