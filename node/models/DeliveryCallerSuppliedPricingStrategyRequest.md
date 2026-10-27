[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryCallerSuppliedPricingStrategyRequest

Delivery pricing where you supply the rate when creating a delivery quote, bounded by minimum and maximum fees by currency.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `maximum_fee_currency_options` | Required | Map of [MoneyValue](../models/MoneyValue.md#moneyvalue) | Maximum delivery fee by ISO currency code. Each key must equal the Money object's currency. `maximum_fee_currency_options{}`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money). |
| `minimum_fee_currency_options` | Required | Map of [MoneyValue](../models/MoneyValue.md#moneyvalue) | Minimum delivery fee by ISO currency code. Each key must equal the Money object's currency. `minimum_fee_currency_options{}`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money). |

### DeliveryCallerSuppliedPricingStrategyRequest.maximum_fee_currency_options{}

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money).

### DeliveryCallerSuppliedPricingStrategyRequest.minimum_fee_currency_options{}

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money).

