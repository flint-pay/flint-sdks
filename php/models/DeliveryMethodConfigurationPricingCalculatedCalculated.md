[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryMethodConfigurationPricingCalculatedCalculated

Calculated pricing settings. Set only when `type` is `calculated`.

Delivery pricing calculated from a base fee, distance, weight, and per-item handling, with minimum and maximum fees, by currency.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `base_fee_currency_options` | Optional | Map of ([DeliveryMethodConfigurationPricingCalculatedCalculatedBaseFeeCurrencyOptionsValue](../models/DeliveryMethodConfigurationPricingCalculatedCalculatedBaseFeeCurrencyOptionsValue.md#deliverymethodconfigurationpricingcalculatedcalculatedbasefeecurrencyoptionsvalue) and [MoneyValue](../models/MoneyValue.md#moneyvalue)) | Base delivery fee by ISO currency code. Each key must equal the Money object's currency. |
| `distance` | Optional | [DeliveryMethodConfigurationPricingCalculatedCalculatedDistance](../models/DeliveryMethodConfigurationPricingCalculatedCalculatedDistance.md#deliverymethodconfigurationpricingcalculatedcalculateddistance) | Charge per unit of distance between the origin and the destination. A distance rate for calculated delivery pricing: a price by currency for each `unit_quantity` of `unit`. `distance`: [field definitions](../models/DeliveryMethodConfigurationPricingCalculatedCalculated.md#deliverymethodconfigurationpricingcalculatedcalculateddistance-fields-1). |
| `maximum_fee_currency_options` | Optional | Map of ([DeliveryMethodConfigurationPricingCalculatedCalculatedMaximumFeeCurrencyOptionsValue](../models/DeliveryMethodConfigurationPricingCalculatedCalculatedMaximumFeeCurrencyOptionsValue.md#deliverymethodconfigurationpricingcalculatedcalculatedmaximumfeecurrencyoptionsvalue) and [MoneyValue](../models/MoneyValue.md#moneyvalue)) | Maximum delivery fee by ISO currency code. Each key must equal the Money object's currency. |
| `minimum_fee_currency_options` | Optional | Map of ([DeliveryMethodConfigurationPricingCalculatedCalculatedMinimumFeeCurrencyOptionsValue](../models/DeliveryMethodConfigurationPricingCalculatedCalculatedMinimumFeeCurrencyOptionsValue.md#deliverymethodconfigurationpricingcalculatedcalculatedminimumfeecurrencyoptionsvalue) and [MoneyValue](../models/MoneyValue.md#moneyvalue)) | Minimum delivery fee by ISO currency code. Each key must equal the Money object's currency. |
| `per_item_handling_fee_currency_options` | Optional | Map of ([DeliveryMethodConfigurationPricingCalculatedCalculatedPerItemHandlingFeeCurrencyOptionsValue](../models/DeliveryMethodConfigurationPricingCalculatedCalculatedPerItemHandlingFeeCurrencyOptionsValue.md#deliverymethodconfigurationpricingcalculatedcalculatedperitemhandlingfeecurrencyoptionsvalue) and [MoneyValue](../models/MoneyValue.md#moneyvalue)) | Handling fee per item by ISO currency code. Each key must equal the Money object's currency. |
| `weight` | Optional | [DeliveryMethodConfigurationPricingCalculatedCalculatedWeight](../models/DeliveryMethodConfigurationPricingCalculatedCalculatedWeight.md#deliverymethodconfigurationpricingcalculatedcalculatedweight) | Charge per unit of weight of the items. Price per unit of weight for calculated pricing: a price per currency for each `unit_quantity` of the chosen weight `unit`. `weight`: [field definitions](../models/DeliveryMethodConfigurationPricingCalculatedCalculated.md#deliverymethodconfigurationpricingcalculatedcalculatedweight-fields-1). |

### DeliveryMethodConfigurationPricingCalculatedCalculated.distance fields 1

Charge per unit of distance between the origin and the destination. A distance rate for calculated delivery pricing: a price by currency for each `unit_quantity` of `unit`.

Field definitions: [shared fields](DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationpricingcalculateddistance).

### DeliveryMethodConfigurationPricingCalculatedCalculated.weight fields 1

Charge per unit of weight of the items. Price per unit of weight for calculated pricing: a price per currency for each `unit_quantity` of the chosen weight `unit`.

Field definitions: [shared fields](DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationpricingcalculatedweight).

