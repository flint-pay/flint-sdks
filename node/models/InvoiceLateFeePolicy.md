[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceLateFeePolicy







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Conditional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Fixed fee in the invoice currency. Required for fixed and omitted for percentage. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/BuyerInvoiceLateFee.md#buyerinvoicelatefeelate_fee_policy-variant-1amount_money). |
| `application_mode` | Optional | string | Whether Flint applies the one-time fee automatically after the grace period. Omission defaults to manual. Frozen when the invoice is issued. Default: `"manual"`. Values: `"manual"`, `"automatic"`. |
| `grace_period_days` | Required | integer | Calendar days from the start of due_date in the invoice timezone (UTC when absent) before a late fee is eligible. Never eligible before the due date ends. An on_receipt term requires at least 1 day. Format: `int32`. minimum: `0`. maximum: `365`. |
| `percent` | Conditional | number | Percentage applied to the fee base_outstanding_money. maximum: `100`. exclusiveMinimum: `0`. multipleOf: `0.0001`. |
| `type` | Required | string | How the one-time late fee is calculated. Values: `"fixed"`, `"percentage"`. |

### InvoiceLateFeePolicy variant 1: `type` = `"fixed"`

anyOf variant 1: Declared schema InvoiceLateFeePolicy. A late fee for overdue invoices: a fixed amount or a percentage, a grace period in days, and whether Flint applies it automatically.; oneOf with type: "fixed": The `fixed` variant of `InvoiceLateFeePolicy`..

- Condition: not (present(`percent`)).
- Required: `amount_money`.
- Optional: `percent`.
- Constraints for `type`: Values: `"fixed"`.

### InvoiceLateFeePolicy variant 2: `type` = `"percentage"`

anyOf variant 1: Declared schema InvoiceLateFeePolicy. A late fee for overdue invoices: a fixed amount or a percentage, a grace period in days, and whether Flint applies it automatically.; oneOf with type: "percentage": The `percentage` variant of `InvoiceLateFeePolicy`..

- Condition: not (present(`amount_money`)).
- Required: `percent`.
- Optional: `amount_money`.
- Constraints for `type`: Values: `"percentage"`.

### InvoiceLateFeePolicy variant 3: `type` = `"fixed"`

anyOf variant 2: Declared schema InvoiceLateFeePolicyRequest. A late fee for overdue invoices: a fixed amount or a percentage, a grace period in days, and whether Flint applies it automatically.; oneOf with type: "fixed": The `fixed` variant of `InvoiceLateFeePolicy`..

- Condition: not (present(`percent`)).
- Required: `amount_money`.
- Optional: `percent`.
- Constraints for `type`: Values: `"fixed"`.

### InvoiceLateFeePolicy variant 4: `type` = `"percentage"`

anyOf variant 2: Declared schema InvoiceLateFeePolicyRequest. A late fee for overdue invoices: a fixed amount or a percentage, a grace period in days, and whether Flint applies it automatically.; oneOf with type: "percentage": The `percentage` variant of `InvoiceLateFeePolicy`..

- Condition: not (present(`amount_money`)).
- Required: `percent`.
- Optional: `amount_money`.
- Constraints for `type`: Values: `"percentage"`.

### InvoiceLateFeePolicy.amount_money

Field definitions: [BuyerInvoiceLateFee.late_fee_policy variant 1.amount_money](../models/BuyerInvoiceLateFee.md#buyerinvoicelatefeelate_fee_policy-variant-1amount_money).

