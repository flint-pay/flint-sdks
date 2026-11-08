[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreditNoteLineItemRequest

A credit note line you supply when creating or updating a credit note: the invoice line item it credits and how much, or an existing line to keep.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `correction` | Required | [CreditNoteCorrectionRequest](../models/CreditNoteCorrectionRequest.md#creditnotecorrectionrequest) | How much of the invoice line to credit, by quantity or by amount. How much of an invoice line item a credit note line credits, by whole `quantity` or by `amount`, chosen by `type`. `correction`: [declared alternatives](../models/CreditNoteLineItemRequest.md#creditnotelineitemrequestcorrection). |
| `credit_note_line_item_id` | Optional | string | Existing credit note line item to retain. Omit to create a new line item. minLength: `1`. Example: `"cnli_01KEZF7C006N101PGMWKNHFD1J"`. |
| `invoice_line_item_id` | Required | string | The invoice snapshot line to credit. minLength: `1`. Example: `"invli_01KEZF7C00H767MAT1DY7ZWSVW"`. |

### CreditNoteLineItemRequest.correction

How much of the invoice line to credit, by quantity or by amount. How much of an invoice line item a credit note line credits, by whole `quantity` or by `amount`, chosen by `type`.

Field definitions: [shared fields](CreditNoteCorrectionRequest.md#creditnotecorrectionrequest).

### CreditNoteLineItemRequest.correction variant 1: `type` = `"quantity"`

oneOf with type: "quantity": The `quantity` variant of `CreditNoteCorrectionRequest`..

- Condition: not (present(`amount_money`)).
- Required: `quantity`.
- Optional: `amount_money`.
- Constraints for `type`: Values: `"quantity"`.

### CreditNoteLineItemRequest.correction variant 2: `type` = `"amount"`

oneOf with type: "amount": The `amount` variant of `CreditNoteCorrectionRequest`..

- Condition: not (present(`quantity`)).
- Required: `amount_money`.
- Optional: `quantity`.
- Constraints for `type`: Values: `"amount"`.

### CreditNoteLineItemRequest.correction.amount_money

Field definitions: [CreditNoteCorrectionRequest.amount_money](../models/CreditNoteCorrectionRequest.md#creditnotecorrectionrequestamount_money).

