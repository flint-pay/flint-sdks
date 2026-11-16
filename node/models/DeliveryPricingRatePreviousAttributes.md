[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryPricingRatePreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `currency_options` | Optional | Map of [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Price by ISO 4217 currency code. Each key must equal the currency of its Money value. `currency_options`: [declared alternatives](../models/DeliveryDistanceUnitPricePreviousAttributes.md#deliverydistanceunitpricepreviousattributescurrency_options). |
| `delivery_rate_id` | Optional | string or null | ID of this rate. Flint assigns it. `delivery_rate_id`: [declared alternatives](../models/DeliveryPricingRatePreviousAttributes.md#deliverypricingratepreviousattributesdelivery_rate_id). |
| `priority` | Optional | integer or null | Rates are checked from the highest priority to the lowest. The first matching rate sets the price. Priorities must be unique and at least 0. `priority`: [declared alternatives](../models/DeliveryPricingRatePreviousAttributes.md#deliverypricingratepreviousattributespriority). |
| `when` | Optional | ([DeliveryEligibilityExpressionPreviousAttributes](../models/DeliveryEligibilityExpressionPreviousAttributes.md#deliveryeligibilityexpressionpreviousattributes) or null) or null | Eligibility expression that decides whether this rate applies. The rate matches when the expression matches. `null` when a stored rate has no condition. Flint requires a condition on every rate, so expect an expression. |

### DeliveryPricingRatePreviousAttributes.currency_options

Declared alternatives: [DeliveryDistanceUnitPricePreviousAttributes.currency_options](../models/DeliveryDistanceUnitPricePreviousAttributes.md#deliverydistanceunitpricepreviousattributescurrency_options).

### DeliveryPricingRatePreviousAttributes.delivery_rate_id

### DeliveryPricingRatePreviousAttributes.delivery_rate_id variant 1

anyOf variant 1: ID of this rate. Flint assigns it..

- Value shape: string. ID of this rate. Flint assigns it. ID of this rate. Flint assigns it. Example: `"drate_01KEZF7C00FD0B4QEC0M00MJ4S"`. 

### DeliveryPricingRatePreviousAttributes.delivery_rate_id variant 2

anyOf variant 2.

- Value shape: null. ID of this rate. Flint assigns it. 

### DeliveryPricingRatePreviousAttributes.priority

### DeliveryPricingRatePreviousAttributes.priority variant 1

anyOf variant 1: Rates are checked from the highest priority to the lowest. The first matching rate sets the price. Priorities must be unique and at least 0..

- Value shape: integer. Rates are checked from the highest priority to the lowest. The first matching rate sets the price. Priorities must be unique and at least 0. Rates are checked from the highest priority to the lowest. The first matching rate sets the price. Priorities must be unique and at least 0. Format: `int32`. 

### DeliveryPricingRatePreviousAttributes.priority variant 2

anyOf variant 2.

- Value shape: null. Rates are checked from the highest priority to the lowest. The first matching rate sets the price. Priorities must be unique and at least 0. 

