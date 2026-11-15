[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## WorkloadIdentityResponse

A response containing `WorkloadIdentity` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [WorkloadIdentity](../models/WorkloadIdentity.md#workloadidentity) | Resource, collection, or operation result returned by this request. A policy that grants API access to a workload authenticated by an external identity provider. `data`: [field definitions](../models/WorkloadIdentityResponse.md#workloadidentityresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### WorkloadIdentityResponse.data

Resource, collection, or operation result returned by this request. A policy that grants API access to a workload authenticated by an external identity provider.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `archived_at` | Optional | string | Time the identity was archived. Omitted before archival. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `audience` | Required | string | Audience (`aud`) a token must carry to match this identity. Set at creation and never changes. |
| `claim_conditions` | Required | Array of [WorkloadIdentityClaimCondition](../models/WorkloadIdentityClaimCondition.md#workloadidentityclaimcondition) | Bounded value array of top-level scalar claim conditions. Replaced as a whole on PATCH; [] clears it when the remaining policy is valid. |
| `created_at` | Required | string | Time the identity was created. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `created_by` | Required | [WorkloadIdentityCreator](../models/WorkloadIdentityCreator.md#workloadidentitycreator) | The user, API key, or workload identity whose request created this identity. The user or credential that created a workload identity, identified by resource type and ID. `created_by`: [field definitions](../models/WorkloadIdentityResponse.md#workloadidentityresponsedatacreated_by). |
| `issuer` | Required | string | Issuer (`iss`) of the external identity provider whose tokens this identity accepts. Set at creation and never changes. |
| `last_used_at` | Optional | string | Most recent use. Omitted before the first use. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `mode` | Required | string | Environment used for this resource or request. Values: `"test"`, `"live"`. |
| `name` | Required | string | A label that helps you tell workload identities apart, 1 to 100 characters. |
| `platform` | Required | string | Computed from the issuer. New platform values may be added. Values: `"generic"`, `"github_actions"`, `"gitlab_ci"`, `"google_cloud"`, `"aws"`, `"azure"`, `"kubernetes"`, `"circleci"`, `"buildkite"`, `"vercel"`, `"fly_io"`. |
| `sandbox_id` | Optional | string | The sandbox containing this identity. Present only in test mode. Example: `"test_01KEZF7C00JC77HTMTB2XHNPE0"`. |
| `scopes` | Required | Array of string | Complete scope set granted to this identity. Replaced as a whole on PATCH. |
| `status` | Required | string | Whether the identity currently accepts token exchanges. Only active identities do. Values: `"active"`, `"inactive"`, `"archived"`. |
| `subject` | Required | string | Subject (`sub`) a token must carry, compared as subject_match says. |
| `subject_match` | Required | string | How `subject` is compared with a token's `sub` claim. Values: `"exact"`, `"glob"`. |
| `updated_at` | Required | string | Time the identity last changed. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `version` | Required | integer | Positive concurrency version. Increases on policy and lifecycle changes. Format: `int64`. minimum: `1`. |
| `workload_identity_id` | Required | string | Unique identifier for this workload identity, prefixed `wid_`. Example: `"wid_01KEZF7C00GKCN7Y1482VY8TWP"`. |

### WorkloadIdentityResponse.data.created_by

The user, API key, or workload identity whose request created this identity. The user or credential that created a workload identity, identified by resource type and ID.

Field definitions: [shared fields](WorkloadIdentityCreatorInput.md#workloadidentitycreatorinput).

### WorkloadIdentityResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

