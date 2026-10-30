[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## AddOrderChargeRequest

The request body for: Add order charge.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `charge` | Required | [OrderChargeRequest](../models/OrderChargeRequest.md#orderchargerequest) | A charge you add to an order, such as a delivery or service fee, set as a fixed amount or a percentage with its tax settings. |
| `expected_version` | Optional | integer | Optional order version from the last order read. The mutation fails if the order changed. Format: `int64`. minimum: `1`. |

