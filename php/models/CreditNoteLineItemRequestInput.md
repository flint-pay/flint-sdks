[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreditNoteLineItemRequestInput

A credit note line you supply when creating or updating a credit note: the invoice line item it credits and how much, or an existing line to keep.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `correction` | Required | [CreditNoteCorrectionRequestInput](../models/CreditNoteCorrectionRequestInput.md#creditnotecorrectionrequestinput) | How much of the invoice line to credit, by quantity or by amount. How much of an invoice line item a credit note line credits, by whole `quantity` or by `amount`, chosen by `type`. |
| `credit_note_line_item_id` | Optional | string | Existing credit note line item to retain. Omit to create a new line item. minLength: `1`. |
| `invoice_line_item_id` | Required | string | The invoice snapshot line to credit. minLength: `1`. |

