[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryBusinessDayRangeRequestInput

A minimum and maximum number of business days, used in transit time estimates.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `maximum` | Required | integer | Most business days, from `minimum` to 365. |
| `minimum` | Required | integer | Fewest business days, from 0. |

