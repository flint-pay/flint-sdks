[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryTransitTimeRule

Estimate rule giving a delivery method's handling time and transit time as ranges of business days.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `handling_days` | Required | [DeliveryBusinessDayRange](../models/DeliveryBusinessDayRange.md#deliverybusinessdayrange) | A minimum and maximum number of business days, used in transit time estimates. |
| `transit_days` | Required | [DeliveryBusinessDayRange](../models/DeliveryBusinessDayRange.md#deliverybusinessdayrange) | A minimum and maximum number of business days, used in transit time estimates. |

