[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryPricingRateRequest

A rate in a rate table pricing strategy you send when updating a delivery method. Include `delivery_rate_id` to keep or update an existing rate.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `currency_options` | Required | Map of [MoneyValue](../models/MoneyValue.md#moneyvalue) | `currency_options{}`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money). |
| `delivery_rate_id` | Optional | string | Stable rate identifier returned by Flint. Include it when updating or retaining an existing rate. minLength: `1`. |
| `priority` | Required | integer | Rates are checked from the highest priority to the lowest. The first matching rate sets the price. Priorities must be unique and at least 0. Format: `int32`. |
| `when` | Required | [DeliveryEligibilityExpression](../models/DeliveryEligibilityExpression.md#deliveryeligibilityexpression) | A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes. `when`: [declared alternatives](../models/DeliveryEligibilityExpression.md#deliveryeligibilityexpressionall). |

### DeliveryPricingRateRequest.currency_options{}

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money).

### DeliveryPricingRateRequest.when

Declared alternatives: [DeliveryEligibilityExpression.all[]](../models/DeliveryEligibilityExpression.md#deliveryeligibilityexpressionall).

