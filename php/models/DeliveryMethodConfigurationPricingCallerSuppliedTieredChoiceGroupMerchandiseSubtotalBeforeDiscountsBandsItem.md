[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryMethodConfigurationPricingCallerSuppliedTieredChoiceGroupMerchandiseSubtotalBeforeDiscountsBandsItem

One band of a tiered pricing strategy, covering values of the strategy's `basis` from `from` to `to`, with a price per currency.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `currency_options` | Required | Map of ([DeliveryMethodConfigurationPricingCallerSuppliedTieredChoiceGroupMerchandiseSubtotalBeforeDiscountsBandsItemCurrencyOptionsValue](../models/DeliveryMethodConfigurationPricingCallerSuppliedTieredChoiceGroupMerchandiseSubtotalBeforeDiscountsBandsItemCurrencyOptionsValue.md#deliverymethodconfigurationpricingcallersuppliedtieredchoicegroupmerchandisesubtotalbeforediscountsbandsitemcurrencyoptionsvalue) and [MoneyValue](../models/MoneyValue.md#moneyvalue)) |  |
| `from` | Required | integer | Format: `int64`. |
| `to` | Optional | integer | Format: `int64`. |

