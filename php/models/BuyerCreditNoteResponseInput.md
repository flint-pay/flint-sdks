[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerCreditNoteResponseInput

A response containing `BuyerCreditNote` data.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [BuyerCreditNoteInput](../models/BuyerCreditNoteInput.md#buyercreditnoteinput) | The buyer-visible view of a credit note. Drafts are never returned, and how much credit is left to allocate is omitted. |
| `meta` | Optional | [ResponseMetaInput](../models/ResponseMetaInput.md#responsemetainput) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Optional | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"req_01KWM6WAHG3N9Q8T2V5XRZ7C4D"`. |

