[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryMethodConfigurationPricingRateTableCalculatedWeight

Charge per unit of weight of the items.

Price per unit of weight for calculated pricing: a price per currency for each `unit_quantity` of the chosen weight `unit`.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `currency_options` | Required | Map of ([DeliveryMethodConfigurationPricingRateTableCalculatedWeightCurrencyOptionsValue](../models/DeliveryMethodConfigurationPricingRateTableCalculatedWeightCurrencyOptionsValue.md#deliverymethodconfigurationpricingratetablecalculatedweightcurrencyoptionsvalue) and [MoneyValue](../models/MoneyValue.md#moneyvalue)) | Price by ISO 4217 currency code. Each key must equal the currency of its Money value. |
| `unit` | Required | string | Weight unit used by unit_quantity. Values: `"gram"`, `"kilogram"`, `"ounce"`, `"pound"`. |
| `unit_quantity` | Required | integer | Whole-number quantity of the selected unit charged at each configured currency price; fractional quantities are not supported. Format: `int64`. minimum: `1`. |

