[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreditNoteListResponse

A page of `CreditNote` objects.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | Array of [CreditNote](../models/CreditNote.md#creditnote) | `data[]`: [field definitions](../models/CreditNoteResponse.md#creditnoteresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `next_page_token` | Optional | string |  |
| `request_id` | Required | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### CreditNoteListResponse.data[]

Field definitions: [CreditNoteResponse.data](../models/CreditNoteResponse.md#creditnoteresponsedata).

