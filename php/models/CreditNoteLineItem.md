[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreditNoteLineItem

One correction calculated from the frozen invoice line's remaining billed value, discount, and tax. The source line's inclusive or additive tax mode is preserved. Current catalog prices and tax settings do not affect the correction. Stored issued values are never recalculated by a read.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `correction` | Required | object and Alternative shapes (see declared variants) | The correction that produced this line, using the same shape accepted by draft writes. Amount corrections return the requested billed value in amount_money, equal to total_money. How much of an invoice line item a credit note line credits, by whole `quantity` or by `amount`, chosen by `type`. `correction`: [declared alternatives](../models/CreditNoteResponse.md#creditnoteresponsedataline_itemscorrection). |
| `credit_note_line_item_id` | Required | string | Unique identifier of the credit note line item. |
| `discount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The credited share of the frozen line's remaining allocated merchandise discount, rounded half up in currency minor units. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `invoice_line_item_id` | Required | string | The invoice snapshot line this corrects. |
| `name` | Required | string | Label of the credited invoice line. |
| `subtotal_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Credited subtotal before the credited discount, in the source line's inclusive or additive price units. Balances the total after tax and discount are rounded from the remaining pool; it is not a rounded per-unit price. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `tax_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The credited share of the frozen line's remaining tax, rounded half up in currency minor units. Included tax is already part of total_money. Tax-exclusive consideration is total_money minus tax_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `total_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Billed value credited by this line. For inclusive tax, subtotal_money minus discount_money. For additive tax, subtotal_money minus discount_money plus tax_money. A full remaining-value correction consumes the exact remaining components. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

### CreditNoteLineItem.correction

Declared alternatives: [CreditNoteResponse.data.line_items[].correction](../models/CreditNoteResponse.md#creditnoteresponsedataline_itemscorrection).

