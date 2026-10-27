[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceLateFeePolicy

A late fee for overdue invoices: a fixed amount or a percentage, a grace period in days, and whether Flint applies it automatically.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Conditional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money). |
| `application_mode` | Optional | string | Whether Flint applies the one-time fee automatically after the grace period. Omission defaults to manual. Frozen when the invoice is issued. Default: `"manual"`. Values: `"manual"`, `"automatic"`. |
| `grace_period_days` | Required | integer | Format: `int32`. minimum: `0`. maximum: `365`. |
| `percent` | Conditional | number | Percentage applied to the fee base_outstanding_money. maximum: `100`. exclusiveMinimum: `0`. multipleOf: `0.0001`. |
| `type` | Required | string | Values: `"fixed"`, `"percentage"`. |

### InvoiceLateFeePolicy variant 1: `type` = `"fixed"`

oneOf variant 1: The `fixed` variant of `InvoiceLateFeePolicy`..

- Condition: not (present(`percent`)).
- Required: `amount_money`.
- Optional: `percent`.
- Constraints for `type`: Values: `"fixed"`.

### InvoiceLateFeePolicy variant 2: `type` = `"percentage"`

oneOf variant 2: The `percentage` variant of `InvoiceLateFeePolicy`..

- Condition: not (present(`amount_money`)).
- Required: `percent`.
- Optional: `amount_money`.
- Constraints for `type`: Values: `"percentage"`.

### InvoiceLateFeePolicy.amount_money

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money).

