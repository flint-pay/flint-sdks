[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryMethodConfigurationPricingCallbackCallback

Delivery pricing that comes from outside Flint, from a delivery rate callback or the caller, bounded by minimum and maximum fees by currency.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_rate_callback_id` | Optional | string |  |
| `delivery_rate_callback_revision_id` | Optional | string |  |
| `maximum_fee_currency_options` | Required | Map of ([DeliveryMethodConfigurationPricingCallbackCallbackMaximumFeeCurrencyOptionsValue](../models/DeliveryMethodConfigurationPricingCallbackCallbackMaximumFeeCurrencyOptionsValue.md#deliverymethodconfigurationpricingcallbackcallbackmaximumfeecurrencyoptionsvalue) and [MoneyValue](../models/MoneyValue.md#moneyvalue)) | Maximum delivery fee by ISO currency code. Each key must equal the Money object's currency. |
| `minimum_fee_currency_options` | Required | Map of ([DeliveryMethodConfigurationPricingCallbackCallbackMinimumFeeCurrencyOptionsValue](../models/DeliveryMethodConfigurationPricingCallbackCallbackMinimumFeeCurrencyOptionsValue.md#deliverymethodconfigurationpricingcallbackcallbackminimumfeecurrencyoptionsvalue) and [MoneyValue](../models/MoneyValue.md#moneyvalue)) | Minimum delivery fee by ISO currency code. Each key must equal the Money object's currency. |
| `preview_enabled` | Optional | boolean |  |

