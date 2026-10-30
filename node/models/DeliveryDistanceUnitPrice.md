[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryDistanceUnitPrice







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `currency_options` | Required | Map of [MoneyValue](../models/MoneyValue.md#moneyvalue) | `currency_options{}`: [field definitions](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options). |
| `unit` | Required | string | Distance unit used by unit_quantity. Values: `"meter"`, `"kilometer"`, `"mile"`. |
| `unit_quantity` | Required | integer | Whole-number quantity of the selected unit charged at each configured currency price; fractional quantities are not supported. Format: `int64`. minimum: `1`. |

### DeliveryDistanceUnitPrice variant 1

anyOf variant 1: Declared schema DeliveryDistanceUnitPrice. A distance rate for calculated delivery pricing: a price by currency for each `unit_quantity` of `unit`..

No additional constraints.

### DeliveryDistanceUnitPrice variant 2

anyOf variant 2: Declared schema DeliveryDistanceUnitPriceRequest. A distance rate you supply for calculated delivery pricing: a price by currency for each `unit_quantity` of `unit`..

No additional constraints.

### DeliveryDistanceUnitPrice.currency_options{}

Field definitions: [BuyerCheckoutSession.tip.smart_tip_money_options[]](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options).

