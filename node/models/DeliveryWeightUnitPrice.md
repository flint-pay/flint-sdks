[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryWeightUnitPrice







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `currency_options` | Required | Map of [MoneyValue](../models/MoneyValue.md#moneyvalue) | `currency_options{}`: [field definitions](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options). |
| `unit` | Required | string | Weight unit used by unit_quantity. Values: `"gram"`, `"kilogram"`, `"ounce"`, `"pound"`. |
| `unit_quantity` | Required | integer | Whole-number quantity of the selected unit charged at each configured currency price; fractional quantities are not supported. Format: `int64`. minimum: `1`. |

### DeliveryWeightUnitPrice variant 1

anyOf variant 1: Declared schema DeliveryWeightUnitPrice. Price per unit of weight for calculated pricing: a price per currency for each `unit_quantity` of the chosen weight `unit`..

No additional constraints.

### DeliveryWeightUnitPrice variant 2

anyOf variant 2: Declared schema DeliveryWeightUnitPriceRequest. Price per unit of weight you supply for calculated pricing: a price per currency for each `unit_quantity` of the chosen weight `unit`..

No additional constraints.

### DeliveryWeightUnitPrice.currency_options{}

Field definitions: [BuyerCheckoutSession.tip.smart_tip_money_options[]](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options).

