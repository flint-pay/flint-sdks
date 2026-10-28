[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryTransitTimeRule







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `handling_days` | Required | [DeliveryBusinessDayRange](../models/DeliveryBusinessDayRange.md#deliverybusinessdayrange) | `handling_days`: [field definitions](../models/DeliveryEstimateRule.md#deliveryestimaterule-variant-1transit_timehandling_days), [field definitions](../models/CreateDeliveryMethodRequest.md#createdeliverymethodrequest-variant-1configurationestimatetransit_timehandling_days). |
| `transit_days` | Required | [DeliveryBusinessDayRange](../models/DeliveryBusinessDayRange.md#deliverybusinessdayrange) | `transit_days`: [field definitions](../models/DeliveryEstimateRule.md#deliveryestimaterule-variant-1transit_timehandling_days), [field definitions](../models/CreateDeliveryMethodRequest.md#createdeliverymethodrequest-variant-1configurationestimatetransit_timehandling_days). |

### DeliveryTransitTimeRule variant 1

anyOf variant 1: Declared schema DeliveryTransitTimeRule. Estimate rule giving a delivery method's handling time and transit time as ranges of business days..

No additional constraints.

### DeliveryTransitTimeRule variant 2

anyOf variant 2: Declared schema DeliveryTransitTimeRuleRequestRequest. Estimate rule giving a delivery method's handling time and transit time as ranges of business days..

No additional constraints.

### DeliveryTransitTimeRule variant 1.handling_days

Field definitions: [DeliveryEstimateRule variant 1.transit_time.handling_days](../models/DeliveryEstimateRule.md#deliveryestimaterule-variant-1transit_timehandling_days).

### DeliveryTransitTimeRule variant 1.transit_days

Field definitions: [DeliveryEstimateRule variant 1.transit_time.handling_days](../models/DeliveryEstimateRule.md#deliveryestimaterule-variant-1transit_timehandling_days).

### DeliveryTransitTimeRule variant 2.handling_days

Field definitions: [CreateDeliveryMethodRequest variant 1.configuration.estimate.transit_time.handling_days](../models/CreateDeliveryMethodRequest.md#createdeliverymethodrequest-variant-1configurationestimatetransit_timehandling_days).

### DeliveryTransitTimeRule variant 2.transit_days

Field definitions: [CreateDeliveryMethodRequest variant 1.configuration.estimate.transit_time.handling_days](../models/CreateDeliveryMethodRequest.md#createdeliverymethodrequest-variant-1configurationestimatetransit_timehandling_days).

