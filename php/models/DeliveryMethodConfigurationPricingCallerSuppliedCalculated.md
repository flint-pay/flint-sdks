[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryMethodConfigurationPricingCallerSuppliedCalculated

Delivery pricing calculated from a base fee, distance, weight, and per-item handling, with minimum and maximum fees, by currency.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `base_fee_currency_options` | Optional | Map of ([DeliveryMethodConfigurationPricingCallerSuppliedCalculatedBaseFeeCurrencyOptionsValue](../models/DeliveryMethodConfigurationPricingCallerSuppliedCalculatedBaseFeeCurrencyOptionsValue.md#deliverymethodconfigurationpricingcallersuppliedcalculatedbasefeecurrencyoptionsvalue) and [MoneyValue](../models/MoneyValue.md#moneyvalue)) | Base delivery fee by ISO currency code. Each key must equal the Money object's currency. |
| `distance` | Optional | [DeliveryMethodConfigurationPricingCallerSuppliedCalculatedDistance](../models/DeliveryMethodConfigurationPricingCallerSuppliedCalculatedDistance.md#deliverymethodconfigurationpricingcallersuppliedcalculateddistance) | A distance rate for calculated delivery pricing: a price by currency for each `unit_quantity` of `unit`. `distance`: [field definitions](../models/DeliveryMethodConfigurationPricingCallerSuppliedCalculated.md#deliverymethodconfigurationpricingcallersuppliedcalculateddistance-fields-1). |
| `maximum_fee_currency_options` | Optional | Map of ([DeliveryMethodConfigurationPricingCallerSuppliedCalculatedMaximumFeeCurrencyOptionsValue](../models/DeliveryMethodConfigurationPricingCallerSuppliedCalculatedMaximumFeeCurrencyOptionsValue.md#deliverymethodconfigurationpricingcallersuppliedcalculatedmaximumfeecurrencyoptionsvalue) and [MoneyValue](../models/MoneyValue.md#moneyvalue)) | Maximum delivery fee by ISO currency code. Each key must equal the Money object's currency. |
| `minimum_fee_currency_options` | Optional | Map of ([DeliveryMethodConfigurationPricingCallerSuppliedCalculatedMinimumFeeCurrencyOptionsValue](../models/DeliveryMethodConfigurationPricingCallerSuppliedCalculatedMinimumFeeCurrencyOptionsValue.md#deliverymethodconfigurationpricingcallersuppliedcalculatedminimumfeecurrencyoptionsvalue) and [MoneyValue](../models/MoneyValue.md#moneyvalue)) | Minimum delivery fee by ISO currency code. Each key must equal the Money object's currency. |
| `per_item_handling_fee_currency_options` | Optional | Map of ([DeliveryMethodConfigurationPricingCallerSuppliedCalculatedPerItemHandlingFeeCurrencyOptionsValue](../models/DeliveryMethodConfigurationPricingCallerSuppliedCalculatedPerItemHandlingFeeCurrencyOptionsValue.md#deliverymethodconfigurationpricingcallersuppliedcalculatedperitemhandlingfeecurrencyoptionsvalue) and [MoneyValue](../models/MoneyValue.md#moneyvalue)) | Handling fee per item by ISO currency code. Each key must equal the Money object's currency. |
| `weight` | Optional | [DeliveryMethodConfigurationPricingCallerSuppliedCalculatedWeight](../models/DeliveryMethodConfigurationPricingCallerSuppliedCalculatedWeight.md#deliverymethodconfigurationpricingcallersuppliedcalculatedweight) | Price per unit of weight for calculated pricing: a price per currency for each `unit_quantity` of the chosen weight `unit`. `weight`: [field definitions](../models/DeliveryMethodConfigurationPricingCallerSuppliedCalculated.md#deliverymethodconfigurationpricingcallersuppliedcalculatedweight-fields-1). |

### DeliveryMethodConfigurationPricingCallerSuppliedCalculated.distance fields 1

A distance rate for calculated delivery pricing: a price by currency for each `unit_quantity` of `unit`.

Field definitions: [shared fields](DeliveryMethodConfigurationPricingCalculatedCalculated.md#deliverymethodconfigurationpricingcalculatedcalculateddistance-fields-1).

### DeliveryMethodConfigurationPricingCallerSuppliedCalculated.weight fields 1

Price per unit of weight for calculated pricing: a price per currency for each `unit_quantity` of the chosen weight `unit`.

Field definitions: [shared fields](DeliveryMethodConfigurationPricingCalculatedCalculated.md#deliverymethodconfigurationpricingcalculatedcalculatedweight-fields-1).

