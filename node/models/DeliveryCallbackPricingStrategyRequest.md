[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryCallbackPricingStrategyRequest

Delivery pricing you supply that comes from a delivery rate callback (`delivery_rate_callback_id`), with minimum and maximum fees by currency.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_rate_callback_id` | Required | string | minLength: `1`. |
| `maximum_fee_currency_options` | Optional | Map of [MoneyValue](../models/MoneyValue.md#moneyvalue) | Maximum delivery fee by ISO currency code. Each key must equal the Money object's currency. `maximum_fee_currency_options{}`: [field definitions](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options). |
| `minimum_fee_currency_options` | Optional | Map of [MoneyValue](../models/MoneyValue.md#moneyvalue) | Minimum delivery fee by ISO currency code. Each key must equal the Money object's currency. `minimum_fee_currency_options{}`: [field definitions](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options). |
| `preview_enabled` | Optional | boolean |  |

### DeliveryCallbackPricingStrategyRequest.maximum_fee_currency_options{}

Field definitions: [BuyerCheckoutSession.tip.smart_tip_money_options[]](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options).

### DeliveryCallbackPricingStrategyRequest.minimum_fee_currency_options{}

Field definitions: [BuyerCheckoutSession.tip.smart_tip_money_options[]](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options).

