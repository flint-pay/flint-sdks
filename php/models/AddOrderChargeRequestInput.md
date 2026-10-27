[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## AddOrderChargeRequestInput

The request body for: Add order charge.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `charge` | Required | [OrderChargeRequestInput](../models/OrderChargeRequestInput.md#orderchargerequestinput) | A charge you add to an order, such as a delivery or service fee, set as a fixed amount or a percentage with its tax settings. |
| `expected_version` | Optional | integer string | Optional order version from the last order read. The mutation fails if the order changed. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. |

