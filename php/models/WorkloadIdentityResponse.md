[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## WorkloadIdentityResponse

A response containing `WorkloadIdentity` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [WorkloadIdentity](../models/WorkloadIdentity.md#workloadidentity) | A policy that grants API access to a workload authenticated by an external identity provider. |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Required | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

