[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryMethodConfigurationPricingCalculatedCalculatedWeight

Price per unit of weight for calculated pricing: a price per currency for each `unit_quantity` of the chosen weight `unit`.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `currency_options` | Required | Map of ([DeliveryMethodConfigurationPricingCalculatedCalculatedWeightCurrencyOptionsValue](../models/DeliveryMethodConfigurationPricingCalculatedCalculatedWeightCurrencyOptionsValue.md#deliverymethodconfigurationpricingcalculatedcalculatedweightcurrencyoptionsvalue) and [MoneyValue](../models/MoneyValue.md#moneyvalue)) |  |
| `unit` | Required | string | Weight unit used by unit_quantity. Values: `"gram"`, `"kilogram"`, `"ounce"`, `"pound"`. |
| `unit_quantity` | Required | integer string | Whole-number quantity of the selected unit charged at each configured currency price; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. |

