[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryPricingRateRequest

A rate in a rate table pricing strategy you send when updating a delivery method. Include `delivery_rate_id` to keep or update an existing rate.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `currency_options` | Required | Map of [MoneyValue](../models/MoneyValue.md#moneyvalue) | `currency_options{}`: [field definitions](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options). |
| `delivery_rate_id` | Optional | string | Stable rate identifier returned by Flint. Include it when updating or retaining an existing rate. minLength: `1`. Example: `"drate_01KEZF7C00FD0B4QEC0M00MJ4S"`. |
| `priority` | Required | integer | Rates are checked from the highest priority to the lowest. The first matching rate sets the price. Priorities must be unique and at least 0. Format: `int32`. |
| `when` | Required | [DeliveryEligibilityExpressionRequest](../models/DeliveryEligibilityExpressionRequest.md#deliveryeligibilityexpressionrequest) | A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes. `when`: [declared alternatives](../models/DeliveryEligibilityExpressionRequest.md#deliveryeligibilityexpressionrequestall). |

### DeliveryPricingRateRequest.currency_options{}

Field definitions: [BuyerCheckoutSession.tip.smart_tip_money_options[]](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options).

### DeliveryPricingRateRequest.when

Declared alternatives: [DeliveryEligibilityExpressionRequest.all[]](../models/DeliveryEligibilityExpressionRequest.md#deliveryeligibilityexpressionrequestall).

