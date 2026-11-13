[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryMethodConfigurationPricingFixedFixed

Fixed pricing settings. Set only when `type` is `fixed`.

A fixed delivery price, by currency.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `currency_options` | Required | Map of ([DeliveryMethodConfigurationPricingFixedFixedCurrencyOptionsValue](../models/DeliveryMethodConfigurationPricingFixedFixedCurrencyOptionsValue.md#deliverymethodconfigurationpricingfixedfixedcurrencyoptionsvalue) and [MoneyValue](../models/MoneyValue.md#moneyvalue)) | Price by ISO 4217 currency code. Each key must equal the currency of its Money value. |

