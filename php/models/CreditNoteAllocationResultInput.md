[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreditNoteAllocationResultInput

The allocation, the credit note with its new available_money, and the recomputed invoice.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `credit_note` | Required | [CreditNoteInput](../models/CreditNoteInput.md#creditnoteinput) | The credit note with its recomputed available_money and allocated_money. A correction against an issued invoice. Credit notes reduce what is owed; refunds return what was already collected. |
| `credit_note_allocation` | Required | [CreditNoteAllocationInput](../models/CreditNoteAllocationInput.md#creditnoteallocationinput) | The allocation that was created or reversed. One application of credit to the invoice. Allocations are append-only: a reversal sets reversed_at rather than removing the row. |
| `invoice` | Required | [InvoiceInput](../models/InvoiceInput.md#invoiceinput) | The invoice with its recomputed outstanding balance and status. A bill issued to a customer. |

