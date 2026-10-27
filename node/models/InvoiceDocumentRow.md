[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceDocumentRow

One row of an invoice document, such as a subtotal, discount, tax, late fee, payment, or amount due, with its amount.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The row's signed amount. Informational rows do not contribute to the sum. Signed monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/InvoiceDocumentRow.md#invoicedocumentrowamount_money). |
| `credit_note_number` | Optional | string | Number of the credit note a credit note row names. |
| `is_informational` | Required | boolean | Whether the row is shown for information and left out of the sum, such as tax already included in prices, tax not applied, or money refunded to the buyer. A closing `total` or `amount_due` row is informational and states the sum. An opening or sole `total` row contributes to the sum. |
| `kind` | Required | string | Values: [14 declared values](#invoicedocumentrow-kind-values). |
| `name` | Optional | string | Discount, charge, or tax jurisdiction name. |
| `occurred_at` | Optional | string | When the late fee was assessed or waived, or the credit note issued. Format: `date-time`. |
| `percent` | Optional | number | Rate of a percent-based charge or a tax row, in percent units. multipleOf: `0.0001`. |
| `promotion_code` | Optional | string | Promotion code of a discount row. |
| `tax_type` | Optional | string | Values: `"sales_tax"`, `"use_tax"`, `"retail_delivery_fee"`. |
| `taxability_reason` | Optional | string | Values: `"standard_rated"`, `"not_taxable"`, `"customer_exempt"`, `"tax_disabled"`, `"location_required"`, `"calculation_incomplete"`. |
| `taxable_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Taxable amount of a tax row. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `taxable_money`: [field definitions](../models/InvoiceDocumentRow.md#invoicedocumentrowtaxable_money). |

#### InvoiceDocumentRow kind values

- `"subtotal"`
- `"discount"`
- `"charge"`
- `"tax"`
- `"tip"`
- `"total"`
- `"late_fee"`
- `"late_fee_waived"`
- `"payments"`
- `"credit_note"`
- `"credits"`
- `"written_off"`
- `"amount_due"`
- `"refunded"`

### InvoiceDocumentRow.amount_money

The row's signed amount. Informational rows do not contribute to the sum. Signed monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](SignedMoneyInput.md#signedmoneyinput).

### InvoiceDocumentRow.taxable_money

Taxable amount of a tax row. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

