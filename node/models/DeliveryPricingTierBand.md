[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryPricingTierBand

Declared schema DeliveryPricingTierBand: One band of a tiered pricing strategy, covering values of the strategy's `basis` from `from` to `to`, with a price per currency.

Declared schema DeliveryPricingTierBandRequest: One band of a tiered pricing strategy you supply, covering values of the strategy's `basis` from `from` to `to`, with a price per currency.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `currency_options` | Required | Map of [MoneyValue](../models/MoneyValue.md#moneyvalue) | `currency_options{}`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money). |
| `from` | Required | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `to` | Optional | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |

### DeliveryPricingTierBand.currency_options{}

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money).

