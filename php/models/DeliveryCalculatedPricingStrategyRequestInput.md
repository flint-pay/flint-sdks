[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryCalculatedPricingStrategyRequestInput

Calculated delivery pricing you supply for a delivery method: base fee, distance and weight rates, per-item handling, and fee limits, by currency.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `base_fee_currency_options` | Optional | Map of [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Base delivery fee by ISO currency code. Each key must equal the Money object's currency. |
| `distance` | Optional | [DeliveryDistanceUnitPriceRequestInput](../models/DeliveryDistanceUnitPriceRequestInput.md#deliverydistanceunitpricerequestinput) | A distance rate you supply for calculated delivery pricing: a price by currency for each `unit_quantity` of `unit`. |
| `maximum_fee_currency_options` | Optional | Map of [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Maximum delivery fee by ISO currency code. Each key must equal the Money object's currency. |
| `minimum_fee_currency_options` | Optional | Map of [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Minimum delivery fee by ISO currency code. Each key must equal the Money object's currency. |
| `per_item_handling_fee_currency_options` | Optional | Map of [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Handling fee per item by ISO currency code. Each key must equal the Money object's currency. |
| `weight` | Optional | [DeliveryWeightUnitPriceRequestInput](../models/DeliveryWeightUnitPriceRequestInput.md#deliveryweightunitpricerequestinput) | Price per unit of weight you supply for calculated pricing: a price per currency for each `unit_quantity` of the chosen weight `unit`. |

