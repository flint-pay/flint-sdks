[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## IssueCreditNoteResult

The issued credit note, its invoice after issue, and the linked allocation or refund when requested.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `credit_note` | Required | [CreditNote](../models/CreditNote.md#creditnote) | The issued credit note. Its version is the target of expected_version. A correction against an issued invoice. Credit notes reduce what is owed; refunds return what was already collected. |
| `credit_note_allocation` | Optional | [CreditNoteAllocation](../models/CreditNoteAllocation.md#creditnoteallocation) | The linked allocation, present when allocation was requested. Its idempotency_key is issue: followed by the issue request's Idempotency-Key. One application of credit to the invoice. Allocations are append-only: a reversal sets reversed_at rather than removing the row. |
| `invoice` | Required | [Invoice](../models/Invoice.md#invoice) | The invoice state after the credit note was issued. A bill issued to a customer. |
| `refund` | Optional | [Refund](../models/Refund.md#refund) | The linked refund, present when refund was requested. A pending refund has been accepted but has not completed. Money returned against a collected payment. |

