[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PartnerAppListResponse

A page of `PartnerApp` objects.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | Array of [PartnerApp](../models/PartnerApp.md#partnerapp) | Resource, collection, or operation result returned by this request. `data[]`: [field definitions](../models/PartnerAppListResponse.md#partnerapplistresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `next_page_token` | Optional | string | Opaque token to send as `page_token` to retrieve the next page. Omitted when there is no next page. |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### PartnerAppListResponse.data[]

An application that merchants can authorize to access their accounts.

Field definitions: [shared fields](PartnerAppResponse.md#partnerappresponsedata).

### PartnerAppListResponse.data[].permission_manifest[]

Field definitions: [PartnerAppResponse.data.permission_manifest[]](../models/PartnerAppResponse.md#partnerappresponsedatapermission_manifest).

### PartnerAppListResponse.data[].platform

Field definitions: [PartnerAppResponse.data.platform](../models/PartnerAppResponse.md#partnerappresponsedataplatform).

### PartnerAppListResponse.data[].platform_profile

Field definitions: [PartnerAppResponse.data.platform_profile](../models/PartnerAppResponse.md#partnerappresponsedataplatform_profile).

### PartnerAppListResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

