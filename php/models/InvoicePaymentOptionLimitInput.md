[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoicePaymentOptionLimitInput

The largest invoice total allowed for a payment option.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `max_total_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `payment_option` | Required | string | Values: `"card"`, `"apple_pay"`, `"google_pay"`, `"affirm"`, `"ach_debit"`. |

