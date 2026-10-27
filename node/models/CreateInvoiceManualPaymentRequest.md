[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateInvoiceManualPaymentRequest

The request body for: Create invoice manual payment.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money). |
| `expected_version` | Optional | integer string | Expected version of the invoice. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. |
| `note` | Optional | string | minLength: `1`. maxLength: `4096`. |
| `payment_reference` | Optional | string | Caller-owned check, wire, or bank reference, stored unmodified. minLength: `1`. maxLength: `255`. |
| `received_at` | Optional | string | When the payment was received. Defaults to now. Format: `date-time`. minLength: `1`. |

### CreateInvoiceManualPaymentRequest.amount_money

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money).

