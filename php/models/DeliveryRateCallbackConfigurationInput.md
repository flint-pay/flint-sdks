[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryRateCallbackConfigurationInput

Settings for a delivery rate callback: the endpoint `url` Flint calls, request timeout, request and response size limits, redirect policy, and whether previews can use it.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `maximum_request_bytes` | Optional | integer | Format: `int64`. minimum: `1`. maximum: `1048576`. Default: `262144`. |
| `maximum_response_bytes` | Optional | integer | Format: `int64`. minimum: `1`. maximum: `1048576`. Default: `262144`. |
| `preview_enabled` | Optional | boolean | Default: `false`. |
| `redirect_policy` | Optional | string | Default: `"reject"`. Values: `"reject"`. |
| `request_timeout_seconds` | Optional | number | minimum: `0.1`. maximum: `10`. Default: `2`. |
| `url` | Required | string | minLength: `1`. |

