[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderLineSubscriptionOfferDiscount

The discount a subscription offer gives, as a fixed amount or a percentage.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_off_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_off_money`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money). |
| `percent_off` | Optional | number | multipleOf: `0.0001`. |

### OrderLineSubscriptionOfferDiscount.amount_off_money

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money).

