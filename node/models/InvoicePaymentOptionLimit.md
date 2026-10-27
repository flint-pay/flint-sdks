[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoicePaymentOptionLimit

The largest invoice total allowed for a payment option.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `max_total_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The largest invoice total, in this currency, for which Flint offers the option. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `max_total_money`: [field definitions](../models/InvoicePaymentOptionLimit.md#invoicepaymentoptionlimitmax_total_money). |
| `payment_option` | Required | string | The payment option this cap applies to. Values: `"card"`, `"apple_pay"`, `"google_pay"`, `"affirm"`, `"ach_debit"`. |

### InvoicePaymentOptionLimit.max_total_money

The largest invoice total, in this currency, for which Flint offers the option. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

