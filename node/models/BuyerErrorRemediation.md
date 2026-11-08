[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerErrorRemediation

Guidance for recovering from a payment error: whether and how to retry (`retry`), and optional next steps.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `next_steps` | Optional | string | What to change or check before attempting the operation again. |
| `retry` | Required | string | Whether sending this request again can succeed, and how. It depends only on code and details[0].reason; the errors reference lists the value for each. Values: `"same_request"`, `"after_refresh"`, `"none"`. |

