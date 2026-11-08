[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PartnerAppCredentialListResponse

A page of `PartnerAppCredential` objects.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | Array of [PartnerAppCredential](../models/PartnerAppCredential.md#partnerappcredential) | Resource, collection, or operation result returned by this request. `data[]`: [field definitions](../models/PartnerAppCredentialListResponse.md#partnerappcredentiallistresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `next_page_token` | Optional | string | Opaque token to send as `page_token` to retrieve the next page. Omitted when there is no next page. |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### PartnerAppCredentialListResponse.data[]

An immutable partner app credential, including its authentication status and usage timestamps.

Field definitions: [shared fields](PartnerAppCredentialResponse.md#partnerappcredentialresponsedata).

### PartnerAppCredentialListResponse.data[].jwks_url

Field definitions: [PartnerAppCredentialResponse.data.jwks_url](../models/PartnerAppCredentialResponse.md#partnerappcredentialresponsedatajwks_url).

### PartnerAppCredentialListResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

