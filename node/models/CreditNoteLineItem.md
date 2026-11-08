[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreditNoteLineItem

One correction calculated from the frozen invoice line's remaining billed value, discount, and tax. The source line's inclusive or additive tax mode is preserved. Current catalog prices and tax settings do not affect the correction. Stored issued values are never recalculated by a read.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `correction` | Required | [CreditNoteCorrectionRequest](../models/CreditNoteCorrectionRequest.md#creditnotecorrectionrequest) | The correction that produced this line, using the same shape accepted by draft writes. Amount corrections return the requested billed value in amount_money, equal to total_money. How much of an invoice line item a credit note line credits, by whole `quantity` or by `amount`, chosen by `type`. `correction`: [declared alternatives](../models/CreditNoteLineItem.md#creditnotelineitemcorrection). |
| `credit_note_line_item_id` | Required | string | Unique identifier of the credit note line item. Example: `"cnli_01KEZF7C006N101PGMWKNHFD1J"`. |
| `discount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The credited share of the frozen line's remaining allocated merchandise discount, rounded half up in currency minor units. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `discount_money`: [field definitions](../models/CreditNoteLineItem.md#creditnotelineitemdiscount_money). |
| `invoice_line_item_id` | Required | string | The invoice snapshot line this corrects. Example: `"invli_01KEZF7C00H767MAT1DY7ZWSVW"`. |
| `name` | Required | string | Label of the credited invoice line. |
| `subtotal_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Credited subtotal before the credited discount, in the source line's inclusive or additive price units. Balances the total after tax and discount are rounded from the remaining pool; it is not a rounded per-unit price. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `subtotal_money`: [field definitions](../models/CreditNoteLineItem.md#creditnotelineitemsubtotal_money). |
| `tax_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The credited share of the frozen line's remaining tax, rounded half up in currency minor units. Included tax is already part of total_money. Tax-exclusive consideration is total_money minus tax_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `tax_money`: [field definitions](../models/CreditNoteLineItem.md#creditnotelineitemtax_money). |
| `total_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Billed value credited by this line. For inclusive tax, subtotal_money minus discount_money. For additive tax, subtotal_money minus discount_money plus tax_money. A full remaining-value correction consumes the exact remaining components. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `total_money`: [field definitions](../models/CreditNoteLineItem.md#creditnotelineitemtotal_money). |

### CreditNoteLineItem.correction

The correction that produced this line, using the same shape accepted by draft writes. Amount corrections return the requested billed value in amount_money, equal to total_money. How much of an invoice line item a credit note line credits, by whole `quantity` or by `amount`, chosen by `type`.

Field definitions: [shared fields](CreditNoteCorrectionRequest.md#creditnotecorrectionrequest).

### CreditNoteLineItem.correction variant 1: `type` = `"quantity"`

oneOf with type: "quantity": The `quantity` variant of `CreditNoteCorrectionRequest`..

- Condition: not (present(`amount_money`)).
- Required: `quantity`.
- Optional: `amount_money`.
- Constraints for `type`: Values: `"quantity"`.

### CreditNoteLineItem.correction variant 2: `type` = `"amount"`

oneOf with type: "amount": The `amount` variant of `CreditNoteCorrectionRequest`..

- Condition: not (present(`quantity`)).
- Required: `amount_money`.
- Optional: `quantity`.
- Constraints for `type`: Values: `"amount"`.

### CreditNoteLineItem.correction.amount_money

Field definitions: [CreditNoteCorrectionRequest.amount_money](../models/CreditNoteCorrectionRequest.md#creditnotecorrectionrequestamount_money).

### CreditNoteLineItem.discount_money

The credited share of the frozen line's remaining allocated merchandise discount, rounded half up in currency minor units. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### CreditNoteLineItem.subtotal_money

Credited subtotal before the credited discount, in the source line's inclusive or additive price units. Balances the total after tax and discount are rounded from the remaining pool; it is not a rounded per-unit price. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### CreditNoteLineItem.tax_money

The credited share of the frozen line's remaining tax, rounded half up in currency minor units. Included tax is already part of total_money. Tax-exclusive consideration is total_money minus tax_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### CreditNoteLineItem.total_money

Billed value credited by this line. For inclusive tax, subtotal_money minus discount_money. For additive tax, subtotal_money minus discount_money plus tax_money. A full remaining-value correction consumes the exact remaining components. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

