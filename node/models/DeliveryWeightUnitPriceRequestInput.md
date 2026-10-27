[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryWeightUnitPriceRequestInput

Request input. Response: [DeliveryWeightUnitPrice](../models/DeliveryWeightUnitPrice.md#deliveryweightunitprice).

Price per unit of weight you supply for calculated pricing: a price per currency for each `unit_quantity` of the chosen weight `unit`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `currency_options` | Required | Map of [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) |  |
| `unit` | Required | string | Weight unit used by unit_quantity. Values: `"gram"`, `"kilogram"`, `"ounce"`, `"pound"`. |
| `unit_quantity` | Required | integer string | Whole-number quantity of the selected unit charged at each configured currency price; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. |

