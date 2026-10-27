[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreditNoteLineItemInput

One correction calculated from the frozen invoice line's remaining billed value, discount, and tax. The source line's inclusive or additive tax mode is preserved. Current catalog prices and tax settings do not affect the correction. Stored issued values are never recalculated by a read.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `correction` | Required | [CreditNoteCorrectionRequestInput](../models/CreditNoteCorrectionRequestInput.md#creditnotecorrectionrequestinput) | The correction that produced this line, using the same shape accepted by draft writes. Amount corrections return the requested billed value in amount_money, equal to total_money. How much of an invoice line item a credit note line credits, by whole `quantity` or by `amount`, chosen by `type`. |
| `credit_note_line_item_id` | Required | string | Unique identifier of the credit note line item. |
| `discount_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | The credited share of the frozen line's remaining allocated merchandise discount, rounded half up in currency minor units. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `invoice_line_item_id` | Required | string | The invoice snapshot line this corrects. |
| `name` | Required | string | Label of the credited invoice line. |
| `subtotal_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Credited subtotal before the credited discount, in the source line's inclusive or additive price units. Balances the total after tax and discount are rounded from the remaining pool; it is not a rounded per-unit price. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `tax_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | The credited share of the frozen line's remaining tax, rounded half up in currency minor units. Included tax is already part of total_money. Tax-exclusive consideration is total_money minus tax_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `total_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Billed value credited by this line. For inclusive tax, subtotal_money minus discount_money. For additive tax, subtotal_money minus discount_money plus tax_money. A full remaining-value correction consumes the exact remaining components. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

