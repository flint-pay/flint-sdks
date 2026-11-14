[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryRadiusCondition







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `maximum_distance` | Required | [DeliveryDistance](../models/DeliveryDistance.md#deliverydistance) | The largest distance from the origin that still matches. `maximum_distance`: [field definitions](../models/DeliveryEligibilityExpression.md#deliveryeligibilityexpressionallradiusmaximum_distance), [field definitions](../models/DeliveryEligibilityExpressionRequest.md#deliveryeligibilityexpressionrequestallradiusmaximum_distance). |
| `measurement` | Optional | string | How Flint measures the distance. Default: `"straight_line"`. Values: `"straight_line"`. |
| `origin` | Required | [DeliveryRadiusOrigin](../models/DeliveryRadiusOrigin.md#deliveryradiusorigin) | The point to measure the distance from. The point a radius condition measures from: a specific Location (`location_id`) or the delivery method's own origin (`method_origin`). |
| `subject` | Optional | string | Address facts tested by this condition. destination_address is the shipping destination. buyer_location is the buyer's current pickup or local-delivery location. Default: `"destination_address"`. Values: `"destination_address"`, `"buyer_location"`. |

### DeliveryRadiusCondition variant 1: `measurement` = `"straight_line"`

anyOf variant 1: Declared schema DeliveryRadiusCondition. Eligibility condition that matches when the destination or buyer location is within `maximum_distance` of an origin, measured in a straight line..

No additional constraints.

### DeliveryRadiusCondition variant 2: `measurement` = `"straight_line"`

anyOf variant 2: Declared schema DeliveryRadiusConditionRequest. Eligibility condition that matches when the destination or buyer location is within `maximum_distance` of an origin, measured in a straight line..

No additional constraints.

### DeliveryRadiusCondition variant 1.maximum_distance

Field definitions: [DeliveryEligibilityExpression.all[].radius.maximum_distance](../models/DeliveryEligibilityExpression.md#deliveryeligibilityexpressionallradiusmaximum_distance).

### DeliveryRadiusCondition variant 2.maximum_distance

Field definitions: [DeliveryEligibilityExpressionRequest.all[].radius.maximum_distance](../models/DeliveryEligibilityExpressionRequest.md#deliveryeligibilityexpressionrequestallradiusmaximum_distance).

