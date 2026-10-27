[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreditNoteAllocationResult

The allocation, the credit note with its new available_money, and the recomputed invoice.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `credit_note` | Required | [CreditNote](../models/CreditNote.md#creditnote) | The credit note with its recomputed available_money and allocated_money. A correction against an issued invoice. Credit notes reduce what is owed; refunds return what was already collected. |
| `credit_note_allocation` | Required | [CreditNoteAllocation](../models/CreditNoteAllocation.md#creditnoteallocation) | The allocation that was created or reversed. One application of credit to the invoice. Allocations are append-only: a reversal sets reversed_at rather than removing the row. |
| `invoice` | Required | [Invoice](../models/Invoice.md#invoice) | The invoice with its recomputed outstanding balance and status. A bill issued to a customer. |

