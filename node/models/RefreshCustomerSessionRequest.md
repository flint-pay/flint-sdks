[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RefreshCustomerSessionRequest

The request body for: Refresh a customer session.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `refresh_token` | Required | string | The `refresh_token` returned when the session was created or last refreshed. It works once; the response carries the next one. minLength: `1`. |

