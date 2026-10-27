[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryMethodConfigurationPricingTieredCalculated

Delivery pricing calculated from a base fee, distance, weight, and per-item handling, with minimum and maximum fees, by currency.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `base_fee_currency_options` | Optional | Map of ([DeliveryMethodConfigurationPricingTieredCalculatedBaseFeeCurrencyOptionsValue](../models/DeliveryMethodConfigurationPricingTieredCalculatedBaseFeeCurrencyOptionsValue.md#deliverymethodconfigurationpricingtieredcalculatedbasefeecurrencyoptionsvalue) and [MoneyValue](../models/MoneyValue.md#moneyvalue)) | Base delivery fee by ISO currency code. Each key must equal the Money object's currency. |
| `distance` | Optional | [DeliveryMethodConfigurationPricingTieredCalculatedDistance](../models/DeliveryMethodConfigurationPricingTieredCalculatedDistance.md#deliverymethodconfigurationpricingtieredcalculateddistance) | A distance rate for calculated delivery pricing: a price by currency for each `unit_quantity` of `unit`. `distance`: [field definitions](../models/DeliveryMethodConfigurationPricingTieredCalculated.md#deliverymethodconfigurationpricingtieredcalculateddistance-fields-1). |
| `maximum_fee_currency_options` | Optional | Map of ([DeliveryMethodConfigurationPricingTieredCalculatedMaximumFeeCurrencyOptionsValue](../models/DeliveryMethodConfigurationPricingTieredCalculatedMaximumFeeCurrencyOptionsValue.md#deliverymethodconfigurationpricingtieredcalculatedmaximumfeecurrencyoptionsvalue) and [MoneyValue](../models/MoneyValue.md#moneyvalue)) | Maximum delivery fee by ISO currency code. Each key must equal the Money object's currency. |
| `minimum_fee_currency_options` | Optional | Map of ([DeliveryMethodConfigurationPricingTieredCalculatedMinimumFeeCurrencyOptionsValue](../models/DeliveryMethodConfigurationPricingTieredCalculatedMinimumFeeCurrencyOptionsValue.md#deliverymethodconfigurationpricingtieredcalculatedminimumfeecurrencyoptionsvalue) and [MoneyValue](../models/MoneyValue.md#moneyvalue)) | Minimum delivery fee by ISO currency code. Each key must equal the Money object's currency. |
| `per_item_handling_fee_currency_options` | Optional | Map of ([DeliveryMethodConfigurationPricingTieredCalculatedPerItemHandlingFeeCurrencyOptionsValue](../models/DeliveryMethodConfigurationPricingTieredCalculatedPerItemHandlingFeeCurrencyOptionsValue.md#deliverymethodconfigurationpricingtieredcalculatedperitemhandlingfeecurrencyoptionsvalue) and [MoneyValue](../models/MoneyValue.md#moneyvalue)) | Handling fee per item by ISO currency code. Each key must equal the Money object's currency. |
| `weight` | Optional | [DeliveryMethodConfigurationPricingTieredCalculatedWeight](../models/DeliveryMethodConfigurationPricingTieredCalculatedWeight.md#deliverymethodconfigurationpricingtieredcalculatedweight) | Price per unit of weight for calculated pricing: a price per currency for each `unit_quantity` of the chosen weight `unit`. `weight`: [field definitions](../models/DeliveryMethodConfigurationPricingTieredCalculated.md#deliverymethodconfigurationpricingtieredcalculatedweight-fields-1). |

### DeliveryMethodConfigurationPricingTieredCalculated.distance fields 1

A distance rate for calculated delivery pricing: a price by currency for each `unit_quantity` of `unit`.

Field definitions: [shared fields](DeliveryMethodConfigurationPricingCalculatedCalculated.md#deliverymethodconfigurationpricingcalculatedcalculateddistance-fields-1).

### DeliveryMethodConfigurationPricingTieredCalculated.weight fields 1

Price per unit of weight for calculated pricing: a price per currency for each `unit_quantity` of the chosen weight `unit`.

Field definitions: [shared fields](DeliveryMethodConfigurationPricingCalculatedCalculated.md#deliverymethodconfigurationpricingcalculatedcalculatedweight-fields-1).

