[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CLIDeviceRequest

The request body for: Start CLI browser login.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `client_id` | Required | string | Values: `"flint-cli"`. |
| `device_name` | Optional | string | Optional compatibility field for the computer name sent by released Flint CLI versions. Accepted and ignored. |
| `merchant_id` | Optional | string |  |
| `mode` | Optional | string | Values: `"test"`, `"live"`. |
| `platform` | Optional | string | Optional compatibility field for the operating system sent by released Flint CLI versions. Accepted and ignored. |
| `sandbox_id` | Optional | string |  |
| `scope` | Required | string | Required space-separated public API scope names. Only requested scopes approved in the browser are granted. Normal login sends x-flint-cli-bootstrap-scopes; explicit requests may use x-flint-cli-allowed-scopes. Unsupported scopes return invalid_scope. minLength: `1`. |
| `session_mode` | Optional | string | Values: `"contexts"`. |

