[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryEligibilityExpressionPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `all` | Optional | Array of [DeliveryEligibilityExpressionPreviousAttributesInput](../models/DeliveryEligibilityExpressionPreviousAttributesInput.md#deliveryeligibilityexpressionpreviousattributesinput) or null | Matches when every nested expression matches. `all`: [declared alternatives](../models/DeliveryEligibilityExpressionPreviousAttributesInput.md#deliveryeligibilityexpressionpreviousattributesinputall). |
| `any` | Optional | Array of [DeliveryEligibilityExpressionPreviousAttributesInput](../models/DeliveryEligibilityExpressionPreviousAttributesInput.md#deliveryeligibilityexpressionpreviousattributesinput) or null | Matches when at least one nested expression matches. `any`: [declared alternatives](../models/DeliveryEligibilityExpressionPreviousAttributesInput.md#deliveryeligibilityexpressionpreviousattributesinputany). |
| `country` | Optional | [DeliveryCountryConditionPreviousAttributesInput](../models/DeliveryCountryConditionPreviousAttributesInput.md#deliverycountryconditionpreviousattributesinput) or null | Matches when the address is in one of the listed countries. |
| `customer_has_email` | Optional | [DeliveryCustomerBooleanConditionPreviousAttributesInput](../models/DeliveryCustomerBooleanConditionPreviousAttributesInput.md#deliverycustomerbooleanconditionpreviousattributesinput) or null | Matches when whether the customer has an email address equals `value`. |
| `customer_has_phone` | Optional | [DeliveryCustomerBooleanConditionPreviousAttributesInput](../models/DeliveryCustomerBooleanConditionPreviousAttributesInput.md#deliverycustomerbooleanconditionpreviousattributesinput) or null | Matches when whether the customer has a phone number equals `value`. |
| `customer_merchant_verified` | Optional | [DeliveryCustomerBooleanConditionPreviousAttributesInput](../models/DeliveryCustomerBooleanConditionPreviousAttributesInput.md#deliverycustomerbooleanconditionpreviousattributesinput) or null | Matches the is_merchant_verified flag you set on the customer against value. |
| `customer_segment` | Optional | [DeliveryCustomerSegmentConditionPreviousAttributesInput](../models/DeliveryCustomerSegmentConditionPreviousAttributesInput.md#deliverycustomersegmentconditionpreviousattributesinput) or null | Matches the free-form segment you assign to the customer against values. |
| `not` | Optional | [DeliveryEligibilityExpressionPreviousAttributesInput](../models/DeliveryEligibilityExpressionPreviousAttributesInput.md#deliveryeligibilityexpressionpreviousattributesinput) or null | Matches when the nested expression does not match. |
| `postal_code` | Optional | [DeliveryPostalCodeConditionPreviousAttributesInput](../models/DeliveryPostalCodeConditionPreviousAttributesInput.md#deliverypostalcodeconditionpreviousattributesinput) or null | Matches when the address postal code matches one of the listed codes. |
| `radius` | Optional | [DeliveryRadiusConditionPreviousAttributesInput](../models/DeliveryRadiusConditionPreviousAttributesInput.md#deliveryradiusconditionpreviousattributesinput) or null | Matches when the address is within a set distance of an origin. |
| `state` | Optional | [DeliveryStateConditionPreviousAttributesInput](../models/DeliveryStateConditionPreviousAttributesInput.md#deliverystateconditionpreviousattributesinput) or null | Matches when the address is in one of the listed states or provinces. |
| `subscription_purchase` | Optional | [DeliveryCustomerBooleanConditionPreviousAttributesInput](../models/DeliveryCustomerBooleanConditionPreviousAttributesInput.md#deliverycustomerbooleanconditionpreviousattributesinput) or null | Matches when whether the purchase is a subscription purchase equals `value`. |
| `window_time` | Optional | [DeliveryWindowTimeConditionPreviousAttributesInput](../models/DeliveryWindowTimeConditionPreviousAttributesInput.md#deliverywindowtimeconditionpreviousattributesinput) or null | Matches when the delivery window falls on the listed weekdays and within the listed time of day, in the window's timezone. |
| `zone` | Optional | [DeliveryZoneConditionPreviousAttributesInput](../models/DeliveryZoneConditionPreviousAttributesInput.md#deliveryzoneconditionpreviousattributesinput) or null | Matches when the address is inside the delivery zone you name. |

### DeliveryEligibilityExpressionPreviousAttributesInput variant 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14

anyOf variant 1; anyOf variant 2; anyOf variant 3; anyOf variant 4; anyOf variant 5; anyOf variant 6; anyOf variant 7; anyOf variant 8; anyOf variant 9; anyOf variant 10; anyOf variant 11; anyOf variant 12; anyOf variant 13; anyOf variant 14.

No additional constraints.

### DeliveryEligibilityExpressionPreviousAttributesInput.all

### DeliveryEligibilityExpressionPreviousAttributesInput.all variant 1

anyOf variant 1: Matches when every nested expression matches..

- Value shape: Array of ([DeliveryEligibilityExpressionPreviousAttributesInput](../models/DeliveryEligibilityExpressionPreviousAttributesInput.md#deliveryeligibilityexpressionpreviousattributesinput) and Alternative shapes (see declared variants)). Matches when every nested expression matches. Matches when every nested expression matches. minItems: `1`. maxItems: `100`. 

### DeliveryEligibilityExpressionPreviousAttributesInput.all variant 2

anyOf variant 2.

- Value shape: null. Matches when every nested expression matches. 

### DeliveryEligibilityExpressionPreviousAttributesInput.any

### DeliveryEligibilityExpressionPreviousAttributesInput.any variant 1

anyOf variant 1: Matches when at least one nested expression matches..

- Value shape: Array of ([DeliveryEligibilityExpressionPreviousAttributesInput](../models/DeliveryEligibilityExpressionPreviousAttributesInput.md#deliveryeligibilityexpressionpreviousattributesinput) and Alternative shapes (see declared variants)). Matches when at least one nested expression matches. Matches when at least one nested expression matches. minItems: `1`. maxItems: `100`. 

### DeliveryEligibilityExpressionPreviousAttributesInput.any variant 2

anyOf variant 2.

- Value shape: null. Matches when at least one nested expression matches. 

