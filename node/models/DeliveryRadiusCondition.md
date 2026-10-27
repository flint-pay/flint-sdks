[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryRadiusCondition

Eligibility condition that matches when the destination or buyer location is within `maximum_distance` of an origin, measured in a straight line.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `maximum_distance` | Required | [DeliveryDistance](../models/DeliveryDistance.md#deliverydistance) | A distance as a `value` in meters, kilometers, or miles. `maximum_distance`: [field definitions](../models/DeliveryRadiusCondition.md#deliveryradiusconditionmaximum_distance). |
| `measurement` | Optional | string | Default: `"straight_line"`. Values: `"straight_line"`. |
| `origin` | Required | [DeliveryRadiusOrigin](../models/DeliveryRadiusOrigin.md#deliveryradiusorigin) | The point a radius condition measures from: a specific Location (`location_id`) or the delivery method's own origin (`method_origin`). |
| `subject` | Optional | string | Address facts tested by this condition. destination_address is the shipping destination. buyer_location is the buyer's current pickup or local-delivery location. Default: `"destination_address"`. Values: `"destination_address"`, `"buyer_location"`. |

### DeliveryRadiusCondition.maximum_distance

A distance as a `value` in meters, kilometers, or miles.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `unit` | Required | string | Values: `"meter"`, `"kilometer"`, `"mile"`. |
| `value` | Required | number |  |

