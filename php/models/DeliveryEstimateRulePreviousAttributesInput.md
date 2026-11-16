[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryEstimateRulePreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `schedule_window` | Optional | [DeliveryScheduleWindowRulePreviousAttributesInput](../models/DeliveryScheduleWindowRulePreviousAttributesInput.md#deliveryschedulewindowrulepreviousattributesinput) or null | Weekly schedule of delivery windows. Set only when `type` is `schedule_window`. |
| `transit_time` | Optional | [DeliveryTransitTimeRulePreviousAttributesInput](../models/DeliveryTransitTimeRulePreviousAttributesInput.md#deliverytransittimerulepreviousattributesinput) or null | Handling and transit time. Set only when `type` is `transit_time`. |
| `type` | Optional | string or null | How Flint estimates timing. Set the property named by this value. Values: `"none"`, `"transit_time"`, `"schedule_window"`. `type`: [declared alternatives](../models/DeliveryEstimateRulePreviousAttributesInput.md#deliveryestimaterulepreviousattributesinputtype). |

### DeliveryEstimateRulePreviousAttributesInput.type

### DeliveryEstimateRulePreviousAttributesInput.type variant 1

anyOf variant 1: How Flint estimates timing. Set the property named by this value..

- Value shape: string. How Flint estimates timing. Set the property named by this value. Values: `"none"`, `"transit_time"`, `"schedule_window"`.

### DeliveryEstimateRulePreviousAttributesInput.type variant 2

anyOf variant 2.

- Value shape: null. How Flint estimates timing. Set the property named by this value. 

