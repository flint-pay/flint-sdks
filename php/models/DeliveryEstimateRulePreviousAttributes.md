[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryEstimateRulePreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `schedule_window` | Optional | [DeliveryScheduleWindowRulePreviousAttributes](../models/DeliveryScheduleWindowRulePreviousAttributes.md#deliveryschedulewindowrulepreviousattributes) or null | Weekly schedule of delivery windows. Set only when `type` is `schedule_window`. |
| `transit_time` | Optional | [DeliveryTransitTimeRulePreviousAttributes](../models/DeliveryTransitTimeRulePreviousAttributes.md#deliverytransittimerulepreviousattributes) or null | Handling and transit time. Set only when `type` is `transit_time`. |
| `type` | Optional | string or null | How Flint estimates timing. Set the property named by this value. Values: `"none"`, `"transit_time"`, `"schedule_window"`. `type`: [declared alternatives](../models/DeliveryEstimateRulePreviousAttributes.md#deliveryestimaterulepreviousattributestype). |

### DeliveryEstimateRulePreviousAttributes.type

### DeliveryEstimateRulePreviousAttributes.type variant 1

anyOf variant 1: How Flint estimates timing. Set the property named by this value..

- Value shape: string. How Flint estimates timing. Set the property named by this value. Values: `"none"`, `"transit_time"`, `"schedule_window"`.

### DeliveryEstimateRulePreviousAttributes.type variant 2

anyOf variant 2.

- Value shape: null. How Flint estimates timing. Set the property named by this value. 

