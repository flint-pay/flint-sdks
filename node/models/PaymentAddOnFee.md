[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentAddOnFee

A Flint fee added to a payment intent, with the fee type and amount.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money). |
| `fee_type` | Required | string | Values: `"invoice_collection"`, `"subscription_collection"`, `"automatic_tax"`. |

### PaymentAddOnFee.amount_money

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money).

