[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryMethodConfigurationPricingFixedRateTableRatesItem

One rate in a rate table pricing strategy: a `when` condition, a `priority`, and a price per currency. The first matching rate by priority sets the price.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `currency_options` | Required | Map of ([DeliveryMethodConfigurationPricingFixedRateTableRatesItemCurrencyOptionsValue](../models/DeliveryMethodConfigurationPricingFixedRateTableRatesItemCurrencyOptionsValue.md#deliverymethodconfigurationpricingfixedratetableratesitemcurrencyoptionsvalue) and [MoneyValue](../models/MoneyValue.md#moneyvalue)) | Price by ISO 4217 currency code. Each key must equal the currency of its Money value. |
| `delivery_rate_id` | Required | string | ID of this rate. Flint assigns it. |
| `priority` | Required | integer | Rates are checked from the highest priority to the lowest. The first matching rate sets the price. Priorities must be unique and at least 0. Format: `int32`. |
| `when` | Required | (object and Alternative shapes (see declared variants) or null) | Eligibility expression that decides whether this rate applies. The rate matches when the expression matches. `null` when a stored rate has no condition. Flint requires a condition on every rate, so expect an expression. `when`: [declared alternatives](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen). |

### DeliveryMethodConfigurationPricingFixedRateTableRatesItem.when

Declared alternatives: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen).

