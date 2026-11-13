[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryMethodConfigurationPricingRateTableTieredOrderMerchandiseSubtotalAfterLineItemDiscountsBandsItem

One band of a tiered pricing strategy, covering values of the strategy's `basis` from `from` to `to`, with a price per currency.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `currency_options` | Required | Map of ([DeliveryMethodConfigurationPricingRateTableTieredOrderMerchandiseSubtotalAfterLineItemDiscountsBandsItemCurrencyOptionsValue](../models/DeliveryMethodConfigurationPricingRateTableTieredOrderMerchandiseSubtotalAfterLineItemDiscountsBandsItemCurrencyOptionsValue.md#deliverymethodconfigurationpricingratetabletieredordermerchandisesubtotalafterlineitemdiscountsbandsitemcurrencyoptionsvalue) and [MoneyValue](../models/MoneyValue.md#moneyvalue)) | Price by ISO 4217 currency code. Each key must equal the currency of its Money value. |
| `from` | Required | integer | Inclusive lower bound. The first band starts at 0; every later band starts at the previous band's `to`. Format: `int64`. |
| `to` | Optional | integer | Exclusive upper bound. Required for every band except the final band, where it must be omitted. Format: `int64`. |

