[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoicePaymentOptionLimit







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `max_total_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The largest invoice total, in this currency, for which Flint offers the option. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `max_total_money`: [field definitions](../models/InvoiceCollection.md#invoicecollectionpayment_policypayment_option_limitsmax_total_money). |
| `payment_option` | Required | string | The payment option this cap applies to. Values: `"card"`, `"apple_pay"`, `"google_pay"`, `"affirm"`, `"ach_debit"`. |

### InvoicePaymentOptionLimit variant 1

anyOf variant 1: Declared schema InvoicePaymentOptionLimit. The largest invoice total allowed for a payment option..

No additional constraints.

### InvoicePaymentOptionLimit variant 2

anyOf variant 2: Declared schema InvoicePaymentOptionLimitRequest. The largest invoice total allowed for a payment option..

No additional constraints.

### InvoicePaymentOptionLimit.max_total_money

Field definitions: [InvoiceCollection.payment_policy.payment_option_limits[].max_total_money](../models/InvoiceCollection.md#invoicecollectionpayment_policypayment_option_limitsmax_total_money).

