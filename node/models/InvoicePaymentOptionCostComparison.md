[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoicePaymentOptionCostComparison

Compares two payment options on an invoice and shows the estimated savings from the lower-cost option.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `compared_with_payment_option` | Required | string | Values: `"card"`, `"apple_pay"`, `"google_pay"`, `"affirm"`, `"ach_debit"`. |
| `estimated_savings_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Estimated savings for the merchant, as a positive amount. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `estimated_savings_money`: [field definitions](../models/InvoicePaymentOptionCostComparison.md#invoicepaymentoptioncostcomparisonestimated_savings_money). |
| `lower_cost_payment_option` | Required | string | Values: `"card"`, `"apple_pay"`, `"google_pay"`, `"affirm"`, `"ach_debit"`. |

### InvoicePaymentOptionCostComparison.estimated_savings_money

Estimated savings for the merchant, as a positive amount. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

