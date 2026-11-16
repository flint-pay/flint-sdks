[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreditNoteLineItemPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `correction` | Optional | object and Alternative shapes (see declared variants) or null | The correction that produced this line, using the same shape accepted by draft writes. Amount corrections return the requested billed value in amount_money, equal to total_money. `correction`: [declared alternatives](../models/CreditNoteLineItemPreviousAttributes.md#creditnotelineitempreviousattributescorrection). |
| `credit_note_line_item_id` | Optional | string or null | Unique identifier of the credit note line item. `credit_note_line_item_id`: [declared alternatives](../models/CreditNoteLineItemPreviousAttributes.md#creditnotelineitempreviousattributescredit_note_line_item_id). |
| `discount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The credited share of the frozen line's remaining allocated merchandise discount, rounded half up in currency minor units. |
| `invoice_line_item_id` | Optional | string or null | The invoice snapshot line this corrects. `invoice_line_item_id`: [declared alternatives](../models/CreditNoteLineItemPreviousAttributes.md#creditnotelineitempreviousattributesinvoice_line_item_id). |
| `name` | Optional | string or null | Label of the credited invoice line. `name`: [declared alternatives](../models/CreditNoteLineItemPreviousAttributes.md#creditnotelineitempreviousattributesname). |
| `subtotal_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Credited subtotal before the credited discount, in the source line's inclusive or additive price units. Balances the total after tax and discount are rounded from the remaining pool; it is not a rounded per-unit price. |
| `tax_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The credited share of the frozen line's remaining tax, rounded half up in currency minor units. Included tax is already part of total_money. Tax-exclusive consideration is total_money minus tax_money. |
| `total_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Billed value credited by this line. For inclusive tax, subtotal_money minus discount_money. For additive tax, subtotal_money minus discount_money plus tax_money. A full remaining-value correction consumes the exact remaining components. |

### CreditNoteLineItemPreviousAttributes.correction

The correction that produced this line, using the same shape accepted by draft writes. Amount corrections return the requested billed value in amount_money, equal to total_money.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Conditional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Positive billed value to credit in the invoice currency, no more than the frozen source line's remaining value. Consumes proportional remaining tax and discount without consuming quantity; later quantity corrections use the reduced remaining value. |
| `quantity` | Conditional | integer or null | Positive whole units; fractional quantities are not supported. No more than the source line's remaining uncredited quantity. Credits that fraction of its remaining billed value, rounded half up once at line level. Earlier amount corrections reduce that remaining value without consuming quantity. A share that rounds to zero is rejected; use a larger quantity or a positive amount. `quantity`: [declared alternatives](../models/CreditNoteLineItemPreviousAttributes.md#creditnotelineitempreviousattributescorrection-variant-1quantity). |
| `type` | Conditional | (string or null) | quantity credits whole units and requires quantity. amount credits a named figure and requires amount_money. The two are mutually exclusive. Values: `"quantity"`, `"amount"`. `type`: [declared alternatives](../models/CreditNoteLineItemPreviousAttributes.md#creditnotelineitempreviousattributescorrection-variant-1type), [declared alternatives](../models/CreditNoteLineItemPreviousAttributes.md#creditnotelineitempreviousattributescorrection-variant-2type). |

### CreditNoteLineItemPreviousAttributes.correction variant 1: `type` = `"quantity"`

anyOf CreditNoteCorrectionRequestPreviousAttributes; anyOf CreditNoteCorrectionRequestQuantityPreviousAttributes.

- Optional: `amount_money`, `quantity`, `type`.
- Constraints for `type`: Values: `"quantity"`.

### CreditNoteLineItemPreviousAttributes.correction variant 2: `type` = `"amount"`

anyOf CreditNoteCorrectionRequestPreviousAttributes; anyOf CreditNoteCorrectionRequestAmountPreviousAttributes.

- Optional: `amount_money`, `quantity`, `type`.
- Constraints for `type`: Values: `"amount"`.

### CreditNoteLineItemPreviousAttributes.correction variant 3

anyOf variant 2.

- Undeclared: `amount_money`, `quantity`, `type`.
- Value shape: null. The correction that produced this line, using the same shape accepted by draft writes. Amount corrections return the requested billed value in amount_money, equal to total_money. 

### CreditNoteLineItemPreviousAttributes.correction variant 1.quantity

### CreditNoteLineItemPreviousAttributes.correction variant 1.quantity variant 1

anyOf variant 1: Positive whole units; fractional quantities are not supported. No more than the source line's remaining uncredited quantity. Credits that fraction of its remaining billed value, rounded half up once at line level. Earlier amount corrections reduce that remaining value without consuming quantity. A share that rounds to zero is rejected; use a larger quantity or a positive amount..

- Value shape: integer. Positive whole units; fractional quantities are not supported. No more than the source line's remaining uncredited quantity. Credits that fraction of its remaining billed value, rounded half up once at line level. Earlier amount corrections reduce that remaining value without consuming quantity. A share that rounds to zero is rejected; use a larger quantity or a positive amount. Positive whole units; fractional quantities are not supported. No more than the source line's remaining uncredited quantity. Credits that fraction of its remaining billed value, rounded half up once at line level. Earlier amount corrections reduce that remaining value without consuming quantity. A share that rounds to zero is rejected; use a larger quantity or a positive amount. Format: `int64`. 

### CreditNoteLineItemPreviousAttributes.correction variant 1.quantity variant 2

anyOf variant 2.

- Value shape: null. Positive whole units; fractional quantities are not supported. No more than the source line's remaining uncredited quantity. Credits that fraction of its remaining billed value, rounded half up once at line level. Earlier amount corrections reduce that remaining value without consuming quantity. A share that rounds to zero is rejected; use a larger quantity or a positive amount. 

### CreditNoteLineItemPreviousAttributes.correction variant 1.type

### CreditNoteLineItemPreviousAttributes.correction variant 1.type variant 1

anyOf group 1 variant 1: quantity credits whole units and requires quantity. amount credits a named figure and requires amount_money. The two are mutually exclusive..

- Value shape: string. quantity credits whole units and requires quantity. amount credits a named figure and requires amount_money. The two are mutually exclusive. Values: `"quantity"`, `"amount"`.

### CreditNoteLineItemPreviousAttributes.correction variant 1.type variant 2, 4

anyOf group 1 variant 2; anyOf group 2 variant 2.

- Value shape: null. quantity credits whole units and requires quantity. amount credits a named figure and requires amount_money. The two are mutually exclusive. 

### CreditNoteLineItemPreviousAttributes.correction variant 1.type variant 3

anyOf group 2 variant 1: quantity credits whole units and requires quantity. amount credits a named figure and requires amount_money. The two are mutually exclusive..

- Value shape: string. quantity credits whole units and requires quantity. amount credits a named figure and requires amount_money. The two are mutually exclusive. Values: `"quantity"`.

### CreditNoteLineItemPreviousAttributes.correction variant 2.quantity

Declared alternatives: [CreditNoteLineItemPreviousAttributes.correction variant 1.quantity](../models/CreditNoteLineItemPreviousAttributes.md#creditnotelineitempreviousattributescorrection-variant-1quantity).

### CreditNoteLineItemPreviousAttributes.correction variant 2.type

### CreditNoteLineItemPreviousAttributes.correction variant 2.type variant 1

anyOf group 1 variant 1: quantity credits whole units and requires quantity. amount credits a named figure and requires amount_money. The two are mutually exclusive..

- Value shape: string. quantity credits whole units and requires quantity. amount credits a named figure and requires amount_money. The two are mutually exclusive. Values: `"quantity"`, `"amount"`.

### CreditNoteLineItemPreviousAttributes.correction variant 2.type variant 2, 4

anyOf group 1 variant 2; anyOf group 2 variant 2.

- Value shape: null. quantity credits whole units and requires quantity. amount credits a named figure and requires amount_money. The two are mutually exclusive. 

### CreditNoteLineItemPreviousAttributes.correction variant 2.type variant 3

anyOf group 2 variant 1: quantity credits whole units and requires quantity. amount credits a named figure and requires amount_money. The two are mutually exclusive..

- Value shape: string. quantity credits whole units and requires quantity. amount credits a named figure and requires amount_money. The two are mutually exclusive. Values: `"amount"`.

### CreditNoteLineItemPreviousAttributes.credit_note_line_item_id

### CreditNoteLineItemPreviousAttributes.credit_note_line_item_id variant 1

anyOf variant 1: Unique identifier of the credit note line item..

- Value shape: string. Unique identifier of the credit note line item. 

### CreditNoteLineItemPreviousAttributes.credit_note_line_item_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier of the credit note line item. 

### CreditNoteLineItemPreviousAttributes.invoice_line_item_id

### CreditNoteLineItemPreviousAttributes.invoice_line_item_id variant 1

anyOf variant 1: The invoice snapshot line this corrects..

- Value shape: string. The invoice snapshot line this corrects. 

### CreditNoteLineItemPreviousAttributes.invoice_line_item_id variant 2

anyOf variant 2.

- Value shape: null. The invoice snapshot line this corrects. 

### CreditNoteLineItemPreviousAttributes.name

### CreditNoteLineItemPreviousAttributes.name variant 1

anyOf variant 1: Label of the credited invoice line..

- Value shape: string. Label of the credited invoice line. 

### CreditNoteLineItemPreviousAttributes.name variant 2

anyOf variant 2.

- Value shape: null. Label of the credited invoice line. 

