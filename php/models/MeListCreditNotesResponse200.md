[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## MeListCreditNotesResponse200

A page of `BuyerCreditNote` objects.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | Array of [BuyerCreditNote](../models/BuyerCreditNote.md#buyercreditnote) | `data[]`: [field definitions](../models/MeGetCreditNoteResponse200.md#megetcreditnoteresponse200data). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `next_page_token` | Optional | string |  |
| `request_id` | Required | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### MeListCreditNotesResponse200.data[]

Field definitions: [MeGetCreditNoteResponse200.data](../models/MeGetCreditNoteResponse200.md#megetcreditnoteresponse200data).

