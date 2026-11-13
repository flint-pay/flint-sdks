[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryPricingRateCreateRequest

A rate to add when creating a rate table pricing strategy: a `when` condition, a `priority`, and a price per currency.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `currency_options` | Required | Map of [MoneyValue](../models/MoneyValue.md#moneyvalue) | Price by ISO 4217 currency code. Each key must equal the currency of its Money value. `currency_options{}`: [field definitions](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options). |
| `priority` | Required | integer | Rates are checked from the highest priority to the lowest. The first matching rate sets the price. Priorities must be unique and at least 0. Format: `int32`. |
| `when` | Required | [DeliveryEligibilityExpressionRequest](../models/DeliveryEligibilityExpressionRequest.md#deliveryeligibilityexpressionrequest) | Eligibility expression that decides whether this rate applies. The rate matches when the expression matches. A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes. |

### DeliveryPricingRateCreateRequest.currency_options{}

Field definitions: [BuyerCheckoutSession.tip.smart_tip_money_options[]](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options).

