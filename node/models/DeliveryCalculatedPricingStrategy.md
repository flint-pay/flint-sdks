[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryCalculatedPricingStrategy







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `base_fee_currency_options` | Optional | Map of [MoneyValue](../models/MoneyValue.md#moneyvalue) | Base delivery fee by ISO currency code. Each key must equal the Money object's currency. `base_fee_currency_options{}`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money). |
| `distance` | Optional | [DeliveryDistanceUnitPrice](../models/DeliveryDistanceUnitPrice.md#deliverydistanceunitprice) | `distance`: [field definitions](../models/DeliveryCalculatedPricingStrategy.md#deliverycalculatedpricingstrategy-variant-1distance), [field definitions](../models/DeliveryCalculatedPricingStrategy.md#deliverycalculatedpricingstrategy-variant-2distance). |
| `maximum_fee_currency_options` | Optional | Map of [MoneyValue](../models/MoneyValue.md#moneyvalue) | Maximum delivery fee by ISO currency code. Each key must equal the Money object's currency. `maximum_fee_currency_options{}`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money). |
| `minimum_fee_currency_options` | Optional | Map of [MoneyValue](../models/MoneyValue.md#moneyvalue) | Minimum delivery fee by ISO currency code. Each key must equal the Money object's currency. `minimum_fee_currency_options{}`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money). |
| `per_item_handling_fee_currency_options` | Optional | Map of [MoneyValue](../models/MoneyValue.md#moneyvalue) | Handling fee per item by ISO currency code. Each key must equal the Money object's currency. `per_item_handling_fee_currency_options{}`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money). |
| `weight` | Optional | [DeliveryWeightUnitPrice](../models/DeliveryWeightUnitPrice.md#deliveryweightunitprice) | `weight`: [field definitions](../models/DeliveryCalculatedPricingStrategy.md#deliverycalculatedpricingstrategy-variant-1weight), [field definitions](../models/DeliveryCalculatedPricingStrategy.md#deliverycalculatedpricingstrategy-variant-2weight). |

### DeliveryCalculatedPricingStrategy variant 1

anyOf variant 1: Declared schema DeliveryCalculatedPricingStrategy. Delivery pricing calculated from a base fee, distance, weight, and per-item handling, with minimum and maximum fees, by currency..

No additional constraints.

### DeliveryCalculatedPricingStrategy variant 2

anyOf variant 2: Declared schema DeliveryCalculatedPricingStrategyRequest. Calculated delivery pricing you supply for a delivery method: base fee, distance and weight rates, per-item handling, and fee limits, by currency..

No additional constraints.

### DeliveryCalculatedPricingStrategy.base_fee_currency_options{}

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money).

### DeliveryCalculatedPricingStrategy variant 1.distance

A distance rate for calculated delivery pricing: a price by currency for each `unit_quantity` of `unit`.

Field definitions: [shared fields](DeliveryDistanceUnitPrice.md#deliverydistanceunitprice).

### DeliveryCalculatedPricingStrategy variant 1.distance.currency_options{}

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money).

### DeliveryCalculatedPricingStrategy.maximum_fee_currency_options{}

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money).

### DeliveryCalculatedPricingStrategy.minimum_fee_currency_options{}

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money).

### DeliveryCalculatedPricingStrategy.per_item_handling_fee_currency_options{}

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money).

### DeliveryCalculatedPricingStrategy variant 1.weight

Price per unit of weight for calculated pricing: a price per currency for each `unit_quantity` of the chosen weight `unit`.

Field definitions: [shared fields](DeliveryWeightUnitPrice.md#deliveryweightunitprice).

### DeliveryCalculatedPricingStrategy variant 1.weight.currency_options{}

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money).

### DeliveryCalculatedPricingStrategy variant 2.distance

A distance rate you supply for calculated delivery pricing: a price by currency for each `unit_quantity` of `unit`.

Field definitions: [shared fields](DeliveryDistanceUnitPrice.md#deliverydistanceunitprice).

### DeliveryCalculatedPricingStrategy variant 2.distance.currency_options{}

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money).

### DeliveryCalculatedPricingStrategy variant 2.weight

Price per unit of weight you supply for calculated pricing: a price per currency for each `unit_quantity` of the chosen weight `unit`.

Field definitions: [shared fields](DeliveryWeightUnitPrice.md#deliveryweightunitprice).

### DeliveryCalculatedPricingStrategy variant 2.weight.currency_options{}

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money).

