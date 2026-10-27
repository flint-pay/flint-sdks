[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryMethodConfigurationPricingCallbackCalculated

Delivery pricing calculated from a base fee, distance, weight, and per-item handling, with minimum and maximum fees, by currency.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `base_fee_currency_options` | Optional | Map of ([DeliveryMethodConfigurationPricingCallbackCalculatedBaseFeeCurrencyOptionsValue](../models/DeliveryMethodConfigurationPricingCallbackCalculatedBaseFeeCurrencyOptionsValue.md#deliverymethodconfigurationpricingcallbackcalculatedbasefeecurrencyoptionsvalue) and [MoneyValue](../models/MoneyValue.md#moneyvalue)) | Base delivery fee by ISO currency code. Each key must equal the Money object's currency. |
| `distance` | Optional | [DeliveryMethodConfigurationPricingCallbackCalculatedDistance](../models/DeliveryMethodConfigurationPricingCallbackCalculatedDistance.md#deliverymethodconfigurationpricingcallbackcalculateddistance) | A distance rate for calculated delivery pricing: a price by currency for each `unit_quantity` of `unit`. `distance`: [field definitions](../models/DeliveryMethodConfigurationPricingCallbackCalculated.md#deliverymethodconfigurationpricingcallbackcalculateddistance-fields-1). |
| `maximum_fee_currency_options` | Optional | Map of ([DeliveryMethodConfigurationPricingCallbackCalculatedMaximumFeeCurrencyOptionsValue](../models/DeliveryMethodConfigurationPricingCallbackCalculatedMaximumFeeCurrencyOptionsValue.md#deliverymethodconfigurationpricingcallbackcalculatedmaximumfeecurrencyoptionsvalue) and [MoneyValue](../models/MoneyValue.md#moneyvalue)) | Maximum delivery fee by ISO currency code. Each key must equal the Money object's currency. |
| `minimum_fee_currency_options` | Optional | Map of ([DeliveryMethodConfigurationPricingCallbackCalculatedMinimumFeeCurrencyOptionsValue](../models/DeliveryMethodConfigurationPricingCallbackCalculatedMinimumFeeCurrencyOptionsValue.md#deliverymethodconfigurationpricingcallbackcalculatedminimumfeecurrencyoptionsvalue) and [MoneyValue](../models/MoneyValue.md#moneyvalue)) | Minimum delivery fee by ISO currency code. Each key must equal the Money object's currency. |
| `per_item_handling_fee_currency_options` | Optional | Map of ([DeliveryMethodConfigurationPricingCallbackCalculatedPerItemHandlingFeeCurrencyOptionsValue](../models/DeliveryMethodConfigurationPricingCallbackCalculatedPerItemHandlingFeeCurrencyOptionsValue.md#deliverymethodconfigurationpricingcallbackcalculatedperitemhandlingfeecurrencyoptionsvalue) and [MoneyValue](../models/MoneyValue.md#moneyvalue)) | Handling fee per item by ISO currency code. Each key must equal the Money object's currency. |
| `weight` | Optional | [DeliveryMethodConfigurationPricingCallbackCalculatedWeight](../models/DeliveryMethodConfigurationPricingCallbackCalculatedWeight.md#deliverymethodconfigurationpricingcallbackcalculatedweight) | Price per unit of weight for calculated pricing: a price per currency for each `unit_quantity` of the chosen weight `unit`. `weight`: [field definitions](../models/DeliveryMethodConfigurationPricingCallbackCalculated.md#deliverymethodconfigurationpricingcallbackcalculatedweight-fields-1). |

### DeliveryMethodConfigurationPricingCallbackCalculated.distance fields 1

A distance rate for calculated delivery pricing: a price by currency for each `unit_quantity` of `unit`.

Field definitions: [shared fields](DeliveryMethodConfigurationPricingCalculatedCalculated.md#deliverymethodconfigurationpricingcalculatedcalculateddistance-fields-1).

### DeliveryMethodConfigurationPricingCallbackCalculated.weight fields 1

Price per unit of weight for calculated pricing: a price per currency for each `unit_quantity` of the chosen weight `unit`.

Field definitions: [shared fields](DeliveryMethodConfigurationPricingCalculatedCalculated.md#deliverymethodconfigurationpricingcalculatedcalculatedweight-fields-1).

