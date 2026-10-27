[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryDistanceUnitPriceRequestInput

Request input. Response: [DeliveryDistanceUnitPrice](../models/DeliveryDistanceUnitPrice.md#deliverydistanceunitprice).

A distance rate you supply for calculated delivery pricing: a price by currency for each `unit_quantity` of `unit`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `currency_options` | Required | Map of [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) |  |
| `unit` | Required | string | Distance unit used by unit_quantity. Values: `"meter"`, `"kilometer"`, `"mile"`. |
| `unit_quantity` | Required | integer string | Whole-number quantity of the selected unit charged at each configured currency price; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. |

