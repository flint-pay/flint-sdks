[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SimulateDisputeRequest

The request body for: Simulate a dispute outcome.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `outcome` | Required | string | The ruling to simulate. `won` and `lost` decide a chargeback; `inquiry_closed` and `escalated` decide an inquiry. Values: `"won"`, `"lost"`, `"inquiry_closed"`, `"escalated"`. |

