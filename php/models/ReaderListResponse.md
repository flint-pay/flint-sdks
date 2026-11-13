[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReaderListResponse

A page of `Reader` objects.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | Array of [Reader](../models/Reader.md#reader) | Resource, collection, or operation result returned by this request. `data[]`: [field definitions](../models/ReaderListResponse.md#readerlistresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `next_page_token` | Optional | string | Opaque token to send as `page_token` to retrieve the next page. Omitted when there is no next page. |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### ReaderListResponse.data[]

A card reader or Tap to Pay phone that takes in-person payments at a location.

Field definitions: [shared fields](ReaderResponse.md#readerresponsedata).

### ReaderListResponse.data[].connectivity

Field definitions: [ReaderResponse.data.connectivity](../models/ReaderResponse.md#readerresponsedataconnectivity).

### ReaderListResponse.data[].metadata

Field definitions: [ReaderResponse.data.metadata](../models/ReaderResponse.md#readerresponsedatametadata).

### ReaderListResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

