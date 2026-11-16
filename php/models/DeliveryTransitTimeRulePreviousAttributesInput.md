[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryTransitTimeRulePreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `handling_days` | Optional | [DeliveryBusinessDayRangePreviousAttributesInput](../models/DeliveryBusinessDayRangePreviousAttributesInput.md#deliverybusinessdayrangepreviousattributesinput) or null | Business days the merchant needs to prepare the order. |
| `transit_days` | Optional | [DeliveryBusinessDayRangePreviousAttributesInput](../models/DeliveryBusinessDayRangePreviousAttributesInput.md#deliverybusinessdayrangepreviousattributesinput) or null | Business days the order spends in transit. |

