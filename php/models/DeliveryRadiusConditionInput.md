[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryRadiusConditionInput

Eligibility condition that matches when the destination or buyer location is within `maximum_distance` of an origin, measured in a straight line.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `maximum_distance` | Required | [DeliveryDistanceInput](../models/DeliveryDistanceInput.md#deliverydistanceinput) | A distance as a `value` in meters, kilometers, or miles. |
| `measurement` | Optional | string | Default: `"straight_line"`. Values: `"straight_line"`. |
| `origin` | Required | [DeliveryRadiusOriginInput](../models/DeliveryRadiusOriginInput.md#deliveryradiusorigininput) | The point a radius condition measures from: a specific Location (`location_id`) or the delivery method's own origin (`method_origin`). |
| `subject` | Optional | string | Address facts tested by this condition. destination_address is the shipping destination. buyer_location is the buyer's current pickup or local-delivery location. Default: `"destination_address"`. Values: `"destination_address"`, `"buyer_location"`. |

