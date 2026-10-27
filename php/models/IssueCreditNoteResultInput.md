[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## IssueCreditNoteResultInput

The issued credit note, its invoice after issue, and the linked allocation or refund when requested.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `credit_note` | Required | [CreditNoteInput](../models/CreditNoteInput.md#creditnoteinput) | The issued credit note. Its version is the target of expected_version. A correction against an issued invoice. Credit notes reduce what is owed; refunds return what was already collected. |
| `credit_note_allocation` | Optional | [CreditNoteAllocationInput](../models/CreditNoteAllocationInput.md#creditnoteallocationinput) | The linked allocation, present when allocation was requested. Its idempotency_key is issue: followed by the issue request's Idempotency-Key. One application of credit to the invoice. Allocations are append-only: a reversal sets reversed_at rather than removing the row. |
| `invoice` | Required | [InvoiceInput](../models/InvoiceInput.md#invoiceinput) | The invoice state after the credit note was issued. A bill issued to a customer. |
| `refund` | Optional | [RefundInput](../models/RefundInput.md#refundinput) | The linked refund, present when refund was requested. A pending refund has been accepted but has not completed. Money returned against a collected payment. |

