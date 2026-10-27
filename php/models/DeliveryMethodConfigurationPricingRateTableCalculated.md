[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryMethodConfigurationPricingRateTableCalculated

Delivery pricing calculated from a base fee, distance, weight, and per-item handling, with minimum and maximum fees, by currency.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `base_fee_currency_options` | Optional | Map of ([DeliveryMethodConfigurationPricingRateTableCalculatedBaseFeeCurrencyOptionsValue](../models/DeliveryMethodConfigurationPricingRateTableCalculatedBaseFeeCurrencyOptionsValue.md#deliverymethodconfigurationpricingratetablecalculatedbasefeecurrencyoptionsvalue) and [MoneyValue](../models/MoneyValue.md#moneyvalue)) | Base delivery fee by ISO currency code. Each key must equal the Money object's currency. |
| `distance` | Optional | [DeliveryMethodConfigurationPricingRateTableCalculatedDistance](../models/DeliveryMethodConfigurationPricingRateTableCalculatedDistance.md#deliverymethodconfigurationpricingratetablecalculateddistance) | A distance rate for calculated delivery pricing: a price by currency for each `unit_quantity` of `unit`. `distance`: [field definitions](../models/DeliveryMethodConfigurationPricingRateTableCalculated.md#deliverymethodconfigurationpricingratetablecalculateddistance-fields-1). |
| `maximum_fee_currency_options` | Optional | Map of ([DeliveryMethodConfigurationPricingRateTableCalculatedMaximumFeeCurrencyOptionsValue](../models/DeliveryMethodConfigurationPricingRateTableCalculatedMaximumFeeCurrencyOptionsValue.md#deliverymethodconfigurationpricingratetablecalculatedmaximumfeecurrencyoptionsvalue) and [MoneyValue](../models/MoneyValue.md#moneyvalue)) | Maximum delivery fee by ISO currency code. Each key must equal the Money object's currency. |
| `minimum_fee_currency_options` | Optional | Map of ([DeliveryMethodConfigurationPricingRateTableCalculatedMinimumFeeCurrencyOptionsValue](../models/DeliveryMethodConfigurationPricingRateTableCalculatedMinimumFeeCurrencyOptionsValue.md#deliverymethodconfigurationpricingratetablecalculatedminimumfeecurrencyoptionsvalue) and [MoneyValue](../models/MoneyValue.md#moneyvalue)) | Minimum delivery fee by ISO currency code. Each key must equal the Money object's currency. |
| `per_item_handling_fee_currency_options` | Optional | Map of ([DeliveryMethodConfigurationPricingRateTableCalculatedPerItemHandlingFeeCurrencyOptionsValue](../models/DeliveryMethodConfigurationPricingRateTableCalculatedPerItemHandlingFeeCurrencyOptionsValue.md#deliverymethodconfigurationpricingratetablecalculatedperitemhandlingfeecurrencyoptionsvalue) and [MoneyValue](../models/MoneyValue.md#moneyvalue)) | Handling fee per item by ISO currency code. Each key must equal the Money object's currency. |
| `weight` | Optional | [DeliveryMethodConfigurationPricingRateTableCalculatedWeight](../models/DeliveryMethodConfigurationPricingRateTableCalculatedWeight.md#deliverymethodconfigurationpricingratetablecalculatedweight) | Price per unit of weight for calculated pricing: a price per currency for each `unit_quantity` of the chosen weight `unit`. `weight`: [field definitions](../models/DeliveryMethodConfigurationPricingRateTableCalculated.md#deliverymethodconfigurationpricingratetablecalculatedweight-fields-1). |

### DeliveryMethodConfigurationPricingRateTableCalculated.distance fields 1

A distance rate for calculated delivery pricing: a price by currency for each `unit_quantity` of `unit`.

Field definitions: [shared fields](DeliveryMethodConfigurationPricingCalculatedCalculated.md#deliverymethodconfigurationpricingcalculatedcalculateddistance-fields-1).

### DeliveryMethodConfigurationPricingRateTableCalculated.weight fields 1

Price per unit of weight for calculated pricing: a price per currency for each `unit_quantity` of the chosen weight `unit`.

Field definitions: [shared fields](DeliveryMethodConfigurationPricingCalculatedCalculated.md#deliverymethodconfigurationpricingcalculatedcalculatedweight-fields-1).

