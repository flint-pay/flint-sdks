[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryTransitTimeRuleRequestRequestInput

Estimate rule giving a delivery method's handling time and transit time as ranges of business days.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `handling_days` | Required | [DeliveryBusinessDayRangeRequestRequestInput](../models/DeliveryBusinessDayRangeRequestRequestInput.md#deliverybusinessdayrangerequestrequestinput) | A minimum and maximum number of business days, used in transit time estimates. |
| `transit_days` | Required | [DeliveryBusinessDayRangeRequestRequestInput](../models/DeliveryBusinessDayRangeRequestRequestInput.md#deliverybusinessdayrangerequestrequestinput) | A minimum and maximum number of business days, used in transit time estimates. |

