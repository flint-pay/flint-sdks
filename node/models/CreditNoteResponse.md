[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreditNoteResponse

A response containing `CreditNote` data.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [CreditNote](../models/CreditNote.md#creditnote) | A correction against an issued invoice. Credit notes reduce what is owed; refunds return what was already collected. |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Required | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"req_01KWM6WAHG3N9Q8T2V5XRZ7C4D"`. |

