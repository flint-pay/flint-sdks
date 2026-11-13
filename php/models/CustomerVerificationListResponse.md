[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CustomerVerificationListResponse

A page of `CustomerVerification` objects.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | Array of [CustomerVerification](../models/CustomerVerification.md#customerverification) | Resource, collection, or operation result returned by this request. `data[]`: [field definitions](../models/CustomerVerificationListResponse.md#customerverificationlistresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `next_page_token` | Optional | string | Opaque token to send as `page_token` to retrieve the next page. Omitted when there is no next page. |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### CustomerVerificationListResponse.data[]

An email verification requested for linking guest purchases.

Field definitions: [shared fields](CustomerVerificationInput.md#customerverificationinput).

### CustomerVerificationListResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

