[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryMethodConfigurationPricingFixedCallback

Rate callback pricing settings. Set only when `type` is `callback`.

Delivery pricing that comes from outside Flint, from a delivery rate callback or the caller, bounded by minimum and maximum fees by currency.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_rate_callback_id` | Optional | string | ID of the delivery rate callback that supplies the price. |
| `delivery_rate_callback_revision_id` | Optional | string | ID of the rate callback revision the method uses. |
| `maximum_fee_currency_options` | Required | Map of ([DeliveryMethodConfigurationPricingFixedCallbackMaximumFeeCurrencyOptionsValue](../models/DeliveryMethodConfigurationPricingFixedCallbackMaximumFeeCurrencyOptionsValue.md#deliverymethodconfigurationpricingfixedcallbackmaximumfeecurrencyoptionsvalue) and [MoneyValue](../models/MoneyValue.md#moneyvalue)) | Maximum delivery fee by ISO currency code. Each key must equal the Money object's currency. |
| `minimum_fee_currency_options` | Required | Map of ([DeliveryMethodConfigurationPricingFixedCallbackMinimumFeeCurrencyOptionsValue](../models/DeliveryMethodConfigurationPricingFixedCallbackMinimumFeeCurrencyOptionsValue.md#deliverymethodconfigurationpricingfixedcallbackminimumfeecurrencyoptionsvalue) and [MoneyValue](../models/MoneyValue.md#moneyvalue)) | Minimum delivery fee by ISO currency code. Each key must equal the Money object's currency. |
| `preview_enabled` | Optional | boolean | Whether delivery previews call the rate callback. Previews call it only when this setting and the callback's `preview_enabled` setting are both `true`. |

