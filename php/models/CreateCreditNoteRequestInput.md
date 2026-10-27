[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateCreditNoteRequestInput

The request body for: Create credit note.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `invoice_id` | Required | string | The invoice to correct. It has to be past draft and not voided. minLength: `1`. |
| `line_items` | Optional | Array of [CreditNoteLineItemRequestInput](../models/CreditNoteLineItemRequestInput.md#creditnotelineitemrequestinput) | Initial draft corrections. Omit or send [] to create an empty draft. Null is not accepted. |
| `memo` | Optional | string | Free text shown on the credit note, up to 4096 characters. minLength: `1`. maxLength: `4096`. |
| `reason` | Required | string | Why the invoice is being corrected: returned_goods, order_adjustment, billing_error, goodwill, or other. Shown on the credit note document. Values: `"returned_goods"`, `"order_adjustment"`, `"billing_error"`, `"goodwill"`, `"other"`. |

