[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryPricingRateRequestInput

A rate in a rate table pricing strategy you send when updating a delivery method. Include `delivery_rate_id` to keep or update an existing rate.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `currency_options` | Required | Map of [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) |  |
| `delivery_rate_id` | Optional | string | Stable rate identifier returned by Flint. Include it when updating or retaining an existing rate. minLength: `1`. |
| `priority` | Required | integer | Rates are checked from the highest priority to the lowest. The first matching rate sets the price. Priorities must be unique and at least 0. Format: `int32`. |
| `when` | Required | [DeliveryEligibilityExpressionInput](../models/DeliveryEligibilityExpressionInput.md#deliveryeligibilityexpressioninput) | A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes. `when`: [declared alternatives](../models/DeliveryPricingRateCreateRequestInput.md#deliverypricingratecreaterequestinputwhen). |

### DeliveryPricingRateRequestInput.when

Declared alternatives: [DeliveryPricingRateCreateRequestInput.when](../models/DeliveryPricingRateCreateRequestInput.md#deliverypricingratecreaterequestinputwhen).

