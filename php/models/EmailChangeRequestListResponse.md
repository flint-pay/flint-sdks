[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## EmailChangeRequestListResponse

A page of `EmailChangeRequest` objects.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | Array of [EmailChangeRequest](../models/EmailChangeRequest.md#emailchangerequest) | Resource, collection, or operation result returned by this request. `data[]`: [field definitions](../models/EmailChangeRequestListResponse.md#emailchangerequestlistresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `next_page_token` | Optional | string | Opaque token to send as `page_token` to retrieve the next page. Omitted when there is no next page. |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### EmailChangeRequestListResponse.data[]

Nested child of Customer. A request to change this customer's sign-in email. Only one request can be pending per customer.

Field definitions: [shared fields](EmailChangeRequestInput.md#emailchangerequestinput).

### EmailChangeRequestListResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

