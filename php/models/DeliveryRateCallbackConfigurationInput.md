[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryRateCallbackConfigurationInput

Settings for a delivery rate callback: the endpoint `url` Flint calls, request timeout, request and response size limits, redirect policy, and whether previews can use it.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `maximum_request_bytes` | Optional | integer | Maximum callback request body size in bytes. Defaults to 262144; accepts 1 through 1048576. Format: `int64`. minimum: `1`. maximum: `1048576`. Default: `262144`. |
| `maximum_response_bytes` | Optional | integer | Maximum callback response body size in bytes. Defaults to 262144; accepts 1 through 1048576. Format: `int64`. minimum: `1`. maximum: `1048576`. Default: `262144`. |
| `preview_enabled` | Optional | boolean | Whether delivery previews call this callback. Previews call it only when this setting and `preview_enabled` on the delivery method are both `true`. Defaults to `false`. Default: `false`. |
| `redirect_policy` | Optional | string | What Flint does when the callback responds with an HTTP redirect. Defaults to `reject`. Default: `"reject"`. Values: `"reject"`. |
| `request_timeout_seconds` | Optional | number | Maximum time to wait for the callback response, in seconds. Defaults to 2; accepts 0.1 through 10. minimum: `0.1`. maximum: `10`. Default: `2`. |
| `url` | Required | string | HTTPS URL that Flint calls to get a delivery rate. minLength: `1`. |

