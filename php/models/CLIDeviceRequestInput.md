[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CLIDeviceRequestInput

The request body for: Start CLI browser login.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `client_id` | Required | string | Example: `"flint-cli"`. Values: `"flint-cli"`. |
| `device_name` | Optional | string | Optional compatibility field for the computer name sent by released Flint CLI versions. Accepted and ignored. |
| `merchant_id` | Optional | string | ID of the merchant this resource belongs to. Example: `"mer_01KEZF7C00KPYH1DDFPCCX3B6E"`. |
| `mode` | Optional | string | Environment used for this resource or request. Values: `"test"`, `"live"`. |
| `platform` | Optional | string | Optional compatibility field for the operating system sent by released Flint CLI versions. Accepted and ignored. |
| `sandbox_id` | Optional | string | ID of the sandbox this resource belongs to. Example: `"test_01KEZF7C00JC77HTMTB2XHNPE0"`. |
| `scope` | Required | string | Required space-separated public API scope names. Only requested scopes approved in the browser are granted. Request the scopes the CLI needs from x-flint-cli-allowed-scopes. Unsupported scopes return invalid_scope. minLength: `1`. |
| `session_mode` | Optional | string | Creates a session with selectable merchant and environment contexts. Defaults to contexts when omitted. Default: `"contexts"`. Values: `"contexts"`. |

