[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoicePaymentOptionCostComparisonInput

Compares two payment options on an invoice and shows the estimated savings from the lower-cost option.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `compared_with_payment_option` | Required | string | Values: `"card"`, `"apple_pay"`, `"google_pay"`, `"affirm"`, `"ach_debit"`. |
| `estimated_savings_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Estimated savings for the merchant, as a positive amount. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `lower_cost_payment_option` | Required | string | Values: `"card"`, `"apple_pay"`, `"google_pay"`, `"affirm"`, `"ach_debit"`. |

