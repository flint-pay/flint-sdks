[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryMethodConfigurationPricingFixedCalculated

Delivery pricing calculated from a base fee, distance, weight, and per-item handling, with minimum and maximum fees, by currency.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `base_fee_currency_options` | Optional | Map of ([DeliveryMethodConfigurationPricingFixedCalculatedBaseFeeCurrencyOptionsValue](../models/DeliveryMethodConfigurationPricingFixedCalculatedBaseFeeCurrencyOptionsValue.md#deliverymethodconfigurationpricingfixedcalculatedbasefeecurrencyoptionsvalue) and [MoneyValue](../models/MoneyValue.md#moneyvalue)) | Base delivery fee by ISO currency code. Each key must equal the Money object's currency. |
| `distance` | Optional | [DeliveryMethodConfigurationPricingFixedCalculatedDistance](../models/DeliveryMethodConfigurationPricingFixedCalculatedDistance.md#deliverymethodconfigurationpricingfixedcalculateddistance) | A distance rate for calculated delivery pricing: a price by currency for each `unit_quantity` of `unit`. `distance`: [field definitions](../models/DeliveryMethodConfigurationPricingFixedCalculated.md#deliverymethodconfigurationpricingfixedcalculateddistance-fields-1). |
| `maximum_fee_currency_options` | Optional | Map of ([DeliveryMethodConfigurationPricingFixedCalculatedMaximumFeeCurrencyOptionsValue](../models/DeliveryMethodConfigurationPricingFixedCalculatedMaximumFeeCurrencyOptionsValue.md#deliverymethodconfigurationpricingfixedcalculatedmaximumfeecurrencyoptionsvalue) and [MoneyValue](../models/MoneyValue.md#moneyvalue)) | Maximum delivery fee by ISO currency code. Each key must equal the Money object's currency. |
| `minimum_fee_currency_options` | Optional | Map of ([DeliveryMethodConfigurationPricingFixedCalculatedMinimumFeeCurrencyOptionsValue](../models/DeliveryMethodConfigurationPricingFixedCalculatedMinimumFeeCurrencyOptionsValue.md#deliverymethodconfigurationpricingfixedcalculatedminimumfeecurrencyoptionsvalue) and [MoneyValue](../models/MoneyValue.md#moneyvalue)) | Minimum delivery fee by ISO currency code. Each key must equal the Money object's currency. |
| `per_item_handling_fee_currency_options` | Optional | Map of ([DeliveryMethodConfigurationPricingFixedCalculatedPerItemHandlingFeeCurrencyOptionsValue](../models/DeliveryMethodConfigurationPricingFixedCalculatedPerItemHandlingFeeCurrencyOptionsValue.md#deliverymethodconfigurationpricingfixedcalculatedperitemhandlingfeecurrencyoptionsvalue) and [MoneyValue](../models/MoneyValue.md#moneyvalue)) | Handling fee per item by ISO currency code. Each key must equal the Money object's currency. |
| `weight` | Optional | [DeliveryMethodConfigurationPricingFixedCalculatedWeight](../models/DeliveryMethodConfigurationPricingFixedCalculatedWeight.md#deliverymethodconfigurationpricingfixedcalculatedweight) | Price per unit of weight for calculated pricing: a price per currency for each `unit_quantity` of the chosen weight `unit`. `weight`: [field definitions](../models/DeliveryMethodConfigurationPricingFixedCalculated.md#deliverymethodconfigurationpricingfixedcalculatedweight-fields-1). |

### DeliveryMethodConfigurationPricingFixedCalculated.distance fields 1

A distance rate for calculated delivery pricing: a price by currency for each `unit_quantity` of `unit`.

Field definitions: [shared fields](DeliveryMethodConfigurationPricingCalculatedCalculated.md#deliverymethodconfigurationpricingcalculatedcalculateddistance-fields-1).

### DeliveryMethodConfigurationPricingFixedCalculated.weight fields 1

Price per unit of weight for calculated pricing: a price per currency for each `unit_quantity` of the chosen weight `unit`.

Field definitions: [shared fields](DeliveryMethodConfigurationPricingCalculatedCalculated.md#deliverymethodconfigurationpricingcalculatedcalculatedweight-fields-1).

