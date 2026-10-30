[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## IssueCreditNoteRequestInput

The request body for: Issue credit note.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allocation` | Optional | [CreditNoteIssueAllocationRequestInput](../models/CreditNoteIssueAllocationRequestInput.md#creditnoteissueallocationrequestinput) | Issue the credit note and apply credit to its invoice atomically. If the allocation fails, the note stays a draft. Omit amount_money to apply the smaller of the credit available after issue and the invoice's outstanding balance. Cannot be combined with refund. Credit to apply to the invoice when issuing a credit note. |
| `expected_version` | Optional | integer | Credit note version last read. Optional; a stale version returns VERSION_CONFLICT. Format: `int64`. minimum: `1`. |
| `refund` | Optional | [CreditNoteRefundRequestInput](../models/CreditNoteRefundRequestInput.md#creditnoterefundrequestinput) | Create a linked refund when the credit note is issued. Requires both credit-note and refund write permissions and a paid invoice. Cannot be combined with allocation. Refund details you supply when issuing a credit note: the reason, an optional message, and an optional amount. |

