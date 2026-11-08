[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryPricingRateCreateRequest

A rate to add when creating a rate table pricing strategy: a `when` condition, a `priority`, and a price per currency.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `currency_options` | Required | Map of [MoneyValue](../models/MoneyValue.md#moneyvalue) | `currency_options{}`: [field definitions](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options). |
| `priority` | Required | integer | Rates are checked from the highest priority to the lowest. The first matching rate sets the price. Priorities must be unique and at least 0. Format: `int32`. |
| `when` | Required | [DeliveryEligibilityExpressionRequest](../models/DeliveryEligibilityExpressionRequest.md#deliveryeligibilityexpressionrequest) | A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes. `when`: [declared alternatives](../models/DeliveryEligibilityExpressionRequest.md#deliveryeligibilityexpressionrequestall). |

### DeliveryPricingRateCreateRequest.currency_options{}

Field definitions: [BuyerCheckoutSession.tip.smart_tip_money_options[]](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options).

### DeliveryPricingRateCreateRequest.when

Declared alternatives: [DeliveryEligibilityExpressionRequest.all[]](../models/DeliveryEligibilityExpressionRequest.md#deliveryeligibilityexpressionrequestall).

