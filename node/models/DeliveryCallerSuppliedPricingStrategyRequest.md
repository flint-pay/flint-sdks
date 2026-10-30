[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryCallerSuppliedPricingStrategyRequest

Delivery pricing where you supply the rate when creating a delivery quote, bounded by minimum and maximum fees by currency.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `maximum_fee_currency_options` | Required | Map of [MoneyValue](../models/MoneyValue.md#moneyvalue) | Maximum delivery fee by ISO currency code. Each key must equal the Money object's currency. `maximum_fee_currency_options{}`: [field definitions](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options). |
| `minimum_fee_currency_options` | Required | Map of [MoneyValue](../models/MoneyValue.md#moneyvalue) | Minimum delivery fee by ISO currency code. Each key must equal the Money object's currency. `minimum_fee_currency_options{}`: [field definitions](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options). |

### DeliveryCallerSuppliedPricingStrategyRequest.maximum_fee_currency_options{}

Field definitions: [BuyerCheckoutSession.tip.smart_tip_money_options[]](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options).

### DeliveryCallerSuppliedPricingStrategyRequest.minimum_fee_currency_options{}

Field definitions: [BuyerCheckoutSession.tip.smart_tip_money_options[]](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options).

