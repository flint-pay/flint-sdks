[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceLateFeePolicyFixed







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Fixed fee in the invoice currency. Required for fixed and omitted for percentage. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/BuyerInvoiceLateFee.md#buyerinvoicelatefeelate_fee_policy-variant-1amount_money). |
| `application_mode` | Optional | string | Whether Flint applies the one-time fee automatically after the grace period. Omission defaults to manual. Frozen when the invoice is issued. Default: `"manual"`. Values: `"manual"`, `"automatic"`. |
| `grace_period_days` | Required | integer | Calendar days from the start of due_date in the invoice timezone (UTC when absent) before a late fee is eligible. Never eligible before the due date ends. An on_receipt term requires at least 1 day. Format: `int32`. minimum: `0`. maximum: `365`. |
| `percent` | Optional | number | Percentage applied to the fee base_outstanding_money. maximum: `100`. exclusiveMinimum: `0`. multipleOf: `0.0001`. |
| `type` | Required | string | How the one-time late fee is calculated. Values: `"fixed"`. |

### InvoiceLateFeePolicyFixed variant 1: `type` = `"fixed"`

anyOf InvoiceLateFeePolicyFixed: Declared schema InvoiceLateFeePolicyFixed. The `fixed` variant of `InvoiceLateFeePolicy`..

- Condition: not (present(`percent`)).

### InvoiceLateFeePolicyFixed variant 2: `type` = `"fixed"`

anyOf InvoiceLateFeePolicyFixed: Declared schema InvoiceLateFeePolicyFixedRequest. The `fixed` variant of `InvoiceLateFeePolicy`..

- Condition: not (present(`percent`)).

### InvoiceLateFeePolicyFixed.amount_money

Field definitions: [BuyerInvoiceLateFee.late_fee_policy variant 1.amount_money](../models/BuyerInvoiceLateFee.md#buyerinvoicelatefeelate_fee_policy-variant-1amount_money).

