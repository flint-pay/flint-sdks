[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreditNotesCreateAllocationResponse201

A response containing `CreditNoteAllocationResult` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [CreditNoteAllocationResult](../models/CreditNoteAllocationResult.md#creditnoteallocationresult) | The allocation, the credit note with its new available_money, and the recomputed invoice. |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Optional | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

