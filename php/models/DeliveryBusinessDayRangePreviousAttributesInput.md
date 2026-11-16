[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryBusinessDayRangePreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `maximum` | Optional | integer or null | Most business days, from `minimum` to 365. `maximum`: [declared alternatives](../models/DeliveryBusinessDayRangePreviousAttributesInput.md#deliverybusinessdayrangepreviousattributesinputmaximum). |
| `minimum` | Optional | integer or null | Fewest business days, from 0. `minimum`: [declared alternatives](../models/DeliveryBusinessDayRangePreviousAttributesInput.md#deliverybusinessdayrangepreviousattributesinputminimum). |

### DeliveryBusinessDayRangePreviousAttributesInput.maximum

### DeliveryBusinessDayRangePreviousAttributesInput.maximum variant 1

anyOf variant 1: Most business days, from `minimum` to 365..

- Value shape: integer. Most business days, from `minimum` to 365. 

### DeliveryBusinessDayRangePreviousAttributesInput.maximum variant 2

anyOf variant 2.

- Value shape: null. Most business days, from `minimum` to 365. 

### DeliveryBusinessDayRangePreviousAttributesInput.minimum

### DeliveryBusinessDayRangePreviousAttributesInput.minimum variant 1

anyOf variant 1: Fewest business days, from 0..

- Value shape: integer. Fewest business days, from 0. 

### DeliveryBusinessDayRangePreviousAttributesInput.minimum variant 2

anyOf variant 2.

- Value shape: null. Fewest business days, from 0. 

