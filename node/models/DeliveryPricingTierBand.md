[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryPricingTierBand

Declared schema DeliveryPricingTierBand: One band of a tiered pricing strategy, covering values of the strategy's `basis` from `from` to `to`, with a price per currency.

Declared schema DeliveryPricingTierBandRequest: One band of a tiered pricing strategy you supply, covering values of the strategy's `basis` from `from` to `to`, with a price per currency.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `currency_options` | Required | Map of [MoneyValue](../models/MoneyValue.md#moneyvalue) | `currency_options{}`: [field definitions](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options). |
| `from` | Required | integer | Format: `int64`. |
| `to` | Optional | integer | Format: `int64`. |

### DeliveryPricingTierBand.currency_options{}

Field definitions: [BuyerCheckoutSession.tip.smart_tip_money_options[]](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options).

