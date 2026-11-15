[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateInvoiceManualPaymentRequestInput

The request body for: Create invoice manual payment.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Positive amount received outside Flint, in the invoice currency, no more than outstanding_money for an open invoice or written_off_money for an uncollectible invoice. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `expected_invoice_version` | Optional | integer | Expected version of the invoice. Format: `int64`. minimum: `1`. |
| `note` | Optional | string | Note about the offline payment, up to 4096 characters. minLength: `1`. maxLength: `4096`. |
| `payment_reference` | Optional | string | Caller-owned check, wire, or bank reference, stored unmodified. minLength: `1`. maxLength: `255`. |
| `received_at` | Optional | string | When the payment was received. Defaults to now. Format: `date-time`. minLength: `1`. Example: `"2026-08-02T16:00:00Z"`. |

