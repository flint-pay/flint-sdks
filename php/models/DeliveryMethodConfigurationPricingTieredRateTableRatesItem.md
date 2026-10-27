[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryMethodConfigurationPricingTieredRateTableRatesItem

One rate in a rate table pricing strategy: a `when` condition, a `priority`, and a price per currency. The first matching rate by priority sets the price.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `currency_options` | Required | Map of ([DeliveryMethodConfigurationPricingTieredRateTableRatesItemCurrencyOptionsValue](../models/DeliveryMethodConfigurationPricingTieredRateTableRatesItemCurrencyOptionsValue.md#deliverymethodconfigurationpricingtieredratetableratesitemcurrencyoptionsvalue) and [MoneyValue](../models/MoneyValue.md#moneyvalue)) |  |
| `delivery_rate_id` | Required | string |  |
| `priority` | Required | integer | Rates are checked from the highest priority to the lowest. The first matching rate sets the price. Priorities must be unique and at least 0. Format: `int32`. |
| `when` | Required | (object and Alternative shapes (see declared variants) or null) | `when`: [declared alternatives](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen). |

### DeliveryMethodConfigurationPricingTieredRateTableRatesItem.when

Declared alternatives: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen).

