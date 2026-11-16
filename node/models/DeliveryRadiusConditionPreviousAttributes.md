[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryRadiusConditionPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `maximum_distance` | Optional | [DeliveryDistancePreviousAttributes](../models/DeliveryDistancePreviousAttributes.md#deliverydistancepreviousattributes) or null | The largest distance from the origin that still matches. |
| `measurement` | Optional | string or null | How Flint measures the distance. Values: `"straight_line"`. `measurement`: [declared alternatives](../models/DeliveryRadiusConditionPreviousAttributes.md#deliveryradiusconditionpreviousattributesmeasurement). |
| `origin` | Optional | [DeliveryRadiusOriginPreviousAttributes](../models/DeliveryRadiusOriginPreviousAttributes.md#deliveryradiusoriginpreviousattributes) or null | The point to measure the distance from. |
| `subject` | Optional | string or null | Address facts tested by this condition. destination_address is the shipping destination. buyer_location is the buyer's current pickup or local-delivery location. Values: `"destination_address"`, `"buyer_location"`. `subject`: [declared alternatives](../models/DeliveryEligibilityExpressionPreviousAttributes.md#deliveryeligibilityexpressionpreviousattributescountry-variant-1subject). |

### DeliveryRadiusConditionPreviousAttributes.measurement

### DeliveryRadiusConditionPreviousAttributes.measurement variant 1

anyOf variant 1: How Flint measures the distance..

- Value shape: string. How Flint measures the distance. How Flint measures the distance. Default: `"straight_line"`. Values: `"straight_line"`.

### DeliveryRadiusConditionPreviousAttributes.measurement variant 2

anyOf variant 2.

- Value shape: null. How Flint measures the distance. 

### DeliveryRadiusConditionPreviousAttributes.subject

Declared alternatives: [DeliveryEligibilityExpressionPreviousAttributes.country variant 1.subject](../models/DeliveryEligibilityExpressionPreviousAttributes.md#deliveryeligibilityexpressionpreviousattributescountry-variant-1subject).

