[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryPricingRateCreateRequestInput

A rate to add when creating a rate table pricing strategy: a `when` condition, a `priority`, and a price per currency.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `currency_options` | Required | Map of [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) |  |
| `priority` | Required | integer | Rates are checked from the highest priority to the lowest. The first matching rate sets the price. Priorities must be unique and at least 0. Format: `int32`. |
| `when` | Required | [DeliveryEligibilityExpressionRequestInput](../models/DeliveryEligibilityExpressionRequestInput.md#deliveryeligibilityexpressionrequestinput) | A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes. `when`: [declared alternatives](../models/DeliveryEligibilityExpressionRequestInput.md#deliveryeligibilityexpressionrequestinputall). |

### DeliveryPricingRateCreateRequestInput.when

Declared alternatives: [DeliveryEligibilityExpressionRequestInput.all[]](../models/DeliveryEligibilityExpressionRequestInput.md#deliveryeligibilityexpressionrequestinputall).

