[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoicePaymentOptionLimitRequestInput

Request input. Response: [InvoicePaymentOptionLimit](../models/InvoicePaymentOptionLimit.md#invoicepaymentoptionlimit).

The largest invoice total allowed for a payment option.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `max_total_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | The largest invoice total, in this currency, for which Flint offers the option. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `payment_option` | Required | string | The payment option this cap applies to. Values: `"card"`, `"apple_pay"`, `"google_pay"`, `"affirm"`, `"ach_debit"`. |

