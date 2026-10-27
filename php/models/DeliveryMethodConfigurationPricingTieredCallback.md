[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryMethodConfigurationPricingTieredCallback

Delivery pricing that comes from outside Flint, from a delivery rate callback or the caller, bounded by minimum and maximum fees by currency.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_rate_callback_id` | Optional | string |  |
| `delivery_rate_callback_revision_id` | Optional | string |  |
| `maximum_fee_currency_options` | Required | Map of ([DeliveryMethodConfigurationPricingTieredCallbackMaximumFeeCurrencyOptionsValue](../models/DeliveryMethodConfigurationPricingTieredCallbackMaximumFeeCurrencyOptionsValue.md#deliverymethodconfigurationpricingtieredcallbackmaximumfeecurrencyoptionsvalue) and [MoneyValue](../models/MoneyValue.md#moneyvalue)) | Maximum delivery fee by ISO currency code. Each key must equal the Money object's currency. |
| `minimum_fee_currency_options` | Required | Map of ([DeliveryMethodConfigurationPricingTieredCallbackMinimumFeeCurrencyOptionsValue](../models/DeliveryMethodConfigurationPricingTieredCallbackMinimumFeeCurrencyOptionsValue.md#deliverymethodconfigurationpricingtieredcallbackminimumfeecurrencyoptionsvalue) and [MoneyValue](../models/MoneyValue.md#moneyvalue)) | Minimum delivery fee by ISO currency code. Each key must equal the Money object's currency. |
| `preview_enabled` | Optional | boolean |  |

