[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CustomDomainListResponse

A page of `CustomDomain` objects.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | Array of [CustomDomain](../models/CustomDomain.md#customdomain) | Resource, collection, or operation result returned by this request. `data[]`: [field definitions](../models/CustomDomainListResponse.md#customdomainlistresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `next_page_token` | Optional | string | Opaque token to send as `page_token` to retrieve the next page. Omitted when there is no next page. |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### CustomDomainListResponse.data[]

A merchant hostname for hosted checkout or customer account pages.

Field definitions: [shared fields](CustomDomainResponse.md#customdomainresponsedata).

### CustomDomainListResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

