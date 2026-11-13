[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## MerchantSignupListResponse

A page of `MerchantSignup` objects.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | Array of [MerchantSignup](../models/MerchantSignup.md#merchantsignup) | Resource, collection, or operation result returned by this request. `data[]`: [field definitions](../models/MerchantSignupListResponse.md#merchantsignuplistresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `next_page_token` | Optional | string | Opaque token to send as `page_token` to retrieve the next page. Omitted when there is no next page. |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### MerchantSignupListResponse.data[]

A platform's request to create a merchant for an owner, who confirms it with a code Flint emails them. Once verified, it is the record of the owner's consent, kept for as long as the merchant exists.

Field definitions: [shared fields](MerchantSignupResponse.md#merchantsignupresponsedata).

### MerchantSignupListResponse.data[].requested_permissions[]

Field definitions: [MerchantSignupResponse.data.requested_permissions[]](../models/MerchantSignupResponse.md#merchantsignupresponsedatarequested_permissions).

### MerchantSignupListResponse.data[].terms_acceptance

Field definitions: [MerchantSignupResponse.data.terms_acceptance](../models/MerchantSignupResponse.md#merchantsignupresponsedataterms_acceptance).

### MerchantSignupListResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

