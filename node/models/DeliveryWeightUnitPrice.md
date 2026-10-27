[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryWeightUnitPrice







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `currency_options` | Required | Map of [MoneyValue](../models/MoneyValue.md#moneyvalue) | `currency_options{}`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money). |
| `unit` | Required | string | Weight unit used by unit_quantity. Values: `"gram"`, `"kilogram"`, `"ounce"`, `"pound"`. |
| `unit_quantity` | Required | integer string | Whole-number quantity of the selected unit charged at each configured currency price; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. |

### DeliveryWeightUnitPrice variant 1

anyOf variant 1: Declared schema DeliveryWeightUnitPrice. Price per unit of weight for calculated pricing: a price per currency for each `unit_quantity` of the chosen weight `unit`..

No additional constraints.

### DeliveryWeightUnitPrice variant 2

anyOf variant 2: Declared schema DeliveryWeightUnitPriceRequest. Price per unit of weight you supply for calculated pricing: a price per currency for each `unit_quantity` of the chosen weight `unit`..

No additional constraints.

### DeliveryWeightUnitPrice.currency_options{}

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money).

