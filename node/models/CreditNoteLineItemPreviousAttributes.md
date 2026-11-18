[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreditNoteLineItemPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `correction` | Optional | [CreditNoteCorrectionRequestPreviousAttributes](../models/CreditNoteCorrectionRequestPreviousAttributes.md#creditnotecorrectionrequestpreviousattributes) or null | The correction that produced this line, using the same shape accepted by draft writes. Amount corrections return the requested billed value in amount_money, equal to total_money. |
| `credit_note_line_item_id` | Optional | string or null | Unique identifier of the credit note line item. `credit_note_line_item_id`: [declared alternatives](../models/CreditNoteLineItemPreviousAttributes.md#creditnotelineitempreviousattributescredit_note_line_item_id). |
| `discount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The credited share of the frozen line's remaining allocated merchandise discount, rounded half up in currency minor units. `discount_money`: [declared alternatives](../models/CreditNoteLineItemPreviousAttributes.md#creditnotelineitempreviousattributesdiscount_money). |
| `invoice_line_item_id` | Optional | string or null | The invoice snapshot line this corrects. `invoice_line_item_id`: [declared alternatives](../models/CreditNoteLineItemPreviousAttributes.md#creditnotelineitempreviousattributesinvoice_line_item_id). |
| `name` | Optional | string or null | Label of the credited invoice line. `name`: [declared alternatives](../models/CreditNoteLineItemPreviousAttributes.md#creditnotelineitempreviousattributesname). |
| `subtotal_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Credited subtotal before the credited discount, in the source line's inclusive or additive price units. Balances the total after tax and discount are rounded from the remaining pool; it is not a rounded per-unit price. `subtotal_money`: [declared alternatives](../models/CreditNoteLineItemPreviousAttributes.md#creditnotelineitempreviousattributessubtotal_money). |
| `tax_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The credited share of the frozen line's remaining tax, rounded half up in currency minor units. Included tax is already part of total_money. Tax-exclusive consideration is total_money minus tax_money. `tax_money`: [declared alternatives](../models/CreditNoteLineItemPreviousAttributes.md#creditnotelineitempreviousattributestax_money). |
| `total_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Billed value credited by this line. For inclusive tax, subtotal_money minus discount_money. For additive tax, subtotal_money minus discount_money plus tax_money. A full remaining-value correction consumes the exact remaining components. `total_money`: [declared alternatives](../models/CreditNoteLineItemPreviousAttributes.md#creditnotelineitempreviousattributestotal_money). |

### CreditNoteLineItemPreviousAttributes.credit_note_line_item_id

### CreditNoteLineItemPreviousAttributes.credit_note_line_item_id variant 1

anyOf variant 1: Unique identifier of the credit note line item..

- Value shape: string. Unique identifier of the credit note line item. Unique identifier of the credit note line item. Example: `"cnli_01KEZF7C006N101PGMWKNHFD1J"`. 

### CreditNoteLineItemPreviousAttributes.credit_note_line_item_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier of the credit note line item. 

### CreditNoteLineItemPreviousAttributes.discount_money

The credited share of the frozen line's remaining allocated merchandise discount, rounded half up in currency minor units.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### CreditNoteLineItemPreviousAttributes.discount_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### CreditNoteLineItemPreviousAttributes.discount_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. The credited share of the frozen line's remaining allocated merchandise discount, rounded half up in currency minor units. 

### CreditNoteLineItemPreviousAttributes.discount_money variant 1.amount

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.amount](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1amount).

### CreditNoteLineItemPreviousAttributes.discount_money variant 1.currency

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.currency](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1currency).

### CreditNoteLineItemPreviousAttributes.invoice_line_item_id

### CreditNoteLineItemPreviousAttributes.invoice_line_item_id variant 1

anyOf variant 1: The invoice snapshot line this corrects..

- Value shape: string. The invoice snapshot line this corrects. The invoice snapshot line this corrects. Example: `"invli_01KEZF7C00H767MAT1DY7ZWSVW"`. 

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

### CreditNoteLineItemPreviousAttributes.subtotal_money

Credited subtotal before the credited discount, in the source line's inclusive or additive price units. Balances the total after tax and discount are rounded from the remaining pool; it is not a rounded per-unit price.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### CreditNoteLineItemPreviousAttributes.subtotal_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### CreditNoteLineItemPreviousAttributes.subtotal_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Credited subtotal before the credited discount, in the source line's inclusive or additive price units. Balances the total after tax and discount are rounded from the remaining pool; it is not a rounded per-unit price. 

### CreditNoteLineItemPreviousAttributes.subtotal_money variant 1.amount

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.amount](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1amount).

### CreditNoteLineItemPreviousAttributes.subtotal_money variant 1.currency

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.currency](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1currency).

### CreditNoteLineItemPreviousAttributes.tax_money

The credited share of the frozen line's remaining tax, rounded half up in currency minor units. Included tax is already part of total_money. Tax-exclusive consideration is total_money minus tax_money.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### CreditNoteLineItemPreviousAttributes.tax_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### CreditNoteLineItemPreviousAttributes.tax_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. The credited share of the frozen line's remaining tax, rounded half up in currency minor units. Included tax is already part of total_money. Tax-exclusive consideration is total_money minus tax_money. 

### CreditNoteLineItemPreviousAttributes.tax_money variant 1.amount

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.amount](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1amount).

### CreditNoteLineItemPreviousAttributes.tax_money variant 1.currency

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.currency](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1currency).

### CreditNoteLineItemPreviousAttributes.total_money

Billed value credited by this line. For inclusive tax, subtotal_money minus discount_money. For additive tax, subtotal_money minus discount_money plus tax_money. A full remaining-value correction consumes the exact remaining components.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### CreditNoteLineItemPreviousAttributes.total_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### CreditNoteLineItemPreviousAttributes.total_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Billed value credited by this line. For inclusive tax, subtotal_money minus discount_money. For additive tax, subtotal_money minus discount_money plus tax_money. A full remaining-value correction consumes the exact remaining components. 

### CreditNoteLineItemPreviousAttributes.total_money variant 1.amount

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.amount](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1amount).

### CreditNoteLineItemPreviousAttributes.total_money variant 1.currency

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.currency](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1currency).

