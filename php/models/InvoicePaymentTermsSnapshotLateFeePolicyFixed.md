[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoicePaymentTermsSnapshotLateFeePolicyFixed

A late fee for overdue invoices: a fixed amount or a percentage, a grace period in days, and whether Flint applies it automatically.

The `fixed` variant of `InvoiceLateFeePolicy`.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [InvoicePaymentTermsSnapshotLateFeePolicyFixedAmountMoney](../models/InvoicePaymentTermsSnapshotLateFeePolicyFixedAmountMoney.md#invoicepaymenttermssnapshotlatefeepolicyfixedamountmoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `application_mode` | Optional | string | Whether Flint applies the one-time fee automatically after the grace period. Omission defaults to manual. Frozen when the invoice is issued. Default: `"manual"`. Values: `"manual"`, `"automatic"`. |
| `grace_period_days` | Required | integer | Format: `int32`. minimum: `0`. maximum: `365`. |
| `percent` | Optional | number | Percentage applied to the fee base_outstanding_money. maximum: `100`. exclusiveMinimum: `0`. multipleOf: `0.0001`. |
| `type` | Required | string | Values: `"fixed"`. |

