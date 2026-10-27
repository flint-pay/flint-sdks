[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryCalculatedPricingStrategyInput

Delivery pricing calculated from a base fee, distance, weight, and per-item handling, with minimum and maximum fees, by currency.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `base_fee_currency_options` | Optional | Map of [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Base delivery fee by ISO currency code. Each key must equal the Money object's currency. |
| `distance` | Optional | [DeliveryDistanceUnitPriceInput](../models/DeliveryDistanceUnitPriceInput.md#deliverydistanceunitpriceinput) | A distance rate for calculated delivery pricing: a price by currency for each `unit_quantity` of `unit`. |
| `maximum_fee_currency_options` | Optional | Map of [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Maximum delivery fee by ISO currency code. Each key must equal the Money object's currency. |
| `minimum_fee_currency_options` | Optional | Map of [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Minimum delivery fee by ISO currency code. Each key must equal the Money object's currency. |
| `per_item_handling_fee_currency_options` | Optional | Map of [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Handling fee per item by ISO currency code. Each key must equal the Money object's currency. |
| `weight` | Optional | [DeliveryWeightUnitPriceInput](../models/DeliveryWeightUnitPriceInput.md#deliveryweightunitpriceinput) | Price per unit of weight for calculated pricing: a price per currency for each `unit_quantity` of the chosen weight `unit`. |

