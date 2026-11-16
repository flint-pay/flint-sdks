[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryPricingRatePreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `currency_options` | Optional | Map of [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Price by ISO 4217 currency code. Each key must equal the currency of its Money value. `currency_options`: [declared alternatives](../models/DeliveryDistanceUnitPricePreviousAttributesInput.md#deliverydistanceunitpricepreviousattributesinputcurrency_options). |
| `delivery_rate_id` | Optional | string or null | ID of this rate. Flint assigns it. `delivery_rate_id`: [declared alternatives](../models/DeliveryPricingRatePreviousAttributesInput.md#deliverypricingratepreviousattributesinputdelivery_rate_id). |
| `priority` | Optional | integer or null | Rates are checked from the highest priority to the lowest. The first matching rate sets the price. Priorities must be unique and at least 0. `priority`: [declared alternatives](../models/DeliveryPricingRatePreviousAttributesInput.md#deliverypricingratepreviousattributesinputpriority). |
| `when` | Optional | ([DeliveryEligibilityExpressionPreviousAttributesInput](../models/DeliveryEligibilityExpressionPreviousAttributesInput.md#deliveryeligibilityexpressionpreviousattributesinput) or null) or null | Eligibility expression that decides whether this rate applies. The rate matches when the expression matches. `null` when a stored rate has no condition. Flint requires a condition on every rate, so expect an expression. |

### DeliveryPricingRatePreviousAttributesInput.currency_options

Declared alternatives: [DeliveryDistanceUnitPricePreviousAttributesInput.currency_options](../models/DeliveryDistanceUnitPricePreviousAttributesInput.md#deliverydistanceunitpricepreviousattributesinputcurrency_options).

### DeliveryPricingRatePreviousAttributesInput.delivery_rate_id

### DeliveryPricingRatePreviousAttributesInput.delivery_rate_id variant 1

anyOf variant 1: ID of this rate. Flint assigns it..

- Value shape: string. ID of this rate. Flint assigns it. ID of this rate. Flint assigns it. Example: `"drate_01KEZF7C00FD0B4QEC0M00MJ4S"`. 

### DeliveryPricingRatePreviousAttributesInput.delivery_rate_id variant 2

anyOf variant 2.

- Value shape: null. ID of this rate. Flint assigns it. 

### DeliveryPricingRatePreviousAttributesInput.priority

### DeliveryPricingRatePreviousAttributesInput.priority variant 1

anyOf variant 1: Rates are checked from the highest priority to the lowest. The first matching rate sets the price. Priorities must be unique and at least 0..

- Value shape: integer. Rates are checked from the highest priority to the lowest. The first matching rate sets the price. Priorities must be unique and at least 0. Rates are checked from the highest priority to the lowest. The first matching rate sets the price. Priorities must be unique and at least 0. Format: `int32`. 

### DeliveryPricingRatePreviousAttributesInput.priority variant 2

anyOf variant 2.

- Value shape: null. Rates are checked from the highest priority to the lowest. The first matching rate sets the price. Priorities must be unique and at least 0. 

