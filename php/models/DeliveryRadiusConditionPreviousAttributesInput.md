[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryRadiusConditionPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `maximum_distance` | Optional | [DeliveryDistancePreviousAttributesInput](../models/DeliveryDistancePreviousAttributesInput.md#deliverydistancepreviousattributesinput) or null | The largest distance from the origin that still matches. |
| `measurement` | Optional | string or null | How Flint measures the distance. Values: `"straight_line"`. `measurement`: [declared alternatives](../models/DeliveryRadiusConditionPreviousAttributesInput.md#deliveryradiusconditionpreviousattributesinputmeasurement). |
| `origin` | Optional | [DeliveryRadiusOriginPreviousAttributesInput](../models/DeliveryRadiusOriginPreviousAttributesInput.md#deliveryradiusoriginpreviousattributesinput) or null | The point to measure the distance from. |
| `subject` | Optional | string or null | Address facts tested by this condition. destination_address is the shipping destination. buyer_location is the buyer's current pickup or local-delivery location. Values: `"destination_address"`, `"buyer_location"`. `subject`: [declared alternatives](../models/DeliveryCountryConditionPreviousAttributesInput.md#deliverycountryconditionpreviousattributesinputsubject). |

### DeliveryRadiusConditionPreviousAttributesInput.measurement

### DeliveryRadiusConditionPreviousAttributesInput.measurement variant 1

anyOf variant 1: How Flint measures the distance..

- Value shape: string. How Flint measures the distance. How Flint measures the distance. Default: `"straight_line"`. Values: `"straight_line"`.

### DeliveryRadiusConditionPreviousAttributesInput.measurement variant 2

anyOf variant 2.

- Value shape: null. How Flint measures the distance. 

### DeliveryRadiusConditionPreviousAttributesInput.subject

Declared alternatives: [DeliveryCountryConditionPreviousAttributesInput.subject](../models/DeliveryCountryConditionPreviousAttributesInput.md#deliverycountryconditionpreviousattributesinputsubject).

