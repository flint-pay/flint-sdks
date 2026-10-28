[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryScheduleWindowRule







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `availability` | Required | [DeliveryAvailability](../models/DeliveryAvailability.md#deliveryavailability) | `availability`: [field definitions](../models/DeliveryEstimateRule.md#deliveryestimaterule-variant-1schedule_windowavailability), [field definitions](../models/CreateDeliveryMethodRequest.md#createdeliverymethodrequest-variant-1configurationestimateschedule_windowavailability). |

### DeliveryScheduleWindowRule variant 1

anyOf variant 1: Declared schema DeliveryScheduleWindowRule. Estimate rule for a scheduled-window delivery method, defined by its `availability` schedule..

No additional constraints.

### DeliveryScheduleWindowRule variant 2

anyOf variant 2: Declared schema DeliveryScheduleWindowRuleRequest. Scheduled-window estimate rule you supply for a delivery method, defined by its `availability` schedule..

No additional constraints.

### DeliveryScheduleWindowRule variant 1.availability

Field definitions: [DeliveryEstimateRule variant 1.schedule_window.availability](../models/DeliveryEstimateRule.md#deliveryestimaterule-variant-1schedule_windowavailability).

### DeliveryScheduleWindowRule variant 2.availability

Field definitions: [CreateDeliveryMethodRequest variant 1.configuration.estimate.schedule_window.availability](../models/CreateDeliveryMethodRequest.md#createdeliverymethodrequest-variant-1configurationestimateschedule_windowavailability).

