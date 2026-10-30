[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryMethodConfigurationPricingCallbackCalculatedDistance

A distance rate for calculated delivery pricing: a price by currency for each `unit_quantity` of `unit`.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `currency_options` | Required | Map of ([DeliveryMethodConfigurationPricingCallbackCalculatedDistanceCurrencyOptionsValue](../models/DeliveryMethodConfigurationPricingCallbackCalculatedDistanceCurrencyOptionsValue.md#deliverymethodconfigurationpricingcallbackcalculateddistancecurrencyoptionsvalue) and [MoneyValue](../models/MoneyValue.md#moneyvalue)) |  |
| `unit` | Required | string | Distance unit used by unit_quantity. Values: `"meter"`, `"kilometer"`, `"mile"`. |
| `unit_quantity` | Required | integer | Whole-number quantity of the selected unit charged at each configured currency price; fractional quantities are not supported. Format: `int64`. minimum: `1`. |

