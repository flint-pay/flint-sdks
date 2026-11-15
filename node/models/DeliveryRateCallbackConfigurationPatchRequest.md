[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryRateCallbackConfigurationPatchRequest

Patch object: fields you send are applied, fields you omit are unchanged. Null restores a key's default, as each field describes. The result must be a configuration you could create. An empty configuration is invalid. Publishes a new immutable revision, even when the values are unchanged, and requires expected_version. minProperties: `1`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `maximum_request_bytes` | Optional | integer or null | Maximum callback request body size in bytes. Defaults to 262144; accepts 1 through 1048576. Null restores 262144 bytes. Format: `int64`. minimum: `1`. maximum: `1048576`. |
| `maximum_response_bytes` | Optional | integer or null | Maximum callback response body size in bytes. Defaults to 262144; accepts 1 through 1048576. Null restores 262144 bytes. Format: `int64`. minimum: `1`. maximum: `1048576`. |
| `preview_enabled` | Optional | boolean or null | Whether delivery previews call this callback. Previews call it only when this setting and `preview_enabled` on the delivery method are both `true`. Defaults to `false`. Null restores false. |
| `redirect_policy` | Optional | string or null | What Flint does when the callback responds with an HTTP redirect. Defaults to `reject`. Null restores reject. Values: `"reject"`, `null`. |
| `request_timeout_seconds` | Optional | number or null | Maximum time to wait for the callback response, in seconds. Defaults to 2; accepts 0.1 through 10. Null restores 2 seconds. minimum: `0.1`. maximum: `10`. |
| `url` | Optional | string | HTTPS URL that Flint calls to get a delivery rate. Null is invalid. minLength: `1`. |

