[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoicePaymentTermLateFeePolicyFixed

A late fee for overdue invoices: a fixed amount or a percentage, a grace period in days, and whether Flint applies it automatically.

The `fixed` variant of `InvoiceLateFeePolicy`.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [InvoicePaymentTermLateFeePolicyFixedAmountMoney](../models/InvoicePaymentTermLateFeePolicyFixedAmountMoney.md#invoicepaymenttermlatefeepolicyfixedamountmoney) | Fixed fee in the invoice currency. Required for fixed and omitted for percentage. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `application_mode` | Optional | string | Whether Flint applies the one-time fee automatically after the grace period. Omission defaults to manual. Frozen when the invoice is issued. Default: `"manual"`. Values: `"manual"`, `"automatic"`. |
| `grace_period_days` | Required | integer | Calendar days from the start of due_date in the invoice timezone (UTC when absent) before a late fee is eligible. Never eligible before the due date ends. An on_receipt term requires at least 1 day. Format: `int32`. minimum: `0`. maximum: `365`. |
| `percent` | Optional | number | Percentage applied to the fee base_outstanding_money. maximum: `100`. exclusiveMinimum: `0`. multipleOf: `0.0001`. |
| `type` | Required | string | How the one-time late fee is calculated. Values: `"fixed"`. |

