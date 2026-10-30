[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryRateCallbackConfigurationPatchRequestInput

Only the keys you send change; keys you leave out keep their current values. Null restores a key's default, as each field describes. The result must be a configuration you could create. Requires expected_version. An empty configuration is invalid.

minProperties: `1`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `maximum_request_bytes` | Optional | integer or null | Null restores 262144 bytes. Format: `int64`. minimum: `1`. maximum: `1048576`. |
| `maximum_response_bytes` | Optional | integer or null | Null restores 262144 bytes. Format: `int64`. minimum: `1`. maximum: `1048576`. |
| `preview_enabled` | Optional | boolean or null | Null restores false. |
| `redirect_policy` | Optional | string or null | Null restores reject. Values: `"reject"`, `null`. |
| `request_timeout_seconds` | Optional | number or null | Null restores 2 seconds. minimum: `0.1`. maximum: `10`. |
| `url` | Optional | string | Null is invalid. minLength: `1`. |

