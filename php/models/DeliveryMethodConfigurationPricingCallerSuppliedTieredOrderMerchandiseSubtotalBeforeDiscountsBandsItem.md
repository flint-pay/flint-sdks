[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryMethodConfigurationPricingCallerSuppliedTieredOrderMerchandiseSubtotalBeforeDiscountsBandsItem

One band of a tiered pricing strategy, covering values of the strategy's `basis` from `from` to `to`, with a price per currency.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `currency_options` | Required | Map of ([DeliveryMethodConfigurationPricingCallerSuppliedTieredOrderMerchandiseSubtotalBeforeDiscountsBandsItemCurrencyOptionsValue](../models/DeliveryMethodConfigurationPricingCallerSuppliedTieredOrderMerchandiseSubtotalBeforeDiscountsBandsItemCurrencyOptionsValue.md#deliverymethodconfigurationpricingcallersuppliedtieredordermerchandisesubtotalbeforediscountsbandsitemcurrencyoptionsvalue) and [MoneyValue](../models/MoneyValue.md#moneyvalue)) |  |
| `from` | Required | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `to` | Optional | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |

