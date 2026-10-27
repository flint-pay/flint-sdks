[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateInvoiceManualPaymentRequestInput

The request body for: Create invoice manual payment.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `expected_version` | Optional | integer string | Expected version of the invoice. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. |
| `note` | Optional | string | minLength: `1`. maxLength: `4096`. |
| `payment_reference` | Optional | string | Caller-owned check, wire, or bank reference, stored unmodified. minLength: `1`. maxLength: `255`. |
| `received_at` | Optional | string | When the payment was received. Defaults to now. Format: `date-time`. minLength: `1`. |

