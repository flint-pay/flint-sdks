[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## MerchantAccountSessionRefreshRequest

Refreshes a merchant account session from its signed launch token. No create fields are accepted.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `launch_token` | Required | string | The `launch_token` of the session to refresh. The response carries a new token to use for the next refresh. minLength: `1`. |

