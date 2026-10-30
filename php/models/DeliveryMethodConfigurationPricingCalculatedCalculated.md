[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryMethodConfigurationPricingCalculatedCalculated

Delivery pricing calculated from a base fee, distance, weight, and per-item handling, with minimum and maximum fees, by currency.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `base_fee_currency_options` | Optional | Map of ([DeliveryMethodConfigurationPricingCalculatedCalculatedBaseFeeCurrencyOptionsValue](../models/DeliveryMethodConfigurationPricingCalculatedCalculatedBaseFeeCurrencyOptionsValue.md#deliverymethodconfigurationpricingcalculatedcalculatedbasefeecurrencyoptionsvalue) and [MoneyValue](../models/MoneyValue.md#moneyvalue)) | Base delivery fee by ISO currency code. Each key must equal the Money object's currency. |
| `distance` | Optional | [DeliveryMethodConfigurationPricingCalculatedCalculatedDistance](../models/DeliveryMethodConfigurationPricingCalculatedCalculatedDistance.md#deliverymethodconfigurationpricingcalculatedcalculateddistance) | A distance rate for calculated delivery pricing: a price by currency for each `unit_quantity` of `unit`. `distance`: [field definitions](../models/DeliveryMethodConfigurationPricingCalculatedCalculated.md#deliverymethodconfigurationpricingcalculatedcalculateddistance-fields-1). |
| `maximum_fee_currency_options` | Optional | Map of ([DeliveryMethodConfigurationPricingCalculatedCalculatedMaximumFeeCurrencyOptionsValue](../models/DeliveryMethodConfigurationPricingCalculatedCalculatedMaximumFeeCurrencyOptionsValue.md#deliverymethodconfigurationpricingcalculatedcalculatedmaximumfeecurrencyoptionsvalue) and [MoneyValue](../models/MoneyValue.md#moneyvalue)) | Maximum delivery fee by ISO currency code. Each key must equal the Money object's currency. |
| `minimum_fee_currency_options` | Optional | Map of ([DeliveryMethodConfigurationPricingCalculatedCalculatedMinimumFeeCurrencyOptionsValue](../models/DeliveryMethodConfigurationPricingCalculatedCalculatedMinimumFeeCurrencyOptionsValue.md#deliverymethodconfigurationpricingcalculatedcalculatedminimumfeecurrencyoptionsvalue) and [MoneyValue](../models/MoneyValue.md#moneyvalue)) | Minimum delivery fee by ISO currency code. Each key must equal the Money object's currency. |
| `per_item_handling_fee_currency_options` | Optional | Map of ([DeliveryMethodConfigurationPricingCalculatedCalculatedPerItemHandlingFeeCurrencyOptionsValue](../models/DeliveryMethodConfigurationPricingCalculatedCalculatedPerItemHandlingFeeCurrencyOptionsValue.md#deliverymethodconfigurationpricingcalculatedcalculatedperitemhandlingfeecurrencyoptionsvalue) and [MoneyValue](../models/MoneyValue.md#moneyvalue)) | Handling fee per item by ISO currency code. Each key must equal the Money object's currency. |
| `weight` | Optional | [DeliveryMethodConfigurationPricingCalculatedCalculatedWeight](../models/DeliveryMethodConfigurationPricingCalculatedCalculatedWeight.md#deliverymethodconfigurationpricingcalculatedcalculatedweight) | Price per unit of weight for calculated pricing: a price per currency for each `unit_quantity` of the chosen weight `unit`. `weight`: [field definitions](../models/DeliveryMethodConfigurationPricingCalculatedCalculated.md#deliverymethodconfigurationpricingcalculatedcalculatedweight-fields-1). |

### DeliveryMethodConfigurationPricingCalculatedCalculated.distance fields 1

A distance rate for calculated delivery pricing: a price by currency for each `unit_quantity` of `unit`.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `currency_options` | Required | Map of [MoneyValue](../models/MoneyValue.md#moneyvalue) |  |
| `unit` | Required | string | Distance unit used by unit_quantity. Values: `"meter"`, `"kilometer"`, `"mile"`. |
| `unit_quantity` | Required | integer | Whole-number quantity of the selected unit charged at each configured currency price; fractional quantities are not supported. Format: `int64`. minimum: `1`. |

### DeliveryMethodConfigurationPricingCalculatedCalculated.weight fields 1

Price per unit of weight for calculated pricing: a price per currency for each `unit_quantity` of the chosen weight `unit`.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `currency_options` | Required | Map of [MoneyValue](../models/MoneyValue.md#moneyvalue) |  |
| `unit` | Required | string | Weight unit used by unit_quantity. Values: `"gram"`, `"kilogram"`, `"ounce"`, `"pound"`. |
| `unit_quantity` | Required | integer | Whole-number quantity of the selected unit charged at each configured currency price; fractional quantities are not supported. Format: `int64`. minimum: `1`. |

