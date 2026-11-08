[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CLIReauthorizeRequestInput

The request body for: Review CLI session consent.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `client_id` | Required | string | Values: `"flint-cli"`. |
| `context_id` | Optional | string | minLength: `1`. |
| `device_name` | Optional | string | Optional compatibility field for the computer name sent by released Flint CLI versions. Accepted and ignored. |
| `merchant_id` | Optional | string |  |
| `mode` | Optional | string | Values: `"test"`, `"live"`. |
| `platform` | Optional | string | Optional compatibility field for the operating system sent by released Flint CLI versions. Accepted and ignored. |
| `refresh_token` | Required | string |  |
| `sandbox_id` | Optional | string |  |
| `scope` | Required | string | Required space-separated public API scope names. Only requested scopes approved in the browser are granted. Normal login sends x-flint-cli-bootstrap-scopes; explicit requests may use x-flint-cli-allowed-scopes. Unsupported scopes return invalid_scope. minLength: `1`. |
| `scope_mode` | Optional | string | Values: `"additive"`. |
| `session_mode` | Required | string | Values: `"contexts"`. |

