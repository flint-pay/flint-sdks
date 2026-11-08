[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## WorkloadIdentityListResponse

A page of `WorkloadIdentity` objects.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | Array of [WorkloadIdentity](../models/WorkloadIdentity.md#workloadidentity) | Resource, collection, or operation result returned by this request. `data[]`: [field definitions](../models/WorkloadIdentityListResponse.md#workloadidentitylistresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `next_page_token` | Optional | string | Opaque token to send as `page_token` to retrieve the next page. Omitted when there is no next page. |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### WorkloadIdentityListResponse.data[]

A policy that grants API access to a workload authenticated by an external identity provider.

Field definitions: [shared fields](WorkloadIdentityResponse.md#workloadidentityresponsedata).

### WorkloadIdentityListResponse.data[].created_by

Field definitions: [WorkloadIdentityResponse.data.created_by](../models/WorkloadIdentityResponse.md#workloadidentityresponsedatacreated_by).

### WorkloadIdentityListResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

