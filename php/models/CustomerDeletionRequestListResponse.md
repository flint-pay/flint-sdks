[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CustomerDeletionRequestListResponse

A page of tracked customer deletion requests.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | Array of [CustomerDeletionRequest](../models/CustomerDeletionRequest.md#customerdeletionrequest) | Deletion requests matching the supplied filters, in the published list order. `data[]`: [field definitions](../models/CustomerDeletionRequestListResponse.md#customerdeletionrequestlistresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata about this response, including warnings when present. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/CustomerDeletionRequestListResponse.md#customerdeletionrequestlistresponsemeta). |
| `next_page_token` | Optional | string | Opaque cursor to pass as page_token to fetch the next page. Omitted when no more results remain. |
| `request_id` | Required | string | ID of this API request. Include it when asking Flint to investigate the response. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### CustomerDeletionRequestListResponse.data[]

A request to delete a customer's personal information.

Field definitions: [shared fields](CustomerDeletionRequestResponse.md#customerdeletionrequestresponsedata).

### CustomerDeletionRequestListResponse.data[].blocking_resources[]

Field definitions: [CustomerDeletionRequestResponse.data.blocking_resources[]](../models/CustomerDeletionRequestResponse.md#customerdeletionrequestresponsedatablocking_resources).

### CustomerDeletionRequestListResponse.meta

Metadata about this response, including warnings when present. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings.

Field definitions: [shared fields](DisputeResponse.md#disputeresponsemeta).

### CustomerDeletionRequestListResponse.meta.warnings[]

Field definitions: [DisputeResponse.meta.warnings[]](../models/DisputeResponse.md#disputeresponsemetawarnings).

