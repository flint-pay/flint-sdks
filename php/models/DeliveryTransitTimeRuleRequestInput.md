[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryTransitTimeRuleRequestInput

Estimate rule giving a delivery method's handling time and transit time as ranges of business days.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `handling_days` | Required | [DeliveryBusinessDayRangeRequestInput](../models/DeliveryBusinessDayRangeRequestInput.md#deliverybusinessdayrangerequestinput) | Business days the merchant needs to prepare the order. A minimum and maximum number of business days, used in transit time estimates. |
| `transit_days` | Required | [DeliveryBusinessDayRangeRequestInput](../models/DeliveryBusinessDayRangeRequestInput.md#deliverybusinessdayrangerequestinput) | Business days the order spends in transit. A minimum and maximum number of business days, used in transit time estimates. |

