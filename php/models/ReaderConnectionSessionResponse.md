[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReaderConnectionSessionResponse

A response containing `ReaderConnectionSession` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [ReaderConnectionSession](../models/ReaderConnectionSession.md#readerconnectionsession) | Resource, collection, or operation result returned by this request. A Tap to Pay connection session: a fresh single-use Stripe Terminal connection token for the reader's location, returned only in the response that creates it. `data`: [field definitions](../models/ReaderConnectionSessionResponse.md#readerconnectionsessionresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### ReaderConnectionSessionResponse.data

Resource, collection, or operation result returned by this request. A Tap to Pay connection session: a fresh single-use Stripe Terminal connection token for the reader's location, returned only in the response that creates it.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `client_session` | Required | [ReaderConnectionSessionClientSession](../models/ReaderConnectionSessionClientSession.md#readerconnectionsessionclientsession) | What the Stripe Terminal SDK takes. Appears only in this response, never on the reader, in lists or in webhooks. Stripe Terminal SDK inputs for one connection. |
| `location_id` | Required | string | The reader's Flint location. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. |
| `reader_id` | Required | string | The Tap to Pay reader the session is for. Example: `"rdr_01KEZF7C007JA0G24M7SD6P46C"`. |

### ReaderConnectionSessionResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

