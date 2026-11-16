[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryTransitTimeRulePreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `handling_days` | Optional | [DeliveryBusinessDayRangePreviousAttributes](../models/DeliveryBusinessDayRangePreviousAttributes.md#deliverybusinessdayrangepreviousattributes) or null | Business days the merchant needs to prepare the order. |
| `transit_days` | Optional | [DeliveryBusinessDayRangePreviousAttributes](../models/DeliveryBusinessDayRangePreviousAttributes.md#deliverybusinessdayrangepreviousattributes) or null | Business days the order spends in transit. |

