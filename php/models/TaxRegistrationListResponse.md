[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## TaxRegistrationListResponse

A page of `TaxRegistration` objects.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | Array of [TaxRegistration](../models/TaxRegistration.md#taxregistration) | Resource, collection, or operation result returned by this request. `data[]`: [field definitions](../models/TaxRegistrationListResponse.md#taxregistrationlistresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `next_page_token` | Optional | string | Opaque token to send as `page_token` to retrieve the next page. Omitted when there is no next page. |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### TaxRegistrationListResponse.data[]

An independent registration for a country and optional subdivision, with a non-overlapping date window. Scheduled and ended are derived from the UTC date at read time without advancing version or sending a webhook. Removed is a final DELETE snapshot and is never listed.

Field definitions: [shared fields](TaxRegistrationResponse.md#taxregistrationresponsedata).

### TaxRegistrationListResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

