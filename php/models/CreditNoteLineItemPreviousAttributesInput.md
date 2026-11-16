[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreditNoteLineItemPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `correction` | Optional | [CreditNoteCorrectionRequestPreviousAttributesInput](../models/CreditNoteCorrectionRequestPreviousAttributesInput.md#creditnotecorrectionrequestpreviousattributesinput) or null | The correction that produced this line, using the same shape accepted by draft writes. Amount corrections return the requested billed value in amount_money, equal to total_money. |
| `credit_note_line_item_id` | Optional | string or null | Unique identifier of the credit note line item. `credit_note_line_item_id`: [declared alternatives](../models/CreditNoteLineItemPreviousAttributesInput.md#creditnotelineitempreviousattributesinputcredit_note_line_item_id). |
| `discount_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | The credited share of the frozen line's remaining allocated merchandise discount, rounded half up in currency minor units. |
| `invoice_line_item_id` | Optional | string or null | The invoice snapshot line this corrects. `invoice_line_item_id`: [declared alternatives](../models/CreditNoteLineItemPreviousAttributesInput.md#creditnotelineitempreviousattributesinputinvoice_line_item_id). |
| `name` | Optional | string or null | Label of the credited invoice line. `name`: [declared alternatives](../models/CreditNoteLineItemPreviousAttributesInput.md#creditnotelineitempreviousattributesinputname). |
| `subtotal_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Credited subtotal before the credited discount, in the source line's inclusive or additive price units. Balances the total after tax and discount are rounded from the remaining pool; it is not a rounded per-unit price. |
| `tax_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | The credited share of the frozen line's remaining tax, rounded half up in currency minor units. Included tax is already part of total_money. Tax-exclusive consideration is total_money minus tax_money. |
| `total_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Billed value credited by this line. For inclusive tax, subtotal_money minus discount_money. For additive tax, subtotal_money minus discount_money plus tax_money. A full remaining-value correction consumes the exact remaining components. |

### CreditNoteLineItemPreviousAttributesInput.credit_note_line_item_id

### CreditNoteLineItemPreviousAttributesInput.credit_note_line_item_id variant 1

anyOf variant 1: Unique identifier of the credit note line item..

- Value shape: string. Unique identifier of the credit note line item. Unique identifier of the credit note line item. Example: `"cnli_01KEZF7C006N101PGMWKNHFD1J"`. 

### CreditNoteLineItemPreviousAttributesInput.credit_note_line_item_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier of the credit note line item. 

### CreditNoteLineItemPreviousAttributesInput.invoice_line_item_id

### CreditNoteLineItemPreviousAttributesInput.invoice_line_item_id variant 1

anyOf variant 1: The invoice snapshot line this corrects..

- Value shape: string. The invoice snapshot line this corrects. The invoice snapshot line this corrects. Example: `"invli_01KEZF7C00H767MAT1DY7ZWSVW"`. 

### CreditNoteLineItemPreviousAttributesInput.invoice_line_item_id variant 2

anyOf variant 2.

- Value shape: null. The invoice snapshot line this corrects. 

### CreditNoteLineItemPreviousAttributesInput.name

### CreditNoteLineItemPreviousAttributesInput.name variant 1

anyOf variant 1: Label of the credited invoice line..

- Value shape: string. Label of the credited invoice line. 

### CreditNoteLineItemPreviousAttributesInput.name variant 2

anyOf variant 2.

- Value shape: null. Label of the credited invoice line. 

